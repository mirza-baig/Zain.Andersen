using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class AndConditionWrapper<T> : BaseConditionWrapper<T, AndCondition<T>> where T : RuleContext
    {
        protected CoveoHelper CoveoHelper { get; set; }

        public AndConditionWrapper(AndCondition<T> condition, CoveoHelper coveoHelper)
            : base(condition)
        {
            CoveoHelper = coveoHelper;
        }

        protected ICoveoCondition<T> LeftOperand => CoveoHelper.GetCondition<T>((Condition as AndCondition<T>).LeftOperand);

        protected ICoveoCondition<T> RightOperand => CoveoHelper.GetCondition<T>((Condition as AndCondition<T>).RightOperand);

        public override IQueryNode GetQueryNode() => new AndNode(LeftOperand.GetQueryNode(), RightOperand.GetQueryNode());
    }
}
