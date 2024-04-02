import { RuleContext, RuleStack } from './rules';

export abstract class RuleCondition<T extends RuleContext> {
  uid?: string;
  id?: string;

  abstract evaluate(ruleContext: T, stack: RuleStack): void;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canEvaluate(_ruleContext: T) {
    return true;
  }
}

export abstract class WhenCondition<T extends RuleContext> extends RuleCondition<T> {
  evaluate(ruleContext: T, stack: RuleStack) {
    stack.push(this.execute(ruleContext));
  }

  abstract execute(ruleContext: T): boolean;
}

export abstract class UnaryCondition<T extends RuleContext> extends RuleCondition<T> {
  protected _operand: RuleCondition<T>;

  constructor(operand: RuleCondition<T>) {
    super();
    this._operand = operand;
  }

  get operand() {
    return this._operand;
  }

  evaluate(ruleContext: T, stack: RuleStack) {
    this.operand.evaluate(ruleContext, stack);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canEvaluate(ruleContext: T) {
    return this._operand.canEvaluate(ruleContext);
  }
}

export abstract class BinaryCondition<T extends RuleContext> extends RuleCondition<T> {
  protected _leftOperand: RuleCondition<T>;
  protected _rightOperand: RuleCondition<T>;

  constructor(leftOperand: RuleCondition<T>, rightOperand: RuleCondition<T>) {
    super();
    this._leftOperand = leftOperand;
    this._rightOperand = rightOperand;
  }

  get leftOperand() {
    return this._leftOperand;
  }

  get rightOperand() {
    return this._rightOperand;
  }

  evaluate(ruleContext: T, stack: RuleStack) {
    this._leftOperand.evaluate(ruleContext, stack);
    this._rightOperand.evaluate(ruleContext, stack);
  }

  canEvaluate(ruleContext: T) {
    return (
      this._leftOperand.canEvaluate(ruleContext) && this._rightOperand.canEvaluate(ruleContext)
    );
  }
}

export class NotCondition<T extends RuleContext> extends UnaryCondition<T> {
  constructor(operand: RuleCondition<T>) {
    super(operand);
  }

  evaluate(ruleContext: T, stack: RuleStack) {
    this.operand.evaluate(ruleContext, stack);
    const result = stack.pop();
    stack.push(!result);
  }
}

export class AndCondition<T extends RuleContext> extends BinaryCondition<T> {
  constructor(leftOperand: RuleCondition<T>, rightOperand: RuleCondition<T>) {
    super(leftOperand, rightOperand);
  }

  evaluate(ruleContext: T, stack: RuleStack) {
    this.leftOperand.evaluate(ruleContext, stack);
    if (!stack.pop()) {
      stack.push(false);
    } else {
      this.rightOperand.evaluate(ruleContext, stack);
    }
  }
}

export class OrCondition<T extends RuleContext> extends BinaryCondition<T> {
  constructor(leftOperand: RuleCondition<T>, rightOperand: RuleCondition<T>) {
    super(leftOperand, rightOperand);
  }

  evaluate(ruleContext: T, stack: RuleStack) {
    this.leftOperand.evaluate(ruleContext, stack);
    if (stack.pop()) {
      stack.push(true);
    } else {
      this.rightOperand.evaluate(ruleContext, stack);
    }
  }
}

export class TrueCondition<T extends RuleContext> extends WhenCondition<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(_ruleContext: T) {
    return true;
  }
}
