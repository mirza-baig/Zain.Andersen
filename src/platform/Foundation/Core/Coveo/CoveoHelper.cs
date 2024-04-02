using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls.Expressions;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Coveo.Expressions;
using Platform.Foundation.Core.Coveo.Expressions.Actions;
using Platform.Foundation.Core.Coveo.Expressions.Conditions;
using Platform.Foundation.Core.Coveo.Expressions.QueryNodes;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Rules;
using Sitecore.Rules.Actions;
using Sitecore.Rules.Conditions;
using Sitecore.Rules.Conditions.FieldConditions;
using Sitecore.Rules.Conditions.ItemConditions;

namespace Platform.Foundation.Core.Coveo
{
    public class CoveoHelper
    {
        public bool IsCoveoFilterField(Field field)
        {
            return field.ID == TemplateIds.Feature.Enterprise.Elements.Search.SearchParameters.Fields.FilterExpression;
        }

        public bool IsCoveoBoostingField(Field field)
        {
            return field.ID == TemplateIds.Feature.Enterprise.Elements.Search.SearchParameters.Fields.BoostingExpression;
        }

        public IEnumerable<CoveoRule<TContext>> ParseRules<TContext>(Database database, string rulesXml) where TContext : RuleContext
        {
            var rules = RuleFactory.ParseRules<TContext>(database, rulesXml).Rules;
            var result = new List<CoveoRule<TContext>>();

            foreach (var rule in rules)
            {
                ICoveoCondition<TContext> condition = null;
                if (rule.Condition != null)
                {
                    condition = GetCondition(rule.Condition);
                }

                var actions = rule.Actions.Select(_ => GetAction(_));

                result.Add(new CoveoRule<TContext>(condition, actions));
            }

            return result;
        }

        public IQueryNode GetQueryNode<TContext>(CoveoRule<TContext> rule) where TContext : RuleContext
        {
            return GetQueryNode(new CoveoRule<TContext>[] { rule });
        }

        public IQueryNode GetQueryNode<TContext>(IEnumerable<CoveoRule<TContext>> rules) where TContext : RuleContext
        {
            return JoinWithAndNode(rules.Where(_ => _.Condition != null).Select(_ => _.Condition.GetQueryNode()));
        }

        public IQueryNode JoinWithAndNode(IEnumerable<IQueryNode> nodes)
        {
            return JoinWithUnaryBuilder(nodes, (left, right) => new AndNode(left, right));
        }

        public IQueryNode JoinWithOrNode(IEnumerable<IQueryNode> nodes)
        {
            return JoinWithUnaryBuilder(nodes, (left, right) => new OrNode(left, right));
        }

        public IQueryNode JoinWithUnaryBuilder(IEnumerable<IQueryNode> nodes, Func<IQueryNode, IQueryNode, IQueryNode> builder)
        {
            var source = new Queue<IQueryNode>(nodes);
            if (!source.Any())
            {
                return new TrueNode();
            }
            while (source.Count > 1)
            {
                var queryNode = builder(source.Dequeue(), source.Dequeue());
                source.Enqueue(queryNode);
            }
            return source.First();
        }

        public RuleAction<TContext> GetAction<TContext>(RuleAction<TContext> ruleAction) where TContext : RuleContext
        {
            BaseBoostAction<TContext> baseBoostAction = null;
            if (ruleAction is BaseBoostAction<TContext>)
            {
                baseBoostAction = (BaseBoostAction<TContext>)ruleAction;
            }
            return baseBoostAction;
        }

