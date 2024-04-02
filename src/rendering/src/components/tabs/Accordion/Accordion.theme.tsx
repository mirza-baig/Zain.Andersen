// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const AccordionTheme: ThemeFile = {
  aw: {
    classes: {
      headline: 'px-m md:max-w-screen-lg md:mx-auto text-sm-m md:text-m font-heavy mb-s ',
      bodyCopy:
        'mx-auto mb-s flex w-[calc(100%_-_3rem)] items-center  justify-between pb-1 text-theme-body md:max-w-screen-lg   lg:w-full lg:px-m',
      sectionTitleWrapper:
        'sectionTitleWrapper border-t  py-m border-gray md:max-w-screen-lg  w-[calc(100%_-_3rem)] mx-auto md:px-m flex lg:w-full items-center justify-between hover:underline hover:underline-offset-4   group',
      sectiontitle: ' text-sm-s md:text-s font-heavy max-w-[80%]',
      sectionIcon:
        'border-2 border-primary rounded-full h-ml w-ml flex items-center justify-center group-hover:bg-primary  group-hover:text-white',
      accordionSection:
        '[&:last-child_.accordion-content]:after:w-[calc(100%_-_3rem)] lg:[&:last-child_.accordion-content]:after:w-full [&:last-child_.accordion-content]:after:border-t [&:last-child_.accordion-content]:after:border-gray  [&:last-child_.accordion-content]:after:max-w-screen-lg [&:last-child_.accordion-content]:after:mx-auto [&:last-child_.accordion-content]:after:block',
    },
  },
  rba: {
    classes: {
      headline:
        'px-m md:max-w-screen-lg md:mx-auto text-sm-m md:text-l font-extra-light mb-xxs md:mb-s',
      bodyCopy:
        'mx-auto mb-s flex w-[calc(100%_-_3rem)] items-center  justify-between pb-1 text-theme-body md:max-w-screen-lg   lg:w-full lg:px-m',
      sectionTitleWrapper:
        'sectionTitleWrapper border-t  py-s md:max-w-screen-lg  px-xxs w-[calc(100%_-_3rem)] mx-auto  flex lg:w-full items-center justify-between hover:underline hover:underline-offset-4 md:px-m group',
      sectiontitle:
        'text-sm-xs md:text-s font-bold md:font-medium max-w-[80%] !font-serif md:!font-sans',
      sectionIcon: 'group-hover:text-primary',
      accordionSection:
        '[&:last-child_.accordion-content]:after:w-[calc(100%_-_3rem)] lg:[&:last-child_.accordion-content]:after:w-full [&:last-child_.accordion-content]:after:border-t  [&:last-child_.accordion-content]:after:max-w-screen-lg [&:last-child_.accordion-content]:after:mx-auto [&:last-child_.accordion-content]:after:block',
    },
  },
};
