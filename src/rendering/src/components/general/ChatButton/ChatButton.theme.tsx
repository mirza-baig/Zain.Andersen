// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const ChatButtonTheme: ThemeFile = {
  aw: {
    classes: {
      /** Insert Theme classes here **/
      headline: 'abc-123',
    },
  },
  rba: {
    classes: {
      /** Insert Theme classes here **/
    },
  },
};
/* Example of more advanced builder */
/*
import classNames from 'classnames';
const getDynamicStyles = (theme: ThemeName): string => {
  return classNames('text-xl', theme === 'aw' ? 'color-orange' : 'color-green');
};
export const ChatButtonTheme = (): ThemeFile => {
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
