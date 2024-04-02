using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Diagnostics;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Coveo.Expressions.Conditions
{
    public abstract class StringConditionWrapper<TContext, TCondition> : FieldConditionWrapper<TContext, TCondition, string>
        where TContext : RuleContext
        where TCondition : StringOperatorCondition<TContext>
    {
        protected readonly TCondition StringCondition;

        public StringConditionWrapper(TCondition condition)
            : base(condition)
        {
        }

        protected abstract string GetConditionStringValue();

        protected override QueryNodeOperator GetQueryNodeOperator()
        {
            QueryNodeOperator queryNodeOperator;
            switch (Condition.OperatorId)
            {
                case "{10537C58-1684-4CAB-B4C0-40C10907CE31}":
                    queryNodeOperator = QueryNodeOperator.ExactMatch;
                    break;
                case "{22E1F05F-A17A-4D0C-B376-6F7661500F03}":
                    queryNodeOperator = QueryNodeOperator.WildcardMatch;
                    break;
                case "{2E67477C-440C-4BCA-A358-3D29AED89F47}":
                    queryNodeOperator = QueryNodeOperator.WildcardMatch;
                    break;
                case "{537244C2-3A3F-4B81-A6ED-02AF494C0563}":
                    queryNodeOperator = QueryNodeOperator.ExactMatch;
                    break;
                case "{6A7294DF-ECAE-4D5F-A8D2-C69CB1161C09}":
                    queryNodeOperator = QueryNodeOperator.NotEqual;
                    break;
                case "{A6AC5A6B-F409-48B0-ACE7-C3E8C5EC6406}":
                    queryNodeOperator = QueryNodeOperator.NotEqual;
                    break;
                case "{F8641C26-EE27-483C-9FEA-35529ECC8541}":
                    queryNodeOperator = QueryNodeOperator.RegexMatch;
                    break;
                case "{FDD7C6B1-622A-4362-9CFF-DDE9866C68EA}":
                    queryNodeOperator = QueryNodeOperator.WildcardMatch;
                    break;
                default:
                    Log.Warn($"Unknown rule condition operator \"{Condition.OperatorId}\".", this);
                    queryNodeOperator = QueryNodeOperator.Unknown;
                    break;
            }
            return queryNodeOperator;
        }

        protected override object GetQueryNodeValue()
        {
            string queryNodeValue = GetConditionStringValue();
            if (ShouldPrependWildcard(Condition.OperatorId))
            {
                queryNodeValue = "*" + queryNodeValue;
            }
            if (ShouldAppendWildcard(Condition.OperatorId))
            {
                queryNodeValue += "*";
            }
            return queryNodeValue;
        }

        private bool ShouldAppendWildcard(string operatorId) => operatorId == "{2E67477C-440C-4BCA-A358-3D29AED89F47}" || operatorId == "{FDD7C6B1-622A-4362-9CFF-DDE9866C68EA}";

        private bool ShouldPrependWildcard(string operatorId) => operatorId == "{2E67477C-440C-4BCA-A358-3D29AED89F47}" || operatorId == "{22E1F05F-A17A-4D0C-B376-6F7661500F03}";
    }
}
