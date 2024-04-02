using Sitecore.Security.Accounts;

namespace Platform.Foundation.Abstractions
{
    public interface IUser
    {
        bool Exists(string username);

        User FromName(string userName, bool isAuthenticated);
    }
}
