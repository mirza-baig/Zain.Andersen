using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class NotConditionWrapper<T> : BaseConditionWrapper<T, NotCondition<T>> where T : RuleContext
    {
        protected CoveoHelper CoveoHelper { get; set; }

        public NotConditionWrapper(NotCondition<T> condition, CoveoHelper coveoHelper)
            : base(condition)
        {
            CoveoHelper = coveoHelper;
        }

        protected ICoveoCondition<T> Operand => CoveoHelper.GetCondition<T>((Condition as NotCondition<T>).Operand);
    }
}
