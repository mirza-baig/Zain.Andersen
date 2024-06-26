﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Platform.Foundation.Core.Extensions;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using Sitecore.Text;
using Sitecore.Web;
using Sitecore.Web.UI.HtmlControls;
using Sitecore.Web.UI.HtmlControls.Data;
using Sitecore.Web.UI.Sheer;
using Sitecore.Web.UI.WebControls;

namespace Platform.Foundation.Core.Fields
{
    public class TreeList : Sitecore.Shell.Applications.ContentEditor.TreeList
    {
        protected override void OnLoad(EventArgs args)
        {
            Assert.ArgumentNotNull(args, "args");
            base.OnLoad(args);

            if (!Sitecore.Context.ClientPage.IsEvent)
            {
                // find the existing TreeviewEx that the base OnLoad added, get a ref to its parent, and remove it from controls
                var existingTreeview = (TreeviewEx)WebUtil.FindControlOfType(this, typeof(TreeviewEx));
                var treeviewParent = existingTreeview.Parent;

                // find the existing DataContext that the base OnLoad added, get a ref to its parent, and remove it from controls
                var dataContext = (DataContext)WebUtil.FindControlOfType(this, typeof(DataContext));
                var dataContextParent = dataContext.Parent;

                dataContextParent.Controls.Remove(dataContext); // remove stock data context, we parse our own

                var itemBeingEdited = this.GetItemBeingEdited();

                // parse the source string and create appropriate data contexts out of it
                var rootDataSources = GetRootDataSources(Source, relativeRootItem: itemBeingEdited);
                var dataContexts = rootDataSources.Distinct()
                    .Select(rds => CreateDataContext(dataContext, rds))
                    .ToArray();
                var dataContextIDs = dataContexts.Select(dc => dc.ID).ToList();

                // Add a container for hidden mappings from the item path to the data context id
                var dataContextMappings = new System.Web.UI.HtmlControls.HtmlGenericControl("div");
                dataContextMappings.Attributes.Add("id", String.Format("{0}_ewDataContextsMapping", existingTreeview.ID));
                dataContextMappings.Attributes.Add("style", "display:none");
                dataContextParent.Controls.Add(dataContextMappings);

                // add the data contexts
                foreach (var context in dataContexts)
                {
                    var item = context.GetItem(context.Root);
                    var mapping = new System.Web.UI.HtmlControls.HtmlInputHidden();
                    mapping.Attributes.Add("data-context-id", context.ID);
                    mapping.Attributes.Add("data-path", item?.Paths.FullPath);
                    dataContextMappings.Controls.Add(mapping);
                    dataContextParent.Controls.Add(context);
                }

                // create our MultiRootTreeview to replace the TreeviewEx
                var multiRootTreeview = new MultiRootTreeview
                {
                    ID = existingTreeview.ID,
                    DblClick = existingTreeview.DblClick,
                    Enabled = existingTreeview.Enabled,
                    DisplayFieldName = existingTreeview.DisplayFieldName,
                    DataContext = new ListString(dataContextIDs).ToString()
                };

                // replace existing tree view with our multi root version
                existingTreeview.Parent.Controls.Clear();
                treeviewParent.Controls.Add(multiRootTreeview);

                var listbox = typeof(Sitecore.Shell.Applications.ContentEditor.TreeList).GetField("_listBox", BindingFlags.Instance | BindingFlags.NonPublic).GetValue(this) as Listbox;

                // Override the OnChange event, the js method is in the ContentEditor/QueryableTreeList.js file
                listbox.Attributes["onchange"] = "javascript:MultiRootTreeList.SelectedListBox.OnChange(this, '" + this.ID + "');";
            }
        }

        /// <summary>
        /// Converts the Source string into a list of root datasources.
        /// </summary>
        /// <param name="sourceString">The Source string for the field</param>
        /// <param name="relativeRootItem">The Item to use when evaluating queries etc.</param>
        /// <returns></returns>
        protected virtual IEnumerable<string> GetRootDataSources(string sourceString, Item relativeRootItem)
        {
            return GetRawDataSources(sourceString)
                .SelectMany(rawDataSource => EvaluateRawDataSource(rawDataSource, relativeRootItem));
        }

        /// <summary>
        /// Parse the Source string into a list of raw/unevaluated data source strings
        /// </summary>
        /// <param name="sourceString">The Source string for the field</param>
        /// <returns>a list of raw datasource strings</returns>
        protected virtual IEnumerable<string> GetRawDataSources(string sourceString)
        {
            // Need to re-parse the DataSource to keep the casing
            var dataSources = Sitecore.StringUtil.ExtractParameter("DataSource", sourceString).Trim();
            if (string.IsNullOrEmpty(dataSources))
                dataSources = sourceString;

            // ListString parses pipe-separated values
            return new ListString(dataSources);
        }

