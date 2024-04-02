using Sitecore;
using Sitecore.Data.Items;

namespace Platform.Foundation.Core.Rules.Coveo.Macros
{
    public class CoveoFields : BaseOperator
    {

        public CoveoFields()
          : base()
        {
            this.Title = "Select Field";
            this.Text = "Select the field to use in this rule.";
        }

        protected override Item GetOptionsOperatorsFolderItem() => Client.ContentDatabase.GetItem(Constants.ItemIds.EnterpriseGlobal.Enums.Search.IndexedFields.Id);
    }
}
