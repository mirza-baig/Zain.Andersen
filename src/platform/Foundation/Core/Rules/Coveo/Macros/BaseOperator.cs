using System.Linq;
using System.Xml.Linq;
using Sitecore.Data.Items;
using Sitecore.Rules.RuleMacros;
using Sitecore.Shell.Applications.Dialogs.ItemLister;
using Sitecore.Text;
using Sitecore.Web.UI.Sheer;

namespace Platform.Foundation.Core.Rules.Coveo.Macros
{
    public abstract class BaseOperator : IRuleMacro
    {
        private const string DEFAULT_HEIGHT = "700px";
        private const string DEFAULT_WIDTH = "1200px";

        public virtual string Text { get; set; }

        public virtual string Title { get; set; }

        public virtual void Execute(XElement element, string name, UrlString parameters, string value)
        {
            var selectItemOptions = new SelectItemOptions();
            var valueItem = GetValueItem(value);
            selectItemOptions.FilterItem = GetOptionsConditionItem(element);
            selectItemOptions.Root = GetOptionsOperatorsFolderItem();
            selectItemOptions.SelectedItem = GetOptionsSelectedOperatorItem(valueItem, selectItemOptions.Root);
            selectItemOptions.Title = Title;
            selectItemOptions.Text = Text;
            selectItemOptions.Icon = "applications/32x32/media_stop.png";
            selectItemOptions.ShowRoot = false;
            SheerResponse.ShowModalDialog(selectItemOptions.ToUrlString().ToString(), DEFAULT_WIDTH, DEFAULT_HEIGHT, "", true);
        }

        protected abstract Item GetOptionsOperatorsFolderItem();

        private Item GetOptionsConditionItem(XElement element)
        {
            var itemId = element.Attribute((XName)"id").Value;
            if (string.IsNullOrEmpty(itemId))
            {
                return null;
            }

            var item = Sitecore.Client.ContentDatabase.GetItem(itemId);

            return item;
        }

        private Item GetOptionsSelectedOperatorItem(Item valueItem, Item operatorsFolderItem)
        {
            Item item = operatorsFolderItem != null ? operatorsFolderItem.Children.FirstOrDefault() : null;
            return valueItem ?? item;
        }

        private Item GetValueItem(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return null;
            }

            var item = Sitecore.Client.ContentDatabase.GetItem(value);

            return item;
        }
    }
}
