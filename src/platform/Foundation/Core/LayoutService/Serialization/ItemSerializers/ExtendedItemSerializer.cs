using System;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Coveo;
using Platform.Foundation.Core.Personalization;
using Platform.Foundation.Core.Switchers;
using Sitecore.Collections;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.LayoutService.Helpers;
using Sitecore.LayoutService.Serialization;
using Sitecore.LayoutService.Serialization.ItemSerializers;
using Sitecore.LayoutService.Serialization.Pipelines.GetFieldSerializer;
using Sitecore.Links;
using Sitecore.Sites;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.LayoutService.Serialization.ItemSerializers
{
    // ReSharper disable once UnusedMember.Global
    public class ExtendedItemSerializer : DefaultItemSerializer
    {
        protected readonly Set<ID> NonEditableTemplates =
            new Set<ID>(new[]
            {
                TemplateIds.Foundation.XA.Common.Enum.Template,
                TemplateIds.Foundation.Enterprise.Data.Search.FacetTag.Template,
                TemplateIds.Feature.AW.Data.Products.Product.Template,
            });


        protected readonly Set<ID> NonEditableTemplatesWhenLimitedPage =
            new Set<ID>(new[]
            {
                TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template,
            });

        protected CoveoHelper CoveoHelper { get; set; } = new CoveoHelper();

        public ExtendedItemSerializer(IGetFieldSerializerPipeline getFieldSerializerPipeline)
            : base(getFieldSerializerPipeline)
        {
        }

        public string SerializeField(Field field, SerializationOptions options)
        {
            using (StringWriter stringWriter = new StringWriter())
            {
                using (JsonTextWriter writer = new JsonTextWriter(stringWriter))
                {
                    writer.WriteStartObject();
                    this.SerializeField(field, writer, options, 0);
                    writer.WriteEndObject();
                }
                return stringWriter.ToString();
            }
        }

        protected override bool FieldFilter(Field field)
        {
            if (field.Item.InheritsFrom(TemplateIds.Foundation.Enterprise
                    .FieldSets.Containers._FieldDataSourceContainer.Template) &&
                field.Name.StartsWith("ph-",
                    StringComparison.OrdinalIgnoreCase))
            {
                return false;
            }

            // In Limited Page mode we only want certain fields
            if (ItemSerializationModeSwitcher.CurrentMode ==
                ItemSerializationMode.LimitedPage)
            {
                // This only applies to Page templates
                if (field.Item.InheritsFrom(TemplateIds.Foundation.Enterprise
                    .BaseTemplates.Pages._BasePage.Template))
                {
                    // We only want the Page Title field.  Ignore all other fields
                    if (field.ID != TemplateIds.Foundation.Enterprise.FieldSets
                        .Routes._PageProperties.Fields.PageTitle)
                    {
                        return false;
                    }
                }
            }

            if (field.Type == "Rules")
            {
                return ShouldSerializeRule(field);
            }

            return base.FieldFilter(field);
        }

        protected bool ShouldSerializeRule(Field field)
        {
            // We only serialize Coveo filter and boosting fields at this time
            return CoveoHelper.IsCoveoFilterField(field) ||
                   CoveoHelper.IsCoveoBoostingField(field) ||
                   PersonalizationHelper.IsPageVariantRulesField(field) ||
                   PersonalizationHelper.IsAffiliatePersonalizationField(field);
        }

        protected override void SerializeField(Field field,
            JsonTextWriter writer,
            SerializationOptions options, int depth)
        {
            var mode = ItemSerializationMode.Default;

            // When serializing the RelatedPages field, we don't want the full page object, just a small subset
            // of fields.
            if (field.ID ==
                TemplateIds.Foundation.Enterprise.BaseTemplates._BasePhoto
                    .Fields.RelatedPages)
            {
                mode = ItemSerializationMode.LimitedPage;
            }

            using (new ItemSerializationModeSwitcher(mode))
            {
                base.SerializeField(field, writer, options, depth);
            }
        }

        protected override string SerializeItem(Item item, SerializationOptions options)
        {
            // Tried `options.DisableEditing = true;` but that didn't seem to
            // actually disable editing, so using our PageModeSwitcher instead.

            // Default is no change.
            var desiredMode = PageModeSwitcher.CurrentMode;

            // Templates that are never editable
            if (NonEditableTemplates.Any(x => item.Template.DoesTemplateInheritFrom(x)))
            {
                desiredMode = DisplayMode.Normal;
            }

            if (ItemSerializationModeSwitcher.CurrentMode ==
                ItemSerializationMode.LimitedPage)
            {
                // Templates that are only non-editable in LimitedPage mode.
                if (NonEditableTemplatesWhenLimitedPage.Any(x =>
                    item.Template.DoesTemplateInheritFrom(x)))
                {
                    desiredMode = DisplayMode.Normal;
                }
            }


            using (new PageModeSwitcher(desiredMode))
            {
                var baseResult = base.SerializeItem(item, options);


                if (item.InheritsFrom(TemplateIds.Foundation.Enterprise.BaseTemplates._BaseSerializeChildren.Template))
                {
                    var baseJObject = JObject.Parse(baseResult);
                    var childrenJObjects = item.Children.Select(x => GetItemJson(x, options));
                    baseJObject["children"] = new JArray(childrenJObjects);
                    return baseJObject.ToString();
                }

                return baseResult;
            }
        }

        public JObject GetItemJson(Item item, SerializationOptions options)
        {
            var fields = JObject.Parse(SerializeItem(item, options));

            var obj = new JObject
            {
                ["id"] = item.ID.Guid.ToString("D"),
                ["displayName"] = item.DisplayName,
                ["name"] = item.Name,
                ["templateId"] = item.TemplateID.Guid.ToString("D"),
                ["templateName"] = item.TemplateName,
                ["url"] = LinkManager.GetItemUrl(item, ItemUrlHelper.GetLayoutServiceUrlOptions()),
                ["fields"] = fields,
            };

            if (item.InheritsFrom(TemplateIds.Foundation.Enterprise.BaseTemplates._BaseSerializeChildren.Template))
            {
                var childrenJObjects = item.Children.Select(x => GetItemJson(x, options));
                obj["fields"]["children"] = new JArray(childrenJObjects);
            }

            return obj;
        }
    }
}
