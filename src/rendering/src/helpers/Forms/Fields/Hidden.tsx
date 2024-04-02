import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field } from 'formik';
import { FormFieldExport } from 'lib/forms';
import { getValueProviderValue } from 'lib/forms/FormFieldUtils';

export type HiddenProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Hidden & FormFieldProps;

const getHiddenFieldValue = (
  props: HiddenProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
};

const HiddenComponent = (props: HiddenProps): JSX.Element => {
  return (
    <div className="relative mb-s" data-te-input-wrapper-init>
      <Field id={props.id} name={props?.fields?.fieldName?.value || props.id} type="hidden" />
    </div>
  );
};

const Hidden: FormFieldExport = {
  reactComponent: HiddenComponent,
  getInitialValue: getHiddenFieldValue,
};

export default Hidden;
