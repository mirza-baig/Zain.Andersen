import classNames from 'classnames';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { Button } from '../Button';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

export type ButtonGroupProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta1 &
  Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta2 &
  Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta3 & {
    classes: {
      wrapper: string;
      cta1Classes: string;
      cta2Classes: string;
      cta3Classes?: string;
      ctaAlignment?: boolean;
    };
  };

const ButtonGroup = ({ fields, classes }: ButtonGroupProps): JSX.Element => {
  return (
    <div
      className={classNames(
        classes?.wrapper,
        classes?.ctaAlignment
          ? ' md:flex-column mb-m flex items-start md:mb-0 md:gap-y-4'
          : 'mb-s flex items-start md:flex-row md:items-center md:space-x-4'
      )}
    >
      {fields?.cta1Link && (
        <Button
          field={fields?.cta1Link}
          variant={fields?.cta1Style}
          icon={fields?.cta1Icon}
          modalId={
            (
              fields?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
            )?.fields?.modalId?.value
          }
          modalLinkText={fields?.cta1ModalLinkText}
          classes={classNames(classes?.cta1Classes, 'mr-m')}
          ariaLabel={fields.cta1AriaLabel}
        />
      )}

      {fields?.cta2Link && (
        <Button
          field={fields?.cta2Link}
          variant={fields?.cta2Style}
          icon={fields?.cta2Icon}
          modalId={
            (
              fields?.cta2Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
            )?.fields?.modalId?.value
          }
          modalLinkText={fields?.cta2ModalLinkText}
          classes={classNames(classes?.cta2Classes, 'mb-4 md:mb-0')}
          ariaLabel={fields.cta2AriaLabel}
        />
      )}

      {fields?.cta3Link && (
        <div>
          <Button
            field={fields?.cta3Link}
            variant={fields?.cta3Style}
            icon={fields?.cta3Icon}
            modalId={
              (
                fields?.cta3Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
              )?.fields?.modalId?.value
            }
            modalLinkText={fields?.cta3ModalLinkText}
            classes={classNames(classes?.cta3Classes, 'md:ml-5', 'mt-2 md:mt-0')}
            ariaLabel={fields.cta3AriaLabel}
          />
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
