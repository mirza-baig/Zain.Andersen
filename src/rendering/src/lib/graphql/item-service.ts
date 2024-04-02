import { GraphQLClient } from '@sitecore-jss/sitecore-jss';

export class ItemQueryService<T> {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async fetch(query: string, args: { [key: string]: unknown } | undefined): Promise<T> {
    const response = await this.client.request<T>(query, args);
    return response;
  }
}
