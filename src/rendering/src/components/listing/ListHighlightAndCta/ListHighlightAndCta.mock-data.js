export const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'ListHighlightAndCta',
  },
  fields: {
    listItemStyle: {
      id: 'bfaaf4b7-dd25-443d-bc84-cdb9fedb08f0',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/List-Item-Style/Expanded-List',
      name: 'Expanded List',
      displayName: 'Expanded List',
      fields: {
        Value: {
          value: 'expanded-list',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    sectionHeadline: {
      value: 'List Highlight with Button Click1',
    },
    sectionHeadlineLevel: {
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
        id: '305641bf-7439-4479-8b96-73f8f8aeed96',
        displayName: 'List item1',
        name: 'List item1',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highligh-with-Button-Click1/List-item1',
        fields: {
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
            value: 'Headline Label goes here',
          },
          body: {
            value:
              "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Test1</p>",
          },
          cta1Link: {
            value: {
              href: '/PromoGeneric',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{4759E204-D0FC-43F8-80BB-E0C0B94D9F65}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '49a23327-0397-4cce-a930-e76918d37c42',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Primary',
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
          cta2Icon: {
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
          cta2Link: {
            value: {
              href: '/ListImagewithCallouts',
              text: 'Default state',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{5C39C5D7-AE28-47E8-904D-302346BB733E}',
            },
          },
          cta2Modal: null,
          cta2Style: {
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
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
      {
        id: '41f038da-f8a9-470d-8f89-4f5bbb2fcc4b',
        displayName: 'List item2',
        name: 'List item2',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highligh-with-Button-Click1/List-item2',
        fields: {
          headlineLevel: null,
          headlineText: {
            value: 'Headline Label',
          },

          body: {
            value:
              '<p>The <code class="w3-codespan">target</code> attribute specifies where to open the linked document.</p>\n<p>The <code class="w3-codespan">target</code> attribute can have one of the following values:</p>\n<ul>\n    <li><code class="w3-codespan">_self</code> - Default. Opens the document in the same window/tab as it was clicked</li>\n    <li><code class="w3-codespan">_blank</code> - Opens the document in a new window or tab</li>\n    <li><code class="w3-codespan">_parent</code> - Opens the document in the parent frame</li>\n    <li><code class="w3-codespan">_top</code> - Opens the document in the full body of the window</li>\n    <li>bnnb klj</li>\n</ul>',
          },
          cta1Link: {
            value: {
              href: '/Demo-HeroTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{0AF8C545-074B-466E-93CD-B14BF83DB353}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '49a23327-0397-4cce-a930-e76918d37c42',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Primary',
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
          cta2Icon: null,
          cta2Link: {
            value: {
              href: '',
            },
          },
          cta2Modal: null,
          cta2Style: null,
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
      {
        id: 'c2a9082c-691a-418c-9f72-e01ec1b666a6',
        displayName: 'List item3',
        name: 'List item3',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highligh-with-Button-Click1/List-item3',
        fields: {
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
            value: 'Headline Label Headline Label goes here',
          },

          body: {
            value:
              '<a href="https://preview.dev.renewalbyandersen.com/Components/Content-block">Content block </a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
          },
          cta1Link: {
            value: {
              href: '/Demo-HeadlineTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{F79C7F78-518A-453C-8363-55447E2AE467}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '49a23327-0397-4cce-a930-e76918d37c42',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Primary',
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
          cta2Icon: null,
          cta2Link: {
            value: {
              href: '',
            },
          },
          cta2Modal: null,
          cta2Style: null,
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
      {
        id: '11d7a4a5-95db-4d92-b9b6-ffc6b6af25f2',
        displayName: 'List item4',
        name: 'List item4',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highligh-with-Button-Click1/List-item4',
        fields: {
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
            value: 'Headline label goes here',
          },

          body: {
            value:
              'The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.<br class="t-last-br" />',
          },
          cta1Link: {
            value: {
              href: '/Components/ContentBlock',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{9FF23AF6-8057-4771-B720-A69E957010B3}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '49a23327-0397-4cce-a930-e76918d37c42',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Primary',
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
          cta2Icon: null,
          cta2Link: {
            value: {
              href: '',
            },
          },
          cta2Modal: null,
          cta2Style: null,
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
    ],
  },
};

export const linkIconData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'ListHighlightAndCta',
  },
  fields: {
    listItemStyle: {
      id: '30234891-b224-4bc1-b461-8afe9229215d',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/List-Item-Style/Row-List',
      name: 'Row List',
      displayName: 'Row List',
      fields: {
        Value: {
          value: 'row-list',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    sectionHeadline: {
      value: 'List Highlight with row click',
    },
    sectionHeadlineLevel: {
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
        id: 'd9b441dd-1536-490b-bfea-41e761795d87',
        displayName: 'List item1',
        name: 'List item1',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highlight-with-row-click/List-item1',
        fields: {
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
            value: 'Headline label',
          },

          body: {
            value:
              "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>",
          },
          cta1Link: {
            value: {
              href: '/Demo-HeadlineTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{F79C7F78-518A-453C-8363-55447E2AE467}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '59c1d73d-1c73-42db-9ab3-f2a9d81440bb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Link-Right-Icon',
            name: 'Link Right Icon',
            displayName: 'Link Right Icon',
            fields: {
              Value: {
                value: 'link-right-icon',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          cta2Icon: null,
          cta2Link: {
            value: {
              href: '',
            },
          },
          cta2Modal: null,
          cta2Style: null,
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
      {
        id: 'a023b919-52a6-4b8c-b2e3-1dab5e910a02',
        displayName: 'List item2',
        name: 'List item2',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highlight-with-row-click/List-item2',
        fields: {
          headlineLevel: null,
          headlineText: {
            value: 'Headline label goes here Headline label goes here  Headline label goes here ',
          },

          body: {
            value:
              '<p><a href="https://preview.dev.renewalbyandersen.com/Components/Content-block">Content block </a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley</p>',
          },
          cta1Link: {
            value: {
              href: '/Demo-HeadlineTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{F79C7F78-518A-453C-8363-55447E2AE467}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '59c1d73d-1c73-42db-9ab3-f2a9d81440bb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Link-Right-Icon',
            name: 'Link Right Icon',
            displayName: 'Link Right Icon',
            fields: {
              Value: {
                value: 'link-right-icon',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          cta2Icon: {
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
          cta2Link: {
            value: {
              href: '/Demo-HeroTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{0AF8C545-074B-466E-93CD-B14BF83DB353}',
            },
          },
          cta2Modal: null,
          cta2Style: {
            id: 'a6a27afc-dbb5-4581-9dd3-2a37fc1f08cd',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Tertiary',
            name: 'Tertiary',
            displayName: 'Tertiary',
            fields: {
              Value: {
                value: 'tertiary',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
      {
        id: '702702e7-bd56-4293-b73c-a0837a72e82b',
        displayName: 'List item3',
        name: 'List item3',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highlight-with-row-click/List-item3',
        fields: {
          headlineLevel: null,
          headlineText: {
            value: '',
          },

          body: {
            value: '',
          },
          cta1Link: {
            value: {
              href: '/Demo-HeadlineTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{F79C7F78-518A-453C-8363-55447E2AE467}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '59c1d73d-1c73-42db-9ab3-f2a9d81440bb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Link-Right-Icon',
            name: 'Link Right Icon',
            displayName: 'Link Right Icon',
            fields: {
              Value: {
                value: 'link-right-icon',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          cta2Icon: null,
          cta2Link: {
            value: {
              href: '',
            },
          },
          cta2Modal: null,
          cta2Style: null,
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
      {
        id: '206436b6-effe-4d75-a63e-161afdcbcba7',
        displayName: 'List item4',
        name: 'List item4',
        templateId: 'a03e9efe-8b1b-4f3c-893c-5f59d61d6c0b',
        templateName: 'List Highlight and CTA Item',
        url: '/Data/Components/Listing/List-Highlight-with-row-click/List-item4',
        fields: {
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
            value: 'Headline label goes here ',
          },

          body: {
            value: '',
          },
          cta1Link: {
            value: {
              href: '/Demo-HeadlineTwoColumn',
              text: 'Call to Action',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{F79C7F78-518A-453C-8363-55447E2AE467}',
            },
          },
          cta1ModalLinkText: {
            value: '',
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
          cta1Modal: null,
          cta1Style: {
            id: '59c1d73d-1c73-42db-9ab3-f2a9d81440bb',
            url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Link-Right-Icon',
            name: 'Link Right Icon',
            displayName: 'Link Right Icon',
            fields: {
              Value: {
                value: 'link-right-icon',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          cta2Icon: null,
          cta2Link: {
            value: {
              href: '',
            },
          },
          cta2Modal: null,
          cta2Style: null,
          cta2ModalLinkText: {
            value: '',
          },
        },
      },
    ],
  },
};
