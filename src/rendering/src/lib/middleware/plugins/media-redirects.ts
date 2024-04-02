import { NextRequest, NextResponse } from 'next/server';
// import { RedirectsMiddleware } from 'lib/jss21.2.1/middleware';
import config from 'temp/config';
import { MiddlewarePlugin } from '..';
import { siteResolver } from 'lib/site-resolver';
import { MediaRedirectsMiddleware } from 'lib/redirects/media-redirects-middleware';

class MediaRedirectsPlugin implements MiddlewarePlugin {
  private mediaRedirectsMiddleware: MediaRedirectsMiddleware;
  order = 11;

  constructor() {
    this.mediaRedirectsMiddleware = new MediaRedirectsMiddleware({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
      // These are all the locales you support in your application.
      // These should match those in your next.config.js (i18n.locales).
      locales: ['en'],
      // This function determines if a route should be excluded from RedirectsMiddleware.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: (pathname: string) =>
        // Only ignore media redirect when EW_IGNORE_MEDIA_REDIRECT is set (i.e. on preview site)
        !!(
          process.env.EW_IGNORE_MEDIA_REDIRECT &&
          (pathname.startsWith('/-/media') || pathname.startsWith('/~/media'))
        ),

      // This function determines if the middleware should be turned off.
      // By default it is disabled while in development mode.
      disabled: () => false,
      // Site resolver implementation
      siteResolver,
    });
  }

  /**
   * exec async method - to find coincidence in url.pathname and redirects of site
   * @param req<NextRequest>
   * @returns Promise<NextResponse>
   */
  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return this.mediaRedirectsMiddleware.getHandler()(req, res);
  }
}

export const mediaRedirectsPlugin = new MediaRedirectsPlugin();
