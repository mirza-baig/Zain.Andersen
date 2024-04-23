import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  //VisitorIdentification,
  LayoutServiceData,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { ThemeName, useTheme } from 'lib/context/ThemeContext';
import MetaData from './helpers/Meta/MetaData';
import { useRecentlyViewed } from './lib/utils/useRecentlyViewed';
import { useFavorites } from './lib/utils/useFavorites';
import FixLinks from './helpers/FixLinks/FixLinks';
import HeadScripts from './helpers/HeadScripts/HeadScripts';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { Feature } from './.generated/Feature.EnterpriseWeb.model';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
interface LayoutProps {
  layoutData: LayoutServiceData;
  requestedPath?: string;
  site: EwSiteInfo;
}

const FontLinks: Record<ThemeName, string> = {
  aw: 'https://use.typekit.net/msc1fop.css',
  rba: 'https://use.typekit.net/shy7gxo.css',
};

const Layout = ({ layoutData, requestedPath, site }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  const { themeName } = useTheme();

  const { favoriteProducts, favoriteProductsCount } = useFavorites();

  const recentlyViewedLinks = useRecentlyViewed();

  const isPageEditing = layoutData.sitecore.context.pageEditing;

  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  const favicon = layoutData.sitecore?.context?.favIcon;

  const beforeHeadCloseScript = route?.fields?.pageAddScriptsBeforeHeadClose?.value as string;

  const afterBodyOpenScript = route?.fields?.pageAddScriptsAfterBodyOpen?.value as string;

  const beforeBodyCloseScript = route?.fields?.pageAddScriptsBeforeBodyClose?.value as string;

  useEffect(() => {
    const beforeHeadCloseFragment = document
      .createRange()
      .createContextualFragment(beforeHeadCloseScript);
    document.head.append(beforeHeadCloseFragment);

    const afterBodyOpenFragment = document
      .createRange()
      .createContextualFragment(afterBodyOpenScript);
    document.body.prepend(afterBodyOpenFragment);

    const beforeBodyCloseFragment = document
      .createRange()
      .createContextualFragment(beforeBodyCloseScript);
    document.body.append(beforeBodyCloseFragment);

    return () => {
      // Handles the case where element is already removed, in that case there would be no parent
      // element and it will do nothing rather than throw an error.
      beforeHeadCloseFragment.parentElement?.removeChild(beforeHeadCloseFragment);
      afterBodyOpenFragment.parentElement?.removeChild(afterBodyOpenFragment);
      beforeBodyCloseFragment.parentElement?.removeChild(beforeBodyCloseFragment);
    };
  }, [afterBodyOpenScript, beforeBodyCloseScript, beforeHeadCloseScript, themeName]);

  const [fontStyleLoaded, setFontStyleLoaded] = useState(false);
  const router = useRouter();
  const urlPath = router.asPath;

  // On document load, change the font stylesheet back to 'all'.
  // This will make the font load non-blocking to improve load time.
  // Technique from https://www.filamentgroup.com/lab/load-css-simpler/
  // but adopted to work with React because React was re-rendering the link
  // and thus swapping the `media` style each re-rendering causing FOUT.
  useEffect(() => {
    // get link element using querySelecor
    const fontStyleElement = document.querySelector('.fontStyleLink');

    // Update the state once the link is loaded, to update media attribute to 'all'
    if (fontStyleElement) {
      setFontStyleLoaded(true);
    }
  }, []);

  // GTM
  // See https://andersenwindows.atlassian.net/wiki/spaces/EW/pages/3275096077/Local+Google+Tag+Manager+Development for Developer information

  useEffect(() => {
    if (!site.gtmId) {
      return;
    }

    /* Bold Orange datalayer use  for MCP */
    const extractAndCombineTitleValues = (data: Field | undefined): string | undefined => {
      if (!data) {
        return undefined;
      }

      const field = data as unknown as Feature.EnterpriseWeb.Enterprise.Data.Search.FacetTag[];

      if (field?.length > 0) {
        return field.map((item) => item?.fields?.title?.value).join(',');
      }

      return undefined;
    };

    const gtmInitData: TagManagerArgs = {
      gtmId: site.gtmId as string,
      auth: site.gtmAuth as string,
      preview: site.gtmEnvironment as string,
    };

    /* Bold Orange datalayer use  for MCP */
    if (site.name === 'AndersenWindows' && themeName === 'aw') {
      gtmInitData['dataLayer'] = {
        pageType: layoutData.sitecore.route?.fields?.pageType?.value,
        product: layoutData.sitecore.route?.fields?.breadcrumbTitle?.value,
        doorType: extractAndCombineTitleValues(layoutData.sitecore.route?.fields?.doorType),
        productType: extractAndCombineTitleValues(layoutData.sitecore.route?.fields?.productType),
        windowType: extractAndCombineTitleValues(layoutData.sitecore.route?.fields?.windowType),
        productSeries: extractAndCombineTitleValues(
          layoutData.sitecore.route?.fields?.productSeries
        ),
      };
    }

    TagManager.initialize(gtmInitData);

    const handleDocumentClick = (event: Event) => {
      if (event.target instanceof Element) {
        const target = event.target;

        // Handle click for authored CTAs
        if (target.hasAttribute('data-gtm-click')) {
          const dataLayer: Record<string, string | null> = {};

          for (const name of target.getAttributeNames()) {
            if (name.startsWith('data-gtm-dl-')) {
              const key = name.replace('data-gtm-dl-', '').replaceAll('-', '_');
              dataLayer[key] = target.getAttribute(name);
            }
          }

          TagManager.dataLayer({ dataLayer });
          return;
        }

        // Handle click for RTE CTAs
        // Note: We don't need to handle nav_click gtm event as its not likely to have the RTE in navigation components
        else if (target instanceof HTMLAnchorElement && target.closest('div.body-copy')) {
          TagManager.dataLayer({
            dataLayer: {
              event: target.href.startsWith('tel:') ? 'click_to_call' : 'cta_click',
            },
          });
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [site, layoutData, themeName]);

  useEffect(() => {
    if (!site.gtmId) {
      return;
    }

    pushGTMDataOnLoad(); //Push data to gtm on load of the page

    // "pushGTMDataOnLoad" function is not going to be changed.
    // We can ignore react-hooks/exhaustive-deps warning for this useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [site?.gtmId, router?.asPath]);

  const pushGTMDataOnLoad = () => {
    const pageLevels = (layoutData.sitecore.context?.itemPath as string)
      ?.replace(/^\/+|\/+$/g, '')
      ?.split('/');

    TagManager.dataLayer({
      dataLayer: {
        event: 'fireTags',
        pageInformation: {
          ...(() => {
            const _levels = {};
            if (pageLevels?.length === 0) {
              return {};
            }

            pageLevels?.forEach((level, index) => {
              if (level) {
                //@ts-ignore We can index _levels with `page_level_${index}`. We can ignore ts error
                _levels[`page_level_${index + 1}`] = level.toLowerCase() || '';
              }
            });
            return _levels;
          })(),
        },
        siteInformation: {
          brand: site.name,
        },
      },
    });
  };

  return (
    <>
      <Head>
        {/* https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/ */}
        {/* Preconnect/reload as early as possible */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="preload" href={FontLinks[themeName]} as="style" />
        <link rel="icon" href={favicon?.url} />

        {urlPath === '/' &&
          site.name === 'AndersenWindows' &&
          themeName === 'aw' &&
          ReactHtmlParser(
            '<script type="application/ld+json">{"@context":"http://schema.org","@type":"Organization","@id":"https://www.andersenwindows.com/","url":"https://www.andersenwindows.com","email":"Example@example.com","name":"Andersen Windows","telephone":"+1-800-426-4261","logo":"https://techpub1.andersenwindows.com//Publications/Images/AW_Logo.png","sameAs":["https://www.facebook.com/AndersenWindows","https://www.pinterest.com/andersenwindows/","https://www.instagram.com/andersen_windows/","https://www.houzz.com/photos/andersen-windowsphbr0lbl-bl~l_8256","https://www.youtube.com/user/AndersenWindow","https://www.wikidata.org/wiki/Q4753960","https://twitter.com/andersenwindow/123"]}</script>'
          )}
        {/* Load font style as print and swap to all to make it non-blocking */}
        <link
          className="fontStyleLink"
          rel="stylesheet"
          href={FontLinks[themeName]}
          // Delay loading font until document is loaded.  See useEffect above.
          media={fontStyleLoaded ? 'all' : 'print'}
        />

        <noscript>
          <link rel="stylesheet" href={FontLinks[themeName]} />
        </noscript>
      </Head>
      <MetaData requestedPath={requestedPath} hostName={site.canonicalHostName} />
      <HeadScripts />
      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      {/*<VisitorIdentification />*/}

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={`${mainClassPageEditing}`}>
        {/* Inline styling is required for any element between the mainClassPageEditing div element and the <Placeholder> so that elements within the header
            can use the main content div for position purposes. */}
        <header className="inline">
          <div id="header" className="inline">
            {route && (
              <Placeholder
                name="headless-header"
                rendering={route}
                favoriteProductsCount={favoriteProductsCount}
              />
            )}
          </div>
        </header>
        <main>
          <div id="hero">
            {route && (
              <Placeholder
                name="headless-hero"
                rendering={route}
                favoriteProducts={favoriteProducts}
              />
            )}
          </div>
          <div id="main">
            {route && (
              <Placeholder
                name="headless-main"
                rendering={route}
                recentlyViewedLinks={recentlyViewedLinks}
                favoriteProducts={favoriteProducts}
                hideStickyForm={route?.fields?.hideStickyForm?.value || false}
              />
            )}
          </div>
          {/* Added per support case CS0429235 until we upgrade to new version of JSS*/}
          <FixLinks></FixLinks>
        </main>
        <div id="pre-footer">
          {route && <Placeholder name="headless-prefooter" rendering={route} />}
        </div>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
