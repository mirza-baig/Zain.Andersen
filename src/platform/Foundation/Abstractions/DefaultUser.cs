using Sitecore.Security.Accounts;

namespace Platform.Foundation.Abstractions
{
    public class DefaultUser : IUser
    {
        public bool Exists(string username)
        {
            return User.Exists(username);
        }

        public User FromName(string userName, bool isAuthenticated)
        {
            return User.FromName(userName, isAuthenticated);
        }
    }
}
