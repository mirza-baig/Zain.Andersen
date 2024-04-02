using System.Collections.Generic;
using Newtonsoft.Json;
using Sitecore.Abstractions;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.Serialization;
using Sitecore.LayoutService.Serialization.FieldSerializers;
using Sitecore.LayoutService.Serialization.ItemSerializers;

namespace Platform.Foundation.Core.LayoutService.Serialization.FieldSerializers
{
    public class ExtendedInternalLinkFieldSerializer : InternalLinkFieldSerializer
    {
        private readonly int childItemsResolutionDepth = 2;

        public ExtendedInternalLinkFieldSerializer(IItemSerializer itemSerializer, IFieldRenderer fieldRenderer, BaseMediaManager mediaManager) : base(itemSerializer, fieldRenderer, mediaManager)
        {
        }

        protected IEnumerable<Property> GetProperties(Item item, Field field, InternalLinkField internallinkfield, int depth)
        {
            if (field.Name.StartsWith("ef-")) // "ef" stands for "exclude fields property - if field name starts with "ef-", it will not include the fields of the target item into the response of layout service
            {
                return new List<Property>
                {
                    new Property("id", item.ID.Guid.ToString()),
                    new Property("url", GetLinkUrl(item)),
                    new Property("name", item.Name),
                    new Property("displayName", item.DisplayName),
                    new Property("templateId", item.TemplateID.Guid.ToString()),
                    new Property("templateName", item.TemplateName),
                };
            }

            return new List<Property>(base.GetProperties(item, internallinkfield, depth))
            {
                new Property("templateId", item.TemplateID.Guid.ToString()),
                new Property("templateName", item.TemplateName),
            };
        }

        protected override void WriteValue(Field field, JsonTextWriter writer)
        {
            InternalLinkField internalLinkField = new InternalLinkField(field);
            Item targetItem = internalLinkField.TargetItem;
            if (targetItem == null)
            {
                WriteEmptyValue(internalLinkField, writer);
                return;
            }
            int depth = GetDepth();
            if (depth >= base.SerializationMaxDepth)
            {
                writer.WriteValue(field.Value);
            }
            else
            {
                WriteValueObject(targetItem, field, internalLinkField, writer, depth);
            }
        }

        protected void WriteValueObject(Item item, Field field, InternalLinkField internallinkfield, JsonTextWriter writer, int depth)
        {
            Assert.IsNotNull(item, "item");

            IEnumerable<Property> properties = GetProperties(item, field, internallinkfield, depth);
            writer.WriteStartObject();
            WriteProperties(properties, internallinkfield, writer);
            if (!field.Name.StartsWith("ef-") && item.HasChildren)
            {
                GetChildren(internallinkfield, writer, depth, item, childItemsResolutionDepth - 1);
            }
            writer.WriteEndObject();

        }

        private void GetChildren(InternalLinkField internallinkfield, JsonTextWriter writer, int depth, Item item, int childItemsResolutionDepth)
        {
            writer.WritePropertyName("children");
            writer.WriteStartArray();
            foreach (Item child in item.Children.ToArray())
            {
                IEnumerable<Property> childProperties = GetProperties(child, internallinkfield, depth);
                writer.WriteStartObject();
                WriteProperties(childProperties, internallinkfield, writer);
                if (child.HasChildren && childItemsResolutionDepth > 0)
                {
                    GetChildren(internallinkfield, writer, depth, child, childItemsResolutionDepth - 1);
                }
                writer.WriteEndObject();
            }
            writer.WriteEndArray();
        }

        protected override void WriteProperties(IEnumerable<Property> properties, InternalLinkField internallinkfield, JsonTextWriter writer)
        {
            foreach (Property property in properties)
            {
                writer.WritePropertyName(property.Key);
                if (property.IsValueJson)
                {
                    writer.WriteRawValue(property.Value);
                }
                else
                {
                    writer.WriteValue(property.Value);
                }
            }
        }
    }
}
