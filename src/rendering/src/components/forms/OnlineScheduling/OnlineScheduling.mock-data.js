const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'OnlineScheduling',
  },
  uid: "d277c90d-ec17-4420-98f7-46734f41340a",
  componentName: "OnlineScheduling",
  dataSource: "{3F53969C-7227-4DF6-A910-FB6921BC148E}",
  fields: {
    formName: {
      value: "Online Scheduling"
    },
    inputPadding: {
      id: "7a30ff50-3622-4b33-915c-750bc7e4a9bb",
      url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/input-padding/standard",
      name: "Standard",
      displayName: "Standard",
      fields: {
        Value: {
          value: "standard"
        }
      },
      templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
      templateName: "Enum"
    },
    componentSpacing: null,
    sectionId: {
      value: ""
    },
    eventName: {
      value: ""
    },
    eventType: {
      value: ""
    },
    eventZone: {
      value: ""
    },
    children: [
      {
        id: "3222770f-dfa4-4ed5-80b7-64f2b3006b65",
        displayName: "Property Owner",
        name: "Property Owner",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/property-owner",
        fields: {
          includeInSteps: {
            value: true
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "d29e55bc-41fa-4f31-a428-546cf73cec82",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/property-owner/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "To continue to schedule your appointment online, tell us a little more about your project."
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "52995195-5cb2-4e49-acc9-1942699fee80",
              displayName: "PropertyOwner",
              name: "PropertyOwner",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/property-owner/propertyowner",
              fields: {
                buttonsPerRows: {
                  id: "cd642d54-311c-472a-91c5-edefe6343513",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/2",
                  name: "2",
                  displayName: "2",
                  fields: {
                    Value: {
                      value: "2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "400cafec-db48-4850-b443-058246144412",
                  url: "/data/forms/online-scheduling/property-owner/propertyowner/tiles",
                  name: "Tiles",
                  displayName: "Tiles",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "03b75c42-ca5d-49c9-9ee7-9317c14ed1da",
                      url: "/data/forms/online-scheduling/property-owner/propertyowner/tiles/yes",
                      name: "Yes",
                      displayName: "Yes",
                      fields: {
                        value: {
                          value: "Yes"
                        },
                        title: {
                          value: "Yes"
                        }
                      }
                    },
                    {
                      id: "7f1bf522-23f4-4135-bda5-6054ab473a67",
                      url: "/data/forms/online-scheduling/property-owner/propertyowner/tiles/no",
                      name: "No",
                      displayName: "No",
                      fields: {
                        value: {
                          value: "No"
                        },
                        title: {
                          value: "No"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Are you the owner of the property?"
                },
                subLabel: {
                  value: "(please select one)"
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: "Only the property owner(s) may sign contracts for services"
                },
                width: {
                  id: "0266b091-d20b-4ad9-9d41-264c534be485",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-4-width",
                  name: "1-4 Width",
                  displayName: "1/4 Width",
                  fields: {
                    Value: {
                      value: "3"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-propertyowner"
                },
                valueProviders: [],
                children: [
                  {
                    id: "400cafec-db48-4850-b443-058246144412",
                    displayName: "Tiles",
                    name: "Tiles",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/property-owner/propertyowner/tiles",
                    fields: {
                      children: [
                        {
                          id: "03b75c42-ca5d-49c9-9ee7-9317c14ed1da",
                          displayName: "Yes",
                          name: "Yes",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/property-owner/propertyowner/tiles/yes",
                          fields: {
                            value: {
                              value: "Yes"
                            },
                            title: {
                              value: "Yes"
                            }
                          }
                        },
                        {
                          id: "7f1bf522-23f4-4135-bda5-6054ab473a67",
                          displayName: "No",
                          name: "No",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/property-owner/propertyowner/tiles/no",
                          fields: {
                            value: {
                              value: "No"
                            },
                            title: {
                              value: "No"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "f02759cf-d49a-4899-9f8a-3d4b3f78240a",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/property-owner/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "19230455-4d4e-448d-9a93-e77286f307f6",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/property-owner/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "7046ed6d-16a1-4714-a3c1-7341efe8b101",
        displayName: "Other Household Member",
        name: "Other Household Member",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/other-household-member",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "6c5938ab-5295-4fe4-a0b6-fcb0c6cea92a",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/other-household-member/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "If there is another member of your household that may join us at the visit, please list their name here:"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "a377f64d-7e43-4609-b9ef-76f9f7bd4316",
              displayName: "Why do we need this information",
              name: "Why do we need this information",
              templateId: "1e258863-055b-4c0d-b775-59541b0a90fd",
              templateName: "Description",
              url: "/data/forms/online-scheduling/other-household-member/why-do-we-need-this-information",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                body: {
                  value: "<em><span style=\"text-decoration: underline;\">Why do we need this information?</span></em>"
                },
                children: []
              }
            },
            {
              id: "cb57ea52-aa16-4db8-8821-d37aa7f037d7",
              displayName: "SpouseFirstName",
              name: "SpouseFirstName",
              templateId: "4fd88841-d725-4815-8b03-6ea12c956c18",
              templateName: "Short Text",
              url: "/data/forms/online-scheduling/other-household-member/spousefirstname",
              fields: {
                maxLength: {
                  value: null
                },
                minLength: {
                  value: null
                },
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: "First Name"
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: ""
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "spousefirstname"
                },
                children: []
              }
            },
            {
              id: "b65453cd-364c-40e4-9f72-5d87d96b6e10",
              displayName: "SpouseLastName",
              name: "SpouseLastName",
              templateId: "4fd88841-d725-4815-8b03-6ea12c956c18",
              templateName: "Short Text",
              url: "/data/forms/online-scheduling/other-household-member/spouselastname",
              fields: {
                maxLength: {
                  value: null
                },
                minLength: {
                  value: null
                },
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: "Last Name"
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: ""
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "spouselastname"
                },
                children: []
              }
            },
            {
              id: "d8cef427-5d2c-405c-85c7-1b474cf1588e",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/other-household-member/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "3e170bca-4a63-4d76-ac6e-d416f4d0c957",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/other-household-member/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "5b853c4c-c335-4601-a52b-e851dfca9c06",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/other-household-member/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "3bd771f0-5f43-4e71-861b-9126b69e2129",
        displayName: "How Can We Help You",
        name: "How Can We Help You",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/how-can-we-help-you",
        fields: {
          includeInSteps: {
            value: true
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "f04fb628-8bc2-4c32-a585-e3bcbc78c588",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/how-can-we-help-you/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "How can we help you?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "8106506f-c78e-43ec-8c71-62f0fe69f98d",
              displayName: "How can we help you",
              name: "How can we help you",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you",
              fields: {
                buttonsPerRows: {
                  id: "cd642d54-311c-472a-91c5-edefe6343513",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/2",
                  name: "2",
                  displayName: "2",
                  fields: {
                    Value: {
                      value: "2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "355529d6-5722-48cb-8a02-ec356f5263d8",
                  url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you/tiles",
                  name: "Tiles",
                  displayName: "Tiles",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "759be1f6-fe35-4108-91f5-708b3b44d843",
                      url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you/tiles/window-door-replacement",
                      name: "Window Door Replacement",
                      displayName: "Window Door Replacement",
                      fields: {
                        value: {
                          value: "windowdoorreplacement"
                        },
                        title: {
                          value: "Window/Door Replacement"
                        }
                      }
                    },
                    {
                      id: "5a7e39b2-afd4-4140-bda3-8129bdacf427",
                      url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you/tiles/service-and-repair",
                      name: "Service and Repair",
                      displayName: "Service and Repair",
                      fields: {
                        value: {
                          value: "serviceandrepair"
                        },
                        title: {
                          value: "Service & Repair"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "How can we help you?"
                },
                subLabel: {
                  value: "(please select one)"
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "howcanwehelpyou"
                },
                valueProviders: [],
                children: [
                  {
                    id: "355529d6-5722-48cb-8a02-ec356f5263d8",
                    displayName: "Tiles",
                    name: "Tiles",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you/tiles",
                    fields: {
                      children: [
                        {
                          id: "759be1f6-fe35-4108-91f5-708b3b44d843",
                          displayName: "Window Door Replacement",
                          name: "Window Door Replacement",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you/tiles/window-door-replacement",
                          fields: {
                            value: {
                              value: "windowdoorreplacement"
                            },
                            title: {
                              value: "Window/Door Replacement"
                            }
                          }
                        },
                        {
                          id: "5a7e39b2-afd4-4140-bda3-8129bdacf427",
                          displayName: "Service and Repair",
                          name: "Service and Repair",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/how-can-we-help-you/how-can-we-help-you/tiles/service-and-repair",
                          fields: {
                            value: {
                              value: "serviceandrepair"
                            },
                            title: {
                              value: "Service & Repair"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "c33e1f37-93ab-41c8-812c-313e8c0ea600",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/how-can-we-help-you/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: null,
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous"
                },
                children: []
              }
            },
            {
              id: "4ef1ceac-0729-4230-8993-f5c45bd7c121",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/how-can-we-help-you/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "b98f662a-526e-4a76-a706-3386ed156aed",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/how-can-we-help-you/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "602f9dcf-368b-48d4-868a-b3ff59f83cad",
        displayName: "Property Address",
        name: "Property Address",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/property-address",
        fields: {
          includeInSteps: {
            value: true
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "27aa53ce-816a-4965-a62c-66f6012d13a1",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/property-address/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "Property Address"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "6bb0f539-9c2c-4eb6-9112-e3f3fb9b420a",
              displayName: "Description",
              name: "Description",
              templateId: "1e258863-055b-4c0d-b775-59541b0a90fd",
              templateName: "Description",
              url: "/data/forms/online-scheduling/property-address/description",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                body: {
                  value: "<p>(please complete any missing information)</p>\n<p>&nbsp;</p>"
                },
                children: []
              }
            },
            {
              id: "1b6136a2-f023-43ec-b4bd-a8bb0438b43e",
              displayName: "Address1",
              name: "Address1",
              templateId: "4fd88841-d725-4815-8b03-6ea12c956c18",
              templateName: "Short Text",
              url: "/data/forms/online-scheduling/property-address/address1",
              fields: {
                maxLength: {
                  value: null
                },
                minLength: {
                  value: null
                },
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: ""
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: "Street Address"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "address1"
                },
                children: []
              }
            },
            {
              id: "9f95d7cf-5128-417f-aac8-d84d74a73384",
              displayName: "Address2",
              name: "Address2",
              templateId: "4fd88841-d725-4815-8b03-6ea12c956c18",
              templateName: "Short Text",
              url: "/data/forms/online-scheduling/property-address/address2",
              fields: {
                maxLength: {
                  value: null
                },
                minLength: {
                  value: null
                },
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: ""
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: "Unit"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "address2"
                },
                children: []
              }
            },
            {
              id: "7af89146-4808-40e3-86d3-95e6c652c955",
              displayName: "City",
              name: "City",
              templateId: "4fd88841-d725-4815-8b03-6ea12c956c18",
              templateName: "Short Text",
              url: "/data/forms/online-scheduling/property-address/city",
              fields: {
                maxLength: {
                  value: null
                },
                minLength: {
                  value: null
                },
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: ""
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: "City"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "city"
                },
                children: []
              }
            },
            {
              id: "727950f9-2e12-48e0-8abc-c92c8595fa9a",
              displayName: "State",
              name: "State",
              templateId: "1107f99a-cc75-44ce-be55-8318199d91bd",
              templateName: "Dropdown",
              url: "/data/forms/online-scheduling/property-address/state",
              fields: {
                defaultValue: null,
                defaultDisplay: {
                  value: "Select State"
                },
                showDefaultDisplay: {
                  value: true
                },
                datasource: {
                  id: "66f692ef-ab7b-4423-931f-35558daf9150",
                  url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states",
                  name: "States",
                  displayName: "States",
                  fields: {},
                  templateId: "a87a00b1-e6db-45ab-8b54-636fec3b5523",
                  templateName: "Folder",
                  children: [
                    {
                      id: "d6f05be5-2c9f-4c05-85ee-82070467366d",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/british-columbia",
                      name: "British Columbia",
                      displayName: "British Columbia",
                      fields: {
                        Abbreviation: {
                          value: "BC"
                        },
                        FullName: {
                          value: "British Columbia"
                        }
                      }
                    },
                    {
                      id: "f3ac3e0d-aadf-42ee-b0a9-b2cb5e52f9e1",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/ontario",
                      name: "Ontario",
                      displayName: "Ontario",
                      fields: {
                        Abbreviation: {
                          value: "ON"
                        },
                        FullName: {
                          value: "Ontario"
                        }
                      }
                    },
                    {
                      id: "017285fe-bab8-4eb9-ad7e-629282245f9e",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/alabama",
                      name: "Alabama",
                      displayName: "Alabama",
                      fields: {
                        Abbreviation: {
                          value: "AL"
                        },
                        FullName: {
                          value: "Alabama"
                        }
                      }
                    },
                    {
                      id: "edb07662-34c3-4556-ba79-175cbccb9f29",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/alaska",
                      name: "Alaska",
                      displayName: "Alaska",
                      fields: {
                        Abbreviation: {
                          value: "AK"
                        },
                        FullName: {
                          value: "Alaska"
                        }
                      }
                    },
                    {
                      id: "c15adea6-c01f-4da6-9bf8-16c3721cb8a8",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/arizona",
                      name: "Arizona",
                      displayName: "Arizona",
                      fields: {
                        Abbreviation: {
                          value: "AZ"
                        },
                        FullName: {
                          value: "Arizona"
                        }
                      }
                    },
                    {
                      id: "3f0a0d4d-c19c-4e83-932b-062056f1d409",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/arkansas",
                      name: "Arkansas",
                      displayName: "Arkansas",
                      fields: {
                        Abbreviation: {
                          value: "AR"
                        },
                        FullName: {
                          value: "Arkansas"
                        }
                      }
                    },
                    {
                      id: "75e81bbc-2147-49e9-9759-5b0339228a2c",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/california",
                      name: "California",
                      displayName: "California",
                      fields: {
                        Abbreviation: {
                          value: "CA"
                        },
                        FullName: {
                          value: "California"
                        }
                      }
                    },
                    {
                      id: "db633179-b14f-4bf7-a2c0-300467eece6f",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/colorado",
                      name: "Colorado",
                      displayName: "Colorado",
                      fields: {
                        Abbreviation: {
                          value: "CO"
                        },
                        FullName: {
                          value: "Colorado"
                        }
                      }
                    },
                    {
                      id: "0a33c2e3-7084-4bf0-a9c5-29809c772efe",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/connecticut",
                      name: "Connecticut",
                      displayName: "Connecticut",
                      fields: {
                        Abbreviation: {
                          value: "CT"
                        },
                        FullName: {
                          value: "Connecticut"
                        }
                      }
                    },
                    {
                      id: "bc7f0593-ff00-4fa2-8434-b6d6cf9b4152",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/delaware",
                      name: "Delaware",
                      displayName: "Delaware",
                      fields: {
                        Abbreviation: {
                          value: "DE"
                        },
                        FullName: {
                          value: "Delaware"
                        }
                      }
                    },
                    {
                      id: "a9e18f80-2841-418d-bb53-f7ee0819206f",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/florida",
                      name: "Florida",
                      displayName: "Florida",
                      fields: {
                        Abbreviation: {
                          value: "FL"
                        },
                        FullName: {
                          value: "Florida"
                        }
                      }
                    },
                    {
                      id: "a9f8a835-7107-41b9-bf30-310c94404ba9",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/georgia",
                      name: "Georgia",
                      displayName: "Georgia",
                      fields: {
                        Abbreviation: {
                          value: "GA"
                        },
                        FullName: {
                          value: "Georgia"
                        }
                      }
                    },
                    {
                      id: "8b76e7fd-3d58-41d8-bbfa-b00d6c6ffdf6",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/hawaii",
                      name: "Hawaii",
                      displayName: "Hawaii",
                      fields: {
                        Abbreviation: {
                          value: "HI"
                        },
                        FullName: {
                          value: "Hawaii"
                        }
                      }
                    },
                    {
                      id: "9f7a4c52-1ae3-493f-9b5e-3cb977f38894",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/idaho",
                      name: "Idaho",
                      displayName: "Idaho",
                      fields: {
                        Abbreviation: {
                          value: "ID"
                        },
                        FullName: {
                          value: "Idaho"
                        }
                      }
                    },
                    {
                      id: "1363c2f3-6ffb-417e-b855-b1d2334ec196",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/illinois",
                      name: "Illinois",
                      displayName: "Illinois",
                      fields: {
                        Abbreviation: {
                          value: "IL"
                        },
                        FullName: {
                          value: "Illinois"
                        }
                      }
                    },
                    {
                      id: "a11525af-1eb1-40a1-9f1d-83cdb15c40a2",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/indiana",
                      name: "Indiana",
                      displayName: "Indiana",
                      fields: {
                        Abbreviation: {
                          value: "IN"
                        },
                        FullName: {
                          value: "Indiana"
                        }
                      }
                    },
                    {
                      id: "fb1cbeaf-e2c9-4009-a5f9-5f3d5c49bf24",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/iowa",
                      name: "Iowa",
                      displayName: "Iowa",
                      fields: {
                        Abbreviation: {
                          value: "IA"
                        },
                        FullName: {
                          value: "Iowa"
                        }
                      }
                    },
                    {
                      id: "6a0bf456-5ad1-46e4-a760-c29b06552615",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/kansas",
                      name: "Kansas",
                      displayName: "Kansas",
                      fields: {
                        Abbreviation: {
                          value: "KS"
                        },
                        FullName: {
                          value: "Kansas"
                        }
                      }
                    },
                    {
                      id: "1eff85c3-7389-47a7-87d0-6397b74f9063",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/kentucky",
                      name: "Kentucky",
                      displayName: "Kentucky",
                      fields: {
                        Abbreviation: {
                          value: "KY"
                        },
                        FullName: {
                          value: "Kentucky"
                        }
                      }
                    },
                    {
                      id: "c1cf349e-5bfd-42d6-a6d8-624aa10535a1",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/louisiana",
                      name: "Louisiana",
                      displayName: "Louisiana",
                      fields: {
                        Abbreviation: {
                          value: "LA"
                        },
                        FullName: {
                          value: "Louisiana"
                        }
                      }
                    },
                    {
                      id: "d1a5d987-f7d3-4b71-a6b8-58df768da628",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/maine",
                      name: "Maine",
                      displayName: "Maine",
                      fields: {
                        Abbreviation: {
                          value: "ME"
                        },
                        FullName: {
                          value: "Maine"
                        }
                      }
                    },
                    {
                      id: "975a4d79-9619-4490-a3e9-8480bd357681",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/maryland",
                      name: "Maryland",
                      displayName: "Maryland",
                      fields: {
                        Abbreviation: {
                          value: "MD"
                        },
                        FullName: {
                          value: "Maryland"
                        }
                      }
                    },
                    {
                      id: "e1374912-309a-4a37-ab74-ff7b39020610",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/massachusetts",
                      name: "Massachusetts",
                      displayName: "Massachusetts",
                      fields: {
                        Abbreviation: {
                          value: "MA"
                        },
                        FullName: {
                          value: "Massachusetts"
                        }
                      }
                    },
                    {
                      id: "85ee5357-9197-4799-9355-622dca429f15",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/michigan",
                      name: "Michigan",
                      displayName: "Michigan",
                      fields: {
                        Abbreviation: {
                          value: "MI"
                        },
                        FullName: {
                          value: "Michigan"
                        }
                      }
                    },
                    {
                      id: "24dd38a5-1e57-4aef-bdd1-6e0530af971a",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/minnesota",
                      name: "Minnesota",
                      displayName: "Minnesota",
                      fields: {
                        Abbreviation: {
                          value: "MN"
                        },
                        FullName: {
                          value: "Minnesota"
                        }
                      }
                    },
                    {
                      id: "d908f169-302f-4d2b-b66d-1fe00c825575",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/mississippi",
                      name: "Mississippi",
                      displayName: "Mississippi",
                      fields: {
                        Abbreviation: {
                          value: "MS"
                        },
                        FullName: {
                          value: "Mississippi"
                        }
                      }
                    },
                    {
                      id: "757ab1bd-0a27-4644-ab22-dec64b1f2208",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/missouri",
                      name: "Missouri",
                      displayName: "Missouri",
                      fields: {
                        Abbreviation: {
                          value: "MO"
                        },
                        FullName: {
                          value: "Missouri"
                        }
                      }
                    },
                    {
                      id: "222a7158-38c6-4320-8899-e35034fa8f3c",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/montana",
                      name: "Montana",
                      displayName: "Montana",
                      fields: {
                        Abbreviation: {
                          value: "MT"
                        },
                        FullName: {
                          value: "Montana"
                        }
                      }
                    },
                    {
                      id: "010b606b-e931-48e3-a825-9a0d7b57ea43",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/nebraska",
                      name: "Nebraska",
                      displayName: "Nebraska",
                      fields: {
                        Abbreviation: {
                          value: "NE"
                        },
                        FullName: {
                          value: "Nebraska"
                        }
                      }
                    },
                    {
                      id: "bfb9925f-1a3d-4cd5-9a0a-76a106da923a",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/nevada",
                      name: "Nevada",
                      displayName: "Nevada",
                      fields: {
                        Abbreviation: {
                          value: "NV"
                        },
                        FullName: {
                          value: "Nevada"
                        }
                      }
                    },
                    {
                      id: "a84d570d-a4b3-48a6-b488-2ae4aa0b4816",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/new-hampshire",
                      name: "New Hampshire",
                      displayName: "New Hampshire",
                      fields: {
                        Abbreviation: {
                          value: "NH"
                        },
                        FullName: {
                          value: "New Hampshire"
                        }
                      }
                    },
                    {
                      id: "acc2a314-b8b3-46b8-bc74-7e9bc928c192",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/new-jersey",
                      name: "New Jersey",
                      displayName: "New Jersey",
                      fields: {
                        Abbreviation: {
                          value: "NJ"
                        },
                        FullName: {
                          value: "New Jersey"
                        }
                      }
                    },
                    {
                      id: "d1864b9a-2417-4ed2-b813-08201c9dd11e",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/new-mexico",
                      name: "New Mexico",
                      displayName: "New Mexico",
                      fields: {
                        Abbreviation: {
                          value: "NM"
                        },
                        FullName: {
                          value: "New Mexico"
                        }
                      }
                    },
                    {
                      id: "5f436b57-8d1b-4a3f-8aff-61444ddebf74",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/new-york",
                      name: "New York",
                      displayName: "New York",
                      fields: {
                        Abbreviation: {
                          value: "NY"
                        },
                        FullName: {
                          value: "New York"
                        }
                      }
                    },
                    {
                      id: "abdf414b-2000-452a-8932-3227126b1956",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/north-carolina",
                      name: "North Carolina",
                      displayName: "North Carolina",
                      fields: {
                        Abbreviation: {
                          value: "NC"
                        },
                        FullName: {
                          value: "North Carolina"
                        }
                      }
                    },
                    {
                      id: "bb110dc0-654f-4f71-b9fe-a388c4b03f3e",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/north-dakota",
                      name: "North Dakota",
                      displayName: "North Dakota",
                      fields: {
                        Abbreviation: {
                          value: "ND"
                        },
                        FullName: {
                          value: "North Dakota"
                        }
                      }
                    },
                    {
                      id: "f845e120-a4ff-4f8d-919e-13fb066ea544",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/ohio",
                      name: "Ohio",
                      displayName: "Ohio",
                      fields: {
                        Abbreviation: {
                          value: "OH"
                        },
                        FullName: {
                          value: "Ohio"
                        }
                      }
                    },
                    {
                      id: "a8ab447d-145e-4e22-ae5a-b8ea2a01cda9",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/oklahoma",
                      name: "Oklahoma",
                      displayName: "Oklahoma",
                      fields: {
                        Abbreviation: {
                          value: "OK"
                        },
                        FullName: {
                          value: "Oklahoma"
                        }
                      }
                    },
                    {
                      id: "9e38ac14-61c2-4c7c-bee9-f4bf0676bf7a",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/oregon",
                      name: "Oregon",
                      displayName: "Oregon",
                      fields: {
                        Abbreviation: {
                          value: "OR"
                        },
                        FullName: {
                          value: "Oregon"
                        }
                      }
                    },
                    {
                      id: "9a199acc-eb8e-4643-82a8-7704afa66838",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/pennsylvania",
                      name: "Pennsylvania",
                      displayName: "Pennsylvania",
                      fields: {
                        Abbreviation: {
                          value: "PA"
                        },
                        FullName: {
                          value: "Pennsylvania"
                        }
                      }
                    },
                    {
                      id: "fb8959f8-7aa6-45fd-995c-a5a9db4c7410",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/rhode-island",
                      name: "Rhode Island",
                      displayName: "Rhode Island",
                      fields: {
                        Abbreviation: {
                          value: "RI"
                        },
                        FullName: {
                          value: "Rhode Island"
                        }
                      }
                    },
                    {
                      id: "d47f92e7-0629-45e2-ab61-c0cadca98196",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/south-carolina",
                      name: "South Carolina",
                      displayName: "South Carolina",
                      fields: {
                        Abbreviation: {
                          value: "SC"
                        },
                        FullName: {
                          value: "South Carolina"
                        }
                      }
                    },
                    {
                      id: "35781765-d2e8-45e7-b6d9-3babefcdb33b",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/south-dakota",
                      name: "South Dakota",
                      displayName: "South Dakota",
                      fields: {
                        Abbreviation: {
                          value: "SD"
                        },
                        FullName: {
                          value: "South Dakota"
                        }
                      }
                    },
                    {
                      id: "b58df7c5-f71c-48fd-9bc3-43a68bc7c94c",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/tennessee",
                      name: "Tennessee",
                      displayName: "Tennessee",
                      fields: {
                        Abbreviation: {
                          value: "TN"
                        },
                        FullName: {
                          value: "Tennessee"
                        }
                      }
                    },
                    {
                      id: "73f7b949-ef20-4c2a-a4f9-4b6864eee940",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/texas",
                      name: "Texas",
                      displayName: "Texas",
                      fields: {
                        Abbreviation: {
                          value: "TX"
                        },
                        FullName: {
                          value: "Texas"
                        }
                      }
                    },
                    {
                      id: "f15f4e9f-6f50-4d3c-8bc9-0857f5da89bb",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/utah",
                      name: "Utah",
                      displayName: "Utah",
                      fields: {
                        Abbreviation: {
                          value: "UT"
                        },
                        FullName: {
                          value: "Utah"
                        }
                      }
                    },
                    {
                      id: "dfa97131-09a0-42a2-ad1b-9612f6945595",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/vermont",
                      name: "Vermont",
                      displayName: "Vermont",
                      fields: {
                        Abbreviation: {
                          value: "VT"
                        },
                        FullName: {
                          value: "Vermont"
                        }
                      }
                    },
                    {
                      id: "c6f0ee8c-5100-46b5-9645-c086f028bfb1",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/virginia",
                      name: "Virginia",
                      displayName: "Virginia",
                      fields: {
                        Abbreviation: {
                          value: "VA"
                        },
                        FullName: {
                          value: "Virginia"
                        }
                      }
                    },
                    {
                      id: "ba5911aa-6013-45cd-9617-56e0382fccc7",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/washington",
                      name: "Washington",
                      displayName: "Washington",
                      fields: {
                        Abbreviation: {
                          value: "WA"
                        },
                        FullName: {
                          value: "Washington"
                        }
                      }
                    },
                    {
                      id: "674ad001-1e5b-4759-bfe5-480eb026d074",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/washington-dc",
                      name: "Washington DC",
                      displayName: "Washington DC",
                      fields: {
                        Abbreviation: {
                          value: ""
                        },
                        FullName: {
                          value: "Washington DC"
                        }
                      }
                    },
                    {
                      id: "6993426d-97e3-44be-8878-863844fb96fc",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/west-virginia",
                      name: "West Virginia",
                      displayName: "West Virginia",
                      fields: {
                        Abbreviation: {
                          value: "WV"
                        },
                        FullName: {
                          value: "West Virginia"
                        }
                      }
                    },
                    {
                      id: "ac9bfd20-a3fa-44d6-a711-039a6941b72e",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/wisconsin",
                      name: "Wisconsin",
                      displayName: "Wisconsin",
                      fields: {
                        Abbreviation: {
                          value: "WI"
                        },
                        FullName: {
                          value: "Wisconsin"
                        }
                      }
                    },
                    {
                      id: "4e5e4bd0-9842-43f5-b192-db0154fdc43e",
                      url: "/sitecore/content/andersencorporation/renewalbyandersen/global/data-sources/geography/states/wyoming",
                      name: "Wyoming",
                      displayName: "Wyoming",
                      fields: {
                        Abbreviation: {
                          value: "WY"
                        },
                        FullName: {
                          value: "Wyoming"
                        }
                      }
                    }
                  ]
                },
                displayFieldName: {
                  value: "FullName"
                },
                valueFieldName: {
                  value: "Abbreviation"
                },
                label: {
                  value: ""
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                width: {
                  id: "7ac71bf2-2104-4814-836c-5a9bab40212a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-6-width",
                  name: "1-6 Width",
                  displayName: "1/6 Width",
                  fields: {
                    Value: {
                      value: "2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "state"
                },
                valueProviders: [],
                children: []
              }
            },
            {
              id: "52af4280-e012-400d-9048-cf62b085f9f0",
              displayName: "Zip",
              name: "Zip",
              templateId: "353ea57b-c16e-4079-92db-f169461acd5e",
              templateName: "ZIP Code",
              url: "/data/forms/online-scheduling/property-address/zip",
              fields: {
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: ""
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: "Zipcode"
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "zip"
                },
                children: []
              }
            },
            {
              id: "5c534cda-1dd2-432d-b54b-79563d908738",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/property-address/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: null,
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous"
                },
                children: []
              }
            },
            {
              id: "28cc45b2-3513-4a8b-88e0-3f6e0dd9c9a7",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/property-address/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "cc884d01-869a-4611-a78b-5f735665eb55",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/property-address/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "a0e0dfa7-af78-4072-a778-90629218c48d",
        displayName: "What type of property is your home",
        name: "What type of property is your home",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/what-type-of-property-is-your-home",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "70333526-9032-420e-8ecc-988aa38add5b",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "What type of property is your home?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "6a7a004a-bcf0-465a-b045-ea3ea6a1fa9a",
              displayName: "Why do we need this information",
              name: "Why do we need this information",
              templateId: "1e258863-055b-4c0d-b775-59541b0a90fd",
              templateName: "Description",
              url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/why-do-we-need-this-information",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                body: {
                  value: "<em><span style=\"text-decoration: underline;\">Why do we need this information?</span></em>"
                },
                children: []
              }
            },
            {
              id: "230a0b9c-423b-4c20-8130-08662aeea106",
              displayName: "What type of property",
              name: "What type of property",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property",
              fields: {
                buttonsPerRows: {
                  id: "aff7ee75-b444-4126-bc96-ee871b128a4f",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/4",
                  name: "4",
                  displayName: "4",
                  fields: {
                    Value: {
                      value: "4"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "8851b8b1-0408-44de-bf6c-c90f35f507e8",
                  url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types",
                  name: "Property Types",
                  displayName: "Property Types",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "157528f7-07bf-4536-b7a4-f4cf9cc851e9",
                      url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/single-family",
                      name: "Single Family",
                      displayName: "Single Family",
                      fields: {
                        value: {
                          value: "Single Family"
                        },
                        title: {
                          value: "Single Family"
                        }
                      }
                    },
                    {
                      id: "0729aa9f-5eb4-4896-9767-a36b2c322f09",
                      url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/townhome-condominium",
                      name: "Townhome Condominium",
                      displayName: "Townhome Condominium",
                      fields: {
                        value: {
                          value: "Townhome/Condominium"
                        },
                        title: {
                          value: "Townhome/Condominium"
                        }
                      }
                    },
                    {
                      id: "10898730-f05c-44fa-8959-b8838ce7fe96",
                      url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/mobile-manufactured",
                      name: "Mobile Manufactured",
                      displayName: "Mobile Manufactured",
                      fields: {
                        value: {
                          value: "Mobile/Manufactured"
                        },
                        title: {
                          value: "Mobile/Manufactured"
                        }
                      }
                    },
                    {
                      id: "ea278a5a-80b0-4ca1-9282-941db1c1a31e",
                      url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/other",
                      name: "Other",
                      displayName: "Other",
                      fields: {
                        value: {
                          value: "Other"
                        },
                        title: {
                          value: "Other"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "What type of property is your home?"
                },
                subLabel: {
                  value: "(select one)"
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-propertytype"
                },
                valueProviders: [],
                children: [
                  {
                    id: "8851b8b1-0408-44de-bf6c-c90f35f507e8",
                    displayName: "Property Types",
                    name: "Property Types",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types",
                    fields: {
                      children: [
                        {
                          id: "157528f7-07bf-4536-b7a4-f4cf9cc851e9",
                          displayName: "Single Family",
                          name: "Single Family",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/single-family",
                          fields: {
                            value: {
                              value: "Single Family"
                            },
                            title: {
                              value: "Single Family"
                            }
                          }
                        },
                        {
                          id: "0729aa9f-5eb4-4896-9767-a36b2c322f09",
                          displayName: "Townhome Condominium",
                          name: "Townhome Condominium",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/townhome-condominium",
                          fields: {
                            value: {
                              value: "Townhome/Condominium"
                            },
                            title: {
                              value: "Townhome/Condominium"
                            }
                          }
                        },
                        {
                          id: "10898730-f05c-44fa-8959-b8838ce7fe96",
                          displayName: "Mobile Manufactured",
                          name: "Mobile Manufactured",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/mobile-manufactured",
                          fields: {
                            value: {
                              value: "Mobile/Manufactured"
                            },
                            title: {
                              value: "Mobile/Manufactured"
                            }
                          }
                        },
                        {
                          id: "ea278a5a-80b0-4ca1-9282-941db1c1a31e",
                          displayName: "Other",
                          name: "Other",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/what-type-of-property/property-types/other",
                          fields: {
                            value: {
                              value: "Other"
                            },
                            title: {
                              value: "Other"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "b406720c-f7c1-4faa-b4cc-0f58230e3ef8",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "e431c9f4-df4a-4582-9f5b-7aba440ad4be",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "a24f58e2-55cf-4aee-bf51-e118f7ff1bed",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/what-type-of-property-is-your-home/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "900748f3-0f6f-4a07-9d0c-cf45ec6308ba",
        displayName: "How Many Window or Doors",
        name: "How Many Window or Doors",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/how-many-window-or-doors",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "b9e616dd-7d0c-4d52-99ed-e2c242ef3ec5",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "Approximately how many windows/doors are you looking to replace?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "be2bac2c-2b59-4e73-9f65-1471b002298b",
              displayName: "Why do we need this information",
              name: "Why do we need this information",
              templateId: "1e258863-055b-4c0d-b775-59541b0a90fd",
              templateName: "Description",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/why-do-we-need-this-information",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                body: {
                  value: "<em><span style=\"text-decoration: underline;\">Why do we need this information?</span></em>"
                },
                children: []
              }
            },
            {
              id: "e5d05a09-9c3c-4ffc-ba18-46f5cf5ba3e8",
              displayName: "Windows",
              name: "Windows",
              templateId: "78ab6aec-5df4-490d-b9fd-aecf481b3323",
              templateName: "Number",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/windows",
              fields: {
                dependsOn: {
                  id: "90052f74-4d2d-4742-a146-d9d100f1549a",
                  url: "/data/forms/online-scheduling/how-many-window-or-doors/doors",
                  name: "Doors",
                  displayName: "Doors",
                  fields: {
                    dependsOn: {
                      id: "e5d05a09-9c3c-4ffc-ba18-46f5cf5ba3e8",
                      url: "/data/forms/online-scheduling/how-many-window-or-doors/windows",
                      name: "Windows",
                      displayName: "Windows",
                      fields: {
                        maxLength: {
                          value: null
                        },
                        minLength: {
                          value: 0
                        },
                        defaultValue: {
                          value: "0"
                        },
                        label: {
                          value: "Select # of Windows"
                        },
                        validations: [],
                        tooltipImage: {
                          value: {}
                        },
                        tooltipText: {
                          value: ""
                        },
                        subLabel: {
                          value: ""
                        },
                        placeholderText: {
                          value: ""
                        },
                        width: {
                          id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                          url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                          name: "Full Width",
                          displayName: "Full Width",
                          fields: {
                            Value: {
                              value: "12"
                            }
                          },
                          templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                          templateName: "Enum"
                        },
                        fieldName: {
                          value: "windows"
                        }
                      },
                      templateId: "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                      templateName: "Number"
                    },
                    maxLength: {
                      value: null
                    },
                    minLength: {
                      value: 0
                    },
                    defaultValue: {
                      value: "0"
                    },
                    label: {
                      value: "Select # of Doors"
                    },
                    validations: [],
                    tooltipImage: {
                      value: {}
                    },
                    tooltipText: {
                      value: ""
                    },
                    subLabel: {
                      value: ""
                    },
                    placeholderText: {
                      value: ""
                    },
                    width: {
                      id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                      url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                      name: "Full Width",
                      displayName: "Full Width",
                      fields: {
                        Value: {
                          value: "12"
                        }
                      },
                      templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                      templateName: "Enum"
                    },
                    fieldName: {
                      value: "doors"
                    }
                  },
                  templateId: "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                  templateName: "Number"
                },
                maxLength: {
                  value: null
                },
                minLength: {
                  value: 0
                },
                defaultValue: {
                  value: "0"
                },
                label: {
                  value: "Select # of Windows"
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windows"
                },
                children: []
              }
            },
            {
              id: "90052f74-4d2d-4742-a146-d9d100f1549a",
              displayName: "Doors",
              name: "Doors",
              templateId: "78ab6aec-5df4-490d-b9fd-aecf481b3323",
              templateName: "Number",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/doors",
              fields: {
                dependsOn: {
                  id: "e5d05a09-9c3c-4ffc-ba18-46f5cf5ba3e8",
                  url: "/data/forms/online-scheduling/how-many-window-or-doors/windows",
                  name: "Windows",
                  displayName: "Windows",
                  fields: {
                    dependsOn: {
                      id: "90052f74-4d2d-4742-a146-d9d100f1549a",
                      url: "/data/forms/online-scheduling/how-many-window-or-doors/doors",
                      name: "Doors",
                      displayName: "Doors",
                      fields: {
                        maxLength: {
                          value: null
                        },
                        minLength: {
                          value: 0
                        },
                        defaultValue: {
                          value: "0"
                        },
                        label: {
                          value: "Select # of Doors"
                        },
                        validations: [],
                        tooltipImage: {
                          value: {}
                        },
                        tooltipText: {
                          value: ""
                        },
                        subLabel: {
                          value: ""
                        },
                        placeholderText: {
                          value: ""
                        },
                        width: {
                          id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                          url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                          name: "Full Width",
                          displayName: "Full Width",
                          fields: {
                            Value: {
                              value: "12"
                            }
                          },
                          templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                          templateName: "Enum"
                        },
                        fieldName: {
                          value: "doors"
                        }
                      },
                      templateId: "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                      templateName: "Number"
                    },
                    maxLength: {
                      value: null
                    },
                    minLength: {
                      value: 0
                    },
                    defaultValue: {
                      value: "0"
                    },
                    label: {
                      value: "Select # of Windows"
                    },
                    validations: [],
                    tooltipImage: {
                      value: {}
                    },
                    tooltipText: {
                      value: ""
                    },
                    subLabel: {
                      value: ""
                    },
                    placeholderText: {
                      value: ""
                    },
                    width: {
                      id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                      url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                      name: "Full Width",
                      displayName: "Full Width",
                      fields: {
                        Value: {
                          value: "12"
                        }
                      },
                      templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                      templateName: "Enum"
                    },
                    fieldName: {
                      value: "windows"
                    }
                  },
                  templateId: "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                  templateName: "Number"
                },
                maxLength: {
                  value: null
                },
                minLength: {
                  value: 0
                },
                defaultValue: {
                  value: "0"
                },
                label: {
                  value: "Select # of Doors"
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "doors"
                },
                children: []
              }
            },
            {
              id: "9c91e0b1-8253-40d4-9297-c24accb8d39d",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "0a688159-b68a-450f-aa90-3d0c42a4c4fe",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "f9da29e9-c986-4144-ae0e-a837ae68e6ca",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/how-many-window-or-doors/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "1d45dc2e-84f3-4a17-8983-2859ad00673f",
        displayName: "What material",
        name: "What material",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/what-material",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "95ef8c0a-ef8b-4726-bc86-df446a4649fe",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/what-material/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "What material are your current windows and/or doors?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "505c2e44-b0e6-4982-ae40-296bc7c3a8e1",
              displayName: "Materials",
              name: "Materials",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/what-material/materials",
              fields: {
                buttonsPerRows: {
                  id: "aff7ee75-b444-4126-bc96-ee871b128a4f",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/4",
                  name: "4",
                  displayName: "4",
                  fields: {
                    Value: {
                      value: "4"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "90184df2-6520-491d-af40-63a55b913561",
                  url: "/data/forms/online-scheduling/what-material/materials/material-types",
                  name: "Material Types",
                  displayName: "Material Types",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "d5cd11af-4153-4379-9833-a54635ecc7bd",
                      url: "/data/forms/online-scheduling/what-material/materials/material-types/wood",
                      name: "Wood",
                      displayName: "Wood",
                      fields: {
                        value: {
                          value: "Wood"
                        },
                        title: {
                          value: "Wood"
                        }
                      }
                    },
                    {
                      id: "b185b095-ffab-43aa-b77d-b92c627eb8d5",
                      url: "/data/forms/online-scheduling/what-material/materials/material-types/metal",
                      name: "Metal",
                      displayName: "Metal",
                      fields: {
                        value: {
                          value: "Metal"
                        },
                        title: {
                          value: "Metal"
                        }
                      }
                    },
                    {
                      id: "04ab24fd-f6ab-4b52-9aad-38754656171c",
                      url: "/data/forms/online-scheduling/what-material/materials/material-types/vinyl",
                      name: "Vinyl",
                      displayName: "Vinyl",
                      fields: {
                        value: {
                          value: "Vinyl"
                        },
                        title: {
                          value: "Vinyl"
                        }
                      }
                    },
                    {
                      id: "d27896bc-07a8-4f38-b995-a4bbc8270f3f",
                      url: "/data/forms/online-scheduling/what-material/materials/material-types/unsure",
                      name: "Unsure",
                      displayName: "Unsure",
                      fields: {
                        value: {
                          value: "Unsure"
                        },
                        title: {
                          value: "Unsure"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: ""
                },
                subLabel: {
                  value: "(select any that apply)"
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-windowmaterial"
                },
                valueProviders: [],
                children: [
                  {
                    id: "90184df2-6520-491d-af40-63a55b913561",
                    displayName: "Material Types",
                    name: "Material Types",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/what-material/materials/material-types",
                    fields: {
                      children: [
                        {
                          id: "d5cd11af-4153-4379-9833-a54635ecc7bd",
                          displayName: "Wood",
                          name: "Wood",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-material/materials/material-types/wood",
                          fields: {
                            value: {
                              value: "Wood"
                            },
                            title: {
                              value: "Wood"
                            }
                          }
                        },
                        {
                          id: "b185b095-ffab-43aa-b77d-b92c627eb8d5",
                          displayName: "Metal",
                          name: "Metal",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-material/materials/material-types/metal",
                          fields: {
                            value: {
                              value: "Metal"
                            },
                            title: {
                              value: "Metal"
                            }
                          }
                        },
                        {
                          id: "04ab24fd-f6ab-4b52-9aad-38754656171c",
                          displayName: "Vinyl",
                          name: "Vinyl",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-material/materials/material-types/vinyl",
                          fields: {
                            value: {
                              value: "Vinyl"
                            },
                            title: {
                              value: "Vinyl"
                            }
                          }
                        },
                        {
                          id: "d27896bc-07a8-4f38-b995-a4bbc8270f3f",
                          displayName: "Unsure",
                          name: "Unsure",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/what-material/materials/material-types/unsure",
                          fields: {
                            value: {
                              value: "Unsure"
                            },
                            title: {
                              value: "Unsure"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "dfa80819-884b-423f-bfa6-1513941fb1df",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/what-material/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "5a937a76-fb8a-4d1c-946d-803cfaf362cb",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/what-material/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "759a8aaf-5075-4c43-8586-7332f8c0df64",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/what-material/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "28ecf254-9ce1-40da-95e8-aef8db68a1e0",
        displayName: "Approximate Age",
        name: "Approximate Age",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/approximate-age",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "9c06e4a5-99ab-4bd5-b2c4-82547ca7f7c4",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/approximate-age/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "What is the approximate age of your windows and/or doors?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "db4cd3c9-a478-415f-aa38-0fd715994de4",
              displayName: "Approximate Age",
              name: "Approximate Age",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/approximate-age/approximate-age",
              fields: {
                buttonsPerRows: {
                  id: "aff7ee75-b444-4126-bc96-ee871b128a4f",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/4",
                  name: "4",
                  displayName: "4",
                  fields: {
                    Value: {
                      value: "4"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "ed008b03-b4df-4c8f-a8eb-946f442466eb",
                  url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages",
                  name: "Ages",
                  displayName: "Ages",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "f8d4f8dd-cc38-4265-982d-385286b7d8ab",
                      url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/under-5-years",
                      name: "Under 5 years",
                      displayName: "Under 5 years",
                      fields: {
                        value: {
                          value: "Under 5 years"
                        },
                        title: {
                          value: "Under 5 years"
                        }
                      }
                    },
                    {
                      id: "56f8d5f2-2904-41e1-8e1f-79d120f3bb1d",
                      url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/5-10-years",
                      name: "5 10 years",
                      displayName: "5 10 years",
                      fields: {
                        value: {
                          value: "5-10 years"
                        },
                        title: {
                          value: "5-10 years"
                        }
                      }
                    },
                    {
                      id: "a30d8112-06d8-49d5-9314-a179274e7edd",
                      url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/10-20-years",
                      name: "10 20 years",
                      displayName: "10 20 years",
                      fields: {
                        value: {
                          value: "10-20 years"
                        },
                        title: {
                          value: "10-20 years"
                        }
                      }
                    },
                    {
                      id: "bac0aaea-1baf-4a76-bc8d-bccd06bd87b8",
                      url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/over-20-years",
                      name: "Over 20 years",
                      displayName: "Over 20 years",
                      fields: {
                        value: {
                          value: "Over 20 years"
                        },
                        title: {
                          value: "Over 20 years"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: ""
                },
                subLabel: {
                  value: "(select one)"
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-age"
                },
                valueProviders: [],
                children: [
                  {
                    id: "ed008b03-b4df-4c8f-a8eb-946f442466eb",
                    displayName: "Ages",
                    name: "Ages",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages",
                    fields: {
                      children: [
                        {
                          id: "f8d4f8dd-cc38-4265-982d-385286b7d8ab",
                          displayName: "Under 5 years",
                          name: "Under 5 years",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/under-5-years",
                          fields: {
                            value: {
                              value: "Under 5 years"
                            },
                            title: {
                              value: "Under 5 years"
                            }
                          }
                        },
                        {
                          id: "56f8d5f2-2904-41e1-8e1f-79d120f3bb1d",
                          displayName: "5 10 years",
                          name: "5 10 years",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/5-10-years",
                          fields: {
                            value: {
                              value: "5-10 years"
                            },
                            title: {
                              value: "5-10 years"
                            }
                          }
                        },
                        {
                          id: "a30d8112-06d8-49d5-9314-a179274e7edd",
                          displayName: "10 20 years",
                          name: "10 20 years",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/10-20-years",
                          fields: {
                            value: {
                              value: "10-20 years"
                            },
                            title: {
                              value: "10-20 years"
                            }
                          }
                        },
                        {
                          id: "bac0aaea-1baf-4a76-bc8d-bccd06bd87b8",
                          displayName: "Over 20 years",
                          name: "Over 20 years",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/approximate-age/approximate-age/ages/over-20-years",
                          fields: {
                            value: {
                              value: "Over 20 years"
                            },
                            title: {
                              value: "Over 20 years"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "9360e3b8-f432-4936-96f5-9c42677c8371",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/approximate-age/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "a5040bfb-de76-4e14-845b-c8692c0b9b47",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/approximate-age/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "b7ea6680-1cf1-48a2-a837-93c42353bf2b",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/approximate-age/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "27429fa5-8839-4388-9a97-6fb8c2e6705f",
        displayName: "Window Concerns",
        name: "Window Concerns",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/window-concerns",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "5912a026-4c11-4d0d-b6dc-89f63d2b4598",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/window-concerns/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "What are your current window concers?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "4e312760-97f0-450e-a695-0ef1a0eaf91f",
              displayName: "Concerns",
              name: "Concerns",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/window-concerns/concerns",
              fields: {
                buttonsPerRows: {
                  id: "3d6c4fa4-5821-42ea-b209-9c88850dc1da",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/3",
                  name: "3",
                  displayName: "3",
                  fields: {
                    Value: {
                      value: "3"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "0c26130e-a614-43cd-a5bd-e1eca85f61d6",
                  url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types",
                  name: "Concern Types",
                  displayName: "Concern Types",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "8ffe266c-afca-43d9-9bb4-92a8f3355f33",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/hard-to-operate",
                      name: "Hard to operate",
                      displayName: "Hard to operate",
                      fields: {
                        value: {
                          value: "Hard to operate"
                        },
                        title: {
                          value: "Hard to operate"
                        }
                      }
                    },
                    {
                      id: "4444b36b-b505-40dd-8905-50621a8e0d2f",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/not-energy-efficient",
                      name: "Not energy efficient",
                      displayName: "Not energy efficient",
                      fields: {
                        value: {
                          value: "Not energy efficient"
                        },
                        title: {
                          value: "Not energy efficient"
                        }
                      }
                    },
                    {
                      id: "10b0fc31-e051-4a7b-ac42-109035b60d71",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/i-want-to-change-the-style",
                      name: "I want to change the style",
                      displayName: "I want to change the style",
                      fields: {
                        value: {
                          value: "I want to change the style"
                        },
                        title: {
                          value: "I want to change the style"
                        }
                      }
                    },
                    {
                      id: "3050d6ae-6af3-4f49-bc1a-7ac67e1e12a6",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/rotting",
                      name: "Rotting",
                      displayName: "Rotting",
                      fields: {
                        value: {
                          value: "Rotting"
                        },
                        title: {
                          value: "Rotting"
                        }
                      }
                    },
                    {
                      id: "81dcf634-f95a-40fe-bf19-9bea8faaf94c",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/warping",
                      name: "Warping",
                      displayName: "Warping",
                      fields: {
                        value: {
                          value: "Warping"
                        },
                        title: {
                          value: "Warping"
                        }
                      }
                    },
                    {
                      id: "afe0af49-f043-4e3b-a677-ac42c6e46b7b",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/fogging-condensation",
                      name: "Fogging Condensation",
                      displayName: "Fogging Condensation",
                      fields: {
                        value: {
                          value: "Fogging/Condensation"
                        },
                        title: {
                          value: "Fogging/Condensation"
                        }
                      }
                    },
                    {
                      id: "8925a22b-2e4a-4a38-bcc6-a24aec081cf6",
                      url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/none-of-the-above",
                      name: "None of the above",
                      displayName: "None of the above",
                      fields: {
                        value: {
                          value: "None of the above"
                        },
                        title: {
                          value: "None of the above"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: ""
                },
                subLabel: {
                  value: "(select one)"
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-concerns"
                },
                valueProviders: [],
                children: [
                  {
                    id: "0c26130e-a614-43cd-a5bd-e1eca85f61d6",
                    displayName: "Concern Types",
                    name: "Concern Types",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types",
                    fields: {
                      children: [
                        {
                          id: "8ffe266c-afca-43d9-9bb4-92a8f3355f33",
                          displayName: "Hard to operate",
                          name: "Hard to operate",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/hard-to-operate",
                          fields: {
                            value: {
                              value: "Hard to operate"
                            },
                            title: {
                              value: "Hard to operate"
                            }
                          }
                        },
                        {
                          id: "4444b36b-b505-40dd-8905-50621a8e0d2f",
                          displayName: "Not energy efficient",
                          name: "Not energy efficient",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/not-energy-efficient",
                          fields: {
                            value: {
                              value: "Not energy efficient"
                            },
                            title: {
                              value: "Not energy efficient"
                            }
                          }
                        },
                        {
                          id: "10b0fc31-e051-4a7b-ac42-109035b60d71",
                          displayName: "I want to change the style",
                          name: "I want to change the style",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/i-want-to-change-the-style",
                          fields: {
                            value: {
                              value: "I want to change the style"
                            },
                            title: {
                              value: "I want to change the style"
                            }
                          }
                        },
                        {
                          id: "3050d6ae-6af3-4f49-bc1a-7ac67e1e12a6",
                          displayName: "Rotting",
                          name: "Rotting",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/rotting",
                          fields: {
                            value: {
                              value: "Rotting"
                            },
                            title: {
                              value: "Rotting"
                            }
                          }
                        },
                        {
                          id: "81dcf634-f95a-40fe-bf19-9bea8faaf94c",
                          displayName: "Warping",
                          name: "Warping",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/warping",
                          fields: {
                            value: {
                              value: "Warping"
                            },
                            title: {
                              value: "Warping"
                            }
                          }
                        },
                        {
                          id: "afe0af49-f043-4e3b-a677-ac42c6e46b7b",
                          displayName: "Fogging Condensation",
                          name: "Fogging Condensation",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/fogging-condensation",
                          fields: {
                            value: {
                              value: "Fogging/Condensation"
                            },
                            title: {
                              value: "Fogging/Condensation"
                            }
                          }
                        },
                        {
                          id: "8925a22b-2e4a-4a38-bcc6-a24aec081cf6",
                          displayName: "None of the above",
                          name: "None of the above",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/window-concerns/concerns/concern-types/none-of-the-above",
                          fields: {
                            value: {
                              value: "None of the above"
                            },
                            title: {
                              value: "None of the above"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "898d650d-dbd0-4fa6-b120-bf61dad8ffb3",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/window-concerns/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "dacc61e1-058f-4343-9841-ea9df0db9980",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/window-concerns/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "e583e46a-a9be-469e-ab0d-60b2458f111f",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/window-concerns/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "b2cf83ac-1d05-4b33-ab7c-63e159385dfc",
        displayName: "Other",
        name: "Other",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/other",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "fe17baed-4c35-42bf-891b-f14aaae302de",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/other/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "To ensure we provide you with the bet possible experience, please check all that apply."
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "5833ddfc-31d2-4a17-ac7c-f05af1ca68b7",
              displayName: "Other",
              name: "Other",
              templateId: "81abdbfe-9b8f-4552-b072-a3cff5887f68",
              templateName: "Tile Button",
              url: "/data/forms/online-scheduling/other/other",
              fields: {
                buttonsPerRows: {
                  id: "3d6c4fa4-5821-42ea-b209-9c88850dc1da",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/buttons-per-row/3",
                  name: "3",
                  displayName: "3",
                  fields: {
                    Value: {
                      value: "3"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                datasource: {
                  id: "59b458e8-0cd9-462f-a6d0-283b6623cc5c",
                  url: "/data/forms/online-scheduling/other/other/other-options",
                  name: "Other Options",
                  displayName: "Other Options",
                  fields: {},
                  templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                  templateName: "List Item Folder",
                  children: [
                    {
                      id: "e2e3739b-6b2c-4292-b442-424a5a7946eb",
                      url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-under-construction",
                      name: "My home is under construction",
                      displayName: "My home is under construction",
                      fields: {
                        value: {
                          value: "My home is under construction"
                        },
                        title: {
                          value: "My home is under construction"
                        }
                      }
                    },
                    {
                      id: "d94e4f3b-cea3-42de-93fd-e875e736faac",
                      url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-currently-for-sale",
                      name: "My home is currently for sale",
                      displayName: "My home is currently for sale",
                      fields: {
                        value: {
                          value: "My home is currently for sale"
                        },
                        title: {
                          value: "My home is currently for sale"
                        }
                      }
                    },
                    {
                      id: "26ea7b99-73e9-46cb-b7ab-2c384fc10207",
                      url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-a-rental-or-commercial-property",
                      name: "My home is a rental or commercial property",
                      displayName: "My home is a rental or commercial property",
                      fields: {
                        value: {
                          value: "My home is a rental or commercial property"
                        },
                        title: {
                          value: "My home is a rental or commercial property"
                        }
                      }
                    },
                    {
                      id: "3f1d3b9e-5ef9-4108-a571-8e3816d542a8",
                      url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-in-a-historic-disctrict",
                      name: "My home is in a historic disctrict",
                      displayName: "My home is in a historic disctrict",
                      fields: {
                        value: {
                          value: "My home is in a historic disctrict"
                        },
                        title: {
                          value: "My home is in a historic disctrict"
                        }
                      }
                    },
                    {
                      id: "2c49ee22-e56f-48e7-825c-7e03c91060e8",
                      url: "/data/forms/online-scheduling/other/other/other-options/the-windows-i-want-replaced-are-located-in-a-sunroom-or-porch",
                      name: "The windows I want replaced are located in a sunroom or porch",
                      displayName: "The windows I want replaced are located in a sunroom or porch",
                      fields: {
                        value: {
                          value: "The windows I want replaced are located in a sunroom or porch"
                        },
                        title: {
                          value: "The windows I want replaced are located in a sunroom or porch"
                        }
                      }
                    },
                    {
                      id: "61532e96-7797-408e-a3f8-2fc46fe486e7",
                      url: "/data/forms/online-scheduling/other/other/other-options/none-of-the-above",
                      name: "None of the above",
                      displayName: "None of the above",
                      fields: {
                        value: {
                          value: "None of the above"
                        },
                        title: {
                          value: "None of the above"
                        }
                      }
                    }
                  ]
                },
                validations: [],
                selection: {
                  id: "27eeab6b-870a-4d23-9faa-e4cc785d9396",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/selection/single-selection",
                  name: "Single Selection",
                  displayName: "Single Selection",
                  fields: {
                    Value: {
                      value: "single"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-other"
                },
                valueProviders: [],
                children: [
                  {
                    id: "59b458e8-0cd9-462f-a6d0-283b6623cc5c",
                    displayName: "Other Options",
                    name: "Other Options",
                    templateId: "4aaa5f48-2f4b-42e2-89cc-a4a92896d011",
                    templateName: "List Item Folder",
                    url: "/data/forms/online-scheduling/other/other/other-options",
                    fields: {
                      children: [
                        {
                          id: "e2e3739b-6b2c-4292-b442-424a5a7946eb",
                          displayName: "My home is under construction",
                          name: "My home is under construction",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-under-construction",
                          fields: {
                            value: {
                              value: "My home is under construction"
                            },
                            title: {
                              value: "My home is under construction"
                            }
                          }
                        },
                        {
                          id: "d94e4f3b-cea3-42de-93fd-e875e736faac",
                          displayName: "My home is currently for sale",
                          name: "My home is currently for sale",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-currently-for-sale",
                          fields: {
                            value: {
                              value: "My home is currently for sale"
                            },
                            title: {
                              value: "My home is currently for sale"
                            }
                          }
                        },
                        {
                          id: "26ea7b99-73e9-46cb-b7ab-2c384fc10207",
                          displayName: "My home is a rental or commercial property",
                          name: "My home is a rental or commercial property",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-a-rental-or-commercial-property",
                          fields: {
                            value: {
                              value: "My home is a rental or commercial property"
                            },
                            title: {
                              value: "My home is a rental or commercial property"
                            }
                          }
                        },
                        {
                          id: "3f1d3b9e-5ef9-4108-a571-8e3816d542a8",
                          displayName: "My home is in a historic disctrict",
                          name: "My home is in a historic disctrict",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/other/other/other-options/my-home-is-in-a-historic-disctrict",
                          fields: {
                            value: {
                              value: "My home is in a historic disctrict"
                            },
                            title: {
                              value: "My home is in a historic disctrict"
                            }
                          }
                        },
                        {
                          id: "2c49ee22-e56f-48e7-825c-7e03c91060e8",
                          displayName: "The windows I want replaced are located in a sunroom or porch",
                          name: "The windows I want replaced are located in a sunroom or porch",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/other/other/other-options/the-windows-i-want-replaced-are-located-in-a-sunroom-or-porch",
                          fields: {
                            value: {
                              value: "The windows I want replaced are located in a sunroom or porch"
                            },
                            title: {
                              value: "The windows I want replaced are located in a sunroom or porch"
                            }
                          }
                        },
                        {
                          id: "61532e96-7797-408e-a3f8-2fc46fe486e7",
                          displayName: "None of the above",
                          name: "None of the above",
                          templateId: "741b9a7f-3a37-46e0-9980-ea7e53c4e840",
                          templateName: "List Item",
                          url: "/data/forms/online-scheduling/other/other/other-options/none-of-the-above",
                          fields: {
                            value: {
                              value: "None of the above"
                            },
                            title: {
                              value: "None of the above"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "aa9b3b95-a911-494a-af5f-5a1c32c324da",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/other/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "fb198620-1284-4b02-be03-96dda67aa11a",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/other/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "6e77db0a-d779-4c42-a51e-14ecb402c6d0",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/other/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "c0d9936e-59ad-4fe4-b9aa-9f00fd0eff3c",
        displayName: "Additional Details",
        name: "Additional Details",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/additional-details",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "bbecdcb9-0244-411b-98ec-6c500173db6e",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/additional-details/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "Is there anything else you would like to tell us?"
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "51f6ea25-a989-46c8-a637-fe744f7d33ea",
              displayName: "Additional Details",
              name: "Additional Details",
              templateId: "62d234ca-1c65-4699-8bfe-339c28d92761",
              templateName: "Text Area",
              url: "/data/forms/online-scheduling/additional-details/additional-details",
              fields: {
                rows: {
                  value: 5
                },
                showRemainingCharactersCount: {
                  value: false
                },
                maxLength: {
                  value: null
                },
                minLength: {
                  value: null
                },
                defaultValue: {
                  value: ""
                },
                valueProviders: [],
                label: {
                  value: ""
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: "(optional)"
                },
                placeholderText: {
                  value: "Enter any additional details you would like to share... e.g. \"Use the side door\" or \"We have a dog\""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "windowsproblems-additionaldetails"
                },
                children: []
              }
            },
            {
              id: "e3fe8aeb-1414-4618-9541-a80463707d16",
              displayName: "Previous",
              name: "Previous",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/additional-details/previous",
              fields: {
                navigationStep: {
                  id: "2847b5eb-514d-4b93-8c7a-4d94d592a9e1",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/previous",
                  name: "Previous",
                  displayName: "Previous",
                  fields: {
                    Value: {
                      value: "-1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Previous question"
                },
                children: []
              }
            },
            {
              id: "60c9690f-4ff7-474f-ba69-09dc9726b3ef",
              displayName: "Next",
              name: "Next",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/additional-details/next",
              fields: {
                navigationStep: {
                  id: "289fe73e-e947-4b59-a53a-6bfbf997dd45",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next",
                  name: "Next",
                  displayName: "Next",
                  fields: {
                    Value: {
                      value: "1"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "50590edc-7ea7-4436-9a3e-701c87a07db2",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow",
                  name: "Arrow",
                  displayName: "Arrow",
                  fields: {
                    Value: {
                      value: "arrow"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Next"
                },
                children: []
              }
            },
            {
              id: "120a1406-f2e9-4923-8626-64c72bd7b8ae",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/additional-details/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "acb095d7-7c7a-434c-94bc-f032eef61ac1",
        displayName: "Appointment",
        name: "Appointment",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/appointment",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Property Information"
          },
          children: [
            {
              id: "b50abec7-3f8a-4af3-8b5b-45ba8433880c",
              displayName: "Headline",
              name: "Headline",
              templateId: "78e78e19-8b37-4637-8c04-9de221572d0d",
              templateName: "Headline",
              url: "/data/forms/online-scheduling/appointment/headline",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineLevel: {
                  id: "0f556f3a-bbad-4aa5-952d-b79003b39cd6",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2",
                  name: "Heading 2",
                  displayName: "Heading 2",
                  fields: {
                    Value: {
                      value: "h2"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                headlineText: {
                  value: "Please select a date and time that all homeowners are available for your appointment."
                },
                removeHorizontalLine: {
                  value: false
                },
                children: []
              }
            },
            {
              id: "033649b0-5ea0-446e-a313-eec3a1d1b2d1",
              displayName: "AppointmentDateTime",
              name: "AppointmentDateTime",
              templateId: "1adbc0a2-a0a9-4341-b752-6b91f903e9b0",
              templateName: "Date",
              url: "/data/forms/online-scheduling/appointment/appointmentdatetime",
              fields: {
                maxDate: null,
                minDateCustom: {
                  value: "0001-01-01T00:00:00Z"
                },
                minDate: null,
                maxDateCustom: {
                  value: "0001-01-01T00:00:00Z"
                },
                defaultValue: null,
                defaultValueCustom: {
                  value: "0001-01-01T00:00:00Z"
                },
                label: {
                  value: "AppointmentDateTime"
                },
                validations: [],
                tooltipImage: {
                  value: {}
                },
                tooltipText: {
                  value: ""
                },
                subLabel: {
                  value: ""
                },
                placeholderText: {
                  value: ""
                },
                width: {
                  id: "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                  name: "Full Width",
                  displayName: "Full Width",
                  fields: {
                    Value: {
                      value: "12"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                fieldName: {
                  value: "appointmentdatetime"
                },
                children: []
              }
            },
            {
              id: "23315372-54ad-4a97-9c57-b3bcdb15c421",
              displayName: "Submit",
              name: "Submit",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/appointment/submit",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: null,
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: {
                  id: "901574df-d212-4e67-89a5-aac4a9707e0a",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                width: {
                  id: "022c2407-f7a8-4576-8c9b-45ea8014462d",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width",
                  name: "Half Width",
                  displayName: "Half Width",
                  fields: {
                    Value: {
                      value: "6"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                label: {
                  value: "Schedule Appointment"
                },
                children: []
              }
            },
            {
              id: "c744f211-3896-47d9-be2d-b250b60dd76f",
              displayName: "Call",
              name: "Call",
              templateId: "6dad441f-58d9-40a0-a119-c8d990b0484d",
              templateName: "Button",
              url: "/data/forms/online-scheduling/appointment/call",
              fields: {
                navigationStep: {
                  id: "b6185a15-c782-4ddf-8ad4-21620a8fe9d4",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit",
                  name: "Submit",
                  displayName: "Submit",
                  fields: {
                    Value: {
                      value: "0"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                icon: {
                  id: "0db14183-ef30-4ccd-9781-a27d5a7c893b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/external-link",
                  name: "External Link",
                  displayName: "External Link",
                  fields: {
                    Value: {
                      value: "external-link"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                alignment: {
                  id: "d0e2b998-4601-4aa2-97ad-4d41e22b3180",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                mobileWidth: null,
                width: null,
                label: {
                  value: "I'd prefer to call to discuss my project"
                },
                children: []
              }
            }
          ]
        }
      },
      {
        id: "bb3df613-3922-42ea-871d-cbf2e59648c7",
        displayName: "Thank You Page",
        name: "Thank You Page",
        templateId: "c4442680-1100-4626-a469-acc318e25cbf",
        templateName: "Page",
        url: "/data/forms/online-scheduling/thank-you-page",
        fields: {
          includeInSteps: {
            value: false
          },
          label: {
            value: "Thank You Page"
          },
          children: [
            {
              id: "765b0d91-7c14-421f-8d88-af40ecba3925",
              displayName: "Thank You Messaging",
              name: "Thank You Messaging",
              templateId: "1e258863-055b-4c0d-b775-59541b0a90fd",
              templateName: "Description",
              url: "/data/forms/online-scheduling/thank-you-page/thank-you-messaging",
              fields: {
                alignment: {
                  id: "67192ebd-70ce-4603-ae48-70c3b5df6b2b",
                  url: "/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center",
                  name: "Center",
                  displayName: "Center",
                  fields: {
                    Value: {
                      value: "center"
                    }
                  },
                  templateId: "d2923fee-da4e-49be-830c-e27764dfa269",
                  templateName: "Enum"
                },
                body: {
                  value: "<p>Thank you messaging here</p>"
                },
                children: []
              }
            }
          ]
        }
      }
    ]
  }
};

export default defaultData;
