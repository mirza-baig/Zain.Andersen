import { Stack } from 'lib/utils/stack';
import { RuleCondition } from './conditions';
import { RuleAction } from './actions';
import { Debug } from 'lib/constants/debug';

export class RuleStack extends Stack<boolean> {}

export class RuleContext {
  protected _parameters: Record<string, unknown> = {};
  protected _isAborted = false;

  get parameters() {
    return this._parameters;
  }

  //
  // Summary:
  //     Gets a value indicating whether this rule execution is aborted.
  //
  // Value:
  //     true if this rule execution is aborted; otherwise, false.
  get isAborted() {
    return this._isAborted;
  }

  //
  // Summary:
  //     Gets a value indicating the current rule should be skipped.
  skipRule = false;

  //
  // Summary:
  //     Aborts the current rule execution.
  abort(): void {
    this._isAborted = true;
  }
}

export class Rule<T extends RuleContext> {
  uid: string;
  id?: string;
  actions: RuleAction<T>[] = [];
  condition?: RuleCondition<T>;

  constructor(uid: string) {
    this.uid = uid;
  }

  static fromCondtion<T extends RuleContext>(uid: string, condition: RuleCondition<T>) {
    const result = new Rule<T>(uid);
    result.condition = condition;
    return result;
  }

  static fromConditionAndAction<T extends RuleContext>(
    uid: string,
    condition: RuleCondition<T>,
    action: RuleAction<T>
  ) {
    const result = new Rule<T>(uid);
    result.condition = condition;
    result.actions = [action];
    return result;
  }

  static fromConditionAndActions<T extends RuleContext>(
    uid: string,
    condition: RuleCondition<T>,
    actions: RuleAction<T>[]
  ) {
    const result = new Rule<T>(uid);
    result.condition = condition;
    result.actions = [...actions];
    return result;
  }

  /// <summary>Evaluates this instance.</summary>
  /// <param name="ruleContext">The rule context.</param>
  /// <returns><c>true</c>, if the condition is true, otherwise <c>false</c>.</returns>
  evaluate(ruleContext: T): boolean {
    if (this.condition == undefined) {
      return false;
    }

    const stack = new RuleStack();
    try {
      this.condition.evaluate(ruleContext, stack);
    } catch {
      Debug.rules(
        'Evaluation of condition failed. Rule item ID: %s, condition item ID: {1}',
        this.id || 'Unknown',
        this.condition.id || 'Unknown'
      );
    }

    return stack.size != 0 && !!stack.pop();
  }

  /// <summary>Executes the specified rule context.</summary>
  /// <param name="ruleContext">The rule context.</param>
  execute(ruleContext: T): void {
    for (const action of this.actions) {
      action.apply(ruleContext);
      if (ruleContext.isAborted) {
        break;
      }
    }
  }
}

export class RuleList<T extends RuleContext> {
  protected _rules: Rule<T>[] = [];

  static fromRule<T extends RuleContext>(rule: Rule<T>) {
    const result = new RuleList<T>();
    result._rules = [rule];
    return result;
  }

  static fromRules<T extends RuleContext>(rules: Rule<T>[]) {
    const result = new RuleList<T>();
    result._rules = rules;
    return result;
  }

  get rules() {
    return this._rules;
  }

  get count() {
    return this._rules.length;
  }

  add(rule: Rule<T>) {
    this._rules.push(rule);
  }

  addRange(rules: Rule<T>[]) {
    this._rules = [...this._rules, ...rules];
  }

  /// <summary>Executes this rule set.</summary>
  /// <param name="ruleContext">The rule context.</param>
  /// <param name="executedRulesCount">The number of rules, whose actions has been executed.</param>
  run(context: T): number {
    return this.runRules(context, false);
  }

  /// <summary>
  /// Executes this rule set until any rule condition evaluates to true.
  /// </summary>
  /// <param name="ruleContext">The rule context.</param>
  /// <param name="anyRuleExecuted">Flag indicated whether any rule has been executed.</param>
  runFirstMatching(context: T): boolean {
    const rulesCount = this.runRules(context, true);
    return rulesCount > 0;
  }

  protected runRules(ruleContext: T, stopOnFirstMatching: boolean): number {
    let executedRulesCount = 0;
    if (this.count == 0) {
      return executedRulesCount;
    }

    for (const rule of this._rules) {
      if (rule.condition == null || !rule.condition.canEvaluate(ruleContext)) {
        Debug.rules('Evaluation of rule skipped. Rule item ID: %s', rule.id || 'Unknown');
      } else {
        const stack = new RuleStack();
        try {
          rule.condition.evaluate(ruleContext, stack);
        } catch {
          Debug.rules(
            'Evaluation of condition failed. Rule item ID: %s, condition item ID: %s',
            rule.id || 'Unknown',
            rule.condition.id || 'Unknown'
          );
          ruleContext.abort();
        }
        if (ruleContext.isAborted) {
          return executedRulesCount;
        }
        if (stack.size != 0) {
          if (!stack.pop() || ruleContext.skipRule) {
            ruleContext.skipRule = false;
          } else {
            for (const action of rule.actions) {
              try {
                action.apply(ruleContext);
              } catch {
                Debug.rules(
                  'Execution of action failed. Rule item ID: %s, action item ID: %s',
                  rule.id || 'Unknown',
                  action.id || 'Unknown'
                );
                ruleContext.abort();
              }
              if (ruleContext.isAborted) {
                return executedRulesCount;
              }
            }
            ++executedRulesCount;
            if (stopOnFirstMatching) {
              break;
            }
          }
        }
      }
    }

    return executedRulesCount;
  }
}
