import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';
import { decimalToFraction } from 'lib/utils/dimension-conversion';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';

export class ProductProperties {
  order = 80;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const productConfigurationTemplateId =
      SitecoreIds.Feature.Data.Products.AW.ProductConfiguration.TemplateId.replace(/-/g, '');
    if (indexableItem.templateId.indexOf(productConfigurationTemplateId) == -1) {
      return siteMapItem;
    }

    const parentItem = indexableItem.parent as IndexableItem;

    const lastUpdated = GetLastUpdatedDate(indexableItem, parentItem);
    if (lastUpdated) {
      siteMapItem.lastmod = lastUpdated;
    }

    siteMapItem.metaData['siteLanguage'] = indexableItem.language;

    siteMapItem.metaData['siteName'] = indexableItem.siteName;

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }

    const productDimensions = indexableItem.fields.getTextField('productDimensions');
    if (productDimensions) {
      const value = productDimensions.value;
      if (value) {
        const dimensionMappings = value.split('\r\n');
        if (dimensionMappings && dimensionMappings.length > 0) {
          const dimensions: string[] = [];
          dimensionMappings
            .filter((e) => e)
            .map((dimension) => dimension.split('|'))
            .forEach(
              (d) =>
                d &&
                d.length > 0 &&
                d[1] &&
                d[2] &&
                dimensions.push(`${decimalToFraction(d[1])}" x ${decimalToFraction(d[2])}"`)
            );
          if (dimensions) {
            siteMapItem.metaData[productDimensions.name] = dimensions.join(';');
          }
        }
      }
    }

    const configurationName = indexableItem.fields.getTextField('configurationName');
    if (configurationName) {
      siteMapItem.metaData[configurationName.name] = configurationName.value;
    }

    const productImage = indexableItem.fields.getImageField('productImage');
    if (productImage && productImage.src) {
      const src = checkHostNameInMediaURL(productImage.src);
      siteMapItem.metaData[productImage.name] = src;
      siteMapItem.metaData[`${productImage.name}_alt`] = productImage.alt;
      siteMapItem.metaData[`${productImage.name}_height`] = productImage.height;
      siteMapItem.metaData[`${productImage.name}_width`] = productImage.width;
    }

    if (parentItem) {
      const productName = parentItem.fields.getTextField('productName');
      if (productName) {
        siteMapItem.metaData[productName.name] = productName.value;
      }

      const productId = parentItem.fields.getTextField('productId');
      if (productId) {
        siteMapItem.metaData[productId.name] = productId.value;
      }

      const productDetailPageLink = parentItem.fields.getLinkField('productDetailPageLink');
      if (productDetailPageLink) {
        siteMapItem.metaData[productDetailPageLink.name] = productDetailPageLink.url;
      }

      const sizingDocumentsPageLink = parentItem.fields.getLinkField('sizingDocumentsPageLink');
      if (sizingDocumentsPageLink) {
        siteMapItem.metaData[sizingDocumentsPageLink.name] = sizingDocumentsPageLink.url;
      }

      const productSeriesFacet = parentItem.fields.getLookupField('productSeriesFacet');
      if (productSeriesFacet) {
        const value = productSeriesFacet.targetItem?.fields.getTextField('title')?.value;
        if (value) {
          siteMapItem.metaData['productSeries'] = value;
        }
      }

      const productTypeFacet = parentItem.fields.getLookupField('productTypeFacet');
      if (productTypeFacet) {
        const value = productTypeFacet.targetItem?.fields.getTextField('title')?.value;
        if (value) {
          siteMapItem.metaData['productType'] = value;
        }
      }

      const productWindowTypeFacet = parentItem.fields.getLookupField('productWindowTypeFacet');
      if (productWindowTypeFacet) {
        const value = productWindowTypeFacet.targetItem?.fields.getTextField('title')?.value;
        if (value) {
          siteMapItem.metaData['windowType'] = value;
        }
      }

      const productDoorTypeFacet = parentItem.fields.getLookupField('productDoorTypeFacet');
      if (productDoorTypeFacet) {
        const value = productDoorTypeFacet.targetItem?.fields.getTextField('title')?.value;
        if (value) {
          siteMapItem.metaData['doorType'] = value;
        }
      }
    }

    return siteMapItem;
  }
}

const GetLastUpdatedDate = (item: IndexableItem, parentItem: IndexableItem): Date | undefined => {
  let itemUpdatedDate;
  let parentItemUpdatedDate;

  const itemLlastUpdatedField = item.fields.getDateField('lastUpdated');
  if (itemLlastUpdatedField && itemLlastUpdatedField.value) {
    itemUpdatedDate = new Date(normalizeSitecoreDateString(itemLlastUpdatedField.value));
  }

  const parentItemLastUpdatedField = parentItem?.fields.getDateField('lastUpdated');
  if (parentItemLastUpdatedField && parentItemLastUpdatedField.value) {
    parentItemUpdatedDate = new Date(normalizeSitecoreDateString(parentItemLastUpdatedField.value));
  }

  return itemUpdatedDate && parentItemUpdatedDate
    ? itemUpdatedDate > parentItemUpdatedDate
      ? itemUpdatedDate
      : parentItemUpdatedDate
    : itemUpdatedDate || parentItemUpdatedDate;
};

export const productPropertiesPlugin = new ProductProperties();
