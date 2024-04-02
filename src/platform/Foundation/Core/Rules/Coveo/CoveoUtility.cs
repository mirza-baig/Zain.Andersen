using Sitecore.Data;

namespace Platform.Foundation.Core.Rules.Coveo
{
    public static class CoveoUtility
    {
        public static string GetCoveoFieldName(ID fieldItemId)
        {
            var fieldItem = Sitecore.Context.Database?.GetItem(fieldItemId);
            if (fieldItem == null)
                return string.Empty;

            return fieldItem["Value"];
        }
    }
}
