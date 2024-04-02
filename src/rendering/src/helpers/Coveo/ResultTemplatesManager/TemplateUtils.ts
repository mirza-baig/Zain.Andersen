import { getEnum } from 'lib/utils';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { LayoutType } from 'lib/coveo';
import { EnumField } from 'lib/utils/get-enum';
import { XupDynamicResultItem } from 'components/listing/XupCardCollectionDynamic/XupCardCollectionDynamic.Template.helper';

export const getFieldsToInclude = (
  resultEntities:
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[]
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.ResultColumn[]
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[],
  layoutType: LayoutType
): string[] => {
  const fields: string[] = [];

  switch (layoutType) {
    case 'list':
    case 'grid':
      resultEntities.forEach((item) => {
        for (const searchField in item.fields) {
          const field = getEnum<string>(item.fields[searchField] as EnumField<string>);
          if (field && !fields?.includes(field)) {
            fields.push(field);
          }
        }
      });
      break;
    case 'table':
      resultEntities.forEach((item) => {
        const field = getEnum<string>(
          (item as Feature.EnterpriseWeb.Enterprise.Elements.Search.ResultColumn).fields?.field
        );
        if (field) {
          fields.push(field);
        }
      });
      break;
    default:
      break;
  }
  if (layoutType === 'list') {
  }

  return fields;
};

export const getResultItemIndex = (
  resultEntities:
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[]
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[]
    | XupDynamicResultItem[],
  fieldToMatch: string
): number => {
  let itemIndex = -1;
  if (resultEntities) {
    for (const [index, resultItem] of resultEntities.entries()) {
      const templateIdsToMatch: string[] = [];

      if (resultItem.fields?.resultType) {
        for (const pageType of resultItem.fields.resultType) {
          const pageTypeIds = getEnum<string>(pageType);
          if (pageTypeIds) {
            templateIdsToMatch.push(...pageTypeIds.split('|'));
          }
        }
      }

      if (templateIdsToMatch.includes(fieldToMatch)) {
        itemIndex = index;
        break;
      }
    }
  }

  return itemIndex === -1 ? 0 : itemIndex;
};
