/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  PerfectMatchOptionProps,
  PerfectMatchProps,
} from 'components/tool/PerfectMatch/PerfectMatch';
import { PerfectMatchResult, PerfectMatchModuleData } from './types';

const CustomAndNotSureSizes = ['not-surex', 'customx'];
const NotSureSize = ['not-surex'];

export const GetPerfectMatchHashForCurrentState = () => {
  return '';
};

export const MapSteps = (props: any) => {
  return {
    intro: {
      gtmAction: 'lets go',
      stepNumber: 0,
    },
    type: {
      property: 'productType',
      class: 'step-1',
      gtmAction: 'Type',
      stepNumber: 1,
    },
    windowStyle: {
      heading: props?.fields?.windowStyleHeading,
      copy: props?.fields?.windowStyleCopy,
      property: 'productStyle',
      class: 'step-2',
      stepNumber: 2,
      gtmAction: 'Style',
      nextStep: 'windowLocation',
    },
    windowLocation: {
      heading: props?.fields?.windowLocationHeading,
      copy: props?.fields?.windowLocationCopy,
      class: 'step-3',
      stepNumber: 3,
      gtmAction: 'Location',
      nextStep: 'windowCoastal',
      stateList: props?.fields?.stateList,
    },
    windowCoastal: {
      heading: props?.fields?.windowCoastalHeading,
      copy: props?.fields?.windowCoastalCopy,
      property: 'productCoastal',
      class: 'step-3',
      stepNumber: 3,
      gtmAction: 'Coastal',
      nextStep: 'windowProjectType',
      regions: props?.fields?.windowCoastalRegions?.map((_: any) => _?.fields?.Abbreviation?.value),
    },
    windowProjectType: {
      heading: props?.fields?.windowProjectTypeHeading,
      copy: props?.fields?.windowProjectTypeCopy,
      class: 'step-4',
      stepNumber: 4,
      gtmAction: 'Project',
      nextStep: 'windowPreferences',
    },
    windowPreferences: {
      heading: props?.fields?.windowPreferencesHeading,
      copy: props?.fields?.windowPreferencesCopy,
      class: 'step-5',
      stepNumber: 5,
      gtmAction: 'Preferences',
      nextStep: 'windowResults',
    },
    windowResults: {
      gtmAction: 'Recommended Products',
      stepNumber: 6,
    },
    doorStyle: {
      heading: props?.fields?.doorStyleHeading,
      copy: props?.fields?.doorStyleCopy,
      property: 'productStyle',
      class: 'step-2',
      stepNumber: 2,
      gtmAction: 'Style',
      nextStep: 'doorOperation',
    },
    doorOperation: {
      heading: props?.fields?.doorOperationHeading,
      copy: props?.fields?.doorOperationCopy,
      property: 'productOperation',
      class: 'step-2',
      stepNumber: 2,
      gtmAction: 'Operation',
      nextStep: 'doorPanelStyle',
    },
    doorPanelStyle: {
      heading: props?.fields?.doorPanelStyleHeading,
      copy: props?.fields?.doorPanelStyleCopy,
      property: 'productPanelStyle',
      class: 'step-2',
      stepNumber: 2,
      gtmAction: 'Panel Style',
      nextStep: 'doorSizeAndPanels',
    },
    doorSizeAndPanels: {
      heading: props?.fields?.doorSizeandPanelsHeading,
      copy: props?.fields?.doorSizeandPanelsCopy,
      property: 'productSize',
      class: 'step-3',
      stepNumber: 3,
      gtmAction: 'Size And Panels',
      nextStep: 'doorLocation',
    },
    doorLocation: {
      heading: props?.fields?.doorLocationHeading,
      copy: props?.fields?.doorLocationCopy,
      class: 'step-4',
      stepNumber: 4,
      gtmAction: 'Location',
      nextStep: 'doorCoastal',
      stateList: props?.fields?.stateList,
    },
    doorCoastal: {
      heading: props?.fields?.doorCoastalHeading,
      copy: props?.fields?.doorCoastalCopy,
      property: 'productCoastal',
      class: 'step-4',
      stepNumber: 4,
      gtmAction: 'Coastal',
      nextStep: 'doorProjectType',
      regions: props?.fields?.doorCoastalRegions?.map((_: any) => _?.fields?.Abbreviation?.value),
    },
    doorProjectType: {
      heading: props?.fields?.doorProjectTypeHeading,
      copy: props?.fields?.doorProjectTypeCopy,
      class: 'step-5',
      stepNumber: 5,
      gtmAction: 'Project',
      nextStep: 'doorPreferences',
    },
    doorPreferences: {
      heading: props?.fields?.doorPreferencesHeading,
      copy: props?.fields?.doorPreferencesCopy,
      class: 'step-5',
      stepNumber: 5,
      gtmAction: 'Preferences',
      nextStep: 'doorResults',
    },
    doorResults: {
      gtmAction: 'Recommended Products',
      stepNumber: 6,
    },
  };
};

