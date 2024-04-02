import { useEffect } from 'react';
import { setCookie } from 'lib/utils/client-storage-utils';
import { SiteInfo } from 'lib/jss21.2.1/site';
import * as plugins from 'temp/sourcing-cookies-plugins';

export interface CookieInfo {
  name: string;
  value: string;
  expiryTime: string;
}

export interface SourcingCookiesPlugin {
  /**
   * A function which will be called during path extraction
   */
  exec(searchParams: URLSearchParams, site: SiteInfo, location: Location): CookieInfo[];
}

export const useSourcingCookies = (site: SiteInfo) => {
  useEffect(() => {
    const location = window.location;
    const searchParams = new URLSearchParams(location.search);

    const cookiesToSet = (Object.values(plugins) as SourcingCookiesPlugin[]).reduce(
      (acc, plugin) => {
        const pluginCookies = plugin.exec(searchParams, site, location);
        return [...acc, ...pluginCookies];
      },
      []
    );

    cookiesToSet.forEach((cookie) => {
      setCookie(cookie.name, cookie.value, cookie.expiryTime, '/');
    });
  }, [site]);
};
