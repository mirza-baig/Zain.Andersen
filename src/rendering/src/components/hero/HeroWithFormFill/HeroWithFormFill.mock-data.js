const defaultData = {
  rendering: {
    uid: '0752a5b1-39be-4a42-bd38-14d2d71be121',
    componentName: 'HeroWithFormFill',
    dataSource: '{05BE4A5B-20B2-4EE0-A540-6605A8C830B1}',
    placeholders: {
      form: [
        {
          uid: '3061de04-a3e2-4b7e-a6a9-067f8b109543',
          componentName: 'Form',
          dataSource: '{3061DE04-A3E2-4B7E-A6A9-067F8B109543}',
          fields: {
            formName: {
              value: 'Hero with Form Fill',
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
            children: [
              {
                id: '6fb9aeac-5095-4786-a17f-b82ca924d841',
                displayName: 'Page',
                name: 'Page',
                templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
                templateName: 'Page',
                url: '/data/forms/hero-with-form-fill/page',
                fields: {
                  includeInSteps: {
                    value: false,
                  },
                  label: {
                    value: 'Page',
                  },
                  children: [
                    {
                      id: '46b7f339-d597-4614-8054-6c209b23cad6',
                      displayName: 'First Name',
                      name: 'First Name',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/hero-with-form-fill/page/first-name',
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
                          value: 'First Name',
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
                          value: 'Placeholder',
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
                        children: [],
                      },
                    },
                    {
                      id: '67d0bd5f-5ee2-49a7-8875-cee805a4e86d',
                      displayName: 'Last Name',
                      name: 'Last Name',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/hero-with-form-fill/page/last-name',
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
                          value: 'Last Name',
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
                          value: 'Placeholder',
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
                        children: [],
                      },
                    },
                    {
                      id: '9741b0b7-9286-459e-a58f-3ce460dc3c0b',
                      displayName: 'Email address',
                      name: 'Email address',
                      templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
                      templateName: 'Email',
                      url: '/data/forms/hero-with-form-fill/page/email-address',
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
                          value: 'name@rbamail.com',
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
                          value: 'email-address',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '6fb3a291-d7ac-4f28-a7d1-cc79c82b190d',
                      displayName: 'Phone number',
                      name: 'Phone number',
                      templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
                      templateName: 'Phone',
                      url: '/data/forms/hero-with-form-fill/page/phone-number',
                      fields: {
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
                          value: '123-456-7890',
                        },
                        width: {
                          id: 'e2ca3d6c-a791-4ab1-b8db-cb4d52ab712c',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-3-width',
                          name: '1-3 Width',
                          displayName: '1/3 Width',
                          fields: {
                            Value: {
                              value: '4',
                            },
                          },
                          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                          templateName: 'Enum',
                        },
                        fieldName: {
                          value: 'phone-number',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '12502f6c-63dc-4c28-979e-d4e77184f5d2',
                      displayName: 'ZIP',
                      name: 'ZIP',
                      templateId: '353ea57b-c16e-4079-92db-f169461acd5e',
                      templateName: 'ZIP Code',
                      url: '/data/forms/hero-with-form-fill/page/zip',
                      fields: {
                        defaultValue: {
                          value: '',
                        },
                        valueProviders: [],
                        label: {
                          value: 'ZIP',
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
                          value: '54321',
                        },
                        width: {
                          id: 'e2ca3d6c-a791-4ab1-b8db-cb4d52ab712c',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-3-width',
                          name: '1-3 Width',
                          displayName: '1/3 Width',
                          fields: {
                            Value: {
                              value: '4',
                            },
                          },
                          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                          templateName: 'Enum',
                        },
                        fieldName: {
                          value: 'zip',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '6fae86d9-1a2f-4d7a-8bf8-085680cc258c',
                      displayName: 'Select preference',
                      name: 'Select preference',
                      templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
                      templateName: 'Radio Button',
                      url: '/data/forms/hero-with-form-fill/page/select-preference',
                      fields: {
                        defaultValue: null,
                        datasource: {
                          id: '4a4fa6e7-ab11-4549-9ce2-ac9933f3c2d8',
                          url: '/data/forms/hero-with-form-fill/page/select-preference/select-preference',
                          name: 'Select preference',
                          displayName: 'Select preference',
                          fields: {},
                          templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                          templateName: 'List Item Folder',
                          children: [
                            {
                              id: '52c7fafa-d97b-4fa1-a7ad-cd3109d61e1c',
                              url: '/data/forms/hero-with-form-fill/page/select-preference/select-preference/in-home',
                              name: 'In-Home',
                              displayName: 'In-Home',
                              fields: {
                                title: {
                                  value: 'In-Home',
                                },
                                value: {
                                  value: 'In-Home',
                                },
                              },
                            },
                            {
                              id: 'e8c1dbb0-50b6-4aba-9ba9-b2023c4128bc',
                              url: '/data/forms/hero-with-form-fill/page/select-preference/select-preference/virtual',
                              name: 'Virtual',
                              displayName: 'Virtual',
                              fields: {
                                title: {
                                  value: 'Virtual',
                                },
                                value: {
                                  value: 'Virtual',
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
                          value: 'Select preference',
                        },
                        validations: [],
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
                          id: 'e2ca3d6c-a791-4ab1-b8db-cb4d52ab712c',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-3-width',
                          name: '1-3 Width',
                          displayName: '1/3 Width',
                          fields: {
                            Value: {
                              value: '4',
                            },
                          },
                          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                          templateName: 'Enum',
                        },
                        fieldName: {
                          value: 'select-preference',
                        },
                        valueProviders: [],
                        children: [
                          {
                            id: '4a4fa6e7-ab11-4549-9ce2-ac9933f3c2d8',
                            displayName: 'Select preference',
                            name: 'Select preference',
                            templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                            templateName: 'List Item Folder',
                            url: '/data/forms/hero-with-form-fill/page/select-preference/select-preference',
                            fields: {
                              children: [
                                {
                                  id: '52c7fafa-d97b-4fa1-a7ad-cd3109d61e1c',
                                  displayName: 'In-Home',
                                  name: 'In-Home',
                                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                                  templateName: 'List Item',
                                  url: '/data/forms/hero-with-form-fill/page/select-preference/select-preference/in-home',
                                  fields: {
                                    title: {
                                      value: 'In-Home',
                                    },
                                    value: {
                                      value: 'In-Home',
                                    },
                                  },
                                },
                                {
                                  id: 'e8c1dbb0-50b6-4aba-9ba9-b2023c4128bc',
                                  displayName: 'Virtual',
                                  name: 'Virtual',
                                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                                  templateName: 'List Item',
                                  url: '/data/forms/hero-with-form-fill/page/select-preference/select-preference/virtual',
                                  fields: {
                                    title: {
                                      value: 'Virtual',
                                    },
                                    value: {
                                      value: 'Virtual',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      id: '28823d75-99e3-4ec3-91f1-af1022d2157d',
                      displayName: 'Request a consultation',
                      name: 'Request a consultation',
                      templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
                      templateName: 'Button',
                      url: '/data/forms/hero-with-form-fill/page/request-a-consultation',
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
                        mobileWidth: {
                          id: 'af4293a6-1040-4634-92ec-35e09dce059c',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/button-width/full-width',
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
                        label: {
                          value: 'Request a consultation',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'd69eaa3b-e4a7-4faa-9a9c-95a2c7732e9e',
                      displayName: 'Description',
                      name: 'Description',
                      templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
                      templateName: 'Description',
                      url: '/data/forms/hero-with-form-fill/page/description',
                      fields: {
                        alignment: {
                          id: 'e121ccaa-a70e-450b-a94b-2c58f949b49c',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/left',
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
                        body: {
                          value:
                            'I want to learn more about Andersen Windows, Inc. and its subsidiaries and affiliates&rsquo; products. By submitting this form, which I agree is my signature, I consent to receive recurring informational and advertising calls, texts, and emails from Andersen Windows, Inc. and its subsidiaries and affiliates, including by automated technology or prerecorded voice. I understand consent is not required for purchase and that I can opt out at any time, including (for texts) by replying &ldquo;STOP.&rdquo; I understand any Andersen Windows, Inc. and its subsidiary and affiliate calls may be recorded. Andersen Windows, Inc. and its subsidiaries and affiliates collect certain categories of personal information and use this information in various ways, including order fulfillment and providing product information and services, as further described in our&nbsp;<a href="https://www.andersenwindows.com/support/privacy/">Privacy Policy</a>.I agree to Andersen Windows, Inc.&rsquo;s&nbsp;<a href="https://www.andersenwindows.com/support/privacy/">Privacy Policy</a>&nbsp;and&nbsp;<a href="https://www.andersenwindows.com/support/terms">Terms and Conditions.</a>Message and data rates apply. California residents,&nbsp;<a href="https://www.andersenwindows.com/support/privacy-california/">click here</a>&nbsp;for more information about the information we collect.',
                        },
                        children: [],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  fields: {
    formAlignment: {
      id: '606f0984-e397-4978-9b28-62ab17338161',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/hero-with-form-fill--alignment/vertical',
      name: 'Vertical',
      displayName: 'Vertical',
      fields: {
        Value: {
          value: 'vertical',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    formStyle: {
      id: '2ab3123e-294e-4484-a3e8-786a511dee75',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/hero-with-form-fill-style/gray-form-with-black-overlay',
      name: 'Gray Form with Black Overlay',
      displayName: 'Gray Form with Black Overlay',
      fields: {
        Value: {
          value: 'grayFormWithBlackOverlay',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    componentSpacing: null,
    sectionId: {
      value: '',
    },
    headlineText: {
      value: 'This is a headline',
    },
    body: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum perspiciatis quibusdam porro voluptatum cum laboriosam laudantium magni modi! Ipsam eos labore voluptatum illum reiciendis amet nisi, dolorem soluta quisquam.',
    },
    primaryImage: {
      value: {
        src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/Images/Hero-Media-Background/why-andersen-hero-image1400x617.jpg?h=617&iar=0&w=1440&rev=6e4d257fc1e643c882e2795926accb7e',
        alt: 'why-andersen-hero-image1400x617',
        width: '1440',
        height: '617',
      },
    },
    primaryImageMobile: {
      value: {},
    },
    primaryImageMobileFocusArea: null,
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
