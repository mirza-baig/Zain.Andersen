import * as yup from 'yup';
import { FormFieldProps } from './FormFieldProps';
import { fieldFactoryValidation } from 'temp/formFactory';

// generate form for the single field with all the validation
const createYupValidation = (schema: yup.AnyObject, formField: FormFieldProps) => {
  const updatedSchema = fieldFactoryValidation(formField, schema);
  if (!updatedSchema) {
    return schema;
  }
  return updatedSchema;
};

//  generate the Yup schema for a single step
export const generateYupSchemaForStep = (stepData: FormFieldProps) => {
  const stepSchema = stepData?.fields?.children?.reduce(createYupValidation, {});
  return yup.object().shape(stepSchema);
};
