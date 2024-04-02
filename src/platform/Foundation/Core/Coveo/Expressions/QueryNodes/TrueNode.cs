namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public class TrueNode : IQueryNode
    {
        public string GetExpression()
        {
            return "@uri";
        }
    }
}
