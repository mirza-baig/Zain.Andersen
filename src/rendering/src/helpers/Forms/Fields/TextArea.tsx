import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import * as yup from 'yup';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import { getValidatonSchema, getValueProviderValue } from 'lib/forms/FormFieldUtils';
import { FormFieldExport } from 'lib/forms';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { ChangeEvent, useState } from 'react';

export type TextAreaProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.TextArea & FormFieldProps;

const getInitialTextAreaValue = (
  props: TextAreaProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
};

const getTextAreaValidationSchema = (props: TextAreaProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = (validator as yup.StringSchema).trim();
    }
  }
  return schema;
};

const TextAreaComponent = (props: TextAreaProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values, handleChange } = useFormikContext<FormikValues>();

  const maxLength = props.fields.maxLength?.value;
  const minLength = props.fields.minLength?.value;

  const [remainingChar, setRemainingChar] = useState(
    parseInt(maxLength) - values[props?.fields?.fieldName?.value]?.length
  );

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  return (
    <FieldWrapper {...props}>
      <Field
        id={props.id}
        name={props?.fields?.fieldName?.value}
        placeholder={props.fields?.placeholderText?.value}
        rows={props.fields?.rows?.value}
        minLength={minLength}
        maxLength={maxLength}
        as="textarea"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          if (props?.fields?.showRemainingCharactersCount?.value) {
            setRemainingChar(parseInt(maxLength) - e.target.value.length);
          }
          handleChange(e);
        }}
        className={classNames(
          themeData.classes.textarea,
          isInvalid ? themeData.classes.errorOutline : '',
          values[props?.fields?.fieldName?.value] ? 'border-black' : 'border-gray'
        )}
      />

      {props?.fields?.showRemainingCharactersCount?.value && maxLength && (
        <div className={themeData.classes.textareaCharCount}>
          {remainingChar === parseInt(maxLength)
            ? `${remainingChar} characters allowed`
            : `${remainingChar} characters remaining`}
        </div>
      )}
    </FieldWrapper>
  );
};

const TextArea: FormFieldExport = {
  reactComponent: TextAreaComponent,
  getInitialValue: getInitialTextAreaValue,
  getValidationSchema: getTextAreaValidationSchema,
};

export default TextArea;
