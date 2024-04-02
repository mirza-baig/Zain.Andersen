import { MiddlewareBase, MiddlewareBaseConfig } from 'lib/jss21.2.1/middleware/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { Debug } from 'lib/constants/debug';
import {
  GraphQLPersonalizationService,
  GraphQLPersonalizationServiceConfig,
  PageVariantInfo,
  PersonalizationInfo,
} from './graphql-personalization-service';
import { getPersonalizationRewrite } from './utils';
import { RuleContext } from 'lib/rules/rules';
import { personalizationParametersFactory } from './parameters';

/**
 * extended PersonalizationMiddlewareConfig config type for PersonalizationMiddleware
 */
export type PersonalizationMiddlewareConfig = Omit<GraphQLPersonalizationServiceConfig, 'fetch'> &
  MiddlewareBaseConfig;

/**
 * Object model of Experience Context data
 */
export class PersonalizationMiddleware extends MiddlewareBase {
  protected REWRITE_HEADER_NAME = 'x-sc-rewrite';
  private personalizationService: GraphQLPersonalizationService;

  /**
   * @param {PersonalizeMiddlewareConfig} [config] Personalize middleware config
   */
  constructor(protected config: PersonalizationMiddlewareConfig) {
    super(config);

    // NOTE: we provide native fetch for compatibility on Next.js Edge Runtime
    // (underlying default 'cross-fetch' is not currently compatible: https://github.com/lquixada/cross-fetch/issues/78)
    this.personalizationService = new GraphQLPersonalizationService({ ...config, fetch: fetch });
  }

  /**
   * Gets the Next.js middleware handler with error handling
   * @returns middleware handler
   */
  public getHandler(): (req: NextRequest, res?: NextResponse) => Promise<NextResponse> {
    return async (req, res) => {
      try {
        return await this.handler(req, res);
      } catch (error) {
        console.log('Personalize middleware failed:');
        console.log(error);
        return res || NextResponse.next();
      }
    };
  }

  protected async personalize(
    personalizationInfo: PersonalizationInfo,
    context: RuleContext
  ): Promise<PageVariantInfo | undefined> {
    for (const pageVariant of personalizationInfo.pageVariants) {
      pageVariant.rules.runFirstMatching(context);
      if (context.parameters['matched']) {
        return pageVariant;
      }
    }

    return undefined;
  }

  protected excludeRoute(pathname: string): boolean | undefined {
    // ignore files
    return pathname.includes('.') || super.excludeRoute(pathname);
  }

  private handler = async (req: NextRequest, res?: NextResponse): Promise<NextResponse> => {
    const pathname = req.nextUrl.pathname;
    let language = this.getLanguage(req);
    const hostname = this.getHostHeader(req) || this.defaultHostname;
    const startTimestamp = Date.now();

    // Response will be provided if other middleware is run before us (e.g. redirects)
    let response = res || NextResponse.next();

    if (language == 'default') {
      language = 'en';
    }

    Debug.personalization('personalization middleware start: %o', {
      pathname,
      language,
      hostname,
      headers: this.extractDebugHeaders(req.headers),
    });

    if (this.config.disabled && this.config.disabled(req, response)) {
      Debug.personalization('skipped (personalization middleware is disabled)');
      return response;
    }

    if (
      response.redirected || // Don't attempt to personalize a redirect
      this.isPreview(req) || // No need to personalize for preview (layout data is already prepared for preview)
      this.excludeRoute(pathname)
    ) {
      Debug.personalization(
        'skipped (%s)',
        response.redirected ? 'redirected' : this.isPreview(req) ? 'preview' : 'route excluded'
      );
      return response;
    }

    const site = this.getSite(req, response);

    // Get personalization info from Experience Edge
    const personalizationInfo = await this.personalizationService.getPersonalizationInfo(
      pathname,
      language,
      site.name
    );

    if (!personalizationInfo) {
      // Likely an invalid route / language
      Debug.personalization('skipped (personalize info not found)');
      return response;
    }

    if (personalizationInfo.pageVariants.length === 0) {
      Debug.personalization('skipped (no personalization configured)');
      return response;
    }

    // Put together the context for the personalization rules
    let context = new RuleContext();
    context.parameters['pageId'] = personalizationInfo.pageId;
    context.parameters['language'] = language;
    context.parameters['request'] = req;
    context = await personalizationParametersFactory.extend(context, req, res);

    Debug.personalization('executing experience for %s', personalizationInfo.pageId);

    let pageVariantId;

    // Execute targeted experience in Personalize SDK
    // eslint-disable-next-line no-useless-catch
    try {
      const personalization = await this.personalize(personalizationInfo, context);
      pageVariantId = personalization?.id;
    } catch (error) {
      throw error;
    }

    if (!pageVariantId) {
      Debug.personalization('skipped (no variant identified)');
      return response;
    }

    // Path can be rewritten by previously executed middleware
    const basePath = res?.headers.get('x-sc-rewrite') || pathname;

    // Rewrite to persononalized path
    const rewritePath = getPersonalizationRewrite(basePath, { pageVariantId });
    response = this.rewrite(rewritePath, req, response);

    // Disable preflight caching to force revalidation on client-side navigation (personalization may be influenced)
    // See https://github.com/vercel/next.js/issues/32727
    response.headers.set('x-middleware-cache', 'no-cache');

    Debug.personalization(
      'personalization middleware end in %dms: %o',
      Date.now() - startTimestamp,
      {
        rewritePath,
        headers: this.extractDebugHeaders(response.headers),
      }
    );

    return response;
  };

  /**
   * Create a rewrite response
   * @param {string} rewritePath the destionation path
   * @param {NextRequest} req the current request
   * @param {NextResponse} res the current response
   */
  protected rewrite(rewritePath: string, req: NextRequest, res: NextResponse): NextResponse {
    // Note an absolute URL is required: https://nextjs.org/docs/messages/middleware-relative-urls
    const rewriteUrl = req.nextUrl.clone();
    rewriteUrl.pathname = rewritePath;

    const response = NextResponse.rewrite(rewriteUrl, res);

    // Share rewrite path with following executed middlewares
    response.headers.set(this.REWRITE_HEADER_NAME, rewritePath);

    return response;
  }
}
