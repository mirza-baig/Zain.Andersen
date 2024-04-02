import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { NextApiRequest, NextApiResponse } from 'next';
import config from 'temp/config';
import { SitecoreIds } from 'lib/constants';
import { ItemQueryService } from 'lib/graphql/item-service';
interface Question {
  id: string;
  template: {
    name: string;
  };
  questionText: {
    value: string;
  };
  answeredText: {
    value: string;
  };
  breadcrumbText: {
    value: string;
  };
  errorText: {
    value: string;
  };
}

interface Answer {
  id: string;
  answerText: {
    value: string;
  };
  answerDescription: {
    value: string;
  };
  primaryImage: {
    title: string;
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  primaryImageMobile: {
    title: string;
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  primaryImageMobileFocusArea: {
    targetItem: {
      value: {
        value: string;
      };
    };
  };
}

interface Recommendation {
  id: string;
  template: {
    name: string;
  };
  productItem: {
    value: string;
  };
  cta1Link: {
    text: string;
    target: null | string;
    url: string;
    anchor: null | string;
  };
  cta1Style: {
    targetItem: {
      value: {
        value: string;
      };
    };
  };
  cta1Icon: {
    targetItem: {
      value: {
        value: string;
      };
    };
  };
  cta2Link: {
    text: string;
    target: null | string;
    url: string;
    anchor: null | string;
  };
  cta2Style: {
    targetItem: {
      value: {
        value: string;
      };
    };
  };
  cta2Icon: {
    targetItem: {
      value: {
        value: string;
      };
    };
  };
}

interface ItemQueryResult {
  question: Question;
  answers: {
    children: {
      results: Answer[];
    };
  };
  results: {
    id: string;
    template:
      | {
          name: string;
        }
      | Recommendation;
  };
}
export type NextQuestionOrRecommendationByIdQueryResult = ItemQueryResult;

export interface GraphQLServiceConfig {
  // Graphql endpoint and API key to use for authentication
  endpoint: string;
  apiKey: string;
}
export class NextQuestionOrRecommendationsService {
  private graphQLClient: GraphQLClient;
  private itemService: ItemQueryService<NextQuestionOrRecommendationByIdQueryResult>;

  protected query(): string {
    /* GraphQL */
    return `query GetNextQuestionOrRecommendation($after: String, $currentAnswerId:String, $language: String!){
      question:item(path: $currentAnswerId, language: $language){
        children (includeTemplateIDs: ["${SitecoreIds.Feature.Components.StormDoorChooseTool.Question.TemplateId}", "${SitecoreIds.Feature.Components.StormDoorChooseTool.Recommendation.TemplateId}"]
          after: $after
          ) {
           
          results{
            ... on Question{
              id
              template{name}
            }
            ... on Recommendation{
              id
              template{name}
              productItem{value}
              cta1Link{
                ...on LinkField
                {
                  text
                  target
                  url
                  anchor
                }
              }
              cta1Style{
                targetItem
                  {
                    ...on Enum
                    {
                      value{value}
                    }
                  }
              }
              cta1Icon{
              targetItem
                  {
                    ...on Enum
                    {
                      value{value}
                    }
                  }
              }
              cta2Link{
                ...on LinkField
                {
                  text
                  target
                  url
                  anchor
                }
              }
              cta2Style{
                targetItem
                  {
                    ...on Enum
                    {
                      value{value}
                    }
                  }
              }
              cta2Icon{
                targetItem
                  {
                    ...on Enum
                    {
                      value{value}
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
  constructor(public options: GraphQLServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.itemService = new ItemQueryService(this.graphQLClient);
  }

  /**
   * Fetch list of products for the bazaarvoice ids
   * @param sourceIds {string[]} the product ids to item
   * @param productIds {string[]} the bazaarvoice product ids
   * @returns {NextQuestionOrRecommendationByIdQueryResult[]} list of products
   * @throws {Error} if the siteName is empty.
   */

  async fetch(
    currentAnswerId: string[],
    language = 'en'
  ): Promise<NextQuestionOrRecommendationByIdQueryResult> {
    const query = this.query();
    const fetchResult: Promise<NextQuestionOrRecommendationByIdQueryResult> =
      this.itemService.fetch(query, { currentAnswerId: currentAnswerId, language: language });
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

const getNextQuestionOrRecommendationApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const currentAnswerId = req.body.currentAnswerId;
  const language = req.body.language ?? 'en';
  const productsService = new NextQuestionOrRecommendationsService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
  });

  const results = await productsService.fetch(currentAnswerId, language);
  res.status(200).json({ results });
};

export default getNextQuestionOrRecommendationApi;
