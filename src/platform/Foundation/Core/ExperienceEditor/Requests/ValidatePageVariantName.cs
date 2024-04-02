using System.Text.RegularExpressions;
using Sitecore.ExperienceEditor.Speak.Server.Contexts;
using Sitecore.ExperienceEditor.Speak.Server.Requests;
using Sitecore.ExperienceEditor.Speak.Server.Responses;

namespace Platform.Foundation.Core.ExperienceEditor.Requests
{
    public class ValidatePageVariantName : PipelineProcessorRequest<StringContext>
    {
        public override PipelineProcessorResponseValue ProcessRequest()
        {
            var result = new PipelineProcessorResponseValue();
            string str = this.RequestContext.Value;
            if (string.IsNullOrWhiteSpace(str))
            {
                result.Value = new { success = false, reason = "The name cannot be blank." };
            }
            else if (str.Length > Sitecore.Configuration.Settings.MaxItemNameLength)
            {
                result.Value = new { success = false, reason = $"The length of the value is too long.\n\nPlease specify a value of less than {Sitecore.Configuration.Settings.MaxItemNameLength} characters." };
            }
            else if (!Regex.IsMatch(str, Sitecore.Configuration.Settings.ItemNameValidation))
            {
                result.Value = new { success = false, reason = $"'{str}' is not a valid name." };
            }
            result.Value = new { success = true };
            return result;
        }
    }
}
