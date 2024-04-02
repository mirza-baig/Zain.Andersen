import { NextRequest } from 'next/server';
import { SitecoreIds } from 'lib/constants';
import { RuleContext } from '../rules';
import { WhenCondition } from '../conditions';
import { RuleConditionData } from '../serialization';

export const CookieIsPresentConditionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Request.CookieIsPresent.ItemId;

export class CookieIsPresentCondition<T extends RuleContext> extends WhenCondition<T> {
  _params: {
    cookieName: string;
  };

  constructor(condition: RuleConditionData) {
    super();
    this._params = condition._params as { cookieName: string };
  }

  execute(ruleContext: T): boolean {
    const request = ruleContext.parameters['request'] as NextRequest;
    const cookieValue = request.cookies.get(this._params.cookieName);

    return !!cookieValue;
  }
}
