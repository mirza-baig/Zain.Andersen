using System;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Platform.Foundation.Core.Services;
using Sitecore.DependencyInjection;
using Sitecore.Security.Accounts;
using Sitecore.Workflows.Simple;

namespace Platform.Foundation.Core.Workflow.Actions
{
    public class NotifyApproval
    {
        private User _submittingUser;
        private readonly IEmailService _emailService;

        public NotifyApproval()
        {
            _emailService = ServiceLocator.ServiceProvider.GetService<IEmailService>();
        }

        public void Process(WorkflowPipelineArgs args)
        {
            try
            {
                var contentItem = args.DataItem;
                _submittingUser = WorkflowHelper.SubmittingUser(contentItem);

                if (!string.IsNullOrEmpty(_submittingUser.Profile.Email))
                {
                    _emailService.SendEmail(
                        to: _submittingUser.Profile.Email,
                        from: Sitecore.Configuration.Settings.GetSetting("RbaDefaultFromEmail"),
                        subject: $"Affiliates – {contentItem.TemplateName} Approved",
                        body: Body(args),
                        isHtml: true);
                    Sitecore.Diagnostics.Log.Error(
                        "Email sent for aproval", this);
                }
                else
                {
                    Sitecore.Diagnostics.Log.Error(
                        "The Content Editor could not be notified because no email address was associated with the account.", this);
                }
            }
            catch (Exception ex)
            {
                Sitecore.Diagnostics.Log.Error("Notify Approval Process" + ex.Message, ex, this);
            }
        }

        private string Body(WorkflowPipelineArgs args)
        {
            var contentItem = args.DataItem;
            StringBuilder body = new StringBuilder();
            body.AppendFormat("<p><strong>Hello, {0}!</strong></p>", _submittingUser?.Profile.FullName ?? "Affiliate");

            body.AppendFormat("<p>The following content has been reviewed by RbA on {0}:</p>", DateTime.Now.ToLongDateString());

            body.AppendFormat("<p>Content Name: {0}<br/>", contentItem.Name);
            body.AppendFormat("Content Type: {0}", contentItem.TemplateName);

            body.AppendLine("<p>Your content has been <strong>approved</strong>.</p>");

            body.AppendLine("<p>Here are some of our comments:<br/>");
            body.AppendFormat("<i>{0}</i></p>", args.CommentFields["Comments"]);

            body.AppendLine("<p>If you have any questions, please contact RbA. </p>");

            body.AppendLine("<p>Thank You,<br/>");
            body.AppendLine("Renewal by Andersen Corporation</p>");

            return body.ToString();
        }
    }
}
