using System;
using System.Linq;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Platform.Foundation.Core.Services;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.Security.Accounts;
using Sitecore.Workflows.Simple;

namespace Platform.Foundation.Core.Workflow.Actions
{
    public class NotifySubmission
    {
        private User _submittingUser;
        private readonly IEmailService _emailService;

        public NotifySubmission()
        {
            _emailService = ServiceLocator.ServiceProvider.GetService<IEmailService>();
        }
        public void Process(WorkflowPipelineArgs args)
        {
            try
            {
                var contentItem = args.DataItem;
                var userRolesSetting = Sitecore.Configuration.Settings.GetSetting("ContentSubmissionEmailToRole");
                var toCollection = WorkflowHelper.AddRecipientsToMail(userRolesSetting);
                _submittingUser = WorkflowHelper.SubmittingUser(contentItem);

                if (toCollection.Any())
                {
                    _emailService.SendEmail(
                        to: string.Join(",", toCollection),
                        from: Sitecore.Configuration.Settings.GetSetting("RbaDefaultFromEmail"),
                        subject: $"Affiliates – {contentItem.TemplateName} Submitted for Review",
                        body: Body(contentItem),
                        isHtml: true);
                    Sitecore.Diagnostics.Log.Error(
                        "Email sent for submission", this);
                }
                else
                {
                    Sitecore.Diagnostics.Log.Error(
                        "The Content Approver could not be notified because the Role has not been assigned to an account, or the assigned account has no email address.", this);
                }
            }
            catch (Exception ex)
            {
                Sitecore.Diagnostics.Log.Error("Notify Submission Process" + ex.Message, ex, this);
            }
        }

        private string Body(Item contentItem)
        {
            StringBuilder body = new StringBuilder();
            body.AppendLine("<p><strong>Hello, RbA!</strong></p>");

            body.AppendLine("<p>The following content has been submitted for approval:</p>");

            body.AppendFormat("<p>Content Name: {0}<br/>", contentItem.Name);
            body.AppendFormat("Content Type: {0}<br/>", contentItem.TemplateName);
            body.AppendFormat("Content Path: {0}<br/>", contentItem.Paths.Path);
            body.AppendFormat("Submitted By: {0} - {1}</p>", _submittingUser?.Profile.FullName, _submittingUser?.Profile.Email);

            body.AppendLine("<p>Renewal by Andersen Corporation</p>");

            return body.ToString();
        }
    }
}
