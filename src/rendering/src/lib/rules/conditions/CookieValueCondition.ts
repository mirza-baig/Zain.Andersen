import { NextRequest } from 'next/server';
import { performStringComparison } from '../utils';
import { SitecoreIds } from 'lib/constants';
import { RuleContext } from '../rules';
import { WhenCondition } from '../conditions';
import { RuleConditionData } from '../serialization';

export const CookieValueConditionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Request.CookieValue.ItemId;

export class CookieValueCondition<T extends RuleContext> extends WhenCondition<T> {
  value: string;
  operatorid: string;
  _params: {
    cookieName: string;
  };

  constructor(condition: RuleConditionData) {
    super();
    this.value = condition.value as string;
    this.operatorid = condition.operatorid as string;
    this._params = condition._params as { cookieName: string };
  }

  execute(ruleContext: T): boolean {
    const request = ruleContext.parameters['request'] as NextRequest;
    const cookieValue = request.cookies.get(this._params.cookieName);
    return performStringComparison(cookieValue as string, this.operatorid, this.value);
  }
}
