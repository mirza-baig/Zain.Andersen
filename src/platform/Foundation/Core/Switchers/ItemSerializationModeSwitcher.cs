using System;
using System.Web;
using Sitecore.Sites;

namespace Platform.Foundation.Core.Switchers
{
    public enum ItemSerializationMode
    {
        Default,
        LimitedPage
    }
    public sealed class ItemSerializationModeSwitcher : IDisposable
    {
        /// <summary>
        /// The Desired Display Mode while in the context
        /// </summary>
        private readonly ItemSerializationMode _desiredMode;

        /// <summary>
        /// THe Previous Display Mode that will be transitioned out of the context to
        /// </summary>
        private readonly ItemSerializationMode _previousMode;

        /// <summary>
        /// Gets the Current DisplayMode
        /// </summary>
        public static ItemSerializationMode CurrentMode
        {
            get
            {
                var currentItem = HttpContext.Current.Items["ItemSerializationMode"];
                return (ItemSerializationMode?) currentItem ?? ItemSerializationMode.Default;
            }
            private set
            {
                HttpContext.Current.Items["ItemSerializationMode"] = value;
            }
        }

        public ItemSerializationModeSwitcher(ItemSerializationMode desiredMode)
        {
            _desiredMode = desiredMode;
            _previousMode = CurrentMode;

            Enter();
        }

        /// <summary>
        /// Enters the Desired Mode if not already within the Display Mode
        /// </summary>
        public void Enter()
        {
            if (CurrentMode != _desiredMode)
            {
                CurrentMode = _desiredMode;
            }
        }

        /// <summary>
        /// Exists the Desired Mode if not already within the Display Mode
        /// </summary>
        public void Exit()
        {
            if (CurrentMode != _previousMode)
            {
                CurrentMode = _previousMode;
            }
        }

        public void Dispose()
        {
            Exit();
        }
    }
}
