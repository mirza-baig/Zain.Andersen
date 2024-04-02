import Script from 'next/script';

export interface DynatraceProps {
  agentUri?: string;
  reportUrl?: string;
  appId?: string;
}

export const Dynatrace = ({ agentUri, reportUrl, appId }: DynatraceProps) => {
  if (!(agentUri && reportUrl && appId)) {
    return null;
  }

  return (
    <Script
      src={`https://js-cdn.dynatrace.com/jstag/${agentUri}/${reportUrl}/${appId}_complete.js`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
};
