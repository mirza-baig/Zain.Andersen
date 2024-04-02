using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using Platform.Foundation.Core.LayoutService.Serialization.FieldSerializers;
using Platform.Foundation.Core.LayoutService.Serialization.ItemSerializers;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Globalization;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering;
using Sitecore.LayoutService.Presentation.Pipelines.RenderJsonRendering;
using Sitecore.LayoutService.Serialization;
using Sitecore.Mvc.Presentation;

namespace Platform.Foundation.Core.Pipelines.RenderJsonRendering
{
    public class Initialize : Sitecore.LayoutService.Presentation.Pipelines.RenderJsonRendering.Initialize
    {
        IRenderingConfiguration _renderingConfiguration;

        public Initialize(IConfiguration configuration) : base(configuration) { }

        protected override RenderedJsonRendering CreateResultInstance(RenderJsonRenderingArgs args)
        {
            _renderingConfiguration = args.RenderingConfiguration;

            var result = base.CreateResultInstance(args);

            result.RenderingParams = SerializeRenderingParams(args.Rendering);

            return result;
        }

        protected virtual IDictionary<string, string> SerializeRenderingParams(Rendering rendering)
        {
            IDictionary<string, string> paramDictionary = rendering.Parameters.ToDictionary(pair => pair.Key, pair => pair.Value);
            var template =
                GetRenderingParametersTemplate(rendering.RenderingItem.InnerItem);

            var fieldList = new FieldList();
            var fakeParamItem = new Item(ID.NewID,
                new ItemData(new ItemDefinition(ID.Undefined, "temp",
                    template.ID, ID.Undefined), Language.Current, Version.First, fieldList),
                rendering.RenderingItem.Database);

            var serializationOptions = new SerializationOptions { DisableEditing = true };

            foreach (var kvp in paramDictionary.ToList())
            {
                var key = kvp.Key;

                var templateFieldItem = template.GetField(key);
                if (templateFieldItem == null)
                {
                    continue;
                }
                var field = new Field(templateFieldItem.ID, fakeParamItem);

                fieldList.Add(field.ID, kvp.Value);

                if (_renderingConfiguration
                    .ItemSerializer is ExtendedItemSerializer extendedItemSerializer)
                {
                    var serializedField = extendedItemSerializer.SerializeField(new ParametersField(field, false),
                        serializationOptions);

                    var obj = JObject.Parse(serializedField);
                    paramDictionary[key] = obj[key]?.ToString();
                }
                else if (ID.TryParse(paramDictionary[key], out var itemId))
                {
                    Item item = rendering.RenderingItem.Database.GetItem(itemId);

                    paramDictionary[key] = _renderingConfiguration.ItemSerializer.Serialize(item, serializationOptions);
                }
            }
            return paramDictionary;
        }

        /// <summary>
        /// Gets the standard values item from parameters template.
        /// </summary>
        /// <param name="renderingItem">The rendering item.</param>
        /// <returns>The standard values item from parameters template.</returns>
        public static TemplateItem GetRenderingParametersTemplate(Item renderingItem)
        {
            string id = renderingItem["Parameters Template"];
            if (string.IsNullOrEmpty(id))
                id = "{8CA06D6A-B353-44E8-BC31-B528C7306971}";
            TemplateItem templateItem = renderingItem.Database.GetItem(new ID(id), renderingItem.Language);


            return templateItem;
        }
    }
}
