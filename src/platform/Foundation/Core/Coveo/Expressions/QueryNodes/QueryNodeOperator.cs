using System.ComponentModel;

namespace Platform.Foundation.Core.Coveo.Expressions.QueryNodes
{
    public enum QueryNodeOperator
    {
        [Description("=")]
        Equal,

        [Description("==")]
        ExactMatch,

        [Description("<>")]
        NotEqual,

        [Description("*=")]
        WildcardMatch,

        [Description("<")]
        LessThan,

        [Description(">")]
        GreaterThan,

        [Description(">=")]
        GreaterThanOrEqual,

        [Description("<=")]
        LessThanOrEqual,

        [Description("emptyField")]
        EmptyField,

        [Description("emptyValue")]
        EmptyFieldValue,

        [Description("..")]
        Range,

        [Description("~=")]
        FuzzyMatch,

        [Description("/=")]
        RegexMatch,

        [Description("%=")]
        PhoneticMatch,

        [Description("")]
        Unknown,
    }
}
