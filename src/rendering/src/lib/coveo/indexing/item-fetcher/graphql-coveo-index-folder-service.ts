import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { Debug } from 'lib/constants';
import config from 'temp/config';

// The default query for fetching item
const defaultQuery = /* GraphQL */ `
  query ($path: String, $language: String!) {
    item(path: $path, language: $language) {
      ...idPath
      ... on CoveoIndexSettings {
        foldersToIndex {
          targetItems {
            ...idPath
          }
        }
        foldersToIndexSubFolders {
          targetItems {
            children(first: 100) {
              results {
                ...idPath
              }
            }
          }
        }
      }
    }
  }

  fragment idPath on Item {
    id
    path
  }
`;
type IdPath = {
  id: string;
  path: string;
};

/**
 * The schema of data returned in response to sitemaps request
 */
type ItemChildrenResult = {
  item: IdPath & {
    foldersToIndex: {
      targetItems: IdPath[];
    };
    foldersToIndexSubFolders: {
      targetItems: {
        children: {
          results: IdPath[];
        };
      }[];
    };
  };
};

export type CoveoIndexFolderId = {
  id: string;
  name: string;
};

/**
 * Service that fetch the sitemaps data using Sitecore's GraphQL API.
 */
export class GraphQLCoveoIndexFolderService {
  private graphQLClient: GraphQLClient;

  protected get query(): string {
    return defaultQuery;
  }

  constructor() {
    this.graphQLClient = this.getGraphQLClient();
  }

  /**
   * Fetch list of sitemaps for the site
   * @returns {string[]} list of sitemap paths
   * @throws {Error} if the siteName is empty.
   */
  async fetchItem(configItemPath: string, language = 'en'): Promise<CoveoIndexFolderId[]> {
    const result: Promise<ItemChildrenResult> = this.graphQLClient.request(this.query, {
      path: configItemPath,
      language: language,
    });
    try {
      return result.then((result: ItemChildrenResult) => {
        return this.mapQueryResultToIdArray(result);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * Map a query result to and indexable item
   * @returns {IndexableItem} list of sitemap paths
   * @param {ItemChildrenResult} queryResult the query result to map
   */
  protected mapQueryResultToIdArray(queryResult: ItemChildrenResult): CoveoIndexFolderId[] {
    const items = [] as IdPath[];
    items.push(...queryResult.item.foldersToIndex?.targetItems);

    items.push(
      ...queryResult.item.foldersToIndexSubFolders?.targetItems
        .map((x) => x.children.results)
        .flat(1)
    );
    return items.map((x) => {
      const path = x.path
        .replace('/sitecore/content/AndersenCorporation/', '')
        .replaceAll('/', '-');
      const name = encodeURIComponent(path.replace(/ /g, '-'));
      return {
        id: x.id,
        name: name,
      };
    });
  }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */
  protected getGraphQLClient(): GraphQLClient {
    //console.log(config.graphQLEndpoint);
    //console.log(config.graphQLEndpoint);
    return new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
      debugger: Debug.itemQuery,
    });
  }
}

export const graphQLCoveoIndexFolderService = new GraphQLCoveoIndexFolderService();
