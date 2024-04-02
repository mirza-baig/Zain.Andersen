const defaultData = {
  rendering: {
    componentName: 'VideoGalleryDynamic',
    dataSource: '{81360496-44FA-4A87-9DE8-009BC36B1C69}',
  },
  fields: {
    desktopDisplayStyle: {
      id: 'a14072b3-ee5e-4717-8022-6aede637b139',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/dynamic-video-gallery-desktop-display-style/horizontal-scroll-without-video',
      name: 'Horizontal Scroll without Video',
      displayName: 'Horizontal Scroll without Video',
      fields: {
        Value: {
          value: 'sidescroll-withoutvideo',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    mobileDisplayStyle: {
      id: '0aee9619-7d5a-4b61-ae4c-685fe3014726',
      url: '/sitecore/content/andersencorporation/enterprise-global/enums/video-gallery-mobile-display-style/list',
      name: 'List',
      displayName: 'List',
      fields: {
        Value: {
          value: 'list',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    numberOfVideos: {
      value: null,
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
      value: 'Video Gallery Heading',
    },
    componentSpacing: null,
    sectionId: {
      value: '',
    },
    queryPipeline: {
      value: 'default',
    },
    searchHub: {
      value: 'search',
    },
    filterExpression: {
      value:
        '(@sc_pathids=8A7EFA5CA3E046E2BE8AE7C62DA33E4F @sc_templateid=5DABD9C59C7346B0A2F141A0491A322E)',
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
        id: '6a93799f-be95-4c96-99bd-fded23308594',
        displayName: 'Result Item',
        name: 'Result Item',
        templateId: 'ca265d36-b2b1-486e-b022-cdf32d8ad76c',
        templateName: 'Result Item',
        url: '/data/components/video-gallery-dynamic/video-gallery-dynamic-1/result-item',
        fields: {
          descriptionField: {
            id: '993c7b62-5a50-4542-a39f-d3d38d905244',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/enterprise/video-description',
            name: 'Video Description',
            displayName: 'Video Description',
            fields: {
              Value: {
                value: 'ew_video_body',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          eyebrowField: {
            id: '71fce586-41ba-46a8-9b6a-3fa7104774b2',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/enterprise/video-eyebrow-text',
            name: 'Video Eyebrow Text',
            displayName: 'Video Eyebrow Text',
            fields: {
              Value: {
                value: 'ew_video_eyebrowtext',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          headingField: {
            id: '28388e64-76aa-4695-9b50-d2a01cfe86a0',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/enterprise/video-headline-text',
            name: 'Video Headline Text',
            displayName: 'Video Headline Text',
            fields: {
              Value: {
                value: 'ew_video_headlinetext',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          thumbnailImageDesktopField: {
            id: '09b95883-470d-48a9-bbb3-2e886ca75173',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/enterprise/video-thumbnail',
            name: 'Video Thumbnail',
            displayName: 'Video Thumbnail',
            fields: {
              Value: {
                value: 'ew_videothumbnail',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          thumbnailImageMobileField: {
            id: 'bd4aaac4-05a2-4122-854f-8a4894750052',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/enterprise/video-thumbnail-mobile',
            name: 'Video Thumbnail Mobile',
            displayName: 'Video Thumbnail Mobile',
            fields: {
              Value: {
                value: 'ew_videothumbnailmobile',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          thumbnailImageMobileFocusAreaField: {
            id: '0326576e-4539-4a58-b23c-b06f9650372b',
            url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/indexed-fields/enterprise/video-thumbnail-mobile-focus-area',
            name: 'Video Thumbnail Mobile Focus Area',
            displayName: 'Video Thumbnail Mobile Focus Area',
            fields: {
              Value: {
                value: 'ew_videothumbnailmobilefocusarea',
              },
            },
            templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
            templateName: 'Enum',
          },
          resultType: [
            {
              id: '1ecd8b0a-4adb-4972-9c04-9073d8a5ca44',
              url: '/sitecore/content/andersencorporation/enterprise-global/enums/search/result-type/enterprise/video',
              name: 'Video',
              displayName: 'Video',
              fields: {
                Value: {
                  value: '5DABD9C59C7346B0A2F141A0491A322E|A3A3CA99D5354E53AAB9C05FDEB02F3D',
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
