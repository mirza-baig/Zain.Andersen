using Sitecore.Rules;
using Sitecore.Rules.Conditions.FieldConditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class WhenFieldWrapper<T> : StringConditionWrapper<T, WhenField<T>> where T : RuleContext
    {
        public WhenFieldWrapper(WhenField<T> condition)
            : base(condition)
        {
        }

        protected override string GetQueryNodeFieldName() => Condition.FieldName;

        protected override string GetConditionStringValue() => Condition.Value;
    }
}
