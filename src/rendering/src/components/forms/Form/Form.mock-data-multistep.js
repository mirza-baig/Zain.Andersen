const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'Form',
  },
  uid: '24d4ed52-6782-403a-aa81-56d62c5fbcba',
  componentName: 'Form',
  dataSource: '{C4F28335-FB0D-4DCD-98B5-42AC46F4A2B5}',
  fields: {
    componentSpacing: null,
    sectionId: {
      value: '',
    },
    eventName: {
      value: '',
    },
    eventType: {
      value: '',
    },
    eventZone: {
      value: '',
    },
    headlineLevel: {
      id: '0f556f3a-bbad-4aa5-952d-b79003b39cd6',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Headline-Levels/Heading-2',
      name: 'Heading 2',
      displayName: 'Heading 2',
      fields: {
        Value: {
          value: 'h2',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    headlineText: {
      value: 'Apply Today',
    },
    body: {
      value:
        'Please fill out the information below and submit to be considered for the Andersen Certified Contractor program.&nbsp; <a href="https://aw930cdnprdcd.azureedge.net/-/media/andersenwindows/files/certified-contractor-info-sheet.pdf?modified=20211018162236" target="_Blank" title="Full Program Details">FULL PROGRAM DETAILS</a>',
    },
    children: [
      {
        id: '173d4afa-d88e-4bc0-b1fd-9626b2196ca0',
        displayName: 'Page 1',
        name: 'Page 1',
        templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
        templateName: 'Page',
        url: '/Data/Forms/MultiStep-Form/Page-1',
        fields: {
          includeInSteps: {
            value: true,
          },
          label: {
            value: 'First Step',
          },
          children: [
            {
              id: 'ed2db628-1e7a-45ce-8497-710653f5f4b0',
              displayName: 'Headline',
              name: 'Headline',
              templateId: '78e78e19-8b37-4637-8c04-9de221572d0d',
              templateName: 'Headline',
              url: '/Data/Forms/MultiStep-Form/Page-1/Headline',
              fields: {
                headlineLevel: {
                  id: '0f556f3a-bbad-4aa5-952d-b79003b39cd6',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Headline-Levels/Heading-2',
                  name: 'Heading 2',
                  displayName: 'Heading 2',
                  fields: {
                    Value: {
                      value: 'h2',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                headlineText: {
                  value: 'This is the form heading',
                },
              },
            },
            {
              id: 'e8e93500-de00-4b86-ad23-6fbcfe358f12',
              displayName: 'Form Intro',
              name: 'Form Intro',
              templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
              templateName: 'Description',
              url: '/Data/Forms/MultiStep-Form/Page-1/Form-Intro',
              fields: {
                body: {
                  value: 'Form Intro',
                },
              },
            },
            {
              id: '1d524b6a-17c3-47cf-8862-0fa95c84b2d3',
              displayName: 'Dropdown Test',
              name: 'Dropdown Test',
              templateId: '1107f99a-cc75-44ce-be55-8318199d91bd',
              templateName: 'Dropdown',
              url: '/Data/Forms/MultiStep-Form/Page-1/Dropdown-Test',
              fields: {
                defaultDisplay: {
                  value: '',
                },
                defaultValue: null,
                showDefaultDisplay: {
                  value: true,
                },
                datasource: {
                  id: '02886095-2923-491e-a563-b935eb9daa34',
                  url: '/Data/Forms/List-Items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '3e6329d1-c5c8-4fa5-9797-06ed163014fb',
                      url: '/Data/Forms/List-Items/List-Item',
                      name: 'List Item',
                      displayName: 'List Item',
                      fields: {
                        title: {
                          value: 'List Item',
                        },
                        value: {
                          value: 'List Item',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '17c52810-0cf1-4825-b0b1-f83948d97500',
                      url: '/Data/Forms/List-Items/List-Item-1',
                      name: 'List Item 1',
                      displayName: 'List Item 1',
                      fields: {
                        title: {
                          value: 'List Item 1',
                        },
                        value: {
                          value: 'List Item 1',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                      url: '/Data/Forms/List-Items/List-Item-2',
                      name: 'List Item 2',
                      displayName: 'List Item 2',
                      fields: {
                        title: {
                          value: 'List Item 2',
                        },
                        value: {
                          value: 'List Item 2',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: 'e7959365-ec83-4b08-bf23-6f058a816253',
                      url: '/Data/Forms/List-Items/List-Item-3',
                      name: 'List Item 3',
                      displayName: 'List Item 3',
                      fields: {
                        title: {
                          value: 'List Item 3',
                        },
                        value: {
                          value: 'List Item 3',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: 'c586560c-7d21-457a-ae38-cdbde1864c53',
                      url: '/Data/Forms/List-Items/List-Item-4',
                      name: 'List Item 4',
                      displayName: 'List Item 4',
                      fields: {
                        title: {
                          value: 'List Item 4',
                        },
                        value: {
                          value: 'List Item 4',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '4a2020e4-5cf8-4d66-88cf-7e4c8fff09eb',
                      url: '/Data/Forms/List-Items/List-Item-5',
                      name: 'List Item 5',
                      displayName: 'List Item 5',
                      fields: {
                        title: {
                          value: 'List Item 5',
                        },
                        value: {
                          value: 'List Item 5',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '2dd3061e-5aa3-42b1-847f-54149b621303',
                      url: '/Data/Forms/List-Items/List-Item-6',
                      name: 'List Item 6',
                      displayName: 'List Item 6',
                      fields: {
                        title: {
                          value: 'List Item 6',
                        },
                        value: {
                          value: 'List Item 6',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '088d4c50-a5cc-4c12-b26a-c95d0efdec9a',
                      url: '/Data/Forms/List-Items/List-Item-7',
                      name: 'List Item 7',
                      displayName: 'List Item 7',
                      fields: {
                        title: {
                          value: 'List Item 7',
                        },
                        value: {
                          value: 'List Item 7',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '5f2237a0-a53b-4125-b80c-0e32e02a5573',
                      url: '/Data/Forms/List-Items/List-Item-9',
                      name: 'List Item 9',
                      displayName: 'List Item 9',
                      fields: {
                        title: {
                          value: 'List Item 9',
                        },
                        value: {
                          value: 'List Item 9',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                  ],
                },
                displayFieldName: {
                  value: 'title',
                },
                valueFieldName: {
                  value: 'value',
                },
                label: {
                  value: 'Dropdown Test',
                },
                validations: [
                  {
                    id: 'ceacb359-8a59-47a9-b0ba-f2da562f5a5a',
                    url: '/Data/Forms/Validations/Required',
                    name: 'Required',
                    displayName: 'Required',
                    fields: {
                      errorMessage: {
                        value: '{fieldLabel} is required.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'd16071b0-1df1-4f24-ab33-e2b22203e0b0',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Required',
                        name: 'Required',
                        displayName: 'Required',
                        fields: {
                          Value: {
                            value: 'required',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                ],
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
              },
            },
            {
              id: '5ae08e8b-5c4a-4f16-8c24-ee5cdf61c56d',
              displayName: 'First Name',
              name: 'First Name',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/MultiStep-Form/Page-1/First-Name',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'First Name',
                },
                validations: [
                  {
                    id: 'ceacb359-8a59-47a9-b0ba-f2da562f5a5a',
                    url: '/Data/Forms/Validations/Required',
                    name: 'Required',
                    displayName: 'Required',
                    fields: {
                      errorMessage: {
                        value: '{fieldLabel} is required.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'd16071b0-1df1-4f24-ab33-e2b22203e0b0',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Required',
                        name: 'Required',
                        displayName: 'Required',
                        fields: {
                          Value: {
                            value: 'required',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                  {
                    id: '12dce567-1e99-44a0-a419-62b7a095b03a',
                    url: '/Data/Forms/Validations/Max',
                    name: 'Max',
                    displayName: 'Max',
                    fields: {
                      errorMessage: {
                        value: 'Maximum character {maxLength}.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: '4e8d6c38-ce89-4ab4-baa0-9a486841a96c',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Max',
                        name: 'Max',
                        displayName: 'Max',
                        fields: {
                          Value: {
                            value: 'max',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                  {
                    id: '66fe0b2a-32b9-4975-9a1a-dc17b10c53c7',
                    url: '/Data/Forms/Validations/Alphabetic',
                    name: 'Alphabetic',
                    displayName: 'Alphabetic',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input in alphabetic format.',
                      },
                      validationRule: {
                        value: '^([^0-9]*)$',
                      },
                      validationType: {
                        id: '554dc4fc-8479-47d0-8a7e-1b401ac70c65',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Matches',
                        name: 'Matches',
                        displayName: 'Matches',
                        fields: {
                          Value: {
                            value: 'matches',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                ],
                fieldMapping: {
                  id: 'e17a5ecb-bbe1-4d26-9a55-625d19b375ee',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/First-Name',
                  name: 'First Name',
                  displayName: 'First Name',
                  fields: {
                    Value: {
                      value: 'FirstName',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                placeholderText: {
                  value: 'First Name',
                },
              },
            },

            {
              id: '9de6a052-9450-46ba-ae8a-332f6bb4136f',
              displayName: 'Last Name',
              name: 'Last Name',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/MultiStep-Form/Page-1/Last-Name',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Last Name',
                },
                validations: [
                  {
                    id: '66fe0b2a-32b9-4975-9a1a-dc17b10c53c7',
                    url: '/Data/Forms/Validations/Alphabetic',
                    name: 'Alphabetic',
                    displayName: 'Alphabetic',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input in alphabetic format.',
                      },
                      validationRule: {
                        value: '^([^0-9]*)$',
                      },
                      validationType: {
                        id: '554dc4fc-8479-47d0-8a7e-1b401ac70c65',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Matches',
                        name: 'Matches',
                        displayName: 'Matches',
                        fields: {
                          Value: {
                            value: 'matches',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                  {
                    id: '12dce567-1e99-44a0-a419-62b7a095b03a',
                    url: '/Data/Forms/Validations/Max',
                    name: 'Max',
                    displayName: 'Max',
                    fields: {
                      errorMessage: {
                        value: 'Maximum character {maxLength}.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: '4e8d6c38-ce89-4ab4-baa0-9a486841a96c',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Max',
                        name: 'Max',
                        displayName: 'Max',
                        fields: {
                          Value: {
                            value: 'max',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                ],
                fieldMapping: {
                  id: '2954da41-3a5c-4658-8edb-a597fa5f9a6d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Windows-Problems',
                  name: 'Windows Problems',
                  displayName: 'Windows Problems',
                  fields: {
                    Value: {
                      value: 'WindowsProblems',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                placeholderText: {
                  value: 'Last Name',
                },
              },
            },

            {
              id: '3daa1b79-16ee-47be-b5b7-62af02ca9dab',
              displayName: 'Consent Checkbox',
              name: 'Consent Checkbox',
              templateId: '45aceae2-f114-43ae-8426-714f7af7ac2b',
              templateName: 'Consent Checkbox',
              url: '/Data/Forms/MultiStep-Form/Page-1/Consent-Checkbox',
              fields: {
                consentText: {
                  value: 'By clicking "Request Quote", I agree to the terms below.',
                },
                validations: [
                  {
                    id: 'ceacb359-8a59-47a9-b0ba-f2da562f5a5a',
                    url: '/Data/Forms/Validations/Required',
                    name: 'Required',
                    displayName: 'Required',
                    fields: {
                      errorMessage: {
                        value: '{fieldLabel} is required.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'd16071b0-1df1-4f24-ab33-e2b22203e0b0',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Required',
                        name: 'Required',
                        displayName: 'Required',
                        fields: {
                          Value: {
                            value: 'required',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                ],
                fieldMapping: null,
              },
            },

            {
              id: '77adc66d-c043-449f-b8f3-ed0a514cdc41',
              displayName: 'Next',
              name: 'Next',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/MultiStep-Form/Page-1/Next',
              fields: {
                icon: {
                  id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Arrow',
                  name: 'Arrow',
                  displayName: 'Arrow',
                  fields: {
                    Value: {
                      value: 'arrow',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                navigationStep: {
                  id: '289fe73e-e947-4b59-a53a-6bfbf997dd45',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Navigation-Steps/Next',
                  name: 'Next',
                  displayName: 'Next',
                  fields: {
                    Value: {
                      value: '1',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                alignment: {
                  id: '8fbfeae0-11e5-43ab-9f57-358b9dc7b9f7',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Button-Alignment/Right',
                  name: 'Right',
                  displayName: 'Right',
                  fields: {
                    Value: {
                      value: 'right',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                mobileWidth: {
                  id: '998f4a8c-e357-4e2d-9071-ab2addfa8283',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Full-Width',
                  name: 'Full Width',
                  displayName: 'Full Width',
                  fields: {
                    Value: {
                      value: '12',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                width: {
                  id: '998f4a8c-e357-4e2d-9071-ab2addfa8283',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Full-Width',
                  name: 'Full Width',
                  displayName: 'Full Width',
                  fields: {
                    Value: {
                      value: '12',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Next',
                },
                children: [],
              },
            },
          ],
        },
      },
      {
        id: 'b908adbc-a76b-4277-b30f-e61c3afb0803',
        displayName: 'Page 2',
        name: 'Page 2',
        templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
        templateName: 'Page',
        url: '/Data/Forms/MultiStep-Form/Page-2',
        fields: {
          includeInSteps: {
            value: true,
          },
          label: {
            value: 'Second Step',
          },
          children: [
            {
              id: 'b5852bfb-3928-4e6c-8729-d1330c3ea9bb',
              displayName: 'Form Type',
              name: 'Form Type',
              templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
              templateName: 'Hidden',
              url: '/Data/Forms/MultiStep-Form/Page-2/Form-Type',
              fields: {
                defaultValue: {
                  value: '2',
                },
                fieldMapping: {
                  id: '2f5aa35e-eee8-4cfc-a267-47791a562cfb',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Form-Type',
                  name: 'Form Type',
                  displayName: 'Form Type',
                  fields: {
                    Value: {
                      value: 'FormType',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
              },
            },
            {
              id: '05148874-f461-4d36-9494-16dd21788b31',
              displayName: 'First Name 1',
              name: 'First Name 1',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/MultiStep-Form/Page-2/First-Name-1',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'First Name 1',
                },
                validations: [
                  {
                    id: 'ceacb359-8a59-47a9-b0ba-f2da562f5a5a',
                    url: '/Data/Forms/Validations/Required',
                    name: 'Required',
                    displayName: 'Required',
                    fields: {
                      errorMessage: {
                        value: '{fieldLabel} is required.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'd16071b0-1df1-4f24-ab33-e2b22203e0b0',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Required',
                        name: 'Required',
                        displayName: 'Required',
                        fields: {
                          Value: {
                            value: 'required',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                  {
                    id: '12dce567-1e99-44a0-a419-62b7a095b03a',
                    url: '/Data/Forms/Validations/Max',
                    name: 'Max',
                    displayName: 'Max',
                    fields: {
                      errorMessage: {
                        value: 'Maximum character {maxLength}.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: '4e8d6c38-ce89-4ab4-baa0-9a486841a96c',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Max',
                        name: 'Max',
                        displayName: 'Max',
                        fields: {
                          Value: {
                            value: 'max',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                  {
                    id: '66fe0b2a-32b9-4975-9a1a-dc17b10c53c7',
                    url: '/Data/Forms/Validations/Alphabetic',
                    name: 'Alphabetic',
                    displayName: 'Alphabetic',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input in alphabetic format.',
                      },
                      validationRule: {
                        value: '^([^0-9]*)$',
                      },
                      validationType: {
                        id: '554dc4fc-8479-47d0-8a7e-1b401ac70c65',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Matches',
                        name: 'Matches',
                        displayName: 'Matches',
                        fields: {
                          Value: {
                            value: 'matches',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                ],
                fieldMapping: {
                  id: '2fbaff08-489b-45fe-aab7-c5ce444d1850',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Email',
                  name: 'Email',
                  displayName: 'Email',
                  fields: {
                    Value: {
                      value: 'Email',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                placeholderText: {
                  value: 'First Name',
                },
              },
            },
            {
              id: 'd10c1a4e-2d7e-47b7-9559-3806ed28a472',
              displayName: 'Last Name 2',
              name: 'Last Name 2',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/MultiStep-Form/Page-2/Last-Name-2',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Last Name 2',
                },
                validations: [
                  {
                    id: '66fe0b2a-32b9-4975-9a1a-dc17b10c53c7',
                    url: '/Data/Forms/Validations/Alphabetic',
                    name: 'Alphabetic',
                    displayName: 'Alphabetic',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input in alphabetic format.',
                      },
                      validationRule: {
                        value: '^([^0-9]*)$',
                      },
                      validationType: {
                        id: '554dc4fc-8479-47d0-8a7e-1b401ac70c65',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Matches',
                        name: 'Matches',
                        displayName: 'Matches',
                        fields: {
                          Value: {
                            value: 'matches',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                  {
                    id: '12dce567-1e99-44a0-a419-62b7a095b03a',
                    url: '/Data/Forms/Validations/Max',
                    name: 'Max',
                    displayName: 'Max',
                    fields: {
                      errorMessage: {
                        value: 'Maximum character {maxLength}.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: '4e8d6c38-ce89-4ab4-baa0-9a486841a96c',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Max',
                        name: 'Max',
                        displayName: 'Max',
                        fields: {
                          Value: {
                            value: 'max',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                    },
                    templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
                    templateName: 'Field Validation',
                  },
                ],
                fieldMapping: {
                  id: 'aefa9c18-d58c-4e43-8f0b-8a308319c488',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Last-Name',
                  name: 'Last Name',
                  displayName: 'Last Name',
                  fields: {
                    Value: {
                      value: 'LastName',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                placeholderText: {
                  value: 'Last Name',
                },
              },
            },
            {
              id: '9f6cf72f-cd76-496e-965e-d095fa2d4eaf',
              displayName: 'Windows Problems',
              name: 'Windows Problems',
              templateId: '62d234ca-1c65-4699-8bfe-339c28d92761',
              templateName: 'Text Area',
              url: '/Data/Forms/MultiStep-Form/Page-2/Windows-Problems',
              fields: {
                rows: {
                  value: 5,
                },
                showRemainingCharactersCount: {
                  value: false,
                },
                maxLength: {
                  value: null,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Problems with your Windows?',
                },
                validations: [],
                fieldMapping: {
                  id: '2954da41-3a5c-4658-8edb-a597fa5f9a6d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Windows-Problems',
                  name: 'Windows Problems',
                  displayName: 'Windows Problems',
                  fields: {
                    Value: {
                      value: 'WindowsProblems',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                placeholderText: {
                  value: '',
                },
              },
            },
            {
              id: '19933027-98e7-4ea1-971d-1418161f5816',
              displayName: 'Back',
              name: 'Back',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/MultiStep-Form/Page-2/Back',
              fields: {
                icon: {
                  id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Arrow',
                  name: 'Arrow',
                  displayName: 'Arrow',
                  fields: {
                    Value: {
                      value: 'arrow',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                navigationStep: {
                  id: '2847b5eb-514d-4b93-8c7a-4d94d592a9e1',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Navigation-Steps/Previous',
                  name: 'Previous',
                  displayName: 'Previous',
                  fields: {
                    Value: {
                      value: '-1',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                alignment: {
                  id: '3f64844f-833b-457a-b400-a85be05390cf',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Button-Alignment/Left',
                  name: 'Left',
                  displayName: 'Left',
                  fields: {
                    Value: {
                      value: 'left',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                mobileWidth: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Back',
                },
                children: [],
              },
            },
            {
              id: 'c2e5acd3-579b-485a-9c3f-9383149fc340',
              displayName: 'Next',
              name: 'Next',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/MultiStep-Form/Page-2/Next',
              fields: {
                icon: {
                  id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Arrow',
                  name: 'Arrow',
                  displayName: 'Arrow',
                  fields: {
                    Value: {
                      value: 'arrow',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                navigationStep: {
                  id: '289fe73e-e947-4b59-a53a-6bfbf997dd45',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Navigation-Steps/Next',
                  name: 'Next',
                  displayName: 'Next',
                  fields: {
                    Value: {
                      value: '1',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                alignment: {
                  id: '8fbfeae0-11e5-43ab-9f57-358b9dc7b9f7',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Button-Alignment/Right',
                  name: 'Right',
                  displayName: 'Right',
                  fields: {
                    Value: {
                      value: 'right',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                mobileWidth: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Next',
                },
                children: [
                  {
                    id: '2c63647d-6846-4840-a57b-b832c08c70c2',
                    displayName: 'Stand In for Submit Actions',
                    name: 'Stand In for Submit Actions',
                    templateId: 'a87a00b1-e6db-45ab-8b54-636fec3b5523',
                    templateName: 'Folder',
                    url: '/Data/Forms/MultiStep-Form/Page-2/Next/Stand-In-for-Submit-Actions',
                    fields: {},
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: '4ba6ab5b-ee34-45e2-9346-8d8f82ff39d0',
        displayName: 'Page 3',
        name: 'Page 3',
        templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
        templateName: 'Page',
        url: '/Data/Forms/MultiStep-Form/Page-3',
        fields: {
          includeInSteps: {
            value: true,
          },
          label: {
            value: 'Third Step',
          },
          children: [
            {
              id: 'ef7351e6-1d25-4468-8dbe-961ae15bd41e',
              displayName: 'Last Name 3',
              name: 'Last Name 3',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/MultiStep-Form/Page-3/Last-Name-3',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Last Name 2',
                },
                validations: [],
                fieldMapping: {
                  id: 'aefa9c18-d58c-4e43-8f0b-8a308319c488',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Last-Name',
                  name: 'Last Name',
                  displayName: 'Last Name',
                  fields: {
                    Value: {
                      value: 'LastName',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                placeholderText: {
                  value: 'Last Name',
                },
              },
            },

            {
              id: 'aa3d2cc2-17ea-4871-982b-9f5c04405c31',
              displayName: 'Back',
              name: 'Back',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/MultiStep-Form/Page-3/Back',
              fields: {
                icon: null,
                navigationStep: {
                  id: '2847b5eb-514d-4b93-8c7a-4d94d592a9e1',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Navigation-Steps/Previous',
                  name: 'Previous',
                  displayName: 'Previous',
                  fields: {
                    Value: {
                      value: '-1',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                alignment: {
                  id: '3f64844f-833b-457a-b400-a85be05390cf',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Button-Alignment/Left',
                  name: 'Left',
                  displayName: 'Left',
                  fields: {
                    Value: {
                      value: 'left',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                mobileWidth: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Back',
                },
                children: [],
              },
            },
            {
              id: '7ac29f7e-93b6-4041-8d3e-9071a768888d',
              displayName: 'Submit',
              name: 'Submit',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/MultiStep-Form/Page-3/Submit',
              fields: {
                icon: null,
                navigationStep: {
                  id: '289fe73e-e947-4b59-a53a-6bfbf997dd45',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Navigation-Steps/Next',
                  name: 'Next',
                  displayName: 'Next',
                  fields: {
                    Value: {
                      value: '1',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                alignment: {
                  id: '8fbfeae0-11e5-43ab-9f57-358b9dc7b9f7',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Button-Alignment/Right',
                  name: 'Right',
                  displayName: 'Right',
                  fields: {
                    Value: {
                      value: 'right',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                mobileWidth: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Width/Half-Width',
                  name: 'Half Width',
                  displayName: 'Half Width',
                  fields: {
                    Value: {
                      value: '6',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Submit',
                },
                children: [
                  {
                    id: '8b548110-b554-4ea0-bf86-3fc8d81f3a40',
                    displayName: 'Stand In for Submit Actions',
                    name: 'Stand In for Submit Actions',
                    templateId: 'a87a00b1-e6db-45ab-8b54-636fec3b5523',
                    templateName: 'Folder',
                    url: '/Data/Forms/MultiStep-Form/Page-3/Submit/Stand-In-for-Submit-Actions',
                    fields: {},
                  },
                ],
              },
            },
          ],
        },
      },

      {
        id: 'd9f7b211-9ada-44ad-b040-b1630d314522',
        displayName: 'Thank You Page',
        name: 'Thank You Page',
        templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
        templateName: 'Page',
        url: '/Data/Forms/MultiStep-Form/Thank-You-Page',
        fields: {
          includeInSteps: {
            value: false,
          },
          label: {
            value: 'Thank You Page',
          },
          children: [
            {
              id: '1399756f-787c-40de-8bb2-08832bde2819',
              displayName: 'Thank You Messaging',
              name: 'Thank You Messaging',
              templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
              templateName: 'Description',
              url: '/Data/Forms/MultiStep-Form/Thank-You-Page/Thank-You-Messaging',
              fields: {
                body: {
                  value: 'Thank you!',
                },
              },
            },
          ],
        },
      },
    ],
    formName: {
      value: '',
    },
  },
};
export default defaultData;
