import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useContext, useEffect } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import classNames from 'classnames';
import { FormFieldExport } from 'lib/forms';
import { FormsContext } from 'lib/forms/FormContext';

export type BotCheckerProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.BotChecker &
  FormFieldProps;

const getBotCheckerInitialValue = (props: BotCheckerProps) => {
  // doing type assertion to avoid unsued var error
  props as BotCheckerProps;
  return '';
};

const BotCheckerComponent = (props: BotCheckerProps): JSX.Element => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  const { getBotCheckerField } = useContext(FormsContext);

  useEffect(() => {
    getBotCheckerField().setFieldName(props.fields?.fieldName?.value || '');
    // We can ignore the react-hooks/exhaustive-deps warning for this useEffect as we only want to use setFieldName at first render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[props?.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props?.fields?.fieldName?.value];

  return (
    <div aria-hidden={true} className="absolute col-span-12 m-0 h-0 overflow-hidden">
      <label htmlFor={props.id}>Do not Fill this field</label>

      <Field
        id={props.id}
        name={props.fields?.fieldName.value}
        placeholder="Do not fill this field"
        autoComplete="off"
        tabindex="-1"
        maxLength="50"
        className={classNames(
          themeData.classes.input,
          isInvalid ? themeData.classes.errorOutline : '',
          values[props?.fields?.fieldName?.value] ? 'border-black' : ''
        )}
      />
    </div>
  );
};

const BotChecker: FormFieldExport = {
  reactComponent: BotCheckerComponent,
  getInitialValue: getBotCheckerInitialValue,
};

export default BotChecker;
