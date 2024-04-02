// import classNames from 'classnames';

import classNames from 'classnames';
import { ButtonPrimaryClasses } from 'src/helpers/Button/buttons/btn--primary';
import { ButtonSecondaryClasses } from 'src/helpers/Button/buttons/btn--secondary';
import { ButtonTertiaryClasses } from 'src/helpers/Button/buttons/btn--tertiary';

export const getNavigationButtonTheme = (startWithIcon = false) => {
  return {
    aw: {
      classes: {
        button: startWithIcon
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
        button: startWithIcon
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
