import { SiteInfo } from 'lib/jss21.2.1/site';
import { CookieInfo, SourcingCookiesPlugin } from '..';

//RbA Query String based on the prefixes.
export const QueryStringToCookieMapping: { [key: string]: string[] } = {
  queryString_prefix: ['RbA', 'lpr', 'st-t'],
};

const expiryTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString(); //for RbA: 7 days

export class RenewalByAndersen implements SourcingCookiesPlugin {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exec(searchParams: URLSearchParams, site: SiteInfo, _location: Location): CookieInfo[] {
    if (site.name !== 'RenewalbyAndersen') {
      return [];
    }

    const cookiesToSet: CookieInfo[] = [];

    Object.keys(QueryStringToCookieMapping).forEach((key) => {
      const prefixList = QueryStringToCookieMapping[key];
      searchParams.forEach((value, queryKey) => {
        const lowercaseQueryKey = queryKey.toLowerCase();
        prefixList.forEach((prefix) => {
          if (lowercaseQueryKey.startsWith(prefix.toLowerCase())) {
            cookiesToSet.push({ name: lowercaseQueryKey, value: value, expiryTime: expiryTime });
          }
        });
      });
    });

    return cookiesToSet;
  }
}

export const renewalByAndersenPlugin = new RenewalByAndersen();
