import { LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import { Debug } from 'lib/constants/debug';
import { DEFAULT_PAGE_VARIANT } from './utils';
import { getPageVariantRewriteData } from './utils';
import { GraphQLClient, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';

/**
 * extended PersonalizationMiddlewareConfig config type for PersonalizationMiddleware
 */
export type PageVariantPagePropsPluginConfig = {
  /**
   * Your Graphql endpoint
   */
  endpoint: string;
  /**
   * The API key to use for authentication
   */
  apiKey: string;
};

type PageVariantQueryResult = {
  item: {
    layout: LayoutServiceData;
  };
};

export class PageVariantPagePropsPlugin {
  private graphQLClient: GraphQLClient;

  protected get query(): string {
    return /* GraphQL */ `
      query PageVariantsQuery($variantId: String!, $language: String!) {
        item(path: $variantId, language: $language) {
          layout: rendered
        }
      }
    `;
  }

  /**
   * @param {PageVariantPagePropsPluginConfig} [config] Page Variants page props plugin config
   */
  constructor(protected config: PageVariantPagePropsPluginConfig) {
    // NOTE: we provide native fetch for compatibility on Next.js Edge Runtime
    // (underlying default 'cross-fetch' is not currently compatible: https://github.com/lquixada/cross-fetch/issues/78)
    this.graphQLClient = this.getGraphQLClient();
  }

  /**
   * Gets the Next.js middleware handler with error handling
   * @returns middleware handler
   */
  public getHandler(): (
    props: SitecorePageProps,
    context: GetServerSidePropsContext | GetStaticPropsContext
  ) => Promise<SitecorePageProps> {
    return async (props, context) => {
      try {
        return await this.handler(props, context);
      } catch (error) {
        console.log('Page Variant page props plugin failed:');
        console.log(error);
        return props;
      }
    };
  }

  private handler = async (
    props: SitecorePageProps,
    context: GetServerSidePropsContext | GetStaticPropsContext
  ): Promise<SitecorePageProps> => {
    const startTimestamp = Date.now();
    const path = props.originalPath;
    let language = context.locale || context.defaultLocale || 'en';

    if (language == 'default') {
      language = 'en';
    }

    Debug.personalization('page variant page props plugin start: %o', {
      path,
      language,
    });

    const personalizationData = getPageVariantRewriteData(props.originalPath);
    const variantId = personalizationData.pageVariantId;

    if (variantId == DEFAULT_PAGE_VARIANT) {
      Debug.personalization('skipped (default)');
      return props;
    }

    Debug.personalization('fetching page variant %o', { variantId, language });

    // Get the page variant from Experience Edge
    let data: PageVariantQueryResult;
    try {
      data = await this.graphQLClient.request<PageVariantQueryResult>(this.query, {
        variantId,
        language,
      });
    } catch (error) {
      throw error;
    }

    if (!data?.item?.layout) {
      return props;
    }

    // Apply personalization
    props.layoutData.sitecore.route!.placeholders = data.item.layout.sitecore.route!.placeholders;

    Debug.personalization(
      'page variant page props plugin end in %dms',
      Date.now() - startTimestamp
    );

    return props;
  };

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
