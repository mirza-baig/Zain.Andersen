using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Sitecore.Rules.Conditions;
using Sitecore.Rules;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class UserAffiliateCondition<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
    {
        public string Value { get; set; }

        public IQueryNode GetQueryNode()
        {
            return new FieldNode(Constants.CoveoFields.AffiliateFieldName, QueryNodeOperator.Equal, Constants.Token.UserAffiliateId);
        }

        protected override bool Execute(T ruleContext)
        {
            return false;
        }
    }
}
