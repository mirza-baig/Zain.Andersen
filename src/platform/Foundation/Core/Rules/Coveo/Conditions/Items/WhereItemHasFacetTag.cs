using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Rules.Conditions;
using Sitecore.Rules;

namespace Platform.Foundation.Core.Rules.Coveo.Conditions.Items
{
    public class WhereItemHasFacetTag<T> : WhenCondition<T>, ICoveoCondition<T> where T : RuleContext
    {
        public ID FieldId { get; set; }

        public ID TagId { get;set; }

        protected override bool Execute(T ruleContext)
        {
            if (ID.IsNullOrEmpty(TagId))
            {
                return false;
            }
            return ruleContext.Item[FieldId].Contains(TagId.ToString());
        }

        public IQueryNode GetQueryNode()
        {
            if (ID.IsNullOrEmpty(TagId))
            {
                return new VoidNode();
            }

            if (ID.IsNullOrEmpty(FieldId))
            {
                return new VoidNode();
            }

            var tagItem = Sitecore.Context.Database?.GetItem(TagId);
            if (tagItem == null)
            {
                return new VoidNode();
            }

            var tagValue = tagItem["title"];
            if(string.IsNullOrEmpty(tagValue))
            {
                return new VoidNode();
            }

            string fieldName = CoveoUtility.GetCoveoFieldName(FieldId);
            if (string.IsNullOrEmpty(fieldName))
            {
                return new VoidNode();
            }

            return new FieldNode(fieldName, QueryNodeOperator.Equal, tagValue);
        }
    }
}
