import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import {
  ComponentRendering,
  Field,
  GraphQLRequestClient,
  Item,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';

import config from 'temp/config';
import { getAffiliateData, getAffiliateIdFromRewrite } from 'lib/affiliate/utils';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { deepSearchWithParent } from 'lib/utils/object-utils';
import { asyncForEach } from 'lib/utils/async-utils';
import { getRulesFromStringField } from 'lib/rules/serialization';
import { RuleContext } from 'lib/rules/rules';

class AffiliatePropsPlugin implements Plugin {
  order = 20;
  _graphqlClient: GraphQLRequestClient;

  constructor() {
    this._graphqlClient = new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if ((props.site as EwSiteInfo)?.hasAffiliatePersonalization?.toLowerCase() !== 'true') {
      // If site is not RBA return props.
      return props;
    }
    let affiliateId = '';
    if (context.preview) {
      // If experience editor or CM preview mode set the default affiliate.
      affiliateId = '0';
    } else {
      // If preview or www vercel apps then get the affiliate from page props.
      affiliateId = getAffiliateIdFromRewrite(props.originalPath);
    }
    props.userAffiliate = await getAffiliateData(this._graphqlClient, affiliateId);

    // Don't apply affiliate personalization for preview
    if (context.preview) {
      return props;
    }

    const route = props.layoutData.sitecore?.route;
    if (!route) {
      return props;
    }

    // Apply affiliate personalization
    const results = deepSearchWithParent<ComponentRendering | Item>(
      route,
      (x) => !!x?.fields?.affiliatePersonalizationRules
    );

    const ruleContext = new RuleContext();
    ruleContext.parameters['userAffiliate'] = props.userAffiliate;
    ruleContext.parameters['pageId'] = props.layoutData.sitecore.route?.itemId;
    await asyncForEach(results, async (res) => {
      const root = res.result?.fields;

      if (!root) {
        return;
      }

      const hideByDefault = root.hideByDefault as Field<boolean>;
      const affiliatePersonalizationRules = root.affiliatePersonalizationRules as Field<string>;
      const rules = getRulesFromStringField(affiliatePersonalizationRules);
      ruleContext.parameters['hide'] = hideByDefault.value;

      rules.runFirstMatching(ruleContext);

      if (ruleContext.parameters['hide'] === true) {
        // If it's inside an array, remove it from the array
        if (Array.isArray(res.parent)) {
          (res.parent as unknown[]).splice(parseInt(res.keyOrIndexAsString!), 1);
        } else {
          // Otherwise remove it directly.
          delete res.parent[res.keyOrIndexAsString!];
        }
      }
    });

    return props;
  }
}

export const affiliatePropsPlugin = new AffiliatePropsPlugin();
