namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public class NotNode : UnaryNode
    {
        public NotNode(IQueryNode operand)
            : base(operand)
        {
        }

        public override string GetExpression()
        {
            return $"NOT {Operand.GetExpression()}";
        }
    }
}
