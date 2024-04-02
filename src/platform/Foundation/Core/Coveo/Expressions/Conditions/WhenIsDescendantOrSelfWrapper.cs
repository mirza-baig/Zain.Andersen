using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class WhenIsDescendantOrSelfWrapper<TContext> : FieldConditionWrapper<TContext, WhenIsDescendantOrSelf<TContext>, string> where TContext : RuleContext
    {
        public WhenIsDescendantOrSelfWrapper(WhenIsDescendantOrSelf<TContext> condition)
            : base(condition)
        {
        }

        protected override string GetQueryNodeFieldName() => Constants.CoveoFields.PathIds;

        protected override QueryNodeOperator GetQueryNodeOperator() => QueryNodeOperator.Equal;

        protected override object GetQueryNodeValue() => Condition.ItemId.ToShortID().ToString();
    }
}
