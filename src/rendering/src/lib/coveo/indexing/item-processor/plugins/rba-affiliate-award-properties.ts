import { SitecoreIds } from 'lib/constants';
import { IndexableItem, SitemapItem } from '../..';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';

export class RbAAffiliateAwardProperties {
  order = 120;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const awardTemplateId =
      SitecoreIds.Feature.RenewalByAndersen.Data.Affiliates.Datasources.Award.TemplateId.replace(
        /-/g,
        ''
      );

    if (indexableItem.templateId.indexOf(awardTemplateId) == -1) {
      return siteMapItem;
    }

    siteMapItem.metaData['siteLanguage'] = indexableItem.language;
    siteMapItem.metaData['siteName'] = indexableItem.siteName;

    const affiliates = indexableItem.fields.getMultilistField('affiliates');
    if (affiliates && affiliates.targetItems.length > 0) {
      const value = affiliates.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('affiliateId')?.value
      );
      if (value) {
        siteMapItem.metaData[affiliates.name] = value.join(';');
      }
    }
    const awardImage = indexableItem.fields.getImageField('image');
    if (awardImage && awardImage.src) {
      const src = checkHostNameInMediaURL(awardImage.src);
      siteMapItem.metaData[`award_${awardImage.name}`] = src;
      siteMapItem.metaData[`award_${awardImage.name}_alt`] = awardImage.alt;
      siteMapItem.metaData[`award_${awardImage.name}_height`] = awardImage.height;
      siteMapItem.metaData[`award_${awardImage.name}_width`] = awardImage.width;
    }

    const awardHeadline = indexableItem.fields.getTextField('headline');
    if (awardHeadline) {
      siteMapItem.metaData[`award_${awardHeadline.name}`] = awardHeadline.value;
    }

    const awardDescription = indexableItem.fields.getRichTextField('description');
    if (awardDescription) {
      siteMapItem.metaData[`award_${awardDescription.name}`] = awardDescription.value;
    }

    const awardCTA = indexableItem.fields.getLinkField('cta');
    if (awardCTA) {
      siteMapItem.metaData[`award_${awardCTA.name}`] = awardCTA.url;
    }

    const awardLastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (awardLastUpdated && awardLastUpdated.value) {
      const normalized = normalizeSitecoreDateString(awardLastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
    }

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }

    return siteMapItem;
  }
}

export const rbaAffiliateAwardPropertiesPlugin = new RbAAffiliateAwardProperties();
