// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';

type WebsiteSchemaType = {
  '@context': 'https://schema.org/';
  '@type': 'WebSite';
  url: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
};

export type WebsiteSchemaProps = Feature.EnterpriseWeb.Enterprise.Components.Seo.WebsiteSchema;
const WebsiteSchema = (props: WebsiteSchemaProps) => {
  const { sitecoreContext } = useSitecoreContext();

  if (!sitecoreContext.ewSiteInfo?.name) {
    return <></>;
  }

  const canonicalHostName = sitecoreContext.ewSiteInfo?.canonicalHostName;

  if (!canonicalHostName) {
    return <></>;
  }

  // Search Markup
  const ldJsonScript: WebsiteSchemaType = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    url: canonicalHostName,
  };

  const searchPageUrl = props.fields?.searchPage?.value?.href;
  if (searchPageUrl) {
    ldJsonScript.potentialAction = {
      '@type': 'SearchAction',
      target: `${canonicalHostName}${searchPageUrl}#q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    };
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonScript) }}
      />
    </Head>
  );
};

export default withDatasourceCheck()<WebsiteSchemaProps>(WebsiteSchema);