export const MapProjectTypes = (props: any) => {
  return {
    options: [
      MapOption(props?.fields?.windowOption, 'windows'),
      MapOption(props.fields?.patioDoorOption, 'doors'),
    ],
    window: [
      MapOption(props?.fields?.windowNewConstructionPreferenceOption, 'newConstruction'),
      MapOption(props?.fields?.windowReplacementPreferenceOption, 'replacement'),
    ],
    door: [
      MapOption(props?.fields?.doorNewConstructionPreferenceOption, 'newConstruction'),
      MapOption(props?.fields?.doorReplacementPreferenceOption, 'replacement'),
    ],
  };
};

export const MapResults = (props: any) => {
  return props?.fields?.results?.map((_: any) => {
    const returnValue: PerfectMatchResult = {
      id: _.id,
      productDetails: {
        series: _.fields?.productSeries,
        category: _.fields?.productCategory,
        cost: _.fields?.productCost,
        description: _.fields?.productDescription,
        bullet1: _.fields?.bullet1Text,
        bullet2: _.fields?.bullet2Text,
        bullet3: _.fields?.bullet3Text,
        bullet4: _.fields?.bullet4Text,
        viewDetailsLink: MapCta(_.fields?.viewDetailsLink, _.fields?.viewDetailsButtonType),
        designLink: MapCta(_.fields?.designLink, _.fields?.designButtonType),
        findADealerLink: MapCta(_.fields?.findADealerLink, _.fields?.findADealerButtonType),
        image1: _.fields?.productImage1,
        image2: _.fields?.productImage2,
        image3: _.fields?.productImage3,
        image4: _.fields?.productImage4,
        image5: _.fields?.productImage5,
        resultHeroImage: _.fields?.resultHeroImage,
        resultOverlayImage: _.fields?.resultOverlayImage,
        imageCarousel: _.fields?.imageCarouselModule,
      },
      scores: {
        newConstruction: _.fields?.newConstructionScore,
        replacement: _.fields?.remodelingScore,
        customizable: _.fields?.customizableScore,
        energyEfficiency: _.fields?.energyEfficiencyScore,
        maintenance: _.fields?.maintenanceScore,
        value: _.fields?.valueScore,
        installation: _.fields?.installationScore,
        region1: _.fields?.region1Score,
        region2: _.fields?.region2Score,
        region3: _.fields?.region3Score,
        region4: _.fields?.region4Score,
        region5: _.fields?.region5Score,
        region6: _.fields?.region6Score,
        boost: _.fields?.boost,
        exteriorColor: _.fields?.exteriorColorScore,
        performanceConsideration: _.fields?.performanceConsiderationScore,
        blindsBetweenGlass: _.fields?.blindsBetweenGlassScore,
        interiorColor: _.fields?.interiorColorScore,
        productCoastal: _.fields?.coastalScore,
      },
      options: {
        productType: _.fields?.productType?.map((__: any) => __.id),
        productStyle: _.fields?.productStyle?.map((__: any) => __.id),
        'productSize:panelConfiguration': _.fields?.productSizeAndPanel?.map((__: any) => __.id),
        [('productSize:' + props?.fields?.singlePanelOption?.id) as keyof unknown]: null,
        [('productSize:' + props?.fields?.doublePanelOption?.id) as keyof unknown]: null,
        [('productSize:' + props?.fields?.triplePanelOption?.id) as keyof unknown]: null,
        [('productSize:' + props?.fields?.quadPanelOption?.id) as keyof unknown]: null,
        productPanelStyle: _.fields?.productPanelStyle?.map((__: any) => __.id),
        productCoastal: _.fields?.productCoastal?.map((__: any) => __.id),
        productOperation: _.fields?.productOperation?.map((__: any) => __.id),
      },
      variationOf: _.fields?.variationOf?.id,
    };

    if (props?.fields?.singlePanelOption?.id && _.fields?.singlePanelProductConfiguration) {
      returnValue.options[
        ('productSize:' + props?.fields?.singlePanelOption?.id) as keyof unknown
      ] = GetDimensionMappings(_.fields?.singlePanelProductConfiguration)
        .map((__: any) => `${__.fractionalWidth}x${__.fractionalHeight}`)
        .concat(!!_.fields?.customSizesAvailable?.value ? CustomAndNotSureSizes : NotSureSize);
    }
    if (props?.fields?.doublePanelOption?.id && _.fields?.doublePanelProductConfiguration) {
      returnValue.options[
        ('productSize:' + props?.fields?.doublePanelOption?.id) as keyof unknown
      ] = GetDimensionMappings(_.fields?.doublePanelProductConfiguration)
        .map((__: any) => `${__.fractionalWidth}x${__.fractionalHeight}`)
        .concat(!!_.fields?.customSizesAvailable?.value ? CustomAndNotSureSizes : NotSureSize);
    }
    if (props?.fields?.triplePanelOption?.id && _.fields?.triplePanelProductConfiguration) {
      returnValue.options[
        ('productSize:' + props?.fields?.triplePanelOption?.id) as keyof unknown
      ] = GetDimensionMappings(_.fields?.triplePanelProductConfiguration)
        .map((__: any) => `${__.fractionalWidth}x${__.fractionalHeight}`)
        .concat(!!_.fields?.customSizesAvailable?.value ? CustomAndNotSureSizes : NotSureSize);
    }
    if (props?.fields?.quadPanelOption?.id && _.fields?.quadPanelProductConfiguration) {
      returnValue.options[('productSize:' + props?.fields?.quadPanelOption?.id) as keyof unknown] =
        GetDimensionMappings(_.fields?.quadPanelProductConfiguration)
          .map((__: any) => `${__.fractionalWidth}x${__.fractionalHeight}`)
          .concat(!!_.fields?.customSizesAvailable?.value ? CustomAndNotSureSizes : NotSureSize);
    }

    return returnValue;
  });
};

