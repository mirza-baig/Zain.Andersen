// import { GraphQLClient, GraphQLRequestClient } from '../graphql';
// import { siteNameError } from '../constants';
// import debug from '../debug';
// import { MemoryCacheClient, CacheOptions, CacheClient } from '../cache-client';

import { LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  GraphQLClient,
  GraphQLRequestClient,
  SearchQueryService,
  getAppRootId,
} from '@sitecore-jss/sitecore-jss/graphql';
import {
  REDIRECT_TYPE_301,
  REDIRECT_TYPE_302,
  REDIRECT_TYPE_SERVER_TRANSFER,
  RedirectInfo,
} from '@sitecore-jss/sitecore-jss/site';
import { Debug } from 'lib/constants';
import { CacheClient, CacheOptions, MemoryCacheClient } from 'lib/jss21.2.1/cache-client';

// The default query for request redirects for Sitecore 10.2, which does not have a Sites GraphQL method.
const defaultQuery = /* GraphQL */ `
  query RedirectsQuery($rootItemId: String, $after: String) {
    search(
      where: {
        AND: [
          {
            OR: [
              {
                name: "_templates"
                value: "{F4FB6125-F113-4373-8AA2-4648C2C1960E}"
                operator: CONTAINS
              }
              {
                name: "_templates"
                value: "{C14B6289-8AC2-439C-9E5B-40DE9F820C3F}"
                operator: CONTAINS
              }
            ]
          }
          { name: "_path", value: $rootItemId, operator: CONTAINS }
        ]
      }
      first: 100
      after: $after
    ) {
      total
      pageInfo {
        endCursor
        hasNext
      }
      results {
        ... on Redirect {
          url {
            path
          }
          redirectUrl {
            jsonValue
          }
        }
        ... on RedirectMap {
          redirectType {
            value
          }
          preserveQueryString {
            boolValue
          }
          urlMapping {
            values {
              name
              value
            }
          }
        }
      }
    }
  }
`;

export type GraphQLRedirectsServiceConfig = CacheOptions & {
  /**
   * Your Graphql endpoint
   */
  endpoint: string;
  /**
   * The API key to use for authentication
   */
  apiKey: string;

  jssAppTemplateId?: string;
  /**
   * Override fetch method. Uses 'GraphQLRequestClient' default otherwise.
   */
  fetch?: typeof fetch;
};

export type RedirectItem = {
  url: {
    path: string;
  };
  redirectUrl: {
    jsonValue: LinkField;
  };
};

export type RedirectMapItem = {
  redirectType: TextField;
  preserveQueryString: {
    boolValue: boolean;
  };
  urlMapping: {
    values: { name: string; value: string }[];
  };
};
/**
 * The schema of data returned in response to redirects array request
 */
export type RedirectsQueryResult = RedirectItem | RedirectMapItem;

/**
 *  The GraphQLRedirectsService class is used to query the JSS redirects using Graphql endpoint
 */
export class GraphQLRedirectsService {
  private graphQLClient: GraphQLClient;
  private cache: CacheClient<RedirectInfo[]>;

  protected get query(): string {
    return defaultQuery;
  }

  private searchService: SearchQueryService<RedirectsQueryResult>;

  /**
   * Creates an instance of graphQL redirects service with the provided options
   * @param {GraphQLRedirectsServiceConfig} options instance
   */
  constructor(private options: GraphQLRedirectsServiceConfig) {
    this.cache = this.getCacheClient();

    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<RedirectsQueryResult>(this.graphQLClient);
  }

  /**
   * Fetch an array of redirects from API
   * @param {string} siteName site name
   * @returns Promise<RedirectInfo[]>
   * @throws {Error} if the siteName is empty.
   */
  async fetchRedirects(siteName: string): Promise<RedirectInfo[]> {
    if (!siteName) {
      throw new Error('The siteName cannot be empty');
    }

    const cacheKey = `redirects-${siteName}`;
    let data = this.cache.getCacheValue(cacheKey);

    if (!data) {
      // If the caller does not specify a root item ID, then we try to figure it out
      const rootItemId =
        (await getAppRootId(this.graphQLClient, siteName, 'en', this.options.jssAppTemplateId)) ??
        undefined;

      const result = await this.searchService.fetch(this.query, {
        rootItemId,
        language: '-not-used-',
      });

      data = this.transformRedirectInfo(result);

      this.cache.setCacheValue(cacheKey, data);
    }

    return data || [];
  }

  private transformRedirectInfo(results: RedirectsQueryResult[]): RedirectInfo[] {
    const redirects: RedirectInfo[] = [];

    results.forEach((data) => {
      const redirectItem = (data as RedirectItem).redirectUrl ? (data as RedirectItem) : null;

      if (redirectItem) {
        redirects.push({
          pattern: redirectItem.url.path,
          target: redirectItem.redirectUrl.jsonValue.value.href as string,
          redirectType: REDIRECT_TYPE_302,
          isQueryStringPreserved: true,
        });
      } else {
        const redirectMapItem = data as RedirectMapItem;

        // Not sure why the value returned is not the same as the constants returned by JSS
        const redirectType =
          redirectMapItem.redirectType.value === 'Redirect301'
            ? REDIRECT_TYPE_301
            : redirectMapItem.redirectType.value === 'Redirect302'
            ? REDIRECT_TYPE_302
            : redirectMapItem.redirectType.value === 'ServerTransfer'
            ? REDIRECT_TYPE_SERVER_TRANSFER
            : '';
        redirectMapItem.urlMapping.values.forEach((mapping) => {
          redirects.push({
            pattern: mapping.name,
            target: decodeURIComponent(mapping.value),
            redirectType: redirectType,
            isQueryStringPreserved: redirectMapItem.preserveQueryString.boolValue,
          });
        });
      }
    });

    return redirects;
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
      debugger: Debug.redirects,
      fetch: this.options.fetch,
    });
  }

  /**
   * Gets cache client implementation
   * Override this method if custom cache needs to be used
   * @returns CacheClient instance
   */
  protected getCacheClient(): CacheClient<RedirectInfo[]> {
    return new MemoryCacheClient<RedirectInfo[]>({
      cacheEnabled: this.options.cacheEnabled ?? true,
      cacheTimeout: this.options.cacheTimeout ?? 10,
    });
  }
}
