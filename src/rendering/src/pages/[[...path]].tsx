import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, PreviewData } from 'next';
import FallbackNotFound from 'src/FallbackNotFound';
import Layout from 'src/Layout';
import {
  ComponentPropsContext,
  handleEditorFastRefresh,
  StaticPath,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
// different componentFactory method will be used based on whether page is being edited
import { componentFactory, editingComponentFactory } from 'temp/componentFactory';
import { sitemapFetcher } from 'lib/sitemap-fetcher';
import HandleMockError, { getMockError } from 'src/helpers/ErrorHandling/HandleMockError';
import { ParsedUrlQuery } from 'querystring';
import { AffiliateContextProvider } from 'lib/context/AffiliateContext';
import { useSourcingCookies } from 'lib/sourcing-cookies';
import { FastSitecoreContext } from 'lib/overrides/FastSitecoreContext';
import { EwSiteInfo } from 'lib/site/ew-site-info';

const SitecorePage = ({
  site,
  notFound,
  componentProps,
  layoutData,
  mockError,
  userAffiliate: affiliate,
  pageAffiliate: retailerAffiliate,
  requestedPath,
}: SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  // Create sourcing cookies from any query strings
  useSourcingCookies(site);

  if (mockError) {
    return <HandleMockError {...mockError} />;
  }

  if (notFound || !layoutData.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <FallbackNotFound />;
  }

  const isEditing = layoutData.sitecore.context.pageEditing;

  return (
    <ComponentPropsContext value={componentProps}>
      <AffiliateContextProvider userAffiliate={affiliate} pageAffiliate={retailerAffiliate}>
        <FastSitecoreContext
          componentFactory={isEditing ? editingComponentFactory : componentFactory}
          layoutData={layoutData}
        >
          <Layout layoutData={layoutData} requestedPath={requestedPath} site={site as EwSiteInfo} />
        </FastSitecoreContext>
      </AffiliateContextProvider>
    </ComponentPropsContext>
  );
};

// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).
export const getStaticPaths: GetStaticPaths = async (context) => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

  overrideDefaultLanguageFromContext(context);

  // This part is only for `getStaticPaths`.
  // We should not call from `getStaticProps` as it will break the path resolution.
  if (context.locales && context.locales[0] === 'default') {
    // Remove the "default" language
    context.locales.shift();
  }

  let paths: StaticPath[] = [];
  let fallback: boolean | 'blocking' = 'blocking';

  if (process.env.NODE_ENV !== 'development' && !process.env.DISABLE_SSG_FETCH) {
    try {
      /* *
      * Removed the language fallback during SSG, as the AW sites are not having en-CA lanugage we do not need SSG for en-CA pages
      For RBA we are curretnly generating SSG only for the Home page through graphql-affiliate-service plugin, and rest of the pages are ISR. 
      **/
      paths = await sitemapFetcher.fetch(context);
    } catch (error) {
      console.log('Error occurred while generating static paths');
      console.log(error);
    }
    fallback = process.env.EXPORT_MODE ? false : fallback;
  }

  return {
    paths,
    fallback,
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps = async (context) => {
  overrideDefaultLanguageFromContext(context);

  const props = await sitecorePagePropsFactory.create(context);

  const mockError = getMockError(context);

  if (mockError?.throwStaticPropsError) {
    throw Error('mock error getStaticProps');
  }

  props.mockError = mockError;
  // Check if we have a redirect (e.g. custom error page)
  if (props.redirect) {
    return {
      redirect: props.redirect,
    };
  }

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: parseInt(process.env.EW_ISR_INTERVAL || '5') || 5, // In seconds
    notFound: props.notFound && !mockError, // Returns custom 404 page with a status code of 404 when true
  };
};

export default SitecorePage;

/**
 * Update the context locale to remove the "default" language since it's not a real language
 * but a dummy value that lets us handle language in middleware
 * @param context The props context
 */
function overrideDefaultLanguageFromContext(
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) {
  if (context.locale === 'default') {
    context.locale = 'en';
  }
  if (context.defaultLocale === 'default') {
    context.defaultLocale = 'en';
  }
}
