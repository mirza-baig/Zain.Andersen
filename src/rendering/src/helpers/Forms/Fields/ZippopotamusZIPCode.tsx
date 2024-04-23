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
import { FocusEvent } from 'react';

export type ZippopotamusZipCodeProps =
  Feature.EnterpriseWeb.Enterprise.Forms.Fields.ZippopotamusZipCode & FormFieldProps;

const getZIPCodeInitialValue = (
  props: ZippopotamusZipCodeProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
};

const getZIPCodeValidationSchema = (props: ZippopotamusZipCodeProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName.value] = validator;
    }
  }
  return schema;
};

const ZIPCodeComponent = (props: ZippopotamusZipCodeProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values, setFieldValue } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName.value];

  const cityFieldName =
    props?.fields?.cityField?.fields?.fieldName?.value || `${props?.fields?.fieldName.value}-city`;
  const cityIdValue = props?.fields?.cityField?.fields?.id || `${props.id}-city`;

  const stateFieldName =
    props?.fields?.stateField?.fields?.fieldName?.value ||
    `${props?.fields?.fieldName.value}-state`;
  const stateIdValue = props?.fields?.stateField?.fields?.id || `${props.id}-state`;

  const handleZipBlur = (e: FocusEvent<HTMLInputElement>) => {
    const zipValue = (e.target as HTMLInputElement).value;
    const isValidZip = /^[0-9]{5}$/.test(zipValue);

    const zippopotamusCityStateFetcher = async (zipCode: string) => {
      try {
        const response = await fetch('/api/enterprise/zippopotam-us/', {
          method: 'POST',
          body: JSON.stringify(zipCode),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (result && Object.keys(result).length > 0) {
          const postCity = result['places'][0]['place name'];
          if (postCity) {
            setFieldValue(cityFieldName, postCity);
          }

          const postState = result['places'][0]['state abbreviation'];
          if (postState) {
            setFieldValue(stateFieldName, postState);
          }
        }
      } catch (error) {
        console.error('Error fetching Zippopotum.US data:', error);
      }
    };

    setFieldValue(cityFieldName, '');
    setFieldValue(stateFieldName, '');

    if (zipValue && isValidZip) {
      zippopotamusCityStateFetcher(zipValue);
    }
  };

  return (
    <>
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
          onKeyUp={handleZipBlur}
        />
      </FieldWrapper>
      {props.fields?.cityField && (
        <div className="relative hidden" data-te-input-wrapper-init>
          <Field id={cityIdValue} name={cityFieldName} type="hidden" />
        </div>
      )}
      {props.fields?.stateField && (
        <div className="relative hidden" data-te-input-wrapper-init>
          <Field id={stateIdValue} name={stateFieldName} type="hidden" />
        </div>
      )}
    </>
  );
};

const ZippopotamusZipCode: FormFieldExport = {
  reactComponent: ZIPCodeComponent,
  getInitialValue: getZIPCodeInitialValue,
  getValidationSchema: getZIPCodeValidationSchema,
};

export default ZippopotamusZipCode;
