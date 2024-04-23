import { Result } from '@coveo/headless';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getFieldsToInclude, getResultItemIndex } from 'lib/coveo';
import { getEnum } from 'lib/utils';
import { ItemData, MashupStyle } from './Mashup.Types';
import { FeaturedCard } from './FeaturedCard';
import { RegularCard } from './RegularCard';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImagePrimaryProps } from '../Media/ImagePrimary';
import { EnumField } from 'lib/utils/get-enum';
import { convertToDate } from 'lib/utils/string-utils';
import { extractURLParts } from 'lib/coveo';

const DynamicMashupTemplate = (
  resultItems: Feature.EnterpriseWeb.Enterprise.Components.General.PageMashupDynamic.ResultItem[],
  mashupStyle: MashupStyle,
  placeholderImage: ImageField
) => {
  const fieldsToInclude = getFieldsToInclude(resultItems, 'mashup');

  const template = {
    priority: 1,
    conditions: [],
    fields: ['sc_templateid', ...fieldsToInclude],
    content: (result: Result & { cardIndex: number }) => {
      const resultItemIndex = getResultItemIndex(resultItems, result.raw.sc_templateid as string);

      const resultItemToConsider = resultItems[resultItemIndex];

      const getImageValue = (isDesktopImage = true): string => {
        return ((result.cardIndex === 0 &&
          result.raw[
            (resultItemToConsider?.fields?.featuredImageField as EnumField<string>)?.fields?.Value
              ?.value as keyof typeof result.raw
          ]) ||
          (!isDesktopImage &&
            result.raw[
              (resultItemToConsider?.fields?.cardImageMobileField as EnumField<string>)?.fields
                ?.Value?.value as keyof typeof result.raw
            ]) ||
          result.raw[
            (resultItemToConsider?.fields?.cardImageField as EnumField<string>)?.fields?.Value
              ?.value as keyof typeof result.raw
          ]) as string;
      };

      const getImage = (): ImagePrimaryProps => {
        const _image = getImageValue();
        const _mobileImage = getImageValue(false);

        return {
          fields: {
            primaryImageCaption: {
              value: '',
            },
            primaryImage: _image
              ? {
                  value: {
                    src: _image as string,
                    width:
                      result.cardIndex === 0 ? (mashupStyle === 'images-for-all' ? 795 : 592) : 389,
                    height:
                      result.cardIndex === 0 ? (mashupStyle === 'images-for-all' ? 448 : 395) : 291,
                  },
                }
              : placeholderImage,
            primaryImageMobile: _mobileImage
              ? {
                  value: {
                    src: _mobileImage as string,
                    width: result.cardIndex === 0 ? 327 : 155,
                    height:
                      result.cardIndex === 0 ? (mashupStyle === 'images-for-all' ? 184 : 218) : 155,
                  },
                }
              : placeholderImage,
            primaryImageMobileFocusArea: {
              id: 'a181ae3e-750b-4f75-a6bd-7ddcaf8639e7',
              url: 'http://localhost/sitecore/login/sitecore/system/Settings/Feature/EnterpriseWeb/Enums/Image-Focus/Left',
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
          },
        };
      };

      const getCTA = () => {
        return {
          fields: {
            cta1Link: {
              value: {
                ...extractURLParts(result.clickUri),
                text: resultItemToConsider?.fields?.ctaText.value || 'Read More',
                class: '',
                title: '',
                target: '',
                id: '{7FB335D2-8E99-458E-9EF9-562A78CCB821}',
              },
            },
            cta1AriaLabel: {
              value: '',
            },
            cta1ModalLinkText: {
              value: '',
            },
            cta1Style: {
              id: '49a23327-0397-4cce-a930-e76918d37c42',
              url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Primary',
              name: 'Primary',
              displayName: 'Primary',
              fields: {
                Value: {
                  value:
                    mashupStyle !== 'feature-image-only' && result.cardIndex === 0
                      ? 'primary'
                      : 'link',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
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
          },
        };
      };
      const renderingFields: ItemData = {
        eyebrow: result.raw['ew_articledate']
          ? convertToDate(result.raw['ew_articledate'])
          : (result.raw[
              getEnum<string>(resultItemToConsider?.fields?.eyebrowField) || ''
            ] as string),
        headline: result.raw[
          getEnum<string>(resultItemToConsider?.fields?.headingField) || ''
        ] as string,
        description: result.raw[
          getEnum<string>(resultItemToConsider?.fields?.descriptionField) || ''
        ] as string,
        image: getImage(),
        cta: getCTA(),
      };
      getImage();
      return result.cardIndex === 0 ? (
        <FeaturedCard resultItem={renderingFields} mashupStyle={mashupStyle} />
      ) : (
        <RegularCard
          resultItem={renderingFields}
          mashupStyle={mashupStyle}
          itemIndex={result.cardIndex}
        />
      );
    },
  };

  return template;
};

export default DynamicMashupTemplate;