        /// <summary>
        /// Get the current content item used to evaluate relative queries etc.
        /// </summary>
        /// <returns></returns>
        protected virtual Item GetItemBeingEdited()
        {
            if (Sitecore.Context.ContentDatabase == null || ItemID == null)
                return null;

            var item = Sitecore.Context.ContentDatabase.GetItem(ItemID);

            return item;
        }

        /// <summary>
        /// Evaluates a raw datasource into a list of root datasources.
        /// </summary>
        /// <param name="rawDataSource">A "raw" datasource string (e.g. "query:...")</param>
        /// <param name="relativeRootItem">The Item to use when evaluating queries etc.</param>
        /// <returns>A list of root datasources</returns>
        protected virtual IEnumerable<string> EvaluateRawDataSource(string rawDataSource, Item relativeRootItem)
        {
            if (string.IsNullOrWhiteSpace(rawDataSource))
                return Enumerable.Empty<string>();

            // The way that LookupSources.GetItems() handles IDs and fixed paths
            // is to return all children instead of the item itself, so we handle
            // those cases explicitly.
            if (Sitecore.Data.ID.IsID(rawDataSource))
            {
                return new[] { rawDataSource };
            }

            if (rawDataSource.StartsWith("/"))
            {
                return new[] { rawDataSource };
            }

            if (relativeRootItem == null)
                return Enumerable.Empty<string>();

            try
            {
                var rootItems = LookupSources.GetItems(relativeRootItem, rawDataSource);
                return rootItems.Select(item => item.ID.ToString());
            }
            catch (Exception ex)
            {
                Log.Error($"Treelist field failed to evaluate datasource '{rawDataSource}'.", ex, this);
                return Enumerable.Empty<string>();
            }
        }

        /// <summary>
        /// Creates a DataContext control for a given Sitecore path data source
        /// </summary>
        protected virtual DataContext CreateDataContext(DataContext baseDataContext, string dataSource)
        {
            DataContext dataContext = new DataContext
            {
                ID = GetUniqueID("D"),
                Filter = baseDataContext.Filter,
                DataViewName = "Master"
            };
            if (!string.IsNullOrEmpty(DatabaseName))
            {
                dataContext.Parameters = "databasename=" + DatabaseName;
            }

            dataContext.Root = dataSource;
            dataContext.Language = Language.Parse(ItemLanguage);

            return dataContext;
        }

        protected override bool ValidateSelection(Item selectedItem, Listbox listbox)
        {
            Assert.ArgumentNotNull(listbox, nameof(listbox));
            if (selectedItem == null)
            {
                SheerResponse.Alert("Select an item in the Content Tree.");
                return false;
            }
            if (HasExcludeTemplateForSelection(selectedItem))
            {
                return false;
            }
            if (!IsDeniedMultipleSelection(selectedItem, listbox))
            {
                return HasIncludeTemplateForSelection(selectedItem);
            }
            SheerResponse.Alert("You cannot select the same item twice.");
            return false;
        }

        protected virtual bool HasExcludeTemplateForSelection(Item item)
        {
            return item == null || HasItemTemplate(item, ExcludeTemplatesForSelection);
        }

        protected virtual bool HasIncludeTemplateForSelection(Item item)
        {
            Assert.ArgumentNotNull(item, nameof(item));
            return IncludeTemplatesForSelection.Length == 0 || HasItemTemplate(item, IncludeTemplatesForSelection);
        }

        protected virtual bool IsDeniedMultipleSelection(Item item, Listbox listbox)
        {
            Assert.ArgumentNotNull(listbox, nameof(listbox));
            if (item == null)
            {
                return true;
            }
            if (AllowMultipleSelection)
            {
                return false;
            }
            foreach (Control control in listbox.Controls)
            {
                string[] strArray = control.Value.Split('|');
                if (strArray.Length >= 2 && strArray[1] == item.ID.ToString())
                {
                    return true;
                }
            }
            return false;
        }

        protected virtual bool HasItemTemplate(Item item, string templateList)
        {
            Assert.ArgumentNotNull(templateList, nameof(templateList));
            if (item == null || string.IsNullOrEmpty(templateList))
            {
                return false;
            }

            var items = templateList.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);

            if (!items.Any())
            {
                return false;
            }

            return items.Any(template => item.HasBaseTemplate(template));
        }
    }
}
