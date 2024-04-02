const defaultData = {
  rendering: {
    componentName: 'SizingTool',
    dataSource:
      '/sitecore/content/AndersenCorporation/AndersenWindows/AndersenWindows/Home/Components/Sizing Tool/Data/Sizing Tool',
  },
  fields: {
    heightLabel: {
      value: 'Height',
    },
    heightPlaceholderText: {
      value: 'Select',
    },
    productDetailsPageCTAText: {
      value: 'Product Details',
    },
    productDimensionsDescription: {
      value:
        'Select from the standard width and height options below to be shown a list of products offered in those sizes.&nbsp;&nbsp;Don\'t see your size? We also offer&nbsp;<a href="/for-professionals/documents/sizing/#sort=relevancy&amp;f:sizing=[Custom%20Sizing]#sort=relevancy&amp;f:sizing=[Custom%20Sizing]">custom sizing</a>.',
    },
    productDimensionsHeading: {
      value: 'Select Size',
    },
    productTypeHeading: {
      value: 'Select Door or Window',
    },
    resetLabel: {
      value: 'Reset',
    },
    resultsLabel: {
      value: 'Results',
    },
    sizingDocumentsCTAText: {
      value: 'Sizing Documents',
    },
    widthLabel: {
      value: 'Width',
    },
    widthPlaceholderText: {
      value: 'Select',
    },
    facets: [
      {
        id: 'cec6e05a-aef1-4c08-8624-22200d2d157c',
        url: '/Data/Elements/Search/Facets/Sizing-Tool/Product-Series',
        name: 'Product Series',
        displayName: 'Product Series',
        fields: {
          dependsOn: null,
          facetField: {
            id: 'ee3b9163-b71c-4bcb-b975-0af7defc3baa',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Fields/Product-Series',
            name: 'Product Series',
            displayName: 'Product Series',
            fields: {
              Value: {
                value: 'ew_productseries',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          facetLabel: {
            value: 'Product Series',
          },
          numberOfValues: {
            value: null,
          },
          sortCriteria: {
            id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Values-Sort-Criteria/Automatic',
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
            value: 'product-series',
          },
        },
        templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
        templateName: 'Facet',
      },
      {
        id: '60607fac-51fd-4bc8-90e1-d5f7f920ed9d',
        url: '/Data/Elements/Search/Facets/Sizing-Tool/Door-Type',
        name: 'Door Type',
        displayName: 'Door Type',
        fields: {
          dependsOn: null,
          facetField: {
            id: 'd367b3a8-1320-4bd4-b27d-99554387b1f6',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Fields/Door-Type',
            name: 'Door Type',
            displayName: 'Door Type',
            fields: {
              Value: {
                value: 'ew_doortype',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          facetLabel: {
            value: 'Door Style',
          },
          numberOfValues: {
            value: null,
          },
          sortCriteria: {
            id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Values-Sort-Criteria/Automatic',
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
            value: 'door-type',
          },
        },
        templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
        templateName: 'Facet',
      },
      {
        id: '2b09f34a-4629-49b0-a256-347279ceb166',
        url: '/Data/Elements/Search/Facets/Sizing-Tool/Window-Type',
        name: 'Window Type',
        displayName: 'Window Type',
        fields: {
          dependsOn: null,
          facetField: {
            id: 'a515e90b-97fb-4301-a103-33c83aa0533c',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Fields/Window-Type',
            name: 'Window Type',
            displayName: 'Window Type',
            fields: {
              Value: {
                value: 'ew_windowtype',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          facetLabel: {
            value: 'Window Style',
          },
          numberOfValues: {
            value: null,
          },
          sortCriteria: {
            id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Values-Sort-Criteria/Automatic',
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
            value: 'window-type',
          },
        },
        templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
        templateName: 'Facet',
      },
    ],
    productDimensionsFacet: {
      id: '7fea4afa-a335-45cd-9ed2-65ef06fc1ed0',
      url: '/Data/Elements/Search/Facets/Sizing-Tool/Product-Dimensions',
      name: 'Product Dimensions',
      displayName: 'Product Dimensions',
      fields: {
        dependsOn: null,
        facetField: {
          id: 'a15d863e-d760-489b-818f-6202b9bf82b5',
          url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Fields/Product-Dimensions',
          name: 'Product Dimensions',
          displayName: 'Product Dimensions',
          fields: {
            Value: {
              value: 'ew_productdimensions',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        facetLabel: {
          value: 'Product Dimensions',
        },
        numberOfValues: {
          value: 2000,
        },
        sortCriteria: {
          id: 'f987da57-dc88-4aab-b311-c0802a4d58d2',
          url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Values-Sort-Criteria/Alphanumeric',
          name: 'Alphanumeric',
          displayName: 'Alphanumeric',
          fields: {
            Value: {
              value: 'alphanumeric',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        uniqueIdentifier: {
          value: 'product-dimensions',
        },
      },
      templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
      templateName: 'Facet',
    },
    productTypeFacet: {
      id: 'f4bbd864-b8ac-46b8-ac9a-f4c3272151d5',
      url: '/Data/Elements/Search/Facets/Sizing-Tool/Product-Type',
      name: 'Product Type',
      displayName: 'Product Type',
      fields: {
        dependsOn: null,
        facetField: {
          id: 'fc7b001a-6234-4b4c-bd14-9fdce82b01d3',
          url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Fields/Product-Type',
          name: 'Product Type',
          displayName: 'Product Type',
          fields: {
            Value: {
              value: 'ew_producttype',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        facetLabel: {
          value: 'Product Type',
        },
        numberOfValues: {
          value: null,
        },
        sortCriteria: {
          id: '91dac1a7-f7b3-459e-9075-49a9613a535e',
          url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Facet-Values-Sort-Criteria/Automatic',
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
          value: 'product-type',
        },
      },
      templateId: '91b5c789-f80a-43ef-b337-b21db163b0f1',
      templateName: 'Facet',
    },
    searchParameters: {
      id: '65fbd5b8-b370-473d-a968-b2a3a0e66f5c',
      url: '/Data/Elements/Search/Search-Parameters/Sizing-Tool',
      name: 'Sizing Tool',
      displayName: 'Sizing Tool',
      fields: {
        numberOfResultsPerPage: {
          value: 10,
        },
        noResultsHeadline: {
          value: 'Sorry! No results found',
        },
        noResultsBody: {
          value:
            '<p>Search Tips:</p>\r\n<ul>\r\n    <li>Check the spelling of your keywords.\r\n    </li>\r\n    <li>Try adjusting your search</li>\r\n</ul>',
        },
        facetSectionHeading: {
          value: 'Refine By',
        },
        clearAllLabel: {
          value: 'Clear All',
        },
        showResultsLabel: {
          value: 'Show Results',
        },
        facetSearchLabel: {
          value: 'Search',
        },
        showLessLabel: {
          value: 'Show Less',
        },
        showMoreLabel: {
          value: 'Show More',
        },
        noFacetResultsBody: {
          value: 'No results found.',
        },
        filtersLabel: {
          value: 'Filters',
        },
        queryPipeline: {
          value: 'default',
        },
        searchHub: {
          value: 'search',
        },
        filterExpression: {
          value:
            '(@sc_pathids=6BB32758D223484AB7C80AE22613C318 @sc_templateid==AFE4A2980FB44D78A699E96B98CE94DE)',
        },
        boostingExpression: {
          value: '',
        },
        sortDirection: {
          id: 'c42d2a22-7100-4467-97e9-795e0e6de342',
          url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Sort-Direction/Ascending',
          name: 'Ascending',
          displayName: 'Ascending',
          fields: {
            Value: {
              value: 'ascending',
            },
          },
          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
          templateName: 'Enum',
        },
        sortField: null,
        sortType: {
          id: '3616dca7-4a65-478a-84d3-0e6dd9c5c7a5',
          url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Search/Sort-Type/Date',
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
      },
      templateId: 'af4c725f-4863-4ec3-9976-d35a39e8aa62',
      templateName: 'Search Parameters',
    },
  },
};

export default defaultData;
