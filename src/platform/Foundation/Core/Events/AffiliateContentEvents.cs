using System;
using System.Collections.Generic;
using Platform.Foundation.Core.Constants;
using Sitecore.Data;
using Sitecore.Data.Events;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Data.Managers;
using Sitecore.Diagnostics;
using Sitecore.Events;
using Sitecore.Links;
using Sitecore.SecurityModel;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace Platform.Foundation.Core.Events
{
    public class AffiliateContentEvents
    {
        /// <summary>
        /// Static list of current items being processed across all threads
        /// </summary>
        private static readonly SynchronizedCollection<ID> AllInProcess = new SynchronizedCollection<ID>();

        public void OnContentCreated(object sender, EventArgs args)
        {
            var itemCreated = Event.ExtractParameter(args, 0) as ItemCreatedEventArgs;
            Assert.IsNotNull(itemCreated, $"{nameof(itemCreated)} is null");
            var item = itemCreated?.Item;

            if (item == null
                || !"master".Equals(item.Database?.Name, StringComparison.OrdinalIgnoreCase)
                || !item.Paths.IsContentItem || !item.Paths.GetPath(ItemPathType.ItemID).Contains(ItemIds.Content.RenewalByAndersen.Global.AffiliatesFolderId.ToString())) // Affiliates folder
            {
                return;
            }

            if (TemplateManager.GetTemplate(item).DescendsFromOrEquals(TemplateIds.Foundation.Enterprise.FieldSets.Affiliates._AffiliateFacet.Template)) // _Affiliate Facet
            {
                var affiliateItem = GetAffiliateItem(item);
                if (affiliateItem != null)
                {
                    item.Editing.BeginEdit();
                    item.Fields[TemplateIds.Foundation.Enterprise.FieldSets.Affiliates._AffiliateFacet.Fields.AffiliateTags].Value = affiliateItem.ID.ToString();
                    item.Editing.EndEdit();
                }
            }

        }

        private Item GetAffiliateItem(Item descendantItem)
        {
            var currentItem = descendantItem;
            while (currentItem != null && currentItem.Parent != null)
            {
                if (currentItem.Parent.TemplateID.Equals(TemplateIds.Feature.RbA.Data.Affiliates.Affiliate.Template))
                {
                    return currentItem.Parent;
                }
                else
                {
                    currentItem = currentItem.Parent;
                }
            }
            return null;
        }

        public void OnItemSaved(object sender, EventArgs args)
        {
            var item = Event.ExtractParameter(args, 0) as Item;
            Assert.IsNotNull(item, $"{nameof(item)} is null");

            if (item == null
               || !"master".Equals(item.Database?.Name, StringComparison.OrdinalIgnoreCase)
               || !item.Paths.IsContentItem)
            {
                return;
            }

            if (item.TemplateID.Equals(TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Template))
            {
                var endDate = ((DateField)item.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.EndDate])?.DateTime;

                if (endDate != null && endDate > DateTime.Now.AddDays(7) && ((CheckboxField)item.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.ExpirationNoticeSent]).Checked)
                {
                    item.Editing.BeginEdit();
                    ((CheckboxField)item.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.ExpirationNoticeSent]).Checked = false;
                    item.Editing.EndEdit();
                }
            }
            SetShowroomLink(item);
            SetAffiliateLandingPageLink(item);
        }

        public void SetShowroomLink(Item item)
        {
            Assert.ArgumentNotNull(item, nameof(item));

            // check to see if this item was already just saved, if so exit to prevent infinite loop.  
            if (AllInProcess.Contains(item.ID))
            {
                return;
            }

            Item showroomItem = null;
            Item showroomPageItem = null;
            try
            {
                var showroomPageTemplateId = TemplateIds.Project.RbA.Pages.ShowroomPage.Template;
                var showroomTemplateId = TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Showroom.Template;

                var showroomFieldId = TemplateIds.Project.RbA.Pages.ShowroomPage.Fields.Showroom;
                var showroomPageFieldId = TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Showroom.Fields.ShowroomPage;

                if (item.Template.DoesTemplateInheritFrom(showroomPageTemplateId))
                {
                    var showroomField = (InternalLinkField)item.Fields[showroomFieldId];

                    showroomItem = showroomField.TargetItem;

                    if (showroomItem != null)
                    {
                        using (new EditContext(showroomItem, SecurityCheck.Disable))
                        {
                            var showroomPageField = (LinkField)showroomItem.Fields[showroomPageFieldId];
                            showroomPageField.LinkType = "internal";
                            showroomPageField.TargetID = item.ID;
                            showroomPageField.Url = LinkManager.GetItemUrl(item);
                            showroomPageField.Text = item.DisplayName;
                        }
                    }
                }

                if (item.Template.DoesTemplateInheritFrom(showroomTemplateId))
                {
                    var showroomPageField = (LinkField)item.Fields[showroomPageFieldId];

                    showroomPageItem = showroomPageField.TargetItem;

                    if (showroomPageItem != null)
                    {
                        using (new EditContext(showroomPageItem, SecurityCheck.Disable))
                        {
                            var showroomField = (InternalLinkField)showroomPageItem.Fields[showroomFieldId];
                            showroomField.Path = item.ID.ToString();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                item.Editing.CancelEdit();
                showroomItem?.Editing.CancelEdit();
                showroomPageItem?.Editing.CancelEdit();
                Log.Error($"Unable to set update showroom link for {item.Paths.FullPath}", ex, this);
            }
            finally
            {
                // Remove from list regardless of whether success or failure
                AllInProcess.Remove(item.ID);
            }
        }

        public void SetAffiliateLandingPageLink(Item item)
        {
            Assert.ArgumentNotNull(item, nameof(item));

            // check to see if this item was already just saved, if so exit to prevent infinite loop.  
            if (AllInProcess.Contains(item.ID))
            {
                return;
            }

            Item AffiliateItem = null;
            Item AffiliateLandingPageItem = null;
            try
            {
                var ReatilerPageTemplateId = TemplateIds.Project.RbA.Pages.RetailerPage.Template;
                var AffiliateFieldId = TemplateIds.Project.RbA.Pages.RetailerPage.Fields.Affiliate;

                var AffiliateTemplateId = TemplateIds.Feature.RbA.Data.Affiliates.Affiliate.Template;
                var AffiliateLandingPageFieldId = TemplateIds.Feature.RbA.Data.Affiliates.Affiliate.Fields.AffiliateLandingPage;

                if (item.Template.DoesTemplateInheritFrom(ReatilerPageTemplateId))
                {
                    var AffiliateField = (InternalLinkField)item.Fields[AffiliateFieldId];

                    AffiliateItem = AffiliateField.TargetItem;

                    if (AffiliateItem != null)
                    {
                        using (new EditContext(AffiliateItem, SecurityCheck.Disable))
                        {
                            var AffiliateLandingPageField = (LinkField)AffiliateItem.Fields[AffiliateLandingPageFieldId];
                            AffiliateLandingPageField.LinkType = "internal";
                            AffiliateLandingPageField.TargetID = item.ID;
                            AffiliateLandingPageField.Url = LinkManager.GetItemUrl(item);
                            AffiliateLandingPageField.Text = item.DisplayName;
                        }
                    }
                }

                if (item.Template.DoesTemplateInheritFrom(AffiliateTemplateId))
                {
                    var AffiliateLandingPageField = (LinkField)item.Fields[AffiliateLandingPageFieldId];

                    AffiliateLandingPageItem = AffiliateLandingPageField.TargetItem;

                    if (AffiliateLandingPageItem != null)
                    {
                        using (new EditContext(AffiliateLandingPageItem, SecurityCheck.Disable))
                        {
                            var AffiliateField = (InternalLinkField)AffiliateLandingPageItem.Fields[AffiliateFieldId];
                            AffiliateField.Path = item.ID.ToString();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                item.Editing.CancelEdit();
                AffiliateItem?.Editing.CancelEdit();
                AffiliateLandingPageItem?.Editing.CancelEdit();
                Log.Error($"Unable to set update affiliate landing page link for {item.Paths.FullPath}", ex, this);
            }
            finally
            {
                // Remove from list regardless of whether success or failure
                AllInProcess.Remove(item.ID);
            }
        }
    }
}
