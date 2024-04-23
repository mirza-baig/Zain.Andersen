import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { Debug } from 'lib/constants';
import { CacheClient, CacheOptions, MemoryCacheClient } from 'lib/jss21.2.1/cache-client';
import { RuleContext, RuleList } from 'lib/rules/rules';
import { RuleAction } from 'lib/rules/actions';
import { getRulesFromJsonValue } from 'lib/rules/serialization';

export type GraphQLPageVariantServiceConfig = CacheOptions & {
  /**
   * Your Graphql endpoint
   */
  endpoint: string;
  /**
   * The API key to use for authentication
   */
  apiKey: string;
  /**
   * Override fetch method. Uses 'GraphQLRequestClient' default otherwise.
   */
  fetch?: typeof fetch;
};

/**
 * Object model of page variant
 */
export type PageVariant = {
  /**
   * The page variant id
   */
  id: string;

  /**
   * The rules for applying the page variant
   */
  rules: RuleList<RuleContext>;
};

/**
 * Object model of personlize info
 */
export type AppliedPageVariants = {
  /**
   * The page id
   */
  pageId: string;
  /**
   * The configured variant ids
   */
  pageVariants: PageVariant[];
};

type PageVariantQueryResult = {
  layout: {
    item: {
      id: string;
      children: {
        results: [
          {
            children: {
              results: [{ id: string; activationRules: { jsonValue: { value: string } } }];
            };
          }
        ];
      };
    };
  };
};

export class MatchedPageVariantAction<T extends RuleContext> extends RuleAction<T> {
  apply(ruleContext: T): void {
    ruleContext.parameters['matched'] = true;
  }
}

export class GraphQLPageVariantService {
  private graphQLClient: GraphQLClient;
  private cache: CacheClient<PageVariantQueryResult>;

  protected get query(): string {
    return /* GraphQL */ `
      query PageVariantsQuery($siteName: String!, $language: String!, $itemPath: String!) {
        layout(site: $siteName, routePath: $itemPath, language: $language) {
          item {
            id
            children(includeTemplateIDs: ["{519E5E9D-1DE2-4981-BBE1-E1364722242F}"]) {
              results {
                children(includeTemplateIDs: ["{6D6A6CE5-4E2A-4B04-BA7C-4D765E76C60D}"]) {
                  results {
                    id
                    activationRules: field(name: "activationRules") {
                      jsonValue
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
  }

  /**
   * Fetch page variant data using the Sitecore GraphQL endpoint.
   * @param {GraphQLPageVariantServiceConfig} config
   */
  constructor(protected config: GraphQLPageVariantServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.cache = this.getCacheClient();
  }

  /**
   * Get page variant information for a route
   * @param {string} itemPath page route
   * @param {string} language language
   * @param {string} siteName site name
   * @returns {Promise<AppliedPageVariants | undefined>} the applied page variants or undefined (if itemPath / language not found)
   */
  async getAppliedPageVariants(
    itemPath: string,
    language: string,
    siteName: string
  ): Promise<AppliedPageVariants | undefined> {
    Debug.personalization('fetching page variants for %s %s %s', siteName, itemPath, language);

    const cacheKey = this.getCacheKey(itemPath, language, siteName);
    let data = this.cache.getCacheValue(cacheKey);

    if (!data) {
      Debug.personalization('cache miss, calling server');

      try {
        data = await this.graphQLClient.request<PageVariantQueryResult>(this.query, {
          siteName,
          itemPath,
          language,
        });
        this.cache.setCacheValue(cacheKey, data);
      } catch (error) {
        throw error;
      }
    }

    if (data?.layout?.item) {
      const result = {
        pageId: data.layout.item.id,
        pageVariants: data.layout.item.children.results.flatMap((_) =>
          _.children.results.map((__) => ({
            id: __.id,
            rules: getRulesFromJsonValue(__.activationRules.jsonValue, __.id),
          }))
        ),
      };

      // Add our matching action
      result.pageVariants.forEach((_) =>
        _.rules.rules.forEach((__) => __.actions.push(new MatchedPageVariantAction()))
      );

      return result;
    }

    return undefined;
  }

  /**
   * Gets cache client implementation
   * Override this method if custom cache needs to be used
   * @returns CacheClient instance
   */
  protected getCacheClient(): CacheClient<PageVariantQueryResult> {
    return new MemoryCacheClient<PageVariantQueryResult>({
      cacheEnabled: this.config.cacheEnabled ?? true,
      cacheTimeout: this.config.cacheTimeout ?? 10,
    });
  }

  protected getCacheKey(itemPath: string, language: string, siteName: string) {
    return `${siteName}-${itemPath}-${language}`;
  }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */
  protected getGraphQLClient(): GraphQLClient {
    return new GraphQLRequestClient(this.config.endpoint, {
      apiKey: this.config.apiKey,
      debugger: Debug.personalization,
      fetch: fetch,
    });
  }
}
