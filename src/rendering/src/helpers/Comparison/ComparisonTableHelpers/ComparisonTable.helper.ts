/***  Disabling no-explicit-any for whole file as this file uses proxy objects for handling fucntionality */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageFieldValue } from '@sitecore-jss/sitecore-jss-react';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComparisonObjectProps, SeriesTitle } from './ComparisonTable.Types';
import { ComparisonTableProductsProps } from 'components/product/ComparisonTableProducts/ComparisonTableProducts';
import { getEnum } from 'lib/utils';
import { SitecoreIds } from 'lib/constants';
import { guidEquals } from 'lib/utils/string-utils';

const getValueByKey = (object: Item, key: string): string | string[] | ImageField[] | unknown => {
  if (object.fields) {
    if ((object.fields[key] as Item)?.templateName === 'Swatch Collection') {
      const _swatchCollection = (
        object.fields[key] as Feature.EnterpriseWeb.Enterprise.Elements.Swatches.SwatchCollection
      ).fields;

      return {
        swatchCollectionComments: _swatchCollection.swatchCollectionComments.value || '',
        swatches: _swatchCollection.swatches?.map(
          (swatch) => (swatch.fields.swatchImage as ImageField)?.value || undefined
        ),
      };
    } else if (Array.isArray(object.fields[key])) {
      // If we don't get swatches as swatch collection, we'll get them as a separate swatch objects in array
      const isSwatchArray =
        (object.fields[key] as []).length > 0 &&
        (object.fields[key] as [])?.every((item: Item) => item.templateName === 'Swatch');

      if (isSwatchArray) {
        return {
          swatches: (
            object.fields[key] as Array<Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch>
          )?.map((swatch) => (swatch.fields.swatchImage as ImageField)?.value || undefined),
        };
      }

      // In order to render product type links we need to lookup for windowsProductTypes or doorsProductTypes key
      if (key === 'windowsProductTypes' || key === 'doorsProductTypes') {
        return [
          ...(object.fields[key] as [])?.map((item: any) => {
            const productTypeLookupFields = getProductTypeLookupField(item);

            if (productTypeLookupFields && item.fields?.[productTypeLookupFields]) {
              return {
                href: item.fields.productDetailPageLink.value.href,
                text: item.fields?.[productTypeLookupFields]?.fields.productTypeName.value,
              };
            }
            return console.log(`${productTypeLookupFields} field does not exist in`, item);
          }),
        ];
      }

      return [
        ...(object.fields[key] as [])?.map((item: any) => {
          return Object.keys(item.fields).map(
            (key) => item.fields[key]?.value && item.fields[key].value
          );
        }),
      ];
    } else if (key === 'priceLevel') {
      // At render time we need to differentiate priceLevel from other fields.
      // So, We're converting priceLevel to an object
      return {
        priceLevel: (
          object.fields[
            key as keyof Feature.EnterpriseWeb.AndersenWindows.Data.Products.Series['fields']
          ] as Feature.EnterpriseWeb.Enterprise.Data.Products.PriceLevel
        )?.fields?.priceLevelText.value,
      };
    } else if (
      Object.keys(
        object.fields[
          key as keyof Feature.EnterpriseWeb.AndersenWindows.Data.Products.Series['fields']
        ] || {}
      ).includes('fields')
    ) {
      return Object.keys(
        (
          object.fields[
            key as keyof Feature.EnterpriseWeb.AndersenWindows.Data.Products.Series
          ] as Item
        ).fields
      ).map(
        (item) =>
          (
            (
              object.fields[
                key as keyof Feature.EnterpriseWeb.AndersenWindows.Data.Products.Series
              ] as Item
            ).fields[item] as Field<string>
          ).value
      );
    }

    return (
      object.fields[
        key as keyof Feature.EnterpriseWeb.AndersenWindows.Data.Products.Series['fields']
      ] as Field<string>
    )?.value;
  } else {
    return '';
  }
};

