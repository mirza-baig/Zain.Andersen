import regexParser from 'regex-parser';
import { NextResponse, NextRequest } from 'next/server';
import {
  GraphQLRedirectsService,
  GraphQLRedirectsServiceConfig,
} from '../site/graphql-redirects-service-10-2';
import { debug } from '@sitecore-jss/sitecore-jss';
import { MiddlewareBase, MiddlewareBaseConfig } from 'lib/jss21.2.1/middleware/middleware';
import { SiteInfo } from 'lib/jss21.2.1/site';
import {
  REDIRECT_TYPE_301,
  REDIRECT_TYPE_302,
  REDIRECT_TYPE_SERVER_TRANSFER,
  RedirectInfo,
} from '@sitecore-jss/sitecore-jss/site';
import { a } from 'msw/lib/glossary-de6278a9';
// import { MiddlewareBase, MiddlewareBaseConfig } from './middleware';
// import { SiteInfo } from '../site';

const REGEXP_CONTEXT_SITE_LANG = new RegExp(/\$siteLang/, 'gi');

/**
 * extended RedirectsMiddlewareConfig config type for RedirectsMiddleware
 */
export type RedirectsMiddlewareConfig = Omit<GraphQLRedirectsServiceConfig, 'fetch'> &
  MiddlewareBaseConfig & {
    /**
     * These are all the locales you support in your application.
     * These should match those in your next.config.js (i18n.locales).
     */
    locales: string[];
  };
/**
 * Middleware / handler fetches all redirects from Sitecore instance by grapqhl service
 * compares with current url and redirects to target url
 */
export class RedirectsMiddleware extends MiddlewareBase {
  private redirectsService: GraphQLRedirectsService;
  private locales: string[];

  /**
   * @param {RedirectsMiddlewareConfig} [config] redirects middleware config
   */
  constructor(protected config: RedirectsMiddlewareConfig) {
    super(config);

    // NOTE: we provide native fetch for compatibility on Next.js Edge Runtime
    // (underlying default 'cross-fetch' is not currently compatible: https://github.com/lquixada/cross-fetch/issues/78)
    this.redirectsService = new GraphQLRedirectsService({ ...config, fetch: fetch });
    this.locales = config.locales;
  }

  /**
   * Gets the Next.js middleware handler with error handling
   * @returns route handler
   */
  public getHandler(): (req: NextRequest, res?: NextResponse) => Promise<NextResponse> {
    return async (req, res) => {
      try {
        console.log('middleware started');
        // console.log(await this.handler(req, res));
        return await this.handler(req, res);
      } catch (error) {
        console.log('Redirect middleware failed:');
        console.log(error);
        return res || NextResponse.next();
      }
    };
  }

  // Override base function to NOT exclude files
  protected excludeRoute(pathname: string) {
    return (
      // This is removed already in future versions so commenting out is future compatible.
      // pathname.includes('.') || // Ignore files
      pathname.startsWith('/api/') || // Ignore Next.js API calls
      pathname.startsWith('/sitecore/') || // Ignore Sitecore API calls
      pathname.startsWith('/_next') || // Ignore next service calls
      (this.config?.excludeRoute && this.config?.excludeRoute(pathname))
    );
  }

