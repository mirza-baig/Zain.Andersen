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
import { getValidatonSchema } from 'lib/forms/FormFieldUtils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';

export type NumberProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Number & FormFieldProps;

const getNumberInitialValue = (props: NumberProps) => {
  if (props?.fields?.defaultValue) {
    return props?.fields?.defaultValue?.value || '';
  }
  return '';
};

const getNumberValidationSchema = (props: NumberProps, schema: yup.AnyObject) => {
  // function to extract and remove 'required' rule from validations array
  function updateValidationsProps(
    props: NumberProps,
    typesToFilter: string[]
  ): {
    updatedProps: NumberProps;
    extractedObjects:
      | Record<string, Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation>
      | undefined;
  } {
    const { validations } = props.fields;

    const extractedObjects:
      | Record<string, Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation>
      | undefined = {};

    const updatedValidations = validations.filter(
      (item: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
        const validationType = getEnum<string>(item.fields?.validationType) || '';

        if (typesToFilter.includes(validationType)) {
          (
            extractedObjects as Record<
              string,
              Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation | undefined
            >
          )[validationType] = item;
          return false; // Exclude the filtered validation from the updated array
        }

        return true; // Keep other validations in the array
      }
    );

    const updatedProps = {
      ...props,
      fields: {
        ...props.fields,
        validations: updatedValidations,
      },
    };

    return { updatedProps, extractedObjects };
  }

  const { validations } = props?.fields;

  const dependsOn = props?.fields?.dependsOn?.fields?.fieldName?.value;

  if (validations) {
    const { extractedObjects, updatedProps } = updateValidationsProps(props, ['required', 'min']);

    const validator = getValidatonSchema(
      'number',
      dependsOn ? updatedProps : props
    ) as yup.NumberSchema;

    if (dependsOn && validator) {
      schema[props?.fields?.fieldName?.value] = yup.lazy((value) => {
        // Joint field validations
        return validator.when(dependsOn, ([dependsOnValue], currentSchema) => {
          if (!(dependsOnValue >= 1) && !(value >= 1)) {
            currentSchema = currentSchema.required(
              extractedObjects?.required?.fields?.errorMessage?.value || ''
            );
            if (dependsOnValue === 0 && value === 0) {
              currentSchema = currentSchema.moreThan(
                0,
                extractedObjects?.required?.fields?.errorMessage?.value || ''
              );
            } else {
              currentSchema = currentSchema.min(
                props.fields?.minLength?.value,
                extractedObjects?.min?.fields?.errorMessage?.value || ''
              );
            }
          } else {
            currentSchema = currentSchema.min(
              dependsOnValue > 0 && value === 0 ? 0 : props.fields?.minLength?.value,
              extractedObjects?.min?.fields?.errorMessage?.value || ''
            );
          }
          return currentSchema;
        });
      });
    } else {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

const NumberComponent = (props: NumberProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  return (
    <FieldWrapper
      {...props}
      showRequiredIndication={!(values[props?.fields?.dependsOn?.fields?.fieldName?.value] >= 1)}
    >
      <Field
        id={props.id}
        name={props?.fields?.fieldName?.value}
        type="number"
        placeholder={props.fields?.placeholderText?.value || ''}
        min={props.fields?.minLength?.value}
        max={props.fields?.maxLength?.value}
        className={classNames(
          'text-center',
          themeData.classes.input,
          isInvalid ? themeData.classes.errorOutline : '',
          values[props?.fields?.fieldName?.value] ? 'border-black' : ''
        )}
      />
    </FieldWrapper>
  );
};

const Number: FormFieldExport = {
  reactComponent: NumberComponent,
  getInitialValue: getNumberInitialValue,
  getValidationSchema: getNumberValidationSchema,
};

export default Number;
