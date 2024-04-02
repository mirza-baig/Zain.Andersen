using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class WhenTemplateIsExactlyCondition<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
    {
        public ID TemplateId { get; set; }

        protected override bool Execute(T ruleContext)
        {
            return ruleContext.Item.TemplateID == TemplateId;
        }

        public IQueryNode GetQueryNode()
        {
            if (ID.IsNullOrEmpty(TemplateId))
            {
                return new VoidNode();
            }

            return new FieldNode(Constants.CoveoFields.TemplateId, QueryNodeOperator.ExactMatch, TemplateId.ToShortID().ToString());
        }
    }
}
