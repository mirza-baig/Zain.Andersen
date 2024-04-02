// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const HeroOfferTheme: ThemeFile = {
  aw: {
    classes: {},
  },
  rba: {
    classes: {
      darkOverlay: 'absolute z-[1] w-full h-full bg-[rgba(0,0,0,0.60)] left-0 top-0',
      lightOverlay: 'absolute z-[1] w-full h-full bg-white opacity-[0.5] left-0 top-0',
      contentWrapper: 'w-full h-full flex flex-col ml:flex-row ml:!text-white items-center',
      contentContainer:
        'flex flex-col z-[1] py-s mr-auto px-m ml:mr-0 ml:py-0 ml:justify-center ml:h-[617px] gap-xxs flex-start ml:w-full',
      eyebrow: 'uppercase !text-xxs ml:text-text-link !font-bold !font-serif',
      headline: 'text-sm-m ml:text-xl ml:leading-[64px] font-medium',
      bodyClass: 'my-xxxs text-dark-gray ml:text-black ml:text-large-body',
      OfferDetailBox:
        'z-[1] justify-center w-full min-h-[373px] ml:w-[389px] ml:min-h-[373px] p-m flex flex-col gap-s',
      buttonGroupClass: 'text-button',
      subHeadline: 'text-body !font-serif font-bold',
      disclaimerClasses: 'text-legal leading-[16px]',
    },
  },
};
