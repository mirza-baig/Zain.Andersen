using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Platform.Foundation.Core.Services
{
    public interface IEmailService
    {
        void SendEmail(string to = null, string from = null, string subject = null, string body = null, Dictionary<string, string> fields = null, bool isHtml = false, string environmentName = null);
        void SendExceptionEmail(string from = null, string subject = null, string body = null, Dictionary<string, string> fields = null, Exception ex = null, bool exVerbose = false, string environmentName = null);
    }
}
