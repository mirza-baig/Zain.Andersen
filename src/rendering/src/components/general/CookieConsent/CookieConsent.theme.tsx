// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const CookieConsentTheme: ThemeFile = {
  aw: {
    classes: {
      headline: 'text-white text-s ml:text-m font-heavy',
      bannerWrapper:
        'grid-rows-auto grid grid-cols-2 place-items-center px-m ml:px-l lg:px-m ml:mx-auto ml:max-w-screen-lg min-h-[75px]  ml:grid-cols-12 ml:place-items-start my-s',
      bodyClass: 'text-white text-body font-regular mt-xxs',
      buttonsWrapper:
        'flex flex-col ml:flex-row justify-center items-center font-heavy mb-0 gap-y-6 ml:gap-0',
      acceptCookieButton: 'mr-s',
      secondButton: {
        classes: {
          wrapper: '!mb-0',
          cta1Classes: '',
        },
      },
      iconWrapper: 'absolute top-3 right-3 text-white',
      textWrapper: 'col-span-2 text-center ml:col-span-9 ml:text-left mb-m ml:mb-0 self-center',
    },
  },
  rba: {
    classes: {
      headline: 'text-xs text-white font-heavy ml:font-bold !font-serif',
      bannerWrapper:
        'grid-rows-auto grid grid-cols-2 px-m ml:px-l lg:px-m ml:mx-auto ml:max-w-screen-lg ml:grid-cols-12 place-items-start min-h-[48px] my-s ml:my-xs',
      bodyClass: 'text-white font-regular mt-xxs ml:mt-0 [&_.body-copy]:!text-sm-xxs',
      buttonsWrapper:
        'flex flex-col ml:flex-row ml:items-center font-bold gap-y-6 gap-x-6 ml:space-x-0 mb-xxs ml:mb-0',
      acceptCookieButton: 'mr-0 px-s',
      secondButton: {
        classes: {
          wrapper: '!mb-0 text-white',
          cta1Classes: '',
        },
      },
      iconWrapper: 'absolute top-3 right-3 text-white',
      textWrapper: 'col-span-2 ml:col-span-9 mb-s ml:mb-0 self-center ',
    },
  },
};
