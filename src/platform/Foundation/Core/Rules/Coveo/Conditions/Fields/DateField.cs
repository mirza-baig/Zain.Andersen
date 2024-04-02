using System;
using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Diagnostics;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Fields
{
    public class DateField<TContext> : WhenCondition<TContext>, ICoveoCondition<TContext> where TContext : RuleContext
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

            if (formattedValue == null || !DateTime.TryParse(formattedValue, out DateTime result))
            {
                return new VoidNode();
            }

            try
            {
                var @operator = GetQueryNodeOperator();
                if (@operator == QueryNodeOperator.NotEqual)
                {
                    return new NotNode(new FieldNode(fieldName, QueryNodeOperator.ExactMatch, DateTime.Parse(formattedValue)));
                }
                return new FieldNode(fieldName, @operator, DateTime.Parse(formattedValue));
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
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.Equal: // is equal to
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.NotEqual: // is not equal to
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.GreaterThan: // greater than
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.LessThan: // less than
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.GreaterEqualThan: // is greater than or equal to
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.LessEqualThan: // is less than or equal to
                    return Value;
                default:
                    throw new ApplicationException($"Invalid Condition Operator: {OperatorId}");
            }
        }

        private QueryNodeOperator GetQueryNodeOperator()
        {
            switch (OperatorId)
            {
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.Equal:
                    return QueryNodeOperator.ExactMatch;
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.NotEqual:
                    return QueryNodeOperator.NotEqual;
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.GreaterThan:
                    return QueryNodeOperator.GreaterThan;
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.LessThan:
                    return QueryNodeOperator.LessThan;
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.GreaterEqualThan:
                    return QueryNodeOperator.GreaterThanOrEqual;
                case Constants.ItemIds.Settings.Rules.SitecoreOperators.LessEqualThan:
                    return QueryNodeOperator.LessThanOrEqual;
                default:
                    throw new ApplicationException($"Invalid Condition Operator: {OperatorId}");
            }
        }
    }
}
