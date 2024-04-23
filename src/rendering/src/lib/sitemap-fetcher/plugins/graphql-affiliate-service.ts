import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import config from 'temp/config';
import { Debug } from 'lib/constants';
import { SitemapFetcherPlugin } from '..';
import { GetStaticPathsContext } from 'next';
import { StaticPath } from '@sitecore-jss/sitecore-jss-nextjs';
import { AffiliateGraphQLQueries } from 'lib/constants/affiliates';
import { SearchQueryService } from 'lib/graphql';
import { getAffiliateRewrite } from 'lib/affiliate/utils';
import { getSiteRewrite } from 'lib/jss21.2.1/site/utils';
import { EwSiteInfo } from 'lib/site/ew-site-info';

declare type affId = {
  affiliateId: { value: string };
};

class GraphqlAffilaiteServicePlugin implements SitemapFetcherPlugin {
  private graphQLClient: GraphQLClient;
  private searchService: SearchQueryService<affId>;
  private _sites: EwSiteInfo[];

  constructor() {
    // Get the list of sites
    this._sites = JSON.parse(config.sites) as EwSiteInfo[];

    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<affId>(this.graphQLClient);

    // We only want to run this for sites with affiliate personalization
    this._sites = this._sites.filter((x) => x.hasAffiliatePersonalization);
  }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */

  async exec(context?: GetStaticPathsContext): Promise<StaticPath[]> {
    const paths: StaticPath[] = [];
    if (
      // Disconnected Export mode
      process.env.JSS_MODE === 'disconnected'
    ) {
      return paths;
    }

    // Code to get Affiliate pages
    const result = await this.searchService.fetch(AffiliateGraphQLQueries.affiliateListQuery, {});

    // Dedupe affiliate ids
    const affiliateIds = [...new Set(result.map((x) => x.affiliateId.value))];

    this._sites.map((site) => {
      affiliateIds.forEach((affiliateId) => {
        const pathParams = {
          path: getAffiliateRewrite(
            getSiteRewrite('/', {
              // Affiliates only applicable to RbA
              siteName: site.name,
            }),
            affiliateId
          )
            // Remove the leading slash because we don't want it in the paths
            .replace(/^\//, '')
            .split('/'),
        };

        context?.locales?.forEach((loc) => {
          paths.push({ params: pathParams, locale: loc });
        });
      });
    });

    return paths;
  }

  protected getGraphQLClient(): GraphQLClient {
    return new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
      debugger: Debug.affiliates,
    });
  }
}

export const graphqlAffiliateServicePlugin = new GraphqlAffilaiteServicePlugin();
