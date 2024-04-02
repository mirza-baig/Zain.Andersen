// Global
import { SitecoreIds } from 'src/lib/constants';
import { toFraction } from './js/utils';
import TagManager from 'react-gtm-module';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Components
import { BouncyCardBaseProps } from 'src/helpers/BouncyCard/BouncyCard';
import { DesignToolOptionProps, DesignToolProductProps, DesignToolProps } from './DesignTool';
import { guidEquals } from 'lib/utils/string-utils';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

// DesignToolDataProps is the model that gets created from the Sitecore data.
// This model is used to display the component, whereas AWViewModel is used as
// the data model that contains the user selections.
export type DesignToolDataProps = {
  logoImage: ImageField | undefined;
  backgroundImage: ImageField | undefined;
  renoworks: {
    prefix: string | undefined;
    apiHost: string | undefined;
  };
  requestAQuote: LinkField | undefined;
  heading: Field<string> | undefined;
  options: Array<DesignToolOptionDataProps | null>;
  products: Array<DesignToolProductProps | null>;
  favoritesLink: LinkField | undefined;
};

export type DesignToolOptionDataProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parentId: any | undefined;
  options: DesignToolOptionDataProps[];
  products: DesignToolProductProps[];
} & BouncyCardBaseProps;

const MapOptions = (options: DesignToolOptionProps[]): DesignToolOptionProps[] => {
  if (options) {
    const filteredOptions = options.filter(FilterForOption);
    const newOptions = filteredOptions
      .flatMap((_) => MapOptions(_?.fields?.children))
      ?.filter(FilterForNotNull);
    if (newOptions?.length > 0) {
      return [...new Set([...filteredOptions, ...newOptions])];
    } else if (filteredOptions?.length > 0) {
      return filteredOptions;
    }
  }

  return [];
};

const StringToGuid = (value: string) => {
  return value
    ?.toLowerCase()
    ?.replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/, '$1-$2-$3-$4-$5');
};

export const MapOption = (
  allOptions: DesignToolOptionProps[],
  option: DesignToolOptionProps
): DesignToolOptionDataProps | null => {
  const optionFields = option?.fields;
  let parentId = option.parentId;
  if (!parentId && allOptions) {
    parentId = allOptions.filter((currentOption) =>
      currentOption?.fields?.children?.find((child: Item) => child?.id === option.id)
    )[0]?.id;
  }

  if (optionFields) {
    return {
      id: option.id,
      parentId: parentId,
      name: option.name,
      ctaText: optionFields.ctaText,
      heading: optionFields.optionHeading,
      image: MapImage(optionFields.optionImage),
      icon: MapImage(optionFields.optionIcon, 50, 100),
      step: {
        heading: optionFields.stepHeading,
        subhead: optionFields.stepSubhead,
        copy: optionFields.stepCopy,
      },
      isPerfectMatch: false,
      property: '',
      help: !optionFields?.helpCTAText
        ? null
        : {
            cta: optionFields.helpCTAText,
            popup: {
              text: optionFields.helpText,
              image1: MapImage(optionFields.helpImage1),
              image2: MapImage(optionFields.helpImage2),
              image3: MapImage(optionFields.helpImage3),
              image4: MapImage(optionFields.helpImage4),
              image5: MapImage(optionFields.helpImage5),
              mobileImage1: MapImage(optionFields.helpMobileImage1),
              mobileImage2: MapImage(optionFields.helpMobileImage2),
              mobileImage3: MapImage(optionFields.helpMobileImage3),
              mobileImage4: MapImage(optionFields.helpMobileImage4),
              mobileImage5: MapImage(optionFields.helpMobileImage5),
            },
          },
      options: optionFields?.children?.filter(FilterForOption).map((_: Item) => _.id) ?? [],
      products: optionFields?.children?.filter(FilterForProduct).map((_: Item) => _.id) ?? [],
    };
  }

  return null;
};

const MapProducts = (options: DesignToolOptionProps[]): DesignToolProductProps[] | null => {
  if (options) {
    const productSet2 = options
      .flatMap((_) => _?.fields?.children)
      ?.filter(FilterForProduct)
      ?.filter(FilterForNotNull);
    return productSet2;
  }
  return null;
};

