using System.Collections.Generic;
using System.Net.Mail;

namespace Platform.Foundation.Abstractions
{
    public interface IMainUtil
    {
        void SendMail(MailMessage message);

        void SendMail(IEnumerable<MailMessage> messages);

        void SendMailAsync(MailMessage message);
    }
}
