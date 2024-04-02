import { SiteInfo } from 'lib/jss21.2.1/site';
import { CookieInfo, SourcingCookiesPlugin } from '..';

// for AW: Query String and the corresponding cookie name
const CookieMappings: { [key: string]: string } = {
  sourceKey: 'awSourceKey',
};

const expiryTime = ''; // for AW : cookie will be removed at the end of the session

export class AndersenWindows implements SourcingCookiesPlugin {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exec(searchParams: URLSearchParams, site: SiteInfo, _location: Location): CookieInfo[] {
    if (site.name !== 'AndersenWindows') {
      return [];
    }

    const cookiesToSet: CookieInfo[] = [];

    searchParams.forEach((value, key) => {
      const lowercaseKey = key.toLowerCase();
      const cookieMappingKey = Object.keys(CookieMappings).find(
        (mappingKey) => mappingKey.toLowerCase() === lowercaseKey
      );

      if (cookieMappingKey) {
        cookiesToSet.push({ name: CookieMappings[cookieMappingKey], value, expiryTime });
      }
    });

    return cookiesToSet;
  }
}

export const andersenWindowsPlugin = new AndersenWindows();
