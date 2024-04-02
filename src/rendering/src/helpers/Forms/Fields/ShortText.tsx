import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import * as yup from 'yup';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { FormFieldExport } from 'lib/forms';
import {
  getValidatonSchema,
  isRuleIncludedInField,
  getValueProviderValue,
} from 'lib/forms/FormFieldUtils';

export type ShortTextProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.ShortText &
  FormFieldProps;

const getShortTextInitialValue = (
  props: ShortTextProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
  return '';
};

const getShortTextValidationSchema = (props: ShortTextProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = (validator as yup.StringSchema).trim();
    }
  }
  return schema;
};

const ShortTextComponent = (props: ShortTextProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  return (
    <FieldWrapper {...props}>
      <Field
        id={props.id}
        name={props?.fields?.fieldName?.value}
        type={isRuleIncludedInField(props, 'url') ? 'url' : 'text'}
        placeholder={props.fields?.placeholderText?.value || ''}
        minLength={props.fields?.minLength?.value}
        maxLength={props.fields?.maxLength?.value}
        className={classNames(
          themeData.classes.input,
          isInvalid ? themeData.classes.errorOutline : '',
          values[props?.fields?.fieldName?.value] ? 'border-black' : ''
        )}
      />
    </FieldWrapper>
  );
};

const ShortText: FormFieldExport = {
  reactComponent: ShortTextComponent,
  getInitialValue: getShortTextInitialValue,
  getValidationSchema: getShortTextValidationSchema,
};

export default ShortText;
