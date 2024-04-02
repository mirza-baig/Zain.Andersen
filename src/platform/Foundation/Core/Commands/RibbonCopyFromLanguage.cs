using System;
using System.Collections.Generic;
using System.Linq;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Shell.Framework.Commands;


namespace Platform.Foundation.Core.Commands
{
    [Serializable]
    internal class RibbonCopyFromLanguage : Command
    {
        public override void Execute(CommandContext context)
        {
        }

        public override string GetClick(CommandContext context, string click)
        {
            return string.Empty;
        }

        public override CommandState QueryState(CommandContext context)
        {
            Assert.ArgumentNotNull((object)context, "context");
            if (context.Items.Length != 1)
                return CommandState.Hidden;
            Item obj = context.Items[0];
            if (Enumerable.Contains<ID>((IEnumerable<ID>)new ID[3]
            {
        TemplateIDs.Template,
        TemplateIDs.TemplateSection,
        TemplateIDs.TemplateField
            }, obj.TemplateID))
                return CommandState.Hidden;
            if (!obj.IsFallback || !obj.Access.CanRead())
                return CommandState.Disabled;
            if (Context.IsAdministrator)
                return CommandState.Enabled;
            if (!obj.Access.CanWrite() || (!obj.Locking.CanLock() && !obj.Locking.HasLock() || !obj.Access.CanWriteLanguage()))
                return CommandState.Disabled;
            return base.QueryState(context);
        }
    }
}
