'use client';

// Import dependencies
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  AttributeParameters,
  Renoworks,
  RenoworksProduct,
  RenoworksProductConfiguartion,
  RenoworksProductConfigurationDimensionMapping,
} from 'lib/renoworks';
import { toFraction } from 'lib/utils/string-utils';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Component } from 'src/helpers/Component';
import { Design } from './views/Design.helper';

// Define the type for the props of the ProductDesignTool component
export type ProductDesignToolProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.ProductDesignTool.ProductDesignTool;

// TODO: Move these to Utils
const MapProductConfiguration = (
  productConfiguration: Feature.EnterpriseWeb.AndersenWindows.Data.Products.ProductConfiguration
): RenoworksProductConfiguartion | undefined => {
  if (productConfiguration == null) {
    return undefined;
  }

  return {
    renoworksName: productConfiguration.fields?.configurationName?.value || '',
    dimensionMappings: GetDimensionMappings(productConfiguration).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (_: any) => MapDimensionMapping(_)
    ),
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetDimensionMappings = (product: any): any[] => {
  const ProductNumberIndex = 0;
  const WidthIndex = 1;
  const HeightIndex = 2;
  const GrilleLightsWideIndex = 3;
  const GrilleLightsHighIndex = 4;

  if (!product || !product?.productDimensions?.value) {
    return [];
  }

  const mappingArray = product?.productDimensions?.value
    ?.split(/(?:\n|\r)/g)
    .filter((x: string) => !!x);

  return mappingArray
    .map((preMappingString: string) => preMappingString.split('|'))
    .map((preMappingArray: string) => {
      return {
        productNumber: preMappingArray[ProductNumberIndex],
        width: preMappingArray[WidthIndex],
        height: preMappingArray[HeightIndex],
        grilleLightsWide: preMappingArray[GrilleLightsWideIndex],
        grilleLightsHigh: preMappingArray[GrilleLightsHighIndex],
        fractionalWidth: toFraction(preMappingArray[WidthIndex]),
        fractionalHeight: toFraction(preMappingArray[HeightIndex]),
      };
    });
};

const MapDimensionMapping = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dimensionMapping: any
): RenoworksProductConfigurationDimensionMapping => {
  return {
    productNumber: dimensionMapping.productNumber,
    width: dimensionMapping.width,
    height: dimensionMapping.height,
    fractionalWidth: dimensionMapping.fractionalWidth,
    fractionalHeight: dimensionMapping.fractionalHeight,
    grilleLightsWide: dimensionMapping.grilleLightsWide,
    grilleLightsHigh: dimensionMapping.grilleLightsHigh,
  };
};

function getUrlParts(url: string) {
  const urlParsed = new URL(url, 'https://server');

  const pathRegex = new RegExp(/([^#\?]*)(?:#\/(\d+)){0,1}(?:\?(.*)){0,1}/g);
  const matches = pathRegex.exec(urlParsed?.hash || '') ?? [];

  return {
    pathName: urlParsed?.pathname,
    attributeIndex: parseInt(matches[2]) || 0,
    query: urlParsed?.search?.replace('?', ''),
  };
}

// Define the ProductDesignTool component
const ProductDesignTool = (props: ProductDesignToolProps) => {
  const productConfiguration = MapProductConfiguration(props.fields?.productConfiguration?.fields);

  const product: RenoworksProduct = {
    renoworksKey: props.fields?.product?.fields?.renoworksKey?.value?.toLowerCase(),
    configuration: productConfiguration ? [productConfiguration] : undefined,
  };

  const pathMapper = (path: string) => {
    const urlParts = getUrlParts(path);

    const attributes: AttributeParameters = {};
    urlParts.query.split('&').forEach((x: string) => {
      const queryKeyValue = x.split('=');
      attributes[queryKeyValue[0] as keyof unknown] = decodeURIComponent(queryKeyValue[1]);
    });
    return attributes;
  };

  const apiConfig = {
    host: process.env.NEXT_PUBLIC_EW_RENOWORKS_API_URL || '',
    prefix: process.env.NEXT_PUBLIC_EW_RENOWORKS_RWD || '',
  };

  return (
    <Component variant="lg" dataComponent="tool/product-design-tool" {...props}>
      <Renoworks product={product} pathMapper={pathMapper} apiConfig={apiConfig} pageSize={0}>
        <Design {...props} />
      </Renoworks>
    </Component>
  );
};

// Export the ProductDesignTool component with datasource check
export default withDatasourceCheck()<ProductDesignToolProps>(ProductDesignTool);