export const MapPreferences = (props: any) => {
  const returnValue = {
    window: [
      MapOption(props?.fields?.windowCustomizablePreferenceOption, 'customizable'),
      MapOption(props?.fields?.windowEnergyEfficiencyPreferenceOption, 'energyEfficiency'),
      MapOption(props?.fields?.windowMaintenancePreferenceOption, 'maintenance'),
      MapOption(props?.fields?.windowValuePreferenceOption, 'value'),
      MapOption(props?.fields?.windowInstallationPreferenceOption, 'installation'),
      MapOption(props?.fields?.windowNonePreferenceOption, ''),
    ],
    door: [
      MapOption(props?.fields?.doorExteriorColorPreferenceOption, 'exteriorColor'),
      MapOption(
        props?.fields?.doorPerformanceConsiderationPreferenceOption,
        'performanceConsideration'
      ),
      MapOption(props?.fields?.doorMaintenancePreferenceOption, 'maintenance'),
      MapOption(props?.fields?.doorValuePreferenceOption, 'value'),
      MapOption(props?.fields?.doorBlindsBetweenGlassPreferenceOption, 'blindsBetweenGlass'),
      MapOption(props?.fields?.doorEnergyEfficiencyPreferenceOption, 'energyEfficiency'),
      MapOption(props?.fields?.doorInteriorColorPreferenceOption, 'interiorColor'),
      MapOption(props?.fields?.doorNonePreferenceOption, ''),
    ],
  };

  return returnValue;
};

export const MapRegions = (props: any) => {
  return {
    region1: props?.fields?.region1?.map((_: any) => _.Key),
    region2: props?.fields?.region2?.map((_: any) => _.Key),
    region3: props?.fields?.region3?.map((_: any) => _.Key),
    region4: props?.fields?.region4?.map((_: any) => _.Key),
    region5: props?.fields?.region5?.map((_: any) => _.Key),
    region6: props?.fields?.region6?.map((_: any) => _.Key),
  };
};

