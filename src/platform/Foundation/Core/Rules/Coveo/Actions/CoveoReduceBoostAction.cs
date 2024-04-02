using Platform.Foundation.Core.Coveo.Expressions.Actions;
using Sitecore.Rules;

namespace Platform.Foundation.Core.Rules.Coveo.Actions
{
    public class CoveoReduceBoostAction<T> : BaseBoostAction<T> where T : RuleContext
    {
        public CoveoReduceBoostAction()
          : this(0)
        {
        }

        public CoveoReduceBoostAction(int weight)
          : base(false, weight)
        {
        }
    }
}
