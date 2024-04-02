import { useTheme } from 'lib/context/ThemeContext';
import { FieldWrapperTheme } from './FieldWrapper.Theme';
import classNames from 'classnames';
import { useContext } from 'react';
import { FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { FormFieldProps } from 'lib/forms';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import {
  isRuleIncludedInField,
  replacePlaceholders,
  getWidthClass,
} from 'lib/forms/FormFieldUtils';
import Tooltip from 'src/helpers/Tooltip/Tooltip';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { FormsContext } from 'lib/forms/FormContext';

export type FieldWrapperProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.Input &
  FormFieldProps & {
    isArrayField?: boolean;
    showRequiredIndication?: boolean;
    children?: React.ReactNode | React.ReactNode[];
  };

const FieldWrapper = (props: FieldWrapperProps) => {
  const { themeData } = useTheme(FieldWrapperTheme);

  const { fields, id, isArrayField, children, showRequiredIndication = true } = props;

  const { errors, touched } = useFormikContext<FormikValues>();
  const { formProps } = useContext(FormsContext);

  const IS_HORIZONTAL_FORM = formProps.isHorizontalForm;

  const isInvalid =
    (touched as FormikTouched<FormikValues>)[fields.fieldName.value] &&
    (errors as FormikErrors<FormikValues>)[fields.fieldName.value];

  const placeholders: Record<string, string> = {
    fieldLabel: fields.label?.value,
    minLength: fields.minLength?.value,
    maxLength: fields.maxLength?.value,
  };

  if (!fields) {
    return <></>;
  }

  return (
    <div className={classNames('relative', getWidthClass(props))}>
      {fields.label?.value && (
        <label
          className={classNames(
            themeData.classes.label,
            isInvalid ? themeData.classes.errorTextColor : '',
            { 'whitespace-nowrap': IS_HORIZONTAL_FORM }
          )}
          htmlFor={id}
        >
          {fields.label.value}
          {showRequiredIndication && isRuleIncludedInField(props, isArrayField ? 'min' : 'required')
            ? ' *'
            : ''}
          <Tooltip {...props} />
        </label>
      )}
      {children}
      {fields.subLabel?.value && (
        <BodyCopy fields={{ body: fields?.subLabel }} classes={themeData.classes.subLabel} />
      )}
      {touched[fields.fieldName.value] && errors[fields.fieldName.value] && (
        <>
          <span
            className={classNames(themeData.classes.errorMessage, themeData.classes.errorTextColor)}
          >
            {replacePlaceholders(errors[fields.fieldName.value] as string, placeholders)}
          </span>
        </>
      )}
    </div>
  );
};

export default FieldWrapper;
