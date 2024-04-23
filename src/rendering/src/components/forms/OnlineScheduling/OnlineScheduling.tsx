// Global
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { FormProps } from '../Form/Form';
import { OnlineSchedulingProvider } from 'lib/forms/OnlineScheduling/OnlineSchedulingContext';
import { useEffect } from 'react';
import Script from 'next/script';
import OnlineSchedulingFormWrapperHelper from './OnlineSchedulingFormWrapper.helper';

export type OnlineSchedulingProps = FormProps;
const OnlineScheduling = (props: OnlineSchedulingProps) => {
  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    // attach vendor CSS, if applicable
    const cssUrl = parameters.get('cssUrl');
    if (cssUrl) {
      let stylesheet = document.getElementById('os-css') as HTMLLinkElement;

      if (!stylesheet) {
        stylesheet = document.createElement('link');
        stylesheet.href = cssUrl;
        stylesheet.rel = 'stylesheet';
        stylesheet.id = 'os-css';
        document.body.appendChild(stylesheet);
      }
    }
  }, []);

  if (!props.fields) {
    return <></>;
  }

  return (
    <OnlineSchedulingProvider>
      <Script src="/iframe-resizer/iframeResizer.contentWindow.min.js" />
      <Component variant="full" dataComponent="forms/onlinescheduling" {...props}>
        <OnlineSchedulingFormWrapperHelper {...props}></OnlineSchedulingFormWrapperHelper>
      </Component>
    </OnlineSchedulingProvider>
  );
};

export default withDatasourceCheck()<OnlineSchedulingProps>(OnlineScheduling);
