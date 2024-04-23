// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';

export type ProductSchemaProps = Feature.EnterpriseWeb.Enterprise.Components.Seo.ProductSchema;
const ProductSchema = (props: ProductSchemaProps) => {
  if (!props.fields) {
    return <></>;
  }

  const ldJsonScript = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.fields?.productItem?.fields?.productName?.value || '',
    image: props.fields?.productItem?.fields?.productImage?.value?.src || '',
    description: props.fields?.productItem?.fields?.productDescription?.value || '',
    brand: {
      '@type': 'Brand',
      name: props.fields?.brandName?.fields?.Value.value || '',
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

export default withDatasourceCheck()<ProductSchemaProps>(ProductSchema);
