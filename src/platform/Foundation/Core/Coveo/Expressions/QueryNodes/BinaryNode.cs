namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public abstract class BinaryNode : IQueryNode
    {
        public BinaryNode(IQueryNode leftOperand, IQueryNode rightOperand)
        {
            LeftOperand = leftOperand;
            RightOperand = rightOperand;
        }

        public IQueryNode LeftOperand { get; set; }

        public IQueryNode RightOperand { get; set; }

        public abstract string GetExpression();
    }
}
