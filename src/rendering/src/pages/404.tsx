import { ComponentPropsContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { AffiliateContextProvider } from 'lib/context/AffiliateContext';
import { FastSitecoreContext } from 'lib/overrides/FastSitecoreContext';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { siteResolver } from 'lib/site-resolver';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import FallbackNotFound from 'src/FallbackNotFound';
import Layout from 'src/Layout';
import { componentFactory } from 'temp/componentFactory';

/**
 * Rendered for 404 errors on both server and client. Used only in Production mode.
 * @link https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page
 */
type AllErrorPages = {
  siteErrorPages: {
    hostName: string;
    canonicalHostName: string;
    errorPageProps: SitecorePageProps;
  }[];
};

const NotFoundPage: NextPage<AllErrorPages> = (allErrorPageProps) => {
  const [props, setProps] = useState<SitecorePageProps | undefined>();

  useEffect(() => {
    const hostName = window?.location.hostname.toLowerCase() || '';

    function matchesPattern(hostname: string, pattern: string): boolean {
      // dots should be treated as chars
      // stars should be treated as wildcards
      const regExpPattern = pattern.replace(/\./g, '\\.').replace(/\*/g, '.*');
      const regExp = new RegExp(`^${regExpPattern}$`, 'gi');

      return !!hostname.match(regExp);
    }

    function getSiteErrorPage(errorPages: AllErrorPages) {
      for (const siteErrorPage of errorPages.siteErrorPages) {
        if (matchesPattern(hostName, siteErrorPage.hostName)) {
          return siteErrorPage.errorPageProps;
        }
      }
      throw new Error(`Could not resolve site for host ${hostName}`);
    }

    const pageProps = getSiteErrorPage(allErrorPageProps);

    if (pageProps) {
      setProps(pageProps);
    }
  }, [allErrorPageProps, allErrorPageProps.siteErrorPages]);

  // If we don't have "_404" page defined in Sitecore
  if (!props) {
    return <FallbackNotFound />;
  }

  const requestedPath = `/_404`;

  return (
    <ComponentPropsContext value={props.componentProps}>
      <AffiliateContextProvider userAffiliate={props.userAffiliate} pageAffiliate={null}>
        <FastSitecoreContext componentFactory={componentFactory} layoutData={props.layoutData}>
          <Layout
            layoutData={props.layoutData}
            requestedPath={requestedPath}
            site={props.site as EwSiteInfo}
          />
        </FastSitecoreContext>
      </AffiliateContextProvider>
    </ComponentPropsContext>
  );
};

/** 404 page works different from _error and getStaticProps works just fine */
export const getStaticProps: GetStaticProps = async () => {
  // We can call layout service directly here unlike in _error since this only runs on the server
  let props: SitecorePageProps | null = null;
  const errorPages: AllErrorPages = { siteErrorPages: [] };

  for (const site of siteResolver.sites) {
    try {
      props = await sitecorePagePropsFactory.create({
        params: {
          path: [`_site_${site.name}/_404`],
        },
      });

      if (props && site.hostName != '*') {
        errorPages.siteErrorPages.push({
          hostName: site.hostName,
          canonicalHostName: site.canonicalHostName as string,
          errorPageProps: props,
        });
      }
    } catch (error) {
      console.log('Error occurred while fetching error pages');
      console.log(error);
    }
  }

  return {
    props: { ...props, ...errorPages },
  };
};

export default NotFoundPage;
