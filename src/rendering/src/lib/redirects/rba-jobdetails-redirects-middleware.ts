import { NextResponse, NextRequest } from 'next/server';
import { MiddlewareBase, MiddlewareBaseConfig } from 'lib/jss21.2.1/middleware/middleware';

export type RbaJobDetailsRedirectsMiddlewareConfig = Omit<MiddlewareBaseConfig, 'fetch'> & {
  /**
   * Function used to determine if site should be resolved from sc_site cookie when present
   */
};

/**
 * Middleware / handler for multisite support
 */
export class RbaJobDetailsRedirectsMiddleware extends MiddlewareBase {
  /**
   * @param {MultisiteMiddlewareConfig} [config] Multisite middleware config
   */
  constructor(protected config: RbaJobDetailsRedirectsMiddlewareConfig) {
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
        console.log('Jobdetails middleware failed:');
        console.log(error);
        return res || NextResponse.next();
      }
    };
  }

  private handler = async (req: NextRequest, res?: NextResponse): Promise<NextResponse> => {
    const pathname = req.nextUrl?.pathname?.toLowerCase();
    const param = new URLSearchParams(
      Array.from(req.nextUrl?.searchParams, ([key, value]) => [key.toLowerCase(), value])
    );

    const jobId = param?.get('jobid') ?? '';
    // Add a condition to check for the specific route
    if (!(pathname === '/careers/job-details-page/') || jobId === '') {
      return res || NextResponse.next();
    }
    const regex = new RegExp(
      '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$'
    );
    if (regex.test(jobId)) {
      const searchParams = new URLSearchParams(param.toString());
      const queryStringValuesObject: { [key: string]: string } = {};
      if (searchParams.entries()) {
        for (const [key, value] of searchParams.entries()) {
          if (key.toLowerCase() !== 'jobid') {
            queryStringValuesObject[key as string] = value;
          }
        }
      }

      // Redirect to the appropriate URL format
      let redirectUrl = `/careers/${jobId}/`;
      const url = new URL(req.nextUrl.href);
      url.search = '';
      Object.keys(queryStringValuesObject).forEach((key: keyof typeof queryStringValuesObject) => {
        redirectUrl = !redirectUrl.includes('?') ? redirectUrl + '?' : redirectUrl.concat('&');
        redirectUrl = redirectUrl.concat(`${String(key)}=${queryStringValuesObject[key]}`);
      });
      url.pathname = redirectUrl;
      //url.hash = ''; #parameter getting appended in the url, # doesn't work on server side, since # is not recognized by server.
      return NextResponse.redirect(url, 301);
    }
    return res || NextResponse.next();
  };
}
