import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { ChangeFrequency, IndexableItem, isChangeFrequency, SitemapItem } from '../..';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';

export class PageProperties {
  order = 10;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const basePageId = SitecoreIds.Foundation.Enterprise.Extensions._EnterpriseWebPage.replace(
      /-/g,
      ''
    );
    if (indexableItem.allTemplateIds.indexOf(basePageId) == -1) {
      return siteMapItem;
    }

    const lastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (lastUpdated && lastUpdated.value) {
      const normalized = normalizeSitecoreDateString(lastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
    }

    const priority = indexableItem.fields.getLookupField('sitemapPriority');
    if (priority) {
      const value = Number.parseFloat(
        priority.targetItem?.fields.getTextField('Value')?.value ?? ''
      );
      if (!isNaN(value)) {
        siteMapItem.priority = value;
      }
    }

    const changeFrequency = indexableItem.fields.getLookupField('sitemapChangeFrequency');
    if (changeFrequency) {
      const value = changeFrequency.targetItem?.fields.getTextField('Value')?.value ?? '';
      if (isChangeFrequency(value)) {
        siteMapItem.changefreq = value as ChangeFrequency;
      }
    }

    const pageTitle = indexableItem.fields.getTextField('pageTitle');
    if (pageTitle) {
      siteMapItem.metaData[pageTitle.name] = pageTitle.value;
    }

    const pageMetaDescription = indexableItem.fields.getTextField('pageMetaDescription');
    if (pageMetaDescription) {
      siteMapItem.metaData[pageMetaDescription.name] = pageMetaDescription.value;
    }

    siteMapItem.metaData['siteLanguage'] = indexableItem.language;

    siteMapItem.metaData['siteName'] = indexableItem.siteName;

    const eyebrow = indexableItem.fields.getTextField('siteSearchEyebrow');
    if (eyebrow) {
      siteMapItem.metaData[eyebrow.name] = eyebrow.value;
    }

    const siteSearchHeadline = indexableItem.fields.getTextField('siteSearchHeadline');
    if (siteSearchHeadline) {
      siteMapItem.metaData[siteSearchHeadline.name] = siteSearchHeadline.value;
    }

    const siteSearchDescription = indexableItem.fields.getRichTextField('siteSearchDescription');
    if (siteSearchDescription) {
      siteMapItem.metaData[siteSearchDescription.name] = siteSearchDescription.value;
    }

    const siteSearchImage = indexableItem.fields.getImageField('siteSearchImage');
    if (siteSearchImage && siteSearchImage.src) {
      const src = checkHostNameInMediaURL(siteSearchImage.src);
      siteMapItem.metaData[siteSearchImage.name] = src;
      siteMapItem.metaData[`${siteSearchImage.name}_alt`] = siteSearchImage.alt;
      siteMapItem.metaData[`${siteSearchImage.name}_height`] = siteSearchImage.height;
      siteMapItem.metaData[`${siteSearchImage.name}_width`] = siteSearchImage.width;
    }

    const featuredImage = indexableItem.fields.getImageField('featuredImage');
    if (featuredImage && featuredImage.src) {
      const src = checkHostNameInMediaURL(featuredImage.src);
      siteMapItem.metaData[featuredImage.name] = src;
      siteMapItem.metaData[`${featuredImage.name}_alt`] = featuredImage.alt;
      siteMapItem.metaData[`${featuredImage.name}_height`] = featuredImage.height;
      siteMapItem.metaData[`${featuredImage.name}_width`] = featuredImage.width;
    }

    const primaryImage = indexableItem.fields.getImageField('primaryImage');
    if (primaryImage && primaryImage.src) {
      const src = checkHostNameInMediaURL(primaryImage.src);
      siteMapItem.metaData[primaryImage.name] = src;
      siteMapItem.metaData[`${primaryImage.name}_alt`] = primaryImage.alt;
      siteMapItem.metaData[`${primaryImage.name}_height`] = primaryImage.height;
      siteMapItem.metaData[`${primaryImage.name}_width`] = primaryImage.width;
    }

    const primaryImageMobile = indexableItem.fields.getImageField('primaryImageMobile');
    if (primaryImageMobile && primaryImageMobile.src) {
      const src = checkHostNameInMediaURL(primaryImageMobile.src);
      siteMapItem.metaData[primaryImageMobile.name] = src;
      siteMapItem.metaData[`${primaryImageMobile.name}_alt`] = primaryImageMobile.alt;
      siteMapItem.metaData[`${primaryImageMobile.name}_height`] = primaryImageMobile.height;
      siteMapItem.metaData[`${primaryImageMobile.name}_width`] = primaryImageMobile.width;
    }

    const primaryImageMobileFocusArea = indexableItem.fields.getLookupField(
      'primaryImageMobileFocusArea'
    );
    if (primaryImageMobileFocusArea) {
      const value = primaryImageMobileFocusArea.targetItem?.fields.getTextField('Value');
      if (value) {
        siteMapItem.metaData[primaryImageMobileFocusArea.name] = value.value;
      }
    }

    const siteSearchTopic = indexableItem.fields.getLookupField('siteSearchTopic');
    if (siteSearchTopic) {
      const value = siteSearchTopic.targetItem?.fields.getTextField('title');
      if (value) {
        siteMapItem.metaData[siteSearchTopic.name] = value.value;
      }
    }

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }

    return siteMapItem;
  }
}

export const pagePropertiesPlugin = new PageProperties();
