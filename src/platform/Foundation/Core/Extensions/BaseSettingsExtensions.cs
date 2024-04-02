using Sitecore.Abstractions;

namespace Platform.Foundation.Core.Extensions
{
    public static class BaseSettingsExtensions
    {
        public static bool IsProduction(this BaseSettings @this)
        {
            return @this.GetEnvironmentName() == "PROD";
        }

        public static string GetEnvironmentName(this BaseSettings @this)
        {
            var environment = @this.GetSetting("XA.Foundation.Multisite.Environment");
            return environment?.ToUpperInvariant();
        }
    }
}
