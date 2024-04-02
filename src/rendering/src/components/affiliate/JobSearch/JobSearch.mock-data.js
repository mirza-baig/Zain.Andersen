const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'JobSearch',
  },
  fields: {
    loadMoreCTAText: {
      value: 'Load more',
    },
    'ph-form': {
      id: '75ba1f96-2db0-4015-84e4-93259dbc3a85',
      url: '/data/forms/form---job-search-no-result',
      name: 'Form - Job Search No Result',
      displayName: 'Form - Job Search No Result',
      fields: {
        formName: {
          value: 'Form - Job Search No Result',
        },
        inputPadding: {
          id: '7a30ff50-3622-4b33-915c-750bc7e4a9bb',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/input-padding/standard',
          name: 'Standard',
          displayName: 'Standard',
          fields: {
            Value: {
              value: 'standard',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
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
      },
      templateId: '38f8e205-c367-494c-877e-57344f0f0ffd',
      templateName: 'Form',
      children: [
        {
          id: '6a075155-99db-4576-b853-74f1d1f92c15',
          url: '/data/forms/form---job-search-no-result/page',
          name: 'Page',
          displayName: 'Page',
          fields: {
            includeInSteps: {
              value: false,
            },
            label: {
              value: 'Page',
            },
          },
          children: [
            {
              id: '2ab34e8b-984a-4f7b-8cea-3534cf114f90',
              url: '/data/forms/form---job-search-no-result/page/first-name',
              name: 'First name',
              displayName: 'First name',
              fields: {
                maxLength: {
                  value: null,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                valueProviders: [],
                label: {
                  value: 'First name',
                },
                validations: [
                  {
                    id: '7ca5fa64-2b7e-4238-959d-f9d3098cc97c',
                    url: '/data/forms/validations/required',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
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
                  value: 'Placeholder/input text',
                },
                width: {
                  id: '998f4a8c-e357-4e2d-9071-ab2addfa8283',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width',
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
                  value: 'first-name',
                },
              },
            },
            {
              id: '837f4acb-fb0c-4f49-9d6d-95bd22f3aa5d',
              url: '/data/forms/form---job-search-no-result/page/last-name',
              name: 'Last name',
              displayName: 'Last name',
              fields: {
                maxLength: {
                  value: null,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                valueProviders: [],
                label: {
                  value: 'Last name',
                },
                validations: [
                  {
                    id: '7ca5fa64-2b7e-4238-959d-f9d3098cc97c',
                    url: '/data/forms/validations/required',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
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
                  value: 'Placeholder/input text',
                },
                width: {
                  id: '998f4a8c-e357-4e2d-9071-ab2addfa8283',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width',
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
                  value: 'last-name',
                },
              },
            },
            {
              id: 'e8faccde-590d-43fb-ac91-a7c49b849112',
              url: '/data/forms/form---job-search-no-result/page/email-address',
              name: 'Email address',
              displayName: 'Email address',
              fields: {
                maxLength: {
                  value: null,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                valueProviders: [],
                label: {
                  value: 'Email address',
                },
                validations: [
                  {
                    id: '7ca5fa64-2b7e-4238-959d-f9d3098cc97c',
                    url: '/data/forms/validations/required',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
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
                    id: 'b3c64631-4caa-4c99-a822-dfe851b23f89',
                    url: '/data/forms/validations/email-with-regex',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/matches',
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
                  value: 'Placeholder/input text',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width',
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
                fieldName: {
                  value: 'email-address',
                },
              },
            },
            {
              id: '2abf19dc-851b-4317-b04d-6060e02753ad',
              url: '/data/forms/form---job-search-no-result/page/phone-number',
              name: 'Phone number',
              displayName: 'Phone number',
              fields: {
                maxLength: {
                  value: null,
                },
                minLength: {
                  value: null,
                },
                defaultValue: {
                  value: '',
                },
                valueProviders: [],
                label: {
                  value: 'Phone number',
                },
                validations: [
                  {
                    id: '7ca5fa64-2b7e-4238-959d-f9d3098cc97c',
                    url: '/data/forms/validations/required',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
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
                    id: 'af8ea5e3-2776-4bfa-a587-3d9c57ac48a3',
                    url: '/data/forms/validations/phone',
                    name: 'Phone',
                    displayName: 'Phone',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid phone format.',
                      },
                      validationRule: {
                        value: '\\(\\d{3}\\) \\d{3}-\\d{4}',
                      },
                      validationType: {
                        id: '554dc4fc-8479-47d0-8a7e-1b401ac70c65',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/matches',
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
                  value: 'Placeholder/input text',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width',
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
                fieldName: {
                  value: 'phone-number',
                },
              },
            },
            {
              id: 'b3eb7ead-1d6b-4ea5-8c14-0a8777f2cdad',
              url: '/data/forms/form---job-search-no-result/page/locations-of-interest',
              name: 'Locations of interest',
              displayName: 'Locations of interest',
              fields: {
                defaultDisplay: {
                  value: '',
                },
                defaultValue: {
                  id: '416f665e-a372-4f99-856d-a5e6294e162e',
                  url: '/data/forms/states/minnesota',
                  name: 'Minnesota',
                  displayName: 'Minnesota',
                  fields: {
                    title: {
                      value: 'Minnesota',
                    },
                    value: {
                      value: 'Minnesota',
                    },
                  },
                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                  templateName: 'List Item',
                },
                showDefaultDisplay: {
                  value: true,
                },
                datasource: {
                  id: '7fb34bbc-e161-4c25-b5b4-de5f2ecd2564',
                  url: '/data/forms/states',
                  name: 'States',
                  displayName: 'States',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '25398af1-0be7-4e2e-8946-817a15acbe97',
                      url: '/data/forms/states/alabama',
                      name: 'Alabama',
                      displayName: 'Alabama',
                      fields: {
                        title: {
                          value: 'Alabama',
                        },
                        value: {
                          value: 'Alabama',
                        },
                      },
                    },
                    {
                      id: '5a5255e8-520b-4232-829d-f3b492fcfd85',
                      url: '/data/forms/states/alaska',
                      name: 'Alaska',
                      displayName: 'Alaska',
                      fields: {
                        title: {
                          value: 'Alaska',
                        },
                        value: {
                          value: 'Alaska',
                        },
                      },
                    },
                    {
                      id: 'ea1502b3-4098-4f82-bdf2-78ed398e5fed',
                      url: '/data/forms/states/arizona',
                      name: 'Arizona',
                      displayName: 'Arizona',
                      fields: {
                        title: {
                          value: 'Arizona',
                        },
                        value: {
                          value: 'Arizona',
                        },
                      },
                    },
                    {
                      id: '54da1c19-fa40-4899-82af-a4eeed22ce02',
                      url: '/data/forms/states/arkansas',
                      name: 'Arkansas',
                      displayName: 'Arkansas',
                      fields: {
                        title: {
                          value: 'Arkansas',
                        },
                        value: {
                          value: 'Arkansas',
                        },
                      },
                    },
                    {
                      id: 'edc849fc-21ce-442a-bc25-882224b51c32',
                      url: '/data/forms/states/british-columbia',
                      name: 'British Columbia',
                      displayName: 'British Columbia',
                      fields: {
                        title: {
                          value: 'British Columbia',
                        },
                        value: {
                          value: 'British Columbia',
                        },
                      },
                    },
                    {
                      id: '416f665e-a372-4f99-856d-a5e6294e162e',
                      url: '/data/forms/states/minnesota',
                      name: 'Minnesota',
                      displayName: 'Minnesota',
                      fields: {
                        title: {
                          value: 'Minnesota',
                        },
                        value: {
                          value: 'Minnesota',
                        },
                      },
                    },
                    {
                      id: 'c1ce4d2d-57f4-4328-91b0-b8409fbb4212',
                      url: '/data/forms/states/ontario',
                      name: 'Ontario',
                      displayName: 'Ontario',
                      fields: {
                        title: {
                          value: 'Ontario',
                        },
                        value: {
                          value: 'Ontario',
                        },
                      },
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
                  value: 'Locations of interest',
                },
                validations: [
                  {
                    id: '7ca5fa64-2b7e-4238-959d-f9d3098cc97c',
                    url: '/data/forms/validations/required',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
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
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width',
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
                fieldName: {
                  value: 'locations-of-interest',
                },
                valueProviders: [],
              },
            },
            {
              id: '7e620912-1025-4952-bb35-2368fa3a5784',
              url: '/data/forms/form---job-search-no-result/page/areas-of-interest',
              name: 'Areas of interest',
              displayName: 'Areas of interest',
              fields: {
                defaultDisplay: {
                  value: '',
                },
                defaultValue: {
                  id: '416f665e-a372-4f99-856d-a5e6294e162e',
                  url: '/data/forms/states/minnesota',
                  name: 'Minnesota',
                  displayName: 'Minnesota',
                  fields: {
                    title: {
                      value: 'Minnesota',
                    },
                    value: {
                      value: 'Minnesota',
                    },
                  },
                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                  templateName: 'List Item',
                },
                showDefaultDisplay: {
                  value: true,
                },
                datasource: {
                  id: '7fb34bbc-e161-4c25-b5b4-de5f2ecd2564',
                  url: '/data/forms/states',
                  name: 'States',
                  displayName: 'States',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '25398af1-0be7-4e2e-8946-817a15acbe97',
                      url: '/data/forms/states/alabama',
                      name: 'Alabama',
                      displayName: 'Alabama',
                      fields: {
                        title: {
                          value: 'Alabama',
                        },
                        value: {
                          value: 'Alabama',
                        },
                      },
                    },
                    {
                      id: '5a5255e8-520b-4232-829d-f3b492fcfd85',
                      url: '/data/forms/states/alaska',
                      name: 'Alaska',
                      displayName: 'Alaska',
                      fields: {
                        title: {
                          value: 'Alaska',
                        },
                        value: {
                          value: 'Alaska',
                        },
                      },
                    },
                    {
                      id: 'ea1502b3-4098-4f82-bdf2-78ed398e5fed',
                      url: '/data/forms/states/arizona',
                      name: 'Arizona',
                      displayName: 'Arizona',
                      fields: {
                        title: {
                          value: 'Arizona',
                        },
                        value: {
                          value: 'Arizona',
                        },
                      },
                    },
                    {
                      id: '54da1c19-fa40-4899-82af-a4eeed22ce02',
                      url: '/data/forms/states/arkansas',
                      name: 'Arkansas',
                      displayName: 'Arkansas',
                      fields: {
                        title: {
                          value: 'Arkansas',
                        },
                        value: {
                          value: 'Arkansas',
                        },
                      },
                    },
                    {
                      id: 'edc849fc-21ce-442a-bc25-882224b51c32',
                      url: '/data/forms/states/british-columbia',
                      name: 'British Columbia',
                      displayName: 'British Columbia',
                      fields: {
                        title: {
                          value: 'British Columbia',
                        },
                        value: {
                          value: 'British Columbia',
                        },
                      },
                    },
                    {
                      id: '416f665e-a372-4f99-856d-a5e6294e162e',
                      url: '/data/forms/states/minnesota',
                      name: 'Minnesota',
                      displayName: 'Minnesota',
                      fields: {
                        title: {
                          value: 'Minnesota',
                        },
                        value: {
                          value: 'Minnesota',
                        },
                      },
                    },
                    {
                      id: 'c1ce4d2d-57f4-4328-91b0-b8409fbb4212',
                      url: '/data/forms/states/ontario',
                      name: 'Ontario',
                      displayName: 'Ontario',
                      fields: {
                        title: {
                          value: 'Ontario',
                        },
                        value: {
                          value: 'Ontario',
                        },
                      },
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
                  value: 'Areas of interest',
                },
                validations: [
                  {
                    id: '7ca5fa64-2b7e-4238-959d-f9d3098cc97c',
                    url: '/data/forms/validations/required',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
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
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
                  value: '',
                },
                subLabel: {
                  value: '',
                },
                width: {
                  id: '022c2407-f7a8-4576-8c9b-45ea8014462d',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/half-width',
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
                fieldName: {
                  value: 'areas-of-interest',
                },
                valueProviders: [],
              },
            },
            {
              id: '1ba66355-33fb-4c77-be79-b03580c67a72',
              url: '/data/forms/form---job-search-no-result/page/consent-checkbox',
              name: 'Consent Checkbox',
              displayName: 'Consent Checkbox',
              fields: {
                consentText: {
                  value:
                    'Please check this box if you are a current or former employee of Renewal by Andersen\n<style>\n</style>',
                },
                validations: [],
                width: {
                  id: '998f4a8c-e357-4e2d-9071-ab2addfa8283',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/full-width',
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
                  value: 'consent-checkbox',
                },
              },
            },
            {
              id: '2941cd05-925c-40c2-bd56-1c3202fb26ff',
              url: '/data/forms/form---job-search-no-result/page/button',
              name: 'Button',
              displayName: 'Button',
              fields: {
                icon: {
                  id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow',
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
                  id: 'b6185a15-c782-4ddf-8ad4-21620a8fe9d4',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/submit',
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
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-alignment/left',
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
                  value: "Let's talk",
                },
              },
            },
            {
              id: '294e09d4-8f74-451a-a80b-8857dc9721fc',
              url: '/data/forms/form---job-search-no-result/page/disclaimer',
              name: 'Disclaimer',
              displayName: 'Disclaimer',
              fields: {
                disclaimerText: {
                  value:
                    'By submitting this form, I agree that I may be contacted at the number above, including by autodialed calls and texts, for informational and all other purposes by Renewal by Andersen, and its affiliated copanies (collectively, "RbA"). For information about how we use your personal information, see: <a href="https://www.andersenwindows.com/support/privacy/">PRIVACY POLICY</a> | <a href="https://www.andersenwindows.com/support/privacy/">PRIVACY NOTICE FOR CA RESIDENTS</a> | <a href="https://www.andersenwindows.com/support/privacy/">OPT OUT OF SALE OF PERSONAL INFORMATION</a>',
                },
              },
            },
          ],
        },
      ],
    },
    searchResultsHeadline: {
      value: 'Optional Search Results Headline can go here',
    },
    didYouMean: {
      id: '8cd1f503-236d-4990-8a76-dc4270a34105',
      url: '/data/elements/search/did-you-mean/did-you-mean',
      name: 'Did You Mean',
      displayName: 'Did You Mean',
      fields: {
        autoCorrectionText: {
          value: 'Query was automatically corrected to',
        },
        didYouMeanText: {
          value: 'Did you mean:',
        },
        noResultsText: {
          value: 'No results for',
        },
      },
      templateId: '5c3df826-d08a-4685-b455-68b6b4dd8691',
      templateName: 'Did You Mean',
    },
    facets: [
      {
        id: '45a0ae0a-dab0-4215-93f1-81304f974c35',
        url: '/data/elements/search/facets/job-search/location',
        name: 'Location',
        displayName: 'Location',
        fields: {
          dependsOn: null,
          facetField: {
            id: 'af66dcf1-1bf9-4d74-8b59-19ec9233f9c2',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/facet-fields/renewalbyandersen/job-state',
            name: 'Job State',
            displayName: 'Job State',
            fields: {
              Value: {
                value: 'ew_jobstate_fullname',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          facetLabel: {
            value: 'Location',
          },
          numberOfValues: {
            value: null,
          },
          sortCriteria: {
            id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/facet-values-sort-criteria/automatic',
            name: 'Automatic',
            displayName: 'Automatic',
            fields: {
              Value: {
                value: 'automatic',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          uniqueIdentifier: {
            value: 'location',
          },
        },
        templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
        templateName: 'Facet',
      },
      {
        id: 'f1c0448b-f677-4098-9169-f7b44790f043',
        url: '/data/elements/search/facets/job-search/job-category',
        name: 'Job Category',
        displayName: 'Job Category',
        fields: {
          dependsOn: null,
          facetField: {
            id: '144d16cf-88f1-4058-b270-ece2b6450018',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/facet-fields/renewalbyandersen/job-category',
            name: 'Job Category',
            displayName: 'Job Category',
            fields: {
              Value: {
                value: 'ew_jobcategory',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          facetLabel: {
            value: 'Job Category',
          },
          numberOfValues: {
            value: null,
          },
          sortCriteria: {
            id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/facet-values-sort-criteria/automatic',
            name: 'Automatic',
            displayName: 'Automatic',
            fields: {
              Value: {
                value: 'automatic',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          uniqueIdentifier: {
            value: 'job-category',
          },
        },
        templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
        templateName: 'Facet',
      },
      {
        id: '1eb83a72-4e19-43f6-a28f-7df7a79a9b70',
        url: '/data/elements/search/facets/job-search/job-type',
        name: 'Job Type',
        displayName: 'Job Type',
        fields: {
          dependsOn: null,
          facetField: {
            id: 'faf75090-e709-422d-b0c9-431d20036625',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/facet-fields/renewalbyandersen/job-type',
            name: 'Job Type',
            displayName: 'Job Type',
            fields: {
              Value: {
                value: 'ew_jobtypes',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          facetLabel: {
            value: 'Job Type',
          },
          numberOfValues: {
            value: null,
          },
          sortCriteria: {
            id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/facet-values-sort-criteria/automatic',
            name: 'Automatic',
            displayName: 'Automatic',
            fields: {
              Value: {
                value: 'automatic',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          uniqueIdentifier: {
            value: 'job-type',
          },
        },
        templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
        templateName: 'Facet',
      },
    ],
    searchBox: {
      id: 'b122f387-770e-40a7-ad5d-d7a773c201ff',
      url: '/data/elements/search/search-box/search-box',
      name: 'Search Box',
      displayName: 'Search Box',
      fields: {
        placeholderText: {
          value: 'What can we help you find?',
        },
        numberOfSuggestions: {
          value: 5,
        },
        showSuggestions: {
          value: true,
        },
      },
      templateId: 'b83ebade-6b1c-44c9-904f-5857a393209f',
      templateName: 'Search Box',
    },
    resultItem: {
      id: 'c7e219eb-6802-40bb-9cfc-e4cfb006870b',
      url: '/data/elements/search/result-items/job-search/job-result-item',
      name: 'Job Result Item',
      displayName: 'Job Result Item',
      fields: {
        jobCategoryField: {
          id: '54725f6a-5721-43a0-b5ec-26822db0726d',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/renewalbyandersen/job-category',
          name: 'Job Category',
          displayName: 'Job Category',
          fields: {
            Value: {
              value: 'ew_jobcategory',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        jobCityField: {
          id: '57c9e48b-8868-40b8-b33e-2027ae2f02ca',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/renewalbyandersen/job-city',
          name: 'Job City',
          displayName: 'Job City',
          fields: {
            Value: {
              value: 'ew_jobcity',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        jobStateField: {
          id: 'cb04de96-9804-4771-bfc3-ab452b4c15b4',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/renewalbyandersen/job-state-fullname',
          name: 'Job State Fullname',
          displayName: 'Job State Fullname',
          fields: {
            Value: {
              value: 'ew_jobstate_fullname',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        jobTitleField: {
          id: 'cff92943-3794-41d4-b19c-d6dd5ceabe45',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/renewalbyandersen/job-title',
          name: 'Job Title',
          displayName: 'Job Title',
          fields: {
            Value: {
              value: 'ew_jobtitle',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        jobTypeField: {
          id: 'da73934c-b290-4ee9-8cf1-82b53f71e1a1',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/renewalbyandersen/job-type',
          name: 'Job Type',
          displayName: 'Job Type',
          fields: {
            Value: {
              value: 'ew_jobtypes',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        resultType: [
          {
            id: 'ebe448d7-5a2f-481e-af0e-65e6ca5e47aa',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/result-type/renewalbyandersen/job',
            name: 'Job',
            displayName: 'Job',
            fields: {
              Value: {
                value: '215D5197C15F46FFB762DA23E17E83DD',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
        ],
      },
      templateId: 'a1d2a5b3-7d15-4e74-9003-c6194644544d',
      templateName: 'Job Result Item',
    },
    searchParameters: {
      id: '3d1cfdd6-ff7b-49e6-9ae1-7770d326690f',
      url: '/data/elements/search/search-parameters/job-search',
      name: 'Job Search',
      displayName: 'Job Search',
      fields: {
        clearAllLabel: {
          value: 'Clear All',
        },
        facetSearchLabel: {
          value: 'Search',
        },
        facetSectionHeading: {
          value: 'Refine Jobs By',
        },
        filtersLabel: {
          value: 'Filters',
        },
        noFacetResultsBody: {
          value: 'No results found.',
        },
        showLessLabel: {
          value: 'Show Less',
        },
        showMoreLabel: {
          value: 'Show More',
        },
        showResultsLabel: {
          value: 'Show Results',
        },
        noResultsBody: {
          value:
            '<p>Search Tips:</p>\r\n<ul>\r\n    <li>Check the spelling of your keywords.\r\n    </li>\r\n    <li>Try adjusting your search</li>\r\n</ul>',
        },
        noResultsHeadline: {
          value: 'Sorry! No results found',
        },
        numberOfResultsPerPage: {
          value: 10,
        },
        queryPipeline: {
          value: 'default',
        },
        searchHub: {
          value: 'search',
        },
        filterExpression: {
          value:
            '(@sc_pathids=10E2E75EB41E4B7D891F04BB2EDADDF4 @sc_templateid==215D5197C15F46FFB762DA23E17E83DD)',
        },
        boostingExpression: {
          value: '',
        },
        sortDirection: null,
        sortField: null,
        sortType: null,
      },
      templateId: 'af4c725f-4863-4ec3-9976-d35a39e8aa62',
      templateName: 'Search Parameters',
    },
    componentSpacing: null,
    sectionId: {
      value: '',
    },
    headlineLevel: {
      id: '0f556f3a-bbad-4aa5-952d-b79003b39cd6',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/headline-levels/heading-2',
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
      value: 'Page headline text goes here',
    },
    cta1AriaLabel: {
      value: '',
    },
    cta1Icon: null,
    cta1Link: {
      value: {
        href: '',
      },
    },
    cta1Modal: null,
    cta1ModalLinkText: {
      value: '',
    },
    cta1Style: null,
    eventName: {
      value: '',
    },
    eventType: {
      value: '',
    },
    eventZone: {
      value: '',
    },
  },
};

export default defaultData;
