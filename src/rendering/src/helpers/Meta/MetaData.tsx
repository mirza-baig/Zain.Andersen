import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';
import { getEnum } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';

export type MetaRobots = 'Follow' | 'Index' | 'No Follow' | 'No Index';
interface MetaDataProps {
  requestedPath?: string;
  hostName?: string;
}

const MetaData = ({ requestedPath, hostName }: MetaDataProps) => {
  const context = useSitecoreContext();

  const featureToggles = useFeatureToggles();

  const route = context.sitecoreContext.route;

  const page = route as Foundation.EnterpriseWeb.Enterprise.BaseTemplates.Pages.BasePage;

  const fields = page.fields;

  const title = fields?.pageTitle?.value;

  const robots = fields?.pageMetaRobots?.map((_item) => getEnum<MetaRobots>(_item)).join(', ');

  const pagePathName = fields?.pageCanonicalUrl?.value?.href;

  const canonicalUrl =
    pagePathName !== '' ? `${hostName}${pagePathName}` : `${hostName}${requestedPath}`;

  const addTrailingSlash = (url: string): string => (url.endsWith('/') ? url : url + '/');
  const canonicalUrlWithSlash: string = addTrailingSlash(canonicalUrl);
  const renderNameValueMetaTags = () => {
    const returnValue = [];

    const metaNameValues = fields?.pageMetaNameValueList?.value
      ? fields?.pageMetaNameValueList?.value.split('&')
      : '';

    if (metaNameValues.length > 0) {
      let i = 0;
      for (const val of metaNameValues) {
        const keyVal = val.split('=');
        returnValue.push(<meta key={i} name={keyVal[0]} content={keyVal[1]}></meta>);
        i++;
      }
    }
    return returnValue;
  };

  // Note, these tags need to be direct children of <Head> per NextJS docs.
  return (
    <>
      <Head>
        <title>
          {title}
          {featureToggles?.PageTitleTestToggle ? ' - Feature Toggle' : ''}
        </title>

        <meta name="description" content={fields?.pageMetaDescription?.value} />
        <meta name="keywords" content={fields?.pageMetaKeywords?.value} />
        <meta name="robots" content={robots} />

        {/* Add Name Value List Meta tag items */}
        {renderNameValueMetaTags()}

        {
          // Robots meta for coveo specifically
          !fields?.excludeFromSearch?.value ? (
            <meta name="coveobot" content="all" />
          ) : (
            <meta name="coveobot" content="noindex nofollow" />
          )
        }

        <meta name="featuredImage" content={fields?.featuredImage?.value?.src} />
      </Head>

      <Head>
        <link rel="canonical" href={canonicalUrlWithSlash} />;
      </Head>

      <Head>
        {/* OG tags are the only common meta tags that use "property" instead of "name" */}
        <meta
          property="og:title"
          content={fields?.openGraphTitle?.value ?? fields?.siteSearchHeadline?.value}
        />
        <meta
          property="og:description"
          content={fields?.openGraphDescription?.value ?? fields?.siteSearchDescription?.value}
        />
        <meta
          property="og:image"
          content={fields?.openGraphImage?.value?.src ?? fields?.primaryImage?.value?.src}
        />
        <meta property="og:url" content={fields?.openGraphUrl?.value?.href} />
      </Head>
    </>
  );
};

export default MetaData;
