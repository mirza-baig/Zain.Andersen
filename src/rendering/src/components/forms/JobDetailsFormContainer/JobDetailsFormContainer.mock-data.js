const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'JobDetailsFormContainer',
  },
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
  },
  placeholders: {
    form: [
      {
        uid: 'cbc8a207-dd57-40bc-bbad-281282abe52d',
        componentName: 'Form',
        dataSource: '{CBC8A207-DD57-40BC-BBAD-281282ABE52D}',
        fields: {
          formName: {
            value: 'Job Details Form Container',
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
          children: [
            {
              id: 'bf1d2735-d615-4589-add9-0e6991cb4c83',
              displayName: 'Page',
              name: 'Page',
              templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
              templateName: 'Page',
              url: '/data/forms/job-details-form-container/page',
              fields: {
                includeInSteps: {
                  value: false,
                },
                label: {
                  value: 'Page',
                },
                children: [
                  {
                    id: '903e065b-2c08-414a-a4d5-1b3e9f204bd8',
                    displayName: 'First Name',
                    name: 'First Name',
                    templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                    templateName: 'Short Text',
                    url: '/data/forms/job-details-form-container/page/first-name',
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
                        value: 'first-name',
                      },
                      children: [],
                    },
                  },
                  {
                    id: '5dbd5874-2e81-48a9-8091-cedbbfe6d88d',
                    displayName: 'Last Name',
                    name: 'Last Name',
                    templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                    templateName: 'Short Text',
                    url: '/data/forms/job-details-form-container/page/last-name',
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
                        value: 'last-name',
                      },
                      children: [],
                    },
                  },
                  {
                    id: '565dc025-5ad3-4218-9de8-410d25ab14c2',
                    displayName: 'Email',
                    name: 'Email',
                    templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
                    templateName: 'Email',
                    url: '/data/forms/job-details-form-container/page/email',
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
                        value: 'Email',
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
                        value: 'email',
                      },
                      children: [],
                    },
                  },
                  {
                    id: '8e42f407-70d0-408b-bb34-b68fbb076f05',
                    displayName: 'Phone',
                    name: 'Phone',
                    templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
                    templateName: 'Phone',
                    url: '/data/forms/job-details-form-container/page/phone',
                    fields: {
                      defaultValue: {
                        value: '',
                      },
                      valueProviders: [],
                      label: {
                        value: 'Phone',
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
                        value: 'phone',
                      },
                      children: [],
                    },
                  },
                  {
                    id: 'b7a3e00e-14e0-4ad1-85d0-139de7cd0b03',
                    displayName: 'Consent Checkbox',
                    name: 'Consent Checkbox',
                    templateId: '45aceae2-f114-43ae-8426-714f7af7ac2b',
                    templateName: 'Consent Checkbox',
                    url: '/data/forms/job-details-form-container/page/consent-checkbox',
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
                      hideFieldOnLoad: {
                        value: false,
                      },
                      children: [],
                    },
                  },
                  {
                    id: 'ac229e56-48fc-4d20-81e9-e1cb7cd705bd',
                    displayName: 'Button',
                    name: 'Button',
                    templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
                    templateName: 'Button',
                    url: '/data/forms/job-details-form-container/page/button',
                    fields: {
                      icon: null,
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
                        value: "Let's Talk",
                      },
                      children: [],
                    },
                  },
                  {
                    id: 'd1ffb4ad-c74c-4a34-b0e6-08662c2151fc',
                    displayName: 'Disclaimer',
                    name: 'Disclaimer',
                    templateId: 'b1547b3c-2d27-41cb-ae05-58198f49e2dc',
                    templateName: 'Disclaimer',
                    url: '/data/forms/job-details-form-container/page/disclaimer',
                    fields: {
                      disclaimerText: {
                        value:
                          'By submitting this form, I agree that I may be contacted at the number above, including by autodialed calls and texts, for informational and all other purposes by Renewal by Andersen, and its affiliated companies (collectively, &ldquo;RbA&rdquo;). For information about how we use your personal information, see: <a href="https://www.andersenwindows.com/support/privacy/">PRIVACY POLICY</a> | <a href="https://www.andersenwindows.com/support/privacy-california/">PRIVACY NOTICE FOR CA RESIDENTS</a> | <a href="https://www.andersenwindows.com/support/do-not-sell-my-info/">OPT OUT OF SALE OF PERSONAL INFORMATION</a>',
                      },
                      hideFieldOnLoad: {
                        value: false,
                      },
                      children: [],
                    },
                  },
                  {
                    id: 'd0f0592a-f854-4e4d-9c52-d980ae71f44d',
                    displayName: 'Job Category',
                    name: 'Job Category',
                    templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
                    templateName: 'Hidden',
                    url: '/data/forms/job-details-form-container/page/job-category',
                    fields: {
                      defaultValue: {
                        value: '',
                      },
                      fieldName: {
                        value: 'job-category',
                      },
                      valueProviders: [],
                      children: [],
                    },
                  },
                  {
                    id: 'cd314778-b70e-4213-ac1f-b66c4b64f1ac',
                    displayName: 'Job Title',
                    name: 'Job Title',
                    templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
                    templateName: 'Hidden',
                    url: '/data/forms/job-details-form-container/page/job-title',
                    fields: {
                      defaultValue: {
                        value: '',
                      },
                      fieldName: {
                        value: 'job-title',
                      },
                      valueProviders: [],
                      children: [],
                    },
                  },
                  {
                    id: '893f2238-eab3-4b9c-af2b-d672a89195ce',
                    displayName: 'Job Types',
                    name: 'Job Types',
                    templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
                    templateName: 'Hidden',
                    url: '/data/forms/job-details-form-container/page/job-types',
                    fields: {
                      defaultValue: {
                        value: '',
                      },
                      fieldName: {
                        value: 'job-types',
                      },
                      valueProviders: [],
                      children: [],
                    },
                  },
                  {
                    id: '25b3ba57-81d6-4c3a-b04b-b079a780dc6f',
                    displayName: 'Form Type',
                    name: 'Form Type',
                    templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
                    templateName: 'Hidden',
                    url: '/data/forms/job-details-form-container/page/form-type',
                    fields: {
                      defaultValue: {
                        value: '18',
                      },
                      fieldName: {
                        value: 'form-type',
                      },
                      valueProviders: [],
                      children: [],
                    },
                  },
                  {
                    id: '71236493-325e-4db9-96e8-f9890e7d0801',
                    displayName: 'GA Client ID',
                    name: 'GA Client ID',
                    templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
                    templateName: 'Hidden',
                    url: '/data/forms/job-details-form-container/page/ga-client-id',
                    fields: {
                      defaultValue: {
                        value: 'rba.com website',
                      },
                      fieldName: {
                        value: 'ga-client-id',
                      },
                      valueProviders: [],
                      children: [],
                    },
                  },
                  {
                    id: '783ca62f-0662-4a0c-aa22-c6abfc194d87',
                    displayName: 'Sender',
                    name: 'Sender',
                    templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
                    templateName: 'Hidden',
                    url: '/data/forms/job-details-form-container/page/sender',
                    fields: {
                      defaultValue: {
                        value: 'careers website',
                      },
                      fieldName: {
                        value: 'sender',
                      },
                      valueProviders: [],
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
};

export default defaultData;
