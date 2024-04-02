import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import * as yup from 'yup';
import { ButtonCardItemProps } from './ButtonCard/ButtonCardItem';
import { FormFieldProps } from 'lib/forms';
import { getEnum } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { getValidatonSchema, getValueProviderValue } from 'lib/forms/FormFieldUtils';
import { TileButtonProps } from './TileButton/TileButton';

export type SelectionTypes = 'single' | 'multiple';

export type ButtonCardProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.ButtonCard & {
  fields: {
    datasource: {
      children: Array<ButtonCardItemProps | TileButtonProps>;
    };
  };
} & FormFieldProps;

export const getButtonGroupInitialValue = (
  props: ButtonCardProps,
  additionalDetails?: Record<string, unknown> | undefined
) => {
  const providerValue = getValueProviderValue(props, additionalDetails);
  if (providerValue) {
    if (
      getEnum<SelectionTypes>(props.fields?.selection) === 'multiple' &&
      !Array.isArray(providerValue)
    ) {
      return [providerValue];
    } else {
      return providerValue;
    }
  } else {
    return getEnum<SelectionTypes>(props.fields?.selection) === 'multiple' ? [] : '';
  }
};

export const getButtonGroupValidationSchema = (props: ButtonCardProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  const isMultiSelectEnabled = getEnum<SelectionTypes>(props.fields?.selection) === 'multiple';

  if (isMultiSelectEnabled) {
    props.fields.minLength = {
      value: 1,
    };

    props.fields.validations.forEach(
      (validationRule: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
        if (getEnum(validationRule.fields?.validationType) === 'required') {
          //@ts-ignore Need to ignore below line as we want to update the required field validation type to min validation if button card type is multi select
          validationRule.fields.validationType.fields.Value.value = 'min';
        }
      }
    );
  }

  if (validations) {
    const validator = getValidatonSchema(isMultiSelectEnabled ? 'array' : 'string', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};
