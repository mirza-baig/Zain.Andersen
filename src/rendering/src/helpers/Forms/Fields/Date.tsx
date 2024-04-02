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
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { FormFieldExport } from 'lib/forms';
import * as yup from 'yup';
import { getValidatonSchema } from 'lib/forms/FormFieldUtils';
import { getEnum } from 'lib/utils';
import { useState } from 'react';

export type DateProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Date & FormFieldProps;

const getDateValidationSchema = (props: DateProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

const getInitialDateValue = (props: DateProps) => {
  const defaultDate = getEnum(props.fields?.defaultValue);
  let selectedDate = null;

  if (defaultDate && defaultDate === 'today') {
    selectedDate = new Date().toISOString().split('T')[0];
  } else if (defaultDate && defaultDate === 'custom') {
    const date = new Date(props.fields.defaultValueCustom?.value);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    selectedDate = `${year}-${month}-${day}`;
  }

  return selectedDate || '';
};

const DateComponent = (props: DateProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values, setFieldValue } = useFormikContext<FormikValues>();
  const [startDate, setStartDate] = useState<string | null>(getInitialDateValue(props));
  const minDate = getEnum(props.fields.minDate);
  const maxDate = getEnum(props.fields.maxDate);
  let selectedMinDate: Date | null = null;
  let selectedMaxDate: Date | null = null;

  if (minDate && minDate === 'today') {
    selectedMinDate = new Date();
  } else if (minDate && minDate === 'tomorrow') {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    selectedMinDate = tomorrow;
  } else if (minDate && minDate === 'yesterday') {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    selectedMinDate = yesterday;
  } else if (minDate && minDate === 'custom') {
    selectedMinDate = new Date(props.fields.minDateCustom?.value);
  }

  if (maxDate && maxDate === 'today') {
    selectedMaxDate = new Date();
  } else if (maxDate && maxDate === 'tomorrow') {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    selectedMaxDate = tomorrow;
  } else if (maxDate && maxDate === 'yesterday') {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    selectedMaxDate = yesterday;
  } else if (maxDate && maxDate === 'custom') {
    selectedMaxDate = new Date(props.fields.maxDateCustom?.value);
  }

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isoDate = '';
    if (e.target.value) {
      const selectedDate = new Date(e.target.value);
      if (!isNaN(selectedDate.getTime())) {
        isoDate = selectedDate.toISOString();
      }
    }
    setStartDate(e.target.value);
    setFieldValue(props?.fields?.fieldName?.value, isoDate);
  };

  return (
    <FieldWrapper {...props}>
      <Field name={props?.fields?.fieldName?.value} id={props.id}>
        {({ field }: FieldProps) => (
          <input
            {...field}
            id={props.id}
            type="date"
            placeholder={props.fields.placeholderText?.value}
            min={
              selectedMinDate !== null
                ? new Date(selectedMinDate).toISOString().split('T')[0]
                : undefined
            }
            max={
              selectedMaxDate !== null
                ? new Date(selectedMaxDate).toISOString().split('T')[0]
                : undefined
            }
            value={startDate || undefined}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key !== 'Tab') {
                e.preventDefault();
              }
            }}
            className={classNames(
              themeData.classes.input,
              isInvalid ? themeData.classes.errorOutline : '',
              values[props?.fields?.fieldName?.value] ? 'border-black' : ''
            )}
          />
        )}
      </Field>
    </FieldWrapper>
  );
};

const DateInput: FormFieldExport = {
  reactComponent: DateComponent,
  getInitialValue: getInitialDateValue,
  getValidationSchema: getDateValidationSchema,
};

export default DateInput;
