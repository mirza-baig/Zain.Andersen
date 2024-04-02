// import { SiteInfo, SiteResolver } from '@sitecore-jss/sitecore-jss-nextjs/site';
import { SiteInfo, SiteResolver } from 'lib/jss21.2.1/site';
import * as plugins from 'temp/site-resolver-plugins';

/*
  The site resolver stores site information and is used in the app
  whenever site lookup is required (e.g. by name in page props factory
  or by host in Next.js middleware).

  By default, the app is single-site (one JSS app per Sitecore site).
  However, multi-site is available with the `nextjs-multisite` add-on.
*/

export interface SiteResolverPlugin {
  /**
   * Detect order when the plugin should be called, e.g. 0 - will be called first (can be a plugin which data is required for other plugins)
   */
  order: number;
  /**
   * A function which will be called during sites collection
   */
  exec(sites: SiteInfo[]): SiteInfo[];
}

const sites = (Object.values(plugins) as SiteResolverPlugin[])
  .sort((p1, p2) => p1.order - p2.order)
  .reduce((sites, plugin) => plugin.exec(sites), []);

export const siteResolver = new SiteResolver(sites);
