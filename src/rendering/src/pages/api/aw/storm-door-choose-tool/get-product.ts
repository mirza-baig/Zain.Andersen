import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { NextApiRequest, NextApiResponse } from 'next';
import config from 'temp/config';
import { SitecoreIds } from 'lib/constants';
import {
  SearchQueryService,
  buildExpressionList,
  buildVariableList,
  buildVariableValues,
} from 'lib/graphql';

export type ProductByIdQueryResult = {
  productId: {
    value: string;
  };
  productName: {
    value: string;
  };
  productSubtitle: {
    value: string;
  };
  productDescription: {
    value: string;
  };
  productShortDescription: {
    value: string;
  };
  productImage: {
    title: string;
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  productImageMobile: {
    title: string;
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  productImageMobileFocusArea: {
    targetItem: {
      value: {
        value: string;
      };
    };
  };
  productType: {
    value: string;
  };
  productSeries: {
    value: string;
  };
  windowProductType: {
    value: string;
  };
  stormDoorProductType: {
    value: string;
  };
  exteriorDoorProductType: {
    value: string;
  };
  priceLevel: {
    targetItem: {
      priceLevelText: {
        value: string;
      };
    };
  };
  productDetailPageLink: {
    text: string;
    target: null | string;
    url: string;
    anchor: null | string;
  };
  name: string;
};
export interface GraphQLServiceConfig {
  // Graphql endpoint and API key to use for authentication
  endpoint: string;
  apiKey: string;
}
export class ProductsService {
  private graphQLClient: GraphQLClient;
  private searchService: SearchQueryService<ProductByIdQueryResult>;

  protected query(productIdLength: number): string {
    const variableListResult = buildVariableList('productid', 'String', productIdLength);
    const variableList = variableListResult
      .split(',')
      .map((variable) => variable.trim()) // Remove whitespace
      .filter((variable) => variable !== '') // Remove empty variables
      .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
      .join(', ');

    const productIdExpression = buildExpressionList(
      '_path',
      'CONTAINS',
      'productid',
      productIdLength
    );
    /* GraphQL */
    return `query getProduct($after: String $language: String! ${variableList} ){
    search(
        where: { 
          AND:[
            {
              name:"_path"
              value:"${SitecoreIds.Content.AndersenWindows.Global.ProductsFolder.ItemId}"
              operator: CONTAINS
            }
            {
              name:"_templates"
              value:"${SitecoreIds.Feature.Data.Products.AW.Product.TemplateId}"
              operator:CONTAINS
            }
            {
              name: "_language"
              value: $language
              operator: EQ
            }
            { 
              OR:[
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
      results {
        ... on Product {
          ItemId: id
          productId {
            value
          }
          productFullName {
            value
          }
          productSubtitle {
            value
          }
          productDescription {
            value
          }
          productImage {
            ... on ImageField {
              title
              src
              height
              width
              alt
            }
          }
          productImageMobile {
            ... on ImageField {
              title
              src
              height
              width
              alt
            }
          }
          productImageMobileFocusArea {
            targetItem {
              ... on Enum {
                value {
                  value
                }
              }
            }
          }
          productType {
            ...ProductType
          }
          productSeries {
            ...ProductType
          }
          windowProductType {
            ...ProductType
          }
          stormDoorProductType {
            ...ProductType
          }
          exteriorDoorProductType {
            ...ProductType
          }
          priceLevel {
            targetItem {
              ... on PriceLevel {
                priceLevelText {
                  value
                }
              }
            }
          }
          colors {
            ...SwatchCollection
          }
          handleSetFinishes {
            ...SwatchCollection
          }
          featuredInteriorColors {
            ...Colors
          }
          featuredExteriorColors {
            ...Colors
          }
          productDetailPageLink {
            ... on LinkField {
              text
              target
              url
              anchor
            }
          }
          name
        }
      }
        }
      }
      fragment Colors on MultilistField {
        colors: targetItems {
          ... on Swatch {
            swatchName {
              value
            }
            swatchDescription {
              value
            }
            swatchImage {
              alt
              height
              width
              src
            }
          }
        }
      }
      fragment SwatchCollection on LookupField {
        targetItem {
          ... on SwatchCollection {
            swatchCollectionName {
              value
            }
            swatchCollectionDescription {
              value
            }
            swatchCollectionFooterCopy {
              value
            }
            swatches {
              ...Colors
            }
          }
        }
      }
      fragment ProductType on LookupField {
        targetItem {
          ... on ProductType {
            productTypeName {
              value
            }
            productTypeDescription {
              value
            }
            productTypeImage {
              alt
              height
              width
              src
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
  constructor(public options: GraphQLServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<ProductByIdQueryResult>(this.graphQLClient);
  }

  /**
   * Fetch list of products for the bazaarvoice ids
   * @param sourceIds {string[]} the product ids to search
   * @param productIds {string[]} the bazaarvoice product ids
   * @returns {ProductByIdQueryResult[]} list of products
   * @throws {Error} if the siteName is empty.
   */

  async fetch(
    recommendationProductIds: string[],
    language = 'en'
  ): Promise<ProductByIdQueryResult[]> {
    const query = this.query(recommendationProductIds.length);
    const variableValues = buildVariableValues('productid', recommendationProductIds);
    const fetchResult: Promise<ProductByIdQueryResult[]> = this.searchService.fetch(query, {
      ...variableValues,
      language: language,
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
    });
  }
}

const productsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const recommendationProductIds = req.body.recommendationProductIds;
  const language = req.body.language ?? 'en';
  const productsService = new ProductsService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
  });

  const results = await productsService.fetch(recommendationProductIds, language);
  res.status(200).json({ results });
};

export default productsApi;
