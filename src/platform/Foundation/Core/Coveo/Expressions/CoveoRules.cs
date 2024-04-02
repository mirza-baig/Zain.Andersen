using System.Collections.Generic;
using System.Linq;
using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Sitecore.Rules;
using Sitecore.Rules.Actions;

namespace Platform.Foundation.Core.Coveo.Expressions
{
    public class CoveoRule<T> where T : RuleContext
    {
        public IEnumerable<RuleAction<T>> Actions { get; private set; }

        public ICoveoCondition<T> Condition { get; private set; }

        public CoveoRule(ICoveoCondition<T> condition)
            : this(condition, null)
        {
        }

        public CoveoRule(ICoveoCondition<T> condition, IEnumerable<RuleAction<T>> actions)
        {
            Condition = condition;
            if (actions != null && actions.Any())
            {
                Actions = new List<RuleAction<T>>(actions);
            }
            else
            {
                Actions = new List<RuleAction<T>>();
            }
        }
    }
}