  private handler = async (req: NextRequest, res?: NextResponse): Promise<NextResponse> => {
    const pathname = req.nextUrl.pathname;
    const language = this.getLanguage(req);
    const hostname = this.getHostHeader(req) || this.defaultHostname;
    let site: SiteInfo | undefined;

    debug.redirects('redirects middleware start: %o', {
      pathname,
      language,
      hostname,
    });

    const createResponse = async () => {
      if (this.config.disabled && this.config.disabled(req, NextResponse.next())) {
        debug.redirects('skipped (redirects middleware is disabled)');
        return res || NextResponse.next();
      }

      if (this.isPreview(req) || this.excludeRoute(pathname)) {
        debug.redirects('skipped (%s)', this.isPreview(req) ? 'preview' : 'route excluded');

        return res || NextResponse.next();
      }

      site = this.getSite(req, res);

      // Find the redirect from result of RedirectService
      const existsRedirect = await this.getExistsRedirect(req, site.name);

      if (!existsRedirect) {
        debug.redirects('skipped (redirect does not exist)');

        return res || NextResponse.next();
      }

      // Find context site language and replace token
      if (REGEXP_CONTEXT_SITE_LANG.test(existsRedirect.target)) {
        existsRedirect.target = existsRedirect.target.replace(
          REGEXP_CONTEXT_SITE_LANG,
          site.language
        );
      }

      const url = req.nextUrl.clone();
      const absoluteUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

      // Customized to fix issue with query strings in the redirect target
      const [targetPath, targetQueryString] = existsRedirect.target.split('?');
      const targetParams = new URLSearchParams(targetQueryString);

      const originalParams = new URLSearchParams(
        existsRedirect.isQueryStringPreserved ? url.search : ''
      );

      const newParams = new URLSearchParams({
        ...Object.fromEntries(originalParams),
        ...Object.fromEntries(targetParams),
      });

      url.search = newParams.toString();

      const urlFirstPart = existsRedirect.target.split('/')[1];
      if (this.locales.includes(urlFirstPart)) {
        url.locale = urlFirstPart;
        existsRedirect.target = existsRedirect.target.replace(`/${urlFirstPart}`, '');
      }

      const newUrl = url.pathname
        .replace(regexParser(existsRedirect.pattern), targetPath)
        .replace(/^\/\//, '/');

      // Customized to allow regex replacement to work with absolutel url for targets
      // This is needed to support media redirects to Experience Edge.
      if (absoluteUrlRegex.test(existsRedirect.target)) {
        url.href = newUrl;
        url.locale = req.nextUrl.locale;
      } else {
        url.pathname = newUrl;
      }

      const redirectUrl = decodeURIComponent(url.href);

      /** return Response redirect with http code of redirect type **/
      switch (existsRedirect.redirectType.toUpperCase()) {
        case REDIRECT_TYPE_301:
          return NextResponse.redirect(redirectUrl, 301);
        case REDIRECT_TYPE_302:
          return NextResponse.redirect(redirectUrl, 302);
        case REDIRECT_TYPE_SERVER_TRANSFER:
          return NextResponse.rewrite(redirectUrl);
        default:
          return NextResponse.next();
      }
    };

    const response = await createResponse();

    // Share site name with the following executed middlewares
    // Don't need to set when middleware is disabled
    site && response.cookies.set(this.SITE_SYMBOL, site.name);

    debug.redirects('redirects middleware end: %o', {
      redirected: response.redirected,
      status: response.status,
      url: response.url,
      headers: this.extractDebugHeaders(response.headers),
    });

    return response;
  };

  /**
   * Method returns RedirectInfo when matches
   * @param {NextRequest} req request
   * @param {string} siteName site name
   * @returns Promise<RedirectInfo | undefined>
   * @private
   */
  private async getExistsRedirect(
    req: NextRequest,
    siteName: string
  ): Promise<RedirectInfo | undefined> {
    const redirects = await this.redirectsService.fetchRedirects(siteName);
    const targetUrl = req.nextUrl.pathname.replace(/\/$/, '');
    const targetQS = req.nextUrl.search || '';
    return redirects.length
      ? redirects.find((redirect: RedirectInfo) => {
          if (!redirect.pattern.endsWith('/gi')) {
            redirect.pattern = `/^\/${redirect.pattern
              .replace(/^\/|\/$/g, '')
              .replace(/^\^\/|\/\$$/g, '')
              .replace(/^\^|\$$/g, '')}\/?$/gi`;
          }
          return (
            regexParser(redirect.pattern).test(targetUrl) ||
            regexParser(redirect.pattern).test(`${targetUrl}${targetQS}`) ||
            regexParser(redirect.pattern).test(`/${req.nextUrl.locale}${targetUrl}`) ||
            regexParser(redirect.pattern).test(`/${req.nextUrl.locale}${targetUrl}${targetQS}`)
          );
        })
      : undefined;
  }
}
