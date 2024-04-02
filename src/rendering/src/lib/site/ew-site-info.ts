import { ThemeName } from 'lib/context/ThemeContext';
import { SiteInfo } from 'lib/jss21.2.1/site';

export type EwSiteInfo = SiteInfo & {
  targetHostName?: string;
  theme: ThemeName;
  hasAffiliatePersonalization?: 'true' | 'false';
  canonicalHostName?: string;
  gtmId?: string;
  gtmAuth?: string;
  gtmEnvironment?: string;
  dynatraceAppId?: string;
};
