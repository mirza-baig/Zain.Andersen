using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;

namespace Platform.Foundation.Core.Coveo.Expressions
{
    public class RankingExpression
    {
        public IQueryNode Expression { get; set; }

        public int Modifier { get; set; } = 0;
    }
}
