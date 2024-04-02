using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Platform.Foundation.Abstractions;
using Platform.Foundation.Core.Extensions;
using Sitecore.Abstractions;
using Sitecore.DependencyInjection;


namespace Platform.Foundation.Core.Services
{
    public class EmailService : IEmailService
    {
        protected readonly BaseSettings _settings;
        protected readonly IMainUtil _mainUtil;

        public EmailService()
        {
            _settings = ServiceLocator.ServiceProvider.GetService<BaseSettings>();
            _mainUtil = new DefaultMainUtil(); // ServiceLocator.ServiceProvider.GetService<IMainUtil>();
        }

        public EmailService(BaseSettings settings, IMainUtil mainUtil)
        {
            _settings = settings;
            _mainUtil = mainUtil;
        }

        /// <summary>
        /// Sends an email with the specified parameters. All fields are optional and will default to generic/widely-used parameters.
        /// </summary>
        /// <param name="to">Who to send the email to.</param>
        /// <param name="from">Who to send the email from.</param>
        /// <param name="subject">Subject to send in the email.</param>
        /// <param name="body">Body to send in the email.</param>
        /// <param name="fields">A dictionary to output (under the body) in the email.</param>
        /// <param name="isHtml">Whether to account for HTML elements in the email.</param>
        public void SendEmail(string to = null, string from = null, string subject = null, string body = null, Dictionary<string, string> fields = null, bool isHtml = false, string environmentName = null)
        {
            to = (string.IsNullOrWhiteSpace(to) ? _settings.GetSetting("RbaWebTeamEmail") : to);
            from = (string.IsNullOrWhiteSpace(from) ? _settings.GetSetting("RbaDefaultFromEmail") : from);
            environmentName = (string.IsNullOrWhiteSpace(environmentName) ? _settings.GetEnvironmentName() : environmentName);
            var subjectPrefix = string.IsNullOrWhiteSpace(environmentName) ? "" : $"{environmentName} - ";
            var subjectPostfix = string.IsNullOrWhiteSpace(subject) ? "Generic Email" : subject.Replace("\\", "");
            subject = $"{subjectPrefix}{subjectPostfix}";

            var builder = new StringBuilder(body);

            if (fields != null)
            {
                builder.Append(isHtml ? "<br /><br />" : "\n\n");
                foreach (string key in fields.Keys.OrderBy(x => x))
                {
                    builder.Append($"{key}: {fields[key]}{(isHtml ? "<br />" : "\n")}");
                }
            }

            body = builder.ToString();

            var emailMessage = new MailMessage(from, to, subject, body)
            {
                IsBodyHtml = isHtml,
            };
            _mainUtil.SendMail(emailMessage);
        }

        /// <summary>
        /// Sends an exception email with the specified parameters. All fields are optional and will default to generic/widely-used parameters.
        /// </summary>
        /// <param name="from">Who to send the email from.</param>
        /// <param name="subject">Subject to send in the email.</param>
        /// <param name="body">Body to send in the email.</param>
        /// <param name="fields">A dictionary to output (under the body) in the email.</param>
        /// <param name="ex">The exception the email relates to. Will use the exception message for subject or body if either is null.</param>
        /// <param name="exVerbose">Will output all exception details to the body if the body is null.</param>
        public void SendExceptionEmail(string from = null, string subject = null, string body = null, Dictionary<string, string> fields = null, Exception ex = null, bool exVerbose = false, string environmentName = null)
        {
            string to = _settings.GetSetting("RbaWebTeamEmail");
            from = (string.IsNullOrWhiteSpace(from) ? _settings.GetSetting("RbaDefaultFromEmail") : from);
            environmentName = (string.IsNullOrWhiteSpace(environmentName) ? _settings.GetEnvironmentName() : environmentName);
            var subjectPrefix = string.IsNullOrWhiteSpace(environmentName) ? "" : $"{environmentName} - ";
            var subjectPostfix = string.IsNullOrWhiteSpace(subject) ? (ex != null ? ex.Message : "Generic Exception") : subject;
            subject = $"{subjectPrefix}{subjectPostfix}";

            body = (!string.IsNullOrEmpty(body) ? body : (ex != null ? (exVerbose ? ex.ToString() : ex.Message) : "Exception has been thrown!"));

            var builder = new StringBuilder(body);

            if (fields != null)
            {
                builder.Append("<br /><br /> ");
                foreach (string key in fields.Keys.OrderBy(x => x))
                {
                    builder.Append($"{key}: {fields[key]}<br />");
                }
            }

            body = builder.ToString();

            var emailMessage = new MailMessage(from, to, subject, body)
            {
                IsBodyHtml = true,
            };
            _mainUtil.SendMail(emailMessage);
        }
    }
}
