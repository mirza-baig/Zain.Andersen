import { EwSiteInfo } from 'lib/site/ew-site-info';
import * as plugins from 'src/temp/sitemap-xml-plugins';

/**
 * The schema of data returned in response to sitemaps request
 */
export type SitemapPath = {
  siteName: string;
  language: string;
  path: string;
  lastUpdated?: string;
  priority: string;
  changeFrequency: string;
};

export interface Plugin {
  /**
   * A function which will be called during page props generation
   */
  exec(site: EwSiteInfo): Promise<SitemapPath[]>;
}

export class SitemapXmlPathFetcher {
  public async fetch(site: EwSiteInfo): Promise<SitemapPath[]> {
    const pluginsList = Object.values(plugins) as Plugin[];
    const pluginsResults = await Promise.all(pluginsList.map((plugin) => plugin.exec(site)));
    const results = pluginsResults.reduce((acc, cur) => [...acc, ...cur], []);
    return results;
  }
}

export const sitemapXmlPathFetcher = new SitemapXmlPathFetcher();
