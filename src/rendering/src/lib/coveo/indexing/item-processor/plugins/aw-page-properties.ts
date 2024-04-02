import { SitecoreIds } from 'lib/constants';
import { IndexableItem, SitemapItem } from '../..';
import { getProductIds } from 'lib/utils/get-product-ids';

export class AWPageProperties {
  order = 20;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const basePageId =
      SitecoreIds.Foundation.AndersenWindows.BaseTemplates.Pages._BaseAWPage.replace(/-/g, '');
    if (indexableItem.allTemplateIds.indexOf(basePageId) == -1) {
      return siteMapItem;
    }

    const productType = indexableItem.fields.getMultilistField('productType');
    if (productType) {
      const value = productType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[productType.name] = value.join(';');
      }
    }

    const doorStyle = indexableItem.fields.getMultilistField('doorType');
    if (doorStyle) {
      const value = doorStyle.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[doorStyle.name] = value.join(';');
      }
    }

    const windowStyle = indexableItem.fields.getMultilistField('windowType');
    if (windowStyle) {
      const value = windowStyle.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[windowStyle.name] = value.join(';');
      }
    }

    const productSeries = indexableItem.fields.getMultilistField('productSeries');
    if (productSeries) {
      const value = productSeries.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[productSeries.name] = value.join(';');
      }
    }

    const relatedProducts = indexableItem.fields.getMultilistField('relatedProducts');
    if (relatedProducts) {
      const productIds: string[] = [];
      relatedProducts.targetItems?.map((targetItem) =>
        targetItem.children.map((child) =>
          productIds.push(...getProductIds(child.fields?.getTextField('productDimensions')?.value))
        )
      );
      if (productIds.length > 0) {
        siteMapItem.metaData[relatedProducts.name] = productIds.join(';');
      }
    }

    return siteMapItem;
  }
}

export const awPagePropertiesPlugin = new AWPageProperties();
