using Platform.Foundation.Core.Switchers;
using Sitecore.Data.Fields;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.Presentation.Pipelines.RenderJsonRendering;
using Sitecore.Sites;

namespace Platform.Foundation.Core.Pipelines.RenderJsonRendering
{
    // ReSharper disable once UnusedMember.Global
    public class CustomResolveRenderingContents : ResolveRenderingContents
    {
        public CustomResolveRenderingContents(IConfiguration configuration) : base(configuration)
        {
        }

        protected override object GetResolvedContents(RenderJsonRenderingArgs args)
        {
            var innerField = args.Rendering?.RenderingItem?.InnerItem?.Fields["OtherProperties"];
            var properties = innerField != null ? new NameValueListField(innerField) : null;

            if (properties?.NameValues["EW_DisableEditing"] == "1")
            {
                using (new PageModeSwitcher(DisplayMode.Normal))
                {
                    return base.GetResolvedContents(args);
                }
            }
            return base.GetResolvedContents(args);
        }
    }
}