export const MapOptionIds = (props: any) => {
  return {
    type: {
      window: props?.fields?.windowOption?.id,
      patioDoor: props?.fields?.patioDoorOption?.id,
    },
    sizeAndPanel: {
      singlePanel: props?.fields?.singlePanelOption?.id,
      doublePanel: props?.fields?.doublePanelOption?.id,
      triplePanel: props?.fields?.triplePanelOption?.id,
      quadPanel: props?.fields?.quadPanelOption?.id,
    },
    doorStyle: {
      hinged: props?.fields?.hingedDoorOption?.id,
    },
    coastal: {
      yes: props?.fields?.coastalYesOption?.id,
    },
  };
};

export const MapTypeOptions = (props: any) => {
  return props?.fields?.results?.map((_: any) => _?.fields?.productType).flatMap((x: any) => x);
};

export const MapStyleOptions = (props: any) => {
  return props?.fields?.results?.map((_: any) => _?.fields?.productStyle).flatMap((x: any) => x);
};

export const MapPanelConfigurationOptions = (props: any) => {
  return props?.fields?.results
    ?.map((_: any) => _?.fields?.productSizeAndPanel)
    .flatMap((x: any) => x);
};

export const MapPanelStyle = (props: any) => {
  return props?.fields?.results
    ?.map((_: any) => _?.fields?.productPanelStyle)
    .flatMap((x: any) => x);
};

export const MapCoastal = (props: any) => {
  return props?.fields?.results?.map((_: any) => _?.fields?.productCoastal).flatMap((x: any) => x);
};

export const MapOperation = (props: any) => {
  return props?.fields?.results
    ?.map((_: any) => _?.fields?.productOperation)
    .flatMap((x: any) => x);
};

export const MapOptions = (props: any) => {
  let returnValue = MapTypeOptions(props)
    .map((_: any) => MapOption(_, 'productType'))
    .filter(FilterForUnique);
  const styleOptions = MapStyleOptions(props)
    .map((_: any) => MapOption(_, 'productStyle'))
    .filter(FilterForUnique);
  returnValue = returnValue.concat(styleOptions);
  const productPanelConfigurations = MapPanelConfigurationOptions(props)
    .map((_: any) => MapOption(_, 'productPanelConfiguration'))
    .filter(FilterForUnique);
  returnValue = returnValue.concat(productPanelConfigurations);
  const productPanelStyle = MapPanelStyle(props)
    .map((_: any) => MapOption(_, 'productPanelStyle'))
    .filter(FilterForUnique);
  returnValue = returnValue.concat(productPanelStyle);
  const productCoastal = MapCoastal(props)
    .map((_: any) => MapOption(_, 'productCoastal'))
    .filter(FilterForUnique);
  returnValue = returnValue.concat(productCoastal);
  const productOperation = MapOperation(props)
    .map((_: any) => MapOption(_, 'productOperation'))
    .filter(FilterForUnique);
  returnValue = returnValue.concat(productOperation);

  return returnValue;
};

const FilterForUnique = (value: any, index: any, array: any[]) => {
  return array.findIndex((x) => x.id === value.id) === index;
};

export const MapPanelOptionHingedIcons = (props: any) => {
  const returnValue = [];
  returnValue[props?.fields?.singlePanelOption?.id] = props?.fields?.singlePanelOptionHingedIcon;
  returnValue[props?.fields?.doublePanelOption?.id] = props?.fields?.doublePanelOptionHingedIcon;
  returnValue[props?.fields?.triplePanelOption?.id] = props?.fields?.triplePanelOptionHingedIcon;
  returnValue[props?.fields?.quadPanelOption?.id] = props?.fields?.quadPanelOptionHingedIcon;
  return returnValue;
};

