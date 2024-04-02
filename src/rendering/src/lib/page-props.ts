import { Redirect } from 'next';
import {
  DictionaryPhrases,
  ComponentPropsCollection,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { HTMLLink } from 'lib/jss21.2.1';
import { Affiliate } from './context/AffiliateContext';
import { MockErrorData } from 'src/helpers/ErrorHandling/HandleMockError';
import { SiteInfo } from './jss21.2.1/site';
import { FeatureToggles } from './feature-toggles';

/**
 * Sitecore page props
 */
export type SitecorePageProps = {
  site: SiteInfo;
  userAffiliate: Affiliate;
  pageAffiliate: Affiliate | null;
  featureToggles: FeatureToggles;
  locale: string;
  dictionary: DictionaryPhrases;
  componentProps: ComponentPropsCollection;
  notFound: boolean;
  layoutData: LayoutServiceData;
  redirect?: Redirect;
  headLinks: HTMLLink[];
  originalPath: string;
  /** Used when we are testing our error handling */
  mockError?: MockErrorData | null;
  requestedPath?: string;
};
