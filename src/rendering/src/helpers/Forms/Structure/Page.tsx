import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useContext } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { fieldFactoryComponent } from 'temp/formFactory';
import classNames from 'classnames';
import { FormsContext } from 'lib/forms/FormContext';
import { BodyCopy } from 'src/helpers/BodyCopy';

interface ChildField extends FormFieldProps {
  templateName: string;
  displayName: string;
}

interface FormButton extends FormFieldProps {
  templateName: string;
  displayName: string;
}

export type PageProps = Feature.EnterpriseWeb.Enterprise.Forms.Structure.Page &
  FormFieldProps & {
    classes: string;
  };

const Page = (props: PageProps) => {
  const { isErrorOnSubmit } = useContext(FormsContext);
  const { formProps } = useContext(FormsContext);
  const paddingGap =
    formProps.fields?.inputPadding?.fields?.Value?.value === 'reduced'
      ? 'gap-x-s gap-y-xxs'
      : 'gap-y-m gap-x-s';

  if (!props.fields) {
    return <></>;
  }

  // Filter out Next and Previous buttons
  const regularChildren: ChildField[] = props.fields.children.filter(
    (child: ChildField) =>
      child.templateName !== 'Button' ||
      (child.displayName !== 'Next' &&
        child.displayName !== 'Previous' &&
        child.displayName !== 'Submit')
  );

  const nextButton: FormButton | undefined = props.fields.children.find(
    (child: FormButton) => child.displayName === 'Next' && child.templateName === 'Button'
  );

  const prevButton: FormButton | undefined = props.fields.children.find(
    (child: FormButton) => child.displayName === 'Previous' && child.templateName === 'Button'
  );

  const submitButton: FormButton | undefined = props.fields.children.find(
    (child: FormButton) => child.displayName === 'Submit' && child.templateName === 'Button'
  );

  return (
    <div className={classNames(props.classes, 'grid grid-cols-12 ', paddingGap)}>
      {regularChildren.map((child: FormFieldProps, childIndex: number) => (
        <React.Fragment key={childIndex}>{fieldFactoryComponent(child)}</React.Fragment>
      ))}

      {isErrorOnSubmit && (
        <BodyCopy
          fields={{ body: { value: isErrorOnSubmit } }}
          classes="relative mb-s col-span-12 text-[#F14343] text-small"
        />
      )}
      <div
        className={classNames(
          'col-span-12 mt-s flex gap-m md:col-span-10 md:col-start-1',
          paddingGap
        )}
      >
        {prevButton && <React.Fragment>{fieldFactoryComponent(prevButton)}</React.Fragment>}
        {nextButton && <React.Fragment>{fieldFactoryComponent(nextButton)}</React.Fragment>}
        {submitButton && <React.Fragment>{fieldFactoryComponent(submitButton)}</React.Fragment>}
      </div>
    </div>
  );
};

export default Page;
