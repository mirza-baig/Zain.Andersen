import { ComponentPropsContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { AffiliateContextProvider } from 'lib/context/AffiliateContext';
import { FastSitecoreContext } from 'lib/overrides/FastSitecoreContext';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { GetStaticProps, NextPage } from 'next';
import FallbackServerError from 'src/FallbackServerError';
import Layout from 'src/Layout';
import { componentFactory } from 'temp/componentFactory';

/**
 * NOTE: Just the `_error.tsx` page alone appears to work locally, but not in Vercel.
 * Just this by itself without `error.tsx` shows a client-side error, at least locally, so having both pages.
 *
 * Rendered for 500 errors on both server and client. Used only in Production mode.
 * @link https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page
 */
const ServerErrorPage: NextPage<SitecorePageProps> = ({
  componentProps,
  layoutData,
  site,
  userAffiliate,
}) => {
  // If we don't have "_500" page defined in Sitecore
  if (!layoutData?.sitecore?.route) {
    return <FallbackServerError />;
  }

  const requestedPath = `/_500`;

  return (
    <ComponentPropsContext value={componentProps}>
      <AffiliateContextProvider userAffiliate={userAffiliate} pageAffiliate={null}>
        <FastSitecoreContext componentFactory={componentFactory} layoutData={layoutData}>
          <Layout layoutData={layoutData} requestedPath={requestedPath} site={site as EwSiteInfo} />
        </FastSitecoreContext>
      </AffiliateContextProvider>
    </ComponentPropsContext>
  );
};

/** 500 page works different from _error and getStaticProps works just fine */
export const getStaticProps: GetStaticProps = async () => {
  // We can call layout service directly here unlike in _error since this only runs on the server
  let props: SitecorePageProps | null = null;

  if (!process.env.DISABLE_SSG_FETCH) {
    try {
      props = await sitecorePagePropsFactory.create({
        params: {
          path: ['_500'],
        },
      });
    } catch (error) {
      console.log('Error occurred while fetching error pages');
      console.log(error);
    }
  }

  return {
    props: { ...props },
  };
};

export default ServerErrorPage;
