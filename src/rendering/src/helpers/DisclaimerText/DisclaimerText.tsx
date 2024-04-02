import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import classNames from 'classnames';
import { RichTextWrapper } from '../RichTextWrapper';

export type DisclaimerProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.Disclaimer & {
  disclaimerLayoutClasses?: string;
  disclaimerClasses?: string;
} & FormFieldProps;

const DisclaimerText = (props: Partial<DisclaimerProps>) => {
  if (!props.fields) {
    return <></>;
  }

  return (
    <div className={classNames(props.disclaimerLayoutClasses || 'col-span-12')}>
      <RichTextWrapper
        field={{
          value: (props.fields as Field<string>).value,
        }}
        className={classNames('!legal-copy', props.disclaimerClasses)}
      />
    </div>
  );
};
export default DisclaimerText;
