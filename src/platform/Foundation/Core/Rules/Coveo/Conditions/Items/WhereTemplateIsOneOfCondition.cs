using System.Linq;
using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class WhereTemplateIsOneOfCondition<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
    {
        public string TemplateIds { get; set; }

        public WhereTemplateIsOneOfCondition()
        {
            TemplateIds = "";
        }

        protected override bool Execute(T ruleContext)
        {
            if (string.IsNullOrWhiteSpace(TemplateIds))
            {
                return false;
            }

            var ids = TemplateIds.Split('|').Select(_ => new ID(_));

            return ids.Contains(ruleContext.Item.TemplateID);
        }

        public IQueryNode GetQueryNode()
        {
            if (string.IsNullOrWhiteSpace(TemplateIds))
            {
                return new VoidNode();
            }

            return new FieldNode(Constants.CoveoFields.TemplateId, QueryNodeOperator.Equal, TemplateIds.Split('|').Select(_ => new ID(_).ToShortID().ToString()));
        }
    }
}
