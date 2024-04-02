// Lib
import { ThemeFile } from 'lib/context/ThemeContext';
import { ComponentAlignment } from '../FreeStandingCta/FreeStandingCta';
import classNames from 'classnames';

const getDynamicStyles = (alignment: ComponentAlignment): string => {
  let classes = 'col-span-12';
  if (alignment === 'left') {
    classes = classNames('col-span-12');
  } else if (alignment === 'center') {
    classes = classNames('col-span-12 col-start-2 md:col-span-12 md:col-start-6');
  } else {
    classes = classNames('col-span-12 col-start-12 md:col-span-12 md:col-start-12');
  }
  return classes;
};

export const FreeStandingCtaTheme = (alignment: ComponentAlignment): ThemeFile => {
  return {
    aw: {
      classes: {
        contentWrapper: classNames(getDynamicStyles(alignment)),
        'col-start-12': {
          'grid-column-start': 12,
        },
      },
    },
    rba: {
      classes: {
        /** Insert Theme classes here **/
      },
    },
  };
};
/* Example of more advanced builder */
/*
import classNames from 'classnames';
const getDynamicStyles = (theme: ThemeName): string => {
  return classNames('text-xl', theme === 'aw' ? 'color-orange' : 'color-green');
};
export const FreeStandingCtaTheme = (): ThemeFile => {
  return {
    aw: {
      classes: {
        // Insert Theme classes here  - sample function call
        headline: classNames(getDynamicStyles('aw')),
      },
    },
    rba: {
      classes: {
        // Insert Theme classes here  - sample function call
        headline: classNames(getDynamicStyles('rba')),
      },
    },
  };
};
*/
