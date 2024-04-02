using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Platform.Foundation.Core.Extensions;

namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public class FieldNode : IQueryNode
    {
        protected static readonly string COVEO_INDEX_DATE_FORMAT = "yyyy/MM/dd@HH:mm:ssZ";

        protected static readonly Regex ATOMIC_REGEX = new Regex(@"^\d+(\.\d+)?$|^[\d\w]+$");
        protected static readonly Regex RANGE_REGEX = new Regex(@"^\d+(\.\d+)?\.\.\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}\.\.\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$");
        protected static readonly Regex RANGE_WITHOUT_OUTERBOUNDS_REGEX = new Regex(@"^\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$");

        public string FieldName { get; set; }

        public QueryNodeOperator Operator { get; set; } = QueryNodeOperator.Unknown;

        public IEnumerable<object> FieldValues { get; set; }

        public FieldValueType ValueType { get; set; } = FieldValueType.String;

        public FieldNode(string fieldName, QueryNodeOperator @operator, object value)
            : this(fieldName, @operator, new object[] { value })
        {
        }

        public FieldNode(string fieldName, QueryNodeOperator @operator, IEnumerable<object> values)
        {
            FieldName = fieldName;
            Operator = @operator;
            FieldValues = values;
            ValueType = GetValueType(values);
        }

        public string GetExpression()
        {
            if (ValueType == FieldValueType.String)
            {
                return GetStringExpression();
            }
            else
            {
                return BuildFieldExpression(FieldName, Operator.Description(), FieldValues.Select(_ => MapValueForType(_)));
            }
        }

        protected string GetStringExpression()
        {
            var values = FieldValues.Cast<string>().Where(_ => !string.IsNullOrEmpty(_));
            if (values.Any())
            {
                return BuildFieldExpression(FieldName, Operator.Description(), values);
            }
            else
            {
                switch (Operator)
                {
                    case QueryNodeOperator.Equal:
                    case QueryNodeOperator.ExactMatch:
                        return $"@{FieldName}";
                    case QueryNodeOperator.NotEqual:
                        return $"(NOT @{FieldName})";
                    default:
                        throw new ApplicationException($"Operator \"{Operator.Description()}\" for field \"{FieldName}\" requires a non-empty value.");
                }
            }
        }

        protected string BuildFieldExpression(string fieldName, string @operator, IEnumerable<string> values)
        {
            if (FieldValues.Count() == 1)
            {
                return $"@{fieldName}{@operator}{QuoteAndEscapeIfNeeded(values.First())}";
            }
            else
            {
                return $"@{fieldName}{@operator}({string.Join(",", values.Select(_ => QuoteAndEscapeIfNeeded(_)))})";
            }
        }

        protected string MapValueForType(object value)
        {
            switch (ValueType)
            {
                case FieldValueType.Boolean:
                    return ((bool)value) ? "1" : "0";
                case FieldValueType.Date:
                    return ((DateTime)value).ToString(COVEO_INDEX_DATE_FORMAT);
                case FieldValueType.Number:
                    return value.ToString();
                default:
                    return value.ToString();
            }
        }

        protected string QuoteAndEscapeIfNeeded(string str)
        {
            return IsAtomicString(str) || IsRangeString(str) || IsRangeWithoutOuterBoundsString(str) ? str : QuoteAndEscape(str);
        }

        protected bool IsAtomicString(string str)
        {
            return ATOMIC_REGEX.IsMatch(str);
        }

        protected bool IsRangeString(string str)
        {
            return RANGE_REGEX.IsMatch(str);
        }

        protected bool IsRangeWithoutOuterBoundsString(string str)
        {
            return RANGE_WITHOUT_OUTERBOUNDS_REGEX.IsMatch(str);
        }

        protected string QuoteAndEscape(string str)
        {
            return $"\"{EscapeString(str)}\"";
        }

        protected string EscapeString(string str)
        {
            return str.Replace("\"", " ");
        }

        private FieldValueType GetValueType(IEnumerable<object> values)
        {
            var valueType = FieldValueType.Object;
            var value = values.FirstOrDefault<object>();
            if (value != null)
            {
                if (IsNumericalValue(value))
                {
                    valueType = FieldValueType.Number;
                }
                else
                {
                    switch (value)
                    {
                        case bool _:
                            valueType = FieldValueType.Boolean;
                            break;
                        case DateTime _:
                            valueType = FieldValueType.Date;
                            break;
                        case string _:
                            valueType = FieldValueType.String;
                            break;
                    }
                }
            }
            return valueType;
        }

        private bool IsNumericalValue(object value) => value is byte || IsIntegerValue(value) || IsUnsignedIntegerValue(value) || IsDecimalValue(value);

        private bool IsIntegerValue(object value)
        {
            switch (value)
            {
                case short _:
                case int _:
                    return true;
                default:
                    return value is long;
            }
        }

        private bool IsUnsignedIntegerValue(object value)
        {
            switch (value)
            {
                case ushort _:
                case uint _:
                    return true;
                default:
                    return value is ulong;
            }
        }

        private bool IsDecimalValue(object value)
        {
            switch (value)
            {
                case float _:
                case double _:
                    return true;
                default:
                    return value is Decimal;
            }
        }
    }
}
