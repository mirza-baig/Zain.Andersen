using Platform.Foundation.Core.Constants;
using Sitecore.Data.Items;
using Sitecore.ExperienceEditor.Speak.Server.Contexts;
using Sitecore.ExperienceEditor.Speak.Server.Requests;
using Sitecore.ExperienceEditor.Speak.Server.Responses;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.ExperienceEditor.Requests
{
    public class AddPageVariant : PipelineProcessorRequest<ItemContext>
    {
        private Item Item => this.RequestContext.Item;

        private string Name => this.RequestContext.Argument;

        public override PipelineProcessorResponseValue ProcessRequest()
        {
            var result = new PipelineProcessorResponseValue();

            if (this.Item.DoesItemInheritFrom(TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Template))
            {
                var folder = this.Item.Parent;
                var item = folder.Add(this.Name, this.Item.Template);
                result.Value = item.ID;
            }
            if (this.Item.DoesItemInheritFrom(TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template))
            {
                var folder = this.Item.FirstChildInheritingFrom(TemplateIds.Foundation.Enterprise.Personalization.PageVariantFolder.Template);
                if (folder == null)
                {
                    var folderTemplate = this.Item.Database.Templates[TemplateIds.Foundation.Enterprise.Personalization.PageVariantFolder.Template];
                    folder = this.Item.Add("Page Variant", folderTemplate);
                }

                var pageVariantTemplate = this.Item.Database.Templates[TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Template];
                var item = folder.Add(this.Name, pageVariantTemplate);
                result.Value = item.ID;
            }
            return result;
        }
    }
}
