import { Result } from '@coveo/headless';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getFieldsToInclude, getResultItemIndex } from 'lib/coveo';
import { getEnum } from 'lib/utils';
import { DynamicXupCardStyle } from './XupCardCollectionDynamic';
import { getPhotoItemProps } from 'src/helpers/PhotoItemWithDetail/PhotoItemWithDetail.Utils';
import PhotoItemWithDetail, {
  PhotoItemWithDetailProps,
} from 'src/helpers/PhotoItemWithDetail/PhotoItemWithDetail';
import GenericResultCardMarkup from './XupCardMarkups/GenericResultCardMarkup.helper';
import EventCardMarkup from './XupCardMarkups/EventCardMarkup.helper';
import ShowroomLocationMarkup from './XupCardMarkups/ShowroomLocationMarkup.helper';
import { extractURLParts } from 'lib/coveo';

export type XupDynamicResultItem =
  | Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.ResultItem
  | Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.AwardResultItem
  | Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.EventResultItem
  | Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.RenewalCaresResultItem
  | Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.ShowroomResultItem;

const XupCardTemplate = (
  resultItems: XupDynamicResultItem[],
  templateClasses: { [property: string]: string },
  dynamicXupCardStyle: DynamicXupCardStyle
) => {
  const fieldsToInclude = getFieldsToInclude(resultItems, 'grid');

  const getImageAttributes = (imageField: string | undefined) => {
    if (imageField) {
      fieldsToInclude.push(`${imageField}_width`);
      fieldsToInclude.push(`${imageField}_height`);
      fieldsToInclude.push(`${imageField}_alt`);
    }
  };

  // Get image attributes
  resultItems?.forEach((item) => {
    if (item.fields?.['thumbnailImageField' as keyof unknown]) {
      getImageAttributes(getEnum<string>(item.fields?.['thumbnailImageField' as keyof unknown]));
    }
    if (item.fields?.['imageField' as keyof unknown]) {
      getImageAttributes(getEnum<string>(item.fields?.['imageField' as keyof unknown]));
    }
  });

  const getRenderingFields = (
    dynamicXupCardStyle: DynamicXupCardStyle,
    _result: Result,
    _resultItemToConsider: XupDynamicResultItem
  ) => {
    const getImageFields = () => ({
      thumbnailImage:
        _result.raw[
          getEnum<string>(
            _resultItemToConsider?.fields?.['thumbnailImageField' as keyof unknown]
          ) || ''
        ],
      thumbnailImageWidth:
        _result.raw[
          `${
            getEnum<string>(
              _resultItemToConsider?.fields?.['thumbnailImageField' as keyof unknown]
            ) || ''
          }_width`
        ],
      thumbnailImageHeight:
        _result.raw[
          `${
            getEnum<string>(
              _resultItemToConsider?.fields?.['thumbnailImageField' as keyof unknown]
            ) || ''
          }_height`
        ],
      thumbnailImageAlt:
        _result.raw[
          `${
            getEnum<string>(
              _resultItemToConsider?.fields?.['thumbnailImageField' as keyof unknown]
            ) || ''
          }_alt`
        ],
    });

    const getResultFields = () => ({
      headline: {
        fields: {
          headlineText: {
            value:
              _result.raw[
                getEnum<string>(_resultItemToConsider?.fields?.['headingField' as keyof unknown]) ||
                  ''
              ],
          },
        },
      },
      subheadline: {
        fields: {
          subheadlineText: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['subHeadingField' as keyof unknown]
                ) || ''
              ],
          },
        },
      },
      description: {
        fields: {
          body: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['descriptionField' as keyof unknown]
                ) || ''
              ],
          },
        },
      },
      eyebrow: {
        fields: {
          eyebrowText: {
            value:
              _result.raw[
                getEnum<string>(_resultItemToConsider?.fields?.['eyebrowField' as keyof unknown]) ||
                  ''
              ],
          },
        },
      },
      cta: {
        fields: {
          cta1Link: {
            value: {
              ...extractURLParts(_result.clickUri),
              title: _resultItemToConsider?.fields?.ctaText.value,
              text: _resultItemToConsider?.fields?.ctaText.value,
            },
          },
          cta1Icon: {
            fields: {
              Value: {
                value: 'arrow',
              },
            },
          },
          cta1Style: {
            fields: {
              Value: {
                value: 'link',
              },
            },
          },
        },
      },
    });

    const getEventsFields = () => ({
      eventstart: {
        fields: {
          eyebrowText: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['startDateField' as keyof unknown]
                ) || ''
              ],
          },
        },
      },
      eventend: {
        fields: {
          eyebrowText: {
            value:
              _result.raw[
                getEnum<string>(_resultItemToConsider?.fields?.['endDateField' as keyof unknown]) ||
                  ''
              ],
          },
        },
      },
      eventname: {
        fields: {
          headlineText: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventNameField' as keyof unknown]
                ) || ''
              ],
          },
        },
      },
      eventdescription: {
        fields: {
          body: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventDescriptionField' as keyof unknown]
                ) || ''
              ] || '',
          },
        },
      },
      eventtime: {
        fields: {
          subheadlineText: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventTimeField' as keyof unknown]
                ) || ''
              ],
          },
        },
      },
      eventaddress: {
        fields: {
          subheadlineText: {
            value: `${
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventAddressField' as keyof unknown]
                ) || ''
              ]
            },
            ${
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventCityField' as keyof unknown]
                ) || ''
              ]
            }, ${
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventStateField' as keyof unknown]
                ) || ''
              ]
            } ${
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['eventZipField' as keyof unknown]
                ) || ''
              ]
            }`,
          },
        },
      },
      eventcta: {
        fields: {
          cta1Link: {
            value: {
              ...extractURLParts(_result.raw?.['ew_eventcta'] as string),
              title: _resultItemToConsider?.fields?.ctaText.value,
              text: _resultItemToConsider?.fields?.ctaText.value,
              target: '_blank',
            },
          },
          cta1Icon: {
            fields: {
              Value: {
                value: 'arrow',
              },
            },
          },
          cta1Style: {
            fields: {
              Value: {
                value: 'link',
              },
            },
          },
        },
      },
    });

    const getAwardsFields = () => ({
      headline: {
        fields: {
          headlineText: {
            value:
              _result.raw[
                getEnum<string>(_resultItemToConsider?.fields?.['headingField' as keyof unknown]) ||
                  ''
              ],
          },
        },
      },
      description: {
        fields: {
          body: {
            value:
              _result.raw[
                getEnum<string>(
                  _resultItemToConsider?.fields?.['descriptionField' as keyof unknown]
                ) || ''
              ],
          },
        },
      },
      cta: {
        fields: {
          cta1Link: {
            value: {
              ...extractURLParts(_result.raw?.['ew_award_cta'] as string),
              title: _resultItemToConsider?.fields?.ctaText.value,
              text: _result.raw?.['ew_award_cta']
                ? _resultItemToConsider?.fields?.ctaText.value
                : '',
              target: '_blank',
            },
          },
          cta1Icon: {
            fields: {
              Value: {
                value: 'arrow',
              },
            },
          },
          cta1Style: {
            fields: {
              Value: {
                value: 'link',
              },
            },
          },
        },
      },
    });

    // Utility function to fetch rendering fields for 'showrooms' variant
    const getShowRoomLocationFields = () => {
      const showroomCity =
        _result.raw[
          getEnum<string>(_resultItemToConsider?.fields?.['showroomCity' as keyof unknown]) || ''
        ];

      const showroomState =
        _result.raw[
          getEnum<string>(_resultItemToConsider?.fields?.['showroomState' as keyof unknown]) || ''
        ];

      const showroomPostalCode =
        _result.raw[
          getEnum<string>(_resultItemToConsider?.fields?.['showroomPostalCode' as keyof unknown]) ||
            ''
        ];

      return {
        showroomName: {
          fields: {
            headlineText: {
              value:
                _result.raw[
                  getEnum<string>(
                    _resultItemToConsider?.fields?.['showroomName' as keyof unknown]
                  ) || ''
                ] || '',
            },
          },
        },
        showroomAddressLine1: {
          fields: {
            subheadlineText: {
              value:
                _result.raw[
                  getEnum<string>(
                    _resultItemToConsider?.fields?.['showroomAddressLine1' as keyof unknown]
                  ) || ''
                ] || '',
            },
          },
        },
        showroomAddressLine2: {
          fields: {
            subheadlineText: {
              value:
                _result.raw[
                  getEnum<string>(
                    _resultItemToConsider?.fields?.['showroomAddressLine2' as keyof unknown]
                  ) || ''
                ] || '',
            },
          },
        },
        showroomLocationWithPostal: {
          fields: {
            subheadlineText: {
              value:
                [showroomCity, showroomState, showroomPostalCode].filter(Boolean).join(', ') || '',
            },
          },
        },
        showroomLocationPhoneNumber:
          _result.raw[
            getEnum<string>(
              _resultItemToConsider?.fields?.['showroomLocationPhoneNumber' as keyof unknown]
            ) || ''
          ] || '',
        showroomHours:
          _result.raw[
            getEnum<string>(_resultItemToConsider?.fields?.['showroomHours' as keyof unknown]) || ''
          ] || '',
        showroomPageUrl: {
          fields: {
            cta1Link: {
              value: {
                ...extractURLParts(
                  _result.raw[
                    getEnum<string>(
                      _resultItemToConsider?.fields?.['showroomPageUrl' as keyof unknown]
                    ) || ''
                  ] as string
                ),
                title: _resultItemToConsider?.fields?.ctaText.value,
                text: _resultItemToConsider?.fields?.ctaText.value,
              },
            },
            cta1Icon: {
              fields: {
                Value: {
                  value: 'arrow',
                },
              },
            },
            cta1Style: {
              fields: {
                Value: {
                  value: 'link',
                },
              },
            },
          },
        },
      };
    };

    switch (dynamicXupCardStyle) {
      case 'photo-gallery':
        return getImageFields();
      case 'renewal-cares':
      case 'result-with-image':
        return { ...getImageFields(), ...getResultFields() };
      case 'awards':
        return { ...getImageFields(), ...getAwardsFields() };
      case 'result-without-image':
        return getResultFields();
      case 'events':
        return getEventsFields();
      case 'showrooms':
        return getShowRoomLocationFields();
      default:
        return getImageFields();
    }
  };

  const template = {
    priority: 1,
    conditions: [],
    fields: ['sc_templateid', ...fieldsToInclude],
    content: (result: Result) => {
      const resultItemIndex = getResultItemIndex(resultItems, result.raw.sc_templateid as string);

      const resultItemToConsider = resultItems[resultItemIndex];

      // we can ignore below type error, as we are generating required renderingFields props based on Display card style
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const renderingFields: any = getRenderingFields(
        dynamicXupCardStyle,
        result,
        resultItemToConsider
      );

      switch (dynamicXupCardStyle) {
        case 'result-with-image':
        case 'result-without-image':
        case 'photo-gallery':
        case 'renewal-cares':
          return (
            <GenericResultCardMarkup
              dynamicXupCardStyle={dynamicXupCardStyle}
              renderingFields={renderingFields}
              templateClasses={templateClasses}
            />
          );

        case 'events':
          return (
            <EventCardMarkup
              dynamicXupCardStyle={dynamicXupCardStyle}
              renderingFields={renderingFields}
              templateClasses={templateClasses}
            />
          );

        case 'showrooms':
          return (
            <ShowroomLocationMarkup
              renderingFields={renderingFields}
              templateClasses={templateClasses}
            />
          );

        default:
          return (
            <GenericResultCardMarkup
              dynamicXupCardStyle={dynamicXupCardStyle}
              renderingFields={renderingFields}
              templateClasses={templateClasses}
            />
          );
      }
    },
  };

  if (dynamicXupCardStyle === 'photo-gallery') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (template.content as any).modalTemplate = (result: Result) => {
      const photoObject = getPhotoItemProps(result, true, resultItems) as PhotoItemWithDetailProps;
      return <PhotoItemWithDetail key={result.uniqueId} {...photoObject} />;
    };
  }

  return template;
};

export default XupCardTemplate;
