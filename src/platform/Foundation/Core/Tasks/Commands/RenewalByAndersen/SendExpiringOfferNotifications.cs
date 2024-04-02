using System;
using Microsoft.Extensions.DependencyInjection;
using Platform.Foundation.Abstractions;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Extensions;
using Platform.Foundation.Core.Services;
using Sitecore.Abstractions;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.Security.Accounts;

namespace Platform.Foundation.Core.Tasks.Commands.RenewalByAndersen
{
    public class SendExpiringOfferNotifications
    {
        private readonly IEmailService _emailService;
        private readonly BaseFactory _factory;
        private readonly BaseLog _log;
        private readonly BaseSettings _settings;
        private readonly IUser _user;
        private int successfulEmailCounter = 0;

        public SendExpiringOfferNotifications()
        {
            _emailService = ServiceLocator.ServiceProvider.GetService<IEmailService>();
            _factory = ServiceLocator.ServiceProvider.GetService<BaseFactory>();
            _log = ServiceLocator.ServiceProvider.GetService<BaseLog>();
            _settings = ServiceLocator.ServiceProvider.GetService<BaseSettings>();
            _user = new DefaultUser();
        }

        public SendExpiringOfferNotifications(IEmailService emailService, BaseFactory factory, BaseLog log, BaseSettings settings, IUser user)
        {
            _emailService = emailService;
            _factory = factory;
            _log = log;
            _settings = settings;
            _user = user;
        }

        public void Execute(Item[] items, Sitecore.Tasks.CommandItem command, Sitecore.Tasks.ScheduleItem schedule)
        {
            try
            {
                _log.Info($"Start Offer Expiring email template pull. ID: {ItemIds.Content.RenewalByAndersen.Global.DataSources.EmailTemplates.ExpiringOfferEmail}", this);

                // get email template once
                var emailTemplate = _factory.GetDatabase("master").GetItem(ItemIds.Content.RenewalByAndersen.Global.DataSources.EmailTemplates.ExpiringOfferEmail);

                if (emailTemplate == null)
                {
                    _log.Error("Missing Offer Expiring email template", this);

                    throw new Exception("Missing Offer Expiring email template");
                }
                var emailInfo = SetEmailValues(emailTemplate);

                foreach (var offerItem in items)
                {
                    // check if notification needs to be sent
                    var endDate = Convert.ToDateTime(offerItem[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.EndDate]);
                    if ((endDate < DateTime.Now.AddDays(7)) && offerItem.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.ExpirationNoticeSent].Value != "1")
                    {
                        string affiliateName = "Test";
                        if (offerItem.Axes != null)
                        {
                            var affiliateParent = ItemExtensions.GetParentByTemplate(offerItem, TemplateIds.Feature.RbA.Data.Affiliates.Affiliate.Template);
                            affiliateName = affiliateParent.Name;
                        }

                        SendNotificationEmail(emailInfo, offerItem, affiliateName);
                    }
                }
                _log.Info($"{successfulEmailCounter} Successful notifications sent.", this);
            }
            catch (Exception ex)
            {
                _log.Error($"Offer Expiring Notification task threw an exception: {ex.Message}.", this);

                _emailService.SendExceptionEmail(
                    from: Sitecore.Configuration.Settings.GetSetting("RbaWebTeamEmail"),
                    subject: "Offer Expiring Notification task threw an exception",
                    ex: ex);
                throw;
            }
        }


        private void SendNotificationEmail(Email emailItem, Item offerItem, string offerAffiliate)
        {
            var createdByUser = GetCreatedByUser(offerItem);
            var emailTo = createdByUser?.Profile?.Email;
            if (string.IsNullOrEmpty(emailTo))
            {
                _log.Error($"Expiring Offer Id {offerItem.ID} has no one to email an expiration notice to.", this);

                //keep loop going to process other offers
                _emailService.SendExceptionEmail(
                    from: Sitecore.Configuration.Settings.GetSetting("RbaWebTeamEmail"),
                    subject: "Offer Expiring Notification task threw an exception",
                    ex: new Exception($"Expiring Offer Id {offerItem.ID} has no one to email an expiration notice to"));
            }
            else
            {
                //for testing purposes, overwrite "TO" address with dev team email
                emailTo = _settings.IsProduction() ? emailTo : Sitecore.Configuration.Settings.GetSetting("RbaWebTeamEmail");

                _emailService.SendEmail(
                    to: emailTo,
                    from: emailItem.FromEmail,
                    subject: emailItem.Subject,
                    body: ReplaceTokens(emailItem.Body, offerItem, offerAffiliate, createdByUser),
                    isHtml: true);

                SetExpirationNoticeSent(offerItem);
                successfulEmailCounter++;
            }
        }

        private static string ReplaceTokens(string body, Item offerItem, string offerAffiliate, User user)
        {
            return body.Replace("{{FullName}}", user?.Profile?.FullName)
                        .Replace("{{EndDate}}", ((DateField)offerItem.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.EndDate])?.DateTime.ToLongDateString())
                        .Replace("{{AffiliateName}}", offerAffiliate)
                        .Replace("{{OfferName}}", offerItem.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.Name]?.Value);
        }

        private User GetCreatedByUser(Item offerItem)
        {
            var username = offerItem.Statistics.CreatedBy;
            if (!_user.Exists(username))
            {
                var lastModifiedUser = offerItem.Statistics.UpdatedBy;
                return _user.Exists(lastModifiedUser) ? _user.FromName(lastModifiedUser, false) : null;
            }
            else
            {
                return _user.FromName(username, false);
            }
        }

        private void SetExpirationNoticeSent(Item offerItem)
        {
            offerItem.Editing.BeginEdit();
            ((CheckboxField)offerItem.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.ExpirationNoticeSent]).Checked = true;
            offerItem.Editing.EndEdit(false, false);

            _log.Info($"Expiration Notice Sent Successfully for offer ID {offerItem.ID}", this);
        }

        private static Email SetEmailValues(Item emailItem)
        {
            return new Email
            {
                FromEmail = emailItem.Fields["From"].Value,
                ToEmail = emailItem.Fields["To"].Value,
                Subject = emailItem.Fields["Subject"].Value,
                Body = emailItem.Fields["Body"].Value
            };
        }

        public class Email
        {
            public string FromEmail { get; set; }
            public string ToEmail { get; set; }
            public string Body { get; set; }
            public string Subject { get; set; }
        }
    }
}
