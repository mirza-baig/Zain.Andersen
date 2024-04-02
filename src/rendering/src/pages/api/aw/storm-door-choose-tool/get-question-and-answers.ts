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

interface ItemQueryResult {
  question: Question;
  answers: {
    children: {
      results: Answer[];
    };
  };
}

export type QuestionAndAnswersnByIdQueryResult = ItemQueryResult;

export interface GraphQLServiceConfig {
  // Graphql endpoint and API key to use for authentication
  endpoint: string;
  apiKey: string;
}
export class QuestionAndAnswersnsService {
  private graphQLClient: GraphQLClient;
  private itemService: ItemQueryService<QuestionAndAnswersnByIdQueryResult>;

  protected query(): string {
    /* GraphQL */
    return ` query GetQuestionAndAnswers($after: String $questionId:String $language: String!){
      question:item(path: $questionId, language: $language){
            ... on Question{
              id
              template{name}
              questionText{value}
              answeredText{value}
              breadcrumbText{value}
              errorText{value}
            }
          }
      answers:item(path: $questionId, language: $language){
        children (includeTemplateIDs: ["${SitecoreIds.Feature.Components.StormDoorChooseTool.Answer.TemplateId}"]after: $after){
          results{
            ... on Answer{
              id
              answerText{value}
              answerDescription{value}
              primaryImage{
                ... on ImageField
                {
                  title                
                  src
                  height
                  width
                  alt   
                }
              }
              primaryImageMobile{
                ... on ImageField
                {
                  title                
                  src
                  height
                  width
                  alt   
                }
              }
              primaryImageMobileFocusArea{
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
   * @returns {QuestionAndAnswersnByIdQueryResult[]} list of products
   * @throws {Error} if the siteName is empty.
   */

  async fetch(questionId: string[], language = 'en'): Promise<QuestionAndAnswersnByIdQueryResult> {
    const query = this.query();
    const fetchResult: Promise<QuestionAndAnswersnByIdQueryResult> = this.itemService.fetch(query, {
      questionId: questionId,
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

const getQuestionAndAnswersnApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const questionId = req.body.questionID;
  const language = req.body.language ?? 'en';
  const productsService = new QuestionAndAnswersnsService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
  });

  const results = await productsService.fetch(questionId, language);
  res.status(200).json({ results });
};

export default getQuestionAndAnswersnApi;
