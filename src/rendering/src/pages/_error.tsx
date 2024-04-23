import { ComponentPropsContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { AffiliateContextProvider } from 'lib/context/AffiliateContext';
import { FastSitecoreContext } from 'lib/overrides/FastSitecoreContext';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { NextPage } from 'next';
import FallbackServerError from 'src/FallbackServerError';
import Layout from 'src/Layout';
import { componentFactory } from 'temp/componentFactory';

/**
 * NOTE: This appears to be needed in addition to the `500.tsx` page.  With just the 500.tsx page we see the custom error render
 * then get replaced with a generic client-side error message.
 *
 * Rendered for 500 errors on both server and client. Used only in Production mode.
 * @link https://nextjs.org/docs/advanced-features/custom-error-page#more-advanced-error-page-customizing
 */
const ErrorPage: NextPage<SitecorePageProps> = ({
  componentProps,
  layoutData,
  userAffiliate,
  site,
}) => {
  // If we don't have "_500" page defined in Sitecore
  if (!layoutData?.sitecore?.route) {
    return <FallbackServerError />;
  }

  return (
    <ComponentPropsContext value={componentProps}>
      <AffiliateContextProvider userAffiliate={userAffiliate} pageAffiliate={null}>
        <FastSitecoreContext componentFactory={componentFactory} layoutData={layoutData}>
          <Layout layoutData={layoutData} site={site as EwSiteInfo} />
        </FastSitecoreContext>
      </AffiliateContextProvider>
    </ComponentPropsContext>
  );
};

// NOTE: Even though the docs for `getInitialProps` says:
// "Good to know: getInitialProps is a legacy API. We recommend using getStaticProps or getServerSideProps instead.""
// This is still required for the _error page.  Using getStaticProps results in a client-side error.
ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  let pageProps: SitecorePageProps | null = null;
  // Fetch the layout data for the error page
  try {
    if (statusCode) {
      pageProps = await sitecorePagePropsFactory.create({
        params: {
          path: ['_500'],
        },
      });
    } else {
      const clientProps = await fetch('/api/system/error/fetch-error');
      pageProps = await clientProps.json();
    }
  } catch (error) {
    console.log('Error occurred while fetching error pages');
    console.log(error);
  }

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    if (typeof w.appInsights !== 'undefined') {
      w.appInsights.trackException({ exception: err });
    }

    if (typeof w.dtrum !== 'undefined') {
      w.dtrum.reportError(err);
    }
  }

  return { ...pageProps } as SitecorePageProps;
};

export default ErrorPage;
