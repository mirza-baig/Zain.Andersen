using System;
using Platform.Foundation.Core.Constants;
using Sitecore.Data.Events;
using Sitecore.Data.Managers;
using Sitecore.Diagnostics;
using Sitecore.Events;

namespace Platform.Foundation.Core.Events
{
    public class BranchEvents
    {

        public void OnVideoCreated(object sender, EventArgs args)
        {
            var itemCreated = Event.ExtractParameter(args, 0) as ItemCreatedEventArgs;
            Assert.IsNotNull(itemCreated, $"{nameof(itemCreated)} is null");
            var item = itemCreated?.Item;

            if (item == null
                || !"master".Equals(item.Database?.Name, StringComparison.OrdinalIgnoreCase)
                || !item.Paths.IsContentItem)
            {
                return;
            }

            if (TemplateManager.GetTemplate(item)?.DescendsFromOrEquals(TemplateIds.Foundation.Enterprise.BaseTemplates._BaseVideoElement.Template) == true) // Base Video Element
            {
                if (item.Parent != null && TemplateManager.GetTemplate(item.Parent).DescendsFromOrEquals(TemplateIds.Feature.RbA.Data.Videos.GalleryVideo.Template)) // Gallery Video
                {
                    var parentItem = item.Parent;
                    parentItem.Editing.BeginEdit();
                    parentItem.Fields[TemplateIds.Foundation.Enterprise.FieldSets._VideoPrimary.Fields.PrimaryVideo].Value = item.ID.ToString();
                    parentItem.Editing.EndEdit();
                }
            }
            
        }

       
    }
}
