/***  We can ignore no-explicit-any warning for this file, as it contains generic utils which is being used across whole GFB */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as yup from 'yup';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { FormFieldProps } from './FormFieldProps';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { formValueProviderFactory } from 'temp/formValueFactory';
import { FormExtendedProps } from './FormContext';

export const isRuleIncludedInField = (props: any, validationRuleToMatch: string): boolean => {
  return props?.fields?.validations?.some(
    (validationItem: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
      const validationType = getEnum(validationItem.fields?.validationType);
      return validationType === validationRuleToMatch;
    }
  );
};

// used for replacing token placeholders with actual values
export function replacePlaceholders(
  inputString: string,
  placeholders: Record<string, boolean | string | any[] | number>,
  useDoubleBraces = false
): string {
  const regexPattern = useDoubleBraces ? /{{(.*?)}}/g : /{(.*?)}/g;

  const typeConverters: Record<string, (value: any) => string> = {
    string: (value) => (value !== undefined && value !== null ? String(value) : ''),
    boolean: (value) => (value ? 'true' : 'false'),
    number: (value) => String(value),
    object: (value) => {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return '';
        }
        return value.map(String).join(', ');
      }
      return String(value);
    },
  };

  return inputString?.replace(regexPattern, (_match, placeholderName) => {
    const placeholderValue = placeholders[placeholderName];
    const valueType = typeof placeholderValue;

    const converter = typeConverters[valueType] || typeConverters.string;

    return converter(placeholderValue);
  });
}

export function getKeyValuePairList(props: FormFieldProps) {
  const { datasource, valueFieldName, displayFieldName } = props.fields;

  if (!datasource || !datasource.children) {
    return null;
  }

  const list = datasource.children.map((item: Item) => {
    return {
      label: (item.fields[displayFieldName?.value || 'value'] as Field<string>)?.value,
      value: (item.fields[valueFieldName?.value || 'value'] as Field<string>)?.value,
    };
  });

  return list;
}

type inputValueTypes = 'string' | 'number' | 'bool' | 'array';

export function getValidatonSchema(inputValueType: inputValueTypes, props: FormFieldProps) {
  let validator: yup.AnySchema = (yup[inputValueType] as () => yup.AnySchema)();
  const { validations } = props?.fields;

  validations.forEach(
    (validationRule: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
      const ValidationType = getEnum<string>(validationRule?.fields?.validationType);
      const ErrorMessage = validationRule.fields?.errorMessage?.value || '';
      let validationRuleParameter;

      switch (ValidationType) {
        case 'min':
          validationRuleParameter = props?.fields?.minLength?.value;
          break;
        case 'max':
          validationRuleParameter = props?.fields?.maxLength?.value;
          break;
        default:
          validationRuleParameter = validationRule?.fields?.validationRule?.value;
      }

      function getParams(validationRuleParameter: string | number, ErrorMessage: string) {
        if (
          typeof validationRuleParameter !== 'undefined' &&
          validationRuleParameter !== '' &&
          validationRuleParameter !== null
        ) {
          return [validationRuleParameter, ErrorMessage];
        } else {
          return [ErrorMessage];
        }
      }

      validator = (
        validator[ValidationType as keyof yup.AnySchema] as (...args: any[]) => yup.AnySchema
      )(...getParams(validationRuleParameter, ErrorMessage));
    }
  );

  return validator;
}

export function getWidthClass(props: FormFieldProps) {
  const widthSet = props.fields.width?.fields?.Value?.value || '';
  const widthClasses: Record<string, string> = {
    '6': 'col-span-12 md:col-span-6',
    '4': 'col-span-12 md:col-span-4',
    '3': 'col-span-12 md:col-span-3',
    '2': 'col-span-12 md:col-span-2',
    '1': 'col-span-12 md:col-span-1',
    default: 'col-span-12',
  };

  return widthClasses[widthSet] || widthClasses.default;
}

export function getValueProviderValue(
  props: FormFieldProps,
  additionalDetails?: Record<string, unknown> | undefined
) {
  const valueProviders = props.fields?.valueProviders;
  if (valueProviders?.length > 0) {
    for (let i = 0; i < valueProviders.length; i++) {
      const provider: FormFieldProps = valueProviders[i];
      const providerHandler = formValueProviderFactory(provider);
      const value = providerHandler?.executeProvider(additionalDetails);
      if (value !== null && value !== undefined) {
        return value;
      }
    }
  }
  return null;
}

export function formatDateToCustomFormat(inputDate: Date) {
  if (inputDate) {
    const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }
  return '';
}

export const getFieldData = (
  formProps: FormExtendedProps | undefined,
  formData: any
): Record<string, any> => {
  const fieldData: Record<string, any> = {};

  Object.keys(formData).forEach((field) => {
    if (formData[field]) {
      fieldData[field] = formData[field];
    }
  });

  fieldData['sessionId'] = formProps?.sessionId || '';

  return fieldData;
};
