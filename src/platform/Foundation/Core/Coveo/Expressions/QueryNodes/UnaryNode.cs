namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public abstract class UnaryNode : IQueryNode
    {
        public UnaryNode(IQueryNode operand)
        {
            Operand = operand;
        }

        public IQueryNode Operand { get; set; }

        public abstract string GetExpression();
    }
}
