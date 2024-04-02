using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Rules;
using Sitecore.Rules.Conditions.ItemConditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class ItemIdConditionWrapper<T> : StringConditionWrapper<T, ItemIdCondition<T>> where T : RuleContext
    {
        public ItemIdConditionWrapper(ItemIdCondition<T> condition)
            : base(condition)
        {
        }

        protected override string GetQueryNodeFieldName() => Constants.CoveoFields.ItemId;

        protected override QueryNodeOperator GetQueryNodeOperator() => QueryNodeOperator.ExactMatch;

        protected override object GetQueryNodeValue() => GetConditionStringValue();

        protected override string GetConditionStringValue()
        {
            string conditionStringValue = Condition.Value;
            if (ID.TryParse(Condition.Value, out var id))
            {
                conditionStringValue = id.ToShortID().ToString();
            }
            return conditionStringValue;
        }
    }
}
