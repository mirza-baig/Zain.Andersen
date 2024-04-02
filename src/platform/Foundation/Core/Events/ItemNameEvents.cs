using System;
using Sitecore.Data.Items;
using Sitecore.Events;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.Events
{
    public class ItemNameEvents
    {
        protected void HandleItemName(object sender, EventArgs args)
        {
            var item = (Item)Event.ExtractParameter(args, 0);
            string processedName = item.Name.ToLower().Replace(' ', '-');
            if (item.Database.Name != "master"
                || !item.InheritsFrom(Constants.TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template)
                || (item.Name == processedName && item.DisplayName == processedName))
            {
                return;
            }

            using (new EditContext(item))
            {
                // The marketing team would like the rename process to rename both the item name and display name to match
                // Display name can still be changed by itself using the Display Name button in the toolbar
                item.Appearance.DisplayName = processedName;
                item.Name = processedName;
            }
        }

        protected void HandleItemNameCopied(object sender, EventArgs args)
        {
            // item:copied event
            // Index 0 - Item - Source item(Item that was copied)
            // Index 1 - Item - Result item(Result of copy operation)

            //var item = (Item)Event.ExtractParameter(args, 0);
            var item2 = (Item)Event.ExtractParameter(args, 1);
            string processedName = item2.Name.ToLower().Replace(' ', '-');

            if (item2.Database.Name != "master"
                || !item2.InheritsFrom(Constants.TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template)
                || (item2.Name == processedName && item2.DisplayName == processedName))
            {
                return;
            }

            using (new EditContext(item2))
            {
                // The marketing team would like the rename process to rename both the item name and display name to match
                // Display name can still be changed by itself using the Display Name button in the toolbar
                item2.Appearance.DisplayName = processedName;
                item2.Name = processedName;
            }
        }
    }
}