export const MapOption = (
  helpMeChooseOption: PerfectMatchOptionProps,
  property: string,
  isPerfectMatch?: boolean
) => {
  return {
    id: helpMeChooseOption?.id,
    property: property,
    heading: helpMeChooseOption?.fields?.optionHeading,
    image: helpMeChooseOption?.fields?.optionImage,
    ctaText: helpMeChooseOption?.fields?.ctaText,
    sortOrder: helpMeChooseOption?.fields?.sortOrder,
    gtmLabel: helpMeChooseOption?.fields?.gtmLabelOverride
      ? helpMeChooseOption?.fields?.gtmLabelOverride
      : helpMeChooseOption?.fields?.optionHeading,
    introCopy: helpMeChooseOption?.fields?.introCopy,
    introImage: helpMeChooseOption?.fields?.introImage,
    name: helpMeChooseOption?.displayName,
    isPerfectMatch: isPerfectMatch || false,
    icon: '',
    step: {
      heading: '',
      subhead: '',
      copy: '',
    },
    help: !helpMeChooseOption?.fields?.helpCtaText?.value
      ? null
      : {
          cta: helpMeChooseOption?.fields?.helpCtaText,
          popup: {
            text: helpMeChooseOption?.fields?.helpText,
            image1: helpMeChooseOption?.fields?.helpImage1,
            image2: helpMeChooseOption?.fields?.helpImage2,
            image3: helpMeChooseOption?.fields?.helpImage3,
            image4: helpMeChooseOption?.fields?.helpImage4,
            image5: helpMeChooseOption?.fields?.helpImage5,
            mobileImage1: helpMeChooseOption?.fields?.helpImageMobile1,
            mobileImage2: helpMeChooseOption?.fields?.helpImageMobile2,
            mobileImage3: helpMeChooseOption?.fields?.helpImageMobile3,
            mobileImage4: helpMeChooseOption?.fields?.helpImageMobile4,
            mobileImage5: helpMeChooseOption?.fields?.helpImageMobile5,
          },
        },
  };
};

const MapCta = (link: LinkField, buttonType: any): LinkField | null => {
  if (link == null) {
    return null;
  }

  return {
    editableFirstPart: link.editableFirstPart,
    editableLastPart: link.editableLastPart,
    value: {
      ...link.value,
      class: link.value.class + ' ' + (buttonType?.fields?.Value?.value ?? 'primary'),
    },
  };
};

const GetDimensionMappings = (product: any): any[] => {
  const ProductNumberIndex = 0;
  const WidthIndex = 1;
  const HeightIndex = 2;
  const GrilleLightsWideIndex = 3;
  const GrilleLightsHighIndex = 4;

  if (!product || !product?.fields?.productDimensions?.value) {
    return [];
  }

  const mappingArray = product?.fields?.productDimensions?.value
    ?.split(/(?:\n|\r)/g)
    .filter((x: string) => !!x);

  const returnValue = mappingArray
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

  return returnValue;
};

export const FindResultsForFilters = (_results: any, _filters: any) => {
  for (const property in _filters) {
    if (property !== 'windowLocation' && property !== 'doorLocation') {
      _results = _results.filter(function (result: any) {
        const options = result.options[property].filter(function (id: any) {
          return id === _filters[property];
        });
        return options.length > 0;
      });
    }
  }
  return _results;
};

export const FindOptionsForResults = (_results: any, _propertyName: any, _options: any) => {
  const allOptionsIds = FindValuesForResults(_results, _propertyName);

  const options = _options.filter(function (option: any) {
    return allOptionsIds.indexOf(option.id) > -1;
  });
  options.sort(PerfectMatchCompare);
  return options;
};

export const FindValuesForResults = (_results: any, _propertyName: any) => {
  return _results.reduce(function (total: any, currentValue: any) {
    return currentValue.options[_propertyName]
      ? total.concat(currentValue.options[_propertyName])
      : total;
  }, []);
};

export const PerfectMatchCompare = (_a: any, _b: any) => {
  if (_a.sortOrder?.value < _b.sortOrder?.value) {
    return -1;
  } else if (_a.sortOrder?.value > _b.sortOrder?.value) {
    return 1;
  }
  return 0;
};

export function toFraction(value: any) {
  const parts = value?.split('.');

  if (!parts) {
    return undefined;
  }

  if (parts.length === 1) {
    return parts[0];
  }

  switch (parts[1]) {
    case '0':
      return parts[0];
    case '0625':
      return parts[0] + ' 1/16';
    case '125':
      return parts[0] + ' 1/8';
    case '1875':
      return parts[0] + ' 3/16';
    case '25':
      return parts[0] + ' 1/4';
    case '3125':
      return parts[0] + ' 5/16';
    case '375':
      return parts[0] + ' 3/8';
    case '4375':
      return parts[0] + ' 7/16';
    case '5':
      return parts[0] + ' 1/2';
    case '5625':
      return parts[0] + ' 9/16';
    case '625':
      return parts[0] + ' 5/8';
    case '6875':
      return parts[0] + ' 11/16';
    case '75':
      return parts[0] + ' 3/4';
    case '8125':
      return parts[0] + ' 13/16';
    case '875':
      return parts[0] + ' 7/8';
    case '9375':
      return parts[0] + ' 15/16';
    default:
      return value;
  }
}

