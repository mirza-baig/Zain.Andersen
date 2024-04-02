import { useTheme } from 'lib/context/ThemeContext';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { IconTypes, SvgIcon } from 'src/helpers/SvgIcon';
import { ButtonProps } from '../Button';
import { getEnum } from 'lib/utils';
import classNames from 'classnames';

export const ButtonTertiaryClasses = (themeName: string) => {
  if (themeName === 'aw') {
    return {
      btnClass:
        'flex w-fit items-center whitespace-normal rounded-lg border-4 border-gray px-m py-[9px] font-sans text-button font-heavy hover:border-black hover:bg-black hover:text-white disabled:border-gray disabled:text-gray disabled:hover:bg-theme-btn-bg disabled:cursor-not-allowed',
      iconClass: 'ml-xxs',
    };
  } else {
    return {
      btnClass:
        'group relative flex w-fit items-center font-serif text-button font-bold text-theme-text after:absolute after:bottom-[-4px] after:hidden after:h-[3px] after:w-full after:bg-theme-btn-icon-hover hover:after:inline-block disabled:text-gray',
      iconClass:
        'ml-[10px] text-theme-btn-icon group-hover:text-theme-btn-icon-hover group-hover:underline group-hover:decoration-theme-btn-icon-hover group-hover:underline-offset-8',
    };
  }
};

const ButtonTertiary = (props: ButtonProps): JSX.Element => {
  const { themeName } = useTheme();
  const { field, icon, classes, modalId, modalLinkText, ariaLabel } = props;
  const _icon = getEnum<IconTypes>(icon);

  if (field) {
    return (
      <LinkWrapper
        modalId={modalId}
        modalLinkText={modalLinkText}
        field={field}
        className={classNames(ButtonTertiaryClasses(themeName).btnClass, classes)}
        ariaLabel={ariaLabel}
      >
        {icon && <SvgIcon icon={_icon} className={ButtonTertiaryClasses(themeName).iconClass} />}
      </LinkWrapper>
    );
  }

  return <></>;
};

export default ButtonTertiary;
