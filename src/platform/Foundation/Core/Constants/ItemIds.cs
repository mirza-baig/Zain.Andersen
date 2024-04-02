using Sitecore.Data;

namespace Platform.Foundation.Core.Constants
{
    public static class ItemIds
    {
        public static class Settings
        {
            public static class Foundation
            {
                public static class EnterpriseWeb
                {
                    public static readonly ID Id = new ID("{40C18523-19E5-4990-A060-1FA12ED82B17}");

                    public static class Enums
                    {
                        public static class CoveoStringOperators
                        {
                            public static readonly ID Id = new ID("{2605EABB-41C6-4118-8DC5-6881B74E4234}");
                            public const string Equal = "{1A44EA86-1C6E-4EEC-94F2-F9BA827DC8AE}";
                            public const string NotEqual = "{B96F5AEE-A7BD-44DC-815D-8724ADDD12F3}";
                            public const string StartsWith = "{A5BD1E87-6A5F-431F-9852-2B49C5615810}";
                            public const string EndsWith = "{7D37D0E1-A343-4102-B191-422C3D34DB8B}";
                            public const string Contains = "{CD99909B-3294-4AD8-8184-2F983C78F834}";
                            public const string ContainsKeywords = "{E5C045C1-D6B6-441F-80B7-A32AD7D4842B}";
                            public const string IsLike = "{7FA9F358-33F7-4A72-88A3-7088AEBB15A6}";
                            public const string Regex = "{E4562FDE-7EFE-4852-A5C6-A1FBA72CA18D}";
                        }
                    }
                }
            }

            public static class Rules
            {
                public static class Definitions
                {
                    public static class Elements
                    {
                        public static class EW_Affiliate
                        {
                            public static class AffiliateMatch
                            {
                                public static readonly ID Id = new ID("{96DBD54A-2742-4E37-9FD2-6D0875A27D47}");
                            }
                        }
                        public static class EW_Request
                        {
                            public static class CookieIsPresent
                            {
                                public static readonly ID Id = new ID("{6D042D01-1EEA-4881-9175-6729899B0FF1}");
                            }
                            public static class CookieValue
                            {
                                public static readonly ID Id = new ID("{89124B09-912E-40D0-A0BA-20F5F0096EE8}");
                            }
                            public static class QueryString
                            {
                                public static readonly ID Id = new ID("{5C811A21-1FB4-4810-B13F-A4695EDC5DA2}");
                            }
                        }
                    }
                }

                public static class SitecoreOperators
                {
                    public static readonly ID Id = new ID("{093BC2D6-8B96-464C-89D8-FD57E2CB05F8}");
                    public const string Equal = "{066602E2-ED1D-44C2-A698-7ED27FD3A2CC}";
                    public const string NotEqual = "{3627ED99-F454-4B83-841A-A0194F0FB8B4}";
                    public const string GreaterThan = "{B88CD556-082E-4385-BB76-E4D1B565F290}";
                    public const string LessThan = "{E362A3A4-E230-4A40-A7C4-FC42767E908F}";
                    public const string GreaterEqualThan = "{814EF7D0-1639-44FD-AEEF-735B5AC14425}";
                    public const string LessEqualThan = "{2E1FC840-5919-4C66-8182-A33A1039EDBF}";
                }
            }

            public static class Feature
            {
                public static class EnterpriseWeb
                {
                    public static readonly ID Id = new ID("{05BDEB50-1089-4405-B619-D242EDE1A6CB}");
                }
            }
        }

        public static class Content
        {
            public static class RenewalByAndersen
            {
                public static class Global
                {
                    public static readonly ID AffiliatesFolderId = new ID("{1F5AB56B-F49F-4148-94FF-25E6867D7434}");

                    public static class DataSources
                    {
                        public static class EmailTemplates
                        {
                            public static readonly ID ExpiringOfferEmail = new ID("{82F0ADEA-C2E3-43E3-89D5-6BD1D7000DB1}");
                        }
                    }
                }
            }
        }

        public static class EnterpriseGlobal
        {
            public static class Enums
            {
                public static class Search
                {
                    public static class IndexedFields
                    {
                        public static readonly ID Id = new ID("{737C36F3-B8AC-406C-B17F-7BE09AC90E11}");
                    }
                    public static class FacetFields
                    {
                        public static readonly ID Id = new ID("{9B6B65B9-3C42-4261-B9FE-1AE9FD5C124C}");
                    }

                }
            }
        }
    }
}
