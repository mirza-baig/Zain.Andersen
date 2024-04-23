import { performStringComparison } from '../utils';
import { SitecoreIds } from 'lib/constants';
import { RuleContext } from '../rules';
import { WhenCondition } from '../conditions';
import { RuleConditionData } from '../serialization';

export const AffiliateFieldConditionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Affiliate.AffiliateField.ItemId;

export class AffiliateFieldCondition<T extends RuleContext> extends WhenCondition<T> {
  value: string;
  fieldName: string;
  operatorid: string;
  constructor(condition: RuleConditionData) {
    super();
    this.value = condition.value as string;
    this.fieldName = condition.fieldName as string;
    this.operatorid = condition.operatorid as string;
  }

  execute(ruleContext: T): boolean {
    // Casting to any because the field name is dynamic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userAffiliate = ruleContext.parameters['userAffiliate'] as any;

    if (!userAffiliate) {
      return false;
    }

    return performStringComparison(userAffiliate[this.fieldName], this.operatorid, this.value);
  }
}
