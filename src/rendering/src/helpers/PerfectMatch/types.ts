/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ButtonVariants } from '../Button';
import { ImageFieldValue } from '@sitecore-jss/sitecore-jss-react';
import {
  Field,
  ImageField,
  LinkField,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

export type PerfectMatchProperties =
  | 'productType'
  | 'productStyle'
  | 'productCoastal'
  | 'productOperation'
  | 'productPanelStyle'
  | 'productSize';

export type PerfectMatchSteps =
  | 'intro'
  | 'type'
  | 'windowStyle'
  | 'windowLocation'
  | 'windowCoastal'
  | 'windowProjectType'
  | 'windowPreferences'
  | 'windowResults'
  | 'doorStyle'
  | 'doorOperation'
  | 'doorPanelStyle'
  | 'doorSizeAndPanels'
  | 'doorLocation'
  | 'doorCoastal'
  | 'doorProjectType'
  | 'doorPreferences'
  | 'doorResults'
  | any;

export type StepData = {
  gtmAction: string;
  property?: string;
  stepNumber?: number;
  heading?: Field<string>;
  copy?: Field<string>;
  nextStep?: string;
  regions?: string[];
};

export type PerfectMatchCta = {
  url: string;
  buttonType: ButtonVariants;
  text: string;
};
export type PerfectMatchImage = {
  value: {
    imageSrc: string;
    alt: string;
    thumbnailSrc: string;
    youTubeDivClass: string;
    youTubeVideoId: string;
  };
};
export type PerfectMatchResult = {
  id: string;
  productDetails: {
    series: RichTextField;
    category: RichTextField;
    cost: TextField;
    description: RichTextField;
    bullet1: TextField;
    bullet2: TextField;
    bullet3: TextField;
    bullet4: TextField;
    viewDetailsLink: PerfectMatchCta | LinkField | null;
    designLink: PerfectMatchCta | LinkField | null;
    findADealerLink: PerfectMatchCta | LinkField | null;
    image1: PerfectMatchImage | ImageField | null;
    image2: PerfectMatchImage | ImageField | null;
    image3: PerfectMatchImage | ImageField | null;
    image4: PerfectMatchImage | ImageField | null;
    image5: PerfectMatchImage | ImageField | null;
    resultHeroImage: ImageField | null;
    resultOverlayImage: ImageField | null;
    imageCarousel: any | null;
  };
  scores: {
    newConstruction: number;
    replacement: number;
    customizable: number;
    energyEfficiency: number;
    maintenance: number;
    value: number;
    installation: number;
    region1: number;
    region2: number;
    region3: number;
    region4: number;
    region5: number;
    region6: number;
    boost: number;
    exteriorColor: number;
    performanceConsideration: number;
    blindsBetweenGlass: number;
    interiorColor: number;
    productCoastal: number;
  };
  options: {
    productType: string[];
    productStyle: string[];
    'productSize:panelConfiguration': string[];
    productPanelStyle: string[];
    productCoastal: string[];
    productOperation: string[];
    [attributeName: string]: string[] | null;
  };
  variationOf: string | null;
};

export type PerfectMatchOptionHelp = {
  cta: string;
  popup: {
    text: string;
    image1: ImageFieldValue | null;
    image2: ImageFieldValue | null;
    image3: ImageFieldValue | null;
    image4: ImageFieldValue | null;
    image5: ImageFieldValue | null;
    mobileImage1: ImageFieldValue | null;
    mobileImage2: ImageFieldValue | null;
    mobileImage3: ImageFieldValue | null;
    mobileImage4: ImageFieldValue | null;
    mobileImage5: ImageFieldValue | null;
  };
};

export type PerfectMatchOption = {
  id: string;
  property: string;
  heading: string;
  image: ImageFieldValue;
  ctaText: string;
  sortOrder: number;
  gtmLabel: string;
  introCopy: string;
  introImage: ImageFieldValue | null;
  help: PerfectMatchOptionHelp | null;
};

export type PerfectMatchModuleData = {
  steps: {
    [key in any]: StepData;
  };
  results: PerfectMatchResult[];
  preferences: {
    window: any[];
    door: any[];
  };
  projectTypes: {
    options: any[];
    window: any[];
    door: any[];
  };
  regions: {
    region1: [];
    region2: [];
    region3: [];
    region4: [];
    region5: [];
    region6: [];
  };
  optionIds: {
    type: {
      window: '45e238f9-674d-4578-b290-2f17af5f5666';
      patioDoor: '42e926d0-d15d-4460-bcf3-9dd8bdceefd5';
    };
    sizeAndPanel: {
      singlePanel: '86265b98-040e-49a7-8598-80f760991c92';
      doublePanel: '5741c3dd-9953-4b26-adf9-e7d9c5388ac8';
      triplePanel: '794c1467-170e-49e4-b7c2-5403c6e1450b';
      quadPanel: 'e2232703-ccf6-4200-8dc5-9242f46cfc6d';
    };
    doorStyle: {
      hinged: '0b44f573-58c5-43e9-8eaa-33bbff988b83';
    };
    coastal: {
      yes: null;
    };
  };
  options: PerfectMatchOption[];
  panelOptionHingedIcons: {
    [key in any]: any;
    //[K in PanelOptionHingedIcons]: ImageFieldValue | null;
  };
  filters: any;
};

export enum DoorStyle {
  hinged = '0b44f573-58c5-43e9-8eaa-33bbff988b83',
}

export enum ProductTypes {
  window = '45e238f9-674d-4578-b290-2f17af5f5666',
  patioDoor = '42e926d0-d15d-4460-bcf3-9dd8bdceefd5',
}

export enum PanelOptionHingedIcons {
  singlePanel = '86265b98-040e-49a7-8598-80f760991c92',
  doublePanel = '5741c3dd-9953-4b26-adf9-e7d9c5388ac8',
  triplePanel = '794c1467-170e-49e4-b7c2-5403c6e1450b',
  quadPanel = 'e2232703-ccf6-4200-8dc5-9242f46cfc6d',
}
