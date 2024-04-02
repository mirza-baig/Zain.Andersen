import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SitecorePageProps } from 'lib/page-props';
import { ThemeContext } from 'lib/context/ThemeContext';
import 'assets/app.css';
import { ModalIdContextProvider } from 'lib/context/GenericModalIDContext';
import { StickyBannerProvider } from 'lib/context/StickyBannerContext';
import { AzureAppInsightsClient } from 'lib/azure-appinsights';
import { FeatureTogglesContext } from 'lib/context/FeatureToggleContext';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { Dynatrace } from 'lib/dynatrace';

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  const site = pageProps.site as EwSiteInfo;

  const router = useRouter();

  // GTM
  // See https://andersenwindows.atlassian.net/wiki/spaces/EW/pages/3275096077/Local+Google+Tag+Manager+Development for Developer information
  useEffect(() => {
    if (!site.gtmId) {
      return;
    }

    TagManager.initialize({
      gtmId: site.gtmId as string,
      auth: site.gtmAuth as string,
      preview: site.gtmEnvironment as string,
    });

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
  }, [site?.gtmAuth, site?.gtmEnvironment, site?.gtmId]);

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
    const pageLevels = (pageProps.layoutData.sitecore.context?.itemPath as string)
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
    // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
    // Note Next.js does not (currently) provide anything for translation, only i18n routing.
    // If your app is not multilingual, next-localization and references to it can be removed.
    <>
      <Dynatrace
        agentUri={process.env.NEXT_PUBLIC_EW_DYNATRACE_AGENT_URI}
        reportUrl={process.env.NEXT_PUBLIC_EW_DYNATRACE_REPORT_URL}
        appId={site?.dynatraceAppId}
      />

      <AzureAppInsightsClient
        connectionString={process.env.NEXT_PUBLIC_EW_APPLICATIONINSIGHTS_CONNECTION_STRING}
        roleName="Rendering"
        roleInstance={site?.name}
      >
        <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
          <FeatureTogglesContext.Provider value={pageProps.featureToggles}>
            <ThemeContext.Provider value={site?.theme}>
              <ModalIdContextProvider>
                <StickyBannerProvider>
                  <div className={site?.theme}>
                    <Component {...rest} />
                    <SpeedInsights route={router.pathname} />
                  </div>
                </StickyBannerProvider>
              </ModalIdContextProvider>
            </ThemeContext.Provider>
          </FeatureTogglesContext.Provider>
        </I18nProvider>
      </AzureAppInsightsClient>
    </>
  );
}

export default App;
