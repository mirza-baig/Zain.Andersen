import { SitecoreIds } from 'lib/constants';
import { ProgramOptInsIds } from 'lib/affiliate/program-optins';
import { RuleContext } from '../rules';
import { WhenCondition } from '../conditions';
import { RuleConditionData } from '../serialization';
import { Affiliate } from 'lib/context/AffiliateContext';

export const AffiliateProgramOptInId =
  SitecoreIds.Settings.Rules.Definitions.Elements.EW_Affiliate.AffiliateProgramOptIn.ItemId;

export class AffiliateProgramOptIn<T extends RuleContext> extends WhenCondition<T> {
  programOptInId: string;

  constructor(condition: RuleConditionData) {
    super();
    this.programOptInId = condition.programOptInId as string;
  }

  execute(ruleContext: T): boolean {
    const userAffiliate = ruleContext.parameters['userAffiliate'] as Affiliate;

    if (!userAffiliate) {
      return false;
    }

    const programOptIns = userAffiliate.programOptIns;

    // Find the matched program based on the provided ProgramOptInsIds
    let matchedProgramKey = '';
    Object.keys(ProgramOptInsIds).forEach((key: keyof typeof ProgramOptInsIds) => {
      if (ProgramOptInsIds[key] === this.programOptInId.replace(/[{}]/g, '')) {
        matchedProgramKey = key.toString();
      }
    });
    // Check if the matched program is selected or not in userAffiliate
    const isProgramOptIn =
      programOptIns[matchedProgramKey as keyof typeof ProgramOptInsIds] === true;
    return isProgramOptIn;
  }
}
