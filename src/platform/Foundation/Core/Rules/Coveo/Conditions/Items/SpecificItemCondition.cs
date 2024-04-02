using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Sitecore.Rules.Conditions;
using Sitecore.Rules;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class SpecificItemCondition<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
    {
        public ID ItemId { get; set; }

        protected override bool Execute(T ruleContext)
        {
            return false;
        }

        public IQueryNode GetQueryNode()
        {
            if (ID.IsNullOrEmpty(ItemId))
            {
                return new VoidNode();
            }

            return new FieldNode(Constants.CoveoFields.ItemId, QueryNodeOperator.ExactMatch, ItemId.ToShortID().ToString());
        }
    }
}
