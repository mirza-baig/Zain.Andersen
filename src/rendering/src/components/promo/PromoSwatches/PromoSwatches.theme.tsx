//Lib
import { ThemeFile } from 'lib/context/ThemeContext';
import { LayoutStyles } from 'src/helpers/SwatchCollection/SwatchCollection';
import classNames from 'classnames';

export const PromoSwatchesTheme = (layoutStyle: LayoutStyles): ThemeFile => {
  return {
    aw: {
      classes: {
        eyebrow: classNames(
          'font-sans text-xxs font-regular text-dark-gray uppercase mb-m',
          layoutStyle === 'side-by-side' ? 'ml:mb-s' : 'ml:mb-m'
        ),
        headline: 'text-theme-text text-sm-m ml:text-m font-medium ml:font-heavy mb-s',
        bodycopy: 'text-theme-body text-body mb-m ml:mb-l font-regular',
      },
    },
    rba: {
      classes: {
        eyebrow: 'font-serif uppercase text-text-link font-semi-bold mb-s',
        headline: 'text-theme-text text-sm-m ml:text-l font-medium mb-xxs ml:mb-s',
        bodycopy: 'text-theme-body text-body mb-m ml:mb-ml font-regular',
      },
    },
  };
};
