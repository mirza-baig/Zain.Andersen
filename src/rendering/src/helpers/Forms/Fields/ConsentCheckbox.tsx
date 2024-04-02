import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useContext } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import { getValidatonSchema } from 'lib/forms/FormFieldUtils';
import { FormFieldExport } from 'lib/forms';
import * as yup from 'yup';
import { getEnum } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { FormsContext } from 'lib/forms/FormContext';

export type ConsentCheckboxProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.ConsentCheckbox &
  FormFieldProps;

const getConsentCheckboxInitialValue = (props: ConsentCheckboxProps) => {
  if (props?.fields?.defaultValue) {
    return props.fields.defaultValue?.value;
  }
  return false;
};

const getConsentCheckboxValidationSchema = (props: ConsentCheckboxProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    let validator = getValidatonSchema('bool', props);
    const requiredValidation = validations.find(
      (validationItem: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
        return getEnum(validationItem.fields?.validationType) == 'required';
      }
    );

    if (requiredValidation) {
      validator = validator.oneOf([true], requiredValidation.fields?.errorMessage?.value);
    }

    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

const ConsentCheckboxComponent = (props: ConsentCheckboxProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  const { isFormInteracted } = useContext(FormsContext);

  if (
    props?.fields?.hideFieldOnLoad?.value &&
    !isFormInteracted &&
    !(Object.keys(touched)?.length > 0)
  ) {
    return <></>;
  }

  return (
    <FieldWrapper {...props}>
      <div className="flex w-full gap-xxs">
        <Field
          className={classNames(
            themeData.classes.checkbox.input,
            isInvalid ? themeData.classes.checkbox.invalidInput : ''
          )}
          type="checkbox"
          id={props.id}
          name={props?.fields?.fieldName?.value}
        />
        {/* custom checkbox icon */}
        <svg
          role="img"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className={themeData.classes.checkbox.customTickIcon}
        >
          <title>checkbox</title>
          <g clipPath="url(#clip0_4834_6396)">
            <path
              d="M7.50013 13.5454L4.02513 10.0704L2.8418 11.2454L7.50013 15.9038L17.5001 5.90376L16.3251 4.72876L7.50013 13.5454Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_4834_6396">
              <rect width="20" height="20" fill="currentColor" transform="translate(0 0.0703125)" />
            </clipPath>
          </defs>
        </svg>
        <label htmlFor={props.id}>
          <BodyCopy
            refer={''}
            fields={{ body: props.fields?.consentText }}
            classes={themeData.classes.consentText}
          />
        </label>
      </div>
    </FieldWrapper>
  );
};

const ConsentCheckbox: FormFieldExport = {
  reactComponent: ConsentCheckboxComponent,
  getInitialValue: getConsentCheckboxInitialValue,
  getValidationSchema: getConsentCheckboxValidationSchema,
};

export default ConsentCheckbox;
