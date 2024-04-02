import { SitecoreIds } from 'lib/constants';
import { convertToSitecoreGuid, normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';

export class RbAAffiliateJobProperties {
  order = 110;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const jobTemplateId =
      SitecoreIds.Feature.RenewalByAndersen.Data.Affiliates.Datasources.Job.TemplateId.replace(
        /-/g,
        ''
      );

    if (indexableItem.templateId.indexOf(jobTemplateId) == -1) {
      return siteMapItem;
    }

    const lastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (lastUpdated && lastUpdated.value) {
      const normalized = normalizeSitecoreDateString(lastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
    }

    siteMapItem.metaData['siteLanguage'] = indexableItem.language;

    siteMapItem.metaData['siteName'] = indexableItem.siteName;

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }

    const affiliates = indexableItem.fields.getMultilistField('affiliates');
    if (affiliates && affiliates.targetItems.length > 0) {
      const value = affiliates.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('affiliateId')?.value
      );
      if (value) {
        siteMapItem.metaData[affiliates.name] = value.join(';');
      }
    }

    const jobTitle = indexableItem.fields.getTextField('jobTitle');
    if (jobTitle) {
      siteMapItem.metaData[jobTitle.name] = jobTitle.value;
    }

    const jobDescription = indexableItem.fields.getTextField('jobDescription');
    if (jobDescription) {
      siteMapItem.metaData[jobDescription.name] = jobDescription.value;
    }

    const jobWage = indexableItem.fields.getTextField('jobWage');
    if (jobWage) {
      siteMapItem.metaData[jobWage.name] = jobWage.value;
    }

    const jobSummary = indexableItem.fields.getRichTextField('jobSummary');
    if (jobSummary) {
      siteMapItem.metaData[jobSummary.name] = jobSummary.value;
    }

    const jobCategory = indexableItem.fields.getLookupField('jobCategory');
    if (jobCategory && jobCategory.targetItem) {
      const name = jobCategory.targetItem.fields.getTextField('categoryName');
      if (name) {
        siteMapItem.metaData[jobCategory.name] = name.value;
      }

      const image = jobCategory.targetItem.fields.getImageField('categoryImage');
      if (image && image.src) {
        const src = checkHostNameInMediaURL(image.src);
        siteMapItem.metaData[`job_${image.name}`] = src;
        siteMapItem.metaData[`job_${image.name}_alt`] = image.alt;
        siteMapItem.metaData[`job_${image.name}_height`] = image.height;
        siteMapItem.metaData[`job_${image.name}_width`] = image.width;
      }
    }

    const jobState = indexableItem.fields.getLookupField('jobState');
    if (jobState && jobState.targetItem) {
      const stateFullName = jobState.targetItem.fields.getTextField('FullName');
      const stateAbbreviation = jobState.targetItem.fields.getTextField('Abbreviation');
      if (stateFullName) {
        siteMapItem.metaData[`${jobState.name}_fullname`] = stateFullName.value;
      }
      if (stateAbbreviation) {
        siteMapItem.metaData[`${jobState.name}_abbreviation`] = stateAbbreviation.value;
      }
    }

    const jobCity = indexableItem.fields.getTextField('jobCity');
    if (jobCity) {
      siteMapItem.metaData[jobCity.name] = jobCity.value;
    }

    const jobTypes = indexableItem.fields.getMultilistField('jobTypes');
    if (jobTypes && jobTypes.targetItems.length > 0) {
      const value = jobTypes?.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('hoursDescription')?.value || ''
      );
      if (value) {
        siteMapItem.metaData[jobTypes.name] = value.join(';');
      }
    }

    const sitecoreGuid = convertToSitecoreGuid(indexableItem.id);

    const jobDetailPageUrl = `/careers/${sitecoreGuid}/${indexableItem.name
      .replace(/\s/g, '-')
      .toLowerCase()}`;
    siteMapItem.metaData['jobdetailspageurl'] = jobDetailPageUrl;

    return siteMapItem;
  }
}

export const rbaAffiliateJobPropertiesPlugin = new RbAAffiliateJobProperties();
