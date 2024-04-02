using System.Collections.Generic;
using Sitecore.Abstractions;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.LayoutService.Serialization;
using Sitecore.LayoutService.Serialization.FieldSerializers;
using Sitecore.LayoutService.Serialization.ItemSerializers;

namespace Platform.Foundation.Core.LayoutService.Serialization.FieldSerializers
{
    public class ExtendedMultilistFieldSerializer : MultilistFieldSerializer
    {
        //private readonly int childItemsResolutionDepth = 2;

        public ExtendedMultilistFieldSerializer(IItemSerializer itemSerializer, IFieldRenderer fieldRenderer, BaseMediaManager mediaManager) : base(itemSerializer, fieldRenderer, mediaManager)
        {
        }

        protected override IEnumerable<Property> GetProperties(Item item, MultilistField field, int depth)
        {
            return new List<Property>(base.GetProperties(item, field, depth))
            {
                new Property("templateId", item.TemplateID.Guid.ToString()),
                new Property("templateName", item.TemplateName),
            };
        }

        // Following method overrides the existing implementation and includes the child items of selected items in multilist type of fields in the response of layout service. As of now commenting this out as there is no need for now and few of the multilist fields allow to select page item and if Home page is selected then, it will include all the pages of site in layout service output.

        //protected override void WriteValueObject(IEnumerable<Item> items, MultilistField field, JsonTextWriter writer, int depth)
        //{
        //    writer.WriteStartArray();
        //    foreach (Item item in items)
        //    {
        //        IEnumerable<Property> properties = GetProperties(item, field, depth);
        //        writer.WriteStartObject();
        //        WriteProperties(properties, writer);
        //        if (item.HasChildren)
        //        {
        //            GetChildren(field, writer, depth, item, childItemsResolutionDepth - 1);
        //        }
        //        writer.WriteEndObject();
        //    }
        //    writer.WriteEndArray();
        //}

        //private void GetChildren(MultilistField field, JsonTextWriter writer, int depth, Item item, int childItemsResolutionDepth)
        //{
        //    writer.WritePropertyName("children");
        //    writer.WriteStartArray();
        //    foreach (Item child in item.Children.ToArray())
        //    {
        //        IEnumerable<Property> childProperties = GetProperties(child, field, depth);
        //        writer.WriteStartObject();
        //        WriteProperties(childProperties, writer);
        //        if (child.HasChildren && childItemsResolutionDepth > 0)
        //        {
        //            GetChildren(field, writer, depth, child, childItemsResolutionDepth - 1);
        //        }
        //        writer.WriteEndObject();
        //    }
        //    writer.WriteEndArray();
        //}

        //protected override void WriteProperties(IEnumerable<Property> properties, JsonTextWriter writer)
        //{
        //    foreach (Property property in properties)
        //    {
        //        writer.WritePropertyName(property.Key);
        //        if (property.IsValueJson)
        //        {
        //            writer.WriteRawValue(property.Value);
        //        }
        //        else
        //        {
        //            writer.WriteValue(property.Value);
        //        }
        //    }
        //}

    }
}
