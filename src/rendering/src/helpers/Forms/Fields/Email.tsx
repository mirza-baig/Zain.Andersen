import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useState } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import {
  isRuleIncludedInField,
  replacePlaceholders,
  getWidthClass,
} from 'lib/forms/FormFieldUtils';
import classNames from 'classnames';
import { FormFieldExport } from 'lib/forms';
import * as yup from 'yup';
import { getValidatonSchema } from 'lib/forms/FormFieldUtils';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { getValueProviderValue } from 'lib/forms/FormFieldUtils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';

export type EmailProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Email & FormFieldProps;

const getEmailValidationSchema = (props: EmailProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

const getInitialEmailValue = (
  props: EmailProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
};

const EmailComponent = (props: EmailProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const [showError, setShowError] = useState(false);
  const showConfirmEmail = props.fields?.showConfirmEmail?.value === true;
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  const placeholdersConfirmEmail: Record<string, string> = {
    fieldLabel: props.fields?.confirmEmailLabel?.value,
  };

  const validations = props.fields.validations;
  const requiredValidation =
    validations &&
    validations.find(
      (validation: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) =>
        getEnum(validation?.fields?.validationType) === 'required'
    );
  const errorMessage = requiredValidation && requiredValidation?.fields?.errorMessage?.value;
  const nameconfirmEmail = `confirmEmail_${props?.fields?.fieldName?.value}`;
  return (
    <>
      <FieldWrapper {...props}>
        <Field
          id={props.id}
          name={props?.fields?.fieldName?.value}
          placeholder={props.fields?.placeholderText?.value}
          type="email"
          className={classNames(
            themeData.classes.input,
            isInvalid ? themeData.classes.errorOutline : '',
            values[props?.fields?.fieldName?.value] ? 'border-black' : ''
          )}
        />
      </FieldWrapper>
      {showConfirmEmail && (
        <div className={classNames('relative mb-s', getWidthClass(props))}>
          <label
            className={classNames(
              themeData.classes.label,
              showError && !isInvalid ? themeData.classes.errorTextColor : ''
            )}
            htmlFor={nameconfirmEmail}
          >
            {props.fields?.confirmEmailLabel?.value}{' '}
            {isRuleIncludedInField(props, 'required') ? '*' : ''}
          </label>
          <Field
            id={nameconfirmEmail}
            name={nameconfirmEmail}
            placeholder={props.fields?.confirmEmailPlaceholderText?.value}
            type="email"
            className={classNames(
              themeData.classes.input,
              showError && !isInvalid ? themeData.classes.errorOutline : '',
              values[props?.fields?.fieldName?.value] ? 'border-black' : ''
            )}
            validate={(value: string) => {
              if (
                requiredValidation &&
                touched[nameconfirmEmail] &&
                !value &&
                values[props?.fields?.fieldName?.value]
              ) {
                setShowError(true);
                return errorMessage;
              } else {
                setShowError(false);
              }
              if (
                values[props?.fields?.fieldName?.value] &&
                value !== values[props?.fields?.fieldName?.value] &&
                touched[nameconfirmEmail]
              ) {
                setShowError(true);
                return props.fields?.confirmEmailMatchError?.value;
              } else {
                setShowError(false);
              }

              return undefined;
            }}
          />
          {touched[nameconfirmEmail] && errors[nameconfirmEmail] && (
            <>
              <span
                className={classNames(
                  themeData.classes.errorMessage,
                  themeData.classes.errorTextColor
                )}
              >
                {replacePlaceholders(errors[nameconfirmEmail] as string, placeholdersConfirmEmail)}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

const Email: FormFieldExport = {
  reactComponent: EmailComponent,
  getInitialValue: getInitialEmailValue,
  getValidationSchema: getEmailValidationSchema,
};

export default Email;
