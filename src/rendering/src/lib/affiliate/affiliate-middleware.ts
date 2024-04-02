import { NextResponse, NextRequest } from 'next/server';

import { MiddlewareBase, MiddlewareBaseConfig } from 'lib/jss21.2.1/middleware/middleware';
import { getAffiliateRewrite } from './utils';
import {
  AffiliateGeolocationApiResponse,
  defaultAffiliateGeolocationProps,
} from 'lib/affiliate/geolocation';
import { APIs } from 'lib/constants';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { Debug } from 'lib/constants/debug';

export type AffiliateMiddlewareConfig = Omit<MiddlewareBaseConfig, 'disabled'>;

/**
 * Middleware / handler for affiliate support
 */
export class AffiliateMiddleware extends MiddlewareBase {
  protected AFFILIATE_SYMBOL = 'ew_affiliate';

  protected CURRENTZIP_SYMBOL = 'currentZip';

  /**
   * @param {AffiliateMiddlewareConfig} [config] Afifliate middleware config
   */
  constructor(protected config: AffiliateMiddlewareConfig) {
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
        console.log('Affiliate middleware failed:');
        console.log(error);
        return res || NextResponse.next();
      }
    };
  }

  hasAffiliatePersonalization(req: NextRequest, res?: NextResponse) {
    const siteInfo = this.getSite(req, res) as EwSiteInfo;
    return siteInfo.hasAffiliatePersonalization?.toLowerCase() === 'true';
  }

  private handler = async (req: NextRequest, res?: NextResponse): Promise<NextResponse> => {
    const pathname = req.nextUrl.pathname;
    const hostname = this.getHostHeader(req) || this.defaultHostname;
    const ip = req.ip || req.headers.get('x-forwarded-for')?.split(',')[0];

    Debug.affiliates('affiliate middleware start: %o', {
      pathname,
      hostname,
      ip,
    });

    // Response will be provided if other middleware is run before us
    let response = res || NextResponse.next();

    // Path can be rewritten by previously executed middleware
    const basePath = res?.headers.get('x-sc-rewrite') || pathname;

    if (
      this.isPreview(req) ||
      this.excludeRoute(pathname) ||
      !this.hasAffiliatePersonalization(req, res)
    ) {
      Debug.affiliates(
        'skipped (%s)',
        this.isPreview(req)
          ? 'preview'
          : this.excludeRoute(pathname)
          ? 'route excluded'
          : 'no affiliate personalization'
      );
      return response;
    }

    // Site name can be forced by query string parameter or cookie
    let affiliateId =
      req.nextUrl.searchParams.get(this.AFFILIATE_SYMBOL) || req.cookies.get(this.AFFILIATE_SYMBOL);

    let currentzip =
      req.nextUrl.searchParams.get(this.CURRENTZIP_SYMBOL) ||
      req.cookies.get(this.CURRENTZIP_SYMBOL);

    if (!currentzip) {
      const affiliateGeolocationResponse = await this.getAffiliateIdFromGeo(req);
      affiliateId = affiliateId || affiliateGeolocationResponse?.affiliateId;
      currentzip = affiliateGeolocationResponse?.zipcode;
    }

    if (currentzip) {
      response.cookies.set(this.CURRENTZIP_SYMBOL, currentzip);
    }

    // Rewrite to site specific path
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rewritePath = getAffiliateRewrite(basePath, affiliateId!);

    // Note an absolute URL is required: https://nextjs.org/docs/messages/middleware-relative-urls
    const rewriteUrl = req.nextUrl.clone();

    rewriteUrl.pathname = rewritePath;

    response = NextResponse.rewrite(rewriteUrl, res);

    // Share site name with the following executed middlewares
    response.cookies.set(this.AFFILIATE_SYMBOL, affiliateId);

    // Update the rewrite path
    response.headers.set('x-sc-rewrite', rewritePath);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    response.headers.set('x-ew-affiliate', affiliateId!);

    Debug.affiliates('affiliate middleware end: %o', {
      rewritePath,
      affiliateId,
      headers: this.extractDebugHeaders(response.headers),
      cookies: response.cookies,
    });

    return response;
  };

  async getAffiliateIdFromGeo(req: NextRequest): Promise<{ affiliateId: string; zipcode: string }> {
    let geoResponse: AffiliateGeolocationApiResponse = {};
    try {
      const ip = req.ip || req.headers.get('x-forwarded-for')?.split(',')[0];
      const requestOptions = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'X-API-KEY': process.env.EW_ENTERPRISE_WEB_API_KEY || '',
        },
      };
      const geo = await fetch(`${APIs.RBA.Geolocation.Endpoint}?ip=${ip}`, requestOptions);
      geoResponse = await geo.json();

      if (geoResponse?.data?.postalCode) {
        return {
          affiliateId: geoResponse?.data?.affiliateId
            ? geoResponse?.data?.affiliateId.toString()
            : defaultAffiliateGeolocationProps.affiliateId.toString(),
          zipcode: geoResponse?.data?.postalCode,
        };
      } else {
        Debug.affiliates(
          `No geolocation data for ${ip}`,
          `Geo API response: ${JSON.stringify(geoResponse)}`
        );
        return {
          affiliateId: defaultAffiliateGeolocationProps.affiliateId.toString(),
          zipcode: '',
        };
      }
    } catch (e) {
      Debug.affiliates(e, `Geo API response: ${JSON.stringify(geoResponse)}`);
      return {
        affiliateId: defaultAffiliateGeolocationProps.affiliateId.toString(),
        zipcode: '',
      };
    }
  }
}
