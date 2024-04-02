import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import * as yup from 'yup';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import FieldWrapper from '../Structure/FieldWrapper/FieldWrapper';
import { FormFieldExport } from 'lib/forms';
import {
  getKeyValuePairList,
  getValidatonSchema,
  getValueProviderValue,
} from 'lib/forms/FormFieldUtils';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field as JSSField } from '@sitecore-jss/sitecore-jss-nextjs';

function getInitialCheckboxGroupValue(
  props: CheckboxGroupProps,
  additionalDetails?: Record<string, unknown> | undefined
) {
  const providerValue = getValueProviderValue(props, additionalDetails);
  if (providerValue) {
    if (!Array.isArray(providerValue)) {
      return [providerValue];
    } else {
      return providerValue;
    }
  } else {
    const selectedValues: string[] = [];

    if (props?.fields?.defaultValue) {
      props?.fields?.defaultValue.forEach((defaultValueItem: Item) => {
        const fieldValue = (
          defaultValueItem.fields[props.fields?.valueFieldName?.value] as JSSField<string>
        )?.value;
        if (fieldValue) {
          selectedValues.push(fieldValue);
        }
      });
    }
    return selectedValues;
  }
  return '';
}

const getCheckboxGroupValidationSchema = (props: CheckboxGroupProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
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

  if (validations) {
    const validator = getValidatonSchema('array', props);
    if (validator) {
      schema[props?.fields?.fieldName?.value] = validator;
    }
  }
  return schema;
};

export type CheckboxGroupProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.CheckboxGroup &
  FormFieldProps;

const CheckboxGroupComponent = (props: CheckboxGroupProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  const checkboxOptions = getKeyValuePairList(props);
  const datasource = props?.fields?.datasource?.children;
  checkboxOptions &&
    datasource &&
    datasource.length > 0 &&
    datasource.forEach((child: Item, index: number) => {
      checkboxOptions[index].id = child.id;
    });

  return (
    <FieldWrapper {...props} isArrayField>
      <div className={classNames('mt-xs flex w-full flex-col')}>
        {checkboxOptions?.map(
          (option: Record<'id' | 'label' | 'value', 'string'>, index: number) => (
            <div
              key={option.id}
              className={classNames(
                ' mb-m flex  items-center text-dark-gray hover:text-black',
                index === checkboxOptions?.length - 1 ? '!mr-0 !mb-0' : ''
              )}
            >
              <Field
                id={option.id}
                name={props?.fields?.fieldName?.value}
                type="checkbox"
                value={option.value}
                className={classNames(
                  'peer h-[20px] w-[20px] cursor-pointer appearance-none border-[1px] border-dark-gray checked:bg-black hover:border-black hover:bg-white checked:hover:bg-black focus:bg-gray focus:ring-0 checked:focus:bg-black',
                  themeData.classes.checkbox,
                  isInvalid ? themeData.classes.errorOutline : '',
                  values[props?.fields?.fieldName?.value] ? 'border-black text-black' : ''
                )}
              />
              <label
                htmlFor={option.id}
                className={classNames(
                  ' ml-xs flex w-auto cursor-pointer items-center text-body text-dark-gray hover:text-black peer-checked:text-black'
                )}
              >
                {option.label}
              </label>
            </div>
          )
        )}
      </div>
    </FieldWrapper>
  );
};

const CheckboxGroup: FormFieldExport = {
  reactComponent: CheckboxGroupComponent,
  getInitialValue: getInitialCheckboxGroupValue,
  getValidationSchema: getCheckboxGroupValidationSchema,
};

export default CheckboxGroup;