export const MapProduct = (
  allOptions: DesignToolOptionProps[],
  product: DesignToolProductProps
): DesignToolProductProps | null => {
  if (product && product.fields) {
    const productConfigurationFields = product.fields.productConfiguration?.fields;
    const productItemFields = product.fields?.product?.fields;
    const productConfiguration = MapProductConfiguration(productConfigurationFields);
    let parentId = product.parentId;

    if (!parentId && allOptions) {
      parentId = allOptions.filter((currentOption) =>
        currentOption?.fields?.children?.find((child: Item) => child?.id === product.id)
      )[0]?.id;
    }

    const returnValue = {
      id: product.id,
      parentId: parentId,
      name: product.name,
      series: productItemFields?.productSeries?.fields?.productTypeName,
      productType: productItemFields?.productType?.fields?.productTypeName,
      category: productItemFields?.productName,
      productId: productItemFields?.productId?.value,
      renoworksKey: productItemFields?.renoworksKey?.value?.toLowerCase(),
      cost: productItemFields?.priceLevel,
      bullet1: product.fields.bulletText1,
      bullet2: product.fields.bulletText2,
      bullet3: product.fields.bulletText3,
      image1: product.fields.productImage1,
      image2: product.fields.productImage2,
      image3: product.fields.productImage3,
      image4: product.fields.productImage4,
      image5: MapCappedImage(product.fields.productImage5),
      youTubeId1: product.fields.videoYouTubeId1,
      youTubeId2: product.fields.videoYouTubeId2,
      youTubeId3: product.fields.videoYouTubeId3,
      youTubeId4: product.fields.videoYouTubeId4,
      youTubeId5: product.fields.videoYouTubeId5,
      links: {
        detail: MapLink(productItemFields?.productDetailPageLink),
        findADealer: MapLink(productItemFields?.findADealerLink),
      },
      text: {
        summary: product.fields.summaryText,
        sizing: product.fields.sizingText,
        customSizing: product.fields.customSizingText,
        disclaimer: product.fields.disclaimerText,
        glass: product.fields.glassText,
        homeDepot: {
          buyCta: product.fields.homeDepotBuyCTAText,
          specialOrderCta: product.fields.homeDepotSpecialOrderCTAText,
          specialOrderLightbox: product.fields.homeDepotSpecialOrderLightboxText,
        },
      },
      displayUniversalHandingLogo: product.fields.displayUniversalHandingLogo,
      designHeading: product.fields.designHeading,
      designSubhead: product.fields.designSubhead,
      summaryHeading: product.fields.summaryHeading,
      summarySubhead: product.fields.summarySubhead,
      configuration: productConfiguration ? [productConfiguration] : undefined, // Put product configuration into an array to maintain legacy
      tertiaryLinks: {
        sizeChartsLink: MapLink(product.fields.sizeChartsLink),
        customSizesLink: MapLink(product.fields.customSizesLink),
      },
      ctaText: product.fields.ctaText,
      relatedProductId: StringToGuid(product.fields.relatedProduct?.id),
      relatedProduct: product.fields.relatedProduct,
      bazaarvoice: {
        productId: productItemFields?.bazaarvoiceProductId?.value,
      },
      feature: {
        image: MapImage(product.fields.featureImage),
        text: product.fields.featureText,
      },
    };

    return returnValue;
  }

  return null;
};

// laprechaun through generated interface Feature.EnterpriseWeb.AndersenWindows.Data.Products.ProductConfiguration doesn't match with schema of data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapProductConfiguration = (productConfiguration: any) => {
  if (productConfiguration == null) {
    return null;
  }

  return {
    renoworksName: productConfiguration.product?.fields?.renoworksName?.value,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dimensionMappings: GetDimensionMappings(productConfiguration).map((_: any) =>
      MapDimensionMapping(_)
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

const MapImage = (image: ImageField, defaultWidth?: number, defaultHeight?: number) => {
  if (image == null) {
    return null;
  }

  if (defaultWidth || defaultHeight) {
    return {
      ...image,
      value: {
        ...image?.value,
        height: image?.value?.height || defaultHeight,
        width: image?.value?.width || defaultWidth,
      },
    };
  }

  return image;
};

const MapCappedImage = (image: ImageField) => {
  return image;
};

const MapLink = (link: LinkField) => {
  return link;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapDimensionMapping = (dimensionMapping: any) => {
  if (dimensionMapping == null) {
    return null;
  }

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

export const FilterForOption = (option: Item) => {
  return guidEquals(
    option?.templateId,
    SitecoreIds.Feature.Components.DesignTool.Option.TemplateId
  );
};

export const FilterForProduct = (option: Item) => {
  return guidEquals(
    option?.templateId,
    SitecoreIds.Feature.Components.DesignTool.Product.TemplateId
  );
};

export const FilterForNotNull = (option: Item) => {
  return option != null;
};

export const mapDesignToolPropsToViewModelProps = (props: DesignToolProps) => {
  const allOptions = MapOptions(props?.fields?.children);
  const filteredOptions = allOptions?.map((_: Item) => MapOption(allOptions, _));

  const filteredProducts = MapProducts(allOptions)?.map((_: Item) => MapProduct(allOptions, _));

  const returnValue: DesignToolDataProps = {
    logoImage: props?.fields?.logoImage,
    backgroundImage: props?.fields?.backgroundImage,
    renoworks: {
      prefix: process.env.NEXT_PUBLIC_EW_RENOWORKS_RWD,
      apiHost: process.env.NEXT_PUBLIC_EW_RENOWORKS_API_URL,
    },
    requestAQuote: props?.fields?.getAQuoteLink,
    heading: props?.fields?.moduleHeading,
    options: filteredOptions ?? [],
    products: filteredProducts ?? [],
    favoritesLink: props?.fields?.favoritesLink,
  };

  return returnValue;
};

// GTM helpers

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prepareDesignSelectionData = (action?: string, ...data: any) => {
  pushDesignSelectionGTM(Object.assign({}, ...data), action);
};

export const getSelectionsObject = (selections: Array<Record<string, unknown>>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return selections?.reduce((accumulator: any, currentValue: any) => {
    accumulator[currentValue.title] = currentValue.value;
    return accumulator;
  }, {});
};

export const pushDesignSelectionGTM = (data: Record<string, unknown>, action?: string) => {
  const _selections = getSelectionsObject(data._selectedOptions as Array<Record<string, unknown>>);

  TagManager.dataLayer({
    dataLayer: {
      event: 'design_tool_selection',
      product_category: (data?.productType as Field<string>)?.value || '', //Need to swap category with prooductType as per the GTM requirements
      product_series: (data?.series as Field<string>)?.value || '',
      product_type: (data?.category as Field<string>)?.value || '', //Need to swap category with prooductType as per the GTM requirements
      product_name: data?.name || '',
      product_id: _selections?.['Product ID#'] || '',
      interior_color: _selections?.['Interior Color'] || '',
      exterior_color: _selections?.['Exterior Color'] || '',
      user_action: action || '',
    },
  });
};
//
