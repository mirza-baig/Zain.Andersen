using Sitecore.Abstractions;
using Sitecore.Data.Items;
using Sitecore.Links;
using Sitecore.Links.UrlBuilders;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.LinkProviders
{
    public class EnterpriseLinkProvider : LinkProvider
    {
        public EnterpriseLinkProvider(BaseFactory factory) : base(factory) { }

        /*To resolve this error "Could not create instance of type: Platform.Foundation.Core.LinkProviders.EnterpriseLinkProvider. No matching constructor was found. Constructor parameters:", parameterless constructor added.
        */
        [System.Obsolete]
        public EnterpriseLinkProvider() { }

        public override string GetItemUrl(Item item, ItemUrlBuilderOptions options)
        {
            var url = base.GetItemUrl(item, options);

            if (!item.InheritsFrom(Constants.TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template))
            {
                return url.ToLowerInvariant();
            }

            return ToSeoUrl(url);
        }

        public string ToSeoUrl(string url)
        {
            string newUrl;
            if (url.IndexOf("?") > -1)
            {
                string[] values = url.Split('?');

                if (values[0].EndsWith("/"))
                {
                    newUrl = string.Format("{0}{1}{2}", values[0].ToLowerInvariant(), "?", values[1]);
                    return newUrl;
                }

                newUrl = string.Format("{0}{1}{2}{3}", values[0].ToLowerInvariant(), "/", "?", values[1]);
                return newUrl;

            }

            if (!url.EndsWith("/"))
            {
                newUrl = string.Format("{0}{1}", url, "/");
                return newUrl.ToLowerInvariant();
            }

            return url.ToLowerInvariant();
        }
    }
}