        public ICoveoCondition<TContext> GetCondition<TContext>(RuleCondition<TContext> condition) where TContext : RuleContext
        {
            ICoveoCondition<TContext> coveoCondition;
            switch (condition)
            {
                case ICoveoCondition<TContext> _:
                    coveoCondition = (ICoveoCondition<TContext>)condition;
                    break;
                case WhenField<TContext> _:
                    coveoCondition = new WhenFieldWrapper<TContext>((WhenField<TContext>)condition);
                    break;
                case AndCondition<TContext> _:
                    coveoCondition = new AndConditionWrapper<TContext>((AndCondition<TContext>)condition, this);
                    break;
                case OrCondition<TContext> _:
                    coveoCondition = new OrConditionWrapper<TContext>((OrCondition<TContext>)condition, this);
                    break;
                case NotCondition<TContext> _:
                    coveoCondition = new NotConditionWrapper<TContext>((NotCondition<TContext>)condition, this);
                    break;
                case WhenTemplateIs<TContext> _:
                    coveoCondition = new WhenTemplateIsWrapper<TContext>((WhenTemplateIs<TContext>)condition);
                    break;
                case ItemIdCondition<TContext> _:
                    coveoCondition = new ItemIdConditionWrapper<TContext>((ItemIdCondition<TContext>)condition);
                    break;
                case LayoutCondition<TContext> _:
                    coveoCondition = new LayoutConditionWrapper<TContext>((LayoutCondition<TContext>)condition);
                    break;
                case WhenIsDescendantOrSelf<TContext> _:
                    coveoCondition = new WhenIsDescendantOrSelfWrapper<TContext>((WhenIsDescendantOrSelf<TContext>)condition);
                    break;
                default:
                    coveoCondition = (ICoveoCondition<TContext>)new NotSupportedConditionWrapper<TContext>(condition);
                    break;
            }
            return coveoCondition;
        }

        public IQueryNode Optimize(IQueryNode node)
        {
            IQueryNode result = null;
            if (node != null)
            {
                result = OptimizeNode(node);
            }
            if (result != null && result is VoidNode)
            {
                result = null;
            }
            return result;
        }

        private IQueryNode OptimizeNode(IQueryNode node)
        {
            IQueryNode result;
            switch (node)
            {
                case BinaryNode _:
                    result = OptimizeBinaryNode((BinaryNode)node);
                    break;
                case UnaryNode _:
                    result = OptimizeUnaryNode((UnaryNode)node);
                    break;
                default:
                    result = node;
                    break;
            }
            return result;
        }

        private IQueryNode OptimizeBinaryNode(BinaryNode node)
        {
            node.LeftOperand = OptimizeNode(node.LeftOperand);
            node.RightOperand = OptimizeNode(node.RightOperand);
            IQueryNode result = OptimizeBinaryVoidOperands(node);
            if (result is BinaryNode)
            {
                if (result is AndNode)
                {
                    result = OptimizeAndNodeOperands((BinaryNode)result);
                }
                else if (result is OrNode)
                {
                    result = OptimizeOrNodeOperands((BinaryNode)result);
                }
            }
            return result;
        }

        private IQueryNode OptimizeBinaryVoidOperands(BinaryNode node)
        {
            if (node.LeftOperand is VoidNode)
            {
                return node.RightOperand;
            }
            if (node.RightOperand is VoidNode)
            {
                return node.LeftOperand;
            }
            return node;
        }

        private IQueryNode OptimizeAndNodeOperands(BinaryNode node)
        {
            IQueryNode result = node;
            if (node.LeftOperand is TrueNode)
            {
                result = node.RightOperand;
            }
            else if (node.RightOperand is TrueNode)
            {
                result = node.LeftOperand;
            }
            else if (node.LeftOperand is FalseNode)
            {
                result = node.LeftOperand;
            }
            else if (node.RightOperand is FalseNode)
            {
                result = node.RightOperand;
            }
            return result;
        }

        private IQueryNode OptimizeOrNodeOperands(BinaryNode node)
        {
            IQueryNode result = (IQueryNode)node;
            if (node.LeftOperand is TrueNode)
            {
                result = node.LeftOperand;
            }
            else if (node.RightOperand is TrueNode)
            {
                result = node.RightOperand;
            }
            else if (node.LeftOperand is FalseNode)
            {
                result = node.RightOperand;
            }
            else if (node.RightOperand is FalseNode)
            {
                result = node.LeftOperand;
            }
            return result;
        }

        private IQueryNode OptimizeUnaryNode(UnaryNode node)
        {
            node.Operand = OptimizeNode(node.Operand);
            IQueryNode result = OptimizeUnaryVoidOperand(node);
            if (result is NotNode)
            {
                result = OptimizeNotNodeOperand((UnaryNode)result);
            }
            return result;
        }

        private IQueryNode OptimizeUnaryVoidOperand(UnaryNode node)
        {
            if (node.Operand is VoidNode)
            {
                return node.Operand;
            }
            return node;
        }

        private IQueryNode OptimizeNotNodeOperand(UnaryNode node)
        {
            if (node.Operand is TrueNode)
            {
                return new FalseNode();
            }
            if (node.Operand is FalseNode)
            {
                return new TrueNode();
            }
            return node;
        }
    }
}
