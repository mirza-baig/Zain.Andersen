// Lib
import { ThemeFile } from 'lib/context/ThemeContext';
import { tabStyle } from './BottomStickyTab';
import classNames from 'classnames';

export const bottomStickyTabTheme = (tabStyle: tabStyle | undefined): ThemeFile => {
  return {
    aw: {
      classes: {
        headline: 'abc-123',
        stickyTab: classNames(
          'w-full md:w-auto md:absolute md:z-[-1] min-w-[237px] bottom-[6px] md:left-1/2 md:-translate-x-1/2 bg-theme-bg flex py-s md:pt-s md:pb-[10px]  items-center justify-center gap-xs  mx-auto  border  border-b-0 ',
          tabStyle === 'black' ? 'border-dark-gray' : 'border-gray'
        ),
        tabText: 'text-button font-sans font-heavy',
        tabIcon: classNames('flex h-m items-center', tabStyle === 'orange' ? 'text-white' : ''),
      },
    },
    rba: {
      classes: {
        wrapper: '',
        stickyTab: classNames(
          'w-full md:w-auto md:absolute md:z-[-1] min-w-[237px] bottom-[6px] md:left-1/2 md:-translate-x-1/2 bg-theme-bg flex py-s md:pt-s md:pb-[10px]  items-center justify-center gap-xs  mx-auto  border  border-b-0 ',
          tabStyle === 'black' ? 'border-dark-gray' : 'border-gray'
        ),
        tabText: 'text-button font-serif font-bold',
        tabIcon: classNames(
          'flex h-m items-center',
          tabStyle === 'black' ? 'text-primary' : 'text-secondary'
        ),
      },
    },
  };
};
