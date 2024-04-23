import { EwSiteInfo } from 'lib/site/ew-site-info';
import { GraphQLSitemapXmlService } from '../graphql-sitemap-xml-service';
import { Plugin, SitemapPath } from '..';
import config from 'temp/config';

class DefaultPlugin implements Plugin {
  private sitemapXmlService: GraphQLSitemapXmlService;

  constructor() {
    this.sitemapXmlService = new GraphQLSitemapXmlService({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(site: EwSiteInfo): Promise<SitemapPath[]> {
    return await this.sitemapXmlService.fetchPaths(site);
  }
}

export const defaultPlugin = new DefaultPlugin();
