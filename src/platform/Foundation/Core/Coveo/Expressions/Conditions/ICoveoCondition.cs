using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public interface ICoveoCondition<TContext> where TContext : RuleContext
    {
        IQueryNode GetQueryNode();
    }
}
