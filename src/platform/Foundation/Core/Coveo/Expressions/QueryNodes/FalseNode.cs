namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public class FalseNode : IQueryNode
    {
        public string GetExpression()
        {
            return "(NOT @uri)";
        }
    }
}
