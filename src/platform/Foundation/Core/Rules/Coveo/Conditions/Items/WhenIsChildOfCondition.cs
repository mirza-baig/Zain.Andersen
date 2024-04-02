using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class WhenIsChildOfCondition<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
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

            return new AndNode(new FieldNode(Constants.CoveoFields.PathIds, QueryNodeOperator.Equal, ItemId.ToShortID().ToString()), new FieldNode(Constants.CoveoFields.ItemId, QueryNodeOperator.Equal, ItemId.ToShortID().ToString()));
        }
    }
}
