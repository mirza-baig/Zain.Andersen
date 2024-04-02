using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class NotSupportedConditionWrapper<T> : BaseConditionWrapper<T, RuleCondition<T>> where T : RuleContext
    {
        public NotSupportedConditionWrapper(RuleCondition<T> condition)
            : base(condition)
        {
        }

        public override IQueryNode GetQueryNode() => new FalseNode();
    }
}
