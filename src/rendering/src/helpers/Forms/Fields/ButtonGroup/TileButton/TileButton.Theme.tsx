import { ThemeName } from 'lib/context/ThemeContext';

export const TileButtonTheme = (themeName: ThemeName) => {
  switch (themeName) {
    case 'aw':
      return {
        tileButtonLayout: 'grid grid-cols-2 gap-s md:grid-cols-12',
        tileButtonContainer: 'relative col-span-12 flex',
        tileButtonCheckboxSelected:
          '[&:checked_+_.button-card-item]:!bg-white md:[&:checked_+_.button-card-item]:bg-light-gray [&:checked_+_.button-card-item]:before:border-primary [&:checked_+_.button-card-item]:before:border-[4px] md:[&:checked_+_.button-card-item]:before:border-[6px] [&:checked_+_.button-card-item_.button-description]:!text-black',
        tileButtonRadioSelected:
          '[&:checked_+_.button-card-item]:before:border-[2px] [&:checked_+_.button-card-item]:before:border-black [&:checked_+_.button-card-item_.radio]:border-black [&:checked_+_.button-card-item_.radio]:before:inline-block',
        tileButtonItem:
          'group button-card-item relative flex flex-row bg-light-gray p-xxs before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-[2px] before:border-gray hover:cursor-pointer hover:before:border-black before:rounded-[10px] w-full break-all min-h-[64px]',
        tileButtonItemDesktop: 'md:flex-col md:justify-center md:py-m',
        tileButtonCheckboxItem: 'items-center justify-center',
        tileButtonRadioItem: 'items-center md:items-start',
        tileButtonItemContent: 'flex items-center pr-s',
        tileButtonItemRadio:
          'radio relative bg-white min-w-[32px] min-h-[32px] rounded-full border-[2px] border-gray group-hover:border-black ml-xxs mr-s before:hidden before:content-[""] before:absolute before:w-[24px] before:h-[24px] before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full',
        title: 'font-sans text-button break-normal md:text-xs font-heavy md:text-center',
      };
    case 'rba':
      return {
        tileButtonLayout: 'grid gap-x-s md:grid-cols-12',
        tileButtonContainer: 'relative col-span-12 flex',
        tileButtonCheckboxSelected:
          '[&:checked_+_.button-card-item]:before:border-primary [&:checked_+_.button-card-item]:before:border-[4px] md:[&:checked_+_.button-card-item]:before:border-[6px] [&:checked_+_.button-card-item_.button-description]:!text-black',
        tileButtonRadioSelected:
          '[&:checked_+_.button-card-item]:before:border-[2px] [&:checked_+_.button-card-item]:before:border-black [&:checked_+_.button-card-item_.radio]:border-black [&:checked_+_.button-card-item_.radio]:before:inline-block',
        tileButtonItem:
          'group button-card-item relative flex flex-row bg-light-gray p-s before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-[2px] before:border-gray hover:cursor-pointer hover:before:border-black rounded-[100px] before:rounded-[100px] w-full break-all min-h-[64px]',
        tileButtonItemDesktop: 'md:flex-col md:justify-center',
        tileButtonCheckboxItem: 'items-center justify-center',
        tileButtonRadioItem: 'items-start',
        tileButtonItemContent: 'flex items-center pr-s',
        tileButtonItemRadio:
          'radio relative bg-white min-w-[32px] min-h-[32px] rounded-full border-[2px] border-gray group-hover:border-black mr-s before:hidden before:content-[""] before:absolute before:w-[20px] before:h-[20px] before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full',
        title: 'text-xs break-normal font-heavy md:text-center mb:xxxs md:mb-xxxs',
      };
  }
};
