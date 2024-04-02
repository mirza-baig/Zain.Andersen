using System;
using System.Collections.Specialized;
using Platform.Foundation.Core.ItemAsResources;
using Sitecore;
using Sitecore.Caching;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Shell.Framework.Commands;
using Sitecore.Web.UI.Sheer;

namespace Platform.Foundation.Core.Commands
{
    [Serializable]
    public class CleanUpItem : Command
    {
        public override void Execute(CommandContext context)
        {
            Assert.ArgumentNotNull(context, nameof(context));
            if (context.Items.Length != 1)
            {
                return;
            }

            Item obj = context.Items[0];
            Context.ClientPage.Start(this, nameof(Run), new NameValueCollection()
            {
                ["id"] = obj.ID.ToString(),
            });
        }

        public override CommandState QueryState(CommandContext context)
        {
            Error.AssertObject(context, nameof(context));

            if (context.Items.Length != 1)
            {
                return CommandState.Hidden;
            }

            if (!context.Items[0].Database.DataManager.DataSource.GetItemLocations(context.Items[0].ID).IsResource())
            {
                return CommandState.Hidden;
            }

            if (!context.Items[0].Database.DataManager.DataSource.GetItemLocations(context.Items[0].ID).IsOverridden())
            {
                return CommandState.Disabled;
            }

            return base.QueryState(context);
        }

        protected void Run(ClientPipelineArgs args)
        {
            var id = args.Parameters["id"];
            var item = Context.ContentDatabase.GetItem(ID.Parse(id));
            Error.AssertItemFound(item);

            if (args.IsPostBack)
            {
                if (args.Result == "yes")
                {
                    item.RemoveFromHead();

                    // Clear caches
                    CacheManager.ClearAllCaches();

                    // Refresh editor
                    Context.ClientPage.SendMessage(this, $"item:load(id={id})");

                    // Refresh tree
                    Context.ClientPage.ClientResponse.Timer($"item:refreshchildren(id={item.ParentID})", 2);
                }
                else
                {
                    return;
                }
            }
            else
            {
                Context.ClientPage.ClientResponse.Confirm($"Are you sure you want to reset the \"{item.Name}\" item?");
                args.WaitForPostBack();
            }
        }
    }
}
