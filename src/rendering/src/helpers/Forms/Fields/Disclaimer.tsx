import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useContext } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormFieldExport } from 'lib/forms';
import { FormFieldsTheme } from './FormFields.Theme';
import { useTheme } from 'lib/context/ThemeContext';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import { FormikValues, useFormikContext } from 'formik';
import { FormsContext } from 'lib/forms/FormContext';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';

export type DisclaimerProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.Disclaimer &
  FormFieldProps;

export type alignmentStatus = 'left' | 'center' | 'right';

const DisclaimerComponent = (props: DisclaimerProps) => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { touched } = useFormikContext<FormikValues>();
  const { isFormInteracted, formProps } = useContext(FormsContext);
  const IS_HORIZONTAL_FORM = formProps.isHorizontalForm;

  if (!props.fields) {
    return <></>;
  }

  if (
    props?.fields?.hideFieldOnLoad?.value &&
    !isFormInteracted &&
    !(Object.keys(touched)?.length > 0)
  ) {
    return <></>;
  }

  const disclaimerAlignment: Record<alignmentStatus, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <DisclaimerText
      fields={props.fields?.disclaimerText}
      disclaimerLayoutClasses="relative col-span-12"
      disclaimerClasses={classNames(
        disclaimerAlignment[getEnum<alignmentStatus>(props?.fields?.alignment) || 'left'],
        themeData.classes.disclaimerText,
        {
          'mb-s': !IS_HORIZONTAL_FORM,
        }
      )}
    />
  );
};

const Disclaimer: FormFieldExport = {
  reactComponent: DisclaimerComponent,
};

export default Disclaimer;
