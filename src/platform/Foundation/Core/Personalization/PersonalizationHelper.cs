using Platform.Foundation.Core.Constants;
using Sitecore.Data.Fields;

namespace Platform.Foundation.Core.Personalization
{
    public static class PersonalizationHelper
    {
        public static bool IsPageVariantRulesField(Field field)
        {
            return field.ID == TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Fields.ActivationRules;
        }

        public static bool IsAffiliatePersonalizationField(Field field)
        {
            return field.ID == TemplateIds.Foundation.Enterprise.FieldSets._AffilitePersonalization.Fields.AffiliatePersonalizationRules;
        }
    }
}
