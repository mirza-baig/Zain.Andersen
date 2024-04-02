namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public class AndNode : BinaryNode
    {
        public AndNode(IQueryNode leftOperand, IQueryNode rightOperand)
            : base(leftOperand, rightOperand)
        { }

        public override string GetExpression()
        {
            return $"({LeftOperand.GetExpression()} {RightOperand.GetExpression()})";
        }
    }
}
