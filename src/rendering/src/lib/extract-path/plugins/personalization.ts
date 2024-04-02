import { Plugin } from '..';
import { normalizePersonalizationRewrite } from 'lib/personalization';

class PersonalizationPlugin implements Plugin {
  exec(path: string) {
    // Remove site rewrite segment from the path
    return normalizePersonalizationRewrite(path);
  }
}

export const personalizationPlugin = new PersonalizationPlugin();
