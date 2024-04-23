import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';
import { PageVariantPagePropsPlugin } from 'lib/personalization/pagevariant-pageprops-plugin';
import config from 'temp/config';

/**
 * This is the personalize page props plugin for Next.js.
 * It is used to enable Sitecore personalization of pages in Next.js.
 *
 * The `PersonalizationPageProps` will
 *  1. Make a call to the Sitecore Experience Edge to get the personalization information about the page.
 *  2. Based on the response, make a call to the Sitecore CDP (with request/user context) to determine the page variant.
 *  3. Rewrite the response to the specific page variant.
 */
class PageVariantPlugin implements Plugin {
  private plugin: PageVariantPagePropsPlugin;

  order = 15;

  constructor() {
    this.plugin = new PageVariantPagePropsPlugin({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) {
      return props;
    }
    return this.plugin.getHandler()(props, context);
  }
}

export const pageVariantPlugin = new PageVariantPlugin();
