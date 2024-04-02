import { RuleContext } from './rules';

export abstract class RuleAction<T extends RuleContext> {
  uid?: string;
  id?: string;

  abstract apply(ruleContext: T): void;
}
