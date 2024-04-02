using System;
using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Diagnostics;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Fields
{
    public class StringField<TContext> : WhenCondition<TContext>, ICoveoCondition<TContext> where TContext : RuleContext
    {
        public ID FieldId { get; set; }

        public string OperatorId { get; set; }

        public string Value { get; set; }

        public IQueryNode GetQueryNode()
        {
            if (ID.IsNullOrEmpty(FieldId))
            {
                return new VoidNode();
            }

            string fieldName = CoveoUtility.GetCoveoFieldName(FieldId);

            if (string.IsNullOrEmpty(fieldName))
            {
                return new VoidNode();
            }

            string formattedValue = this.GetFormattedValue();

            if (formattedValue == null)
            {
                return new VoidNode();
            }

            try
            {
                var @operator = GetQueryNodeOperator();
                if (@operator == QueryNodeOperator.NotEqual)
                {
                    return new NotNode(new FieldNode(fieldName, QueryNodeOperator.ExactMatch, formattedValue));
                }
                return new FieldNode(fieldName, @operator, formattedValue);
            }
            catch (ApplicationException ex)
            {
                Log.Warn("The condition will be omitted from the expression.", ex, this);
                return new VoidNode();
            }
        }

        protected override bool Execute(TContext ruleContext)
        {
            throw new NotImplementedException();
        }

        protected virtual string GetFormattedValue()
        {
            switch (OperatorId)
            {
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.EndsWith: // ends with
                    return $"*{Value}";
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Equal: // is equal to
                    return Value;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.NotEqual: // not equal to
                    return Value;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Regex: // regex
                    return Value;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.ContainsKeywords: // contains keywords
                    return Value;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Contains: // contains
                    return $"*{Value}*";
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.StartsWith: // Starts with
                    return $"{Value}*";
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.IsLike: // is like
                    return Value;
                default:
                    throw new ApplicationException($"Invalid Condition Operator: {OperatorId}");
            }
        }

        private QueryNodeOperator GetQueryNodeOperator()
        {
            switch (OperatorId)
            {
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.EndsWith:
                    return QueryNodeOperator.WildcardMatch;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Equal:
                    return QueryNodeOperator.ExactMatch;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.NotEqual:
                    return QueryNodeOperator.NotEqual;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Regex:
                    return QueryNodeOperator.RegexMatch;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.ContainsKeywords:
                    return QueryNodeOperator.Equal;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Contains:
                    return QueryNodeOperator.WildcardMatch;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.StartsWith:
                    return QueryNodeOperator.WildcardMatch;
                case Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.IsLike:
                    return QueryNodeOperator.FuzzyMatch;
                default:
                    throw new ApplicationException($"Invalid Condition Operator: {OperatorId}");
            }
        }
    }
}
