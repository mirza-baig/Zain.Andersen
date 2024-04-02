import { SitecoreIds } from './sitecore-ids';

export const affiliateBasePath = '/locations';

export const AffiliateGraphQLQueries = {
  affiliateListQuery: `query {
    search(
      first: 500
      where: {
        AND: [
          {
            name: "_path"
            value: "${SitecoreIds.Content.RenewalByAndersen.Global.AffiliatesDataFolder.ItemId}"
            operator: CONTAINS
          }
          {
            name: "_templates"
            value: "${SitecoreIds.Feature.Data.Affiliates.Affiliate.TemplateId}"
            operator: CONTAINS
          }
        ]
      }
    ) {
      pageInfo {
        endCursor
        hasNext
      }
      results {
        ... on Affiliate {
          affiliateId {
            value
          }
        }
      }
    }
  }`,
  affiliateDetailsbyAffiliateIdQuery: `query GetAffiliateDetails($affiliateId: String, $zipcode: String, $language: String) {
    affiliate: search(
      first: 1
      where: {
        AND: [
          {
            name: "_path"
            value: "${SitecoreIds.Content.RenewalByAndersen.Global.AffiliatesDataFolder.ItemId}"
            operator: CONTAINS
          }
          {
            name: "_templates"
            value: "${SitecoreIds.Feature.Data.Affiliates.Affiliate.TemplateId}"
            operator: CONTAINS
          }
          {
            name: "_language"
            value: $language
            operator: EQ
          }
          {
            OR: [
              { name: "affiliateId", value: $affiliateId, operator: EQ }
              {
                name: "territoryPostalCodes"
                value: $zipcode
                operator: CONTAINS
              }
            ]
          }
        ]
      }
    ) {
      results {
        ... on Affiliate {
          affiliateId {
            value
          }
          affiliateName {
            value
          }
          affiliateSubheading {
            value
          }
          affiliateBusinessName {
            value
          }
          territoryPostalCodes {
            value
          }
          optIns {
            value
          }
          addressLine1 {
            value
          }
          addressLine2 {
            value
          }
          city {
            value
          }
          state {
            targetItem {
              id
              ... on State {
                abbreviation {
                  value
                }
                fullName {
                  value
                }
              }
            }
          }
          postalCode {
            value
          }
          administrativeOfficePhoneNumber {
            value
          }
          affiliateLandingPage {
            anchor
            className
            linkType
            queryString
            text
            url
          }
          widgetID {
            value
          }
          rl_adid {
            value
          }
          rl_key {
            value
          }
          showrooms: children(
            includeTemplateIDs: [
              "${SitecoreIds.Feature.Data.Affiliates.AffiliateShowroomsFolder.TemplateId}"
            ]
          ) {
            results {
              hasChildren
              children(
                includeTemplateIDs: [
                  "${SitecoreIds.Feature.Data.Affiliates.Showroom.TemplateId}"
                ]
              ) {
                results {
                  ... on Showroom {
                    showroomName {
                      value
                    }
                    addressLine1 {
                      value
                    }
                    addressLine2 {
                      value
                    }
                    city {
                      value
                    }
                    state {
                      targetItem {
                        id
                        ... on State {
                          abbreviation {
                            value
                          }
                          fullName {
                            value
                          }
                        }
                      }
                    }
                    postalCode {
                      value
                    }
                    latitude {
                      numberValue
                    }
                    longitude {
                      numberValue
                    }
                    locationPhoneNumber {
                      value
                    }
                    hours {
                      value
                    }
                    showroomPage {
                      anchor
                      className
                      linkType
                      queryString
                      text
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
  affiliateOffersbyAffiliateId: `query GetAffiliateOfferQuery($affiliateId: String) {
    affiliateOfferQuery: search(
      first: 1
      where: {
        AND: [
          {
            name: "_path"
            value: "${SitecoreIds.Content.RenewalByAndersen.Global.AffiliatesDataFolder.ItemId}"
            operator: CONTAINS
          }
          {
            name: "_templates"
            value: "${SitecoreIds.Feature.Data.Affiliates.Affiliate.TemplateId}"
            operator: CONTAINS
          }
          { name: "affiliateId", value: $affiliateId, operator: EQ }
        ]
      }
    ) {
      results {
        offers: children(
          includeTemplateIDs: ["${SitecoreIds.Feature.Data.Affiliates.AffiliateOffersFolder.TemplateId}"]
        ) {
          results {
            hasChildren
            children(includeTemplateIDs: ["${SitecoreIds.Feature.Data.Affiliates.Offers.TemplateId}"]) {
              results {
                ... on Offer {
                  name
                  headlineText: headline {
                    value
                  }
                  subHeadlineText: subheadline {
                    value
                  }
                  link {
                    ctaText: text
                    anchor
                    className
                    queryString
                    ctaUrl: url
                  }
                  offerStartDate: startDate {
                    value
                  }
                  offerEndDate: endDate {
                    value
                  }
                 offerDetails: details {
                    value
                  }
                  offerType {
                    value
                  }
                  image {
                    value
                  }
                  legalDisclaimer: disclaimer {
                    value
                  }
                  expirationNoticeSent {
                    value
                  }
                  useDemoNoSale {
                    value
                  }
                  thirtyDayOfferDetails {
                    value
                  }
                  sixtyDayOfferDetails {
                    value
                  }
                  ninetyDayOfferDetails {
                    value
                  }
                  licenseNumberDisclosure {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
};
