const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'RequestQuote',
  },
  uid: '24d4ed52-6782-403a-aa81-56d62c5fbcba',
  componentName: 'Form',
  dataSource: '{C4F28335-FB0D-4DCD-98B5-42AC46F4A2B5}',
  fields: {
    formName: {
      value: 'Multistep Form',
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
                alignment: {
                  id: 'ed4b79ff-078b-47e0-8374-d30cd00224c9',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Alignment/Center',
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
                children: [],
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
                children: [],
              },
            },
            {
              id: '155b76e9-8d20-4091-8101-c3fd733e24aa',
              displayName: 'Button Card',
              name: 'Button Card',
              templateId: '30fdf2a8-49fd-40af-8a08-d520450e67ab',
              templateName: 'Button Card',
              url: '/Data/Forms/MultiStep-Form/Page-1/Button-Card',
              fields: {
                datasource: {
                  id: '8d5163f2-ae8c-4328-a4e9-673fb158e030',
                  url: '/Data/Forms/Button-Card-Items',
                  name: 'Button Card Items',
                  displayName: 'Button Card Items',
                  fields: {},
                  templateId: '42b7918e-f5fa-4137-9f60-e505bafcf845',
                  templateName: 'Button Card Item Folder',
                  children: [
                    {
                      id: 'c7e22e72-d0e9-462e-b9f9-8605ad7b3465',
                      url: '/Data/Forms/Button-Card-Items/Button-Card-Item-1',
                      name: 'Button Card Item 1',
                      displayName: 'Button Card Item 1',
                      fields: {
                        description: {
                          value: 'Button Card Item 1',
                        },
                        desktopImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/icons8-java-80.png',
                            alt: 'Icon',
                            width: '80',
                            height: '80',
                          },
                        },
                        mobileImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/pdflogo.png?h=50&iar=0&w=50',
                            alt: 'PDF Logo',
                            width: '50',
                            height: '50',
                          },
                        },
                        title: {
                          value: 'Button Card Item 1',
                        },
                        value: {
                          value: 'Button Card Item 1',
                        },
                      },
                      templateId: '4ff548a5-fc8f-4ee1-8f60-1bb560c9c9e9',
                      templateName: 'Button Card Item',
                    },
                    {
                      id: '7a3be6e1-cf91-4bdd-9658-3c0860425054',
                      url: '/Data/Forms/Button-Card-Items/Button-Card-Item-2',
                      name: 'Button Card Item 2',
                      displayName: 'Button Card Item 2',
                      fields: {
                        description: {
                          value: 'Button Card Item 2',
                        },
                        desktopImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/icons8-java-80.png',
                            alt: 'Icon',
                            width: '80',
                            height: '80',
                          },
                        },
                        mobileImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/pdflogo.png?h=50&iar=0&w=50',
                            alt: 'PDF Logo',
                            width: '50',
                            height: '50',
                          },
                        },
                        title: {
                          value: 'Button Card Item 2',
                        },
                        value: {
                          value: 'Button Card Item 2',
                        },
                      },
                      templateId: '4ff548a5-fc8f-4ee1-8f60-1bb560c9c9e9',
                      templateName: 'Button Card Item',
                    },
                    {
                      id: '38b0348d-8653-4fe6-ba33-281e5c23b544',
                      url: '/Data/Forms/Button-Card-Items/Button-Card-Item-3',
                      name: 'Button Card Item 3',
                      displayName: 'Button Card Item 3',
                      fields: {
                        description: {
                          value: 'Button Card Item 3',
                        },
                        desktopImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/icons8-java-80.png',
                            alt: 'Icon',
                            width: '80',
                            height: '80',
                          },
                        },
                        mobileImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/pdflogo.png?h=50&iar=0&w=50',
                            alt: 'PDF Logo',
                            width: '50',
                            height: '50',
                          },
                        },
                        title: {
                          value: 'Button Card Item 3',
                        },
                        value: {
                          value: 'Button Card Item 3',
                        },
                      },
                      templateId: '4ff548a5-fc8f-4ee1-8f60-1bb560c9c9e9',
                      templateName: 'Button Card Item',
                    },
                    {
                      id: '98bde7e9-619c-477d-9ad0-7b686b81fcb7',
                      url: '/Data/Forms/Button-Card-Items/Button-Card-Item-4',
                      name: 'Button Card Item 4',
                      displayName: 'Button Card Item 4',
                      fields: {
                        description: {
                          value: 'Button Card Item 4',
                        },
                        desktopImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/icons8-java-80.png',
                            alt: 'Icon',
                            width: '80',
                            height: '80',
                          },
                        },
                        mobileImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/pdflogo.png?h=50&iar=0&w=50',
                            alt: 'PDF Logo',
                            width: '50',
                            height: '50',
                          },
                        },
                        title: {
                          value: 'Button Card Item 4',
                        },
                        value: {
                          value: 'Button Card Item 4',
                        },
                      },
                      templateId: '4ff548a5-fc8f-4ee1-8f60-1bb560c9c9e9',
                      templateName: 'Button Card Item',
                    },
                    {
                      id: 'd815a410-7ac8-490e-82c2-b0139ee27edf',
                      url: '/Data/Forms/Button-Card-Items/Button-Card-Item-5',
                      name: 'Button Card Item 5',
                      displayName: 'Button Card Item 5',
                      fields: {
                        description: {
                          value: '',
                        },
                        desktopImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/icons8-java-80.png',
                            alt: 'Icon',
                            width: '80',
                            height: '80',
                          },
                        },
                        mobileImage: {
                          value: {
                            src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/AndersenWindows/shared/pdflogo.png?h=50&iar=0&w=50',
                            alt: 'PDF Logo',
                            width: '50',
                            height: '50',
                          },
                        },
                        title: {
                          value: 'Button Card Item 5',
                        },
                        value: {
                          value: 'Button Card Item 5',
                        },
                      },
                      templateId: '4ff548a5-fc8f-4ee1-8f60-1bb560c9c9e9',
                      templateName: 'Button Card Item',
                    },
                  ],
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
                selection: {
                  id: '27eeab6b-870a-4d23-9faa-e4cc785d9396',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Selection/Single-Selection',
                  name: 'Single Selection',
                  displayName: 'Single Selection',
                  fields: {
                    Value: {
                      value: 'single',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Button Card',
                },
                subLabel: {
                  value: '',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
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
                  value: 'button-card',
                },
                children: [],
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
                  value: 'consent-checkbox',
                },
                children: [],
              },
            },
            {
              id: '2bc7ee3f-f9e3-44a5-8aba-2426d612478f',
              displayName: 'Tile Button',
              name: 'Tile Button',
              templateId: '81abdbfe-9b8f-4552-b072-a3cff5887f68',
              templateName: 'Tile Button',
              url: '/Data/Forms/MultiStep-Form/Page-1/Tile-Button',
              fields: {
                buttonsPerRows: {
                  id: '3d6c4fa4-5821-42ea-b209-9c88850dc1da',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Buttons-Per-Row/3',
                  name: '3',
                  displayName: '3',
                  fields: {
                    Value: {
                      value: '3',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
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
                validations: [],
                fieldMapping: null,
                selection: {
                  id: '27eeab6b-870a-4d23-9faa-e4cc785d9396',
                  url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Forms/Selection/Single-Selection',
                  name: 'Single Selection',
                  displayName: 'Single Selection',
                  fields: {
                    Value: {
                      value: 'single',
                    },
                  },
                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                  templateName: 'Enum',
                },
                label: {
                  value: 'Tile Button',
                },
                subLabel: {
                  value: '',
                },
                tooltipImage: {
                  value: {},
                },
                tooltipText: {
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
                  value: 'tile-button',
                },
                children: [],
              },
            },
            {
              id: '2ac53812-64f8-41d0-a7f3-f66bb9b14346',
              displayName: 'Checkbox Group Test',
              name: 'Checkbox Group Test',
              templateId: '246db8c1-1c1c-45c1-af6c-79733ff73baa',
              templateName: 'Checkbox Group',
              url: '/Data/Forms/MultiStep-Form/Page-1/Checkbox-Group-Test',
              fields: {
                defaultValue: [
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
                  value: 'Checkbox Group Test',
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
                  value: 'checkbox-group',
                },
                children: [],
                minLength: {
                  value: 1,
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
                  value: 'dropdown',
                },
                children: [],
              },
            },
            {
              id: 'b0d5a5bf-f3d3-41e5-8252-06d64feb075a',
              displayName: 'Phone',
              name: 'Phone',
              templateId: 'c5db4ef7-746f-44c1-a564-55a405df748e',
              templateName: 'Phone',
              url: '/Data/Forms/MultiStep-Form/Page-1/Phone',
              fields: {
                defaultValue: {
                  value: '',
                },
                label: {
                  value: 'Phone',
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
                placeholderText: {
                  value: '(XXX)-XXX-XXXX',
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
                  value: 'phone',
                },
                children: [],
              },
            },
            {
              id: '0e2bb20c-2676-4344-934d-f6c85bde96ff',
              displayName: 'Radio Button Test',
              name: 'Radio Button Test',
              templateId: '266e8a31-e9bb-419b-816e-a9eeeba62162',
              templateName: 'Radio Button',
              url: '/Data/Forms/MultiStep-Form/Page-1/Radio-Button-Test',
              fields: {
                defaultValue: null,
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
                  value: 'Radio Button Test',
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
                  value: 'radio-button',
                },
                children: [],
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
                  value: 'First Name',
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
                  value: 'first-name',
                },
                children: [],
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
                  value: 'Last Name',
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
                  value: 'last-name',
                },
                children: [],
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
                fieldMapping: null,
                fieldName: {
                  value: 'form-type',
                },
                children: [],
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
                  value: 'First Name',
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
                  value: 'first-name-1',
                },
                children: [],
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
                  value: 'Last Name',
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
                  value: 'last-name-2',
                },
                children: [],
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
                  value: 'windows-problems',
                },
                children: [],
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
              id: 'c2e5acd3-579b-485a-9c3f-9383149fc340',
              displayName: 'Next',
              name: 'Next',
              templateId: '6dad441f-58d9-40a0-a119-c8d990b0484d',
              templateName: 'Button',
              url: '/Data/Forms/MultiStep-Form/Page-2/Next',
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
                  value: 'Next',
                },
                children: [],
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
              id: '2845ea68-912e-4888-8def-42482b1c61c7',
              displayName: 'Form Type',
              name: 'Form Type',
              templateId: 'b01e7cae-d802-4ae5-9742-bdcda546554b',
              templateName: 'Hidden',
              url: '/Data/Forms/MultiStep-Form/Page-3/Form-Type',
              fields: {
                defaultValue: {
                  value: '2',
                },
                fieldMapping: null,
                fieldName: {
                  value: 'form-type-1',
                },
                children: [],
              },
            },
            {
              id: '33a8c540-b835-4e9d-aaad-c6770a9d929f',
              displayName: 'First Name 2',
              name: 'First Name 2',
              templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
              templateName: 'Short Text',
              url: '/Data/Forms/MultiStep-Form/Page-3/First-Name-2',
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
                  value: 'First Name 2',
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
                  value: 'First Name',
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
                  value: 'first-name-2',
                },
                children: [],
              },
            },
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
                  value: 'Last Name 3',
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
                  value: '',
                },
                placeholderText: {
                  value: 'Last Name',
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
                  value: 'last-name-3',
                },
                children: [],
              },
            },
            {
              id: '80f3da01-30a9-4978-a2ef-84a83dab10e2',
              displayName: 'Windows Problems',
              name: 'Windows Problems',
              templateId: '62d234ca-1c65-4699-8bfe-339c28d92761',
              templateName: 'Text Area',
              url: '/Data/Forms/MultiStep-Form/Page-3/Windows-Problems',
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
                  value: 'windows-problems-1',
                },
                children: [],
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
                    id: 'b91e0938-5180-41b6-833d-b252a67c9752',
                    displayName: 'Save to Database',
                    name: 'Save to Database',
                    templateId: 'e5c7d60e-b968-4742-84b4-cde77d0a618d',
                    templateName: 'Save to Database',
                    url: '/Data/Forms/MultiStep-Form/Page-3/Submit/Save-to-Database',
                    fields: {
                      errorMessage: {
                        value: '<p>Error while processing your request.</p>',
                      },
                      stopOnError: {
                        value: true,
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
