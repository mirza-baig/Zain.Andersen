// Lib
import { ThemeFile } from 'lib/context/ThemeContext';
import { FormAlignment } from './HeroWithFormFill';

const getFormWrapperClass = (alignment: FormAlignment): string => {
  switch (alignment) {
    case 'vertical':
      return 'ml:w-1/2 lg:min-w-[712px] ml:ml-auto';
    case 'horizontal':
      return 'w-full flex mx-auto mb-m ml:mt-l max-w-[1250px]';
    case 'horizontalSpillover':
      return 'ml:w-full flex ml:mx-auto max-w-[1250px] ml:-mt-[142px] ml:relative';
    default:
      return 'w-full';
  }
};

const getAlignmentClass = (alignment: FormAlignment): string => {
  switch (alignment) {
    case 'vertical':
      return 'ml:flex-row flex-col justify-center ml:p-l';
    case 'horizontal':
      return 'flex-col ml:p-m ml:min-h-[617px]';
    case 'horizontalSpillover':
      return 'flex-col ml:min-h-[617px] ml:p-m';
    default:
      return '';
  }
};

const getContentAlignmentClass = (alignment: FormAlignment): string => {
  switch (alignment) {
    case 'vertical':
      return '';
    case 'horizontal':
      return 'mx-auto ml:mt-auto max-w-[1250px] w-full';
    case 'horizontalSpillover':
      return 'ml:m-auto max-w-[1250px] w-full';
    default:
      return '';
  }
};

const getContentWidth = (alignment: FormAlignment): string => {
  switch (alignment) {
    case 'vertical':
      return 'ml:max-w-[490px]';
    case 'horizontal':
    case 'horizontalSpillover':
      return 'ml:max-w-[585px] mr-auto';
    default:
      return '';
  }
};

const getOverlayClass = (alignment: FormAlignment): string => {
  return alignment === 'horizontalSpillover' ? 'max-h-[617px]' : '';
};

export const HeroWithFormFillTheme = (alignment: FormAlignment): ThemeFile => {
  return {
    aw: {
      classes: {},
    },
    rba: {
      classes: {
        overlay: 'absolute z-[1] w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0',
        contentWrapper: 'w-full h-full flex items-center ',
        contentContainer: 'flex flex-col z-[1] ml:ml-auto  max-ml:px-m  ',
        headline: 'my-xxxs text-sm-m ml:text-xxl ml:!text-white font-medium',
        bodyClass: 'my-xxxs text-body text-dark-gray ml:text-white ml:text-large-body',
        formWrapperClass: getFormWrapperClass(alignment),
        alignmentClass: getAlignmentClass(alignment),
        contentAlignmentClass: getContentAlignmentClass(alignment),
        contentwidth: getContentWidth(alignment),
        overlayClass: getOverlayClass(alignment),
      },
    },
  };
};
