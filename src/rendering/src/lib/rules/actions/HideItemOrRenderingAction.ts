// import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ItemExt } from 'lib/_.Sitecore.Override';
import { SitecoreIds } from 'lib/constants';
import { RuleContext } from '../rules';
import { RuleAction } from '../actions';
import { RuleActionData } from '../serialization';

export const HideItemOrRenderingActionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Rendering.HideItemOrRendering.ItemId;

export class HideItemOrRenderingAction<T extends RuleContext> extends RuleAction<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_condition: RuleActionData) {
    super();
  }

  apply(ruleContext: T): void {
    ruleContext.parameters['hide'] = true;
  }
}
