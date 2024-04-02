using System.Collections.Generic;
using System.Net.Mail;
using Moq;
using Platform.Foundation.Abstractions;
using Platform.Foundation.Core.Services;
using Sitecore.Abstractions;
using Xunit;

namespace Platform.Tests.Foundation.Core.Services.EmailServiceTests
{
    public class SendEmailTests
    {
        [Fact]
        public void Handles_Null_Parameters()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();
            baseSettings.Setup(_ => _.GetSetting("RbaWebTeamEmail")).Returns("ExpectedTo@example.org");
            baseSettings.Setup(_ => _.GetSetting("RbaDefaultFromEmail")).Returns("ExpectedFrom@example.org");
            baseSettings.Setup(_ => _.GetSetting("XA.Foundation.Multisite.Environment")).Returns("UNITTEST");

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendEmail();

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.To[0].Address == "ExpectedTo@example.org"
                && __.From.Address == "ExpectedFrom@example.org"
                && __.Subject == "UNITTEST - Generic Email"
                && __.Body == ""
                && __.IsBodyHtml == false
            )));
            mainUtil.VerifyNoOtherCalls();
        }

        [Fact]
        public void Uses_Parameters()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendEmail("ProvidedTo@example.org", "ProvidedFrom@example.org", "Provided Subject", "Provided Body", null, false, "ProvidedEnvironement");

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.To[0].Address == "ProvidedTo@example.org"
                && __.From.Address == "ProvidedFrom@example.org"
                && __.Subject == "ProvidedEnvironement - Provided Subject"
                && __.Body == "Provided Body"
                && __.IsBodyHtml == false
            )));
            mainUtil.VerifyNoOtherCalls();
        }

        [Fact]
        public void Appends_Fields()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();

            var fields = new Dictionary<string, string>
            {
                { "Key 1", "Value 1" },
                { "Key 2", "Value 2" },
            };

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendEmail("ProvidedTo@example.org", "ProvidedFrom@example.org", "Provided Subject", "Provided Body", fields, false, "ProvidedEnvironement");

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.To[0].Address == "ProvidedTo@example.org"
                && __.From.Address == "ProvidedFrom@example.org"
                && __.Subject == "ProvidedEnvironement - Provided Subject"
                && __.Body == "Provided Body\n\nKey 1: Value 1\nKey 2: Value 2\n"
                && __.IsBodyHtml == false
            )));
            mainUtil.VerifyNoOtherCalls();
        }

        [Fact]
        public void Appends_Fields_Html()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();

            var fields = new Dictionary<string, string>
            {
                { "Key 1", "Value 1" },
                { "Key 2", "Value 2" },
            };

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendEmail("ProvidedTo@example.org", "ProvidedFrom@example.org", "Provided Subject", "Provided Body", fields, true, "ProvidedEnvironement");

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.To[0].Address == "ProvidedTo@example.org"
                && __.From.Address == "ProvidedFrom@example.org"
                && __.Subject == "ProvidedEnvironement - Provided Subject"
                && __.Body == "Provided Body<br /><br />Key 1: Value 1<br />Key 2: Value 2<br />"
                && __.IsBodyHtml == true
            )));
            mainUtil.VerifyNoOtherCalls();
        }
    }

    public class SendErrorEmailTests
    {
        [Fact]
        public void Handles_Null_Parameters()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();
            baseSettings.Setup(_ => _.GetSetting("RbaWebTeamEmail")).Returns("ExpectedTo@example.org");
            baseSettings.Setup(_ => _.GetSetting("RbaDefaultFromEmail")).Returns("ExpectedFrom@example.org");
            baseSettings.Setup(_ => _.GetSetting("XA.Foundation.Multisite.Environment")).Returns("UNITTEST");

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendExceptionEmail();

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.From.Address == "ExpectedFrom@example.org"
                && __.Subject == "UNITTEST - Generic Exception"
                && __.IsBodyHtml == true
            )));
            mainUtil.VerifyNoOtherCalls();
        }

        [Fact]
        public void Uses_Parameters()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();
            baseSettings.Setup(_ => _.GetSetting("RbaWebTeamEmail")).Returns("ExpectedTo@example.org");
            baseSettings.Setup(_ => _.GetSetting("RbaDefaultFromEmail")).Returns("ExpectedFrom@example.org");
            baseSettings.Setup(_ => _.GetSetting("XA.Foundation.Multisite.Environment")).Returns("UNITTEST");

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendExceptionEmail("ProvidedTo@example.org", "Provided Subject", "Provided Body", null, new System.Exception(), false, "ProvidedEnvironement");

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.Subject == "ProvidedEnvironement - Provided Subject"
                && __.Body == "Provided Body"
                && __.IsBodyHtml == true
            )));
            mainUtil.VerifyNoOtherCalls();
        }

        [Fact]
        public void Appends_Fields()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();
            baseSettings.Setup(_ => _.GetSetting("RbaWebTeamEmail")).Returns("ExpectedTo@example.org");
            baseSettings.Setup(_ => _.GetSetting("RbaDefaultFromEmail")).Returns("ExpectedFrom@example.org");
            baseSettings.Setup(_ => _.GetSetting("XA.Foundation.Multisite.Environment")).Returns("UNITTEST");

            var fields = new Dictionary<string, string>
            {
                { "Key 1", "Value 1" },
                { "Key 2", "Value 2" },
            };

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendExceptionEmail("ProvidedFrom@example.org", "Provided Subject", "Provided Body", fields, new System.Exception(), false, "ProvidedEnvironement");

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.From.Address == "ProvidedFrom@example.org"
                && __.Subject == "ProvidedEnvironement - Provided Subject"
                && __.Body.Contains("Provided Body<br /><br /> Key 1: Value 1<br />Key 2: Value 2<br />")
                && __.IsBodyHtml == true
            )));
            mainUtil.VerifyNoOtherCalls();
        }

        [Fact]
        public void Appends_Fields_Html()
        {
            // Arrange
            var mainUtil = new Mock<IMainUtil>();
            mainUtil.Setup(_ => _.SendMail(It.IsAny<MailMessage>()));

            var baseSettings = new Mock<BaseSettings>();
            baseSettings.Setup(_ => _.GetSetting("RbaWebTeamEmail")).Returns("ExpectedTo@example.org");
            baseSettings.Setup(_ => _.GetSetting("RbaDefaultFromEmail")).Returns("ExpectedFrom@example.org");
            baseSettings.Setup(_ => _.GetSetting("XA.Foundation.Multisite.Environment")).Returns("UNITTEST");

            var fields = new Dictionary<string, string>
            {
                { "Key 1", "Value 1" },
                { "Key 2", "Value 2" },
            };

            // Act
            var emailService = new EmailService(baseSettings.Object, mainUtil.Object);
            emailService.SendExceptionEmail("ProvidedFrom@example.org", "Provided Subject", "Provided Body", fields, new System.Exception(), true, "ProvidedEnvironement");

            // Assert
            mainUtil.Verify(_ => _.SendMail(It.IsAny<MailMessage>()), Times.Exactly(1));
            mainUtil.Verify(_ => _.SendMail(It.Is<MailMessage>(__ =>
                __.From.Address == "ProvidedFrom@example.org"
                && __.Subject == "ProvidedEnvironement - Provided Subject"
                && __.Body.Contains("Provided Body<br /><br /> Key 1: Value 1<br />Key 2: Value 2<br />")
                && __.IsBodyHtml == true
            )));
            mainUtil.VerifyNoOtherCalls();
        }
    }
}
