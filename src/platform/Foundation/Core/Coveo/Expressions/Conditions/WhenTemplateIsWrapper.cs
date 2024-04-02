using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions.ItemConditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class WhenTemplateIsWrapper<T> : FieldConditionWrapper<T, WhenTemplateIs<T>, string> where T : RuleContext
    {
        public WhenTemplateIsWrapper(WhenTemplateIs<T> condition)
            : base(condition)
        {
        }

        protected override string GetQueryNodeFieldName() => Constants.CoveoFields.TemplateId;

        protected override QueryNodeOperator GetQueryNodeOperator() => QueryNodeOperator.ExactMatch;

        protected override object GetQueryNodeValue() => Condition.TemplateId.ToShortID().ToString();
    }
}
