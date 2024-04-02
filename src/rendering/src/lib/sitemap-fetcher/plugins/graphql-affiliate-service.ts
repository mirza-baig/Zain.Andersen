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
import { SITE_NAMES } from 'lib/constants/sitenames';

declare type affId = {
  affiliateId: { value: string };
};

class GraphqlAffilaiteServicePlugin implements SitemapFetcherPlugin {
  private graphQLClient: GraphQLClient;
  private searchService: SearchQueryService<affId>;

  constructor() {
    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<affId>(this.graphQLClient);
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
      // Affiliates only applicable to RbA
      process.env.JSS_APP_NAME !== SITE_NAMES.RenewalbyAndersen ||
      // Disconnected Export mode
      process.env.JSS_MODE === 'disconnected'
    ) {
      return paths;
    }

    // Code to get Affiliate pages
    const result = await this.searchService.fetch(AffiliateGraphQLQueries.affiliateListQuery, {});

    result.forEach((aff) => {
      const pathParams = {
        path: getSiteRewrite(getAffiliateRewrite('/', aff.affiliateId?.value), {
          // Affiliates only applicable to RbA
          siteName: SITE_NAMES.RenewalbyAndersen,
        })
          // Remove the leading slash because we don't want it in the paths
          .replace(/^\//, '')
          .split('/'),
      };

      context?.locales?.forEach((loc) => {
        paths.push({ params: pathParams, locale: loc });
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
