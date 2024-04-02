import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';
import { siteResolver } from 'lib/site-resolver';
import { RbaJobDetailsRedirectsMiddleware } from '../../redirects/rba-jobdetails-redirects-middleware';

class RbaJobDetailsRedirectsPlugin implements MiddlewarePlugin {
  private jobDetailsRedirectMiddleware: RbaJobDetailsRedirectsMiddleware;
  order = 9;

  constructor() {
    this.jobDetailsRedirectMiddleware = new RbaJobDetailsRedirectsMiddleware({
      // These are all the locales you support in your application.
      // These should match those in your next.config.js (i18n.locales).
      // This function determines if a route should be excluded from RedirectsMiddleware.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: (pathname: string) =>
        // Ignore media, because we handle that separately in a media redirect middleware
        pathname.startsWith('/-/media'),

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
    return this.jobDetailsRedirectMiddleware.getHandler()(req, res);
  }
}

export const rbaJobdetailsRedirectsPlugin = new RbaJobDetailsRedirectsPlugin();
