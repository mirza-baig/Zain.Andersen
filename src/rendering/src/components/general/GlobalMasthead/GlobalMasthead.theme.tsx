// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const GlobalMastheadTheme: ThemeFile = {
  aw: {
    classes: {
      headline: 'text-sm-m ml:text-m  font-heavy',
      headWrapper: 'w-full flex flex-col ml:items-center ml:justify-center py-4 px-5',
      headLogoWrapper: 'flex items-center justify-start ml:justify-center',
      headLogo: 'flex items-center',
      mastheadWrapper:
        'theme-black sticky top-[55px] left-0 right-0 z-[15] col-span-12 flex place-items-center justify-center ml:top-[122px]',
      menuIcon: 'ml:hidden mr-5',
      anchorWrapper:
        'mt-4 flex flex-col ml:flex-row items-start ml:items-center justify-between w-full transition ease-in-out delay-150',
      socialIconsWrapper: 'mt-4 ml:mt-0',
      iconWrapper: 'flex items-center space-x-2',
      socialIcon: '',
      anchors:
        'lg:space-x-[80px] ml:space-x-[50px] space-y-[12px] ml:space-y-0 flex flex-col ml:flex-row font-semibold',
      linkTitle: 'text-[18px] font-sans font-bold text-white',
    },
  },
  rba: {
    classes: {
      headline: 'text-white text-sm-m ml:text-m  font-heavy',
      headWrapper: 'w-full flex flex-col ml:items-center ml:justify-center py-4 px-5',
      headLogoWrapper: 'flex items-center justify-start ml:justify-center',
      headLogo: 'flex items-center',
      mastheadWrapper:
        'theme-black sticky top-[55px] left-0 right-0 z-[99] col-span-12 flex place-items-center justify-center ml:top-[122px]',
      menuIcon: 'ml:hidden mr-5',
      anchorWrapper:
        'mt-4 flex flex-col ml:flex-row items-start ml:items-center justify-between w-full transition ease-in-out delay-150',
      socialIconsWrapper: 'mt-4 ml:mt-0',
      iconWrapper: 'flex items-center space-x-4',
      socialIcon: '',
      anchors: 'ml:space-x-[16px] space-y-[12px] ml:space-y-0 flex flex-col ml:flex-row',
      linkTitle: 'text-[16px] text-bold font-sans font-semibold text-white',
    },
  },
};