export const SetFilters = (parsedHash: URLSearchParams, moduleData: PerfectMatchModuleData) => {
  const productType = parsedHash.get('s:type') as string;
  const doorStyle = parsedHash.get('s:doorStyle') as string;
  const windowStyle = parsedHash.get('s:windowStyle') as string;
  const doorPanelStyle = parsedHash.get('s:doorPanelStyle') as string;
  const doorSizeAndPanel = parsedHash.get('s:doorSizeAndPanel') as string;
  const doorOperation = parsedHash.get('s:doorOperation') as string;
  const doorLocation = parsedHash.get('s:doorLocation') as string;
  const windowLocation = parsedHash.get('s:windowLocation') as string;

  if (productType) {
    moduleData.filters.productType = productType;
  }
  if (doorStyle) {
    moduleData.filters.productStyle = doorStyle;
  }
  if (windowStyle) {
    moduleData.filters.productStyle = windowStyle;
  }
  if (doorPanelStyle) {
    moduleData.filters.productPanelStyle = doorPanelStyle;
  }
  if (doorOperation) {
    moduleData.filters.productOperation = doorOperation;
  }
  if (doorSizeAndPanel) {
    const value = doorSizeAndPanel.split(',');
    const panelArray = [];
    for (let i = 0; i < value.length; i++) {
      panelArray.push(value[i]);
    }
    moduleData.filters.doorSizeAndPanels = panelArray;
  }
  if (doorLocation) {
    moduleData.filters.doorLocation = doorLocation;
  }
  if (windowLocation) {
    moduleData.filters.windowLocation = windowLocation;
  }
};

export const GetStepOptions = (props: PerfectMatchProps) => {
  const optionIds = FindResultsForFilters(props.moduleData.results, props.moduleData.filters);
  let property = props.moduleData.steps[props.step].property;
  if (props.step === 'doorSizeAndPanels') {
    property = property + ':panelConfiguration';
  }
  const options = FindOptionsForResults(optionIds, property, props.moduleData.options);
  return options;
};

export const GetUniqueWidthsForResultsAndOption = (results: any, optionId: any) => {
  const widths: any[] = [];
  const sizes = FindValuesForResults(results, 'productSize:' + optionId);
  if (sizes.length > 0) {
    sizes.map((size: any) => {
      const parts = size.split('x');
      if (widths.indexOf(parts[0]) === -1) {
        widths.push(parts[0]);
      }
    });
    widths.sort();
  }
  return widths;
};

export const GetUniqueHeightsForResultsAndOptionAndWidth = (
  results: any,
  optionId: any,
  width: any
) => {
  const heights: any[] = [];

  const sizes = FindValuesForResults(results, 'productSize:' + optionId);
  sizes.map((size: any) => {
    const parts = size.split('x');
    if (parts[0] === width && heights.indexOf(parts[1]) === -1) {
      heights.push(parts[1]);
    }
  });

  heights.sort();
  return heights;
};

export const SizeAndPanelsClearOtherSelections = (option: any, selectedClass: string) => {
  const _container = option.closest('.step-content');
  const _next = _container.getElementsByClassName('next')[0];
  _next.classList.add('disabled');
  _next.removeAttribute('data-label');

  const _siblings = option.parentNode.getElementsByClassName('is-preference');

  for (let i = 0; i < _siblings.length; i++) {
    if (_siblings[i] !== option) {
      const element = _siblings[i];
      element.getElementsByClassName('width-select')[0].value = 'Select';
      const height = element.getElementsByClassName('height-select')[0];
      height.value = 'Select';
      height.disabled = 'disabled';
      element.getElementsByClassName('not-sure-checkbox')[0].checked = false;
      element.className = element.className.replace(selectedClass, '');
      option.className = option.className.replace(selectedClass, '');
    }
  }
};

export const SizeAndPanelSetupNext = (option: any) => {
  const _next = option.closest('.step-content').getElementsByClassName('next')[0];
  _next.classList.remove('disabled');
  _next.setAttribute('data-label', option.getElementsByClassName('heading')[0].innerText);
};

export const SizeAndPanelSelected = (props: any, values: any) => {
  props.moduleData.filters.doorSizeAndPanels = values;
};
