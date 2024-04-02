using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Platform.Foundation.Core.LayoutService.Serialization.FieldSerializers;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.Serialization;
using Sitecore.LayoutService.Serialization.Pipelines.GetFieldSerializer;

namespace Platform.Foundation.Core.Pipelines.GetFieldSerializer
{
    public class GetRulesFieldSerializer : BaseGetFieldSerializer
    {
        public GetRulesFieldSerializer(IFieldRenderer fieldRenderer) : base(fieldRenderer)
        {
        }

        protected override void SetResult(GetFieldSerializerPipelineArgs args)
        {
            Assert.ArgumentNotNull(args, nameof(args));
            Assert.IsNotNull(args.Field, "args.Field is null");
            Assert.IsNotNull(args.ItemSerializer, "args.ItemSerializer is null");
            args.Result = new RulesFieldSerializer(this.FieldRenderer);
        }
    }
}
