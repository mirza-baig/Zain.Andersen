using System;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Extensions;
using Sitecore;
using Sitecore.Data.Items;
using Sitecore.Events;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.Events
{
    public class PageVariantEvents
    {
        protected void HandleItemAdded(object sender, EventArgs args)
        {
            // Update the PageVariant with the layout details and Page Data from the Parent Page

            // Make sure we are a page variant in a page variant folder with a parent page
            var pageVariant = (Item)Event.ExtractParameter(args, 0);
            if (pageVariant == null || pageVariant.TemplateID != TemplateIds.Foundation.Enterprise.Personalization.PageVariant.Template)
            {
                return;
            }

            var parentFolder = pageVariant.Parent;
            if (parentFolder == null || parentFolder.TemplateID != TemplateIds.Foundation.Enterprise.Personalization.PageVariantFolder.Template)
            {
                return;
            }

            var sourcePage = parentFolder.Parent;
            if (sourcePage == null || !sourcePage.DoesItemInheritFrom(TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template))
            {
                return;
            }

            // Copy Layout Fields
            using (new EditContext(pageVariant))
            {
                pageVariant.Fields[FieldIDs.LayoutField].Value = sourcePage.Fields[FieldIDs.LayoutField].Value;
                pageVariant.Fields[FieldIDs.FinalLayoutField].Value = sourcePage.Fields[FieldIDs.FinalLayoutField].Value;
                pageVariant.Fields[Sitecore.XA.Foundation.Presentation.Templates._Designable.Fields.Design].Value = sourcePage.Fields[Sitecore.XA.Foundation.Presentation.Templates._Designable.Fields.Design].Value;
            }

            // Copy any Local Datasources
            var sourcePageData = sourcePage.GetFirstChildOfTemplate(Sitecore.XA.Foundation.LocalDatasources.Templates.PageData.ID);
            if (sourcePageData == null)
            {
                return;
            }

            sourcePageData.CopyTo(pageVariant, "Data");
        }
    }
}
