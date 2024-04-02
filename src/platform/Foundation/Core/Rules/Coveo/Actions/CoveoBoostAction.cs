using Platform.Foundation.Core.Coveo.Expressions.Actions;
using Sitecore.Rules;

namespace Platform.Foundation.Core.Rules.Coveo.Actions
{
    public class CoveoBoostAction<T> : BaseBoostAction<T> where T : RuleContext
    {
        public CoveoBoostAction()
          : this(0)
        {
        }

        public CoveoBoostAction(int weight)
          : base(true, weight)
        {
        }
    }
}
