import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { NextApiRequest, NextApiResponse } from 'next';
import { Debug } from 'lib/constants';
import config from 'temp/config';
import {
  SearchQueryService,
  buildExpressionList,
  buildVariableList,
  buildVariableValues,
} from 'lib/graphql';

/**
 * The schema for the product data coming back from the graphQl query.
 */
export type ProductByBVIdQueryResult = {
  bazaarvoiceProductId: { value: string };
  productName: { value: string };
  productImage: {
    src: string;
    height: string;
    width: string;
    alt: string;
  };
};

export interface GraphQLProductByBVIdServiceConfig {
  /**
   * Your Graphql endpoint
   */
  endpoint: string;
  /**
   * The API key to use for authentication
   */
  apiKey: string;
}

/**
 * Service that fetch the sitemaps data using Sitecore's GraphQL API.
 */
export class GraphQLProductByBVIdService {
  private graphQLClient: GraphQLClient;
  private searchService: SearchQueryService<ProductByBVIdQueryResult>;

  protected query(sourceIdLength: number, productIdLength: number, language: string): string {
    const variables = `${buildVariableList(
      'sourceId',
      'String',
      sourceIdLength
    )}${buildVariableList('productId', 'String', productIdLength)}`;
    const sourceIdExpression = buildExpressionList('_path', 'CONTAINS', 'sourceId', sourceIdLength);
    const productIdExpression = buildExpressionList(
      'bazaarvoiceProductId',
      'EQ',
      'productId',
      productIdLength
    );

    /* GraphQL */
    return `
  query ProductByBVIdQuery($after: String${variables}) {
    search(
      where: {
        AND: [
          { name: "_language", value: "${language}", operator: EQ }
          ${
            sourceIdLength
              ? `{
            OR: [
              { name: "id", value: "0", operator: EQ }
              ${sourceIdExpression}
            ]
          }`
              : ''
          }
          {
            OR: [
              ${productIdExpression}
            ]
          }
        ]
      }
      after: $after
    ) {
      total
      pageInfo {
        endCursor
        hasNext
      }
      results{
         ... on Product {
           bazaarvoiceProductId {
             value
           }
          productName{
             value
          }
          productImage {
            src,
            height,
            width,
            alt
          }
          productSeries {
            targetItem {
              ... on ProductType {
                productTypeName {
                  value
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
   * Creates an instance of graphQL sitemaps service with the provided options
   * @param {GraphQLSitemapXmlServiceConfig} options instance
   */
  constructor(public options: GraphQLProductByBVIdServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<ProductByBVIdQueryResult>(this.graphQLClient);
  }

  /**
   * Fetch list of products for the bazaarvoice ids
   * @param sourceIds {string[]} the product ids to search
   * @param productIds {string[]} the bazaarvoice product ids
   * @returns {ProductByBVIdQueryResult[]} list of products
   * @throws {Error} if the siteName is empty.
   */
  async fetch(
    sourceIds: string[],
    productIds: string[],
    language: string
  ): Promise<ProductByBVIdQueryResult[]> {
    const query = this.query(sourceIds.length, productIds.length, language);
    const sourceIdValues = buildVariableValues('sourceId', sourceIds);
    const productIdValues = buildVariableValues('productId', productIds);

    const fetchResult: Promise<ProductByBVIdQueryResult[]> = this.searchService.fetch(query, {
      ...sourceIdValues,
      ...productIdValues,
    });
    return fetchResult;
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
      debugger: Debug.productByBVId,
    });
  }
}

const bazaarvoiceProductByBVIdApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const sourceIds = req.body.sourceIds || [];
  const productIds = req.body.productIds || [];
  const language = req.body.language || 'en';

  const graphQLProductByBVIdService = new GraphQLProductByBVIdService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
  });

  const products = await graphQLProductByBVIdService.fetch(sourceIds, productIds, language);
  res.status(200).json({ products });
};

export default bazaarvoiceProductByBVIdApi;
