using System;
using Sitecore;
using Sitecore.Configuration;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Data.Managers;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using Sitecore.Shell;
using Sitecore.Shell.Applications.ContentManager.Galleries;
using Sitecore.Web;
using Sitecore.Web.UI.HtmlControls;
using Sitecore.Web.UI.Sheer;
using Sitecore.Web.UI.XmlControls;

namespace Platform.Foundation.Core.Dialogs.GalleryLanguages
{
    public class GalleryLanguagesForm : GalleryForm
    {
        protected Scrollbox Languages;
        protected GalleryMenu Options;

        public override void HandleMessage(Message message)
        {
            Assert.ArgumentNotNull((object)message, "message");
            if (!(message.Name != "event:click"))
                return;
            this.Invoke(message, true);
        }

        protected override void OnLoad(EventArgs e)
        {
            Assert.ArgumentNotNull((object)e, "e");
            base.OnLoad(e);
            if (Context.ClientPage.IsEvent)
                return;
            Item currentItem = GalleryLanguagesForm.GetCurrentItem();
            if (currentItem != null)
            {
                foreach (Language language in currentItem.Languages)
                {
                    ID languageItemId = LanguageManager.GetLanguageItemId(language, currentItem.Database);
                    if (!ID.IsNullOrEmpty(languageItemId))
                    {
                        Item obj = currentItem.Database.GetItem(languageItemId);
                        if (obj == null || !obj.Access.CanRead() || obj.Appearance.Hidden && !UserOptions.View.ShowHiddenItems)
                            continue;
                    }
                    Item obj1 = currentItem.Database.GetItem(currentItem.ID, language);
                    if (obj1 != null)
                    {
                        int length = obj1.Versions.GetVersionNumbers(false).Length;
                        if (length != 0 && !obj1.IsFallback)
                        {
                            XmlControl xmlControl1 = ControlFactory.GetControl("Gallery.Languages.Option") as XmlControl;
                            if (xmlControl1 != null)
                            {
                                xmlControl1["Icon"] = (object)LanguageService.GetIcon(language, currentItem.Database);
                                xmlControl1["Header"] = (object)Language.GetDisplayName(language.CultureInfo);
                                XmlControl xmlControl2 = xmlControl1;
                                string index = "Description";
                                string str;
                                if (length != 1)
                                    str = Translate.Text("{0} versions.", (object)length);
                                else
                                    str = Translate.Text("1 version.");

                                xmlControl2[index] = (object)str;
                                xmlControl1["Click"] = (object)string.Format("item:addversionrecursive(id={0},sourceLang={1},targetLang={2})", (object)currentItem.ID, (object)language, (object)currentItem.Language);
                                xmlControl1["ClassName"] = language.Name.Equals(WebUtil.GetQueryString("la"), StringComparison.OrdinalIgnoreCase) ? (object)"scMenuPanelItemSelected" : (object)"scMenuPanelItem";
                                Context.ClientPage.AddControl((System.Web.UI.Control)this.Languages, (System.Web.UI.Control)xmlControl1);
                            }
                        }
                    }
                }
                Context.ClientPage.AddControl((System.Web.UI.Control)this.Options, (System.Web.UI.Control)new GalleryMenuLine());
            }
        }

        private static Item GetCurrentItem()
        {
            string queryString1 = WebUtil.GetQueryString("db");
            string queryString2 = WebUtil.GetQueryString("id");
            Language language = Language.Parse(WebUtil.GetQueryString("la"));
            Sitecore.Data.Version version = Sitecore.Data.Version.Parse(WebUtil.GetQueryString("vs"));
            Database database = Factory.GetDatabase(queryString1);
            Assert.IsNotNull((object)database, queryString1);
            return database.GetItem(queryString2, language, version);
        }
    }
}
