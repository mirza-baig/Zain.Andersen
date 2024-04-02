using System;
using System.Collections.Generic;
using Moq;
using Platform.Foundation.Abstractions;
using Platform.Foundation.Core.Constants;
using Platform.Foundation.Core.Services;
using Platform.Foundation.Core.Tasks.Commands.RenewalByAndersen;
using Sitecore.Abstractions;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.NSubstituteUtils;
using Sitecore.Tasks;
using Xunit;

namespace Platform.Tests.Foundation.Core.Tasks.Commands.RenewalByAndersen
{
    public class SendExpiringOfferNotificationsTests
    {
        //[Fact]
        //public void Given_Expiring_Offers_Send_Email()
        //{
        //    // Arrange
        //    var startDateString = string.Format("{0}0101T000000", DateTime.Now.Year);
        //    var endDateString = DateTime.Now.AddDays(6).ToString("s");

        //    // https://github.com/smarchenko/SitecoreDI.NSubstitute.Helper
        //    var affiliateItem = new FakeItem(ID.NewID)
        //        .WithName("Test Affiliate")
        //        .WithTemplate(TemplateIds.Feature.RbA.Data.Affiliates.Affiliate.Template);

        //    var statisticsItem = new FakeItem()
        //        .WithName("Statistics")
        //        .WithField(Sitecore.FieldIDs.Created, "Created", DateTime.MinValue.ToString("s"))
        //        .WithField(Sitecore.FieldIDs.Updated, "Updated", DateTime.Now.ToString("s"))
        //        .WithField(Sitecore.FieldIDs.Revision, "Revision", Guid.NewGuid())
        //        .WithField(Sitecore.FieldIDs.CreatedBy, "CreatedBy", "admin")
        //        .WithField(Sitecore.FieldIDs.UpdatedBy, "UpdatedBy", "admin")
        //        .ToSitecoreItem();

        //    var offerStatisticsItem = new ItemStatistics(statisticsItem);

        //    var offerItem = new FakeItem(ID.NewID)
        //        .WithName("Offer")
        //        .WithTemplate(TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Template)
        //        .WithParent(affiliateItem)
        //        .WithStatistics(offerStatisticsItem)
        //        .WithField(TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.Name, "Name", "test offer")
        //        .WithField(TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.StartDate, "StartDate", startDateString)
        //        .WithField(TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.EndDate, "EndDate", endDateString)
        //        .WithField(TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.ExpirationNoticeSent, "ExpirationNoticeSent", false)
        //        .ToSitecoreItem();

        //    Item[] offerItems = { offerItem };

        //    var emailItem = new FakeItem()
        //        .WithName("Expiring Offer Email")
        //        .WithField("Id", "")
        //        .WithField("From", "test@test.com")
        //        .WithField("To", "")
        //        .WithField("Subject", "Offer expiring test")
        //        .WithField("Body", "This is a test")
        //        .ToSitecoreItem(); ;

        //    var emailServiceMock = new Mock<IEmailService>();
        //    emailServiceMock.Setup(_ => _.SendEmail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<Dictionary<string, string>>(), It.IsAny<bool>(), It.IsAny<string>()));

        //    var baseFactory = new Mock<BaseFactory>();
        //    baseFactory.Setup(_ =>
        //        _.GetDatabase("master")
        //        .GetItem(ItemIds.Content.RenewalByAndersen.Global.DataSources.EmailTemplates.ExpiringOfferEmail)
        //    ).Returns(() => emailItem);

        //    var baseLog = new Mock<BaseLog>();

        //    var baseSettings = new Mock<BaseSettings>();
        //    baseSettings.Setup(_ => _.GetSetting("XA.Foundation.Multisite.Environment")).Returns("UNITTEST");

        //    var user = new Mock<IUser>();

        //    var commandItem = new FakeItem(ID.NewID)
        //        .WithName("Command")
        //        .WithField("Expired", "false")
        //        .WithField("Icon", "test")
        //        .WithField("IsCompleted", "false")
        //        .WithField("IsDue", "true")
        //        .WithField("NextRun", "")
        //        .WithField("Schedule", "");
        //    var command = new CommandItem(commandItem);

        //    var scheduleItem = new FakeItem(ID.NewID)
        //        .WithName("Schedule")
        //        .WithField("Icon", "test");
        //    var schedule = new ScheduleItem(scheduleItem);

        //    // Act
        //    var expiringNotifications = new SendExpiringOfferNotifications(emailServiceMock.Object, baseFactory.Object, baseLog.Object, baseSettings.Object, user.Object);
        //    expiringNotifications.Execute(offerItems, command, schedule);

        //    // Assert
        //    Assert.True(((CheckboxField)offerItem.Fields[TemplateIds.Feature.RbA.Data.Affiliates.Datasources.Offer.Fields.ExpirationNoticeSent]).Checked);
        //    emailServiceMock.Verify(_ => _.SendEmail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<Dictionary<string, string>>(), It.IsAny<bool>(), It.IsAny<string>()), Times.Once);
        //}

        [Fact]
        public void Throws_Exception_If_Email_Template_Not_Found()
        {
            // Arrange
            var emailServiceMock = new Mock<IEmailService>();

            var baseFactory = new Mock<BaseFactory>();
            baseFactory.Setup(_ =>
                _.GetDatabase("master")
                .GetItem(ItemIds.Content.RenewalByAndersen.Global.DataSources.EmailTemplates.ExpiringOfferEmail)
            ).Returns(() => null);

            var baseLog = new Mock<BaseLog>();

            var baseSettings = new Mock<BaseSettings>();

            var user = new Mock<IUser>();

            var commandItem = new FakeItem(ID.NewID)
                .WithName("Command")
                .WithField("Expired", "false")
                .WithField("Icon", "test")
                .WithField("IsCompleted", "false")
                .WithField("IsDue", "true")
                .WithField("NextRun", "")
                .WithField("Schedule", "");
            var command = new CommandItem(commandItem);

            var scheduleItem = new FakeItem(ID.NewID)
                .WithName("Schedule")
                .WithField("Icon", "test");
            var schedule = new ScheduleItem(scheduleItem);

            var offerItems = new Item[0];

            // Act & Assert
            Assert.Throws<Exception>(() =>
            {
                var expiringNotifications = new SendExpiringOfferNotifications(emailServiceMock.Object, baseFactory.Object, baseLog.Object, baseSettings.Object, user.Object);
                expiringNotifications.Execute(offerItems, command, schedule);
            });
        }
    }
}
