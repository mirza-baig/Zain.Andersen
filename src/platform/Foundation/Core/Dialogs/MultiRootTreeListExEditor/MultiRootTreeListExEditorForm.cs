﻿using System;
using Sitecore.Diagnostics;
using Sitecore.Web;
using Sitecore;
using Sitecore.Web.UI.Pages;
using Sitecore.Web.UI.Sheer;
using Sitecore.Web.UI.XmlControls;

namespace Platform.Foundation.Core.Dialogs.MultiRootTreeListExEditor
{
    public class MultiRootTreeListExEditorForm : DialogForm
    {
        protected XmlControl Dialog;

        #region MultiTreeList Adaptation

        // Use a MultiRootTreeList instead of a normal TreeList to allow multiple roots
        protected Fields.TreeList MultiRootTreeList;

        #endregion

        /// <summary>Raises the load event.</summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> instance containing the event data.</param>
        /// <remarks>
        /// This method notifies the server control that it should perform actions common to each HTTP
        /// request for the page it is associated with, such as setting up a database query. At this
        /// stage in the page lifecycle, server controls in the hierarchy are created and initialized,
        /// view state is restored, and form controls reflect client-side data. Use the IsPostBack
        /// property to determine whether the page is being loaded in response to a client postback,
        /// or if it is being loaded and accessed for the first time.
        /// </remarks>
        protected override void OnLoad(EventArgs e)
        {
            Assert.ArgumentNotNull(e, nameof(e));
            base.OnLoad(e);
            if (Context.ClientPage.IsEvent)
                return;
            UrlHandle urlHandle = UrlHandle.Get();
            MultiRootTreeList.Source = urlHandle["source"];
            MultiRootTreeList.SetValue(StringUtil.GetString(urlHandle["value"]));
            MultiRootTreeList.ItemLanguage = urlHandle["language"];
            MultiRootTreeList.ItemID = urlHandle["itemID"];
            if (!string.IsNullOrEmpty(urlHandle["title"]))
                Dialog["Header"] = urlHandle["title"];
            if (!string.IsNullOrEmpty(urlHandle["text"]))
                Dialog["text"] = urlHandle["text"];
            if (string.IsNullOrEmpty(urlHandle["icon"]))
                return;
            Dialog["icon"] = urlHandle["icon"];
        }

        /// <summary>Handles a click on the OK button.</summary>
        /// <param name="sender"></param>
        /// <param name="args"></param>
        /// <remarks>When the user clicks OK, the dialog is closed by calling
        /// the <see cref="M:Sitecore.Web.UI.Sheer.ClientResponse.CloseWindow">CloseWindow</see> method.</remarks>
        protected override void OnOK(object sender, EventArgs args)
        {
            Assert.ArgumentNotNull(sender, nameof(sender));
            Assert.ArgumentNotNull(args, nameof(args));
            string str = MultiRootTreeList.GetValue();
            if (str.Length == 0)
                str = "-";
            SheerResponse.SetDialogValue(str);
            base.OnOK(sender, args);
        }
    }
}
