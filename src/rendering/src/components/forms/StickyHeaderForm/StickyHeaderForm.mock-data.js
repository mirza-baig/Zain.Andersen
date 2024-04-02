const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'StickyHeaderForm',
    placeholders: {
      form: [
        {
          uid: '71d38182-871a-4811-a5f6-c5087fd768c7',
          componentName: 'Form',
          dataSource: '{71D38182-871A-4811-A5F6-C5087FD768C7}',
          fields: {
            formName: {
              value: 'Sticky Form',
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
                id: '4abd1a3a-d717-4435-acec-1175f375467c',
                displayName: 'Page',
                name: 'Page',
                templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
                templateName: 'Page',
                url: '/data/forms/sticky-form/page',
                fields: {
                  includeInSteps: {
                    value: false,
                  },
                  label: {
                    value: 'Page',
                  },
                  children: [
                    {
                      id: 'd7d67727-8581-45d5-af1f-ea345bc775a4',
                      displayName: 'First name',
                      name: 'First name',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/sticky-form/page/first-name',
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
                          value: 'First name',
                        },
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
                        fieldName: {
                          value: 'first-name',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '77653597-3698-4aa9-9f7a-528437c07807',
                      displayName: 'Last name',
                      name: 'Last name',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/sticky-form/page/last-name',
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
                          value: 'Last name',
                        },
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
                        fieldName: {
                          value: 'last-name',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'a8c63cdb-8bbf-470d-8068-1811e15b8440',
                      displayName: 'ZIP Code',
                      name: 'ZIP Code',
                      templateId: '353ea57b-c16e-4079-92db-f169461acd5e',
                      templateName: 'ZIP Code',
                      url: '/data/forms/sticky-form/page/zip-code',
                      fields: {
                        defaultValue: {
                          value: '',
                        },
                        valueProviders: [],
                        label: {
                          value: 'Postal code',
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
                        fieldName: {
                          value: 'zip-code',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'f52c38cc-dce5-4156-87fb-b32cb575c8a5',
                      displayName: 'Email',
                      name: 'Email',
                      templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
                      templateName: 'Email',
                      url: '/data/forms/sticky-form/page/email',
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
                          value: 'name@rbamail.com',
                        },
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
                        fieldName: {
                          value: 'email',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '3da5fa3f-d521-4cb0-85f9-3c33884216e5',
                      displayName: 'Phone',
                      name: 'Phone',
                      templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
                      templateName: 'Phone',
                      url: '/data/forms/sticky-form/page/phone',
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
                        fieldName: {
                          value: 'phone',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '4412aacb-685c-466a-ad1f-cec52065798e',
                      displayName: 'Request a consultation',
                      name: 'Request a consultation',
                      templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
                      templateName: 'Button',
                      url: '/data/forms/sticky-form/page/request-a-consultation',
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
                          id: '289fe73e-e947-4b59-a53a-6bfbf997dd45',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/navigation-steps/next',
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
                          value: 'Request a consultation',
                        },
                        children: [
                          {
                            id: '390bf3a4-5ee3-43f8-8926-31102e910694',
                            displayName: 'Save to Database',
                            name: 'Save to Database',
                            templateId: 'e5c7d60e-b968-4742-84b4-cde77d0a618d',
                            templateName: 'Save to Database',
                            url: '/data/forms/sticky-form/page/request-a-consultation/save-to-database',
                            fields: {
                              errorMessage: {
                                value: '<p>Error while processing your request.</p>',
                              },
                              stopOnError: {
                                value: true,
                              },
                              children: [],
                            },
                          },
                        ],
                      },
                    },
                    {
                      id: '1eddc4f2-8eab-4007-814d-72a6539f2a62',
                      displayName: 'Disclaimer',
                      name: 'Disclaimer',
                      templateId: 'b1547b3c-2d27-41cb-ae05-58198f49e2dc',
                      templateName: 'Disclaimer',
                      url: '/data/forms/sticky-form/page/disclaimer',
                      fields: {
                        disclaimerText: {
                          value:
                            '*I want to learn more about Renewal by Andersen and schedule an in home price quote. By submitting this form, which i agree is my signature, I consent to receive recurring informational and advertising calls, texts, and emails from Renewal by Andersen and Its affiliates and retailers, including by automated technology or prerecorded voice. I understand consent is not required for purchase and that I can opt out at any time, including (for texts) by replying "STOP," I understand any Renewal by Andersen calls may bi recorded. Renewal by Andersen collects certain categories of personal information and uses this information in various ways, including order fulfillment and providing product information and services, as further described in our Privacy Policy, I agree to Renewal by Andersen\'s Privacy Policy and Terms and Conditions. Message and data rates apply. California residents, dick here for more information about the information we collect.',
                        },
                        hideFieldOnLoad: {
                          value: true,
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'ec4a14e3-159d-4b3f-b552-b09c6549c8d1',
                      displayName: 'Consent Checkbox',
                      name: 'Consent Checkbox',
                      templateId: '45aceae2-f114-43ae-8426-714f7af7ac2b',
                      templateName: 'Consent Checkbox',
                      url: '/data/forms/sticky-form/page/consent-checkbox',
                      fields: {
                        consentText: {
                          value:
                            "l agree to receive Renewal by Andersen LLCS, Greater Toronto Custom Windows Corp. d/b/a Renewal by Andersen of Greater Toronto's newsletters, and/or Timeless Windows Corp. d/b/a Renewal by Andersen of British Columbia, e-mails, text | messages, and/or other electronic communications containing product updates and upgrades, product information, special offers, and events. Renewal by Andersen LLCs contact information can be found on our privacy page. Greater Toronto Custom Windows Corp. d/b/a Renewal of Greater Toronto's contact information can be found by dicking here. Timeless Windows Corp, d/b/a Renewal by Andersen of British Columbia's contact information can be found by clicking here. You can unsubscribe at anytime.",
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
                          value: true,
                        },
                        children: [],
                      },
                    },
                  ],
                },
              },
              {
                id: '3b83b081-c9f0-4e82-ab5a-f671966eb876',
                displayName: 'Thank You Page',
                name: 'Thank You Page',
                templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
                templateName: 'Page',
                url: '/data/forms/sticky-form/thank-you-page',
                fields: {
                  includeInSteps: {
                    value: false,
                  },
                  label: {
                    value: 'Thank You',
                  },
                  children: [
                    {
                      id: '045688e1-db29-466e-af37-dabe404ae40d',
                      displayName: 'Headline',
                      name: 'Headline',
                      templateId: '78e78e19-8b37-4637-8c04-9de221572d0d',
                      templateName: 'Headline',
                      url: '/data/forms/sticky-form/thank-you-page/headline',
                      fields: {
                        alignment: {
                          id: '67192ebd-70ce-4603-ae48-70c3b5df6b2b',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center',
                          name: 'Center',
                          displayName: 'Center',
                          fields: {
                            Value: {
                              value: 'center',
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
                          value: 'Thank you!',
                        },
                        removeHorizontalLine: {
                          value: true,
                        },
                        children: [],
                      },
                    },
                    {
                      id: '5699b406-f2f4-4a42-a1dd-8afdc49b8614',
                      displayName: 'Description',
                      name: 'Description',
                      templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
                      templateName: 'Description',
                      url: '/data/forms/sticky-form/thank-you-page/description',
                      fields: {
                        alignment: {
                          id: '67192ebd-70ce-4603-ae48-70c3b5df6b2b',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/text-alignment/center',
                          name: 'Center',
                          displayName: 'Center',
                          fields: {
                            Value: {
                              value: 'center',
                            },
                          },
                          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                          templateName: 'Enum',
                        },
                        body: {
                          value:
                            'Your local Renewal by Andersen retailer will be in contact with you shortly to schedule your appointment.',
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
    displayOffer: {
      value: true,
    },
    logo: {
      value: {
        src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/shared/LOGO-RbA-Horizontal.svg?h=77&iar=0&w=200&rev=150f8af809b5405f8317a2622e0c104a',
        alt: 'LOGO-RbA-Horizontal',
        width: '200',
        height: '77',
      },
    },
    logoLink: {
      value: {
        href: '/',
        text: '',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '',
        querystring: '',
        id: '{389C03C7-02A0-463C-B02B-4ED091CAAD15}',
      },
    },
    seeOfferDetailsCTAText: {
      value: 'See Offer Details ',
    },
    componentSpacing: {
      id: 'a1c45922-1caf-4df8-9f96-9d2033e159cf',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/component-spacing/none',
      name: 'None',
      displayName: 'None',
      fields: {
        Value: {
          value: 'none',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
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
};

export default defaultData;
