using Platform.Foundation.Core.Constants;
using Sitecore.Data.Items;
using Sitecore.ExperienceEditor.Speak.Server.Contexts;
using Sitecore.ExperienceEditor.Speak.Server.Requests;
using Sitecore.ExperienceEditor.Speak.Server.Responses;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.ExperienceEditor.Requests
{
    public class CanAddPageVariant : PipelineProcessorRequest<ItemContext>
    {
        private Item Item => this.RequestContext.Item;

        public override PipelineProcessorResponseValue ProcessRequest()
        {
            if (this.Item.DoesItemInheritFrom(TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Template))
            {
                return new PipelineProcessorResponseValue()
                {
                    Value = this.Item.Parent.Access.CanCreate(),
                };
            }
            if (this.Item.DoesItemInheritFrom(TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template))
            {
                return new PipelineProcessorResponseValue()
                {
                    Value = this.Item.Access.CanCreate(),
                };
            }

            return new PipelineProcessorResponseValue()
            {
                Value = false,
            };
        }
    }
}
