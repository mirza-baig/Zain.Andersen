// Lib
import { getGridTemplateTheme } from './XupCardCollectionDynamic.Template.theme';
import { ThemeFile } from 'lib/context/ThemeContext';
import { DynamicXupCardStyle, cardAlignment } from './XupCardCollectionDynamic';

export const XupCardCollectionDynamicTheme = (
  alignment: cardAlignment,
  dynamicXupCardStyle: DynamicXupCardStyle
): ThemeFile => {
  return {
    aw: {
      classes: {
        /** Insert Theme classes here **/
        gridTemplateClasses: getGridTemplateTheme('aw', alignment, dynamicXupCardStyle),
        headlineClass: 'text-sm-m md:text-m font-heavy mb-s',
        bodyClass: 'text-body text-dark-gray font-regular mb-s',
        buttonGroupClass: {
          wrapper: 'flex flex-col md:flex-row items-start mb-0',
        },
      },
    },
    rba: {
      classes: {
        /** Insert Theme classes here **/
        gridTemplateClasses: getGridTemplateTheme('rba', alignment, dynamicXupCardStyle),
        headlineClass: 'text-m md:text-l font-extra-light mb-xxs',
        bodyClass: 'text-body text-dark-gray font-regular mb-m',
        buttonGroupClass: {
          wrapper: 'flex flex-col md:flex-row items-start mb-0',
        },
      },
    },
  };
};
