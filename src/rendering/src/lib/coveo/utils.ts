import {
  FacetOptions,
  FacetSortCriterion,
  SortCriterion,
  SortOrder,
  buildDateSortCriterion,
  buildFieldSortCriterion,
  buildRelevanceSortCriterion,
  buildSearchEngine,
  loadFieldActions,
  platformUrl,
} from '@coveo/headless';
import { getEnum } from 'lib/utils';
import { EnumField } from 'lib/utils/get-enum';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { currentAccessToken, renewAccessToken } from './access-token';
import { FeatureToggles } from 'lib/feature-toggles';
import { XupDynamicResultItem } from 'components/listing/XupCardCollectionDynamic/XupCardCollectionDynamic.Template.helper';

export const mapFacetOptions = (
  facet: Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet
): FacetOptions => {
  const field = getEnum<string>(facet?.fields.facetField) || '';
  const facetId = facet?.fields.uniqueIdentifier?.value || '';
  const sortCriteria =
    getEnum<FacetSortCriterion>(facet?.fields.sortCriteria as EnumField<FacetSortCriterion>) ||
    'automatic';
  const result = {
    field: field,
    facetId: facetId,
    sortCriteria: sortCriteria,
    numberOfValues: facet?.fields.numberOfValues.value || 8,
  };

  return result;
};

type SortType = 'relevancy' | 'date' | 'field';
type SortDirection = 'ascending' | 'descending';

// function to get the intitial value of sorting critarion based on layout service response
export const getInitialCriterion = (
  sortTypeField: EnumField<SortType>,
  sortDirectionField: EnumField<SortDirection>,
  sortFieldField: EnumField<string>
): SortCriterion => {
  const sortType = getEnum<SortType>(sortTypeField) || 'relevancy';
  const sortDirection = getEnum<SortDirection>(sortDirectionField) || 'descending';
  const sortField = getEnum<string>(sortFieldField) || '';

  let sortCriterion: SortCriterion;
  switch (sortType) {
    case 'relevancy':
      sortCriterion = buildRelevanceSortCriterion();
      break;
    case 'date':
      sortCriterion = buildDateSortCriterion(
        sortDirection === 'ascending' ? SortOrder.Ascending : SortOrder.Descending
      );
      break;
    case 'field':
      sortCriterion = buildFieldSortCriterion(
        sortField,
        sortDirection === 'ascending' ? SortOrder.Ascending : SortOrder.Descending
      );
      break;
    default:
      sortCriterion = buildRelevanceSortCriterion();
  }
  return sortCriterion;
};

export const buildEngineAsync = async (organizationId: string) => {
  if (organizationId) {
    const accessToken = await currentAccessToken(organizationId);
    if (accessToken) {
      const engine = buildEngine(accessToken, organizationId);

      return engine;
    }
  }
  return;
};

export const buildEngine = (accessToken: string, organizationId: string) => {
  const engine = buildSearchEngine({
    configuration: {
      platformUrl: platformUrl(),
      organizationId,
      accessToken,
      renewAccessToken: async () => await renewAccessToken(organizationId),
      search: {
        preprocessSearchResponseMiddleware: (response) => {
          response.body.results.forEach((result) => {
            // Ideally we would use the siteName and language to do a targetHostName
            // lookup and build the URL here, but, since this happens client side,
            // we do that during indexing and just do the swap here
            if (
              result.raw['sc_url'] &&
              typeof result.raw['sc_url'] == 'string' &&
              result.raw['sc_url'] != result.clickUri
            ) {
              result.clickUri = result.raw['sc_url'];
            }
            return result;
          });
          return response;
        },
      },
    },
  });

  const FieldActionCreators = loadFieldActions(engine);
  const action = FieldActionCreators.registerFieldsToInclude(['sc_url']);
  engine.dispatch(action);

  return engine;
};

export type LayoutType = 'list' | 'table' | 'grid' | 'mashup' | 'video' | 'video-gallery-dynamic';

export const getFieldsToInclude = (
  resultEntities:
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[]
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.ResultColumn[]
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[]
    | Feature.EnterpriseWeb.Enterprise.Components.General.PageMashupDynamic.ResultItem[]
    | Feature.EnterpriseWeb.Enterprise.Elements.Search.VideoResultItem[]
    | XupDynamicResultItem[],
  layoutType: LayoutType
): string[] => {
  const fields: string[] = [];

  switch (layoutType) {
    case 'list':
    case 'grid':
    case 'mashup':
    case 'video':
    case 'video-gallery-dynamic':
      resultEntities?.forEach((item) => {
        for (const searchField in item?.fields) {
          const field = getEnum<string>(item.fields[searchField as keyof unknown]);
          if (field && !fields?.includes(field)) {
            fields.push(field);
          }
        }
      });
      break;
    case 'table':
      resultEntities?.forEach((item) => {
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

  return fields;
};

export type ResultEntities =
  | Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[]
  | Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[]
  | Feature.EnterpriseWeb.Enterprise.Components.General.PageMashupDynamic.ResultItem[]
  | Feature.EnterpriseWeb.Enterprise.Elements.Search.VideoResultItem[];

export const getResultItemIndex = (
  resultEntities: ResultEntities,
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

export const checkHostNameInMediaURL = (url: string): string => {
  if (!url.startsWith('https')) {
    return `${process.env.SITECORE_API_HOST}${url}`;
  }

  return url;
};

export const replaceTokenInCoveoExpression = (
  expression: string,
  userAffiliateId = '',
  pageAffiliateId = '',
  featureToggles: FeatureToggles,
  currentJobCategory = ''
): string => {
  const TOKENS = [
    {
      token: 'ew_useraffiliateid',
      value: userAffiliateId,
      toggle: featureToggles.CoveoUserAffiliateToggle,
    },
    {
      token: 'ew_pageaffiliateid',
      value: pageAffiliateId,
      toggle: featureToggles.CoveoPageAffiliateToggle,
    },
    {
      token: 'ew_currentjobcategory',
      value: currentJobCategory,
      toggle: featureToggles.CoveoJobCategoryToggle,
    },
  ];

  let updatedExpression = expression;

  TOKENS.forEach(({ token, value, toggle }) => {
    // Replace Token only if the coveo expression has the token
    if (updatedExpression?.includes(token) && value !== '') {
      toggle ? (updatedExpression = updatedExpression.replace(token, value)) : null;
    }
  });

  return updatedExpression;
};
