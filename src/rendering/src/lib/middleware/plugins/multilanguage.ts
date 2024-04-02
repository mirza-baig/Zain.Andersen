import { NextRequest, NextResponse } from 'next/server';
import { MiddlewarePlugin } from '..';
import pkg from 'package.json';
import { siteResolver } from 'lib/site-resolver';
import { MiddlewareBase, MiddlewareBaseConfig } from 'lib/jss21.2.1/middleware/middleware';
import { Debug } from 'lib/constants';

export type MultilanguageMiddlewareConfig = Omit<MiddlewareBaseConfig, 'disabled'>;

/**
 * Middleware / handler for Multilanguage support
 */
export class MultilanguageMiddleware extends MiddlewareBase {
  /**
   * @param {MultilanguageMiddlewareConfig} [config] Multilanguage middleware config
   */
  constructor(protected config: MultilanguageMiddlewareConfig) {
    super(config);
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
        console.log('Multilanguage middleware failed:');
        console.log(error);
        return res || NextResponse.next();
      }
    };
  }

  private handler = async (req: NextRequest, res?: NextResponse): Promise<NextResponse> => {
    let response = res || NextResponse.next();

    Debug.multilanguage('multilanguage middleware start: %o', {
      locale: req.nextUrl.locale,
    });

    if (response?.status > 300 && response?.status < 400) {
      Debug.multilanguage('skipped (redirected)');

      return response;
    }

    if (req.nextUrl.locale !== 'default') {
      Debug.multilanguage('skipped (locale is not default)');

      return response;
    }

    const localeCookie = req.cookies.get('NEXT_LOCALE');

    const site = this.getSite(req, res);

    const locale = localeCookie || site.language || pkg.config.language;

    const pathname = req.nextUrl.pathname;

    // Path can be rewritten by previously executed middleware
    const basePath = res?.headers.get('x-sc-rewrite') || pathname;

    const rewritePath = `/${locale}${basePath}`;

    // Note an absolute URL is required: https://nextjs.org/docs/messages/middleware-relative-urls
    const rewriteUrl = req.nextUrl.clone();

    rewriteUrl.pathname = rewritePath;

    response = NextResponse.rewrite(rewriteUrl, res);

    response.cookies.set('NEXT_LOCALE', locale);

    Debug.multilanguage('multilanguage middleware end: %o', {
      rewritePath,
      locale,
      headers: this.extractDebugHeaders(response.headers),
      cookies: response.cookies,
    });

    return response;
  };
}

/**
 * This is the multilanguage middleware plugin for Next.js.
 * It is used to enable multilanguage in Next.js.
 *
 * Based on the detected language, if it's `default`, the `MultilanguageMiddleware` will
 *  1. Determine the default language for the site.
 *  2. Rewrite the response to the specific affiliate.
 *  3. Set the `NEXT_LOCALE` cookie.
 */
export class MultilanguagePlugin implements MiddlewarePlugin {
  private multilanguageMiddleware: MultilanguageMiddleware;

  // Need to be before redirects but after others
  order = 9; //Number.MAX_SAFE_INTEGER;

  constructor() {
    this.multilanguageMiddleware = new MultilanguageMiddleware({
      // This function determines if a route should be excluded from language resolution.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: () => false,
      // Site resolver implementation
      siteResolver,
    });
  }

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return this.multilanguageMiddleware.getHandler()(req, res);
  }
}

export const multilanguagePlugin = new MultilanguagePlugin();
