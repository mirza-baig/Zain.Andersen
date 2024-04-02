// import { normalizeSiteRewrite } from '@sitecore-jss/sitecore-jss-nextjs';
import { Plugin } from '..';
import { normalizeAffiliateRewrite } from 'lib/affiliate/utils';

class AffiliatePlugin implements Plugin {
  exec(path: string) {
    // Remove site rewrite segment from the path
    return normalizeAffiliateRewrite(path);
  }
}

export const affiliatePlugin = new AffiliatePlugin();
