using System;
using System.Collections.Generic;
using Platform.Foundation.Core.Constants;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.XA.Foundation.Presentation.Requests;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.ExperienceEditor.Requests
{
    public class RetrievePageVariants : RetrieveItemsBase
    {
        private Item Item => this.RequestContext.Item;

        protected override Item Root
        {
            get
            {
                if (this.Item.TemplateID == TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Template)
                {
                    return this.Item.Parent;
                }
                var folder = this.Item.FirstChildInheritingFrom(TemplateIds.Foundation.Enterprise.Personalization.PageVariantFolder.Template);
                return folder;
            }
        }

        protected override IList<ID> Highlights
        {
            get
            {
                if (this.Item.TemplateID == TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Template)
                {
                    return new ID[1] { this.Item.ID };
                }
                return Array.Empty<ID>();
            }
        }
        protected override string GetTooltip(Item item, IList<ID> highlights)
        {
            return "";
        }

        protected override bool IsFolder(Item item)
        {
            return false;
        }

        protected override bool IsItem(Item item)
        {
            return true;
        }

        protected override IList<dynamic> FormatChildren(Item parent, IList<ID> highlights, IList<Item> toAppend)
        {
            List<object> list = new List<object>();
            if (parent != null)
            {
                GetChildItems(parent, highlights, toAppend, list);
            }

            if (toAppend != null)
            {
                foreach (Item item in toAppend)
                {
                    list.Add(new
                    {
                        Title = GetTitle(item),
                        ItemId = item.ID.ToString(),
                        IconPath = GetIcon(item),
                        Tooltip = GetTooltip(item),
                        ParentId = parent != null ? parent.ID.ToString() : "",
                        CanSelect = GetCanSelect(item)
                    });
                }
            }

            return list;
        }
    }
}
