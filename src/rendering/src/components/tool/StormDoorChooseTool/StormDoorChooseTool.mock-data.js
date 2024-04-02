const defaultData = {
  rendering: {
    dataSource: 'sampledatasource',
    componentName: 'StormDoorChooseTool',
  },
  fields: {
    nextCtaText: {
      value: 'Next',
    },
    previousCtaText: {
      value: 'Previous',
    },
    startOverCtaText: {
      value: 'Start over',
    },
    summaryHeadline: {
      value: 'Based on your selections we suggest:',
    },
    youSelectedHeadline: {
      value: 'You Selected:',
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
      value: 'Find your perfect storm door',
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
        id: '9e77d58d-68f3-44b2-a8b3-e0c96a73be60',
        displayName: 'full-or-partial-light',
        name: 'full-or-partial-light',
        templateId: '64b071ab-1058-4ff8-b128-4d62b539cccd',
        templateName: 'Question',
        url: '/Data/Components/Storm-Door-Choose-Tool/Storm-Door-Choose-Tool/full-or-partial-light',
        fields: {
          answeredText: {
            value: 'Door style:',
          },
          breadcrumbText: {
            value: 'Door Style',
          },
          errorText: {
            value: 'You must select an option.',
          },
          questionText: {
            value: 'Would you prefer a full view or partial view style storm door?',
          },
        },
      },
    ],
  },
};

export default defaultData;
