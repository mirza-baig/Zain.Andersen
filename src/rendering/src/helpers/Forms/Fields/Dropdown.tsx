import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useRef } from 'react';
import * as yup from 'yup';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { FormFieldExport } from 'lib/forms';
import { SvgIcon } from 'src/helpers/SvgIcon';
import {
  getKeyValuePairList,
  getValidatonSchema,
  getValueProviderValue,
} from 'lib/forms/FormFieldUtils';

function getInitialDropdownValue(
  props: DropdownProps,
  additionalDetails?: Record<string, unknown> | undefined
) {
  const valueProviderVal = getValueProviderValue(props, additionalDetails);
  if (
    valueProviderVal &&
    getKeyValuePairList(props).some(
      (option: { value: string }) => option.value === valueProviderVal
    )
  ) {
    return valueProviderVal;
  }

  let defaultSelectedValue;
  if (props.fields?.defaultValue) {
    defaultSelectedValue =
      props.fields?.defaultValue?.fields[props.fields?.valueFieldName?.value]?.value;
  } else if (!props.fields?.showDefaultDisplay?.value) {
    defaultSelectedValue = getKeyValuePairList(props)?.[0].value;
  } else {
    defaultSelectedValue = '';
  }

  return defaultSelectedValue;
}

const getDropdownValidationSchema = (props: DropdownProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

export type DropdownProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Dropdown & FormFieldProps;

const DropdownComponent = (props: DropdownProps): JSX.Element => {
  const { themeName, themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  if (!props.fields) {
    return <></>;
  }

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  const dropdownOptions = getKeyValuePairList(props);

  if (!dropdownOptions) {
    return <></>;
  }

  if (props.fields?.showDefaultDisplay?.value) {
    dropdownOptions?.unshift({ label: props.fields?.defaultDisplay?.value || '', value: '' });
  }

  return (
    <FieldWrapper {...props}>
      <div className="relative" ref={dropdownContainerRef}>
        <Field
          id={props.id}
          name={props?.fields?.fieldName?.value}
          as="select"
          value={values[props?.fields?.fieldName?.value]}
          className={classNames(
            'relative pr-ml',
            themeData.classes.input,
            isInvalid ? themeData.classes.errorOutline : '',
            values[props?.fields?.fieldName?.value] ? 'border-black' : ''
          )}
        >
          {/* Map over options */}
          {dropdownOptions.map((option: Record<string, string>) => (
            <option
              key={option.value}
              value={option.value}
              disabled={themeName === 'aw' && option.value === ''}
            >
              {option.label}
            </option>
          ))}
          <div className="absolute right-xs top-1/2">
            <SvgIcon icon="dropdown-arrow" />
          </div>
        </Field>
      </div>
    </FieldWrapper>
  );
};

const Dropdown: FormFieldExport = {
  reactComponent: DropdownComponent,
  getInitialValue: getInitialDropdownValue,
  getValidationSchema: getDropdownValidationSchema,
};

export default Dropdown;
