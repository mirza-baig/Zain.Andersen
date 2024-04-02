using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Sites;

namespace Platform.Foundation.Core.Switchers
{
    public sealed class PageModeSwitcher : IDisposable
    {
        /// <summary>
        /// The Desired Display Mode while in the context
        /// </summary>
        private readonly DisplayMode _desiredMode;

        /// <summary>
        /// THe Previous Display Mode that will be transitioned out of the context to
        /// </summary>
        private readonly DisplayMode _previousMode;

        /// <summary>
        /// Gets the Current DisplayMode
        /// </summary>
        public static DisplayMode CurrentMode => Sitecore.Context.Site?.DisplayMode ?? DisplayMode.Normal;
        
        public PageModeSwitcher(DisplayMode desiredMode)
        {
            this._desiredMode = desiredMode;
            this._previousMode = Sitecore.Context.Site?.DisplayMode ?? DisplayMode.Normal;

            this.Enter();
        }

        /// <summary>
        /// Enters the Desired Mode if not already within the Display Mode
        /// </summary>
        public void Enter()
        {
            if (CurrentMode != this._desiredMode)
            {
                Sitecore.Context.Site?.SetDisplayMode(this._desiredMode, DisplayModeDuration.Temporary);
            }
        }

        /// <summary>
        /// Exists the Desired Mode if not already within the Display Mode
        /// </summary>
        public void Exit()
        {
            if (CurrentMode != this._previousMode)
            {
                Sitecore.Context.Site.SetDisplayMode(this._previousMode, DisplayModeDuration.Remember);
            }
        }

        public void Dispose()
        {
            this.Exit();
        }
    }
}
