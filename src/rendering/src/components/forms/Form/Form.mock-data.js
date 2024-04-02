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
    formName: {
      value: '',
    },
    children: [
      {
        id: '9d7043d3-ecb2-4fe6-beba-e9ab87bd6600',
        displayName: 'Form Page',
        name: 'Form Page',
        templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
        templateName: 'Page',
        url: '/Data/Forms/Single-Step-Form/Form-Page',
        fields: {
          includeInSteps: {
            value: false,
          },
          label: {
            value: 'Form Page',
          },
          children: [
            {
              id: 'b6723c2d-3560-40d9-a795-900d98b4f832',
              displayName: 'Headline',
              name: 'Headline',
              templateId: '78e78e19-8b37-4637-8c04-9de221572d0d',
              templateName: 'Headline',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Headline',
              fields: {
                alignment: {
                  id: 'c6dc5505-a8a3-47e0-8b10-f01b2c03aa32',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Alignment/Left',
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
                  value: 'Headline',
                },
                children: [],
              },
            },
            {
              id: 'a56f1454-197d-4483-bf7e-d85bbd3fc1e0',
              displayName: 'Paragraph',
              name: 'Paragraph',
              templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
              templateName: 'Description',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Paragraph',
              fields: {
                body: {
                  value: '',
                },
                children: [],
              },
            },
            {
              id: 'b35edb4c-c30b-4852-96a4-1322564e30a6',
              displayName: 'Short Text Alphabetic',
              name: 'Short Text Alphabetic',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Short-Text-Alphabetic',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: 3,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Short Text Alphabetic',
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
                ],
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Enter your text here<br class="t-last-br" />',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'Short-Text-Alphabetic',
                },
                children: [],
              },
            },
            {
              id: '21e3b4ff-c28a-44e2-ab84-5ac907cdb88b',
              displayName: 'Short Text Alphanumeric',
              name: 'Short Text Alphanumeric',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Short-Text-Alphanumeric',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: 3,
                },
                defaultValue: {
                  value: 'Test',
                },
                label: {
                  value: 'Short Text Alphanumeric',
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
                ],
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'Short-Text-Alphanumeric',
                },
                children: [],
              },
            },
            {
              id: 'de4f274c-1bcb-4d07-904c-418993703491',
              displayName: 'Short Text Numeric',
              name: 'Short Text Numeric',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Short-Text-Numeric',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: 3,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Short Text Numeric',
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
                    id: '8c62d700-8d80-4a08-8702-b5eec3318566',
                    url: '/Data/Forms/Validations/Min',
                    name: 'Min',
                    displayName: 'Min',
                    fields: {
                      errorMessage: {
                        value: 'Please lengthen this text to {minLength}.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'f2bcfc31-032a-408c-bace-139011009e95',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Min',
                        name: 'Min',
                        displayName: 'Min',
                        fields: {
                          Value: {
                            value: 'min',
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
                    id: '8be0e1b8-0ba7-49be-993a-36537a50ca22',
                    url: '/Data/Forms/Validations/Numeric',
                    name: 'Numeric',
                    displayName: 'Numeric',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input in number format.',
                      },
                      validationRule: {
                        value: '^\\d*[.]?\\d*$',
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
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'Short-Text-Numeric',
                },
                children: [],
              },
            },
            {
              id: '6d83691b-e185-4aad-8c5b-1b1aac3d8c55',
              displayName: 'Short Text URL',
              name: 'Short Text URL',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Short-Text-URL',
              fields: {
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: 3,
                },
                defaultValue: {
                  value: 'Test',
                },
                label: {
                  value: 'Short Text URL',
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
                    id: '8c62d700-8d80-4a08-8702-b5eec3318566',
                    url: '/Data/Forms/Validations/Min',
                    name: 'Min',
                    displayName: 'Min',
                    fields: {
                      errorMessage: {
                        value: 'Please lengthen this text to {minLength}.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'f2bcfc31-032a-408c-bace-139011009e95',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/Min',
                        name: 'Min',
                        displayName: 'Min',
                        fields: {
                          Value: {
                            value: 'min',
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
                    id: 'a6d54fd0-cde1-433d-a36c-4daa328a3896',
                    url: '/Data/Forms/Validations/URL',
                    name: 'URL',
                    displayName: 'URL',
                    fields: {
                      errorMessage: {
                        value: 'Please provide URL in valid format.',
                      },
                      validationRule: {
                        value: '',
                      },
                      validationType: {
                        id: 'eaf22222-605b-4d6c-98ef-77b0b7ed8ff4',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Type/URL',
                        name: 'URL',
                        displayName: 'URL',
                        fields: {
                          Value: {
                            value: 'url',
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
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'Short-Text-URL',
                },
                children: [],
              },
            },
{
                                      "id": "a06f0dec-746f-44c6-a4a2-4f3404096ada",
                                      "displayName": "Doors",
                                      "name": "Doors",
                                      "templateId": "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                                      "templateName": "Number",
                                      "url": "https://data.dev.renewalbyandersen.com/forms/horizontal-devs/form---number/page/doors",
                                      "fields": {
                                        "dependsOn": {
                                          "id": "8039db14-f59d-4c84-8309-05c9d7dfa312",
                                          "url": "https://data.dev.renewalbyandersen.com/forms/horizontal-devs/form---number/page/windows",
                                          "name": "Windows",
                                          "displayName": "Windows",
                                          "fields": {
                                            "dependsOn": {
                                              "id": "a06f0dec-746f-44c6-a4a2-4f3404096ada",
                                              "url": "https://data.dev.renewalbyandersen.com/forms/horizontal-devs/form---number/page/doors",
                                              "name": "Doors",
                                              "displayName": "Doors",
                                              "fields": {
                                                "maxLength": {
                                                  "value": 10
                                                },
                                                "minLength": {
                                                  "value": 2
                                                },
                                                "defaultValue": {
                                                  "value": "0"
                                                },
                                                "label": {
                                                  "value": "Doors"
                                                },
                                                "validations": [
                                                  {
                                                    "id": "7ca5fa64-2b7e-4238-959d-f9d3098cc97c",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/required",
                                                    "name": "Required",
                                                    "displayName": "Required",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "{fieldLabel} is required."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "d16071b0-1df1-4f24-ab33-e2b22203e0b0",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required",
                                                        "name": "Required",
                                                        "displayName": "Required",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "required"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  },
                                                  {
                                                    "id": "6ad1f3f3-a869-44ae-813b-d28a84837363",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/min",
                                                    "name": "Min",
                                                    "displayName": "Min",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "Please lengthen this text to {minLength}."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "f2bcfc31-032a-408c-bace-139011009e95",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min",
                                                        "name": "Min",
                                                        "displayName": "Min",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "min"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  },
                                                  {
                                                    "id": "d78b256b-6156-45bb-90b9-8de1f0428c47",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/max",
                                                    "name": "Max",
                                                    "displayName": "Max",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "Maximum character {maxLength}."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "4e8d6c38-ce89-4ab4-baa0-9a486841a96c",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max",
                                                        "name": "Max",
                                                        "displayName": "Max",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "max"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  },
                                                  {
                                                    "id": "5ce776d9-7c3a-42de-8980-cad513690640",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/integer",
                                                    "name": "Integer",
                                                    "displayName": "Integer",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "Please provide valid input format."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "74d61c2b-9728-4e0c-b38f-839e8b27d19e",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/integer",
                                                        "name": "Integer",
                                                        "displayName": "Integer",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "integer"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  }
                                                ],
                                                "tooltipImage": {
                                                  "value": {}
                                                },
                                                "tooltipText": {
                                                  "value": ""
                                                },
                                                "subLabel": {
                                                  "value": ""
                                                },
                                                "placeholderText": {
                                                  "value": ""
                                                },
                                                "width": {
                                                  "id": "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                                                  "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                                                  "name": "Full Width",
                                                  "displayName": "Full Width",
                                                  "fields": {
                                                    "Value": {
                                                      "value": "12"
                                                    }
                                                  },
                                                  "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                  "templateName": "Enum"
                                                },
                                                "fieldName": {
                                                  "value": "doors"
                                                }
                                              },
                                              "templateId": "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                                              "templateName": "Number"
                                            },
                                            "maxLength": {
                                              "value": 10
                                            },
                                            "minLength": {
                                              "value": 2
                                            },
                                            "defaultValue": {
                                              "value": "0"
                                            },
                                            "label": {
                                              "value": "Windows windows"
                                            },
                                            "validations": [
                                              {
                                                "id": "7ca5fa64-2b7e-4238-959d-f9d3098cc97c",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/required",
                                                "name": "Required",
                                                "displayName": "Required",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "{fieldLabel} is required."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "d16071b0-1df1-4f24-ab33-e2b22203e0b0",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required",
                                                    "name": "Required",
                                                    "displayName": "Required",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "required"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              },
                                              {
                                                "id": "6ad1f3f3-a869-44ae-813b-d28a84837363",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/min",
                                                "name": "Min",
                                                "displayName": "Min",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "Please lengthen this text to {minLength}."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "f2bcfc31-032a-408c-bace-139011009e95",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min",
                                                    "name": "Min",
                                                    "displayName": "Min",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "min"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              },
                                              {
                                                "id": "d78b256b-6156-45bb-90b9-8de1f0428c47",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/max",
                                                "name": "Max",
                                                "displayName": "Max",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "Maximum character {maxLength}."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "4e8d6c38-ce89-4ab4-baa0-9a486841a96c",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max",
                                                    "name": "Max",
                                                    "displayName": "Max",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "max"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              },
                                              {
                                                "id": "5ce776d9-7c3a-42de-8980-cad513690640",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/integer",
                                                "name": "Integer",
                                                "displayName": "Integer",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "Please provide valid input format."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "74d61c2b-9728-4e0c-b38f-839e8b27d19e",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/integer",
                                                    "name": "Integer",
                                                    "displayName": "Integer",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "integer"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              }
                                            ],
                                            "tooltipImage": {
                                              "value": {}
                                            },
                                            "tooltipText": {
                                              "value": ""
                                            },
                                            "subLabel": {
                                              "value": ""
                                            },
                                            "placeholderText": {
                                              "value": ""
                                            },
                                            "width": {
                                              "id": "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                                              "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                                              "name": "Full Width",
                                              "displayName": "Full Width",
                                              "fields": {
                                                "Value": {
                                                  "value": "12"
                                                }
                                              },
                                              "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                              "templateName": "Enum"
                                            },
                                            "fieldName": {
                                              "value": "windows"
                                            }
                                          },
                                          "templateId": "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                                          "templateName": "Number"
                                        },
                                        "maxLength": {
                                          "value": 10
                                        },
                                        "minLength": {
                                          "value": 2
                                        },
                                        "defaultValue": {
                                          "value": "0"
                                        },
                                        "label": {
                                          "value": "Doors"
                                        },
                                        "validations": [
                                          {
                                            "id": "7ca5fa64-2b7e-4238-959d-f9d3098cc97c",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/required",
                                            "name": "Required",
                                            "displayName": "Required",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "{fieldLabel} is required."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "d16071b0-1df1-4f24-ab33-e2b22203e0b0",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required",
                                                "name": "Required",
                                                "displayName": "Required",
                                                "fields": {
                                                  "Value": {
                                                    "value": "required"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          },
                                          {
                                            "id": "6ad1f3f3-a869-44ae-813b-d28a84837363",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/min",
                                            "name": "Min",
                                            "displayName": "Min",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "Please lengthen this text to {minLength}."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "f2bcfc31-032a-408c-bace-139011009e95",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min",
                                                "name": "Min",
                                                "displayName": "Min",
                                                "fields": {
                                                  "Value": {
                                                    "value": "min"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          },
                                          {
                                            "id": "d78b256b-6156-45bb-90b9-8de1f0428c47",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/max",
                                            "name": "Max",
                                            "displayName": "Max",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "Maximum character {maxLength}."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "4e8d6c38-ce89-4ab4-baa0-9a486841a96c",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max",
                                                "name": "Max",
                                                "displayName": "Max",
                                                "fields": {
                                                  "Value": {
                                                    "value": "max"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          },
                                          {
                                            "id": "5ce776d9-7c3a-42de-8980-cad513690640",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/integer",
                                            "name": "Integer",
                                            "displayName": "Integer",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "Please provide valid input format."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "74d61c2b-9728-4e0c-b38f-839e8b27d19e",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/integer",
                                                "name": "Integer",
                                                "displayName": "Integer",
                                                "fields": {
                                                  "Value": {
                                                    "value": "integer"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          }
                                        ],
                                        "tooltipImage": {
                                          "value": {}
                                        },
                                        "tooltipText": {
                                          "value": ""
                                        },
                                        "subLabel": {
                                          "value": ""
                                        },
                                        "placeholderText": {
                                          "value": ""
                                        },
                                        "width": {
                                          "id": "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                                          "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                                          "name": "Full Width",
                                          "displayName": "Full Width",
                                          "fields": {
                                            "Value": {
                                              "value": "12"
                                            }
                                          },
                                          "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                          "templateName": "Enum"
                                        },
                                        "fieldName": {
                                          "value": "doors"
                                        },
                                        "children": []
                                      }
                                    },
                                    {
                                      "id": "8039db14-f59d-4c84-8309-05c9d7dfa312",
                                      "displayName": "Windows",
                                      "name": "Windows",
                                      "templateId": "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                                      "templateName": "Number",
                                      "url": "https://data.dev.renewalbyandersen.com/forms/horizontal-devs/form---number/page/windows",
                                      "fields": {
                                        "dependsOn": {
                                          "id": "a06f0dec-746f-44c6-a4a2-4f3404096ada",
                                          "url": "https://data.dev.renewalbyandersen.com/forms/horizontal-devs/form---number/page/doors",
                                          "name": "Doors",
                                          "displayName": "Doors",
                                          "fields": {
                                            "dependsOn": {
                                              "id": "8039db14-f59d-4c84-8309-05c9d7dfa312",
                                              "url": "https://data.dev.renewalbyandersen.com/forms/horizontal-devs/form---number/page/windows",
                                              "name": "Windows",
                                              "displayName": "Windows",
                                              "fields": {
                                                "maxLength": {
                                                  "value": 10
                                                },
                                                "minLength": {
                                                  "value": 2
                                                },
                                                "defaultValue": {
                                                  "value": "0"
                                                },
                                                "label": {
                                                  "value": "Windows windows"
                                                },
                                                "validations": [
                                                  {
                                                    "id": "7ca5fa64-2b7e-4238-959d-f9d3098cc97c",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/required",
                                                    "name": "Required",
                                                    "displayName": "Required",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "{fieldLabel} is required."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "d16071b0-1df1-4f24-ab33-e2b22203e0b0",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required",
                                                        "name": "Required",
                                                        "displayName": "Required",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "required"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  },
                                                  {
                                                    "id": "6ad1f3f3-a869-44ae-813b-d28a84837363",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/min",
                                                    "name": "Min",
                                                    "displayName": "Min",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "Please lengthen this text to {minLength}."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "f2bcfc31-032a-408c-bace-139011009e95",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min",
                                                        "name": "Min",
                                                        "displayName": "Min",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "min"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  },
                                                  {
                                                    "id": "d78b256b-6156-45bb-90b9-8de1f0428c47",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/max",
                                                    "name": "Max",
                                                    "displayName": "Max",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "Maximum character {maxLength}."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "4e8d6c38-ce89-4ab4-baa0-9a486841a96c",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max",
                                                        "name": "Max",
                                                        "displayName": "Max",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "max"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  },
                                                  {
                                                    "id": "5ce776d9-7c3a-42de-8980-cad513690640",
                                                    "url": "https://data.dev.renewalbyandersen.com/forms/validations/integer",
                                                    "name": "Integer",
                                                    "displayName": "Integer",
                                                    "fields": {
                                                      "errorMessage": {
                                                        "value": "Please provide valid input format."
                                                      },
                                                      "validationRule": {
                                                        "value": ""
                                                      },
                                                      "validationType": {
                                                        "id": "74d61c2b-9728-4e0c-b38f-839e8b27d19e",
                                                        "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/integer",
                                                        "name": "Integer",
                                                        "displayName": "Integer",
                                                        "fields": {
                                                          "Value": {
                                                            "value": "integer"
                                                          }
                                                        },
                                                        "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                        "templateName": "Enum"
                                                      }
                                                    },
                                                    "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                    "templateName": "Field Validation"
                                                  }
                                                ],
                                                "tooltipImage": {
                                                  "value": {}
                                                },
                                                "tooltipText": {
                                                  "value": ""
                                                },
                                                "subLabel": {
                                                  "value": ""
                                                },
                                                "placeholderText": {
                                                  "value": ""
                                                },
                                                "width": {
                                                  "id": "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                                                  "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                                                  "name": "Full Width",
                                                  "displayName": "Full Width",
                                                  "fields": {
                                                    "Value": {
                                                      "value": "12"
                                                    }
                                                  },
                                                  "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                  "templateName": "Enum"
                                                },
                                                "fieldName": {
                                                  "value": "windows"
                                                }
                                              },
                                              "templateId": "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                                              "templateName": "Number"
                                            },
                                            "maxLength": {
                                              "value": 10
                                            },
                                            "minLength": {
                                              "value": 2
                                            },
                                            "defaultValue": {
                                              "value": "0"
                                            },
                                            "label": {
                                              "value": "Doors"
                                            },
                                            "validations": [
                                              {
                                                "id": "7ca5fa64-2b7e-4238-959d-f9d3098cc97c",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/required",
                                                "name": "Required",
                                                "displayName": "Required",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "{fieldLabel} is required."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "d16071b0-1df1-4f24-ab33-e2b22203e0b0",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required",
                                                    "name": "Required",
                                                    "displayName": "Required",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "required"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              },
                                              {
                                                "id": "6ad1f3f3-a869-44ae-813b-d28a84837363",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/min",
                                                "name": "Min",
                                                "displayName": "Min",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "Please lengthen this text to {minLength}."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "f2bcfc31-032a-408c-bace-139011009e95",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min",
                                                    "name": "Min",
                                                    "displayName": "Min",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "min"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              },
                                              {
                                                "id": "d78b256b-6156-45bb-90b9-8de1f0428c47",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/max",
                                                "name": "Max",
                                                "displayName": "Max",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "Maximum character {maxLength}."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "4e8d6c38-ce89-4ab4-baa0-9a486841a96c",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max",
                                                    "name": "Max",
                                                    "displayName": "Max",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "max"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              },
                                              {
                                                "id": "5ce776d9-7c3a-42de-8980-cad513690640",
                                                "url": "https://data.dev.renewalbyandersen.com/forms/validations/integer",
                                                "name": "Integer",
                                                "displayName": "Integer",
                                                "fields": {
                                                  "errorMessage": {
                                                    "value": "Please provide valid input format."
                                                  },
                                                  "validationRule": {
                                                    "value": ""
                                                  },
                                                  "validationType": {
                                                    "id": "74d61c2b-9728-4e0c-b38f-839e8b27d19e",
                                                    "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/integer",
                                                    "name": "Integer",
                                                    "displayName": "Integer",
                                                    "fields": {
                                                      "Value": {
                                                        "value": "integer"
                                                      }
                                                    },
                                                    "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                    "templateName": "Enum"
                                                  }
                                                },
                                                "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                                "templateName": "Field Validation"
                                              }
                                            ],
                                            "tooltipImage": {
                                              "value": {}
                                            },
                                            "tooltipText": {
                                              "value": ""
                                            },
                                            "subLabel": {
                                              "value": ""
                                            },
                                            "placeholderText": {
                                              "value": ""
                                            },
                                            "width": {
                                              "id": "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                                              "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                                              "name": "Full Width",
                                              "displayName": "Full Width",
                                              "fields": {
                                                "Value": {
                                                  "value": "12"
                                                }
                                              },
                                              "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                              "templateName": "Enum"
                                            },
                                            "fieldName": {
                                              "value": "doors"
                                            }
                                          },
                                          "templateId": "78ab6aec-5df4-490d-b9fd-aecf481b3323",
                                          "templateName": "Number"
                                        },
                                        "maxLength": {
                                          "value": 10
                                        },
                                        "minLength": {
                                          "value": 2
                                        },
                                        "defaultValue": {
                                          "value": "0"
                                        },
                                        "label": {
                                          "value": "Windows windows"
                                        },
                                        "validations": [
                                          {
                                            "id": "7ca5fa64-2b7e-4238-959d-f9d3098cc97c",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/required",
                                            "name": "Required",
                                            "displayName": "Required",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "{fieldLabel} is required."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "d16071b0-1df1-4f24-ab33-e2b22203e0b0",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required",
                                                "name": "Required",
                                                "displayName": "Required",
                                                "fields": {
                                                  "Value": {
                                                    "value": "required"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          },
                                          {
                                            "id": "6ad1f3f3-a869-44ae-813b-d28a84837363",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/min",
                                            "name": "Min",
                                            "displayName": "Min",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "Please lengthen this text to {minLength}."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "f2bcfc31-032a-408c-bace-139011009e95",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min",
                                                "name": "Min",
                                                "displayName": "Min",
                                                "fields": {
                                                  "Value": {
                                                    "value": "min"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          },
                                          {
                                            "id": "d78b256b-6156-45bb-90b9-8de1f0428c47",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/max",
                                            "name": "Max",
                                            "displayName": "Max",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "Maximum character {maxLength}."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "4e8d6c38-ce89-4ab4-baa0-9a486841a96c",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max",
                                                "name": "Max",
                                                "displayName": "Max",
                                                "fields": {
                                                  "Value": {
                                                    "value": "max"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          },
                                          {
                                            "id": "5ce776d9-7c3a-42de-8980-cad513690640",
                                            "url": "https://data.dev.renewalbyandersen.com/forms/validations/integer",
                                            "name": "Integer",
                                            "displayName": "Integer",
                                            "fields": {
                                              "errorMessage": {
                                                "value": "Please provide valid input format."
                                              },
                                              "validationRule": {
                                                "value": ""
                                              },
                                              "validationType": {
                                                "id": "74d61c2b-9728-4e0c-b38f-839e8b27d19e",
                                                "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/integer",
                                                "name": "Integer",
                                                "displayName": "Integer",
                                                "fields": {
                                                  "Value": {
                                                    "value": "integer"
                                                  }
                                                },
                                                "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                                "templateName": "Enum"
                                              }
                                            },
                                            "templateId": "368f5461-9a97-49cb-a2d3-6b4e271340ff",
                                            "templateName": "Field Validation"
                                          }
                                        ],
                                        "tooltipImage": {
                                          "value": {}
                                        },
                                        "tooltipText": {
                                          "value": ""
                                        },
                                        "subLabel": {
                                          "value": ""
                                        },
                                        "placeholderText": {
                                          "value": ""
                                        },
                                        "width": {
                                          "id": "998f4a8c-e357-4e2d-9071-ab2addfa8283",
                                          "url": "/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width",
                                          "name": "Full Width",
                                          "displayName": "Full Width",
                                          "fields": {
                                            "Value": {
                                              "value": "12"
                                            }
                                          },
                                          "templateId": "d2923fee-da4e-49be-830c-e27764dfa269",
                                          "templateName": "Enum"
                                        },
                                        "fieldName": {
                                          "value": "windows"
                                        },
                                        "children": []
                                      }
                                    },
            {
              id: '24724fa6-caa3-4e10-8dc7-6bb512babc0a',
              displayName: 'ZIP Code CA',
              name: 'ZIP Code CA',
              templateId: '353ea57b-c16e-4079-92db-f169461acd5e',
              templateName: 'ZIP Code',
              url: '/Data/Forms/Single-Step-Form/Form-Page/ZIP-Code-CA',
              fields: {
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'ZIP Code CA',
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
                    id: 'd9ed63d3-e3f9-4c9c-956e-c31048c4e0ff',
                    url: '/Data/Forms/Validations/CA-ZIP-Code',
                    name: 'CA ZIP Code',
                    displayName: 'CA ZIP Code',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value:
                          '^(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]{3} [a-zA-Z\\d]{3}$|^(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]{6}$',
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
                  id: '9abcf9d2-2546-497b-a4ee-6afd0f11b388',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Submit-Actions/Field-Mappings/Enabled-Plus/Zipcode',
                  name: 'Zipcode',
                  displayName: 'Zipcode',
                  fields: {
                    Value: {
                      value: 'Zipcode',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'ZIPCodeCA',
                },
                children: [],
              },
            },
            {
              id: '7557f486-4c62-4878-b018-8203f6b2a93b',
              displayName: 'ZIP Code CA or US',
              name: 'ZIP Code CA or US',
              templateId: '353ea57b-c16e-4079-92db-f169461acd5e',
              templateName: 'ZIP Code',
              url: '/Data/Forms/Single-Step-Form/Form-Page/ZIP-Code-CA-or-US',
              fields: {
                defaultValue: {
                  value: '12345',
                },
                label: {
                  value: 'ZIP Code CA or US',
                },
                validations: [
                  {
                    id: '54766bb4-1047-4dee-90fd-d79c806474e9',
                    url: '/Data/Forms/Validations/US-or-CA-ZIP-Code',
                    name: 'US or CA ZIP Code',
                    displayName: 'US or CA ZIP Code',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value:
                          '(^(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]{3} [a-zA-Z\\d]{3}$|^(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]{6}$)|(^[0-9]{5}$)',
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
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'ZIPCodeCAUS',
                },
                children: [],
              },
            },
            {
              id: '9d6c253b-863e-4edf-9883-f2ed2a0d8407',
              displayName: 'ZIP Code US',
              name: 'ZIP Code US',
              templateId: '353ea57b-c16e-4079-92db-f169461acd5e',
              templateName: 'ZIP Code',
              url: '/Data/Forms/Single-Step-Form/Form-Page/ZIP-Code-US',
              fields: {
                defaultValue: {
                  value: 'Test',
                },
                label: {
                  value: 'ZIP Code US',
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
                    id: '454eb912-9aac-49b4-ba2d-33308e42f912',
                    url: '/Data/Forms/Validations/US-ZIP-Code',
                    name: 'US ZIP Code',
                    displayName: 'US ZIP Code',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value: '^[0-9]{5}$',
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
                  id: '9abcf9d2-2546-497b-a4ee-6afd0f11b388',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Submit-Actions/Field-Mappings/Enabled-Plus/Zipcode',
                  name: 'Zipcode',
                  displayName: 'Zipcode',
                  fields: {
                    Value: {
                      value: 'Zipcode',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
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
                fieldName: {
                  value: 'ZIPCodeUS',
                },
                children: [],
              },
            },
            {
              id: '5099950a-15ba-4799-b3a7-d16fb7f292c2',
              displayName: 'Dropdown1',
              name: 'Dropdown1',
              templateId: '1107f99a-cc75-44ce-be55-8318199d91bd',
              templateName: 'Dropdown',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown1',
              fields: {
                defaultDisplay: {
                  value: 'Select One',
                },
                defaultValue: null,
                showDefaultDisplay: {
                  value: true,
                },
                datasource: {
                  id: 'b2a0d0d5-c8d4-442a-b24d-0b482930fa65',
                  url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown1/List-Items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: 'd442cf21-75f9-4659-9920-6e4c2375aaf4',
                      url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown1/List-Items/Homeowner',
                      name: 'Homeowner',
                      displayName: 'Homeowner',
                      fields: {
                        title: {
                          value: 'Homeowner',
                        },
                        value: {
                          value: 'Homeowner',
                        },
                      },
                      templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                      templateName: 'List Item',
                    },
                    {
                      id: '43a50dca-8877-44d1-bb06-76692d2d75d5',
                      url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown1/List-Items/Trade-Professional',
                      name: 'Trade Professional',
                      displayName: 'Trade Professional',
                      fields: {
                        title: {
                          value: 'Trade Professional',
                        },
                        value: {
                          value: 'Trade Professional',
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
                  value: 'Dropdown1',
                },
                validations: [],
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: 'Sub label',
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
                fieldName: {
                  value: 'DD1',
                },
                children: [
                  {
                    id: 'b2a0d0d5-c8d4-442a-b24d-0b482930fa65',
                    displayName: 'List Items',
                    name: 'List Items',
                    templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                    templateName: 'List Item Folder',
                    url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown1/List-Items',
                    fields: {},
                  },
                ],
              },
            },
            {
              id: '9036cb0c-592e-4c31-8af0-f985e9633303',
              displayName: 'Dropdown2',
              name: 'Dropdown2',
              templateId: '1107f99a-cc75-44ce-be55-8318199d91bd',
              templateName: 'Dropdown',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown2',
              fields: {
                defaultDisplay: {
                  value: '',
                },
                defaultValue: null,
                showDefaultDisplay: {
                  value: true,
                },
                datasource: {
                  id: '3b345b2e-2618-426e-a5f9-5f352b9da1d8',
                  url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type',
                  name: 'Window Type',
                  displayName: 'Window Type',
                  fields: {},
                  templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                  templateName: 'Facet Folder',
                  children: [
                    {
                      id: '092822d3-fbcd-41e2-b5e8-66e4f3cb2cd8',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Awing',
                      name: 'Awing',
                      displayName: 'Awing',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Awning',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '3ba44ca6-c8bf-4a32-be4c-1c315d468372',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Basement-Windows',
                      name: 'Basement Windows',
                      displayName: 'Basement Windows',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Basement/Utility',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '3900fea7-a1df-427f-b267-3ddb29b53d67',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Bow-and-Bay',
                      name: 'Bow and Bay',
                      displayName: 'Bow and Bay',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Bow and Bay',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '70a5f483-d327-41db-813b-2d77d35a8b7e',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Casement',
                      name: 'Casement',
                      displayName: 'Casement',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Casement',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '6ab8c7cb-a3ad-49e3-8908-ffabb223b170',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Double-Hung',
                      name: 'Double-Hung',
                      displayName: 'Double-Hung',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Double-Hung',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '38128784-3bb5-4b8a-9bc5-dcae769be47d',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Gliding',
                      name: 'Gliding',
                      displayName: 'Gliding',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Gliding',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '012a5096-fb11-437a-9142-167b2e1559f3',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Hopper',
                      name: 'Hopper',
                      displayName: 'Hopper',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Hopper',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '6c52d8b9-d3d3-42c1-b2c4-91fd9aea4827',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Picture',
                      name: 'Picture',
                      displayName: 'Picture',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Picture',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'fdb8347d-f03d-4783-b350-6e904413101d',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Single-Hung',
                      name: 'Single-Hung',
                      displayName: 'Single-Hung',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Single-Hung',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'ef653c59-da1f-44cf-99d5-5fc112cc88db',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Skylights',
                      name: 'Skylights',
                      displayName: 'Skylights',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Skylights',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '6224ccbf-934e-43cb-8eb0-9788495c847d',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Specialty',
                      name: 'Specialty',
                      displayName: 'Specialty',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Specialty',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '6dc278d6-82d2-4876-a21d-d2cdd066e887',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Window-Type/Window-Wall',
                      name: 'Window Wall',
                      displayName: 'Window Wall',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Window Wall',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                  ],
                },
                displayFieldName: {
                  value: 'title',
                },
                valueFieldName: {
                  value: 'title',
                },
                label: {
                  value: 'Dropdown2',
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
                  value: 'Sub label',
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
                fieldName: {
                  value: 'DD2',
                },
                children: [],
              },
            },
            {
              id: '9d69a29f-ac16-4488-8e92-e7d5dfac3a2b',
              displayName: 'Dropdown3',
              name: 'Dropdown3',
              templateId: '1107f99a-cc75-44ce-be55-8318199d91bd',
              templateName: 'Dropdown',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Dropdown3',
              fields: {
                defaultDisplay: {
                  value: '',
                },
                defaultValue: {
                  id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                  url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Commercial-Entry',
                  name: 'Commercial Entry',
                  displayName: 'Commercial Entry',
                  fields: {
                    hierarchicalValue: {
                      value: '',
                    },
                    title: {
                      value: 'Commercial Entry',
                    },
                  },
                  templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                  templateName: 'Facet Tag',
                },
                showDefaultDisplay: {
                  value: false,
                },
                datasource: {
                  id: 'a9d74dc5-fa25-459b-8bcf-3ac4a6aad747',
                  url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type',
                  name: 'Door Type',
                  displayName: 'Door Type',
                  fields: {},
                  templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                  templateName: 'Facet Folder',
                  children: [
                    {
                      id: '0caaf8e9-25d2-48a5-a88c-4b17baec5835',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Big-Doors',
                      name: 'Big Doors',
                      displayName: 'Big Doors',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Big Doors',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Commercial-Entry',
                      name: 'Commercial Entry',
                      displayName: 'Commercial Entry',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Commercial Entry',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'ce525246-ca96-40f1-99ac-fc3aef7a7218',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Folding-Patio',
                      name: 'Folding Patio',
                      displayName: 'Folding Patio',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Folding Patio',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'c9c1f699-1a40-432e-afad-0e07b3def7b6',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Full-Light-Anytime',
                      name: 'Full Light Anytime',
                      displayName: 'Full Light Anytime',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Full Light Anytime Ventilation',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'ddba5dce-e42c-4d3f-a24c-8045cd2f955e',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Full-Light-Seasonal',
                      name: 'Full Light Seasonal',
                      displayName: 'Full Light Seasonal',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Full Light Seasonal Ventilation',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'ac3df907-a6da-40df-b1f5-0926bb394b39',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Gliding-Patio',
                      name: 'Gliding Patio',
                      displayName: 'Gliding Patio',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Gliding Patio',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '9bad48cc-cb0f-48f2-8ba8-07d70b943f54',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Hinged-Patio',
                      name: 'Hinged Patio',
                      displayName: 'Hinged Patio',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Hinged Patio',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '49fea60a-c968-4132-b992-4d09df8407a5',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Liftslide-Door',
                      name: 'Liftslide Door',
                      displayName: 'Liftslide Door',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Liftslide Door',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'a5088b88-b119-4c8f-9250-72475b155bc9',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Multi-Slide-Door',
                      name: 'Multi Slide Door',
                      displayName: 'Multi Slide Door',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Multi-Slide Door',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '278f3558-da6e-4e74-bfe3-b74000c320ab',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/MultiGlide',
                      name: 'MultiGlide',
                      displayName: 'MultiGlide',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'MultiGlide',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '63cb0220-757e-4caa-bbfa-8a7f9497f216',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Partial-Light-1-2-Light',
                      name: 'Partial Light 1-2 Light',
                      displayName: 'Partial Light 1-2 Light',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Partial Light 1/2 Light',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'baf6b76a-0e58-4cc4-bae2-48604b8dcf55',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Partial-Light-3-4-Light',
                      name: 'Partial Light 3-4 Light',
                      displayName: 'Partial Light 3-4 Light',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Partial Light 3/4 Light',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'adc1aac6-a490-4b4e-98d3-50352ee56541',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Pet-Entry-System',
                      name: 'Pet Entry System',
                      displayName: 'Pet Entry System',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Partial Light With Pet Entry System',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'cc21549a-e34f-4694-b0f0-1dd8d9a85642',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Pivot-Door',
                      name: 'Pivot Door',
                      displayName: 'Pivot Door',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Pivot Door',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '3f1f2594-f026-4223-88da-a7e672b2adb2',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Residential-Entry',
                      name: 'Residential Entry',
                      displayName: 'Residential Entry',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Residential Entry',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'e77ade7f-392e-49ab-96b5-abedf83c92f9',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Screen-Door',
                      name: 'Screen Door',
                      displayName: 'Screen Door',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Screen Door',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: '8610958d-1f4f-486b-bd5a-e7cd9b1daef3',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Sliding-Glass-Door',
                      name: 'Sliding Glass Door',
                      displayName: 'Sliding Glass Door',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Sliding Glass Door',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                    {
                      id: 'c67fdf8f-23e8-44bc-bff0-af4d0231250f',
                      url: 'http://localhost/AndersenCorporation/AndersenWindows/Global/Facets/Door-Type/Storm-Doors',
                      name: 'Storm Doors',
                      displayName: 'Storm Doors',
                      fields: {
                        hierarchicalValue: {
                          value: '',
                        },
                        title: {
                          value: 'Storm Doors',
                        },
                      },
                      templateId: '57e27d6d-7d40-4566-bdc7-e401393e793e',
                      templateName: 'Facet Tag',
                    },
                  ],
                },
                displayFieldName: {
                  value: 'title',
                },
                valueFieldName: {
                  value: 'title',
                },
                label: {
                  value: 'Dropdown3',
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
                  value: 'Sub label',
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
                fieldName: {
                  value: 'DD3',
                },
                children: [],
              },
            },
            {
              id: '9773ee1f-0fe7-49eb-b3fc-221fd1934e0a',
              displayName: 'Text Area',
              name: 'Text Area',
              templateId: '62d234ca-1c65-4699-8bfe-339c28d92761',
              templateName: 'Text Area',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Text-Area',
              fields: {
                rows: {
                  value: 5,
                },
                showRemainingCharactersCount: {
                  value: false,
                },
                maxLength: {
                  value: 1000,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Text Area',
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
                ],
                fieldMapping: null,
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: 'Sub Label Sub Label Sub Label Sub Label Sub Label',
                },
                placeholderText: {
                  value: 'Enter your text here',
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
                fieldName: {
                  value: 'TextArea',
                },
                children: [],
              },
            },
            {
              id: '2f5021da-e265-4916-a148-3614e5b0f771',
              displayName: 'Text Area Optional',
              name: 'Text Area Optional',
              templateId: '62d234ca-1c65-4699-8bfe-339c28d92761',
              templateName: 'Text Area',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Text-Area-Optional',
              fields: {
                rows: {
                  value: null,
                },
                showRemainingCharactersCount: {
                  value: true,
                },
                maxLength: {
                  value: 500,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: 'Enter your text here default value',
                },
                label: {
                  value: 'Text Area Optional',
                },
                validations: [
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
                placeholderText: {
                  value: '',
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
                fieldName: {
                  value: 'TextAreaOptional',
                },
                children: [],
              },
            },
            {
              id: '69a58e1a-a203-41d3-bb30-6a6342770007',
              displayName: 'Consent Checkbox Optional',
              name: 'Consent Checkbox Optional',
              templateId: '45aceae2-f114-43ae-8426-714f7af7ac2b',
              templateName: 'Consent Checkbox',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Consent-Checkbox-Optional',
              fields: {
                consentText: {
                  value:
                    'I also want to receive monthly inspiration newsletter emails from Andersen Windows.',
                },
                validations: [],
                fieldMapping: null,
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
                fieldName: {
                  value: 'ConsentCheckbox1',
                },
                children: [],
              },
            },
            {
              id: 'b7713471-7063-47c0-b497-4942a6b9fd87',
              displayName: 'Consent Checkbox',
              name: 'Consent Checkbox',
              templateId: '45aceae2-f114-43ae-8426-714f7af7ac2b',
              templateName: 'Consent Checkbox',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Consent-Checkbox',
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
                fieldName: {
                  value: 'ConsentCheckbox',
                },
                children: [],
              },
            },
            {
              id: '80e2a967-8cd4-466c-8a97-2c12ba3085f4',
              displayName: 'Terms and Conditions',
              name: 'Terms and Conditions',
              templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
              templateName: 'Description',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Terms-and-Conditions',
              fields: {
                body: {
                  value:
                    'I want to learn more about Andersen Windows, Inc. and its subsidiaries and affiliates’ products. By submitting this form, which I agree is my signature, I consent to receive recurring informational and advertising calls, texts, and emails from Andersen Windows, Inc. and its subsidiaries and affiliates, including by automated technology or prerecorded voice. I understand consent is not required for purchase and that I can opt out at any time, including (for texts) by replying “STOP.” I understand any Andersen Windows, Inc. and its subsidiary and affiliate calls may be recorded. Andersen Windows, Inc. and its subsidiaries and affiliates collect certain categories of personal information and use this information in various ways, including order fulfillment and providing product information and services, as further described in our <a href="https://www.andersenwindows.com/support/privacy/">Privacy Policy</a>.I agree to Andersen Windows, Inc.’s <a href="https://www.andersenwindows.com/support/privacy/">Privacy Policy</a> and <a href="https://www.andersenwindows.com/support/terms">Terms and Conditions.</a>Message and data rates apply. California residents, <a href="https://www.andersenwindows.com/support/privacy-california/">click here</a> for more information about the information we collect.',
                },
                children: [],
              },
            },
            {
              id: '9469234d-b7be-4247-a598-403fbe070321',
              displayName: 'Submit',
              name: 'Submit',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/Single-Step-Form/Form-Page/Submit',
              fields: {
                icon: null,
                navigationStep: {
                  id: 'b6185a15-c782-4ddf-8ad4-21620a8fe9d4',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Navigation-Steps/Submit',
                  name: 'Submit',
                  displayName: 'Submit',
                  fields: {
                    Value: {
                      value: '0',
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
                mobileWidth: null,
                width: null,
                label: {
                  value: 'Submit',
                },
                children: [],
              },
            },
          ],
        },
      },
    ],
  },
};
export default defaultData;
