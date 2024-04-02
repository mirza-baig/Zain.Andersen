using Sitecore.Data;

namespace Platform.Foundation.Core.Constants
{
    public static class TemplateIds
    {
        public static class Foundation
        {
            public static class Enterprise
            {
                public static class BaseTemplates
                {
                    public static class Containers
                    {
                        public static class _BaseSharedChildDataSource
                        {
                            public static readonly ID Template = new ID("{F06168B6-15F3-4807-9767-BA92C5077506}");
                        }
                    }

                    public static class Pages
                    {
                        public static class _BasePage
                        {
                            public static readonly ID Template = new ID("{ABF549D3-3225-4821-9336-3D395CD86D32}");
                        }
                    }

                    public static class _BaseVideoElement
                    {
                        public static readonly ID Template = new ID("{8E69FD4B-FFAB-4DBC-A67E-C136B82BC631}");
                    }

                    public static class _BasePhoto
                    {
                        public static readonly ID Template = new ID("{DD38514D-89E9-47F5-9A34-F5DAA3E8C852}");
                        public static class Fields
                        {
                            public static readonly ID RelatedPages = new ID("{483599D7-37A0-4CEA-AE75-016A30775BE2}");
                        }
                    }
                    public static class _BaseSerializeChildren
                    {
                        public static readonly ID Template = new ID("{FF89A198-11C2-4D74-ABB0-F137858FA97B}");
                    }
                }

                public static class Data
                {
                    public static class Search
                    {
                        public static class FacetTag
                        {
                            public static readonly ID Template = new ID("{57E27D6D-7D40-4566-BDC7-E401393E793E}");
                        }
                    }
                    public static class Products
                    {
                        public static class EnterpriseProduct
                        {
                            public static readonly ID Template = new ID("{FCBE6D89-F050-4C61-9D47-8AFC31758E6F}");
                        }
                    }
                }


                public static class Extensions
                {
                    public static class _EnterpriseWebSite
                    {
                        public static readonly ID Template = new ID("{B5145602-F1A5-4524-8D64-2B85F83A6D80}");
                    }

                    public static class _EnterpriseWebSettings
                    {
                        public static readonly ID Template = new ID("{F8246648-F039-4464-A0BD-63F319A8C80C}");
                    }
                }

                public static class FieldSets
                {
                    public static class Affiliates
                    {
                        public static class _AffiliateFacet
                        {
                            public static readonly ID Template = new ID("{9F522844-8BBC-4474-9E61-8F296A5CB109}");
                            public static class Fields
                            {
                                public static readonly ID AffiliateTags = new ID("{F867C72D-BD5E-420D-A40B-715A6BE4C0AD}");
                            }
                        }
                    }

                    public static class Containers
                    {
                        public static class _ChildDataSourceContainer
                        {
                            public static readonly ID Template = new ID("{F451762A-D34F-4554-BAA9-E5F3F6013B1F}");
                        }
                        public static class _FieldDataSourceContainer
                        {
                            public static readonly ID Template = new ID("{07B8BF2C-54FD-40CB-934D-2BEFB6E8CD31}");
                        }
                    }

                    public static class Routes
                    {
                        public static class _PageProperties
                        {
                            public static class Fields
                            {
                                public static readonly ID PageTitle = new ID("{B1857852-6EB3-4E22-9F06-FEF8012ABF73}");
                            }
                        }
                    }

                    public static class Search
                    {
                        public static class _IndexableItem
                        {
                            public static readonly ID Template = new ID("{BCD96EB5-B307-4230-918E-A5F9FC5DBCEF}");
                        }
                    }

                    public static class _AffilitePersonalization
                    {
                        public static readonly ID Template = new ID("{72157EAA-C627-4AA2-A21E-5284EFD23940}");
                        public static class Fields
                        {
                            public static readonly ID AffiliatePersonalizationRules = new ID("{8D915E7B-8985-4D21-ADA7-7A72B60B41B3}");
                        }
                    }

                    public static class _VideoPrimary
                    {
                        public static readonly ID Template = new ID("{368747B7-D912-47D5-995E-CD3573E24FDF}");
                        public static class Fields
                        {
                            public static readonly ID PrimaryVideo = new ID("{CFEBF821-A76F-406F-AE11-EE3555A3C47D}");
                        }
                    }
                }

                public static class Personalization
                {
                    public static class PageVariant
                    {
                        public static readonly ID Template = new ID("{6D6A6CE5-4E2A-4B04-BA7C-4D765E76C60D}");

                        public static class Fields
                        {
                            public static readonly ID ActivationRules = new ID("{2C5920AA-A6DF-4102-AF0A-9314AA1FFB58}");
                        }
                    }
                    public static class PageVariantFolder
                    {
                        public static readonly ID Template = new ID("{519E5E9D-1DE2-4981-BBE1-E1364722242F}");
                    }
                }
            }

            public static class EnhancedInsertOptions
            {
                public static class InsertOptions
                {
                    public static readonly ID Template = new ID("{D70D43E4-AEF9-43BF-89E5-B49F22675F43}");

                    public static class Fields
                    {
                        public static readonly ID Rules = new ID("{F0C111FF-F7DD-405F-8703-432CDC877F9B}");
                    }
                }

                public static class InsertOptionsSettings
                {
                    public static readonly ID Template = new ID("{7DCF5D52-57C1-49B3-B452-F27F980D51E3}");
                }

                public static class InsertOptionsTab
                {
                    public static readonly ID Template = new ID("{57314660-99FE-4363-9AA4-16E701DC4E54}");

                    public static class Fields
                    {
                        public static readonly ID Templates = new ID("{9AC18EDF-76B4-46F8-AFBE-56A079E13E35}");
                    }
                }
            }

