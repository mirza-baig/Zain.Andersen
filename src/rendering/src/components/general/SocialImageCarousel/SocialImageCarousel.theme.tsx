// Lib
import classNames from 'classnames';
import { ThemeFile } from 'lib/context/ThemeContext';

const headingRuleLine =
  'before:block before:w-[calc(100%_-_40px)] before:ml-auto before:border-t before:mb-xs before:border-gray';

export const SocialImageCarouselTheme: ThemeFile = {
  aw: {
    classes: {
      wrapper: 'flex flex-col md:flex-row col-span-2 md:col-span-6 items-center theme-white',
      wrapper2: 'col-span-12',
      headlineClass: 'p-3 max-w-[315px] md:min-w-[350px]',
      headlineText: 'font-sans font-heavy text-m md:w-[350px] mb-3',
      headlineText2: 'font-sans font-heavy text-m mb-3 ml-10',
      bodyCopyClass: ' text-body text-dark-gray',
      carouselInline:
        'w-[375px] md:w-[275px] mmd:w-[403px] ml:w-[611px] mml:w-[627px] lg:w-[845px]',
      carouselStack: 'w-full',
    },
    defaultProductFilter: 'ES-CAS',
    defaultSiteName: 'andersenwindows-6o5qt0',
  },
  rba: {
    classes: {
      wrapper: classNames(
        'flex flex-col md:flex-row col-span-2 md:col-span-6 items-center theme-white'
      ),
      wrapper2: classNames('col-span-12', headingRuleLine),
      headlineClass: 'p-3 max-w-[315px] md:min-w-[350px]',
      headlineText: 'font-sans font-bold text-s md:w-[350px] mb-3',
      headlineText2: '!font-serif font-bold text-sm-xs md:text-xxs mb-3 ml-10',
      bodyCopyClass: ' text-body text-dark-gray',
      carouselInline: 'w-[375px] lg:w-[845px] md:w-[575px]',
      carouselStack: 'w-full',
    },
    defaultProductFilter: 'doublehung',
    defaultSiteName: 'renewalbyandersen-sb1oge',
  },
};
