// Decompiled with JetBrains decompiler
// Type: log4net.Filter.StringMatchFilter
// Assembly: Sitecore.Logging, Version=14.1.0.0, Culture=Neutral, PublicKeyToken=null
// MVID: 56246359-B928-4E50-A47E-6D46447366F4
// Assembly location: C:\Users\a88386\OneDrive - Andersen Corporation\DXP\Sitecore.Logging.dll
// XML documentation location: C:\Users\a88386\OneDrive - Andersen Corporation\DXP\Sitecore.Logging.xml

using log4net.Filter;
using log4net.spi;
using System;
using System.Text.RegularExpressions;

namespace Platform.Foundation.Core.Extensions.Log4NetExtensions
{
    /// <summary>
    /// Simple filter to match a string in the rendered message
    /// </summary>
    /// <remarks>
    /// Simple filter to match a string in the rendered message
    /// </remarks>
    public class StringMatchFilter : FilterSkeleton
    {
        /// <summary>Flag to indicate the behaviour when we have a match</summary>
        private bool m_acceptOnMatch = true;
        /// <summary>The string to substring match against the message</summary>
        private string m_stringToMatch;
        /// <summary>A string regex to match</summary>
        private string m_stringRegexToMatch;
        /// <summary>
        /// A regex object to match (generated from m_stringRegexToMatch)
        /// </summary>
        private Regex m_regexToMatch;

        /// <summary>Initialise and precompile the Regex if required</summary>
        public override void ActivateOptions()
        {
            if (this.m_stringRegexToMatch == null)
                return;
            this.m_regexToMatch = new Regex(this.m_stringRegexToMatch, RegexOptions.Compiled);
        }

        /// <summary>
        /// The <see cref="P:log4net.Filter.StringMatchFilter.AcceptOnMatch" /> property is a flag that determines
        /// the behaviour when a matching <see cref="T:log4net.spi.Level" /> is found. If the
        /// flag is set to true then the filter will <see cref="F:log4net.Filter.FilterDecision.ACCEPT" /> the
        /// logging event, otherwise it will <see cref="F:log4net.Filter.FilterDecision.DENY" /> the event.
        /// </summary>
        public bool AcceptOnMatch
        {
            get => this.m_acceptOnMatch;
            set => this.m_acceptOnMatch = value;
        }

        /// <summary>
        /// The string that will be substring matched against
        /// the rendered message. If the message contains this
        /// string then the filter will match.
        /// </summary>
        public string StringToMatch
        {
            get => this.m_stringToMatch;
            set => this.m_stringToMatch = value;
        }

        /// <summary>
        /// The regular expression pattern that will be matched against
        /// the rendered message. If the message matches this
        /// pattern then the filter will match.
        /// </summary>
        public string RegexToMatch
        {
            get => this.m_stringRegexToMatch;
            set => this.m_stringRegexToMatch = value;
        }

        /// <summary>
        /// Check if this filter should allow the event to be logged
        /// </summary>
        /// <remarks>
        /// The rendered message is matched against the <see cref="P:log4net.Filter.StringMatchFilter.StringToMatch" />.
        /// If the <see cref="P:log4net.Filter.StringMatchFilter.StringToMatch" /> occurs as a substring within
        /// the message then a match will have occurred. If no match occurs
        /// this function will return <see cref="F:log4net.Filter.FilterDecision.NEUTRAL" />
        /// allowing other filters to check the event. If a match occurs then
        /// the value of <see cref="P:log4net.Filter.StringMatchFilter.AcceptOnMatch" /> is checked. If it is
        /// true then <see cref="F:log4net.Filter.FilterDecision.ACCEPT" /> is returned otherwise
        /// <see cref="F:log4net.Filter.FilterDecision.DENY" /> is returned.
        /// </remarks>
        /// <param name="loggingEvent">the event being logged</param>
        /// <returns>see remarks</returns>
        public override FilterDecision Decide(LoggingEvent loggingEvent)
        {
            string input = loggingEvent != null ? loggingEvent.RenderedMessage + loggingEvent.GetExceptionStrRep(): throw new ArgumentNullException(nameof(loggingEvent));

            if (input == null || this.m_stringToMatch == null && this.m_regexToMatch == null)
                return FilterDecision.NEUTRAL;

            if (this.m_regexToMatch != null)
            {
                if (!this.m_regexToMatch.Match(input).Success)
                    return FilterDecision.NEUTRAL;
                return this.m_acceptOnMatch ? FilterDecision.ACCEPT : FilterDecision.DENY;
            }
            if (this.m_stringToMatch == null || input.IndexOf(this.m_stringToMatch) == -1)
                return FilterDecision.NEUTRAL;
            return this.m_acceptOnMatch ? FilterDecision.ACCEPT : FilterDecision.DENY;
        }
    }
}

