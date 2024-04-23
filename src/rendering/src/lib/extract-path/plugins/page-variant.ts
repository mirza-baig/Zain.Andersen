import { Plugin } from '..';
import { normalizePageVariantRewrite } from 'lib/personalization';

class PageVariantPlugin implements Plugin {
  exec(path: string) {
    // Remove site rewrite segment from the path
    return normalizePageVariantRewrite(path);
  }
}

export const pageVariantPlugin = new PageVariantPlugin();
