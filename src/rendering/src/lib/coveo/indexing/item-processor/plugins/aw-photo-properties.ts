import { SitecoreIds } from 'lib/constants';
import { IndexableItem, SitemapItem } from '../..';

export class AWPhotoProperties {
  order = 65;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const photoTemplateId =
      SitecoreIds.Feature.AndersenWindows.Data.Photos.Photo.TemplateId.replace(/-/g, '');
    if (indexableItem.templateId.indexOf(photoTemplateId) == -1) {
      return siteMapItem;
    }

    const productSeries = indexableItem.fields.getMultilistField('productSeries');
    if (productSeries && productSeries.targetItems.length > 0) {
      const value = productSeries.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[productSeries.name] = value.join(';');
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

    const view = indexableItem.fields.getMultilistField('view');
    if (view && view.targetItems.length > 0) {
      const value = view.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[view.name] = value.join(';');
      }
    }

    const roomType = indexableItem.fields.getMultilistField('roomType');
    if (roomType && roomType.targetItems.length > 0) {
      const value = roomType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[roomType.name] = value.join(';');
      }
    }

    const projectType = indexableItem.fields.getMultilistField('projectType');
    if (projectType && projectType.targetItems.length > 0) {
      const value = projectType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[projectType.name] = value.join(';');
      }
    }

    const buildingSubType = indexableItem.fields.getMultilistField('buildingSubType');
    if (buildingSubType && buildingSubType.targetItems.length > 0) {
      const value = buildingSubType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[buildingSubType.name] = value.join(';');
      }
    }

    const buildingType = indexableItem.fields.getMultilistField('buildingType');
    if (buildingType && buildingType.targetItems.length > 0) {
      const value = buildingType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[buildingType.name] = value.join(';');
      }
    }

    return siteMapItem;
  }
}

export const awPhotoPropertiesPlugin = new AWPhotoProperties();
