using Sitecore;
using Sitecore.Data.Items;

namespace Platform.Foundation.Core.Rules.Coveo.Macros
{
    public class CoveoFacetFields : BaseOperator
    {

        public CoveoFacetFields()
          : base()
        {
            this.Title = "Select Field";
            this.Text = "Select the field to use in this rule.";
        }

        protected override Item GetOptionsOperatorsFolderItem() => Client.ContentDatabase.GetItem(Constants.ItemIds.EnterpriseGlobal.Enums.Search.FacetFields.Id);
    }
}
