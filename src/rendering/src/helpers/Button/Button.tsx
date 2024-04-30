import { LinkField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from 'lib/utils';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import ButtonPrimary from './buttons/btn--primary';
import ButtonSecondary from './buttons/btn--secondary';
import ButtonTertiary from './buttons/btn--tertiary';
import ButtonLinkRightIcon from './buttons/btn--link-right-icon';
import ButtonLink from './buttons/btn--link';
import ButtonDarkBG from './buttons/btn--dark-bg';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'dark-bg'
  | 'iconOnly'
  | 'link-right-icon';

export type ButtonProps = {
  field?: LinkField;
  ariaLabel?: Field<string>;
  variant: Item | undefined;
  icon?: Item | undefined;
  classes: string;
  modalId?: string | undefined;
  modalLinkText?: Field<string>;
  videoModal?: string | undefined; //video modal
};

const Button = (props: ButtonProps) => {
  console.log('button props video', props.videoModal);
  const _variant = getEnum<ButtonVariants>(props.variant) ?? 'primary';

  switch (_variant) {
    case 'primary':
      return <ButtonPrimary {...props} />;
    case 'secondary':
      return <ButtonSecondary {...props} />;
    case 'tertiary':
      return <ButtonTertiary {...props} />;
    case 'link':
      return <ButtonLink {...props} />;
    case 'dark-bg':
      return <ButtonDarkBG {...props} />;
    case 'link-right-icon':
      return <ButtonLinkRightIcon {...props} />;
    default:
      return <ButtonPrimary {...props} />;
  }
};

export default Button;
