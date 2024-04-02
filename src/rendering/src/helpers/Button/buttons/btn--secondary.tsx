import { useTheme } from 'lib/context/ThemeContext';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { IconTypes, SvgIcon } from 'src/helpers/SvgIcon';
import { ButtonProps } from '../Button';
import { getEnum } from 'lib/utils';
import classNames from 'classnames';

export const ButtonSecondaryClasses = (themeName: string) => {
  if (themeName === 'aw') {
    return {
      btnClass:
        'flex w-fit items-center whitespace-normal rounded-lg border-4 border-black px-m py-[9px] font-sans text-button font-heavy hover:bg-black hover:text-white disabled:border-gray disabled:text-gray',
      iconClass: 'ml-xxs',
    };
  } else {
    return {
      btnClass:
        'group relative flex w-fit items-center border-2 border-theme-btn-secondary-border bg-theme-btn-secondary-bg p-[14px] font-serif text-button font-bold text-theme-btn-secondary-text hover:bg-theme-btn-secondary-bg-hover hover:text-theme-btn-secondary-text-hover disabled:bg-gray disabled:border-gray disabled:text-dark-gray disabled:cursor-not-allowed',
      iconClass: 'ml-[10px] text-primary group-hover:text-primary group-disabled:text-dark-gray',
    };
  }
};

const ButtonSecondary = (props: ButtonProps): JSX.Element => {
  const { themeName } = useTheme();
  const { field, icon, classes, modalId, modalLinkText, ariaLabel } = props;
  const _icon = getEnum<IconTypes>(icon);

  if (field) {
    return (
      <LinkWrapper
        field={field}
        className={classNames(ButtonSecondaryClasses(themeName).btnClass, classes)}
        modalId={modalId}
        modalLinkText={modalLinkText}
        ariaLabel={ariaLabel}
      >
        {icon && (
          <SvgIcon
            icon={_icon}
            className={classNames(ButtonSecondaryClasses(themeName).iconClass)}
          />
        )}
      </LinkWrapper>
    );
  }

  return <></>;
};

export default ButtonSecondary;
