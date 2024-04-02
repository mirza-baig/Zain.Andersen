import { SitecoreIds } from 'lib/constants';
import {
  normalizeSitecoreDateString,
  normalizeSitecoreDateStringFormatted,
} from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';

export class RbAAffiliateEventProperties {
  order = 100;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const eventTemplateId =
      SitecoreIds.Feature.RenewalByAndersen.Data.Affiliates.Datasources.Event.TemplateId.replace(
        /-/g,
        ''
      );
    if (indexableItem.templateId.indexOf(eventTemplateId) === -1) {
      return siteMapItem;
    }

    const lastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (lastUpdated && lastUpdated.value) {
      const normalized = normalizeSitecoreDateString(lastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
    }

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
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

    const eventName = indexableItem.fields.getTextField('eventName');
    if (eventName) {
      siteMapItem.metaData[eventName.name] = eventName.value;
    }

    const eventDescription = indexableItem.fields.getTextField('eventDescription');
    if (eventDescription) {
      siteMapItem.metaData[eventDescription.name] = eventDescription.value;
    }

    const eventAddress = indexableItem.fields.getTextField('eventAddress');
    if (eventAddress) {
      siteMapItem.metaData[eventAddress.name] = eventAddress.value;
    }

    const eventCity = indexableItem.fields.getTextField('eventCity');
    if (eventCity) {
      siteMapItem.metaData[eventCity.name] = eventCity.value;
    }

    const eventState = indexableItem.fields.getTextField('eventState');
    if (eventState) {
      siteMapItem.metaData[eventState.name] = eventState.value;
    }

    const eventZip = indexableItem.fields.getTextField('eventZip');
    if (eventZip) {
      siteMapItem.metaData[eventZip.name] = eventZip.value;
    }

    const startDate = indexableItem.fields.getDateField('startDate');
    if (startDate && startDate.value) {
      const dateSitecore = normalizeSitecoreDateStringFormatted(startDate.value);
      siteMapItem.metaData[`event_${startDate.name}`] = dateSitecore;
    }

    const endDate = indexableItem.fields.getDateField('endDate');
    if (endDate && endDate.value) {
      const dateSitecore = normalizeSitecoreDateStringFormatted(endDate.value);
      siteMapItem.metaData[`event_${endDate.name}`] = dateSitecore;
    }

    const eventTime = indexableItem.fields.getNameValueListField('eventTime');
    if (eventTime && eventTime.values?.length > 0) {
      siteMapItem.metaData[eventTime.name] = JSON.stringify(eventTime.values);
    }

    const eventCTA = indexableItem.fields.getLinkField('eventCTA');
    if (eventCTA) {
      siteMapItem.metaData[eventCTA.name] = eventCTA.url;
    }

    return siteMapItem;
  }
}

export const rbaAffiliateEventPropertiesPlugin = new RbAAffiliateEventProperties();
