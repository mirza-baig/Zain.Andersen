using System;
using System.Collections.Generic;
using System.Linq;
using Sitecore;
using Sitecore.Configuration;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using Sitecore.Layouts;
using Sitecore.Links;
using Sitecore.Shell.Framework.Commands;
using Sitecore.Web.UI.Sheer;

namespace Platform.Foundation.Core.Commands
{
    [Serializable]
    internal class AddVersionRecursiveCommand : Command
    {
        private HashSet<ID> LinkSet;

        protected static IEnumerable<string> ChildrenGroupingTemplates
        {
            get
            {
                return Enumerable.Select<string, string>((IEnumerable<string>)Settings.GetSetting("VersionFromLanguage.ChildrenGroupingTemplates", string.Empty).Split(new char[1]
                {
          '|'
                }, StringSplitOptions.RemoveEmptyEntries), (Func<string, string>)(s => s.Trim()));
            }
        }

        public override void Execute(CommandContext context)
        {
            Assert.ArgumentNotNull((object)context, "context");
            if (context.Items == null || context.Items.Length != 1)
                return;
            Context.ClientPage.Start((object)this, "Run", context.Parameters);
        }

        protected void Run(ClientPipelineArgs args)
        {
            Assert.ArgumentNotNull((object)args, "args");
            string path = args.Parameters["id"];
            Language sourceLang = Language.Parse(args.Parameters["sourceLang"]);
            Language language = Language.Parse(args.Parameters["targetLang"]);
            this.LinkSet = new HashSet<ID>();
            Item obj1 = Context.ContentDatabase.GetItem(path, language);
            if (obj1 == null || (!Context.IsAdministrator && (!obj1.Access.CanWrite() || !obj1.Locking.CanLock() && !obj1.Locking.HasLock()) || !SheerResponse.CheckModified()))
                return;
            this.AddAllReferences(obj1);
            LayoutField layoutField = (LayoutField)obj1.Fields[FieldIDs.LayoutField];
            if (!string.IsNullOrEmpty(layoutField.Value))
            {
                foreach (DeviceDefinition deviceDefinition in LayoutDefinition.Parse(layoutField.Value).Devices)
                {
                    foreach (RenderingDefinition renderingDefinition in deviceDefinition.Renderings)
                    {
                        Item obj2 = Context.ContentDatabase.GetItem(renderingDefinition.Datasource ?? string.Empty, language);
                        if (obj2 != null)
                        {
                            this.AddAllReferences(obj2);
                            if (Enumerable.Contains<string>(AddVersionRecursiveCommand.ChildrenGroupingTemplates, obj2.TemplateName))
                            {
                                foreach (Item obj3 in obj2.Children)
                                    this.AddAllReferences(obj3);
                            }
                        }
                    }
                }
            }
            foreach (ID id in this.LinkSet)
                this.CopyVersion(id, sourceLang, language);
        }

        private void AddAllReferences(Item item)
        {
            if (!this.LinkSet.Add(item.ID))
                return;
            foreach (Item obj in Enumerable.Select<ItemLink, Item>((IEnumerable<ItemLink>)item.Links.GetValidLinks(false), (Func<ItemLink, Item>)(il => il.GetTargetItem())))
            {
                if (obj.Paths.IsContentItem || obj.Paths.IsMediaItem)
                    this.LinkSet.Add(obj.ID);
            }
        }

        private void CopyVersion(ID id, Language sourceLang, Language targetLang)
        {
            Item obj1 = Context.ContentDatabase.GetItem(id, sourceLang);
            Item obj2 = Context.ContentDatabase.GetItem(id, targetLang);
            if (obj1 == null || obj2 == null || !obj2.IsFallback)
                return;
            obj2.Versions.AddVersion();
            // Getting the latest version explicitly since fields were not updating.
            Item newItem = Context.ContentDatabase.GetItem(id, targetLang, Sitecore.Data.Version.Latest);
            foreach (Field field in obj1.Fields)
            {
                if (field.HasValue)
                {
                    if (!field.Shared && !string.IsNullOrEmpty(field.Name))
                    {
                        using (new EditContext(newItem))
                        {
                            //Log.Info(string.Format("Copying Field with Display Name: {2}, Field ID: {0}, for Item: {1}", (object)field.ID, (object)field.Item.Name, (object)field.DisplayName));
                            newItem[field.Name] = obj1[field.Name];
                        }

                    }
                }
            }
        }
    }
}
