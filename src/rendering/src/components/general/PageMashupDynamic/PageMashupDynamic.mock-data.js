const defaultData = {
  rendering: {
    componentName: 'DynamicPageMashup',
    dataSource:
      '/sitecore/content/AndersenCorporation/AndersenWindows/AndersenWindows/Home/Components/Page Mashup/Data/Dynamic Page Mashup',
  },
  fields: {
    mashupStyle: {
      id: '6cd7e7f9-e49d-4137-84de-e6bef771582a',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Mashup-Style/Images-For-All',
      name: 'Images For All',
      displayName: 'Images For All',
      fields: {
        Value: {
          value: 'images-for-all',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    placeholderImage: {
      value: {
        src: 'https://edge.sitecorecloud.io/andersencorporation-sp819so0/media/Project/AndersenCorporation/AndersenWindows/AndersenWindows/03061_1_thumb_300x300.jpg?h=300&iar=0&w=300',
        alt: 'Photoa',
        width: '300',
        height: '300',
      },
    },
    componentSpacing: null,
    sectionId: {
      value: '',
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
      value: 'Dynamic Page Mashup',
    },
    body: {
      value: 'Lorem Ipsum Dynamic Page Mashup.',
    },
    cta1Icon: {
      id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Arrow',
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
        href: '/Search',
        text: 'Learn More',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '',
        querystring: '',
        id: '{CAFF4F26-97F0-417B-90FF-31BFE28C513F}',
      },
    },
    cta1Modal: null,
    cta1ModalLinkText: {
      value: '',
    },
    cta1Style: {
      id: 'dd818850-ec95-4d32-9774-7cc8173e277b',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Link',
      name: 'Link',
      displayName: 'Link',
      fields: {
        Value: {
          value: 'link',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    cta1AriaLabel: {
      value: 'learn-more',
    },
    backgroundColor: {
      id: '64333070-0d1b-4a33-9e19-7d299d6e8dd3',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Background-Color/White',
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
    queryPipeline: {
      value: 'default',
    },
    searchHub: {
      value: 'search',
    },
    sortDirection: null,
    sortField: null,
    sortType: null,
    filterExpression: {
      value:
        '(@sc_pathids=7FB335D28E99458E9EF9562A78CCB821 (@sc_templateid=(6AF8B67C11374B57A0E49EEEB1DFCCFA,9256EDF3D0FA4588ADDA3036B9D04FAA) @ew_sitesearchtopic*="*Life at Andersen*"))',
    },
    boostingExpression: {
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
        id: 'cf3cc527-29be-491f-ad96-c0defe695a14',
        displayName: 'Article',
        name: 'Article',
        templateId: '57b24586-aebc-4cb2-b3fe-ac60a16f11e2',
        templateName: 'Result Item',
        url: '/Components/Dynamic-Page-Mashup/Data/Dynamic-Page-Mashup/Article',
        fields: {
          cardImageField: {
            id: '7ef6aca2-f90c-4cfc-8157-d2faeec38cdb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Image',
            name: 'Site Search Image',
            displayName: 'Site Search Image',
            fields: {
              Value: {
                value: 'ew_sitesearchimage',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          ctaText: {
            value: 'Learn More',
          },
          descriptionField: {
            id: 'ed89225a-9105-4f1c-9e8b-88133b4d748a',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Article-Description',
            name: 'Article Description',
            displayName: 'Article Description',
            fields: {
              Value: {
                value: 'ew_articledescription',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          eyebrowField: {
            id: 'bd539482-0573-41ba-93d4-c7bf4b8f61ff',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Eyebrow',
            name: 'Site Search Eyebrow',
            displayName: 'Site Search Eyebrow',
            fields: {
              Value: {
                value: 'ew_sitesearcheyebrow',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          fallbackImageField: {
            id: '7ef6aca2-f90c-4cfc-8157-d2faeec38cdb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Image',
            name: 'Site Search Image',
            displayName: 'Site Search Image',
            fields: {
              Value: {
                value: 'ew_sitesearchimage',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          featuredImageField: {
            id: '0ce066ff-4473-4a0c-8cea-8ab177d19479',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Featured-Image',
            name: 'Featured Image',
            displayName: 'Featured Image',
            fields: {
              Value: {
                value: 'ew_featuredimage',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          headingField: {
            id: 'ab0cbed7-a5bf-48ab-a803-182c250b4952',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Article-Title',
            name: 'Article Title',
            displayName: 'Article Title',
            fields: {
              Value: {
                value: 'ew_articletitle',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          resultType: [
            {
              id: '45e5bba0-69b3-46db-af83-eb57088f5260',
              url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Result-Type/Article-Page',
              name: 'Article Page',
              displayName: 'Article Page',
              fields: {
                Value: {
                  value: '9256EDF3D0FA4588ADDA3036B9D04FAA|9520F84EBFB84FBD80D558FD2A5C24C7',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            },
          ],
        },
      },
      {
        id: 'f711fc11-d130-4b8c-bf8d-8c00ebe95d3d',
        displayName: 'Standard Page',
        name: 'Standard Page',
        templateId: '57b24586-aebc-4cb2-b3fe-ac60a16f11e2',
        templateName: 'Result Item',
        url: '/Components/Dynamic-Page-Mashup/Data/Dynamic-Page-Mashup/Standard-Page',
        fields: {
          cardImageField: {
            id: '7ef6aca2-f90c-4cfc-8157-d2faeec38cdb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Image',
            name: 'Site Search Image',
            displayName: 'Site Search Image',
            fields: {
              Value: {
                value: 'ew_sitesearchimage',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          ctaText: {
            value: 'Learn More',
          },
          descriptionField: {
            id: '0cbb3c18-b35b-43d5-a199-3b2636bc8cec',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Description',
            name: 'Site Search Description',
            displayName: 'Site Search Description',
            fields: {
              Value: {
                value: 'ew_sitesearchdescription',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          eyebrowField: {
            id: 'bd539482-0573-41ba-93d4-c7bf4b8f61ff',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Eyebrow',
            name: 'Site Search Eyebrow',
            displayName: 'Site Search Eyebrow',
            fields: {
              Value: {
                value: 'ew_sitesearcheyebrow',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          fallbackImageField: {
            id: '7ef6aca2-f90c-4cfc-8157-d2faeec38cdb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Image',
            name: 'Site Search Image',
            displayName: 'Site Search Image',
            fields: {
              Value: {
                value: 'ew_sitesearchimage',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          featuredImageField: {
            id: '0ce066ff-4473-4a0c-8cea-8ab177d19479',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Featured-Image',
            name: 'Featured Image',
            displayName: 'Featured Image',
            fields: {
              Value: {
                value: 'ew_featuredimage',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          headingField: {
            id: '8ebd6f25-bc4a-44f8-a119-e653f3a54b03',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Fields/Site-Search-Headline',
            name: 'Site Search Headline',
            displayName: 'Site Search Headline',
            fields: {
              Value: {
                value: 'ew_sitesearchheadline',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          resultType: [
            {
              id: '9b1ee83d-9280-4bfe-9c81-3df8927128a8',
              url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Result-Type/Standard-Page',
              name: 'Standard Page',
              displayName: 'Standard Page',
              fields: {
                Value: {
                  value: '6AF8B67C11374B57A0E49EEEB1DFCCFA|79C7F0AF3F6549CA821180F33EFF62EE',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            },
          ],
        },
      },
    ],
  },
};

export default defaultData;
