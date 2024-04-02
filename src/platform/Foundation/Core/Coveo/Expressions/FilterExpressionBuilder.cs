using System.Collections.Generic;
using System.Linq;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Rules;

namespace Platform.Foundation.Core.Coveo.Expressions
{
    public class FilterExpressionBuilder
    {
        protected CoveoHelper CoveoHelper { get; set; } = new CoveoHelper();

        protected IList<IQueryNode> FilterRulesQueryNodes { get; set; } = new List<IQueryNode>();

        public FilterExpressionBuilder AddFilterRules(IEnumerable<CoveoRule<RuleContext>> filterRules)
        {
            if (filterRules.Any(_ => _.Condition != null))
            {
                FilterRulesQueryNodes.Add(CoveoHelper.GetQueryNode(filterRules));
            }

            return this;
        }

        public string BuildExpression()
        {
            var queryNodeList = new List<IQueryNode>();
            queryNodeList.AddRange(FilterRulesQueryNodes);
            //queryNodeList.AddRange(this.m_ExcludedExpressions.Select<KeyValuePair<string, IList<string>>, IQueryNode>((Func<KeyValuePair<string, IList<string>>, IQueryNode>)(excludedExpression => this.m_ExpressionBuilderHelper.ExcludeFieldValues(excludedExpression.Key, (IEnumerable<string>)excludedExpression.Value))));
            return !queryNodeList.Any() ? null : JoinNodes(queryNodeList).GetExpression();

        }

        private IQueryNode JoinNodes(List<IQueryNode> queryNodeList)
        {
            IQueryNode queryNode = null;
            if (queryNodeList.Any())
            {
                //queryNode = this.m_NodeOptimizer.Optimize(CoveoHelper.JoinWithAndNode(queryNodeList));
                queryNode = CoveoHelper.JoinWithAndNode(queryNodeList);
                queryNode = CoveoHelper.Optimize(queryNode);
            }
            return queryNode;
        }
    }
}
