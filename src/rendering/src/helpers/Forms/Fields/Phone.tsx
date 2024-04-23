import React, { useEffect } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import {
  Field,
  FieldProps,
  FormikErrors,
  FormikTouched,
  FormikValues,
  useFormikContext,
} from 'formik';
import InputMask from 'react-input-mask';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { getValidatonSchema, getValueProviderValue } from 'lib/forms/FormFieldUtils';
import { FormFieldExport } from 'lib/forms';
import * as yup from 'yup';

export type PhoneProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Phone & FormFieldProps;
const formatPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length === 10) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  } else {
    return phoneNumber;
  }
};

const getPhoneInitialValue = (
  props: PhoneProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    const phoneNum = valueProvider as string;
    if (/^\d{10}$/.test(phoneNum)) {
      return formatPhoneNumber(phoneNum);
    } else {
      return '';
    }
  } else {
    const defaultValue = props?.fields?.defaultValue?.value || '';
    return formatPhoneNumber(defaultValue);
  }
};
const getPhoneValidationSchema = (props: PhoneProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

const PhoneComponent = (props: PhoneProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values, setFieldValue } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  useEffect(() => {
    const defaultValue = props?.fields?.defaultValue?.value || '';
    if (defaultValue.length === 10) {
      setFieldValue(props?.fields?.fieldName?.value, getPhoneInitialValue(props));
    }
    // We can ignore the react-hooks/exhaustive-deps warning for adding props and its properties to dependency in this useEffect as those are coming from layout service.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFieldValue]);

  return (
    <>
      <FieldWrapper {...props}>
        <>
          <Field id={props.id} name={props?.fields?.fieldName?.value}>
            {({ field }: FieldProps) => (
              <InputMask
                {...field}
                mask={'(999) 999-9999'}
                maskChar="_"
                name={props?.fields?.fieldName?.value}
                placeholder={props.fields?.placeholderText?.value}
                type="tel"
                className={classNames(
                  themeData.classes.input,
                  isInvalid ? themeData.classes.errorOutline : '',
                  values[props?.fields?.fieldName?.value] ? 'border-black' : ''
                )}
                value={values[props?.fields?.fieldName?.value]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(event);
                }}
              />
            )}
          </Field>
        </>
      </FieldWrapper>
    </>
  );
};

const Phone: FormFieldExport = {
  reactComponent: PhoneComponent,
  getInitialValue: getPhoneInitialValue,
  getValidationSchema: getPhoneValidationSchema,
};

export default Phone;
