import { RbaJobsSitemapXmlService } from 'lib/affiliate/rba-jobs-sitemap-xml-service';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { Plugin } from '..';
import config from 'temp/config';
import { SITE_NAMES } from 'lib/constants/sitenames';

export class RbaJobsPlugin implements Plugin {
  private rbAJobsSitemapXmlService: RbaJobsSitemapXmlService;

  constructor() {
    this.rbAJobsSitemapXmlService = new RbaJobsSitemapXmlService({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(site: EwSiteInfo) {
    if (
      site.name !== SITE_NAMES.RenewalbyAndersen &&
      site.name !== SITE_NAMES.RenewalbyAndersenCA
    ) {
      return [];
    }

    return await this.rbAJobsSitemapXmlService.fetchPaths(site);
  }
}

export const rbaJobsPlugin = new RbaJobsPlugin();
