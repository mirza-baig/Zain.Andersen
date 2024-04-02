const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'RbAHeader',
  },
  fields: {
    helpAndSupportUtilityNav: {
      id: '69fcaa96-9d22-434e-abbf-d56b6268c821',
      url: '/data/components/rba-header/help-and-support',
      name: 'Help and Support',
      displayName: 'Help and Support',
      fields: {
        navigationGroupTitle: {
          value: 'Help and Support',
        },
        children: [
          {
            id: '841f637d-3725-4294-869c-9a5fa63b4ed0',
            url: '/data/components/rba-header/help-and-support/contact-us',
            name: 'Contact Us',
            displayName: 'Contact Us',
            fields: {
              link: {
                value: {
                  href: 'https://www.renewalbyandersen.com/forms/contact-us',
                  linktype: 'external',
                  url: 'https://www.renewalbyandersen.com/forms/contact-us',
                },
              },
              linkTitle: {
                value: 'Contact Us',
              },
            },
          },
          {
            id: 'c359a0d3-ef6a-4720-bc37-6c0c2a808873',
            url: '/data/components/rba-header/help-and-support/repair',
            name: 'Repair',
            displayName: 'Repair',
            fields: {
              link: {
                value: {
                  href: 'https://www.renewalbyandersen.com/forms/service-request',
                  linktype: 'external',
                  url: 'https://www.renewalbyandersen.com/forms/service-request',
                },
              },
              linkTitle: {
                value: 'Repair or Maintenance Request',
              },
            },
          },
        ],
      },
      templateId: '5f46fc87-1acc-460c-8ff2-ba018441a7da',
      templateName: 'Navigation Group',
    },
    logo: {
      value: {
        src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/LOGO-RbA-Horizontal-black.png?iar=0&rev=110e41af43714aa4be2f34ce7d1cc705',
        alt: 'logo',
        height: 455,
        width: 1182,
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
    componentSpacing: null,
    sectionId: {
      value: '',
    },
    globalSearchBox: {
      id: 'f1ad0c8e-ecb9-4061-9b75-ee1c1f805b10',
      url: '/data/elements/search/standalone-search-box/rba-global-search-box',
      name: 'RbA Global Search Box',
      displayName: 'RbA Global Search Box',
      fields: {
        placeholderText: {
          value: 'What can we help you find?',
        },
        redirectionUrl: {
          value: {
            href: '/search/',
            text: '',
            anchor: '',
            linktype: 'internal',
            class: '',
            title: '',
            target: '',
            querystring: '',
            id: '{9C45865D-65FC-4AD8-95B3-E4D29409AE3D}',
          },
        },
        queryPipeline: {
          value: 'default',
        },
        searchHub: {
          value: 'search',
        },
        numberOfSuggestions: {
          value: 5,
        },
        showSuggestions: {
          value: true,
        },
        numberOfSuggestedResults: {
          value: 3,
        },
        showSuggestedResults: {
          value: true,
        },
        suggestedResultsLabel: {
          value: 'Suggested Results',
        },
        filterExpression: {
          value: null,
        },
        boostingExpression: {
          value: '',
        },
      },
      templateId: '32154a4b-a94b-4576-bb0e-130da0aed393',
      templateName: 'Standalone Search Box',
    },
    cta1AriaLabel: {
      value: '',
    },
    cta1Icon: {
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
    cta1Link: {
      value: {
        href: 'https://www.renewalbyandersen.com/forms/schedule-a-consultation',
        text: 'Free Consultation',
        linktype: 'external',
        url: 'https://www.renewalbyandersen.com/forms/schedule-a-consultation',
        anchor: '',
        target: '',
      },
    },
    cta1Modal: null,
    cta1ModalLinkText: {
      value: '',
    },
    cta1Style: {
      id: '49a23327-0397-4cce-a930-e76918d37c42',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-styles/primary',
      name: 'Primary',
      displayName: 'Primary',
      fields: {
        Value: {
          value: 'primary',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
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
        id: '69fcaa96-9d22-434e-abbf-d56b6268c821',
        displayName: 'Help and Support',
        name: 'Help and Support',
        templateId: '5f46fc87-1acc-460c-8ff2-ba018441a7da',
        templateName: 'Navigation Group',
        url: '/data/components/rba-header/help-and-support',
        fields: {
          navigationGroupTitle: {
            value: 'Help and Support',
          },
          children: [
            {
              id: '841f637d-3725-4294-869c-9a5fa63b4ed0',
              displayName: 'Contact Us',
              name: 'Contact Us',
              templateId: '68db4e89-fcf0-4858-adf0-a67945650de0',
              templateName: 'Navigation Link',
              url: '/data/components/rba-header/help-and-support/contact-us',
              fields: {
                link: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/forms/contact-us',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/forms/contact-us',
                  },
                },
                linkTitle: {
                  value: 'Contact Us',
                },
                children: [],
              },
            },
            {
              id: 'c359a0d3-ef6a-4720-bc37-6c0c2a808873',
              displayName: 'Repair',
              name: 'Repair',
              templateId: '68db4e89-fcf0-4858-adf0-a67945650de0',
              templateName: 'Navigation Link',
              url: '/data/components/rba-header/help-and-support/repair',
              fields: {
                link: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/forms/service-request',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/forms/service-request',
                  },
                },
                linkTitle: {
                  value: 'Repair or Maintenance Request',
                },
                children: [],
              },
            },
          ],
        },
      },
      {
        id: '979a832c-93f5-48d6-9b3e-7c3d8c2a96e2',
        displayName: 'Windows',
        name: 'Windows',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/windows',
        fields: {
          menuTitle: {
            value: 'Windows',
          },
          children: [
            {
              id: '09134747-7dce-40a1-8033-a8fcd33896d3',
              displayName: 'All Windows',
              name: 'All Windows',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows/all-windows',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: 'c7dfaa0b-a5a2-4841-b987-d8eff4d9a44d',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: 'f8094fac-2e21-4a01-8d06-6f46b37c050b',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '62ebb640-77d0-4cdc-b1a8-a497383e21ad',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '1ac67d46-388b-47b1-9af1-275487b539b6',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '2a0ea1b7-d5d4-4cc2-8859-ae028521d470',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: '23ba8ca5-0421-4c37-a73f-35092149c574',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: 'e5ebe9ba-dfda-4a85-b133-6a2d7fca32dc',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '3e50901b-0d46-4c16-ac43-f358e5c0783f',
              displayName: 'Window Options',
              name: 'Window Options',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows/window-options',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: '0a2a2856-f926-4c46-9d08-370973135273',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows/window-options/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '737cd85b-664e-49df-a88a-3df2b25b0ad5',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows/window-options/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'e3423d3d-046d-48c7-9dde-3d703c58b331',
              displayName: 'All Windows 1',
              name: 'All Windows 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows/all-windows-1',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: '542ca8bc-346e-424b-a32e-b9b7fb2a1625',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: '24d9f0b1-7129-4f4f-98c4-1ad87cb8e2c0',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '33320eeb-45b7-43a6-a182-0b0e8e0f5378',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '81d8346f-9168-47d8-85d5-32354a0ac757',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: 'ae99b4a0-703a-4c4d-a099-1c9013894dc4',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: '8f51a40b-409c-44a3-ba04-604577c00570',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: '40d9f8c7-589e-4d73-8bd9-0a25c371aa94',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows/all-windows-1/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '3972fbd6-6f1e-4c06-a29d-bed8d0356d66',
              displayName: 'Window Options 3',
              name: 'Window Options 3',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows/window-options-3',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '4f86f7f9-523d-47eb-b525-78866097ce05',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows/window-options-3/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '56c7171e-aa26-4d39-a5d0-2f8cbe85e18a',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows/window-options-3/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'b8b1a65c-15aa-46d2-8369-b5dddf0fa7b6',
              displayName: 'Window Options 4',
              name: 'Window Options 4',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows/window-options-4',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: 'b381e054-4ae3-4e05-8b6c-3f09a2718f84',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows/window-options-4/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '56b113a5-e85a-4e08-a276-08dea891e167',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows/window-options-4/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
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
        id: '99cf043f-c47c-419d-8ffc-9b7f10c59def',
        displayName: 'Windows 1',
        name: 'Windows 1',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/windows-1',
        fields: {
          menuTitle: {
            value: 'Windows',
          },
          children: [
            {
              id: '525e8111-a140-4977-b56c-138976415ba5',
              displayName: 'Window Options',
              name: 'Window Options',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/window-options',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: 'c73c506e-f812-4e45-8b2a-0e82a362fc7e',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '00660bbe-95b3-4e12-ae48-ab78586459e3',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '57245d00-9900-44da-a23e-d24dc51f9319',
              displayName: 'Window Options 2',
              name: 'Window Options 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/window-options-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '47c40057-36fc-4e56-84a3-7d49ddd5543c',
                    displayName: 'Glass',
                    name: 'Glass',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options-2/glass',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                        },
                      },
                      linkText: {
                        value: 'Glass',
                      },
                    },
                  },
                  {
                    id: '76450670-dde4-4945-beb6-b13427a01eae',
                    displayName: 'Window Hardware',
                    name: 'Window Hardware',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options-2/window-hardware',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-hardware',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-hardware',
                        },
                      },
                      linkText: {
                        value: 'Window Hardware',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '4210233b-d2f8-4bb0-a0cf-8eafd8c6e3e6',
              displayName: 'All Windows',
              name: 'All Windows',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/all-windows',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: '9afe4a8e-63bb-49f2-aed6-6980fcd2dd97',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: 'e8af36b7-1d96-41d8-8918-1039daa1941f',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: 'be2c5030-6280-4471-ac57-3b8bf763bff3',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '0450455e-b199-467d-8f8b-498cc6c399c8',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '045c89fe-2ce4-4aef-9a43-2acbdb7c59f1',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: '70da9d9b-6214-42db-a47d-60cdea2076ec',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: '220cef31-073f-44d0-aae0-e7e64f69c266',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'f190e61f-0340-4fd0-ba0c-8f011ecf2424',
              displayName: 'Window Options 3',
              name: 'Window Options 3',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/window-options-3',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '35393f27-bf82-4713-816c-12ed60b82e14',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options-3/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: 'a09ac91a-e034-41e7-a6a4-e3ac5e95edfe',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options-3/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '8d257b50-70d7-44a2-847f-afca72a656bc',
              displayName: 'Window Options 4',
              name: 'Window Options 4',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/window-options-4',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: '01874260-834f-4d11-89ee-8502b7b04170',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options-4/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '02ba84cf-54a6-437d-9eda-87c56f68db88',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-1/window-options-4/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'c6967d90-c50c-49cf-a28b-7da3a1842e19',
              displayName: 'All Windows 1',
              name: 'All Windows 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/all-windows-1',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: '3ceed99e-4075-4e1b-af26-49f80cc13a99',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: 'ba72b4e3-723e-4a82-ad16-0d614e4e2018',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '781c7d62-71e8-4300-a945-b23d9f1093cd',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '56703fc7-b909-4ec0-bdcc-51f933d49d84',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '69a35fb8-0624-4a00-a418-f3c0ea767b68',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: 'b28d1bd0-7d6c-488c-9f42-7c36a69f317f',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: '6f640251-e783-4d87-9e34-c7280773a701',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-1/all-windows-1/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '37c8e376-ad9e-444b-9e46-35b2c354f23d',
              displayName: 'Window Options 1',
              name: 'Window Options 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-1/window-options-1',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [],
              },
            },
          ],
        },
      },
      {
        id: 'cb758a69-b9a6-4f22-bdb4-75b64b27c0b6',
        displayName: 'Windows 2',
        name: 'Windows 2',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/windows-2',
        fields: {
          menuTitle: {
            value: 'Windows',
          },
          children: [
            {
              id: '113e096b-3dbb-408f-8148-54a4ed15991d',
              displayName: 'All Windows',
              name: 'All Windows',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/all-windows',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: 'c947ba83-060c-45cb-b4e0-13ee2a62de4a',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: '1f05d0c2-f12a-4488-b2e3-b4d9fada836c',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '00f1b907-d72d-4817-981f-3aaf2df7f28a',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '7fa757a1-ef05-43af-9ee4-5741c47b12f5',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '0126f21f-a784-4608-a7d7-8c35c7e24d5a',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: '7c3014a6-0621-4c47-b371-2350a570e80d',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: 'ddde668f-7bb9-4ffc-922f-0b5ef2f75d53',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '255cb8a9-bb86-46eb-a41a-efe6d2d3408f',
              displayName: 'Window Options',
              name: 'Window Options',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/window-options',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: '9eb149ee-3259-4f96-bc59-e4e730ace621',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '98e4a856-c7d5-4040-8b28-333312a24e62',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '8710870b-a514-4dc2-8486-27c2e08fe818',
              displayName: 'Window Options 2',
              name: 'Window Options 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/window-options-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '9bcd5160-a2c8-41ff-b3e2-e69727fc3b64',
                    displayName: 'Glass',
                    name: 'Glass',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options-2/glass',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                        },
                      },
                      linkText: {
                        value: 'Glass',
                      },
                    },
                  },
                  {
                    id: '3b2b5352-d6ec-4878-864b-8ffed37415d9',
                    displayName: 'Window Hardware',
                    name: 'Window Hardware',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options-2/window-hardware',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-hardware',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-hardware',
                        },
                      },
                      linkText: {
                        value: 'Window Hardware',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '80a6d19f-e49c-4a87-a036-d8078413d059',
              displayName: 'All Windows 1',
              name: 'All Windows 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/all-windows-1',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: '686c865e-bc8a-4a21-b7d5-edbd0c477fe9',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: 'e3b5bcb1-3ae4-477f-882c-5064f571aafb',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '27c939f3-22ae-4f26-8d53-f17c688c90ce',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: 'e94f3555-09e7-42de-965c-1cc21a179f78',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: 'f6649dae-e71b-46c3-abb2-a94b888f73d6',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: '86bbc963-ab6c-47ac-aed2-2f5c31bd50e3',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: '9b60c6dc-59a8-4480-b655-8c5d08136a74',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-1/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '47bfc73a-7999-44b2-b906-a13ea40b1bf7',
              displayName: 'All Windows 2',
              name: 'All Windows 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/all-windows-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: 'ba5401e1-65aa-46a9-a360-51fe156b4975',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: '6a1dbd4b-5280-4467-b250-84c5d27a0297',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '8380cfad-c6af-4b87-9b8d-b1991cdde8cf',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '6b8355e9-c176-491d-974a-dcc320b73db4',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '50917311-f489-4481-83fd-7d781587aa20',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: '8d27ccd4-cae6-4989-96d4-368fd45e10db',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: 'b43b728f-eea4-4b94-9641-043c1e783e76',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-2/all-windows-2/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '6419546d-9602-4e96-92e6-3de475b6edd4',
              displayName: 'Window Options 3',
              name: 'Window Options 3',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/window-options-3',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '6800ed2c-6a73-4628-a1bd-4e338b2d4f99',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options-3/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: 'b781d944-b8f0-4e99-8e03-0db4fde989e6',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options-3/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '2d4d4a2f-842c-4c48-9937-d1a90ac41246',
              displayName: 'Window Options 4',
              name: 'Window Options 4',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-2/window-options-4',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: 'e6a17976-0990-43e6-8393-64eae110adb6',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options-4/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '12ee6cc2-affc-4514-a279-1ea736e8f220',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-2/window-options-4/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
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
        id: '029e6884-5eb3-46a5-bcfd-ffba1dae3952',
        displayName: 'Windows 3',
        name: 'Windows 3',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/windows-3',
        fields: {
          menuTitle: {
            value: 'Windows',
          },
          children: [
            {
              id: '6af8807f-2a9f-405e-a7b3-ce775570738a',
              displayName: 'Window Options',
              name: 'Window Options',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-3/window-options',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: '85e201a3-5314-4491-b27b-38621993b8b3',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: 'ac87b719-f351-45dd-a655-c61ab0e61041',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'acaf6af4-347d-4d41-9886-2e0cff7ade66',
              displayName: 'Window Options 2',
              name: 'Window Options 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-3/window-options-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '9893a900-38d4-43c3-ad5f-386afa46c385',
                    displayName: 'Glass',
                    name: 'Glass',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options-2/glass',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                        },
                      },
                      linkText: {
                        value: 'Glass',
                      },
                    },
                  },
                  {
                    id: '9befd439-1452-46da-816a-9e2f78108679',
                    displayName: 'Window Hardware',
                    name: 'Window Hardware',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options-2/window-hardware',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-hardware',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-hardware',
                        },
                      },
                      linkText: {
                        value: 'Window Hardware',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'e375939f-9097-4b13-a7b7-69504404a518',
              displayName: 'All Windows',
              name: 'All Windows',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-3/all-windows',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: '6ab7920b-9a2c-4a0e-92fa-c4fa59787200',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: 'c8271295-0972-44f8-9600-aec6546757bc',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: 'd65548d6-fd5b-4ea6-95d0-dfaae4b5dc68',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: 'fc9e7392-ccf0-4560-aa90-8e40abd18c1a',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '572502d8-b7d1-4014-8034-5de5385d553e',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: 'cb3a0bf4-93a7-43f7-82c8-872fcbb90e1f',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: 'a411ec72-5551-4605-a7a0-ce77d8b4561c',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '50ee7473-6aea-4b5d-ae95-1e33ea5260f6',
              displayName: 'Window Options 3',
              name: 'Window Options 3',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-3/window-options-3',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '93dd4286-55fa-40df-b151-6041184c5d1f',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options-3/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '971d1cd6-1895-4702-9155-ea20c70c7d63',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options-3/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '1f27f4a1-746a-4e5b-99c3-93f5352dbed6',
              displayName: 'Window Options 4',
              name: 'Window Options 4',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-3/window-options-4',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                  },
                },
                menuTitle: {
                  value: 'Window Option',
                },
                children: [
                  {
                    id: 'f8710f05-4035-4e5b-8cd6-a19e8eb5a25f',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options-4/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                  {
                    id: '04c7d0af-c1f8-4a50-8819-c220c018435e',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/windows-3/window-options-4/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '91225a47-c088-4f4a-a4e9-b018f9820102',
              displayName: 'All Windows 1',
              name: 'All Windows 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/windows-3/all-windows-1',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Windows',
                },
                children: [
                  {
                    id: '89a5a512-fc07-48f4-b1e2-d06e32f2a4d6',
                    displayName: 'Double hung',
                    name: 'Double hung',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/double-hung',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-doublehung.png?h=64&iar=0&w=64&rev=e9af9b011c004a059302bdf0503a5697',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/double-hung',
                        },
                      },
                      tileText: {
                        value: 'Double hung',
                      },
                    },
                  },
                  {
                    id: 'eee92cc7-2d65-481b-ae2b-3e1491af0e8c',
                    displayName: 'Casement',
                    name: 'Casement',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/casement',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-casement.png?h=64&iar=0&w=64&rev=f9ce2c0ff86840d09f6f1f09e8b66edc',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/casement',
                        },
                      },
                      tileText: {
                        value: 'Casement',
                      },
                    },
                  },
                  {
                    id: '6e02f9fe-5520-48da-bc7a-e8765f1c42fe',
                    displayName: 'Awning',
                    name: 'Awning',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/awning',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-awning.png?h=64&iar=0&w=64&rev=46ebad5ada0f454e9ec1694fdf57f0ca',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/awning',
                        },
                      },
                      tileText: {
                        value: 'Awning',
                      },
                    },
                  },
                  {
                    id: '08d14b40-eba1-4fe9-bfbe-59c3619ca65c',
                    displayName: 'Sliding',
                    name: 'Sliding',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/sliding',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-sliding.png?h=64&iar=0&w=64&rev=ae43959296d94bbe87dc6ca50574a62f',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/gliding-sliding',
                        },
                      },
                      tileText: {
                        value: 'Sliding',
                      },
                    },
                  },
                  {
                    id: '3631d63e-eb58-4a14-884a-da26b0026b21',
                    displayName: 'Picture',
                    name: 'Picture',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/picture',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-picture.png?h=64&iar=0&w=64&rev=dcb3ba5bf3e24d7f82b585d26885704c',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/picture-combination',
                        },
                      },
                      tileText: {
                        value: 'Picture',
                      },
                    },
                  },
                  {
                    id: 'f09bb77f-122f-4884-a8b0-07112f99096d',
                    displayName: 'Bay and Bow',
                    name: 'Bay and Bow',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/bay-and-bow',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-baybow.png?h=64&iar=0&w=64&rev=65d7117b09b84d369893598bb18fe8f8',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/bay-bow',
                        },
                      },
                      tileText: {
                        value: 'Bay & Bow',
                      },
                    },
                  },
                  {
                    id: '9f27aa81-54d7-4de9-a7c3-cafc4b57aa0f',
                    displayName: 'Special',
                    name: 'Special',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/windows-3/all-windows-1/special',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/window-special.png?h=64&iar=0&w=64&rev=06a169f4407a4a598fae279f3b2e826a',
                          alt: 'alt',
                          width: '64',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/replacement-windows/specialty',
                        },
                      },
                      tileText: {
                        value: 'Special',
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
        id: 'cdaadda1-b365-49a9-b68d-1ae030bf87ae',
        displayName: 'Doors',
        name: 'Doors',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/doors',
        fields: {
          menuTitle: {
            value: 'Windows',
          },
          children: [
            {
              id: '0a89efdf-c4db-4aba-8936-4d93ab32acfc',
              displayName: 'All Patio Doors',
              name: 'All Patio Doors',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/doors/all-patio-doors',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/windows-doors/patio-doors',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/windows-doors/patio-doors',
                  },
                },
                menuTitle: {
                  value: 'All Patio Doors',
                },
                children: [
                  {
                    id: 'e237f88d-eedc-4c46-8984-356076840804',
                    displayName: 'Sliding Frenchwood Patio Door',
                    name: 'Sliding Frenchwood Patio Door',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/doors/all-patio-doors/sliding-frenchwood-patio-door',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/door-slidingfrench.png?h=64&iar=0&w=66&rev=7adbef0025ae455fb16741ca84eb3c50',
                          alt: 'door-slidingfrench',
                          width: '66',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/patio-doors/sliding-french-patio-doors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/patio-doors/sliding-french-patio-doors',
                        },
                      },
                      tileText: {
                        value: 'Sliding Frenchwood Patio Door',
                      },
                    },
                  },
                  {
                    id: '56f6f4f1-dea2-4e54-aabe-29f7d820c4e9',
                    displayName: 'Sliding Contemporary Patio Door',
                    name: 'Sliding Contemporary Patio Door',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/doors/all-patio-doors/sliding-contemporary-patio-door',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/door-contemporary.png?h=64&iar=0&w=66&rev=3b844667f5364828b604509662b92e2a',
                          alt: 'door-contemporary',
                          width: '66',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/patio-doors/contemporary-sliding-doors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/patio-doors/contemporary-sliding-doors',
                        },
                      },
                      tileText: {
                        value: 'Sliding Frenchwood Patio Door',
                      },
                    },
                  },
                  {
                    id: 'a0241bb5-0d12-4100-80a8-8c4fac0f9e0f',
                    displayName: 'Hinged Frenchwood Patio Door',
                    name: 'Hinged Frenchwood Patio Door',
                    templateId: '2c65efe1-b7a1-4ced-9ada-6cd4cc79aa35',
                    templateName: 'Tile Item',
                    url: '/data/components/rba-header/doors/all-patio-doors/hinged-frenchwood-patio-door',
                    fields: {
                      tileImage: {
                        value: {
                          src: 'https://edge.sitecorecloud.io/andersencorporation-m9n8s20s/media/Project/AndersenCorporation/RenewalByAndersen/RenewalByAndersen/door-hingedfrench.png?h=64&iar=0&w=66&rev=6531e78e0ab840fd92d5e0435192ead7',
                          alt: 'door-hingedfrench',
                          width: '66',
                          height: '64',
                        },
                      },
                      tileLink: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/patio-doors/hinged-french-patio-doors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/patio-doors/hinged-french-patio-doors',
                        },
                      },
                      tileText: {
                        value: 'Sliding Frenchwood Patio Door',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'cf0cf65f-c89e-4881-aed0-9a34abc0b066',
              displayName: 'All Doors Option',
              name: 'All Doors Option',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/doors/all-doors-option',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'All Doors Option',
                },
                children: [
                  {
                    id: 'af55dc55-bf1e-41d3-8c08-a035a4f57779',
                    displayName: 'Colors',
                    name: 'Colors',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/doors/all-doors-option/colors',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/window-colors',
                        },
                      },
                      linkText: {
                        value: 'Colors',
                      },
                    },
                  },
                  {
                    id: '0f94440a-3804-4e57-9028-9c2732fa2972',
                    displayName: 'Grilles',
                    name: 'Grilles',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/doors/all-doors-option/grilles',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/grille-options',
                        },
                      },
                      linkText: {
                        value: 'Grilles',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '06f57fb2-bab2-432b-96ef-ddbd73a92333',
              displayName: 'Column 2',
              name: 'Column 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/doors/column-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '519caf77-d1ab-4d32-9025-c050f8fdd3d0',
                    displayName: 'Glass',
                    name: 'Glass',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/doors/column-2/glass',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/glass',
                        },
                      },
                      linkText: {
                        value: 'Glass',
                      },
                    },
                  },
                  {
                    id: 'bc674b34-a6de-45d0-953c-164722872a68',
                    displayName: 'Patio Door Hardware',
                    name: 'Patio Door Hardware',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/doors/column-2/patio-door-hardware',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/windows-doors/options/patio-door-hardware',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/windows-doors/options/patio-door-hardware',
                        },
                      },
                      linkText: {
                        value: 'Patio Door Hardware',
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
        id: '0b9050b4-8776-4af8-b3a4-ef9bed300385',
        displayName: 'Why Renewal',
        name: 'Why Renewal',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/why-renewal',
        fields: {
          menuTitle: {
            value: 'Why Renewal',
          },
          children: [
            {
              id: '562f7636-5c0e-4e54-bb7e-a10ad58c0872',
              displayName: 'Why Renewal',
              name: 'Why Renewal',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/why-renewal/why-renewal',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/signature-service',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/signature-service',
                  },
                },
                menuTitle: {
                  value: 'Why Renewal',
                },
                children: [
                  {
                    id: '7384aa46-6027-47bb-826b-e8e1001d71a5',
                    displayName: 'Best People',
                    name: 'Best People',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/why-renewal/why-renewal/best-people',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/signature-service/the-best-people-in-the-industry',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/signature-service/the-best-people-in-the-industry',
                        },
                      },
                      linkText: {
                        value: 'Best People',
                      },
                    },
                  },
                  {
                    id: 'd3669feb-906e-463b-8245-e2ffc2dbc344',
                    displayName: 'Full Service Process',
                    name: 'Full Service Process',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/why-renewal/why-renewal/full-service-process',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/signature-service/professional-installation',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/signature-service/professional-installation',
                        },
                      },
                      linkText: {
                        value: 'Full Service Process',
                      },
                    },
                  },
                  {
                    id: '27d359a8-5e03-45e2-b88c-840d27248450',
                    displayName: 'Exclusive Product',
                    name: 'Exclusive Product',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/why-renewal/why-renewal/exclusive-product',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/signature-service/an-exclusive-product',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/signature-service/an-exclusive-product',
                        },
                      },
                      linkText: {
                        value: 'Exclusive Product',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'ebc48a61-8192-4e8a-8569-41591c8c0ca4',
              displayName: 'Column 2',
              name: 'Column 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/why-renewal/column-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '00100414-c9f5-4766-9a96-2b19a2e94edd',
                    displayName: 'Replacement Value',
                    name: 'Replacement Value',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/why-renewal/column-2/replacement-value',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/signature-service/replacement-value',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/signature-service/replacement-value',
                        },
                      },
                      linkText: {
                        value: 'Replacement Value',
                      },
                    },
                  },
                  {
                    id: '686da1d6-977b-4426-aa97-044cef62aad1',
                    displayName: 'Review',
                    name: 'Review',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/why-renewal/column-2/review',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/map',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/map',
                        },
                      },
                      linkText: {
                        value: 'Reviews',
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
        id: 'b6404c5e-96f8-444b-a8a4-85edc75aa8a3',
        displayName: 'Design Ideas',
        name: 'Design Ideas',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/design-ideas',
        fields: {
          menuTitle: {
            value: 'Design Ideas',
          },
          children: [
            {
              id: '36f6ebfd-441a-4560-a5b0-431f6f308b2c',
              displayName: 'Inspiration',
              name: 'Inspiration',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/design-ideas/inspiration',
              fields: {
                menuLink: {
                  value: {
                    href: 'https://www.renewalbyandersen.com/get-inspired',
                    linktype: 'external',
                    url: 'https://www.renewalbyandersen.com/get-inspired',
                  },
                },
                menuTitle: {
                  value: 'Inspiration',
                },
                children: [
                  {
                    id: '1d5d5a71-29b0-4beb-b57f-f7d87cb55a67',
                    displayName: 'Photo Gallery',
                    name: 'Photo Gallery',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/inspiration/photo-gallery',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/photos',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/photos',
                        },
                      },
                      linkText: {
                        value: 'Photo Gallery',
                      },
                    },
                  },
                  {
                    id: '53d52987-1c63-4dd8-b121-ccf64fb7c5e8',
                    displayName: 'Video Gallery',
                    name: 'Video Gallery',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/inspiration/video-gallery',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/video-gallery',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/video-gallery',
                        },
                      },
                      linkText: {
                        value: 'Video Gallery',
                      },
                    },
                  },
                  {
                    id: 'fbdf0bd9-90b5-4250-9b90-bcada7da51f1',
                    displayName: 'Virtual Showroom Tour',
                    name: 'Virtual Showroom Tour',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/inspiration/virtual-showroom-tour',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/virtual-showroom-tour',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/virtual-showroom-tour',
                        },
                      },
                      linkText: {
                        value: 'Virtual Showroom Tour',
                      },
                    },
                  },
                  {
                    id: 'e3cfe842-54b0-4e7b-81a3-503df1d6f09d',
                    displayName: 'Augmented Reality',
                    name: 'Augmented Reality',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/inspiration/augmented-reality',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/ar-with-renewal-by-andersen?Rba_1=AR_Click',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/ar-with-renewal-by-andersen?Rba_1=AR_Click',
                        },
                      },
                      linkText: {
                        value: 'Augmented Reality',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'cf384d65-62e5-425a-b4bd-151dee611b50',
              displayName: 'Design Influencers',
              name: 'Design Influencers',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/design-ideas/design-influencers',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: 'Design Influencers',
                },
                children: [
                  {
                    id: '639b73bd-998e-4aa2-a986-9aa486a44356',
                    displayName: 'Anthony 19th Century Remodel',
                    name: 'Anthony 19th Century Remodel',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/design-influencers/anthony-19th-century-remodel',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-anthony',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-anthony',
                        },
                      },
                      linkText: {
                        value: "Anthony's 19th Century Remodel",
                      },
                    },
                  },
                  {
                    id: 'da31bf12-d102-4c5d-b058-f9a923c90fd0',
                    displayName: 'Breegan Outdoor Indoor Living',
                    name: 'Breegan Outdoor Indoor Living',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/design-influencers/breegan-outdoor-indoor-living',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-breegan',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-breegan',
                        },
                      },
                      linkText: {
                        value: "Breegan's Outdoor Indoor Living",
                      },
                    },
                  },
                  {
                    id: '0566c092-892d-4ad0-80ae-8f259eebe9b0',
                    displayName: 'John Modern Overhaul',
                    name: 'John Modern Overhaul',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/design-influencers/john-modern-overhaul',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-john',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-john',
                        },
                      },
                      linkText: {
                        value: "John's Modern Overhaul",
                      },
                    },
                  },
                  {
                    id: 'cd90000e-cdaa-42cb-a711-beef055b488d',
                    displayName: 'Laurie Spanish Style Remodel',
                    name: 'Laurie Spanish Style Remodel',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/design-influencers/laurie-spanish-style-remodel',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-laurie',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-laurie',
                        },
                      },
                      linkText: {
                        value: "Laurie's Spanish Style Remodel",
                      },
                    },
                  },
                  {
                    id: '7bb2a3a3-a5b7-43bd-ac5a-91639946c525',
                    displayName: 'Liz Farmhouse Fixer Upper',
                    name: 'Liz Farmhouse Fixer Upper',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/design-influencers/liz-farmhouse-fixer-upper',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-liz-marie',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-liz-marie',
                        },
                      },
                      linkText: {
                        value: "Liz's Farmhouse Fixer Upper",
                      },
                    },
                  },
                  {
                    id: 'cf77e555-295b-4b08-bb27-65904fa22cdf',
                    displayName: 'Matt Mid Century Makeover',
                    name: 'Matt Mid Century Makeover',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/design-ideas/design-influencers/matt-mid-century-makeover',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-matt',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/get-inspired/get-inspired-with-matt',
                        },
                      },
                      linkText: {
                        value: "Matt's Mid Century Makeover",
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
        id: 'ff32e19a-b2eb-4a26-bbba-cdd06432030d',
        displayName: 'Resources 2',
        name: 'Resources 2',
        templateId: 'e26df5d9-4bd0-470f-8205-6cff21b841f9',
        templateName: 'Mega Menu',
        url: '/data/components/rba-header/resources-2',
        fields: {
          menuTitle: {
            value: 'Resources',
          },
          children: [
            {
              id: '0d9225e7-37a8-4b37-adef-cf6bc954b6a3',
              displayName: 'Homeowner Help',
              name: 'Homeowner Help',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '24007a32-0bb6-4dbf-abff-92293d8a30ca',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: '5c9ebddb-1c2b-464c-b724-9e72be8571c0',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: '7e6d3ba8-a283-4364-a8f2-01c8a81989dc',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: 'bebec588-ff62-40e3-aee6-70e0161fe075',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: '93a79b3a-81e7-4219-9369-bb542df14e90',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: '9d9508b7-afb1-498a-b4a5-662e3b5cade7',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: 'c2a0ff13-a4bd-49d6-84db-a5502bd38649',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'ed1e1b62-f96d-457c-9d70-c90ae92d1f61',
              displayName: 'Homeowner Help 1',
              name: 'Homeowner Help 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help-1',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: 'cf5bed59-9717-4d04-9d44-4e460d941f48',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: '53fde61c-8208-4387-9efe-1a1b8e36f319',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: '59f996b7-573c-4fc1-8a40-25121681d3af',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: 'c1aae689-1dc4-40a0-a479-91591d9d9a38',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: 'be9f40e8-fb59-48c4-9977-124c28f59a62',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: '5ffcf646-d9c1-466c-b7fc-3dc7495f169d',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: '5227cb72-dcf1-4409-92fc-b4fd3e010b2b',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-1/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'f5a9199c-b2e5-47e7-a8e9-13e10b6964a3',
              displayName: 'Homeowner Help 2',
              name: 'Homeowner Help 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '80cb499d-afda-436a-85fb-a2889e120c90',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: 'af4b90b8-e499-41af-a6b5-26a1080d8688',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: '2d971147-46de-4cac-80a5-dbca6303702b',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: '6d160eb4-5492-4edf-ae2a-39c5891a5254',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: '8da6abe6-bf66-468b-9592-2eeb359cdf1d',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: '0804056d-e46c-42da-9726-18737c927103',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: 'eb9930d2-38aa-4489-9b2c-c72f009e3373',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-2/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'ee8bf892-c35c-42f9-ba3d-b93ac7eef7af',
              displayName: 'Homeowner Help 3',
              name: 'Homeowner Help 3',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help-3',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '3d2900f1-db62-43a0-bc17-1ff04fcb1260',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: '94d0fba6-5776-4691-a355-99ea910d84be',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: 'b71d92a2-dae2-4b70-b170-d38c14f5df0a',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: 'b8335b1e-3efc-42cd-ad0d-b33cc4e2bffb',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: '46349c61-663f-4153-91b2-0f047fa18f1f',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: '8633142a-70da-49b0-985f-84517974314a',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: '6c9a0ac3-add5-47e4-93f5-3ef08913f784',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-3/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '87468a15-7d77-4786-9171-b13f1b22bc91',
              displayName: 'Homeowner Help 4',
              name: 'Homeowner Help 4',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help-4',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '10d01f19-ea13-4606-8a83-1a323813f9aa',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: '4bee3311-962b-4d16-aa7f-bca54840111d',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: '4299e605-d269-48fa-9e0f-8ffa778500bf',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: '56432a0c-9dc2-46ad-8d68-37afb9a63187',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: '348e533c-79e9-46f0-965a-5b7b19bca364',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: '880e2708-8ab0-4b72-8fe9-5ed6e1397908',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: 'b345e4f2-486e-4afd-90a4-e0eb5a4d8218',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-4/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'fe5b8c24-2932-422f-9ef7-17a11926bcab',
              displayName: 'Local Retailer',
              name: 'Local Retailer',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/local-retailer',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: 'c765ff9a-2015-4883-910b-c6eb9ba5881a',
                    displayName: 'Local Events',
                    name: 'Local Events',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer/local-events',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                        },
                      },
                      linkText: {
                        value: 'Local Events',
                      },
                    },
                  },
                  {
                    id: 'd319845c-cc4c-40d7-be32-75d1a553ab6f',
                    displayName: 'Local Reviews',
                    name: 'Local Reviews',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer/local-reviews',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                        },
                      },
                      linkText: {
                        value: 'Local Reviews',
                      },
                    },
                  },
                  {
                    id: '6a4cadbe-25c3-490c-82a0-5883e4a2519c',
                    displayName: 'Jobs',
                    name: 'Jobs',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer/jobs',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                        },
                      },
                      linkText: {
                        value: 'Jobs',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'fef7f4b5-efe4-4c6d-8007-0df3820abd12',
              displayName: 'Local Retailer 1',
              name: 'Local Retailer 1',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/local-retailer-1',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: 'e7df4d73-9c3b-4461-aa00-befefcc089f2',
                    displayName: 'Local Events',
                    name: 'Local Events',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-1/local-events',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                        },
                      },
                      linkText: {
                        value: 'Local Events',
                      },
                    },
                  },
                  {
                    id: 'e778f7a3-66be-4093-ae39-015e069ff81d',
                    displayName: 'Local Reviews',
                    name: 'Local Reviews',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-1/local-reviews',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                        },
                      },
                      linkText: {
                        value: 'Local Reviews',
                      },
                    },
                  },
                  {
                    id: '212314c4-7caf-46e2-8905-ff8de0571fd0',
                    displayName: 'Jobs',
                    name: 'Jobs',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-1/jobs',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                        },
                      },
                      linkText: {
                        value: 'Jobs',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '87c268b4-48af-48fe-8a74-552b11a4836c',
              displayName: 'Local Retailer 2',
              name: 'Local Retailer 2',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/local-retailer-2',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '23f64abd-e42d-4fa3-bfe3-774d882ca0e0',
                    displayName: 'Local Events',
                    name: 'Local Events',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-2/local-events',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                        },
                      },
                      linkText: {
                        value: 'Local Events',
                      },
                    },
                  },
                  {
                    id: 'd1004cd9-6092-47c1-bd50-570d5eb040ab',
                    displayName: 'Local Reviews',
                    name: 'Local Reviews',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-2/local-reviews',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                        },
                      },
                      linkText: {
                        value: 'Local Reviews',
                      },
                    },
                  },
                  {
                    id: '4ed18957-d101-45a8-8c35-54b10822cb4b',
                    displayName: 'Jobs',
                    name: 'Jobs',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-2/jobs',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                        },
                      },
                      linkText: {
                        value: 'Jobs',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '46c93e02-edfb-4fb5-b351-312c9cb07033',
              displayName: 'Homeowner Help 5',
              name: 'Homeowner Help 5',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help-5',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '88339ed2-eda7-4978-87d2-b9e19524adf6',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: '903e0f86-ea78-487e-8efa-77f5da531b4e',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: 'cea2ca8b-6d52-4de6-8a3a-40fff6cc1221',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: '09fe364d-e701-4d52-a6f1-abe291512861',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: 'aa8bde2a-6a79-4f43-a932-ed37725d8cca',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: '0c09d743-ff0e-4154-b5a9-aa7f06733237',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: '9afc4b07-a77f-4429-8863-24322896366a',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-5/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '29d4b7aa-26a9-4d05-a7e7-ea6e25a6a15d',
              displayName: 'Homeowner Help 6',
              name: 'Homeowner Help 6',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/homeowner-help-6',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '0ecb84fa-3978-4f11-bc7d-58066a07a102',
                    displayName: 'Request Service',
                    name: 'Request Service',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/request-service',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/service-request',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/service-request',
                        },
                      },
                      linkText: {
                        value: 'Request Service',
                      },
                    },
                  },
                  {
                    id: '69ca98c9-851d-48f3-9653-789bad84e2bc',
                    displayName: 'Warranty Information',
                    name: 'Warranty Information',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/warranty-information',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/warranty',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/warranty',
                        },
                      },
                      linkText: {
                        value: 'Warranty Information',
                      },
                    },
                  },
                  {
                    id: 'c72fe897-7686-4d65-9095-361487c4e526',
                    displayName: 'Energy Tax Credit',
                    name: 'Energy Tax Credit',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/energy-tax-credit',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/energy-tax-credit',
                        },
                      },
                      linkText: {
                        value: 'Energy Tax Credit',
                      },
                    },
                  },
                  {
                    id: 'dc3326b2-8fba-4426-812f-dcaf8c6cbb00',
                    displayName: 'Window Care and Maintenance',
                    name: 'Window Care and Maintenance',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/window-care-and-maintenance',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-care-maintenance',
                        },
                      },
                      linkText: {
                        value: 'Window Care and Maintenance',
                      },
                    },
                  },
                  {
                    id: 'e2fefbfe-aa4e-475f-8977-ec90549a7075',
                    displayName: 'Window Safety',
                    name: 'Window Safety',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/window-safety',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/window-safety-awareness',
                        },
                      },
                      linkText: {
                        value: 'Window Safety',
                      },
                    },
                  },
                  {
                    id: 'ba8912a3-82ef-4d01-a450-8105ebe6d2d8',
                    displayName: 'Glossary',
                    name: 'Glossary',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/glossary',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/homeowners/glossary',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/homeowners/glossary',
                        },
                      },
                      linkText: {
                        value: 'Glossary',
                      },
                    },
                  },
                  {
                    id: '3791735d-4daf-4a37-8340-cf4702913c60',
                    displayName: 'Contact Us',
                    name: 'Contact Us',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/homeowner-help-6/contact-us',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/forms/contact-us',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/forms/contact-us',
                        },
                      },
                      linkText: {
                        value: 'Contact Us',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: '63b580ef-3372-4b26-a8c8-3b3294187549',
              displayName: 'Local Retailer 3',
              name: 'Local Retailer 3',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/local-retailer-3',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '359e6b67-fe48-486f-ba3b-b0c8d72052cf',
                    displayName: 'Local Events',
                    name: 'Local Events',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-3/local-events',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                        },
                      },
                      linkText: {
                        value: 'Local Events',
                      },
                    },
                  },
                  {
                    id: '3526f4ef-dbc9-4c00-a866-31e209d55067',
                    displayName: 'Local Reviews',
                    name: 'Local Reviews',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-3/local-reviews',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                        },
                      },
                      linkText: {
                        value: 'Local Reviews',
                      },
                    },
                  },
                  {
                    id: '217117d4-82ab-47ca-8dbc-ab69e07c2db8',
                    displayName: 'Jobs',
                    name: 'Jobs',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-3/jobs',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                        },
                      },
                      linkText: {
                        value: 'Jobs',
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'c12f9cb8-8abb-4fda-ae47-0fad4b7de4de',
              displayName: 'Local Retailer 4',
              name: 'Local Retailer 4',
              templateId: '7d09a27f-5f8c-4b53-a201-d7b2d12ba8c9',
              templateName: 'Mega Menu Group',
              url: '/data/components/rba-header/resources-2/local-retailer-4',
              fields: {
                menuLink: {
                  value: {
                    href: '',
                  },
                },
                menuTitle: {
                  value: '',
                },
                children: [
                  {
                    id: '3e2956f5-9ea0-4f57-9f05-dfffba02c1cf',
                    displayName: 'Local Events',
                    name: 'Local Events',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-4/local-events',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Local-Events',
                        },
                      },
                      linkText: {
                        value: 'Local Events',
                      },
                    },
                  },
                  {
                    id: 'ac88a3cf-2e56-49dc-a30f-0aea2d450183',
                    displayName: 'Local Reviews',
                    name: 'Local Reviews',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-4/local-reviews',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/window-company/077-twin-cities-mn/Reviews',
                        },
                      },
                      linkText: {
                        value: 'Local Reviews',
                      },
                    },
                  },
                  {
                    id: 'dd6615d7-6d4a-4597-b402-16f873552fcc',
                    displayName: 'Jobs',
                    name: 'Jobs',
                    templateId: '60b6e011-b348-41a2-be90-0a7469063ae5',
                    templateName: 'Link Item',
                    url: '/data/components/rba-header/resources-2/local-retailer-4/jobs',
                    fields: {
                      link: {
                        value: {
                          href: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                          linktype: 'external',
                          url: 'https://www.renewalbyandersen.com/careers#sort=date%20descending',
                        },
                      },
                      linkText: {
                        value: 'Jobs',
                      },
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
