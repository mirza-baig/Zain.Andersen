namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public class OrNode : BinaryNode
    {
        public OrNode(IQueryNode leftOperand, IQueryNode rightOperand)
            : base(leftOperand, rightOperand)
        { }

        public override string GetExpression()
        {
            return $"({LeftOperand.GetExpression()} OR {RightOperand.GetExpression()})";
        }
    }
}
