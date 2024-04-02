import { SitecoreIds } from 'lib/constants';
import { IndexableItem, SitemapItem } from '../..';

export class RbASearchProperties {
  order = 90;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const searchFieldsetsTemplateId =
      SitecoreIds.Foundation.RenewalbyAndersen.Fieldsets.Search._SearchFieldsets.replace(/-/g, '');
    if (indexableItem.allTemplateIds.indexOf(searchFieldsetsTemplateId) == -1) {
      return siteMapItem;
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

    const windowType = indexableItem.fields.getMultilistField('windowType');
    if (windowType && windowType.targetItems.length > 0) {
      const value = windowType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[windowType.name] = value.join(';');
      }
    }

    const doorType = indexableItem.fields.getMultilistField('doorType');
    if (doorType && doorType.targetItems.length > 0) {
      const value = doorType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[doorType.name] = value.join(';');
      }
    }

    const careersSpotlight = indexableItem.fields.getMultilistField('careersSpotlight');
    if (careersSpotlight && careersSpotlight.targetItems.length > 0) {
      const value = careersSpotlight.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[careersSpotlight.name] = value.join(';');
      }
    }

    const community = indexableItem.fields.getMultilistField('community');
    if (community && community.targetItems.length > 0) {
      const value = community.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[community.name] = value.join(';');
      }
    }

    const contentTheme = indexableItem.fields.getMultilistField('contentTheme');
    if (contentTheme && contentTheme.targetItems.length > 0) {
      const value = contentTheme.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[contentTheme.name] = value.join(';');
      }
    }

    const contentType = indexableItem.fields.getMultilistField('contentType');
    if (contentType && contentType.targetItems.length > 0) {
      const value = contentType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[contentType.name] = value.join(';');
      }
    }

    const designer = indexableItem.fields.getMultilistField('designer');
    if (designer && designer.targetItems.length > 0) {
      const value = designer.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[designer.name] = value.join(';');
      }
    }

    const entryDoorStyle = indexableItem.fields.getMultilistField('entryDoorStyle');
    if (entryDoorStyle && entryDoorStyle.targetItems.length > 0) {
      const value = entryDoorStyle.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[entryDoorStyle.name] = value.join(';');
      }
    }

    const marketingCategories = indexableItem.fields.getMultilistField('marketingCategories');
    if (marketingCategories && marketingCategories.targetItems.length > 0) {
      const value = marketingCategories.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[marketingCategories.name] = value.join(';');
      }
    }

    const otherType = indexableItem.fields.getMultilistField('otherType');
    if (otherType && otherType.targetItems.length > 0) {
      const value = otherType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[otherType.name] = value.join(';');
      }
    }

    const patioDoorStyle = indexableItem.fields.getMultilistField('patioDoorStyle');
    if (patioDoorStyle && patioDoorStyle.targetItems.length > 0) {
      const value = patioDoorStyle.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[patioDoorStyle.name] = value.join(';');
      }
    }

    const people = indexableItem.fields.getMultilistField('people');
    if (people && people.targetItems.length > 0) {
      const value = people.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[people.name] = value.join(';');
      }
    }

    const process = indexableItem.fields.getMultilistField('process');
    if (process && process.targetItems.length > 0) {
      const value = process.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[process.name] = value.join(';');
      }
    }

    const productAttribute = indexableItem.fields.getMultilistField('productAttribute');
    if (productAttribute && productAttribute.targetItems.length > 0) {
      const value = productAttribute.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[productAttribute.name] = value.join(';');
      }
    }

    const product = indexableItem.fields.getMultilistField('product');
    if (product && product.targetItems.length > 0) {
      const value = product.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[product.name] = value.join(';');
      }
    }

    const region = indexableItem.fields.getMultilistField('region');
    if (region && region.targetItems.length > 0) {
      const value = region.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[region.name] = value.join(';');
      }
    }

    const statesProvince = indexableItem.fields.getMultilistField('statesProvince');
    if (statesProvince && statesProvince.targetItems.length > 0) {
      const value = statesProvince.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('FullName')?.value
      );
      if (value) {
        siteMapItem.metaData[statesProvince.name] = value.join(';');
      }
    }

    return siteMapItem;
  }
}

export const rbaSearchPropertiesPlugin = new RbASearchProperties();
