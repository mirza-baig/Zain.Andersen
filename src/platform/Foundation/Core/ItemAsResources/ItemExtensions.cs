using System;
using System.Linq;
using System.Reflection;
using Sitecore.Data;
using Sitecore.Data.DataProviders;
using Sitecore.Data.Items;

namespace Platform.Foundation.Core.ItemAsResources
{
    public static class ItemExtensions
    {
        // Returns true if the item in the resource and the database are equal
        public static bool CanBeRemovedFromHead(this Item @this)
        {
            var compositeProvider = @this.Database.GetDataProviders().FirstOrDefault(_ => _ is CompositeDataProvider);
            if (compositeProvider == null)
            {
                return false;
            }

            var _canBeRemovedFromHeadMethodInfo = typeof(CompositeDataProvider).GetMethod("CanBeRemovedFromHead", BindingFlags.Instance | BindingFlags.NonPublic, Type.DefaultBinder, new Type[1] { typeof(ItemDefinition) }, null);
            if (_canBeRemovedFromHeadMethodInfo == null)
            {
                return false;
            }

            var callContext = new CallContext(@this.Database.DataManager, @this.Database.GetDataProviders().Length);
            var itemDefinition = compositeProvider.GetItemDefinition(@this.ID, callContext);
            var result = (bool)_canBeRemovedFromHeadMethodInfo.Invoke(compositeProvider, new object[] { itemDefinition });
            return result;
        }

        public static void RemoveFromHead(this Item @this)
        {
            var compositeProvider = @this.Database.GetDataProviders().FirstOrDefault(_ => _ is CompositeDataProvider);
            if (compositeProvider == null)
            {
                return;
            }

            var callContext = new CallContext(@this.Database.DataManager, @this.Database.GetDataProviders().Length);
            var itemDefinition = compositeProvider.GetItemDefinition(@this.ID, callContext);
            compositeProvider.DeleteItem(itemDefinition, callContext);
        }
    }
}
