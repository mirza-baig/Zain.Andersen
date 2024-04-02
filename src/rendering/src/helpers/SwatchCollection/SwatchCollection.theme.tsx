// Lib
import { ThemeFile } from 'lib/context/ThemeContext';
import { LayoutStyles } from 'src/helpers/SwatchCollection/SwatchCollection';
import classNames from 'classnames';

export const SwatchCollectionTheme = (layoutStyle: LayoutStyles): ThemeFile => {
  return {
    aw: {
      classes: {
        swatchTitle: 'text-theme-text text-sm-xs ml:text-xs font-medium mt-m ml:mt-l  mb-xs',
        swatchDescription: 'font-regular text-dark-gray text-body mb-m',
        swatchLabel: 'mx-auto !font-serif text-dark-gray text-small text-center font-regular ',
        swatchFooterCopy: 'font-regular text-theme-body text-small text-dark-gray mt-m',
      },
    },
    rba: {
      classes: {
        swatchTitle: classNames(
          '!font-serif text-theme-text text-body font-bold mt-l mb-xxs',
          layoutStyle === 'full-width' ? 'ml:mt-l' : 'ml:mt-ml'
        ),
        swatchDescription: 'font-regular text-dark-gray text-body',
        swatchLabel: 'mx-auto !font-serif text-dark-gray text-small text-center font-regular ',
        swatchFooterCopy: 'font-regular text-theme-body text-xxs text-dark-gray mt-s',
      },
    },
  };
};
