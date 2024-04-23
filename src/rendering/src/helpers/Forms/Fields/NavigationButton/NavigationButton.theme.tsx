// import classNames from 'classnames';

import classNames from 'classnames';
import { ButtonPrimaryClasses } from 'src/helpers/Button/buttons/btn--primary';
import { ButtonSecondaryClasses } from 'src/helpers/Button/buttons/btn--secondary';
import { ButtonTertiaryClasses } from 'src/helpers/Button/buttons/btn--tertiary';

const ButtonFormLinkClasses = (themeName: string) => {
  if (themeName === 'aw') {
    return {
      btnClass:
        'flex w-fit items-center whitespace-normal font-sans text-text-link text-theme-text underline disabled:border-gray disabled:text-gray',
    };
  } else {
    return {
      btnClass:
        'group relative flex w-fit items-center text-darkprimary font-serif underline disabled:text-gray',
    };
  }
};

export const getNavigationButtonTheme = (startWithIcon = false, linkTheme = false) => {
  return {
    aw: {
      classes: {
        button: linkTheme
          ? ButtonFormLinkClasses('aw').btnClass
          : startWithIcon
          ? ButtonTertiaryClasses('aw').btnClass
          : ButtonPrimaryClasses('aw').btnClass,
        icon: classNames(
          startWithIcon
            ? ButtonTertiaryClasses('aw').iconClass
            : ButtonPrimaryClasses('aw').iconClass,
          { '!ml-0 mr-xxs': startWithIcon }
        ),
      },
    },
    rba: {
      classes: {
        button: linkTheme
          ? ButtonFormLinkClasses('rba').btnClass
          : startWithIcon
          ? ButtonSecondaryClasses('rba').btnClass
          : ButtonPrimaryClasses('rba').btnClass,
        icon: classNames(
          startWithIcon
            ? ButtonSecondaryClasses('rba').iconClass
            : ButtonPrimaryClasses('rba').iconClass,
          { '!ml-0 mr-[10px]': startWithIcon }
        ),
      },
    },
  };
};
