import { SitecoreIds } from 'lib/constants';
import { guidEquals } from 'lib/utils/string-utils';
import { RuleContext } from '../rules';
import { WhenCondition } from '../conditions';
import { RuleConditionData } from '../serialization';

export const PageIsMatchConditionId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Page.PageIsMatch.ItemId;

export class PageIsMatchCondition<T extends RuleContext> extends WhenCondition<T> {
  pageItemId: string;
  constructor(condition: RuleConditionData) {
    super();
    this.pageItemId = condition.pageItemId as string;
  }

  execute(ruleContext: T): boolean {
    const currentPageItemId = ruleContext.parameters['pageId'] as string;
    return !!currentPageItemId && guidEquals(currentPageItemId, this.pageItemId);
  }
}
