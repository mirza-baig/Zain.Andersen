using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public abstract class FieldConditionWrapper<TContext, TCondition, TValue> : BaseConditionWrapper<TContext, TCondition>
        where TContext : RuleContext
        where TCondition : RuleCondition<TContext>
    {
        public FieldConditionWrapper(TCondition condition)
            : base(condition)
        {
        }

        public override IQueryNode GetQueryNode()
        {
            IQueryNode queryNode = new VoidNode();
            if (IsConditionValid())
            {
                queryNode = new FieldNode(GetQueryNodeFieldName(), GetQueryNodeOperator(), GetQueryNodeValue());
            }
            return queryNode;
        }

        public bool IsConditionValid()
        {
            var queryNodeOperator = GetQueryNodeOperator();
            if (string.IsNullOrEmpty(GetQueryNodeFieldName()))
            {
                return false;
            }
            if (queryNodeOperator == QueryNodeOperator.Unknown)
            {
                return false;
            }
            if (GetQueryNodeValue() == null)
            {
                return false;
            }
            return true;
        }

        protected abstract string GetQueryNodeFieldName();

        protected abstract QueryNodeOperator GetQueryNodeOperator();

        protected abstract object GetQueryNodeValue();
    }
}
