import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';

export class RbAAffiliateShowroomProperties {
  order = 110;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const showroomTemplateId =
      SitecoreIds.Feature.RenewalByAndersen.Data.Affiliates.Datasources.Showroom.TemplateId.replace(
        /-/g,
        ''
      );

    if (indexableItem.templateId.indexOf(showroomTemplateId) == -1) {
      return siteMapItem;
    }

    const lastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (lastUpdated && lastUpdated.value) {
      const normalized = normalizeSitecoreDateString(lastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
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

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }
    const showRoomName = indexableItem.fields.getTextField('showroomName');
    if (showRoomName) {
      siteMapItem.metaData[showRoomName.name] = showRoomName.value;
    }
    const showRoomLocationPhoneNumber = indexableItem.fields.getTextField('locationPhoneNumber');
    if (showRoomLocationPhoneNumber) {
      siteMapItem.metaData[`showroom_${showRoomLocationPhoneNumber.name}`] =
        showRoomLocationPhoneNumber.value;
    }
    const showRoomHours = indexableItem.fields.getNameValueListField('hours');
    if (showRoomHours && showRoomHours.values?.length > 0) {
      siteMapItem.metaData[`showroom_${showRoomHours.name}`] = JSON.stringify(showRoomHours.values);
    }
    const showRoomAddressLine1 = indexableItem.fields.getTextField('addressLine1');
    if (showRoomAddressLine1) {
      siteMapItem.metaData[`showroom_${showRoomAddressLine1.name}`] = showRoomAddressLine1.value;
    }
    const showRoomAddressLine2 = indexableItem.fields.getTextField('addressLine2');
    if (showRoomAddressLine2) {
      siteMapItem.metaData[`showroom_${showRoomAddressLine2.name}`] = showRoomAddressLine2.value;
    }
    const showRoomCity = indexableItem.fields.getTextField('city');
    if (showRoomCity) {
      siteMapItem.metaData[`showroom_${showRoomCity.name}`] = showRoomCity.value;
    }
    const showRoomPostalCode = indexableItem.fields.getTextField('postalCode');
    if (showRoomPostalCode) {
      siteMapItem.metaData[`showroom_${showRoomPostalCode.name}`] = showRoomPostalCode.value;
    }
    const showRoomState = indexableItem.fields.getLookupField('state');
    if (showRoomState && showRoomState.targetItem) {
      const stateFullName = showRoomState.targetItem.fields.getTextField('FullName');
      const stateAbbreviation = showRoomState.targetItem.fields.getTextField('Abbreviation');
      if (stateFullName) {
        siteMapItem.metaData[`showroom_${showRoomState.name}_fullname`] = stateFullName.value;
      }
      if (stateAbbreviation) {
        siteMapItem.metaData[`showroom_${showRoomState.name}_abbreviation`] =
          stateAbbreviation.value;
      }
    }

    const showRoomPage = indexableItem.fields.getLinkField('showroomPage');
    if (showRoomPage && showRoomPage.url) {
      siteMapItem.metaData[showRoomPage.name] = showRoomPage.url;
    }

    return siteMapItem;
  }
}

export const rbaAffiliateShowroomPropertiesPlugin = new RbAAffiliateShowroomProperties();
