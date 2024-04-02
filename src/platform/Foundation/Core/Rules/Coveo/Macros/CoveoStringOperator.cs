using Sitecore;
using Sitecore.Data.Items;

namespace Platform.Foundation.Core.Rules.Coveo.Macros
{
    public class CoveoStringOperator : BaseOperator
    {

        public CoveoStringOperator()
          : base()
        {
            this.Title = "Select Comparison";
            this.Text = "Select the alphabetical comparison to use in this rule.";
        }

        protected override Item GetOptionsOperatorsFolderItem() => Client.ContentDatabase.GetItem(Constants.ItemIds.Settings.Foundation.EnterpriseWeb.Enums.CoveoStringOperators.Id);
    }
}