            public static class Personalization
            {
                public static class PersonalizationParameters
                {
                    public static readonly ID Template = new ID("{4B369ACC-43C8-4053-8515-FD036CCC9650}");
                }
            }

            public static class SiteSettings
            {
                public static class LayoutContextSettings
                {
                    public static readonly ID Template = new ID("{74B06D13-0249-4D12-A842-FAB6336DEEB1}");
                }
            }

            public static class XA
            {
                public static class Common
                {
                    public static class Enum
                    {
                        public static readonly ID Template = new ID("{D2923FEE-DA4E-49BE-830C-E27764DFA269}");
                    }
                }
            }

            public static class RbA
            {
                public static class FieldSets
                {
                    public static class Affiliate
                    {
                        public static class AffiliateDetails
                        {
                            public static class Fields
                            {
                                public static readonly ID AffiliateId =
                                    new ID(
                                        "{BC628A25-E756-4FA7-BD90-75B2C390157A}");
                            }
                        }
                    }
                }
            }
        }

        public static class Feature
        {
            public static class AW
            {
                public static class Data
                {
                    public static class Products
                    {
                        public static class Product
                        {
                            public static readonly ID Template = new ID("{15B220E7-B36D-4C65-8F33-AA8B635449D4}");
                        }
                    }
                }
            }

            public static class RbA
            {
                public static class Data
                {
                    public static class Affiliates
                    {
                        public static class Affiliate
                        {
                            public static readonly ID Template = new ID("{561698E7-FA54-4801-B8C4-F1866F10B57F}");

                            public static class Fields
                            {
                                public static readonly ID AffiliateLandingPage = new ID("{A7E3A39B-3F4F-45BD-9AEC-B3E03233C13A}");
                            }
                        }

                        public static class Datasources
                        {
                            public static class Showroom
                            {
                                public static readonly ID Template = new ID("{B9F8C372-1222-4933-979F-9094D10AAB7B}");

                                public static class Fields
                                {
                                    public static readonly ID ShowroomPage = new ID("{8B214A42-3FE3-4F12-A671-DF678B72DCD6}");
                                }
                            }

                            public static class Offer
                            {
                                public static readonly ID Template = new ID("{3B07FB29-6ECA-4D8E-809D-1027F71CE17E}");

                                public static class Fields
                                {
                                    public static readonly ID Details = new ID("{A89DF290-AA0C-4B67-8714-921A6E0BCEBD}");
                                    public static readonly ID Disclaimer = new ID("{71F90959-D752-44E2-BC53-753A2CC96BE4}");
                                    public static readonly ID EndDate = new ID("{AC1B85E1-C525-4AE9-96C4-5D2C50720A32}");
                                    public static readonly ID ExpirationNoticeSent = new ID("{90D24BF2-CD07-47E4-BBA4-2F72AE6BE8E8}");
                                    public static readonly ID Headline = new ID("{5144D74C-3756-471B-A287-3EDD5842182F}");
                                    public static readonly ID Image = new ID("{DBA73349-3A15-4B5A-B309-E2B25B9B093C}");
                                    public static readonly ID Link = new ID("{30EB38C3-1879-4DCD-8478-2943EF20A33A}");
                                    public static readonly ID Name = new ID("{40C9547C-4E12-4285-99F2-25CE1DB47FFD}");
                                    public static readonly ID OfferType = new ID("{63EC2451-3F75-4B81-AECD-703DD1B787C7}");
                                    public static readonly ID ShowroomPage = new ID("{8B214A42-3FE3-4F12-A671-DF678B72DCD6}");
                                    public static readonly ID StartDate = new ID("{A93C29EB-8B88-4181-B4A7-166975F2D52B}");
                                    public static readonly ID SubHeadline = new ID("{3B34C8A1-8398-4ABA-8F60-291F2E62C479}");
                                }
                            }
                        }

                    }

                    public static class Videos
                    {
                        public static class GalleryVideo
                        {
                            public static readonly ID Template = new ID("{5DABD9C5-9C73-46B0-A2F1-41A0491A322E}");
                        }
                    }
                }
            }

            public static class Enterprise
            {
                public static class Elements
                {
                    public static class Search
                    {
                        public static class SearchParameters
                        {
                            public static readonly ID Template = new ID("{AF4C725F-4863-4EC3-9976-D35A39E8AA62}");

                            public static class Fields
                            {
                                public static readonly ID FilterExpression = new ID("{8233373B-F838-48C0-A4F6-EFD10E6B7EB6}");

                                public static readonly ID BoostingExpression = new ID("{C3A1937B-273C-4D2C-B434-9766F379C706}");
                            }
                        }
                    }

                    public static class Swatches
                    {
                        public static class Swatch
                        {
                            public static readonly ID Template = new ID("{863DCC2E-CCA5-4236-B10F-8B4872E1C47C}");
                        }
                    }
                }
            }
        }

        public static class Project
        {
            public static class RbA
            {
                public static class Pages
                {
                    public static class RetailerPage
                    {
                        public static readonly ID Template = new ID("{F6161117-87FD-42BC-82DE-37D44E896A47}");
                        public static class Fields
                        {
                            public static readonly ID Affiliate = new ID("{A98FE7F8-69D4-4C15-905A-1D62C90A1C65}");
                        }
                    }
                    public static class ShowroomPage
                    {
                        public static readonly ID Template = new ID("{94A9901C-0489-44F3-A476-C988B53BC138}");
                        public static class Fields
                        {
                            public static readonly ID Showroom = new ID("{FB9D7188-716D-4679-BAFE-E9503571065E}");
                        }
                    }
                }
            }
        }
    }
}
