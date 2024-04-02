import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useContext } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { fieldFactoryComponent } from 'temp/formFactory';
import classNames from 'classnames';
import { FormsContext } from 'lib/forms/FormContext';
import { BodyCopy } from 'src/helpers/BodyCopy';

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
  return (
    <div className={classNames(props.classes, 'grid grid-cols-12', paddingGap)}>
      {props.fields?.children.map((child: FormFieldProps, childIndex: number) => {
        return <React.Fragment key={childIndex}>{fieldFactoryComponent(child)}</React.Fragment>;
      })}
      {isErrorOnSubmit && (
        <BodyCopy
          fields={{ body: { value: isErrorOnSubmit } }}
          classes="relative mb-s col-span-12 text-[#F14343] text-small"
        />
      )}
    </div>
  );
};

export default Page;
