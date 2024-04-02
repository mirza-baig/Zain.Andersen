using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Sitecore.Data.Items;
using Sitecore.Security.Accounts;

namespace Platform.Foundation.Core.Workflow
{
    public class WorkflowHelper
    {
        public static List<string> AddRecipientsToMail(string recipientsFromConfig)
        {
            var userRoleNames = recipientsFromConfig.Split('|');
            List<string> toList = new List<string>();

            foreach (var userRoleName in userRoleNames)
            {
                if (Role.Exists(userRoleName))
                {
                    var role = Role.FromName(userRoleName);
                    var users = RolesInRolesManager.GetUsersInRole(role, true);
                    foreach (var user in users.Where(x => x.IsInRole(role)).Where(user => !string.IsNullOrEmpty(user.Profile.Email)))
                    {
                        toList.Add(user.Profile.Email);
                    }
                }
                else
                {
                    var rgxEmail = new Regex(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                                             @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                                             @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");
                    if (rgxEmail.IsMatch(userRoleName))
                        toList.Add(userRoleName);
                }
            }

            return toList;
        }

        public static User SubmittingUser(Item contentItem)
        {
            var contentWorkflow = contentItem.Database.WorkflowProvider.GetWorkflow(contentItem);
            var contentHistory = contentWorkflow.GetHistory(contentItem);

            if (contentHistory.Length <= 0) return null;
            var lastUser = contentHistory.Last().User;
            return User.FromName(lastUser, false);
        }
    }
}
