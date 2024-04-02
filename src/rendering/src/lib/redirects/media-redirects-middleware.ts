import regexParser from 'regex-parser';
import { NextResponse, NextRequest } from 'next/server';
import { GraphQLRedirectsServiceConfig } from '../site/graphql-redirects-service-10-2';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { MiddlewareBase, MiddlewareBaseConfig } from 'lib/jss21.2.1/middleware/middleware';
import {
  REDIRECT_TYPE_301,
  REDIRECT_TYPE_302,
  REDIRECT_TYPE_SERVER_TRANSFER,
  RedirectInfo,
} from '@sitecore-jss/sitecore-jss/site';
import { Debug } from 'lib/constants';

// NOTE: More specific "source" entries should be listed before more generic one
const redirectConfig = [
  {
    source: '/media/AndersenWindows/Files',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/Files',
  },
  {
    source: '/media/AndersenWindows/images',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/Images',
  },
  {
    source: '/media/aw/files',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/Files',
  },
  {
    source: '/media/aw/images',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/Images',
  },

  {
    source: '/media/AHD/Files',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/Files',
  },
  {
    source: '/media/AHD/images',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/Images',
  },
  {
    source: '/media/AHD/PDFs',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/PDFs',
  },

  {
    source: '/media/ALA/Files',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/Files',
  },
  {
    source: '/media/ALA/images',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/Images',
  },

  {
    source: '/media/Stormdoors/Files',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/Files',
  },
  {
    source: '/media/Stormdoors/images',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenHomeDepot/Images',
  },

  {
    source: '/media/HW/files',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/Files',
  },
  {
    source: '/media/HW/images',
    target: '/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/Images/Heritage',
  },
  {
    source: '/media',
    target: '/media',
    redirectType: REDIRECT_TYPE_SERVER_TRANSFER,
  },
];

/**
 * extended RedirectsMiddlewareConfig config type for RedirectsMiddleware
 */
export type MediaRedirectsMiddlewareConfig = Omit<GraphQLRedirectsServiceConfig, 'fetch'> &
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
export class MediaRedirectsMiddleware extends MiddlewareBase {
  private graphQLClient: GraphQLRequestClient;
  private locales: string[];

  /**
   * @param {MediaRedirectsMiddlewareConfig} [config] redirects middleware config
   */
  constructor(protected config: MediaRedirectsMiddlewareConfig) {
    super(config);

    this.graphQLClient = new GraphQLRequestClient(this.config.endpoint, {
      apiKey: this.config.apiKey,
      debugger: Debug.mediaRedirects,
      fetch: fetch,
    });

    this.locales = config.locales;
  }

  /**
   * Gets the Next.js middleware handler with error handling
   * @returns route handler
   */
  public getHandler(): (req: NextRequest, res?: NextResponse) => Promise<NextResponse> {
    return async (req, res) => {
      try {
        return await this.handler(req, res);
      } catch (error) {
        console.error('Media redirect middleware failed:');
        console.error(error);
        return res || NextResponse.next();
      }
    };
  }

  protected excludeRoute(pathname: string) {
    return (
      !(pathname.startsWith('/-/') || pathname.startsWith('/~/')) || // Ignore next service calls
      (this.config?.excludeRoute && this.config?.excludeRoute(pathname))
    );
  }

  private handler = async (req: NextRequest, res?: NextResponse): Promise<NextResponse> => {
    const pathname = req.nextUrl.pathname;
    const language = this.getLanguage(req);
    const hostname = this.getHostHeader(req) || this.defaultHostname;

    Debug.mediaRedirects('media redirects middleware start: %o', {
      pathname,
      language,
      hostname,
    });

    const createResponse = async () => {
      if (this.config.disabled && this.config.disabled(req, NextResponse.next())) {
        Debug.mediaRedirects('skipped (media redirects middleware is disabled)');
        return res || NextResponse.next();
      }

      if (this.isPreview(req) || this.excludeRoute(pathname)) {
        Debug.mediaRedirects('skipped (%s)', this.isPreview(req) ? 'preview' : 'route excluded');

        return res || NextResponse.next();
      }

      // Find the redirect from result of RedirectService
      const existsRedirect = await this.getExistsRedirect(req);

      if (!existsRedirect) {
        Debug.mediaRedirects('skipped (redirect does not exist)');

        return res || NextResponse.next();
      }

      const url = req.nextUrl.clone();

      const targetPath = existsRedirect.target;

      let newUrl = url.pathname
        .replace(regexParser(existsRedirect.pattern), targetPath)
        .replace(/^\/\//, '/');

      // Extract the relative media item path
      const mediaPath = decodeURIComponent(
        newUrl.replace(
          /https:\/\/edge.sitecorecloud.io\/andersencorporation-.+\/media(\/.+)\..+/,
          '$1'
        )
      ).replace(' ', '-');

      // Query to get the real url with the revision id.

      const query = /* GraphQL*/ `
        query {
          item(
            path: "/sitecore/media library${mediaPath}"
            language: "en"
          ) {
            url {
              url
            }
          }
        }
      `;
      const result = await this.graphQLClient.request<{ item?: { url: { url: string } } }>(
        query,
        {}
      );

      if (result.item?.url.url) {
        newUrl = result.item?.url.url;
      } else {
        // If the item isn't found, don't redirect
        Debug.mediaRedirects(
          `skipped (redirect target item does not exist) "/sitecore/media library${mediaPath}"`
        );
        return NextResponse.next();
      }

      // Customized to fix issue with query strings in the redirect target
      const [newPath, targetQueryString] = newUrl.split('?');
      const targetParams = new URLSearchParams(targetQueryString);

      const originalParams = new URLSearchParams(
        existsRedirect.isQueryStringPreserved ? url.search : ''
      );

      const newParams = new URLSearchParams({
        ...Object.fromEntries(targetParams),
        ...Object.fromEntries(originalParams),
      });

      url.href = newPath;
      url.locale = req.nextUrl.locale;

      // Set `search` after `href` otherwise `href` will override it.
      url.search = newParams.toString();

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

    Debug.mediaRedirects('media redirects middleware end: %o', {
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
  private async getExistsRedirect(req: NextRequest): Promise<RedirectInfo | undefined> {
    const redirects: RedirectInfo[] = redirectConfig.map((x) => {
      return {
        pattern: `^/[-~]${x.source}/(.*)?$`,
        target: `https://edge.sitecorecloud.io/andersencorporation-somefakeid${x.target}/$1`,
        redirectType: x.redirectType || REDIRECT_TYPE_301,
        isQueryStringPreserved: true,
      };
    });
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
