import debug from 'debug';

const enterpriseWebNamespace = 'entwb';
const coveoRootNamespace = 'coveo';

export type Debugger = debug.Debugger;

// eslint-disable-next-line import/no-anonymous-default-export
export const Debug = {
  coveoItemFetcher: debug(`${coveoRootNamespace}:item-fetcher`),
  productByBVId: debug(`${enterpriseWebNamespace}:productByBVId`),
  robots: debug(`${enterpriseWebNamespace}:robots`),
  sitemapxml: debug(`${enterpriseWebNamespace}:sitemapxml`),
  itemQuery: debug(`${enterpriseWebNamespace}:item-query`),
  affiliates: debug(`${enterpriseWebNamespace}:affiliates`),
  redirects: debug(`${enterpriseWebNamespace}:redirects`),
  mediaRedirects: debug(`${enterpriseWebNamespace}:media-redirects`),
  multilanguage: debug(`${enterpriseWebNamespace}:multilanguage`),
  featureToggle: debug(`${enterpriseWebNamespace}:feature-toggle`),
  personalization: debug(`${enterpriseWebNamespace}:personalization`),
  rules: debug(`${enterpriseWebNamespace}:rules`),
};
