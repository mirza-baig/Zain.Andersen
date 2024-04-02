import { ThemeFile } from 'lib/context/ThemeContext';

export const JobMiniSearchTheme: ThemeFile = {
  aw: {
    classes: {},
  },
  rba: {
    classes: {
      headline: 'text-sm-m md:text-l font-extra-light text-center mb-xxs',
      subheadline: 'text-body !font-serif font-regular text-center text-dark-gray mb-m',
      locationSwitchWrapper: 'flex flex-wrap gap-x-xxs items-center justify-center mb-ml md:mb-m',
      locationIcon: 'text-primary mr-xxs',
      locationText: 'flex text-body items-center text-dark-gray font-regular !font-serif',
      currentState: 'text-body font-bold !font-serif',
      locationDropdown:
        ' block w-full cursor-pointer appearance-none border border-gray bg-none py-xs pl-xxs pr-xs text-sm-xs text-theme-text disabled:cursor-not-allowed disabled:border-gray disabled:text-gray ',
      dropdownToggle: 'text-body text-darkprimary font-bold font-serif underline',
      noResultsBody: 'text-s font-medium font-sans text-center mt-m md:mt-l',
      singleButton: {
        cta1Classes: 'mx-auto mt-m',
      },
    },
  },
};
