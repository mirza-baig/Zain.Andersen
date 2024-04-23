import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss/graphql';
import { Debug, SitecoreIds } from 'lib/constants';
import { convertHexToGUID } from 'lib/utils/string-utils';
import { SitemapPath } from 'lib/sitemap-xml';
import { SearchQueryService } from 'lib/graphql';
import { EwSiteInfo } from 'lib/site/ew-site-info';

// The default query for request sitemaps
const defaultQuery = /* GraphQL */ `
query JobsSitemapQuery(
  $rootItemId: String!
  $language: String!
  $pageSize: Int = 100
  $after: String
  $baseTemplateId: String = "${SitecoreIds.Foundation.RenewalbyAndersen.Fieldsets.Affiliates._BaseJob}"
) {
  search(
    where: {
      AND: [
        { name: "excludeFromSitemap", value: "1", operator: NEQ }
        { name: "_templates", value: $baseTemplateId, operator: CONTAINS }
        { name: "_path", value: $rootItemId, operator: CONTAINS }
        { name: "_language", value: $language }
      ]
    }
    first: $pageSize
    after: $after
  ) {
    total
    pageInfo {
      endCursor
      hasNext
    }
    results {
      name
      id
      path
      language {
        name
      }
      ... on _SitemapProperties {
        sitemapPriority {
          ... on LookupField {
            targetItem {
              field(name: "Value") {
                value
              }
            }
          }
        }
        sitemapChangeFrequency {
          ... on LookupField {
            targetItem {
              field(name: "Value") {
                value
              }
            }
          }
        }
      }
      ... on _SitemapLastUpdated {
        lastUpdated {
          value
        }
      }
    }
  }
}
`;

export interface RbaJobsSitemapXmlServiceConfig {
  /**
   * Your Graphql endpoint
   */
  endpoint: string;
  /**
   * The API key to use for authentication
   */
  apiKey: string;
  /**
   * Optional. How many result items to fetch in each GraphQL call. This is needed for pagination.
   * @default 100
   */
  pageSize?: number;
}

/**
 * The schema of data returned in response to sitemaps request
 */
export type SitemapQueryResult = {
  lastUpdated?: {
    value: string;
  };
  name: string;
  id: string;
  path: string;
  language: {
    name: string;
  };
  sitemapPriority: { targetItem?: { field: { value: string } } };
  sitemapChangeFrequency: { targetItem?: { field: { value: string } } };
};

/**
 * Service that fetch the sitemaps data using Sitecore's GraphQL API.
 */
export class RbaJobsSitemapXmlService {
  private graphQLClient: GraphQLClient;
  private searchService: SearchQueryService<SitemapQueryResult>;

  protected get query(): string {
    return defaultQuery;
  }

  /**
   * Creates an instance of graphQL sitemaps service with the provided options
   * @param {GraphQLSitemapXmlServiceConfig} options instance
   */
  constructor(public options: RbaJobsSitemapXmlServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<SitemapQueryResult>(this.graphQLClient);
  }

  /**
   * Fetch sitemap paths for generation of a sitemap
   * @returns an array of @see SitemapResult objects
   */
  async fetchPaths(site: EwSiteInfo): Promise<SitemapPath[]> {
    // Fetch paths using all locales
    const paths = await this.searchService
      .fetch(this.query, {
        rootItemId: SitecoreIds.Content.RenewalByAndersen.Global.AffiliatesDataFolder.ItemId,
        language: site.language,
        pageSize: this.options.pageSize,
      })
      .then((results: SitemapQueryResult[]) => {
        return results.map((result) => this.mapQueryResultToPath(result, site.name));
      });

    return paths;
  }

  /**
   * Map a query result to a path
   * @returns {SitemapPath} the sitemap path
   * @param {SitemapQueryResult} queryResult the query result to map
   */
  protected mapQueryResultToPath(queryResult: SitemapQueryResult, siteName: string): SitemapPath {
    return {
      siteName: siteName,
      language: queryResult.language.name,
      path: `/careers/${convertHexToGUID(queryResult.id)}/${queryResult.name.replace(
        /\s/g,
        '-'
      )}/`.toLocaleLowerCase(),
      lastUpdated: queryResult.lastUpdated?.value,
      priority: queryResult.sitemapPriority?.targetItem?.field.value || '0.5',
      changeFrequency: queryResult.sitemapChangeFrequency?.targetItem?.field.value || 'Daily',
    };
  }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */
  protected getGraphQLClient(): GraphQLClient {
    return new GraphQLRequestClient(this.options.endpoint, {
      apiKey: this.options.apiKey,
      debugger: Debug.sitemapxml,
    });
  }
}
