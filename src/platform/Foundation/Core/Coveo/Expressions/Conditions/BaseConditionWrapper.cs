using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public abstract class BaseConditionWrapper<TContext, TCondition> : ICoveoCondition<TContext>
        where TContext : RuleContext
        where TCondition : RuleCondition<TContext>
    {
        public TCondition Condition { get; private set; }

        public BaseConditionWrapper(TCondition condition)
        {
            Condition = condition;
        }

        public virtual IQueryNode GetQueryNode() => new VoidNode();
    }
}
