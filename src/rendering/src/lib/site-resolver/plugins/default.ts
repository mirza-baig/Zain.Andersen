// import { SiteInfo } from '@sitecore-jss/sitecore-jss-nextjs/site';
import config from 'temp/config';
import { SiteResolverPlugin } from '..';
import { SiteInfo } from 'lib/jss21.2.1/site';

class DefaultPlugin implements SiteResolverPlugin {
  order = 1;
  exec(sites: SiteInfo[]): SiteInfo[] {
    // Add default/configured site to the end so that explicit sites are prioritized
    sites.push({
      name: config.jssAppName,
      language: config.defaultLanguage,
      hostName: '*',
    });

    return sites;
  }
}

export const defaultPlugin = new DefaultPlugin();
