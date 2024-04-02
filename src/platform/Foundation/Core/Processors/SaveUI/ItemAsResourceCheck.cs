using Platform.Foundation.Core.ItemAsResources;
using Sitecore;
using Sitecore.Diagnostics;
using Sitecore.Pipelines.Save;
using Sitecore.Web.UI.Sheer;

namespace Platform.Foundation.Core.Processors.SaveUI
{
    public class ItemAsResourceCheck
    {
        public void Process(SaveArgs args)
        {
            Assert.ArgumentNotNull(args, nameof(args));

            if (args.Items == null)
            {
                return;
            }

            if (args.IsPostBack)
            {
                if (!(args.Result == "yes"))
                {
                    args.AbortPipeline();
                }
                args.IsPostBack = false;
            }
            else
            {
                var count = 0;
                foreach (var saveItem in args.Items)
                {
                    var item = Client.ContentDatabase.GetItem(saveItem.ID, saveItem.Language, saveItem.Version);
                    if (item != null && item.Database.DataManager.DataSource.GetItemLocations(item.ID).IsResource())
                    {
                        count++;
                    }
                }
                if (count > 0)
                {
                    SheerResponse.Confirm("Some of the the items are in resource files.\n\nAre you sure you want to save the changes?");
                    args.WaitForPostBack();
                }
            }
        }
    }
}
