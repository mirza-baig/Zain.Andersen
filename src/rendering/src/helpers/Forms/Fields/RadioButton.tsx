import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
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

function getInitialRadioValue(
  props: RadioProps,
  additionalDetails?: Record<string, unknown> | undefined
) {
  const valueProvider = getValueProviderValue(props, additionalDetails);
  if (valueProvider) {
    return valueProvider;
  } else if (props?.fields?.defaultValue && props?.fields?.defaultValue?.fields?.title?.value) {
    return props?.fields?.defaultValue?.fields?.title?.value || '';
  }
  return '';
}

const getRadioValidationSchema = (props: RadioProps, schema: yup.AnyObject) => {
  const { validations } = props?.fields;
  if (validations) {
    const validator = getValidatonSchema('string', props);
    if (validator) {
      schema[props?.fields?.fieldName.value] = validator;
    }
  }
  return schema;
};

export type RadioProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.RadioButton & FormFieldProps;

const RadioComponent = (props: RadioProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  const radioOptions = getKeyValuePairList(props);
  const isInline = radioOptions?.length === 2 ? true : false;
  const datasource = props?.fields?.datasource?.children;
  radioOptions &&
    datasource &&
    datasource.length > 0 &&
    datasource.forEach((child: Item, index: number) => {
      radioOptions[index].id = child.id;
    });

  return (
    <FieldWrapper {...props}>
      <div className={classNames('mt-xs flex w-full', isInline ? ' flex-row' : 'flex-col')}>
        {radioOptions?.map(
          (option: { id: string; value: string; label: string }, index: number) => (
            <div
              key={option.id}
              className={classNames(
                ' items-center text-dark-gray  hover:text-black ',
                isInline ? ' mr-l inline-flex' : 'mb-m flex',
                index === radioOptions?.length - 1 ? '!mr-0 !mb-0' : ''
              )}
            >
              <Field
                id={option.id}
                name={props?.fields?.fieldName?.value}
                type="radio"
                value={option.value}
                className={classNames(
                  'peer h-[20px] w-[20px] cursor-pointer appearance-none border-[2px] border-dark-gray checked:!bg-black checked:!ring-2 hover:border-black focus:bg-gray focus:ring-0 ',
                  themeData.classes.radio,
                  isInvalid ? themeData.classes.errorOutline : '',
                  values[props?.fields?.fieldName?.value]
                    ? 'border-[2px] border-black text-black '
                    : ''
                )}
              />
              <label
                htmlFor={option.id}
                className={classNames(
                  ' ml-xs w-auto cursor-pointer items-center text-body text-dark-gray hover:text-black peer-checked:text-black',
                  isInline ? ' flex ' : 'flex'
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

const RadioButton: FormFieldExport = {
  reactComponent: RadioComponent,
  getInitialValue: getInitialRadioValue,
  getValidationSchema: getRadioValidationSchema,
};

export default RadioButton;
