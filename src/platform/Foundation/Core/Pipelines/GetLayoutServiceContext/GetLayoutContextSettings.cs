using System;
using System.Collections.Generic;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Extensions;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.JavaScriptServices.Configuration;
using Sitecore.JavaScriptServices.ViewEngine.LayoutService.Pipelines.GetLayoutServiceContext;
using Sitecore.LayoutService.Helpers;
using Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext;
using Sitecore.Links;
using Sitecore.Links.UrlBuilders;

namespace Platform.Foundation.Core.Pipelines.GetLayoutServiceContext
{
    public class GetLayoutContextSettings : JssGetLayoutServiceContextProcessor
    {

        public GetLayoutContextSettings(IConfigurationResolver configurationResolver) : base(configurationResolver)
        {
        }

        protected override void DoProcess(GetLayoutServiceContextArgs args, AppConfiguration application)
        {
            try
            {
                AddLayoutContextSettings(args);
                AddBreadcrumb(args);
                AddPageAffiliateId(args);
            }
            catch (Exception e)
            {
                args.ContextData.Add("getLayoutContextSettingsError", new
                {
                    message = e.Message,
                    stackTrace = e.StackTrace
                });
            }
        }


        private static void AddPageAffiliateId(GetLayoutServiceContextArgs args)
        {
            var currentItem = args.RenderedItem;
            if (currentItem == null)
            {
                throw new Exception("GetLayoutContextSettings: currentItem was null");
            }

            while (currentItem != null)
            {
                var affiliateField = (InternalLinkField)currentItem.Fields[
                    TemplateIds.Project.RbA.Pages.RetailerPage.Fields
                        .Affiliate];
                var affiliateItem = affiliateField.TargetItem;
                var affiliateId = affiliateItem?[
                    TemplateIds.Foundation.RbA.FieldSets.Affiliate
                        .AffiliateDetails.Fields.AffiliateId];
                if (!string.IsNullOrWhiteSpace(affiliateId))
                {
                    args.ContextData.Add("pageAffiliateId", affiliateId);
                    return;
                }
                currentItem = currentItem.Parent.GetFirstParentOfBaseTemplate(TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template.ToString()); //_Base Page
            }
        }

        private static void AddBreadcrumb(GetLayoutServiceContextArgs args)
        {
            var breadcrumb = new List<Object>();
            var currentItem = args.RenderedItem;
            if (currentItem == null)
            {
                throw new Exception("GetLayoutContextSettings: currentItem was null");
            }

            while (currentItem != null)
            {
                var name = string.IsNullOrWhiteSpace(currentItem.GetFieldValue("breadcrumbTitle")) ? (string.IsNullOrWhiteSpace(currentItem.GetFieldValue("pageTitle")) ? currentItem.DisplayName : currentItem.GetFieldValue("pageTitle"))
                     : currentItem.GetFieldValue("breadcrumbTitle");

                breadcrumb.Add(new
                {
                    name,
                    href = LinkManager.GetItemUrl(currentItem, ItemUrlHelper.GetLayoutServiceUrlOptions())
                });

                currentItem = currentItem.Parent.GetFirstParentOfBaseTemplate(TemplateIds.Foundation.Enterprise.BaseTemplates.Pages._BasePage.Template.ToString()); //_Base Page
            }
            breadcrumb.Reverse();

            args.ContextData.Add("breadcrumb", breadcrumb);
        }

        private static void AddLayoutContextSettings(GetLayoutServiceContextArgs args)
        {
            var headlessSiteItem = args.RenderedItem.GetFirstParentOfBaseTemplate(TemplateIds.Foundation.Enterprise.Extensions._EnterpriseWebSite.Template.ToString()) ?? throw new Exception("GetLayoutContextSettings: headlessSiteItem was null"); //_Enterprise Web Site

            var settingsItem = headlessSiteItem.GetFirstChildOfBaseTemplate(TemplateIds.Foundation.Enterprise.Extensions._EnterpriseWebSettings.Template) ?? throw new Exception("GetLayoutContextSettings: settingsItem was null"); // _Enterprise Web Settings

            Sitecore.Data.Fields.ImageField imageField = settingsItem?.Fields["Favicon"];
            if (imageField != null && imageField.MediaItem != null)
            {
                Sitecore.Data.Items.MediaItem image = new Sitecore.Data.Items.MediaItem(imageField.MediaItem);
                if (image != null)
                {
                    args.ContextData.Add("favIcon", new
                    {
                        url = Sitecore.Resources.Media.MediaManager.GetMediaUrl(image, new MediaUrlBuilderOptions
                        {
                            AlwaysIncludeServerUrl = true
                        })
                    });
                }
            }
        }
    }
}
