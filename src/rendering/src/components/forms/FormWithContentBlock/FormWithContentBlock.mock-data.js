// Lib
import { getSampleRenderingContext } from 'lib/mocks/mock-placeholder';

const defaultData = {
  rendering: {
    uid: '375b7f87-3e66-4fbf-a3b4-b82c246d181e',
    componentName: 'FormWithContentBlock',
    dataSource: '{CD21969D-CDEA-4F78-AAD3-AAB6C47FAD0D}',
    placeholders: {
      contentBlock: [
        {
          uid: 'a7b298b3-390f-4844-aa7d-b311c8b809c4',
          componentName: 'ContentBlock',
          dataSource: '{A7B298B3-390F-4844-AA7D-B311C8B809C4}',
          fields: {
            backgroundColor: {
              id: '473218b3-5da3-4c82-9a19-d8d069c66ccf',
              url: '/sitecore/content/andersencorporation/enterprise-global/enums/background-color-content-block/white',
              name: 'White',
              displayName: 'White',
              fields: {
                Value: {
                  value: 'white',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            },
            useLegalCopyFont: {
              value: false,
            },
            componentSpacing: {
              id: '501ccbdc-c18b-4d37-a1b0-d0f0aa497a3b',
              url: '/sitecore/content/andersencorporation/enterprise-global/enums/component-spacing/reduced',
              name: 'Reduced',
              displayName: 'Reduced',
              fields: {
                Value: {
                  value: 'reduced',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            },
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
              value: 'This is a headline lorem ipsum dolor amit ',
            },
            body: {
              value:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>\n<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. <a href="/components/herosimple/">This is a link style.</a>&nbsp;test</p>',
            },
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
            cta1AriaLabel: {
              value: '',
            },
            cta1Icon: null,
            cta2AriaLabel: {
              value: '',
            },
            cta2Icon: null,
            cta2Link: {
              value: {
                href: '',
              },
            },
            cta2Modal: null,
            cta2ModalLinkText: {
              value: '',
            },
            cta2Style: null,
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
        },
      ],
      form: [
        {
          uid: 'af1d93a4-25ff-4cf1-9b0b-0caabf50450b',
          componentName: 'Form',
          dataSource: '{AF1D93A4-25FF-4CF1-9B0B-0CAABF50450B}',
          fields: {
            formName: {
              value: '$name',
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
                id: 'fce93b8d-858e-4f72-8cad-e465a563ba6b',
                displayName: 'Form Page',
                name: 'Form Page',
                templateId: 'c4442680-1100-4626-a469-acc318e25cbf',
                templateName: 'Page',
                url: '/data/forms/single-step-form---raveena/form-page',
                fields: {
                  includeInSteps: {
                    value: false,
                  },
                  label: {
                    value: 'Form Page',
                  },
                  children: [
                    {
                      id: '06c7ffec-745c-4445-8ebc-a8c077f1f058',
                      displayName: 'Headline',
                      name: 'Headline',
                      templateId: '78e78e19-8b37-4637-8c04-9de221572d0d',
                      templateName: 'Headline',
                      url: '/data/forms/single-step-form---raveena/form-page/headline',
                      fields: {
                        alignment: {
                          id: 'c6dc5505-a8a3-47e0-8b10-f01b2c03aa32',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/alignment/left',
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
                          value: 'Headline',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '152e55a7-497b-429c-ad0e-1e5f8a52b67f',
                      displayName: 'Paragraph',
                      name: 'Paragraph',
                      templateId: '1e258863-055b-4c0d-b775-59541b0a90fd',
                      templateName: 'Description',
                      url: '/data/forms/single-step-form---raveena/form-page/paragraph',
                      fields: {
                        alignment: {
                          id: 'c6dc5505-a8a3-47e0-8b10-f01b2c03aa32',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/alignment/left',
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
                          value: '',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '32575f1d-ac92-4a3c-8be3-c8656d73fd2d',
                      displayName: 'Date Custom',
                      name: 'Date Custom',
                      templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
                      templateName: 'Date',
                      url: '/data/forms/single-step-form---raveena/form-page/date-custom',
                      fields: {
                        defaultValue: null,
                        defaultValueCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        maxDate: {
                          id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/custom',
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
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/custom',
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
                        minDateCustom: {
                          value: '2023-08-01T00:00:00Z',
                        },
                        label: {
                          value: 'Date Today',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '95d02782-df47-4e26-a9ca-b404793ebe57',
                      displayName: 'Date Today',
                      name: 'Date Today',
                      templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
                      templateName: 'Date',
                      url: '/data/forms/single-step-form---raveena/form-page/date-today',
                      fields: {
                        defaultValue: null,
                        defaultValueCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        maxDate: null,
                        maxDateCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        minDate: {
                          id: '2ee7070a-cdd7-4bc1-a00a-379d44e45893',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/today',
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
                        minDateCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        label: {
                          value: 'Date Today',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'e15cf035-00b6-4c3b-9746-a988f36e41d5',
                      displayName: 'Date Today - Custom',
                      name: 'Date Today - Custom',
                      templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
                      templateName: 'Date',
                      url: '/data/forms/single-step-form---raveena/form-page/date-today---custom',
                      fields: {
                        defaultValue: null,
                        defaultValueCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        maxDate: {
                          id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/custom',
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
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/today',
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
                        minDateCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        label: {
                          value: 'Date Today',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '3b0a880d-f813-4586-a14a-c057abf7312b',
                      displayName: 'Date Tomorrow',
                      name: 'Date Tomorrow',
                      templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
                      templateName: 'Date',
                      url: '/data/forms/single-step-form---raveena/form-page/date-tomorrow',
                      fields: {
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
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/tomorrow',
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
                        minDateCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        label: {
                          value: 'Date Today',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '50c3b00f-4a23-4f00-b672-485807b948d5',
                      displayName: 'Date Yesterday',
                      name: 'Date Yesterday',
                      templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
                      templateName: 'Date',
                      url: '/data/forms/single-step-form---raveena/form-page/date-yesterday',
                      fields: {
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
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/yesterday',
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
                        minDateCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        label: {
                          value: 'Date Today',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'bfb65ba8-668a-432e-b46d-9683100e28be',
                      displayName: 'Date Yesterday - Tomorrow',
                      name: 'Date Yesterday - Tomorrow',
                      templateId: '1adbc0a2-a0a9-4341-b752-6b91f903e9b0',
                      templateName: 'Date',
                      url: '/data/forms/single-step-form---raveena/form-page/date-yesterday---tomorrow',
                      fields: {
                        defaultValue: null,
                        defaultValueCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        maxDate: {
                          id: '1d797cbb-7dac-44f3-a894-b844020ba0ac',
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/tomorrow',
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
                          url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/yesterday',
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
                        minDateCustom: {
                          value: '0001-01-01T00:00:00Z',
                        },
                        label: {
                          value: 'Date Today',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'ff75f183-b4fa-482a-9a2d-201a01c18db8',
                      displayName: 'Email with Confirm Email',
                      name: 'Email with Confirm Email',
                      templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
                      templateName: 'Email',
                      url: '/data/forms/single-step-form---raveena/form-page/email-with-confirm-email',
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
                        valueProviders: [],
                        label: {
                          value: 'Email with Confirm Email',
                        },
                        validations: [
                          {
                            id: '6ad1f3f3-a869-44ae-813b-d28a84837363',
                            url: '/data/forms/validations/min',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min',
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
                            id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                            url: '/data/forms/validations/max',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '34518135-a913-4093-89f6-ccd56d6545f7',
                      displayName: 'Only Email',
                      name: 'Only Email',
                      templateId: 'a1d62e74-51c3-4bdd-8547-1ece87422ec9',
                      templateName: 'Email',
                      url: '/data/forms/single-step-form---raveena/form-page/only-email',
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
                          {
                            id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                            url: '/data/forms/validations/max',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '1d2f8bee-6562-4138-916a-7e6d42e3adc1',
                      displayName: 'Phone',
                      name: 'Phone',
                      templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
                      templateName: 'Phone',
                      url: '/data/forms/single-step-form---raveena/form-page/phone',
                      fields: {
                        defaultValue: {
                          value: '',
                        },
                        valueProviders: [],
                        label: {
                          value: 'Telephone',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '70585b3e-1099-4a3d-84d1-35aee6e488e1',
                      displayName: 'Phone Optional',
                      name: 'Phone Optional',
                      templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
                      templateName: 'Phone',
                      url: '/data/forms/single-step-form---raveena/form-page/phone-optional',
                      fields: {
                        defaultValue: {
                          value: '',
                        },
                        valueProviders: [],
                        label: {
                          value: 'Telephone Optional',
                        },
                        validations: [
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '020fd772-fb4b-4c11-ab09-c0163d91da11',
                      displayName: 'Short Text Alphabetic',
                      name: 'Short Text Alphabetic',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/single-step-form---raveena/form-page/short-text-alphabetic',
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
                        valueProviders: [],
                        label: {
                          value: 'Short Text',
                        },
                        validations: [
                          {
                            id: 'a172a063-e48f-425c-9cfa-7ec2a84a5ed2',
                            url: '/data/forms/validations/alphabetic',
                            name: 'Alphabetic',
                            displayName: 'Alphabetic',
                            fields: {
                              errorMessage: {
                                value: 'Please provide valid input format.',
                              },
                              validationRule: {
                                value: '/^([^0-9]*)$/',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '4a0d4817-9cd3-4058-95bc-3c66cf6d98d4',
                      displayName: 'Short Text Alphanumeric',
                      name: 'Short Text Alphanumeric',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/single-step-form---raveena/form-page/short-text-alphanumeric',
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
                        valueProviders: [],
                        label: {
                          value: 'Short Text',
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
                            id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                            url: '/data/forms/validations/max',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'a8f58ff1-3e76-45a1-a2cd-f1fea82349c6',
                      displayName: 'Short Text Numeric',
                      name: 'Short Text Numeric',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/single-step-form---raveena/form-page/short-text-numeric',
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
                        valueProviders: [],
                        label: {
                          value: 'Short Text',
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
                            id: '6ad1f3f3-a869-44ae-813b-d28a84837363',
                            url: '/data/forms/validations/min',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min',
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
                            id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                            url: '/data/forms/validations/max',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                            id: 'fdd4efe4-5372-4f5a-97b8-711ed631fff7',
                            url: '/data/forms/validations/numeric',
                            name: 'Numeric',
                            displayName: 'Numeric',
                            fields: {
                              errorMessage: {
                                value: 'Please provide valid input format.',
                              },
                              validationRule: {
                                value: '/^\\d*[.]?\\d*$/',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '3aae1e6c-43b6-4aaf-96f5-e0ba48337f7b',
                      displayName: 'Short Text URL',
                      name: 'Short Text URL',
                      templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
                      templateName: 'Short Text',
                      url: '/data/forms/single-step-form---raveena/form-page/short-text-url',
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
                        valueProviders: [],
                        label: {
                          value: 'Short Text',
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
                            id: '6ad1f3f3-a869-44ae-813b-d28a84837363',
                            url: '/data/forms/validations/min',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min',
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
                            id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                            url: '/data/forms/validations/max',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                            id: '3ad11e86-bc8b-45f3-a044-32bab98d6601',
                            url: '/data/forms/validations/url',
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
                                url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/url',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: 'bcb82cb7-5700-4d6a-b91c-b07caf5e5847',
                      displayName: 'Checkbox Group',
                      name: 'Checkbox Group',
                      templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
                      templateName: 'Checkbox Group',
                      url: '/data/forms/single-step-form---raveena/form-page/checkbox-group',
                      fields: {
                        defaultValue: [],
                        datasource: {
                          id: 'da4bdee7-6435-48d7-b71a-7e0012b273f8',
                          url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items',
                          name: 'List Items',
                          displayName: 'List Items',
                          fields: {},
                          templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                          templateName: 'List Item Folder',
                          children: [
                            {
                              id: 'a70fa950-a2d1-46cb-9973-512367d9b7e4',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items/homeowner',
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
                            },
                            {
                              id: '57872b80-283a-41f5-9a96-47e6fd3ef9a9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items/trade-professional',
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
                          value: 'Sub label',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [
                          {
                            id: 'c7e84206-137e-4b71-8fc8-fb5a73ee4489',
                            displayName: 'List Items',
                            name: 'List Items',
                            templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                            templateName: 'List Item Folder',
                            url: '/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items',
                            fields: {
                              children: [
                                {
                                  id: '1c620648-ee41-4cd9-b453-78783182590c',
                                  displayName: 'Homeowner',
                                  name: 'Homeowner',
                                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                                  templateName: 'List Item',
                                  url: '/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items/homeowner',
                                  fields: {
                                    title: {
                                      value: 'Homeowner',
                                    },
                                    value: {
                                      value: 'Homeowner',
                                    },
                                  },
                                },
                                {
                                  id: '81d02e70-7bbd-43f7-82da-4660f9b396fd',
                                  displayName: 'Trade Professional',
                                  name: 'Trade Professional',
                                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                                  templateName: 'List Item',
                                  url: '/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items/trade-professional',
                                  fields: {
                                    title: {
                                      value: 'Trade Professional',
                                    },
                                    value: {
                                      value: 'Trade Professional',
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
                      id: '8d0d24ae-89f6-4337-87b0-14200ecc1a9b',
                      displayName: 'Checkbox Group 1',
                      name: 'Checkbox Group 1',
                      templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
                      templateName: 'Checkbox Group',
                      url: '/data/forms/single-step-form---raveena/form-page/checkbox-group-1',
                      fields: {
                        defaultValue: [
                          {
                            id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                            url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                          url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type',
                          name: 'Door Type',
                          displayName: 'Door Type',
                          fields: {
                            queryIdentifier: {
                              value: 'door-type',
                            },
                          },
                          templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                          templateName: 'Facet Folder',
                          children: [
                            {
                              id: '0caaf8e9-25d2-48a5-a88c-4b17baec5835',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/big-doors',
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
                            },
                            {
                              id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                            },
                            {
                              id: 'ce525246-ca96-40f1-99ac-fc3aef7a7218',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/folding-patio',
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
                            },
                            {
                              id: 'c9c1f699-1a40-432e-afad-0e07b3def7b6',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-anytime',
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
                            },
                            {
                              id: 'ddba5dce-e42c-4d3f-a24c-8045cd2f955e',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-seasonal',
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
                            },
                            {
                              id: 'ac3df907-a6da-40df-b1f5-0926bb394b39',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/gliding-patio',
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
                            },
                            {
                              id: '9bad48cc-cb0f-48f2-8ba8-07d70b943f54',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/hinged-patio',
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
                            },
                            {
                              id: '49fea60a-c968-4132-b992-4d09df8407a5',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/liftslide-door',
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
                            },
                            {
                              id: 'a5088b88-b119-4c8f-9250-72475b155bc9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multi-slide-door',
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
                            },
                            {
                              id: '278f3558-da6e-4e74-bfe3-b74000c320ab',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multiglide',
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
                            },
                            {
                              id: '63cb0220-757e-4caa-bbfa-8a7f9497f216',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-1-2-light',
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
                            },
                            {
                              id: 'baf6b76a-0e58-4cc4-bae2-48604b8dcf55',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-3-4-light',
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
                            },
                            {
                              id: 'adc1aac6-a490-4b4e-98d3-50352ee56541',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pet-entry-system',
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
                            },
                            {
                              id: 'cc21549a-e34f-4694-b0f0-1dd8d9a85642',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pivot-door',
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
                            },
                            {
                              id: '3f1f2594-f026-4223-88da-a7e672b2adb2',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/residential-entry',
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
                            },
                            {
                              id: 'e77ade7f-392e-49ab-96b5-abedf83c92f9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/screen-door',
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
                            },
                            {
                              id: '8610958d-1f4f-486b-bd5a-e7cd9b1daef3',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/sliding-glass-door',
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
                            },
                            {
                              id: 'c67fdf8f-23e8-44bc-bff0-af4d0231250f',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/storm-doors',
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
                          value: 'Sub label',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [],
                      },
                    },
                    {
                      id: '016a6b32-17e2-405b-9369-8d5a37934f2e',
                      displayName: 'Checkbox Group 2',
                      name: 'Checkbox Group 2',
                      templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
                      templateName: 'Checkbox Group',
                      url: '/data/forms/single-step-form---raveena/form-page/checkbox-group-2',
                      fields: {
                        defaultValue: [
                          {
                            id: '3900fea7-a1df-427f-b267-3ddb29b53d67',
                            url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/bow-and-bay',
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
                            url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/casement',
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
                          url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type',
                          name: 'Window Type',
                          displayName: 'Window Type',
                          fields: {
                            queryIdentifier: {
                              value: 'window-type',
                            },
                          },
                          templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                          templateName: 'Facet Folder',
                          children: [
                            {
                              id: '092822d3-fbcd-41e2-b5e8-66e4f3cb2cd8',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/awing',
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
                            },
                            {
                              id: '3ba44ca6-c8bf-4a32-be4c-1c315d468372',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/basement-windows',
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
                            },
                            {
                              id: '3900fea7-a1df-427f-b267-3ddb29b53d67',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/bow-and-bay',
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
                            },
                            {
                              id: '70a5f483-d327-41db-813b-2d77d35a8b7e',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/casement',
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
                            },
                            {
                              id: '6ab8c7cb-a3ad-49e3-8908-ffabb223b170',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/double-hung',
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
                            },
                            {
                              id: '38128784-3bb5-4b8a-9bc5-dcae769be47d',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/gliding',
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
                            },
                            {
                              id: '012a5096-fb11-437a-9142-167b2e1559f3',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/hopper',
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
                            },
                            {
                              id: '6c52d8b9-d3d3-42c1-b2c4-91fd9aea4827',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/picture',
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
                            },
                            {
                              id: 'fdb8347d-f03d-4783-b350-6e904413101d',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/single-hung',
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
                            },
                            {
                              id: 'ef653c59-da1f-44cf-99d5-5fc112cc88db',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/skylights',
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
                            },
                            {
                              id: '6224ccbf-934e-43cb-8eb0-9788495c847d',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/specialty',
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
                            },
                            {
                              id: '6dc278d6-82d2-4876-a21d-d2cdd066e887',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/window-wall',
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
                          value: 'Sub label',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [],
                      },
                    },
                    {
                      id: '3d0759e9-ca99-464a-a3ef-f7c9b5e07f17',
                      displayName: 'Checkbox Group 3',
                      name: 'Checkbox Group 3',
                      templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
                      templateName: 'Checkbox Group',
                      url: '/data/forms/single-step-form---raveena/form-page/checkbox-group-3',
                      fields: {
                        defaultValue: [
                          {
                            id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                            url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                            url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-3',
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
                            url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-4',
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
                          url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items',
                          name: 'List Items',
                          displayName: 'List Items',
                          fields: {},
                          templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                          templateName: 'List Item Folder',
                          children: [
                            {
                              id: '3e6329d1-c5c8-4fa5-9797-06ed163014fb',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item',
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
                            },
                            {
                              id: '17c52810-0cf1-4825-b0b1-f83948d97500',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-1',
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
                            },
                            {
                              id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                            },
                            {
                              id: 'e7959365-ec83-4b08-bf23-6f058a816253',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-3',
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
                            },
                            {
                              id: 'c586560c-7d21-457a-ae38-cdbde1864c53',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-4',
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
                            },
                            {
                              id: '4a2020e4-5cf8-4d66-88cf-7e4c8fff09eb',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-5',
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
                            },
                            {
                              id: '2dd3061e-5aa3-42b1-847f-54149b621303',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-6',
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
                            },
                            {
                              id: '088d4c50-a5cc-4c12-b26a-c95d0efdec9a',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-7',
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
                            },
                            {
                              id: '5f2237a0-a53b-4125-b80c-0e32e02a5573',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-9',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [],
                      },
                    },
                    {
                      id: '21089c9a-cb50-46b4-b5ef-4a3502de0459',
                      displayName: 'Radio Button',
                      name: 'Radio Button',
                      templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
                      templateName: 'Radio Button',
                      url: '/data/forms/single-step-form---raveena/form-page/radio-button',
                      fields: {
                        defaultValue: null,
                        datasource: {
                          id: '89f6df35-8d1f-4dfc-8ac2-af1778962f3f',
                          url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/radio-button/list-items',
                          name: 'List Items',
                          displayName: 'List Items',
                          fields: {},
                          templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                          templateName: 'List Item Folder',
                          children: [
                            {
                              id: '273126a4-6625-4b1d-bbbd-7416c10ad078',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/radio-button/list-items/homeowner',
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
                            },
                            {
                              id: 'c56fc3f9-eba3-4b98-aec1-83215fa9aa5a',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/radio-button/list-items/trade-professional',
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
                          value: 'Sub label',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [
                          {
                            id: '69aee32a-2a16-4f14-867a-41d2c3c22ae4',
                            displayName: 'List Items',
                            name: 'List Items',
                            templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                            templateName: 'List Item Folder',
                            url: '/data/forms/single-step-form---raveena/form-page/radio-button/list-items',
                            fields: {
                              children: [
                                {
                                  id: '993901a9-1299-4fbf-abb8-681a8d207fd0',
                                  displayName: 'Homeowner',
                                  name: 'Homeowner',
                                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                                  templateName: 'List Item',
                                  url: '/data/forms/single-step-form---raveena/form-page/radio-button/list-items/homeowner',
                                  fields: {
                                    title: {
                                      value: 'Homeowner',
                                    },
                                    value: {
                                      value: 'Homeowner',
                                    },
                                  },
                                },
                                {
                                  id: '303de40f-6385-4860-b5b1-0515254f96fb',
                                  displayName: 'Trade Professional',
                                  name: 'Trade Professional',
                                  templateId: '741b9a7f-3a37-46e0-9980-ea7e53c4e840',
                                  templateName: 'List Item',
                                  url: '/data/forms/single-step-form---raveena/form-page/radio-button/list-items/trade-professional',
                                  fields: {
                                    title: {
                                      value: 'Trade Professional',
                                    },
                                    value: {
                                      value: 'Trade Professional',
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
                      id: '189083e0-f647-4173-ae69-fc7ff1138cec',
                      displayName: 'Radio Button 1',
                      name: 'Radio Button 1',
                      templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
                      templateName: 'Radio Button',
                      url: '/data/forms/single-step-form---raveena/form-page/radio-button-1',
                      fields: {
                        defaultValue: {
                          id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                          url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                          url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type',
                          name: 'Door Type',
                          displayName: 'Door Type',
                          fields: {
                            queryIdentifier: {
                              value: 'door-type',
                            },
                          },
                          templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                          templateName: 'Facet Folder',
                          children: [
                            {
                              id: '0caaf8e9-25d2-48a5-a88c-4b17baec5835',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/big-doors',
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
                            },
                            {
                              id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                            },
                            {
                              id: 'ce525246-ca96-40f1-99ac-fc3aef7a7218',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/folding-patio',
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
                            },
                            {
                              id: 'c9c1f699-1a40-432e-afad-0e07b3def7b6',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-anytime',
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
                            },
                            {
                              id: 'ddba5dce-e42c-4d3f-a24c-8045cd2f955e',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-seasonal',
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
                            },
                            {
                              id: 'ac3df907-a6da-40df-b1f5-0926bb394b39',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/gliding-patio',
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
                            },
                            {
                              id: '9bad48cc-cb0f-48f2-8ba8-07d70b943f54',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/hinged-patio',
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
                            },
                            {
                              id: '49fea60a-c968-4132-b992-4d09df8407a5',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/liftslide-door',
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
                            },
                            {
                              id: 'a5088b88-b119-4c8f-9250-72475b155bc9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multi-slide-door',
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
                            },
                            {
                              id: '278f3558-da6e-4e74-bfe3-b74000c320ab',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multiglide',
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
                            },
                            {
                              id: '63cb0220-757e-4caa-bbfa-8a7f9497f216',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-1-2-light',
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
                            },
                            {
                              id: 'baf6b76a-0e58-4cc4-bae2-48604b8dcf55',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-3-4-light',
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
                            },
                            {
                              id: 'adc1aac6-a490-4b4e-98d3-50352ee56541',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pet-entry-system',
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
                            },
                            {
                              id: 'cc21549a-e34f-4694-b0f0-1dd8d9a85642',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pivot-door',
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
                            },
                            {
                              id: '3f1f2594-f026-4223-88da-a7e672b2adb2',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/residential-entry',
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
                            },
                            {
                              id: 'e77ade7f-392e-49ab-96b5-abedf83c92f9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/screen-door',
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
                            },
                            {
                              id: '8610958d-1f4f-486b-bd5a-e7cd9b1daef3',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/sliding-glass-door',
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
                            },
                            {
                              id: 'c67fdf8f-23e8-44bc-bff0-af4d0231250f',
                              url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/storm-doors',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [],
                      },
                    },
                    {
                      id: 'fe306217-b0b2-4b3e-9792-b7aa9211c2ca',
                      displayName: 'Radio Button 2',
                      name: 'Radio Button 2',
                      templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
                      templateName: 'Radio Button',
                      url: '/data/forms/single-step-form---raveena/form-page/radio-button-2',
                      fields: {
                        defaultValue: {
                          id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                          url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                          url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items',
                          name: 'List Items',
                          displayName: 'List Items',
                          fields: {},
                          templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                          templateName: 'List Item Folder',
                          children: [
                            {
                              id: '3e6329d1-c5c8-4fa5-9797-06ed163014fb',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item',
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
                            },
                            {
                              id: '17c52810-0cf1-4825-b0b1-f83948d97500',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-1',
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
                            },
                            {
                              id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                            },
                            {
                              id: 'e7959365-ec83-4b08-bf23-6f058a816253',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-3',
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
                            },
                            {
                              id: 'c586560c-7d21-457a-ae38-cdbde1864c53',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-4',
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
                            },
                            {
                              id: '4a2020e4-5cf8-4d66-88cf-7e4c8fff09eb',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-5',
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
                            },
                            {
                              id: '2dd3061e-5aa3-42b1-847f-54149b621303',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-6',
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
                            },
                            {
                              id: '088d4c50-a5cc-4c12-b26a-c95d0efdec9a',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-7',
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
                            },
                            {
                              id: '5f2237a0-a53b-4125-b80c-0e32e02a5573',
                              url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-9',
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
                          value: 'Sub label',
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
                          value: '$ewNameKebab',
                        },
                        valueProviders: [],
                        children: [],
                      },
                    },
                    {
                      id: '7968aeae-8302-4510-b2c3-edb7eaf79885',
                      displayName: 'Long Text',
                      name: 'Long Text',
                      templateId: '62d234ca-1c65-4699-8bfe-339c28d92761',
                      templateName: 'Text Area',
                      url: '/data/forms/single-step-form---raveena/form-page/long-text',
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
                        valueProviders: [],
                        label: {
                          value: 'Long Text',
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
                        placeholderText: {
                          value: '',
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
                          value: '$ewNameKebab',
                        },
                        children: [],
                      },
                    },
                    {
                      id: '2399c84b-def2-4334-a2f7-731ffdf2dfed',
                      displayName: 'Submit',
                      name: 'Submit',
                      templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
                      templateName: 'Button',
                      url: '/data/forms/single-step-form---raveena/form-page/submit',
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
  },
  fields: {
    backgroundColor: {
      id: 'e970a27b-ab26-4e1a-867c-15ecf0586e40',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/background-color-content-block/gray',
      name: 'Gray',
      displayName: 'Gray',
      fields: {
        Value: {
          value: 'gray',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    'ph-contentBlock': {
      id: 'a7b298b3-390f-4844-aa7d-b311c8b809c4',
      url: '/data/components/content-blocks/content-block-variation1-white-c',
      name: 'Content Block variation1-white-c',
      displayName: 'Content Block variation1-white-c',
      fields: {
        backgroundColor: {
          id: '473218b3-5da3-4c82-9a19-d8d069c66ccf',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/background-color-content-block/white',
          name: 'White',
          displayName: 'White',
          fields: {
            Value: {
              value: 'white',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        useLegalCopyFont: {
          value: false,
        },
        componentSpacing: {
          id: '501ccbdc-c18b-4d37-a1b0-d0f0aa497a3b',
          url: '/sitecore/content/andersencorporation/enterprise-global/enums/component-spacing/reduced',
          name: 'Reduced',
          displayName: 'Reduced',
          fields: {
            Value: {
              value: 'reduced',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
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
          value: 'This is a headline lorem ipsum dolor amit ',
        },
        body: {
          value:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>\n<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. <a href="/components/herosimple/">This is a link style.</a>&nbsp;test</p>',
        },
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
        cta1AriaLabel: {
          value: '',
        },
        cta1Icon: null,
        cta2AriaLabel: {
          value: '',
        },
        cta2Icon: null,
        cta2Link: {
          value: {
            href: '',
          },
        },
        cta2Modal: null,
        cta2ModalLinkText: {
          value: '',
        },
        cta2Style: null,
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
      templateId: 'f0ff41eb-eb09-5af7-907a-279a823aecd4',
      templateName: 'Content Block',
    },
    'ph-form': {
      id: 'af1d93a4-25ff-4cf1-9b0b-0caabf50450b',
      url: '/data/forms/single-step-form---raveena',
      name: 'Single Step Form - Raveena',
      displayName: 'Single Step Form - Raveena',
      fields: {
        formName: {
          value: '$name',
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
          id: 'fce93b8d-858e-4f72-8cad-e465a563ba6b',
          url: '/data/forms/single-step-form---raveena/form-page',
          name: 'Form Page',
          displayName: 'Form Page',
          fields: {
            includeInSteps: {
              value: false,
            },
            label: {
              value: 'Form Page',
            },
          },
          children: [
            {
              id: '06c7ffec-745c-4445-8ebc-a8c077f1f058',
              url: '/data/forms/single-step-form---raveena/form-page/headline',
              name: 'Headline',
              displayName: 'Headline',
              fields: {
                alignment: {
                  id: 'c6dc5505-a8a3-47e0-8b10-f01b2c03aa32',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/alignment/left',
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
                  value: 'Headline',
                },
              },
            },
            {
              id: '152e55a7-497b-429c-ad0e-1e5f8a52b67f',
              url: '/data/forms/single-step-form---raveena/form-page/paragraph',
              name: 'Paragraph',
              displayName: 'Paragraph',
              fields: {
                alignment: {
                  id: 'c6dc5505-a8a3-47e0-8b10-f01b2c03aa32',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/alignment/left',
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
                  value: '',
                },
              },
            },
            {
              id: '32575f1d-ac92-4a3c-8be3-c8656d73fd2d',
              url: '/data/forms/single-step-form---raveena/form-page/date-custom',
              name: 'Date Custom',
              displayName: 'Date Custom',
              fields: {
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: {
                  id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/custom',
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
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/custom',
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
                minDateCustom: {
                  value: '2023-08-01T00:00:00Z',
                },
                label: {
                  value: 'Date Today',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '95d02782-df47-4e26-a9ca-b404793ebe57',
              url: '/data/forms/single-step-form---raveena/form-page/date-today',
              name: 'Date Today',
              displayName: 'Date Today',
              fields: {
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: null,
                maxDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                minDate: {
                  id: '2ee7070a-cdd7-4bc1-a00a-379d44e45893',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/today',
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
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                label: {
                  value: 'Date Today',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: 'e15cf035-00b6-4c3b-9746-a988f36e41d5',
              url: '/data/forms/single-step-form---raveena/form-page/date-today---custom',
              name: 'Date Today - Custom',
              displayName: 'Date Today - Custom',
              fields: {
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: {
                  id: 'ab756406-54bf-40a7-bdae-3166ce9e1887',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/custom',
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
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/today',
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
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                label: {
                  value: 'Date Today',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '3b0a880d-f813-4586-a14a-c057abf7312b',
              url: '/data/forms/single-step-form---raveena/form-page/date-tomorrow',
              name: 'Date Tomorrow',
              displayName: 'Date Tomorrow',
              fields: {
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
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/tomorrow',
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
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                label: {
                  value: 'Date Today',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '50c3b00f-4a23-4f00-b672-485807b948d5',
              url: '/data/forms/single-step-form---raveena/form-page/date-yesterday',
              name: 'Date Yesterday',
              displayName: 'Date Yesterday',
              fields: {
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
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/yesterday',
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
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                label: {
                  value: 'Date Today',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: 'bfb65ba8-668a-432e-b46d-9683100e28be',
              url: '/data/forms/single-step-form---raveena/form-page/date-yesterday---tomorrow',
              name: 'Date Yesterday - Tomorrow',
              displayName: 'Date Yesterday - Tomorrow',
              fields: {
                defaultValue: null,
                defaultValueCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                maxDate: {
                  id: '1d797cbb-7dac-44f3-a894-b844020ba0ac',
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/tomorrow',
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
                  url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/date/yesterday',
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
                minDateCustom: {
                  value: '0001-01-01T00:00:00Z',
                },
                label: {
                  value: 'Date Today',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: 'ff75f183-b4fa-482a-9a2d-201a01c18db8',
              url: '/data/forms/single-step-form---raveena/form-page/email-with-confirm-email',
              name: 'Email with Confirm Email',
              displayName: 'Email with Confirm Email',
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
                valueProviders: [],
                label: {
                  value: 'Email with Confirm Email',
                },
                validations: [
                  {
                    id: '6ad1f3f3-a869-44ae-813b-d28a84837363',
                    url: '/data/forms/validations/min',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min',
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
                    id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                    url: '/data/forms/validations/max',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '34518135-a913-4093-89f6-ccd56d6545f7',
              url: '/data/forms/single-step-form---raveena/form-page/only-email',
              name: 'Only Email',
              displayName: 'Only Email',
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
                  {
                    id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                    url: '/data/forms/validations/max',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '1d2f8bee-6562-4138-916a-7e6d42e3adc1',
              url: '/data/forms/single-step-form---raveena/form-page/phone',
              name: 'Phone',
              displayName: 'Phone',
              fields: {
                defaultValue: {
                  value: '',
                },
                valueProviders: [],
                label: {
                  value: 'Telephone',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '70585b3e-1099-4a3d-84d1-35aee6e488e1',
              url: '/data/forms/single-step-form---raveena/form-page/phone-optional',
              name: 'Phone Optional',
              displayName: 'Phone Optional',
              fields: {
                defaultValue: {
                  value: '',
                },
                valueProviders: [],
                label: {
                  value: 'Telephone Optional',
                },
                validations: [
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '020fd772-fb4b-4c11-ab09-c0163d91da11',
              url: '/data/forms/single-step-form---raveena/form-page/short-text-alphabetic',
              name: 'Short Text Alphabetic',
              displayName: 'Short Text Alphabetic',
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
                valueProviders: [],
                label: {
                  value: 'Short Text',
                },
                validations: [
                  {
                    id: 'a172a063-e48f-425c-9cfa-7ec2a84a5ed2',
                    url: '/data/forms/validations/alphabetic',
                    name: 'Alphabetic',
                    displayName: 'Alphabetic',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value: '/^([^0-9]*)$/',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '4a0d4817-9cd3-4058-95bc-3c66cf6d98d4',
              url: '/data/forms/single-step-form---raveena/form-page/short-text-alphanumeric',
              name: 'Short Text Alphanumeric',
              displayName: 'Short Text Alphanumeric',
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
                valueProviders: [],
                label: {
                  value: 'Short Text',
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
                    id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                    url: '/data/forms/validations/max',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: 'a8f58ff1-3e76-45a1-a2cd-f1fea82349c6',
              url: '/data/forms/single-step-form---raveena/form-page/short-text-numeric',
              name: 'Short Text Numeric',
              displayName: 'Short Text Numeric',
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
                valueProviders: [],
                label: {
                  value: 'Short Text',
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
                    id: '6ad1f3f3-a869-44ae-813b-d28a84837363',
                    url: '/data/forms/validations/min',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min',
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
                    id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                    url: '/data/forms/validations/max',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                    id: 'fdd4efe4-5372-4f5a-97b8-711ed631fff7',
                    url: '/data/forms/validations/numeric',
                    name: 'Numeric',
                    displayName: 'Numeric',
                    fields: {
                      errorMessage: {
                        value: 'Please provide valid input format.',
                      },
                      validationRule: {
                        value: '/^\\d*[.]?\\d*$/',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '3aae1e6c-43b6-4aaf-96f5-e0ba48337f7b',
              url: '/data/forms/single-step-form---raveena/form-page/short-text-url',
              name: 'Short Text URL',
              displayName: 'Short Text URL',
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
                valueProviders: [],
                label: {
                  value: 'Short Text',
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
                    id: '6ad1f3f3-a869-44ae-813b-d28a84837363',
                    url: '/data/forms/validations/min',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/min',
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
                    id: 'd78b256b-6156-45bb-90b9-8de1f0428c47',
                    url: '/data/forms/validations/max',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
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
                    id: '3ad11e86-bc8b-45f3-a044-32bab98d6601',
                    url: '/data/forms/validations/url',
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
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/url',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: 'bcb82cb7-5700-4d6a-b91c-b07caf5e5847',
              url: '/data/forms/single-step-form---raveena/form-page/checkbox-group',
              name: 'Checkbox Group',
              displayName: 'Checkbox Group',
              fields: {
                defaultValue: [],
                datasource: {
                  id: 'da4bdee7-6435-48d7-b71a-7e0012b273f8',
                  url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: 'a70fa950-a2d1-46cb-9973-512367d9b7e4',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items/homeowner',
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
                    },
                    {
                      id: '57872b80-283a-41f5-9a96-47e6fd3ef9a9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/checkbox-group/list-items/trade-professional',
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
                  value: 'Sub label',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: '8d0d24ae-89f6-4337-87b0-14200ecc1a9b',
              url: '/data/forms/single-step-form---raveena/form-page/checkbox-group-1',
              name: 'Checkbox Group 1',
              displayName: 'Checkbox Group 1',
              fields: {
                defaultValue: [
                  {
                    id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                    url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                  url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type',
                  name: 'Door Type',
                  displayName: 'Door Type',
                  fields: {
                    queryIdentifier: {
                      value: 'door-type',
                    },
                  },
                  templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                  templateName: 'Facet Folder',
                  children: [
                    {
                      id: '0caaf8e9-25d2-48a5-a88c-4b17baec5835',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/big-doors',
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
                    },
                    {
                      id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                    },
                    {
                      id: 'ce525246-ca96-40f1-99ac-fc3aef7a7218',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/folding-patio',
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
                    },
                    {
                      id: 'c9c1f699-1a40-432e-afad-0e07b3def7b6',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-anytime',
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
                    },
                    {
                      id: 'ddba5dce-e42c-4d3f-a24c-8045cd2f955e',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-seasonal',
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
                    },
                    {
                      id: 'ac3df907-a6da-40df-b1f5-0926bb394b39',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/gliding-patio',
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
                    },
                    {
                      id: '9bad48cc-cb0f-48f2-8ba8-07d70b943f54',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/hinged-patio',
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
                    },
                    {
                      id: '49fea60a-c968-4132-b992-4d09df8407a5',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/liftslide-door',
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
                    },
                    {
                      id: 'a5088b88-b119-4c8f-9250-72475b155bc9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multi-slide-door',
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
                    },
                    {
                      id: '278f3558-da6e-4e74-bfe3-b74000c320ab',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multiglide',
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
                    },
                    {
                      id: '63cb0220-757e-4caa-bbfa-8a7f9497f216',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-1-2-light',
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
                    },
                    {
                      id: 'baf6b76a-0e58-4cc4-bae2-48604b8dcf55',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-3-4-light',
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
                    },
                    {
                      id: 'adc1aac6-a490-4b4e-98d3-50352ee56541',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pet-entry-system',
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
                    },
                    {
                      id: 'cc21549a-e34f-4694-b0f0-1dd8d9a85642',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pivot-door',
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
                    },
                    {
                      id: '3f1f2594-f026-4223-88da-a7e672b2adb2',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/residential-entry',
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
                    },
                    {
                      id: 'e77ade7f-392e-49ab-96b5-abedf83c92f9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/screen-door',
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
                    },
                    {
                      id: '8610958d-1f4f-486b-bd5a-e7cd9b1daef3',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/sliding-glass-door',
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
                    },
                    {
                      id: 'c67fdf8f-23e8-44bc-bff0-af4d0231250f',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/storm-doors',
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
                  value: 'Sub label',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: '016a6b32-17e2-405b-9369-8d5a37934f2e',
              url: '/data/forms/single-step-form---raveena/form-page/checkbox-group-2',
              name: 'Checkbox Group 2',
              displayName: 'Checkbox Group 2',
              fields: {
                defaultValue: [
                  {
                    id: '3900fea7-a1df-427f-b267-3ddb29b53d67',
                    url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/bow-and-bay',
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
                    url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/casement',
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
                  url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type',
                  name: 'Window Type',
                  displayName: 'Window Type',
                  fields: {
                    queryIdentifier: {
                      value: 'window-type',
                    },
                  },
                  templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                  templateName: 'Facet Folder',
                  children: [
                    {
                      id: '092822d3-fbcd-41e2-b5e8-66e4f3cb2cd8',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/awing',
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
                    },
                    {
                      id: '3ba44ca6-c8bf-4a32-be4c-1c315d468372',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/basement-windows',
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
                    },
                    {
                      id: '3900fea7-a1df-427f-b267-3ddb29b53d67',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/bow-and-bay',
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
                    },
                    {
                      id: '70a5f483-d327-41db-813b-2d77d35a8b7e',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/casement',
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
                    },
                    {
                      id: '6ab8c7cb-a3ad-49e3-8908-ffabb223b170',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/double-hung',
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
                    },
                    {
                      id: '38128784-3bb5-4b8a-9bc5-dcae769be47d',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/gliding',
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
                    },
                    {
                      id: '012a5096-fb11-437a-9142-167b2e1559f3',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/hopper',
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
                    },
                    {
                      id: '6c52d8b9-d3d3-42c1-b2c4-91fd9aea4827',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/picture',
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
                    },
                    {
                      id: 'fdb8347d-f03d-4783-b350-6e904413101d',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/single-hung',
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
                    },
                    {
                      id: 'ef653c59-da1f-44cf-99d5-5fc112cc88db',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/skylights',
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
                    },
                    {
                      id: '6224ccbf-934e-43cb-8eb0-9788495c847d',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/specialty',
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
                    },
                    {
                      id: '6dc278d6-82d2-4876-a21d-d2cdd066e887',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/window-type/window-wall',
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
                  value: 'Sub label',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: '3d0759e9-ca99-464a-a3ef-f7c9b5e07f17',
              url: '/data/forms/single-step-form---raveena/form-page/checkbox-group-3',
              name: 'Checkbox Group 3',
              displayName: 'Checkbox Group 3',
              fields: {
                defaultValue: [
                  {
                    id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                    url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                    url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-3',
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
                    url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-4',
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
                  url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '3e6329d1-c5c8-4fa5-9797-06ed163014fb',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item',
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
                    },
                    {
                      id: '17c52810-0cf1-4825-b0b1-f83948d97500',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-1',
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
                    },
                    {
                      id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                    },
                    {
                      id: 'e7959365-ec83-4b08-bf23-6f058a816253',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-3',
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
                    },
                    {
                      id: 'c586560c-7d21-457a-ae38-cdbde1864c53',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-4',
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
                    },
                    {
                      id: '4a2020e4-5cf8-4d66-88cf-7e4c8fff09eb',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-5',
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
                    },
                    {
                      id: '2dd3061e-5aa3-42b1-847f-54149b621303',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-6',
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
                    },
                    {
                      id: '088d4c50-a5cc-4c12-b26a-c95d0efdec9a',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-7',
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
                    },
                    {
                      id: '5f2237a0-a53b-4125-b80c-0e32e02a5573',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-9',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: '21089c9a-cb50-46b4-b5ef-4a3502de0459',
              url: '/data/forms/single-step-form---raveena/form-page/radio-button',
              name: 'Radio Button',
              displayName: 'Radio Button',
              fields: {
                defaultValue: null,
                datasource: {
                  id: '89f6df35-8d1f-4dfc-8ac2-af1778962f3f',
                  url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/radio-button/list-items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '273126a4-6625-4b1d-bbbd-7416c10ad078',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/radio-button/list-items/homeowner',
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
                    },
                    {
                      id: 'c56fc3f9-eba3-4b98-aec1-83215fa9aa5a',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/single-step-form---raveena/form-page/radio-button/list-items/trade-professional',
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
                  value: 'Sub label',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: '189083e0-f647-4173-ae69-fc7ff1138cec',
              url: '/data/forms/single-step-form---raveena/form-page/radio-button-1',
              name: 'Radio Button 1',
              displayName: 'Radio Button 1',
              fields: {
                defaultValue: {
                  id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                  url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                  url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type',
                  name: 'Door Type',
                  displayName: 'Door Type',
                  fields: {
                    queryIdentifier: {
                      value: 'door-type',
                    },
                  },
                  templateId: '6f0f9b58-daec-4c55-a519-36b3207d109c',
                  templateName: 'Facet Folder',
                  children: [
                    {
                      id: '0caaf8e9-25d2-48a5-a88c-4b17baec5835',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/big-doors',
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
                    },
                    {
                      id: '88cd28d4-dec6-4000-9fae-feefd231a191',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/commercial-entry',
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
                    },
                    {
                      id: 'ce525246-ca96-40f1-99ac-fc3aef7a7218',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/folding-patio',
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
                    },
                    {
                      id: 'c9c1f699-1a40-432e-afad-0e07b3def7b6',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-anytime',
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
                    },
                    {
                      id: 'ddba5dce-e42c-4d3f-a24c-8045cd2f955e',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/full-light-seasonal',
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
                    },
                    {
                      id: 'ac3df907-a6da-40df-b1f5-0926bb394b39',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/gliding-patio',
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
                    },
                    {
                      id: '9bad48cc-cb0f-48f2-8ba8-07d70b943f54',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/hinged-patio',
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
                    },
                    {
                      id: '49fea60a-c968-4132-b992-4d09df8407a5',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/liftslide-door',
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
                    },
                    {
                      id: 'a5088b88-b119-4c8f-9250-72475b155bc9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multi-slide-door',
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
                    },
                    {
                      id: '278f3558-da6e-4e74-bfe3-b74000c320ab',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/multiglide',
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
                    },
                    {
                      id: '63cb0220-757e-4caa-bbfa-8a7f9497f216',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-1-2-light',
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
                    },
                    {
                      id: 'baf6b76a-0e58-4cc4-bae2-48604b8dcf55',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/partial-light-3-4-light',
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
                    },
                    {
                      id: 'adc1aac6-a490-4b4e-98d3-50352ee56541',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pet-entry-system',
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
                    },
                    {
                      id: 'cc21549a-e34f-4694-b0f0-1dd8d9a85642',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/pivot-door',
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
                    },
                    {
                      id: '3f1f2594-f026-4223-88da-a7e672b2adb2',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/residential-entry',
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
                    },
                    {
                      id: 'e77ade7f-392e-49ab-96b5-abedf83c92f9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/screen-door',
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
                    },
                    {
                      id: '8610958d-1f4f-486b-bd5a-e7cd9b1daef3',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/sliding-glass-door',
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
                    },
                    {
                      id: 'c67fdf8f-23e8-44bc-bff0-af4d0231250f',
                      url: '/sitecore/content/andersencorporation/andersenwindows/global/facets/door-type/storm-doors',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: 'fe306217-b0b2-4b3e-9792-b7aa9211c2ca',
              url: '/data/forms/single-step-form---raveena/form-page/radio-button-2',
              name: 'Radio Button 2',
              displayName: 'Radio Button 2',
              fields: {
                defaultValue: {
                  id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                  url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                  url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items',
                  name: 'List Items',
                  displayName: 'List Items',
                  fields: {},
                  templateId: '4aaa5f48-2f4b-42e2-89cc-a4a92896d011',
                  templateName: 'List Item Folder',
                  children: [
                    {
                      id: '3e6329d1-c5c8-4fa5-9797-06ed163014fb',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item',
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
                    },
                    {
                      id: '17c52810-0cf1-4825-b0b1-f83948d97500',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-1',
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
                    },
                    {
                      id: '7f334c91-a425-4e51-a7c7-b38ae10b39e9',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-2',
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
                    },
                    {
                      id: 'e7959365-ec83-4b08-bf23-6f058a816253',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-3',
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
                    },
                    {
                      id: 'c586560c-7d21-457a-ae38-cdbde1864c53',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-4',
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
                    },
                    {
                      id: '4a2020e4-5cf8-4d66-88cf-7e4c8fff09eb',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-5',
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
                    },
                    {
                      id: '2dd3061e-5aa3-42b1-847f-54149b621303',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-6',
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
                    },
                    {
                      id: '088d4c50-a5cc-4c12-b26a-c95d0efdec9a',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-7',
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
                    },
                    {
                      id: '5f2237a0-a53b-4125-b80c-0e32e02a5573',
                      url: '/sitecore/content/andersencorporation/andersenwindows/andersenwindows/data/forms/list-items/list-item-9',
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
                  value: 'Sub label',
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
                  value: '$ewNameKebab',
                },
                valueProviders: [],
              },
            },
            {
              id: '7968aeae-8302-4510-b2c3-edb7eaf79885',
              url: '/data/forms/single-step-form---raveena/form-page/long-text',
              name: 'Long Text',
              displayName: 'Long Text',
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
                valueProviders: [],
                label: {
                  value: 'Long Text',
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
                placeholderText: {
                  value: '',
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
                  value: '$ewNameKebab',
                },
              },
            },
            {
              id: '2399c84b-def2-4334-a2f7-731ffdf2dfed',
              url: '/data/forms/single-step-form---raveena/form-page/submit',
              name: 'Submit',
              displayName: 'Submit',
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
                  value: 'Submit',
                },
              },
            },
          ],
        },
      ],
    },
    componentSpacing: {
      id: '501ccbdc-c18b-4d37-a1b0-d0f0aa497a3b',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/component-spacing/reduced',
      name: 'Reduced',
      displayName: 'Reduced',
      fields: {
        Value: {
          value: 'reduced',
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
