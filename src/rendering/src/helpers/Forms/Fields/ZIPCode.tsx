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

export type ZIPCodeProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.ZipCode & FormFieldProps;

const getZIPCodeInitialValue = (
  props: ZIPCodeProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
};

const getZIPCodetValidationSchema = (props: ZIPCodeProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName.value] = validator;
    }
  }
  return schema;
};

const ZIPCodeComponent = (props: ZIPCodeProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName.value];

  return (
    <FieldWrapper {...props}>
      <Field
        id={props.id}
        name={props?.fields?.fieldName.value}
        type={'text'}
        placeholder={props.fields?.placeholderText?.value || ''}
        className={classNames(
          themeData.classes.input,
          isInvalid ? themeData.classes.errorOutline : '',
          values[props?.fields?.fieldName.value] ? 'border-black' : ''
        )}
      />
    </FieldWrapper>
  );
};

const ZIPCode: FormFieldExport = {
  reactComponent: ZIPCodeComponent,
  getInitialValue: getZIPCodeInitialValue,
  getValidationSchema: getZIPCodetValidationSchema,
};

export default ZIPCode;
