import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';

export class PhotoProperties {
  order = 60;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const basePhotoTemplateId =
      SitecoreIds.Foundation.Enterprise.BaseTemplates._BasePhoto.TemplateId.replace(/-/g, '');
    if (indexableItem.allTemplateIds.indexOf(basePhotoTemplateId) == -1) {
      return siteMapItem;
    }

    type RelatedPage = {
      url: string;
      pageTitle: string;
    };

    type RelatedPages = Array<RelatedPage>;

    const lastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (lastUpdated && lastUpdated.value) {
      const normalized = normalizeSitecoreDateString(lastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
    }

    siteMapItem.loc = siteMapItem.itemUri;

    siteMapItem.metaData['siteLanguage'] = indexableItem.language;

    siteMapItem.metaData['siteName'] = indexableItem.siteName;

    const photoTitle = indexableItem.fields.getTextField('photoTitle');
    if (photoTitle) {
      siteMapItem.metaData[photoTitle.name] = photoTitle.value;
    }

    const thumbnailImage = indexableItem.fields.getImageField('thumbnailImage');
    if (thumbnailImage && thumbnailImage.src) {
      const src = checkHostNameInMediaURL(thumbnailImage.src);
      siteMapItem.metaData[thumbnailImage.name] = src;
      siteMapItem.metaData[`${thumbnailImage.name}_alt`] = thumbnailImage.alt;
      siteMapItem.metaData[`${thumbnailImage.name}_height`] = thumbnailImage.height;
      siteMapItem.metaData[`${thumbnailImage.name}_width`] = thumbnailImage.width;
    }

    const fullImage = indexableItem.fields.getImageField('fullImage');
    if (fullImage && fullImage?.src) {
      const src = checkHostNameInMediaURL(fullImage.src);
      siteMapItem.metaData[fullImage.name] = src;
      siteMapItem.metaData[`${fullImage.name}_alt`] = fullImage.alt;
      siteMapItem.metaData[`${fullImage.name}_height`] = fullImage.height;
      siteMapItem.metaData[`${fullImage.name}_width`] = fullImage.width;
    }

    const relatedPages = indexableItem.fields.getMultilistField('relatedPages');
    if (relatedPages && relatedPages.targetItems.length > 0) {
      const value: RelatedPages = relatedPages.targetItems?.map(
        (targetItem): RelatedPage => ({
          url: targetItem.url,
          pageTitle: targetItem.fields.getTextField('pageTitle')?.value || '',
        })
      );
      if (value) {
        siteMapItem.metaData[relatedPages.name] = JSON.stringify(value);
      }
    }

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }

    return siteMapItem;
  }
}

export const photoPropertiesPlugin = new PhotoProperties();
