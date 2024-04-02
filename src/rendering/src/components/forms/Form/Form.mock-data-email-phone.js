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
              id: '4ac1d2ec-d5c9-4faa-a5b9-b8370518545b',
              displayName: 'Headline',
              name: 'Headline',
              templateId: '78e78e19-8b37-4637-8c04-9de221572d0d',
              templateName: 'Headline',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Headline',
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
                  value: 'Headline',
                },
              },
            },
            {
              id: '1c5b2697-b627-4180-9482-d2052a3c9488',
              displayName: 'Paragraph',
              name: 'Paragraph',
              templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
              templateName: 'Paragraph',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Paragraph',
              fields: {
                body: {
                  value: '',
                },
              },
            },
            {
              id: '247c5342-1f68-480c-aaac-8f45a4465297',
              displayName: 'Date Custom',
              name: 'Date Custom',
              templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
              templateName: 'Date',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Date-Custom',
              fields: {
                minDateCustom: {
                  value: '2023-08-01T00:00:00Z',
                },
                defaultValue: {
                  id: '70279177-f1df-41c9-9941-b1fb53917747',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Default-Date/Custom',
                  name: 'Custom',
                  displayName: 'Custom',
                  fields: {
                    Value: {
                      value: 'custom',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                defaultValueCustom: {
                  value: '2023-09-10T00:00:00Z',
                },
                maxDate: {
                  id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Custom',
                  name: 'Custom',
                  displayName: 'Custom',
                  fields: {
                    Value: {
                      value: 'custom',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                maxDateCustom: {
                  value: '2023-10-31T00:00:00Z',
                },
                minDate: {
                  id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Custom',
                  name: 'Custom',
                  displayName: 'Custom',
                  fields: {
                    Value: {
                      value: 'custom',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Date Custom',
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
                validationSchema: {
                  id: 'f02f87f0-7ac1-456d-94db-2d91d2415fc0',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Date',
                  name: 'Date',
                  displayName: 'Date',
                  fields: {
                    Value: {
                      value: 'date',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: 'MM/DD/YYYY',
                },
              },
            },
            {
              id: '767c0d8a-92d2-4ed7-a0fe-f2ea060845bf',
              displayName: 'Date Today',
              name: 'Date Today',
              templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
              templateName: 'Date',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Date-Today',
              fields: {
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                defaultValue: {
                  id: 'ec9be357-e3f8-410f-b8b7-072272e5ac68',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Default-Date/Today',
                  name: 'Today',
                  displayName: 'Today',
                  fields: {
                    Value: {
                      value: 'today',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: null,
                maxDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                minDate: {
                  id: '2ee7070a-cdd7-4bc1-a00a-379d44e45893',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Today',
                  name: 'Today',
                  displayName: 'Today',
                  fields: {
                    Value: {
                      value: 'today',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Date Today',
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
                validationSchema: {
                  id: 'f02f87f0-7ac1-456d-94db-2d91d2415fc0',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Date',
                  name: 'Date',
                  displayName: 'Date',
                  fields: {
                    Value: {
                      value: 'date',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: 'MM/DD/YYYY',
                },
              },
            },
            {
              id: '3b1fabf7-a087-49db-9a85-9bb78898ff0e',
              displayName: 'Date Today - Custom',
              name: 'Date Today - Custom',
              templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
              templateName: 'Date',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Date-Today---Custom',
              fields: {
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: {
                  id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Custom',
                  name: 'Custom',
                  displayName: 'Custom',
                  fields: {
                    Value: {
                      value: 'custom',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                maxDateCustom: {
                  value: '2023-09-30T00:00:00Z',
                },
                minDate: {
                  id: '2ee7070a-cdd7-4bc1-a00a-379d44e45893',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Today',
                  name: 'Today',
                  displayName: 'Today',
                  fields: {
                    Value: {
                      value: 'today',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Date Today',
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
                validationSchema: {
                  id: 'f02f87f0-7ac1-456d-94db-2d91d2415fc0',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Date',
                  name: 'Date',
                  displayName: 'Date',
                  fields: {
                    Value: {
                      value: 'date',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: 'MM/DD/YYYY',
                },
              },
            },
            {
              id: '64a9a540-79da-4499-8706-bc5c0cb20855',
              displayName: 'Date Tomorrow',
              name: 'Date Tomorrow',
              templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
              templateName: 'Date',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Date-Tomorrow',
              fields: {
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: null,
                maxDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                minDate: {
                  id: '1d797cbb-7dac-44f3-a894-b844020ba0ac',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Tomorrow',
                  name: 'Tomorrow',
                  displayName: 'Tomorrow',
                  fields: {
                    Value: {
                      value: 'tomorrow',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Date Today',
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
                validationSchema: {
                  id: 'f02f87f0-7ac1-456d-94db-2d91d2415fc0',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Date',
                  name: 'Date',
                  displayName: 'Date',
                  fields: {
                    Value: {
                      value: 'date',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: '',
                },
              },
            },
            {
              id: 'a627aea1-9d38-4b3f-baa0-28deb0f1d76f',
              displayName: 'Date Yesterday',
              name: 'Date Yesterday',
              templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
              templateName: 'Date',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Date-Yesterday',
              fields: {
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: null,
                maxDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                minDate: {
                  id: 'd3b9f3a1-79ee-4d7c-8eb8-a47c76700868',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Yesterday',
                  name: 'Yesterday',
                  displayName: 'Yesterday',
                  fields: {
                    Value: {
                      value: 'yesterday',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Date Today',
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
                validationSchema: {
                  id: 'f02f87f0-7ac1-456d-94db-2d91d2415fc0',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Date',
                  name: 'Date',
                  displayName: 'Date',
                  fields: {
                    Value: {
                      value: 'date',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: '',
                },
              },
            },
            {
              id: '0552b2b7-1f9b-4a53-bdcd-54eda11075b7',
              displayName: 'Date Yesterday - Tomorrow',
              name: 'Date Yesterday - Tomorrow',
              templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
              templateName: 'Date',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Date-Yesterday---Tomorrow',
              fields: {
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: {
                  id: '1d797cbb-7dac-44f3-a894-b844020ba0ac',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Tomorrow',
                  name: 'Tomorrow',
                  displayName: 'Tomorrow',
                  fields: {
                    Value: {
                      value: 'tomorrow',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                maxDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                minDate: {
                  id: 'd3b9f3a1-79ee-4d7c-8eb8-a47c76700868',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Date/Yesterday',
                  name: 'Yesterday',
                  displayName: 'Yesterday',
                  fields: {
                    Value: {
                      value: 'yesterday',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Date Today',
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
                validationSchema: {
                  id: 'f02f87f0-7ac1-456d-94db-2d91d2415fc0',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Date',
                  name: 'Date',
                  displayName: 'Date',
                  fields: {
                    Value: {
                      value: 'date',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: 'MM/DD/YYYY',
                },
              },
            },
            {
              id: '38376d3f-cb82-448d-a96f-cf9b97265649',
              displayName: 'Email with Confirm Email',
              name: 'Email with Confirm Email',
              templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
              templateName: 'Email',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Email-with-Confirm-Email',
              fields: {
                confirmEmailLabel: {
                  value: 'Confirm Email',
                },
                confirmEmailMatchError: {
                  value: 'Confirm email should match with email.',
                },
                confirmEmailPlaceholderText: {
                  value: 'Confirm Email',
                },
                showConfirmEmail: {
                  value: true,
                },
                maxLength: {
                  value: 50,
                },
                minLength: {
                  value: 5,
                },
                defaultValue: {
                  value: 'aaa.aaa@aaa.com',
                },
                label: {
                  value: 'Email with Confirm Email',
                },
                validations: [
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
                    id: '655ff909-adcb-4e49-8988-372ee7bbb2b8',
                    url: '/Data/Forms/Validations/Email-with-Regex',
                    name: 'Email with Regex',
                    displayName: 'Email with Regex',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid email format.',
                      },
                      validationRule: {
                        value: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
                },
              },
            },
            {
              id: 'f67f360e-f94d-4c80-882b-84fc87a6b8c1',
              displayName: 'Only Email',
              name: 'Only Email',
              templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
              templateName: 'Email',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Only-Email',
              fields: {
                confirmEmailLabel: {
                  value: '',
                },
                confirmEmailMatchError: {
                  value: '',
                },
                confirmEmailPlaceholderText: {
                  value: '',
                },
                showConfirmEmail: {
                  value: false,
                },
                maxLength: {
                  value: 25,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Email',
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
                    id: '655ff909-adcb-4e49-8988-372ee7bbb2b8',
                    url: '/Data/Forms/Validations/Email-with-Regex',
                    name: 'Email with Regex',
                    displayName: 'Email with Regex',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid email format.',
                      },
                      validationRule: {
                        value: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '415275cd-28f5-4c11-be11-eb99bd13f422',
              displayName: 'Phone',
              name: 'Phone',
              templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
              templateName: 'Phone',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Phone',
              fields: {
                defaultValue: {
                  value: '9999999999',
                },
                label: {
                  value: 'Telephone',
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
                    id: '82dfe5d0-bc9e-444a-b618-1ccd0d226a4b',
                    url: '/Data/Forms/Validations/Phone',
                    name: 'Phone',
                    displayName: 'Phone',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value: '^(\\(\\d{3}\\) \\d{3}-\\d{4}|1 \\(\\d{3}\\) \\d{3}-\\d{4})$',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                fieldMapping: {
                  id: '685b50ed-6bb1-47c7-8c81-ca866d636f44',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Phone',
                  name: 'Phone',
                  displayName: 'Phone',
                  fields: {
                    Value: {
                      value: 'Phone',
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
              },
            },
            {
              id: 'c6991baa-298c-40e1-942a-e23b3289d71b',
              displayName: 'Phone Optional',
              name: 'Phone Optional',
              templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
              templateName: 'Phone',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Phone-Optional',
              fields: {
                defaultValue: {
                  value: '12345678901',
                },
                label: {
                  value: 'Telephone Optional',
                },
                validations: [
                  {
                    id: '82dfe5d0-bc9e-444a-b618-1ccd0d226a4b',
                    url: '/Data/Forms/Validations/Phone',
                    name: 'Phone',
                    displayName: 'Phone',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value: '^(\\(\\d{3}\\) \\d{3}-\\d{4}|1 \\(\\d{3}\\) \\d{3}-\\d{4})$',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                fieldMapping: {
                  id: '685b50ed-6bb1-47c7-8c81-ca866d636f44',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Field-Mappings/Enabled-Plus/Phone',
                  name: 'Phone',
                  displayName: 'Phone',
                  fields: {
                    Value: {
                      value: 'Phone',
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
              },
            },
            {
              id: '4178cfef-f055-42a6-b134-c8b4e2fc6a45',
              displayName: 'Short Text Alphabetic',
              name: 'Short Text Alphabetic',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Short-Text-Alphabetic',
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
                  value: 'Short Text',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
                  value: 'Tooltip Text',
                },
                subLabel: {
                  value: 'Sub Label',
                },
                placeholderText: {
                  value: 'Please provide input',
                },
              },
            },
            {
              id: '9fdf6014-974d-493c-ba5b-16c6aa9cc2f3',
              displayName: 'Short Text Alphanumeric',
              name: 'Short Text Alphanumeric',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Short-Text-Alphanumeric',
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
                  value: 'Short Text',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: 'da2baa3c-3f38-4340-a522-ec8a7cb827db',
              displayName: 'Short Text Numeric',
              name: 'Short Text Numeric',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Short-Text-Numeric',
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
                  value: 'Short Text',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '60184c61-746f-433d-ab6d-a7889a75bc2a',
              displayName: 'Short Text URL',
              name: 'Short Text URL',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Short-Text-URL',
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
                  value: 'Short Text',
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
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: 'ba527d41-7fff-49f9-9749-e6632966f575',
              displayName: 'Checkbox Group',
              name: 'Checkbox Group',
              templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
              templateName: 'Checkbox Group',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group',
              fields: {
                defaultValue: [],
                datasource: {
                  id: 'da4bdee7-6435-48d7-b71a-7e0012b273f8',
                  url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group/List-Items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: 'a70fa950-a2d1-46cb-9973-512367d9b7e4',
                      url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group/List-Items/Homeowner',
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
                      id: '57872b80-283a-41f5-9a96-47e6fd3ef9a9',
                      url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group/List-Items/Trade-Professional',
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
                  value: 'Checkbox Group',
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
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: 'b51e153e-dfc5-423e-ac2c-0f61bdc3f583',
              displayName: 'Checkbox Group 1',
              name: 'Checkbox Group 1',
              templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
              templateName: 'Checkbox Group',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group-1',
              fields: {
                defaultValue: [
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
                ],
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
                  value: 'Checkbox Group 1',
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
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: 'f9212ff0-8286-46e5-8220-41292598a5f6',
              displayName: 'Checkbox Group 2',
              name: 'Checkbox Group 2',
              templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
              templateName: 'Checkbox Group',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group-2',
              fields: {
                defaultValue: [
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
                ],
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
                  value: 'Checkbox Group 2',
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
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '911fb1d0-95f9-44ea-be4a-801b96763379',
              displayName: 'Checkbox Group 3',
              name: 'Checkbox Group 3',
              templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
              templateName: 'Checkbox Group',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Checkbox-Group-3',
              fields: {
                defaultValue: [
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
                ],
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
                  value: 'Checkbox Group 3',
                },
                validations: [],
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '625f8438-89e1-4042-b8bd-6578d0ffb959',
              displayName: 'Radio Button',
              name: 'Radio Button',
              templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
              templateName: 'Radio Button',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Radio-Button',
              fields: {
                defaultValue: null,
                datasource: {
                  id: '89f6df35-8d1f-4dfc-8ac2-af1778962f3f',
                  url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Radio-Button/List-Items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '273126a4-6625-4b1d-bbbd-7416c10ad078',
                      url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Radio-Button/List-Items/Homeowner',
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
                      id: 'c56fc3f9-eba3-4b98-aec1-83215fa9aa5a',
                      url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Radio-Button/List-Items/Trade-Professional',
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
                  value: 'Radio Button',
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
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: 'a39711aa-ad6b-4647-a501-1ae295594d9a',
              displayName: 'Radio Button 1',
              name: 'Radio Button 1',
              templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
              templateName: 'Radio Button',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Radio-Button-1',
              fields: {
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
                  value: 'Radio Button 1',
                },
                validations: [],
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '73709814-4dd8-44c9-8c09-2a1b077c0509',
              displayName: 'Radio Button 2',
              name: 'Radio Button 2',
              templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
              templateName: 'Radio Button',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Radio-Button-2',
              fields: {
                defaultValue: {
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
                  value: 'Radio Button 2',
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
                validationSchema: {
                  id: '95f9b10a-498d-41f9-98ee-26285d3e2f59',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/Boolean',
                  name: 'Boolean',
                  displayName: 'Boolean',
                  fields: {
                    Value: {
                      value: 'boolean',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '76022c7c-8312-4321-bb18-b0368131896d',
              displayName: 'Long Text',
              name: 'Long Text',
              templateId: '62d234ca-1c65-4699-8bfe-339c28d92761',
              templateName: 'Text Area',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Long-Text',
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
                  value: 'Long Text',
                },
                validations: [],
                validationSchema: {
                  id: 'f2e72f02-6014-4681-9ba5-e363a491a045',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Validation-Schema/String',
                  name: 'String',
                  displayName: 'String',
                  fields: {
                    Value: {
                      value: 'string',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
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
              },
            },
            {
              id: '7b8fe110-d3b5-44ee-b68c-ffb782270737',
              displayName: 'Submit',
              name: 'Submit',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/Single-Step-Form---Raveena/Form-Page/Submit',
              fields: {
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
                label: {
                  value: 'Submit',
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
