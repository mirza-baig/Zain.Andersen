const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'EnewsSignUpBanner',
  },
  uid: 'c2bae261-dc18-4086-b395-dbf551822e43',
  componentName: 'EnewsSignUpBanner',
  dataSource:
    '/sitecore/content/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/Home/enews-sign-up-banner-dp/Data/Enews Sign Up Banner',
  fields: {
    componentSpacing: null,
    sectionId: {
      value: '',
    },
    visibilityCookie: null,
    affiliatePersonalizationRules: {
      value: '{"ruleset":[]}',
    },
    hideByDefault: {
      value: false,
    },
  },
  placeholders: {
    form: [
      {
        uid: '1e3dee31-dbfd-4416-96f1-03dc0ce50663',
        componentName: 'Form',
        dataSource: '{1E3DEE31-DBFD-4416-96F1-03DC0CE50663}',
        fields: {
          formName: {
            value: 'Hero with Form Fill',
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
          affiliatePersonalizationRules: {
            value: '{"ruleset":[]}',
          },
          hideByDefault: {
            value: false,
          },
          children: [
            {
              id: '41d2756d-5920-4713-88e2-85e8c31b90de',
              displayName: 'Page',
              name: 'Page',
              templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
              templateName: 'Page',
              url: '/data/forms/enews-sign-up-banner/page',
              fields: {
                hideStepper: {
                  value: false,
                },
                includeInSteps: {
                  value: false,
                },
                label: {
                  value: 'Page',
                },
                children: [
                  {
                    id: '987258ee-9602-45a1-9a74-df14365298d0',
                    displayName: 'Headline',
                    name: 'Headline',
                    templateId: '78e78e19-8b37-4637-8c04-9de221572d0d',
                    templateName: 'Headline',
                    url: '/data/forms/enews-sign-up-banner/page/headline',
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
                        value: 'Newsletter headline goes here',
                      },
                      removeHorizontalLine: {
                        value: true,
                      },
                      children: [],
                    },
                  },
                  {
                    id: '4d822bd1-f0f0-444a-8156-e5c6fe923d09',
                    displayName: 'Description',
                    name: 'Description',
                    templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
                    templateName: 'Description',
                    url: '/data/forms/enews-sign-up-banner/page/description',
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
                          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum perspiciatis quibusdam porro voluptatum cum laboriosam laudantium magni modi! Ipsam eos labore voluptatum illum reiciendis amet nisi, dolorem soluta quisquam.<br class="t-last-br" />',
                      },
                      children: [],
                    },
                  },
                  {
                    id: 'f076b73f-99cf-489a-92d1-9adde17cfbf0',
                    displayName: 'First Name',
                    name: 'First Name',
                    templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                    templateName: 'Short Text',
                    url: '/data/forms/enews-sign-up-banner/page/first-name',
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
                        value: 'Placeholder text',
                      },
                      width: {
                        id: '0266b091-d20b-4ad9-9d41-264c534be485',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-4-width',
                        name: '1-4 Width',
                        displayName: '1/4 Width',
                        fields: {
                          Value: {
                            value: '3',
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
                    id: '8b7cfd61-648a-48f7-80fa-a73e42deec8a',
                    displayName: 'Last Name',
                    name: 'Last Name',
                    templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                    templateName: 'Short Text',
                    url: '/data/forms/enews-sign-up-banner/page/last-name',
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
                        value: 'Placeholder text',
                      },
                      width: {
                        id: '0266b091-d20b-4ad9-9d41-264c534be485',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-4-width',
                        name: '1-4 Width',
                        displayName: '1/4 Width',
                        fields: {
                          Value: {
                            value: '3',
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
                    id: 'e8282304-d8d7-407d-9211-11483e29d195',
                    displayName: 'ZIP',
                    name: 'ZIP',
                    templateId: '353ea57b-c16e-4079-92db-f169461acd5e',
                    templateName: 'ZIP Code',
                    url: '/data/forms/enews-sign-up-banner/page/zip',
                    fields: {
                      defaultValue: {
                        value: '',
                      },
                      valueProviders: [],
                      label: {
                        value: 'Zip code',
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
                        id: '3d23c19a-123b-400f-9afa-5a736d2eaec0',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-12-width',
                        name: '1-12 Width',
                        displayName: '1/12 Width',
                        fields: {
                          Value: {
                            value: '1',
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
                    id: '6fbfa916-6a19-46ec-a176-fb7e730c5029',
                    displayName: 'Email address',
                    name: 'Email address',
                    templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
                    templateName: 'Email',
                    url: '/data/forms/enews-sign-up-banner/page/email-address',
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
                        id: '0266b091-d20b-4ad9-9d41-264c534be485',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-4-width',
                        name: '1-4 Width',
                        displayName: '1/4 Width',
                        fields: {
                          Value: {
                            value: '3',
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
                    id: 'b10c6fa6-8381-47bb-8049-cbc36ca86d78',
                    displayName: 'Submit',
                    name: 'Submit',
                    templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
                    templateName: 'Button',
                    url: '/data/forms/enews-sign-up-banner/page/submit',
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
                      alignment: null,
                      mobileWidth: null,
                      width: {
                        id: '7ac71bf2-2104-4814-836c-5a9bab40212a',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/field-width/1-6-width',
                        name: '1-6 Width',
                        displayName: '1/6 Width',
                        fields: {
                          Value: {
                            value: '2',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
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
      },
    ],
  },
};

export default defaultData;
