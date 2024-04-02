using System.Collections.Generic;
using System.Linq;
using Platform.Foundation.Core.Coveo.Expressions.Actions;
using Sitecore.Rules;

namespace Platform.Foundation.Core.Coveo.Expressions
{
    public class BoostExpressionBuilder
    {
        protected CoveoHelper CoveoHelper { get; set; } = new CoveoHelper();

        protected List<RankingExpression> RankingExpressions = new List<RankingExpression>();

        public BoostExpressionBuilder AddBoostingRules(IEnumerable<CoveoRule<RuleContext>> boostRules)
        {
            foreach (var rule in boostRules)
            {
                AddBoostingRule(rule);
            }
            return this;
        }

        public BoostExpressionBuilder AddBoostingRule(CoveoRule<RuleContext> boostRule)
        {
            var action = boostRule.Actions.FirstOrDefault(_ => _ is BaseBoostAction<RuleContext>) as BaseBoostAction<RuleContext>;
            if (action == null)
            {
                return this;
            }

            var query = CoveoHelper.GetQueryNode(boostRule);
            query = CoveoHelper.Optimize(query);
            if (query == null)
            {
                return this;
            }

            RankingExpressions.Add(new RankingExpression { Expression = query, Modifier = action.GetEffectiveWeight() });

            return this;
        }

        public string BuildExpression()
        {
            var qres = RankingExpressions.Select(_ => $"$qre(expression:({_.Expression.GetExpression()}), modifier:'{_.Modifier}')");

            return string.Join(" ", qres);
        }
    }
}
