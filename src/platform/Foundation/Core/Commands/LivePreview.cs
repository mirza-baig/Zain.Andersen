using System.Collections.Specialized;
using Sitecore;
using Sitecore.Configuration;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using Sitecore.Links;
using Sitecore.Pipelines.HasPresentation;
using Sitecore.Publishing;
using Sitecore.Shell.DeviceSimulation;
using Sitecore.Shell.Framework.Commands;
using Sitecore.Sites;
using Sitecore.Web.UI.Sheer;

namespace Platform.Foundation.Core.Commands
{
    public class LivePreview : Command
    {
        public override void Execute(CommandContext context)
        {
            Assert.ArgumentNotNull((object)context, "context");
            if (context.Items.Length != 1)
            {
                return;
            }
            Item obj = context.Items[0];
            NameValueCollection parameters = new NameValueCollection();
            parameters["uri"] = obj.Uri.ToString();
            Context.ClientPage.Start((object)this, "Run", parameters);
        }

        public override CommandState QueryState(CommandContext context)
        {
            Error.AssertObject((object)context, "context");
            if (!Settings.Preview.Enabled)
            {
                return CommandState.Hidden;
            }
            if (context.Items.Length != 1)
            {
                return CommandState.Disabled;
            }
            return base.QueryState(context);
        }

        protected void Run(ClientPipelineArgs args)
        {
            var selectedItem = Database.GetItem(ItemUri.Parse(args.Parameters["uri"]));
            if (selectedItem == null)
            {
                SheerResponse.Alert("Item not found.");
            }
            else
            {
                var options = LinkManager.GetDefaultUrlBuilderOptions();
                options.AlwaysIncludeServerUrl = true;

                var urlString = LinkManager.GetItemUrl(selectedItem, options);
                if (args.IsPostBack)
                {
                    if (args.Result != "yes")
                    {
                        return;
                    }
                    Item startItem = Context.ContentDatabase.GetItem(LinkManager.GetPreviewSiteContext(selectedItem).StartPath);
                    if (startItem == null)
                    {
                        SheerResponse.Alert("Start item not found.");
                        return;
                    }
                    urlString = LinkManager.GetItemUrl(startItem);
                }
                else if (!HasPresentationPipeline.Run(selectedItem))
                {
                    SheerResponse.Confirm("The current item cannot be previewed because it has no layout for the current device.\n\nDo you want to preview the start Web page instead?");
                    args.WaitForPostBack();
                    return;
                }

                SheerResponse.CheckModified(false);
                SiteContext previewSiteContext = LinkManager.GetPreviewSiteContext(selectedItem);
                if (previewSiteContext == null)
                {
                    SheerResponse.Alert(Translate.Text("Site \"{0}\" not found", (object)Settings.Preview.DefaultSite));
                }
                else
                {
                    PreviewManager.StoreShellUser(Settings.Preview.AsAnonymous);
                    //No need to pass these parameters as page will open using its item url
                    //UrlString urlString = new UrlString("/");
                    //urlString["sc_itemid"] = selectedItem.ID.ToString();
                    //urlString["sc_mode"] = "preview";
                    //urlString["sc_lang"] = selectedItem.Language.ToString();
                    //urlString["sc_site"] = previewSiteContext.Name;
                    DeviceSimulationUtil.DeactivateSimulators();
                    if (UIUtil.IsChrome())
                        SheerResponse.Eval($"setTimeout(function () {{ window.open('{urlString}', '_blank');}}, 0);");
                    else
                        SheerResponse.Eval($"window.open('{urlString}', '_blank');");
                }
            }
        }
    }
}
