using System.Linq;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.ExperienceEditor.Speak.Server.Requests;
using Sitecore.ExperienceEditor.Speak.Server.Responses;
using Sitecore.XA.Foundation.Editing.Requests.Contexts;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.ExperienceEditor.Requests
{
    public class DoesItemInheritFrom : PipelineProcessorRequest<BaseTemplateContext>
    {
        private Item TargetItem => this.RequestContext.TargetItem;

        private ID[] BaseTemplateIds => this.RequestContext.BaseTemplateId;

        public override PipelineProcessorResponseValue ProcessRequest()
        {
            var result = this.BaseTemplateIds.Any(id => this.TargetItem.DoesItemInheritFrom(id));
            return new PipelineProcessorResponseValue()
            {
                Value = result,
            };
        }
    }
}
