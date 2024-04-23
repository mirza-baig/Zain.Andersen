import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';
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
