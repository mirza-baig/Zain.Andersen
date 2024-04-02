// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const BazaarvoiceReviewsTheme: ThemeFile = {
  aw: {
    classes: {
      wrapperClass: 'flex flex-col col-span-12 border-solid border-gray border-y py-s lg:py-ml',
      headline: 'col-span-12 text-sm-m lg:text-m leading-[1.25] font-heavy',
      accordionToggleContainer:
        'group flex flex-row grow w-full self-justify relative hover:cursor-pointer',
      accordionHeadline: 'w-full',
      readMore: `lg:inline mr-m mb-xxs lg:mb-0 text-xs font-heavy font-sans group-hover:underline`,
      accordionRatingContainer: `inline-block mr-m align-middle`,
      accordionToggleIndicator: `flex items-center justify-center inline absolute right-0 top-[calc(50%_-_1rem)] h-[2rem] w-[2rem] rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white`,
      iconClass: `inline`,
      contentOpen: '',
      contentClosed: 'h-0 overflow-hidden',
    },
  },
  rba: {
    classes: {
      wrapperClass: 'flex flex-col col-span-12 border-solid border-gray border-y py-s lg:py-l',
      headline: 'col-span-12 text-s lg:text-l font-extra-light text-theme-text',
      accordionToggleContainer:
        'group flex flex-row grow w-full self-justify relative hover:cursor-pointer',
      accordionHeadline: 'w-full',
      readMore: `lg:inline mr-m mb-xxs lg:mb-0 text-xs font-heavy group-hover:underline`,
      accordionRatingContainer: `inline-block mr-m align-middle`,
      accordionToggleIndicator: `flex items-center justify-center inline absolute right-0 top-[calc(50%_-_1rem)] h-[2rem] w-[2rem] rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white`,
      iconClass: `inline`,
      contentOpen: '',
      contentClosed: 'h-0 overflow-hidden',
    },
  },
};
