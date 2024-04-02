using System;
using System.Text;
using Sitecore.Pipelines.ExpandInitialFieldValue;

namespace Platform.Foundation.Core.Pipelines.ExpandInitialFieldValue
{
    public class ApiKeyToken : ExpandInitialFieldValueProcessor
    {
        private readonly char[] chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".ToCharArray();
        private readonly int keyLength = 32;

        public override void Process(ExpandInitialFieldValueArgs args)
        {
            if (args.SourceField.Value.Contains("$ewApiKey"))
            {
                if (args.TargetItem != null)
                {
                    var result = new StringBuilder(keyLength);
                    var random = new Random();
                    for (var i = 1; i <= keyLength; i++)
                    {
                        var idx = random.Next(chars.Length);
                        result.Append(chars[idx]);
                    }

                    args.Result = args.Result.Replace("$ewApiKey", result.ToString());
                }
            }
        }
    }
}
