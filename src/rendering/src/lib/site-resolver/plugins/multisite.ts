import config from 'temp/config';
import { SiteResolverPlugin } from '..';
import { SiteInfo } from 'lib/jss21.2.1/site';

class MultisitePlugin implements SiteResolverPlugin {
  order = 0;
  exec(sites: SiteInfo[]): SiteInfo[] {
    // Add preloaded sites
    sites.push(...(JSON.parse(config.sites) as SiteInfo[]));

    return sites;
  }
}

export const multisitePlugin = new MultisitePlugin();
