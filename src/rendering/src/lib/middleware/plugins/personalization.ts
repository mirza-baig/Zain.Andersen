import { NextRequest, NextResponse } from 'next/server';
import { PersonalizationMiddleware } from 'lib/personalization';
import { MiddlewarePlugin } from '..';
import config from 'temp/config';
import { siteResolver } from 'lib/site-resolver';

/**
 * This is the personalize middleware plugin for Next.js.
 * It is used to enable Sitecore personalization of pages in Next.js.
 *
 * The `PersonalizationMiddleware` will
 *  1. Make a call to the Sitecore Experience Edge to get the personalization information about the page.
 *  2. Based on the response, make a call to the Sitecore CDP (with request/user context) to determine the page variant.
 *  3. Rewrite the response to the specific page variant.
 */
class PersonalizationPlugin implements MiddlewarePlugin {
  private personalizationMiddleware: PersonalizationMiddleware;

  // Using 20 to leave room for things like rewrites and redirects to occur first
  order = 20;

  constructor() {
    this.personalizationMiddleware = new PersonalizationMiddleware({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
      // This function determines if the middleware should be turned off.
      // You may wish to keep it disabled while in development mode.
      //disabled: () => process.env.NODE_ENV === 'development',
      disabled: () => false,
      // This function determines if a route should be excluded from personalization.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: () => false,
      // Site resolver implementation
      siteResolver,
    });
  }

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return this.personalizationMiddleware.getHandler()(req, res);
  }
}

export const personalizationPlugin = new PersonalizationPlugin();
