import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';
import { PersonalizationPageProps } from 'lib/personalization/personalization-pageprops';
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
class PersonalizationPlugin implements Plugin {
  private personalizationPageProps: PersonalizationPageProps;

  order = 15;

  constructor() {
    this.personalizationPageProps = new PersonalizationPageProps({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) {
      return props;
    }
    return this.personalizationPageProps.getHandler()(props, context);
  }
}

export const personalizationPlugin = new PersonalizationPlugin();
