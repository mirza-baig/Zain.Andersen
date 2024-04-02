import classNames from 'classnames';
import { ThemeFile } from 'lib/context/ThemeContext';
import { BackgroundColor } from './ContentBlock';
import { ButtonVariants } from 'src/helpers/Button';

const getDynamicButtonStyles = (backgroundColor: BackgroundColor): string => {
  return classNames(`${backgroundColor === 'black' ? 'text-primary' : ''}`);
};

const getSecondCTAPadding = (ctaStyle: ButtonVariants) => {
  return (ctaStyle === 'link' || ctaStyle === 'link-right-icon') && 'ml-xs md:ml-0 px-s md:px-0';
};

export const ContentBlockTheme = (
  backgroundColor: BackgroundColor,
  cta2Style: ButtonVariants
): ThemeFile => {
  return {
    aw: {
      classes: {
        contentWrapper: classNames(
          backgroundColor != 'white' ? 'py-l' : '',
          'col-span-12',
          'px-m',
          'md:w-full',
          'md:max-w-screen-lg',
          'md:mx-auto'
        ),
        headlineClass: 'text-theme-text text-sm-m md:text-m font-bold mb-s',
        bodyClass: 'text-theme-body mb-s',
        buttonGroupClass: {
          wrapper: 'flex-col',
          cta1Classes: classNames(getDynamicButtonStyles(backgroundColor), 'mb-m md:mb-0'),
          cta2Classes: classNames(
            getDynamicButtonStyles(backgroundColor),
            getSecondCTAPadding(cta2Style)
          ),
          cta3Classes: ' mb-m md:mb-0',
        },
      },
    },
    rba: {
      classes: {
        contentWrapper: classNames(
          backgroundColor != 'white' ? 'py-l' : '',
          'col-span-12',
          'px-m',
          'md:w-full',
          'md:max-w-screen-lg',
          'md:mx-auto'
        ),
        headlineClass: 'text-theme-text text-sm-m md:text-m font-medium mb-s',
        bodyClass: 'text-theme-body mb-s',
        buttonGroupClass: {
          wrapper: 'flex-col md:items-center',
          cta1Classes: classNames(getDynamicButtonStyles(backgroundColor), 'mr-2'),
          cta2Classes: classNames(getDynamicButtonStyles(backgroundColor), 'my-s md:my-0'),
        },
      },
    },
  };
};
