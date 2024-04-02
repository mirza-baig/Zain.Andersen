using System.Linq;
using System.Xml.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Coveo;
using Platform.Foundation.Core.Coveo.Expressions;
using Platform.Foundation.Core.Extensions;
using Sitecore.Common;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Diagnostics;
using Sitecore.Extensions.XElementExtensions;
using Sitecore.LayoutService.Serialization;
using Sitecore.LayoutService.Serialization.FieldSerializers;
using Sitecore.Rules;

namespace Platform.Foundation.Core.LayoutService.Serialization.FieldSerializers
{
    public class RulesFieldSerializer : BaseFieldSerializer
    {
        protected CoveoHelper CoveoHelper { get; set; } = new CoveoHelper();

        public RulesFieldSerializer(IFieldRenderer fieldRenderer) : base(fieldRenderer)
        {
        }

        protected override void WriteValue(Field field, JsonTextWriter writer)
        {
            Assert.ArgumentNotNull(field, "field");
            Assert.ArgumentNotNull(writer, "writer");

            string value;
            if (CoveoHelper.IsCoveoFilterField(field))
            {
                value = RenderCoveoFilterField(field);
            }
            else if (CoveoHelper.IsCoveoBoostingField(field))
            {
                value = RenderCoveoBoostingField(field);
            }
            else
            {
                // Rules field should be filtered out by the ExtendedItemSerializer though
                // Use the default serializer if a rule makes it through
                value = RenderDefaultRulesField(field);
            }

            writer.WriteValue(value);
        }

        protected string RenderDefaultRulesField(Field field)
        {
            var rules = ParseRules(field.Value);
            var root = new JObject
            {
                ["ruleset"] = rules,
            };

            return root.ToString(Formatting.None);
        }

        protected string RenderCoveoFilterField(Field field)
        {
            var rules = CoveoHelper.ParseRules<RuleContext>(field.Database, field.Value);

            var filterExpressionBuilder = new FilterExpressionBuilder();
            filterExpressionBuilder.AddFilterRules(rules);

            return filterExpressionBuilder.BuildExpression();
        }

        protected string RenderCoveoBoostingField(Field field)
        {
            var rules = CoveoHelper.ParseRules<RuleContext>(field.Database, field.Value);

            var boostExpressionBuilder = new BoostExpressionBuilder();
            boostExpressionBuilder.AddBoostingRules(rules);

            return boostExpressionBuilder.BuildExpression();
        }


        private static JArray ParseRules(string xml)
        {
            if (string.IsNullOrWhiteSpace(xml))
            {
                return new JArray();
            }

            XDocument xdocument;
            try
            {
                xdocument = XDocument.Parse(xml);
            }
            catch
            {
                return new JArray();
            }

            return ParseRules(xdocument.Root);
        }

        private static JArray ParseRules(XElement node)
        {
            var rules = new JArray();

            if (node == null)
            {
                return rules;
            }

            foreach (var element in node.Elements("rule"))
            {
                var rule = ParseRule(element);
                rules.Add(rule);
            }

            return rules;
        }

        private static JObject ParseRule(XElement node)
        {
            var rule = new JObject();
            node.Attributes()
                .ForEach(_ => rule[_.Name.LocalName] = _.Value);

            rule["conditions"] = ParseConditions(node.Element("conditions"));
            rule["actions"] = ParseActions(node.Element("actions"));
            return rule;
        }

        private static JObject ParseConditions(XElement node)
        {
            if (node == null)
            {
                return null;
            }

            var element = node.Element(0);
            if (element == null)
            {
                return null;
            }

            var condition = ParseConditionNode(element);

            return condition;
        }

        private static JObject ParseConditionNode(XElement node)
        {
            if (node.Name.LocalName == "condition")
            {
                return ParseCondition(node);
            }
            if (node.Name.LocalName == "not")
            {
                if (node.Element(0) == null)
                {
                    return null;
                }

                var operand = ParseCondition(node);
                if (operand == null)
                {
                    return null;
                }

                return new JObject
                {
                    ["type"] = "not",
                    ["operand"] = operand,
                };
            }

            var child1 = node.Element(0);
            if (child1 == null)
            {
                return null;
            }

            var child2 = node.Element(1);
            if (child2 == null)
            {
                return null;
            }

            var condition1 = ParseConditionNode(child1);
            if (condition1 == null)
            {
                return null;
            }

            var condition2 = ParseConditionNode(child2);
            if (condition2 == null)
            {
                return null;
            }

            JObject condition = null;
            switch (node.Name.LocalName)
            {
                case "and":
                    condition = new JObject
                    {
                        ["type"] = "and",
                        ["left"] = condition1,
                        ["right"] = condition2,
                    };
                    break;
                case "or":
                    condition = new JObject
                    {
                        ["type"] = "or",
                        ["left"] = condition1,
                        ["right"] = condition2,
                    };
                    break;
            }

            return condition;
        }

        private static JObject ParseCondition(XElement node)
        {
            var result = new JObject
            {
                ["type"] = "condition",
            };
            node.Attributes()
                .Where(_ => _.Name.LocalName != "except")
                .ForEach(_ => result[_.Name.LocalName] = _.Value);

            ParseParameters(node, result);

            if (node.GetAttributeValue("except") == "true")
            {
                result = new JObject
                {
                    ["type"] = "not",
                    ["operand"] = result,
                };
            }

            return result;
        }

        private static JArray ParseActions(XElement node)
        {
            var result = new JArray();

            if (node == null)
            {
                return result;
            }

            foreach (var element in node.Elements("action"))
            {
                var condition = ParseAction(element);
                if (condition != null)
                {
                    result.Add(condition);
                }
            }

            return result;
        }

        private static JObject ParseAction(XElement node)
        {
            var action = new JObject();
            node.Attributes().ForEach(_ => action[_.Name.LocalName] = _.Value);

            ParseParameters(node, action);

            return action;
        }

        private static void ParseParameters(XElement node, JObject result)
        {
            if (!node.HasAttributes || node.Attribute("id") == null)
            {
                return;
            }
            var id = node.Attribute("id").Value;

            if (string.IsNullOrWhiteSpace(id) || !ID.TryParse(id, out var itemId))
            {
                return;
            }

            HandleParameters(node, itemId, result);
        }

        private static void HandleParameters(XElement node, ID id, JObject result)
        {
            // If value of id attribute of an element matches with 'Cookie is Present' or 'Cookie Value' personalization rule,
            // add an attribute with name "_params" which will contain the cookie name fetched from the lookup item selected in the rule.

            if (id.Equals(ItemIds.Settings.Rules.Definitions.Elements.EW_Request.CookieIsPresent.Id)
                || id.Equals(ItemIds.Settings.Rules.Definitions.Elements.EW_Request.CookieValue.Id))
            {
                var cookieItemId = node.Attribute("cookieItemId")?.Value;
                if (!string.IsNullOrEmpty(cookieItemId))
                {
                    result["_params"] = new JObject
                    {
                        ["cookieName"] = ItemExtensions.GetTextFieldValue(cookieItemId, "Value")
                    };
                }
            }
            if (id.Equals(ItemIds.Settings.Rules.Definitions.Elements.EW_Affiliate.AffiliateMatch.Id))
            {
                var affiliateItemId = node.Attribute("affiliateItemId")?.Value;
                if (!string.IsNullOrEmpty(affiliateItemId))
                {
                    result["_params"] = new JObject
                    {
                        ["affiliateIdValue"] = ItemExtensions.GetTextFieldValue(affiliateItemId, "affiliateId")
                    };
                }
            }
        }
    }
}