export const getSeriesTitles = (object: Item, seriesIndex: number): SeriesTitle | undefined => {
  if (object?.fields) {
    return {
      seriesIndex: seriesIndex,
      // If series comparison then consider seriesLandingPageCTA else if product comparison then consider productDetailPageLink to get url
      url:
        (object?.fields.seriesLandingPageCTA as LinkField) ||
        (object?.fields.productDetailPageLink as LinkField),
      title:
        (object.fields?.seriesTitle as Field<string>)?.value ||
        ((object.fields?.productSeries as Item)?.fields.productTypeName as Field<string>)?.value,
      productTypeTitle: (() => {
        const productType = (
          (object.fields?.productType as Item)?.fields.productTypeName as Field<string>
        )?.value;

        const productTypeLookupField =
          ProductTypeConstants[productType as keyof typeof ProductTypeConstants];

        return (
          (object.fields[productTypeLookupField] as Item)?.fields.productTypeName as Field<string>
        )?.value;
      })(),
      description:
        (object.fields.seriesSubtitle as Field<string>)?.value ||
        (object.fields?.productSubtitle as Field<string>)?.value,
      image:
        (object.fields.seriesImage as Field<ImageFieldValue>)?.value ||
        (object.fields.productImage as Field<ImageFieldValue>)?.value,
      imageMobile: (object.fields.productImageMobile as Field<ImageFieldValue>)?.value,
      productName: (object.fields?.productName as Field<string>)?.value,
    };
  } else {
    return undefined;
  }
};

export const getComparisonObject = (
  fields: Feature.EnterpriseWeb.Enterprise.Components.Product.ComparisonTable.ComparisonSeriesTable['fields'],
  isProductComparison = false
): ComparisonObjectProps | null => {
  if (!fields) {
    return null;
  }

  const seriesToCompare: Item[] = isProductComparison ? fields.products : fields.seriesToCompare;

  const getTables = () => {
    const comparableObject: any = {};

    const { tableStructure } = fields;

    tableStructure?.map((tableElement: any) => {
      const tableFieldName = getEnum<string>(tableElement.fields.valueFieldName);

      if (
        tableFieldName &&
        tableElement &&
        guidEquals(
          tableElement.templateId,
          SitecoreIds.Feature.Data.Elements.Product.ComparisonSubsection.templateId
        )
      ) {
        comparableObject[tableFieldName] = [
          ...seriesToCompare.map(
            (series: Item) =>
              tableElement.fields.valueFieldName && getValueByKey(series, tableFieldName)
          ),
        ];
      }
    });

    return comparableObject;
  };

  if (seriesToCompare) {
    return {
      seriesTitles: [...seriesToCompare?.map((series, index) => getSeriesTitles(series, index))],
      ...getTables(),
    };
  } else {
    return null;
  }
};

const ProductTypeConstants = {
  'Big Door': 'exteriorDoorProductType',
  'Exterior Door': 'exteriorDoorProductType',
  'Storm Door': 'stormDoorProductType',
  Window: 'windowProductType',
};

export const getProductTypeLookupField = (product: any): string | undefined => {
  const productType = product.fields?.productType?.fields.productTypeName.value || '';

  if (productType) {
    return ProductTypeConstants[productType as keyof typeof ProductTypeConstants];
  }
  return undefined;
};

export const groupProductStyles = (fields: ComparisonTableProductsProps['fields']): any => {
  const groupedProducts: any = {
    products: [],
    productStyles: [],
  };

  fields?.products.forEach((product: any) => {
    const productTypeLookupField = getProductTypeLookupField(product);

    if (productTypeLookupField) {
      const productTypeLookupFieldValue =
        product.fields[productTypeLookupField]?.fields.productTypeName.value;

      if (product.fields[productTypeLookupField]) {
        if (
          !groupedProducts.products[
            product.fields[productTypeLookupField].fields.productTypeName
              .value as keyof typeof groupedProducts
          ]
        ) {
          groupedProducts.products[productTypeLookupFieldValue] = [product];
          groupedProducts.productStyles = [
            ...groupedProducts.productStyles,
            {
              productTitle: product.fields[productTypeLookupField]?.fields.productTypeName.value,
              productDescription:
                product.fields[productTypeLookupField]?.fields.productTypeDescription.value,
              productImage: product.fields[productTypeLookupField]?.fields.productTypeImage.value,
            },
          ];
        } else {
          groupedProducts.products[productTypeLookupFieldValue].push(product);
        }
      }
    }
  });

  return groupedProducts;
};
