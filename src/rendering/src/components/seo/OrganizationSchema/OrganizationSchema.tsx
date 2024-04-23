// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';

export type OrganizationSchemaProps =
  Feature.EnterpriseWeb.Enterprise.Components.Seo.OrganizationSchema;
const OrganizationSchema = (props: OrganizationSchemaProps) => {
  const { sitecoreContext } = useSitecoreContext();

  if (!props.fields) {
    return <></>;
  }
  const ldJsonScript = {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    url: sitecoreContext?.ewSiteInfo?.canonicalHostName || '',
    logo: props.fields?.logo?.value?.src || '',
    name: props.fields?.name?.value || '',
    description: props.fields?.description?.value || '',
    email: props.fields?.email?.value || '',
    telephone: props.fields?.telephone?.value || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.fields?.street?.value || '',
      addressLocality: props.fields?.city?.value || '',
      addressCountry: props.fields?.country?.value || '',
      postalCode: props.fields?.zip?.value || '',
    },
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonScript) }}
      />
    </Head>
  );
};

export default withDatasourceCheck()<OrganizationSchemaProps>(OrganizationSchema);
