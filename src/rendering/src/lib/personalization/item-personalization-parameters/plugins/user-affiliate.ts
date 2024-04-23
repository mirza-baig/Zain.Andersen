import { RuleContext } from 'lib/rules/rules';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';

class UserAffiliatePlugin implements Plugin {
  order = 10;

  async exec(context: RuleContext, props: SitecorePageProps) {
    if (!props.userAffiliate) {
      return context;
    }

    // TODO: Make this a constant or a helper
    context.parameters['userAffiliate'] = props.userAffiliate;

    return context;
  }
}

export const userAffiliatePlugin = new UserAffiliatePlugin();
