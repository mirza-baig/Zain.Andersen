import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import { Debug } from 'lib/constants';

export type JobDetailsResult = {
  jobData: {
    id: string;
    name: string;
    jobTitle: Field<string>;
    jobDescription: Field<string>;
    jobWage: Field<string>;
    jobSummary: Field<string>;
    jobCategory: {
      targetItem: {
        id: string;
        name: string;
        categoryName: Field<string>;
        categoryImage: {
          alt: string;
          height: number;
          width: number;
          src: string;
        };
      };
    };
    jobState: {
      targetItem: {
        id: string;
        abbreviation: Field<string>;
        fullName: Field<string>;
      };
    };
    jobCity: Field<string>;
    jobTypes: {
      targetItems: JobTypeResultItem[];
    };
    lastUpdated: Field<string>;
    affiliates: {
      targetItems: {
        affiliateId: Field<string>;
      }[];
    };
  };
};

type JobTypeResultItem = {
  id: string;
  name: string;
  hoursDescription: Field<string>;
};

export type JobDetails = {
  id: string;
  name: string;
  jobTitle: string;
  jobDescription: string;
  jobWage: string;
  jobSummary: string;
  jobCategory: {
    categoryName: string;
    categoryImage: {
      alt: string;
      height: number;
      width: number;
      src: string;
    };
  };
  jobState: {
    abbreviation: string;
    fullName: string;
  };
  jobCity: string;
  jobTypes: string[];
  jobPostedDate: string;
  jobAffiliateId: string;
};

const query = `query GetJobDetails($jobId: String, $language: String!) {
  jobData: item(path: $jobId, language: $language) {
    id
    name
    displayName
    template {
      id
      name
    }
    ... on _SitemapLastUpdated {
      lastUpdated {
        value
      }
    }
    ... on Job {
      jobTitle {
        value
      }
      jobDescription {
        value
      }
      jobWage {
        value
      }
      jobSummary {
        value
      }
      jobCategory {
        targetItem {
          id
          name
          ... on JobCategory {
            id
            name
            categoryName {
              value
            }
            categoryImage {
              alt
              height
              width
              src
            }
          }
        }
      }
      jobState {
        targetItem {
          id
          ... on State {
            abbreviation {
              value
            }
            fullName {
              value
            }
          }
        }
      }
      jobCity {
        value
      }
      jobTypes {
        targetItems {
          id
          name
          ... on JobHours {
            hoursDescription {
              value
            }
          }
        }
      }
      affiliates {
        targetItems {
          ... on Affiliate {
            affiliateId {
              value
            }
          }
        }
      }
    }
  }
}
`;

export class GraphQLJobDetailsByJobIdService {
  private graphQLClient: GraphQLClient;

  protected get query(): string {
    return query;
  }

  constructor() {
    this.graphQLClient = this.getGraphQLClient();
  }

  /**
   * Fetch job details
   * @param jobId {string} Job Item Id
   * @param language {string} site language
   * @returns {JobDetails} list of products
   */
  async fetch(jobId: string, language: string): Promise<JobDetails | null> {
    const result: JobDetailsResult = await this.graphQLClient.request(this.query, {
      jobId: jobId,
      language: language,
    });

    if (result?.jobData == null) {
      return null;
    }

    return new Promise<JobDetails>((resolve, reject) => {
      try {
        if (result?.jobData?.id) {
          resolve(this.mapQueryResultToJobDetails(result));
        } else {
          reject(null);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Map a query result to and indexable item
   * @returns {JobDetailsResult} list of sitemap paths
   * @param {JobDetails} queryResult the query result to map
   */
  protected mapQueryResultToJobDetails(queryResult: JobDetailsResult): JobDetails {
    const jobDetails: JobDetails = {
      id: queryResult.jobData.id || '',
      name: queryResult.jobData.name || '',
      jobTitle: queryResult.jobData.jobTitle?.value || '',
      jobDescription: queryResult.jobData.jobDescription?.value || '',
      jobWage: queryResult.jobData.jobWage?.value || '',
      jobCategory: {
        categoryName: queryResult.jobData.jobCategory?.targetItem?.categoryName?.value || '',
        categoryImage: {
          alt: queryResult.jobData.jobCategory?.targetItem?.categoryImage?.alt || '',
          height: queryResult.jobData.jobCategory?.targetItem?.categoryImage?.height || 0,
          width: queryResult.jobData.jobCategory?.targetItem?.categoryImage?.width || 0,
          src: queryResult.jobData.jobCategory?.targetItem?.categoryImage?.src || '',
        },
      },
      jobState: {
        abbreviation: queryResult.jobData.jobState?.targetItem?.abbreviation?.value || '',
        fullName: queryResult.jobData.jobState?.targetItem?.fullName?.value || '',
      },
      jobCity: queryResult.jobData.jobCity?.value || '',
      jobTypes: queryResult.jobData.jobTypes?.targetItems?.map(
        (jobType) => jobType && jobType.hoursDescription?.value
      ),
      jobSummary: queryResult.jobData.jobSummary?.value || '',
      jobPostedDate: queryResult.jobData.lastUpdated?.value || '',
      jobAffiliateId:
        queryResult.jobData.affiliates?.targetItems?.firstOrDefault()?.affiliateId?.value || '',
    };

    return jobDetails;
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

export const graphQLJobDetailsByJobIdService = new GraphQLJobDetailsByJobIdService();
