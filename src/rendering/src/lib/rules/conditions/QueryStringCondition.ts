import { NextRequest } from 'next/server';
import { WhenCondition } from 'lib/rules/conditions';
import { RuleConditionData } from 'lib/rules/serialization';
import { RuleContext } from 'lib/rules/rules';
import { performStringComparison } from 'lib/rules/utils';
import { SitecoreIds } from 'lib/constants';

export const QueryStringConditionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Request.QueryString.ItemId;

export class QueryStringCondition<T extends RuleContext> extends WhenCondition<T> {
  value: string;
  key: string;
  operatorid: string;

  constructor(condition: RuleConditionData) {
    super();
    this.value = condition.value as string;
    this.key = condition.key as string;
    this.operatorid = condition.operatorid as string;
  }

  execute(ruleContext: T): boolean {
    const request = ruleContext.parameters['request'] as NextRequest;
    const values = request.nextUrl.searchParams.getAll(this.key);
    return values.some((x) => performStringComparison(x, this.operatorid, this.value));
    return false;
  }
}
