import { GraphQLSitemapService } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import { SitemapFetcherPlugin } from '..';
import { GetStaticPathsContext } from 'next';
import { StaticPath } from '@sitecore-jss/sitecore-jss-nextjs';
import { getSiteRewrite } from 'lib/jss21.2.1/site/utils';
import { EwSiteInfo } from 'lib/site/ew-site-info';

class GraphqlSitemapServicePlugin implements SitemapFetcherPlugin {
  // _graphqlSitemapService: GraphQLSitemapService;
  // To support multi-site, we have a service per site
  private _graphqlSitemapServices: Record<string, GraphQLSitemapService>;
  private _sites: EwSiteInfo[];
  constructor() {
    // Get the list of sites
    this._sites = JSON.parse(config.sites) as EwSiteInfo[];

    // We only want to run this for sites without affiliate personalization
    // Sites with affilate personalization (e.g. RbA) uses the `graphql-affiliate-service` plugin.
    this._sites = this._sites.filter((x) => !x.hasAffiliatePersonalization);

    this._graphqlSitemapServices = {};

    // For each site, create a new GraphQLSitemapService
    this._sites.forEach((x) => {
      this._graphqlSitemapServices[x.name] = new GraphQLSitemapService({
        endpoint: config.graphQLEndpoint,
        apiKey: config.sitecoreApiKey,
        siteName: x.name,
        /*
          The Sitemap Service needs a root item ID in order to fetch the list of pages for the current
          app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
          otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
          rootItemId: '{GUID}'
          */
        pageSize: 100, // Sitecore increased the default to 100 in later versions of JSS
      });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async exec(_context?: GetStaticPathsContext): Promise<StaticPath[]> {
    const staticExport = process.env.EXPORT_MODE && process.env.JSS_MODE !== 'disconnected';

    const allResults = await Promise.all(
      // Get the sitemap for each site and combine them
      this._sites.map(async (site) => {
        // Get the sitemap result for this site.

        // Customized to add try/catch so that one site failing to retrieve urls
        // doesn't prevent SSG from occuring at all.
        let siteResult = [] as StaticPath[];
        try {
          siteResult =
            (staticExport
              ? await this._graphqlSitemapServices[site.name]?.fetchExportSitemap(site.language)
              : await this._graphqlSitemapServices[site.name]?.fetchSSGSitemap([site.language])) ??
            ([] as StaticPath[]);
        } catch (err) {
          console.log('graphql-sitemap-service failed for site:');
          console.log(site);
          console.error(err);
        }

        const augmentedResults = siteResult
          // Filter out the "Presentation", the sitemap service also gets partial designs
          .filter((x) => x.params.path[0] !== 'Presentation')
          // Filter out the Page Variants, since they live in the content tree and have layout
          .filter((x) => !x.params.path.some((xx) => xx === 'Page Variant'))
          // Not sure why some paths have the full domain...
          .filter((x) => x.params.path[0].indexOf('http') !== 0)
          .map((x) => {
            const newResult = {
              locale: x.locale,
              params: {
                ...x.params,
                // Add the sitename that would be added via middleware
                path: getSiteRewrite(x.params.path.join('/'), { siteName: site.name })
                  // Remove the leading slash because we don't want it in the paths
                  .replace(/^\//, '')
                  .split('/'),
              },
            };
            return newResult;
          });

        return augmentedResults;
      })
    );

    return allResults.flat();
  }
}

export const graphqlSitemapServicePlugin = new GraphqlSitemapServicePlugin();
