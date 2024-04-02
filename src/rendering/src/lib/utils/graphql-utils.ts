import { ItemExtFieldValue } from 'src/lib/types/model';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecoreIds } from 'lib/constants';
import config from 'temp/config';
import { asyncForEach } from './async-utils';
import { batchRequests } from 'graphql-request';

type ItemRequestResult = {
  item: {
    id: string;
    name: string;
    path: string;
    displayName: string;
    template: {
      id: string;
      name: string;
    };
    url: {
      path: string;
    };
    fields: {
      name: string;
      jsonValue: ItemExtFieldValue;
    }[];
  };
  search: {
    total: number;
    results: {
      id: string;
      path: string;
      children: {
        results: {
          id: string;
          path: string;
        }[];
      };
    }[];
  };
};

const query = `
    query DataSourceQueryWithChildren($id: String!, $language: String!){
      item(path: $id, language: $language) {
        id
        name
        path
        displayName
        template {
          id
          name
        }
        url {
          path
        }
        fields {
          name
          jsonValue
        }
      }
      search(
        where: {
          AND: [
            { name: "_templates", value: "${SitecoreIds.Foundation.Enterprise.BaseTemplates._BaseSerializeChildren.TemplateId}" }
            { name: "_path", value: $id }
            { name: "_language", value: $language }
          ]
        }
        first: 100
      ) {
        total
        results {
          id
          path
          children {
            results {
              id
              path
            }
          }
        }
      }
    }
    `;

export const getDataSourceFields = async (id: string, language: string) => {
  // Even though we're only getting one result, use batchQuery for consistency
  const [result] = await batchQuery<ItemRequestResult>(query, [{ id }], language);

  const item = await processItemFromResult(result, language);

  return item;
};

async function processItemFromResult(result: ItemRequestResult, language: string) {
  const children: Item[] = [];

  const item: Item = {
    id: result.item.id,
    name: result.item.name,
    displayName: result.item.displayName,
    templateId: result.item.template.id,
    templateName: result.item.template.name,
    url: result.item.url.path,
    fields: { children },
  };

  result.item.fields.forEach((field) => {
    if (field.jsonValue) {
      item.fields[field.name] = field.jsonValue;
    }
  });

  await asyncForEach(result.search.results, async (result): Promise<void> => {
    // There isn't a way to query a specific item using a Search query unfortunately
    // So we have to use at "_path" query (which returns descendants) and discard
    // all except the item we're looking for.
    if (result.id === item.id) {
      // From that item, we run the same query against against each of the children
      // Batch query will send a single GraphQL request as a batch instead of individual sequential requests
      const batchResults = await batchQuery<ItemRequestResult>(
        query,
        result.children.results,
        language
      );

      // Then we recursively call this processItemFromResult function to process the data.
      await asyncForEach(batchResults, async (res2) => {
        const child = await processItemFromResult(res2, language);
        children.push(child);
      });
    }
  });

  return item;
}

interface HasId {
  id: string;
}

interface DataQuery<TData> {
  data?: TData;
}

export async function batchQuery<TResults>(query: string, list: HasId[], language: string) {
  // We only want entries that have an ID
  const validList = list.filter((x) => x.id);

  const result = validList.length
    ? await batchRequests<[DataQuery<TResults>]>(
        config.graphQLEndpoint,
        // Map the query and the variables passed
        validList.map((x) => ({
          document: query,
          variables: {
            id: (x as HasId).id,
            language: language,
          },
        })),
        {
          sc_apikey: config.sitecoreApiKey,
        }
      )
    : ([] as DataQuery<TResults>[]);

  // If there is only 1 result, for some reason it doesn't return an array, so make sure we always have an array
  const resultsArray = Array.isArray(result) ? result : [result];

  return resultsArray.map((x) => x.data).filter((x) => x) as TResults[];
}
