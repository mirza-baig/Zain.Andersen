import { extractURLParts } from 'lib/coveo';
import { SitecoreIds } from 'lib/constants';
import { ItemData, MashupStyle, PageStyle, ResultItem } from './Mashup.Types';
import { ImagePrimaryProps } from 'src/helpers/Media/ImagePrimary';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { normalizeGuid } from 'lib/utils/string-utils';

const pageTypes: Record<string, PageStyle> = {
  [normalizeGuid(SitecoreIds.Project.AndersenWindows.Pages.StandardPage.ItemId)]: 'standard-page',
  [normalizeGuid(SitecoreIds.Project.RenewalByAndersen.Pages.StandardPage.ItemId)]: 'standard-page',
  [normalizeGuid(SitecoreIds.Project.AndersenWindows.Pages.ArticlePage.ItemId)]: 'article-page',
  [normalizeGuid(SitecoreIds.Project.RenewalByAndersen.Pages.ArticlePage.ItemId)]: 'article-page',
  [normalizeGuid(SitecoreIds.Project.AndersenWindows.Pages.PrjectShowcasePage.ItemId)]:
    'project-showcase-page',
};

export const getItemData = (
  props: ResultItem,
  mashupStyle: MashupStyle,
  isFeaturedItem = false
): ItemData => {
  const { fields, templateId, url } = props;

  const pageType: PageStyle = templateId ? pageTypes[normalizeGuid(templateId)] : 'standard-page';

  const imageProps = {
    primaryImageCaption: {
      value: '',
    },
    primaryImage: isFeaturedItem
      ? (fields?.featuredImage?.value?.hasOwnProperty('src') && fields?.featuredImage) ||
        fields?.primaryImage
      : fields?.primaryImage,
    primaryImageMobile: isFeaturedItem
      ? (fields?.featuredImage?.value?.hasOwnProperty('src') && fields?.featuredImage) ||
        fields?.primaryImageMobile
      : fields?.primaryImageMobile,
    primaryImageMobileFocusArea: fields.primaryImageMobileFocusArea,
  };

  const ctaProps = {
    cta1Link: {
      value: {
        ...extractURLParts(url),
        text: 'Read More',
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
          value: mashupStyle !== 'feature-image-only' && isFeaturedItem ? 'primary' : 'link',
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
  };

  const lookupObject = {
    eyebrow: {
      'standard-page': fields.siteSearchEyebrow?.value,
      'article-page': fields.articleCategory?.[0]?.fields?.title.value,
      'project-showcase-page': fields.siteSearchEyebrow?.value,
    },
    headline: {
      'standard-page': fields.openGraphTitle?.value || fields.siteSearchHeadline?.value,
      'article-page': fields.articleTitle?.value,
      'project-showcase-page': fields.projectShowcaseTitle?.value,
    },
    description: {
      'standard-page': fields.openGraphDescription?.value || fields.siteSearchDescription?.value,
      'article-page': fields.articleDescription?.value,
      'project-showcase-page': fields.projectShowcaseDescription?.value,
    },
  };

  return {
    eyebrow: lookupObject.eyebrow[pageType] || '',
    headline: lookupObject.headline[pageType] || '',
    description: lookupObject.description[pageType] || '',
    image: { fields: imageProps } as ImagePrimaryProps,
    cta: { fields: ctaProps } as Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta1,
  };
};
