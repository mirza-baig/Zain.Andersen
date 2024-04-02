// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const JobGuidedSearchTheme: ThemeFile = {
  aw: {
    classes: {},
  },
  rba: {
    classes: {
      container: 'flex flex-col items-center col-span-12 py-l -mx-m px-m ml:px-xxl bg-light-gray',
      headlineClass:
        'text-theme-text text-center pb-xxs text-sm-xxl md:text-l font-extra-light font-sans md:text-center',
      bodyCopy:
        'col-span-12 md:col-span-10 text-theme-body text-body font-regular mb-l text-center',
      subheadline: 'text-small !font-serif font-bold mb-m ml:mb-s',
      // Buttons - Desktop View
      desktopContainer: 'ml:grid ml:grid-cols-3 ml:gap-s ml:mb-l hidden',
      linkClasses:
        'flex text-black text-button font-serif font-bold hover:underline decoration-[3px] hover:theme-btn-decoration hover:underline-offset-8 disabled:text-gray',
      buttonItem:
        'button-item !text-xs !text-black !bg-light-gray rounded-full !h-[64px] !w-[186px] justify-center border-[2px] border-gray group-hover:border-black hover:cursor-pointer hover:border-black  focus:border-xxs active:border-xxs active:!border-primary focus:!border-primary focus:border-[6px]',
      // Dropdown - Mobile View
      mobileContainer: 'grid grid-row w-[325px] md:w-1/2 ml:hidden',
      dropDownSelectList: `block w-full h-[54px] border border-gray bg-none text-sm-xs !py-xxs !pl-xxs text-theme-text items-center flex mb-m`,
      dropDownSelect: `!cursor-pointer appearance-none border-none text-black text-sm-xs bg-[rgba(0,0,0,0)] w-full rounded-xxxs focus:ring-2 -ml-xxxs focus:!ring-light-gray`,
      dropDownSelectIcon: `relative -ml-ml z-[-1]`,
    },
  },
};
