using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class WhenIsFirstLevelChildOfCondition<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
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

            return new FieldNode(Constants.CoveoFields.ParentId, QueryNodeOperator.ExactMatch, ItemId.ToShortID().ToString());
        }
    }
}
