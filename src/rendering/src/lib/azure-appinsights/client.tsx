import React, { PropsWithChildren } from 'react';
import { ApplicationInsights, ITelemetryItem } from '@microsoft/applicationinsights-web';
import { ReactPlugin, AppInsightsContext } from '@microsoft/applicationinsights-react-js';

interface State {
  appInsights: ApplicationInsights;
  reactPlugin: ReactPlugin;
}

// store the AI state on `window` so we aren't constantly re-initializing it on every hot-reload during `npm run dev`
// we can't use a `Symbol` for this, as we'd get a new symbol on every hot-reload
const getState = () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (typeof window !== 'undefined' && ((window as any).__AI_STATE__ as State | undefined)) ||
  undefined;

const setState = (state: State) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    w.__AI_STATE__ = state;
  }
};

function getOrInit(connectionString: string, roleName?: string, roleInstance?: string): State {
  let state = getState();
  if (state) {
    return state;
  }

  const reactPlugin = new ReactPlugin();
  const appInsights = new ApplicationInsights({
    config: {
      connectionString: connectionString,
      enableAutoRouteTracking: true, // we don't have a browserHistory to pass to this, so it'll have to use automatic route tracking
      correlationHeaderExcludedDomains: ['*.bazaarvoice.com', '*.api.bazaarvoice.com'],
      enableRequestHeaderTracking: true,
      enableResponseHeaderTracking: true,
      enableAjaxPerfTracking: true,
      isBrowserLinkTrackingEnabled: true,
      extensions: [reactPlugin],
      extensionConfig: {
        [reactPlugin.identifier]: {},
      },
    },
  });

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    w.appInsights = appInsights.loadAppInsights();
  } else {
    appInsights.loadAppInsights();
  }

  appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview

  const telemetryInitializer = (envelope: ITelemetryItem) => {
    if (envelope.tags == undefined) {
      return;
    }

    envelope.tags['ai.cloud.role'] = roleName;
    envelope.tags['ai.cloud.roleInstance'] = roleInstance;
  };
  appInsights.addTelemetryInitializer(telemetryInitializer);

  state = {
    appInsights,
    reactPlugin,
  };

  setState(state);
  return state;
}

export interface AzureAppInsightsProps {
  connectionString?: string;
  roleName?: string;
  roleInstance?: string;
}

export const AzureAppInsightsClient = ({
  connectionString,
  roleName,
  roleInstance,
  children,
}: PropsWithChildren<AzureAppInsightsProps>) => {
  // we don't want to run this AI setup server-side - that has a separate setup
  if (process.env.NEXT_RUNTIME || !connectionString) {
    return <>{children}</>;
  }

  const state = getOrInit(connectionString, roleName, roleInstance);

  return (
    <AppInsightsContext.Provider value={state.reactPlugin}>{children}</AppInsightsContext.Provider>
  );
};
