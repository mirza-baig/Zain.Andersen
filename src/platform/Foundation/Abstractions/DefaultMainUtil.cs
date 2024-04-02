using System.Collections.Generic;
using System.Net.Mail;
using Sitecore;

namespace Platform.Foundation.Abstractions
{
    public class DefaultMainUtil : IMainUtil
    {
        public void SendMail(MailMessage message)
        {
            MainUtil.SendMail(message);
        }

        public void SendMail(IEnumerable<MailMessage> messages)
        {
            MainUtil.SendMail(messages);
        }

        public void SendMailAsync(MailMessage message)
        {
            MainUtil.SendMailAsync(message);
        }
    }
}
