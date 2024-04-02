import { IS_EQUAL_TO, performStringComparison } from '../utils';
import { SitecoreIds } from 'lib/constants';
import { RuleContext } from '../rules';
import { WhenCondition } from '../conditions';
import { RuleConditionData } from '../serialization';
import { Affiliate } from 'lib/context/AffiliateContext';

export const AffiliateMatchConditionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Affiliate.AffiliateMatch.ItemId;

export class AffiliateMatchCondition<T extends RuleContext> extends WhenCondition<T> {
  _params: {
    affiliateIdValue: string;
  };
  constructor(condition: RuleConditionData) {
    super();
    this._params = condition._params as {
      affiliateIdValue: string;
    };
  }

  execute(ruleContext: T): boolean {
    const userAffiliate = ruleContext.parameters['userAffiliate'] as Affiliate;

    return (
      !!userAffiliate &&
      performStringComparison(userAffiliate.affiliateId, IS_EQUAL_TO, this._params.affiliateIdValue)
    );
  }
}
