// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const ProductIntroTheme: ThemeFile = {
  aw: {
    classes: {
      imageColClasses: 'col-span-6 ml:col-span-5',
      descriptionColClasses: 'md:col-start-7 col-span-6 relative',
      eyebrow: 'font-sans text-sm-xxs md:text-sm-s text-dark-gray font-regular mb-xxxs uppercase',
      headlineWrapper: 'text-sm-s md:text-s font-heavy font-sans mb-xxs',
      headline: 'text-sm-s md:text-s font-heavy font-sans mb-xxs',
      bodyClass: 'mb-s text-dark-gray',
      buttonGroupClass: {
        wrapper: 'flex-col md:items-center',
        cta1Classes: '',
        cta2Classes: 'my-s md:my-0',
      },
      ratingsAndPriceWrapper: 'flex items-center mb-s',
      ratingsIconsList: 'flex mr-m',
      ratingsText: 'mr-m',
      ratingsWrapper: 'flex items-center',
      priceLevelWrapper: 'border-l border-secondary p-xxs',
      priceTextClasses: 'text-gray font-sans text-xxs font-medium',
      priceLevelClasses: 'text-black font-heavy',
      favoriteProductWrapper: 'absolute top-0 right-0 md:hidden',
      favoriteProduct:
        'favorite-product absolute right-0 top-0 inline h-0 w-0 cursor-pointer border-t-0 border-l-0 border-r-[52px] border-b-[52px] border-solid border-[transparent_#e3e3e3_transparent_transparent] transition-[border-color]  duration-500 ease-[ease]',
      favoriteIcon: 'absolute -right-[46px] top-[7px]',
      swatchHeadline: '!font-sans font-heavy text-sm-xxs md:text-base mb-s uppercase',
      swatchTitle: 'mt-xxs text-center font-regular text-base font-serif',
    },
  },
  rba: {
    classes: {
      imageColClasses:
        'col-span-6 bg-light-gray flex flex-col items-center justify-center -mx-m md:mx-0',
      eyebrow: 'font-serif text-sm-xxs uppercase font-bold mb-xxs md:mb-s',
      descriptionColClasses: 'col-span-6 md:pl-m relative',
      headlineWrapper: 'text-s text-secondary font-medium mb-xxs font-sans',
      headline: 'text-s text-secondary font-medium mb-xxs',
      bodyClass: 'mb-s text-dark-gray',
      buttonGroupClass: {
        wrapper: 'flex-col md:items-center',
        cta1Classes: 'mr-2 !w-full md:!w-fit justify-center',
        cta2Classes: 'my-s !w-full md:!w-fit justify-center md:my-0 ',
      },
      ratingsAndPriceWrapper:
        'flex flex-col md:flex-row items-center py-xs mb-m border-y border-y-gray',
      ratingsIconsList: 'flex',
      ratingsText: 'text-body font-regular font-serif text-dark-gray',
      ratingsWrapper: 'flex flex-col px-[14px] items-center justify-center pb-s md:pb-0',
      priceLevelWrapper:
        'md:border-l border-gray px-xxs py-xs pt-s md:pt-xs border-t md:border-t-0 w-full text-center md:w-fit',
      priceTextClasses: 'text-gray font-sans text-s font-medium',
      priceLevelClasses: 'text-black',
      swatchHeadline: '!font-serif font-bold text-xxs mb-s uppercase',
      swatchTitle: 'mt-xxs text-center font-regular text-body !font-serif',
      favoriteProductWrapper: 'absolute top-auto right-0 md:hidden',
      favoriteProduct:
        'favorite-product absolute right-0 top-0 z-10 inline h-0 w-0 cursor-pointer duration-500 ease-[ease]',
      favoriteIcon: 'absolute right-[0px] top-0',
    },
  },
};
