import { Rule, RuleContext, RuleList } from './rules';
import { getRulesActionFactory } from 'temp/rulesActionFactory';
import { getRulesConditionFactory } from 'temp/rulesConditionFactory';
import { RuleCondition } from './conditions';
import { RuleAction } from './actions';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Debug } from 'lib/constants/debug';

export type RuleActionData = {
  id: string;
  uid: string;
  [prop: string]: unknown;
};

export type RuleConditionData = {
  type: 'or' | 'and' | 'not' | 'condition';
  id: string;
  uid: string;
  [prop: string]: unknown;
};

export type RuleData = {
  uid: string;
  conditions?: RuleConditionData;
  actions: RuleActionData[];
};

export type RuleSetData = {
  ruleset: RuleData[];
};

export function getRulesFromStringField<T extends RuleContext>(
  field: Field<string>,
  id?: string
): RuleList<T> {
  return getRulesFromString(field.value, id);
}

export function getRulesFromJsonValue<T extends RuleContext>(
  jsonValue: {
    value: string;
  },
  id?: string
): RuleList<T> {
  return getRulesFromString(jsonValue.value, id);
}

export function getRulesFromString<T extends RuleContext>(value: string, id?: string): RuleList<T> {
  try {
    const ruleSet = JSON.parse(value) as RuleSetData;

    const result = new RuleList<T>();

    for (const ruleData of ruleSet.ruleset) {
      const rule = getRule(ruleData);
      rule.id = id;

      result.add(rule);
    }

    return result;
  } catch (err) {
    Debug.rules('Unable to parse personalization rules %s %o', value, err);
    return new RuleList<T>();
  }
}

function getRule<T extends RuleContext>(data: RuleData): Rule<T> {
  const rule = new Rule<T>(data.uid);

  if (data.conditions) {
    const conditions = getRuleConditions(data.conditions);
    if (conditions) {
      rule.condition = conditions;
    }
  }

  for (const actionData of data.actions) {
    const action = getRuleAction(actionData);
    if (action) {
      rule.actions.push(action);
    }
  }

  return rule;
}

function getRuleConditions<T extends RuleContext>(
  data: RuleConditionData
): RuleCondition<T> | null {
  const condition = getRulesConditionFactory(data);
  if (condition) {
    condition.uid = data.uid;
  }

  return condition;
}

function getRuleAction<T extends RuleContext>(data: RuleActionData): RuleAction<T> | null {
  const action = getRulesActionFactory(data);
  if (action) {
    action.uid = data.uid;
  }

  return action;
}
