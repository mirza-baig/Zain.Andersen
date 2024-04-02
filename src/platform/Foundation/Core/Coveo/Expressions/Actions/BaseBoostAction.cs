using Sitecore.Rules;
using Sitecore.Rules.Actions;

namespace Platform.Foundation.Core.Coveo.Expressions.Actions
{
    public abstract class BaseBoostAction<T> : RuleAction<T> where T : RuleContext
    {
        public bool IsPositiveBoost { get; set; }

        public int Weight { get; set; }

        protected BaseBoostAction(bool isPositiveBoost, int weight)
        {
            IsPositiveBoost = isPositiveBoost;
            Weight = weight;
        }

        public override void Apply(T ruleContext)
        {
        }

        public int GetEffectiveWeight() => !IsPositiveBoost ? -1 * Weight : Weight;
    }
}
