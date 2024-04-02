import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Result } from '@coveo/headless';
import { PhotoItemWithDetailProps } from './PhotoItemWithDetail';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getResultItemIndex } from '../Coveo/ResultTemplatesManager/TemplateUtils';
import { getEnum } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export const getPhotoItemProps = (
  props: Partial<
    | (Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BasePhoto &
        (
          | Feature.EnterpriseWeb.AndersenWindows.Data.Photos.Photo
          | Feature.EnterpriseWeb.RenewalByAndersen.Data.Photos.Photo
        ))
    | Result
  >,
  isInstanceOfCoveoResponse: boolean,
  resultItems?:
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[]
    | Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.ResultItem[]
): PhotoItemWithDetailProps | null => {
  if (isInstanceOfCoveoResponse && resultItems && 'raw' in props) {
    if (!props.raw) {
      return null;
    }

    const resultItemIndex = getResultItemIndex(resultItems, props.raw.sc_templateid as string);

    const resultItemToConsider = resultItems[resultItemIndex];

    const renderingFields = {
      headline: props.raw[getEnum<string>(resultItemToConsider.fields?.headingField) || ''],
      fullImage: props.raw[getEnum<string>(resultItemToConsider.fields?.imageField) || ''],
      fullImagetitle: props.raw[getEnum<string>(resultItemToConsider.fields?.titleField) || ''],
      fullImageWidth: parseInt(
        props.raw[
          `${[getEnum<string>(resultItemToConsider.fields?.imageField) || '']}_width`
        ] as string
      ),
      fullImageHeight: parseInt(
        props.raw[
          `${[getEnum<string>(resultItemToConsider.fields?.imageField) || '']}_height`
        ] as string
      ),
      fullImageAlt: parseInt(
        props.raw[
          `${[getEnum<string>(resultItemToConsider.fields?.imageField) || '']}_alt`
        ] as string
      ),
      relatedPages: JSON.parse(
        (props.raw[
          getEnum<string>(resultItemToConsider.fields?.relatedPagesField) || '[]'
        ] as string) || '[]'
      ),
    };

    return {
      fields: {
        imageWrapper: {
          image: {
            value: {
              src: `${renderingFields.fullImage}`,
              width: renderingFields.fullImageWidth,
              height: renderingFields.fullImageHeight,
              alt: renderingFields.fullImageAlt,
            },
          },
          mobileImage: {
            value: {
              src: `${renderingFields.fullImage}`,
              width: renderingFields.fullImageWidth,
              height: renderingFields.fullImageHeight,
              alt: renderingFields.fullImageAlt,
            },
          },
        },
        headlineText: { value: renderingFields.fullImagetitle as string },
        relatedPages: renderingFields.relatedPages.map(
          (
            pageItem: Item &
              Foundation.EnterpriseWeb.Enterprise.FieldSets.Routes.PageProperties['fields']
          ) => {
            return { pageTitle: pageItem?.pageTitle, url: pageItem?.url };
          }
        ),
        photoItemClasses: '',
      },
    };
  } else if (!isInstanceOfCoveoResponse && 'fields' in props) {
    return {
      fields: {
        imageWrapper: {
          image: props.fields?.fullImage,
          mobileImage: props.fields?.fullImage,
        },
        headlineText: props.fields?.photoTitle || { value: '' },

        relatedPages: props.fields?.relatedPages?.map(
          (
            pageItem: Item &
              Foundation.EnterpriseWeb.Enterprise.FieldSets.Routes.PageProperties['fields']
          ) => {
            return {
              pageTitle: (pageItem?.fields?.pageTitle as Field<string>)?.value,
              url: pageItem.url,
            };
          }
        ),
        photoItemClasses: '',
      },
    };
  }

  return null;
};
