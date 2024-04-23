import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { ComponentRendering, Field, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { deepSearchWithParent } from 'lib/utils/object-utils';
import { asyncForEach } from 'lib/utils/async-utils';
import { getRulesFromStringField } from 'lib/rules/serialization';
import { RuleContext } from 'lib/rules/rules';
import { itemPersonalizationParametersFactory } from 'lib/personalization/item-personalization-parameters';
import { Plugin } from '..';

class ItemPersonalizationPlugin implements Plugin {
  order = 25;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    // Don't apply personalization for preview
    if (context.preview) {
      return props;
    }

    const route = props.layoutData.sitecore?.route;
    if (!route) {
      return props;
    }

    // Apply personalization
    const results = deepSearchWithParent<ComponentRendering | Item>(
      route,
      (x) => !!x?.fields?.itemPersonalizationRules
    );

    let ruleContext = new RuleContext();
    ruleContext.parameters['pageId'] = props.layoutData.sitecore.route?.itemId;
    ruleContext = await itemPersonalizationParametersFactory.extend(ruleContext, props);

    await asyncForEach(results, async (res) => {
      const root = res.result?.fields;

      if (!root) {
        return;
      }

      const hideByDefault = root.hideByDefault as Field<boolean>;
      const itemPersonalizationRules = root.itemPersonalizationRules as Field<string>;
      const rules = getRulesFromStringField(itemPersonalizationRules);
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

export const itemPersonalizationPlugin = new ItemPersonalizationPlugin();
