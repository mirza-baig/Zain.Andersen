using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public class OrConditionWrapper<T> : BaseConditionWrapper<T, OrCondition<T>> where T : RuleContext
    {
        protected CoveoHelper CoveoHelper { get; set; }

        public OrConditionWrapper(OrCondition<T> condition, CoveoHelper coveoHelper)
            : base(condition)
        {
            CoveoHelper = coveoHelper;
        }

        protected ICoveoCondition<T> LeftOperand => CoveoHelper.GetCondition<T>((Condition as OrCondition<T>).LeftOperand);

        protected ICoveoCondition<T> RightOperand => CoveoHelper.GetCondition<T>((Condition as OrCondition<T>).RightOperand);

        public override IQueryNode GetQueryNode() => new OrNode(LeftOperand.GetQueryNode(), RightOperand.GetQueryNode());
    }
}
