using System;
using System.Web;
using System.Web.Helpers;

namespace Platform.Project
{
    // Reference: https://mukteshmehta.wordpress.com/2023/04/18/fixing-sitecore-forms-issue-when-using-with-headless/
    public class Global : Sitecore.Web.Application
    {
        public override void Application_Start(object sender, EventArgs e)
        {
            AntiForgeryConfig.SuppressXFrameOptionsHeader = true;
        }
        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            HttpContext.Current.Response.AddHeader("X-Frame-Options", "SAMEORIGIN");
        }
    }
}
