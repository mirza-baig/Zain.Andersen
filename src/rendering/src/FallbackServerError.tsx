import Head from 'next/head';

/**
 * Rendered in case if we have 500 error and no custom error page configured in Sitecore
 */
const FallbackServerError = (): JSX.Element => (
  <>
    <Head>
      <title>500: Server Error</title>
    </Head>
    <div style={{ padding: 10 }}>
      <h1>An unexpeced error has occurred</h1>
      <a href="/">Go to the Home page</a>
    </div>
  </>
);

export default FallbackServerError;
