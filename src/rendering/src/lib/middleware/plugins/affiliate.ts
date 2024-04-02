import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';
import { siteResolver } from 'lib/site-resolver';
import { AffiliateMiddleware } from 'lib/affiliate/affiliate-middleware';

/**
 * This is the multisite middleware plugin for Next.js.
 * It is used to enable Affiliates in Next.js.
 *
 * The `AffiliateMiddleware` will
 *  1. Based on the users IP address, determine their geographic location and assigned affiliate.
 *  2. Rewrite the response to the specific affiliate.
 *  3. Set `ew_affiliate` cookie with the affiliate id
 *  4. Set the `x-sc-rewrite` header with rewritten path and `x-ew-affiliate` header with the affiliate id to be reused in following middlewares.
 */
class AffiliatePlugin implements MiddlewarePlugin {
  private affiliateMiddleware: AffiliateMiddleware;

  // Multisite middleware has to be executed first
  order = 0;

  constructor() {
    this.affiliateMiddleware = new AffiliateMiddleware({
      // This function determines if a route should be excluded from affiliate resolution.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: () => false,
      // Site resolver implementation
      siteResolver,
    });
  }

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return this.affiliateMiddleware.getHandler()(req, res);
  }
}

export const affiliatePlugin = new AffiliatePlugin();
