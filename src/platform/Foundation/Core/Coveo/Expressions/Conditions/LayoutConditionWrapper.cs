using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions.ItemConditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class LayoutConditionWrapper<T> : FieldConditionWrapper<T, LayoutCondition<T>, bool> where T : RuleContext
    {
        public LayoutConditionWrapper(LayoutCondition<T> condition)
            : base(condition)
        {
        }

        protected override string GetQueryNodeFieldName() => "HasLayout";

        protected override QueryNodeOperator GetQueryNodeOperator() => QueryNodeOperator.ExactMatch;

        protected override object GetQueryNodeValue() => true;
    }
}
