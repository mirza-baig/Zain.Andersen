import React, { useContext, useState } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormsContext } from 'lib/forms/FormContext';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { FormikValues, useFormikContext } from 'formik';
import { FormFieldExport } from 'lib/forms';
import { initialFieldValueFactory } from 'temp/formFactory';
import { IconTypes } from 'src/helpers/SvgIcon';
import NavigationButton from './NavigationButton.Helper';
import classNames from 'classnames';
import { formActionFactory } from 'temp/formActionFactory';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import {
  useOnlineScheduling,
  useOnlineSchedulingDispatch,
} from 'lib/forms/OnlineScheduling/OnlineSchedulingContext';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';

export type ButtonProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Button & FormFieldProps;

type Alignment = 'left' | 'right' | 'center';

const ButtonComponent = (props: ButtonProps) => {
  const {
    formProps,
    pageIndex,
    updatePageIndex,
    isErrorOnSubmit,
    setIsErrorOnSubmit,
    getBotCheckerField,
  } = useContext(FormsContext);

  const IS_HORIZONTAL_FORM = formProps.isHorizontalForm;

  const { validateForm, setTouched, touched, values, setFieldError } =
    useFormikContext<FormikValues>();

  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const onlineSchedulingContext = useOnlineScheduling();
  const onlineSchedulingDispatch = useOnlineSchedulingDispatch();
  const featureToggles = useFeatureToggles();
  let submitActionNextStep = -1;

  if (!props.fields) {
    return <></>;
  }

  const navigationStep = Number(getEnum<number>(props.fields?.navigationStep) || 0);

  // keeping this util function here, as useFormikContext hook can be only be invoked within Formik node

  const updateTouchedState = () => {
    const touchedFields = formProps.fields?.children[pageIndex]?.fields?.children
      .map((field: FormFieldProps) => {
        if (initialFieldValueFactory(field) != null) {
          return field?.fields?.fieldName?.value;
        }

        if (field.fields?.children && field.fields?.children.length > 0) {
          return field.fields?.children
            .filter((fieldProps: FormFieldProps) => initialFieldValueFactory(fieldProps) != null)
            .map((fieldProps: FormFieldProps) => fieldProps.fields?.fieldName?.value);
        }

        return null;
      })
      .flat();

    const touchedState = touchedFields?.reduce((acc: Record<string, boolean>, field: string) => {
      acc[field] = true;
      return acc;
    }, {});

    setTouched({ ...touched, ...touchedState }, true);
  };

  function trimStringValues(formikValues: FormikValues) {
    // Iterate through the object properties
    for (const key in formikValues) {
      // Check if the property value is a string
      if (typeof formikValues[key] === 'string') {
        // Trim the string value
        formikValues[key] = formikValues[key].trim();
      }
    }
    // Return the updated object with trimmed string values
    return formikValues;
  }

  const executeActions = async () => {
    const submitActions = props.fields?.children;

    //Reset error upon submitting the form
    if (isErrorOnSubmit) {
      setIsErrorOnSubmit(false);
    }

    if (submitActions?.length > 0) {
      // Logic here to execute actions if available

      for (let i = 0; i < submitActions.length; i++) {
        const action: FormFieldProps = submitActions[i];
        let result;

        if (featureToggles.OnlineSchedulingToggle) {
          const actionHandler = formActionFactory(
            action,
            trimStringValues(values),
            formProps,
            props,
            onlineSchedulingContext
          );
          result = await actionHandler?.executeAction();
          if (!!result?.result) {
            onlineSchedulingDispatch(result.result); // after executing the submit action, dispatch an event to the onineSchedulingReducer to update the OnlineSchedulingContext
            result.nextPageIndex && (submitActionNextStep = result.nextPageIndex);
          }
        } else {
          const actionHandler = formActionFactory(
            action,
            trimStringValues(values),
            formProps,
            props
          );
          result = await actionHandler?.executeAction();
        }

        if (action.name === 'Recaptcha') {
          formProps.googleRecaptchaData = {
            googleRecaptchaActionId: action.id,
            googleRecaptchaResponse: (result && result?.verificationResult) || undefined,
          };
        }
        if (
          !result?.success &&
          (action as Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseSubmitAction).fields
            ?.stopOnError.value
        ) {
          setIsErrorOnSubmit(result?.errorMessage as string);
          throw 'error';
        }
      }

      // Execute callback function if exists after all the submit actions are executed
      formProps?.callbackAfterSubmit &&
        (formProps?.callbackAfterSubmit as (...args: Array<unknown>) => unknown)();
    }
  };

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    /* first check if botchecker field have value and if found,
     set the Error messages and,
     stop the execution and return click handler */
    const botCheckerFieldName = getBotCheckerField().fieldName;
    if (botCheckerFieldName && values[botCheckerFieldName]) {
      setFieldError(botCheckerFieldName, 'Submission Unsuccessful');
      setIsErrorOnSubmit('Submission Unsuccessful');
      return;
    }

    botCheckerFieldName && delete values[botCheckerFieldName];

    // Validate the current step's fields
    const errors = await validateForm();
    if (Object.keys(errors).length === 0 || navigationStep === -1) {
      setIsErrorOnSubmit(false);
      setIsButtonEnabled(false);
      // Form is valid, execute actions if available
      try {
        await executeActions(); // Execute actions and handle any errors
        // Actions executed successfully, advance to the next page (for next and submit buttons)
        if (submitActionNextStep > -1) {
          updatePageIndex(submitActionNextStep);
        } else {
          updatePageIndex(pageIndex + navigationStep);
        }
        setIsButtonEnabled(true);
        navigationStep !== -1 && updateTouchedState();
      } catch (actionError) {
        setIsButtonEnabled(true);
      }
    } else {
      // Some fields are invalid, set them as touched to display validation errors
      updateTouchedState();
      setIsErrorOnSubmit('Please fill out all required fields.');

      //  scroll to the first field that is having error
      const ErrorFieldName = Object.keys(errors)[0];
      const FormElement: HTMLElement | null = document.querySelector(
        `input[name="${ErrorFieldName}"], select[name="${ErrorFieldName}"], textarea[name="${ErrorFieldName}"]`
      );

      if (FormElement) {
        FormElement.focus();
      }
    }
  };

  const mobileWidth = props.fields?.mobileWidth?.fields?.Value?.value || '';
  const desktopWidth = props.fields?.width?.fields?.Value?.value || '';

  const mobileWidthClasses: Record<string, string> = {
    '6': 'col-span-6',
    '4': 'col-span-4',
    '3': 'col-span-3',
    '2': 'col-span-2',
  };

  const desktopWidthClasses: Record<string, string> = {
    '6': 'md:col-span-6',
    '4': 'md:col-span-4',
    '3': 'md:col-span-3',
    '2': 'md:col-span-2',
  };

  const mobileColClass = mobileWidthClasses[mobileWidth] || 'col-span-12';
  const desktopColClass = desktopWidthClasses[desktopWidth] || 'md:col-span-12';
  const paddingGapIfReduced =
    !IS_HORIZONTAL_FORM && formProps.fields?.inputPadding?.fields?.Value?.value === 'reduced'
      ? 'mt-xxs'
      : '';

  const _icon = getEnum<IconTypes>(props?.fields?.icon);

  const buttonAlignment: Record<Alignment, string> = {
    left: 'mr-auto',
    right: 'ml-auto',
    center: 'mx-auto',
  };

  return (
    <>
      <div
        className={classNames(
          'relative',
          { 'self-center': !IS_HORIZONTAL_FORM },
          mobileColClass,
          desktopColClass,
          paddingGapIfReduced
        )}
      >
        {/* In case of horizontal form, Add span above the submit button as dummy label to align with form inputs  */}
        {IS_HORIZONTAL_FORM && (
          <span className="hidden items-center text-body font-regular md:inline-flex" />
        )}
        <NavigationButton
          name={props.name}
          icon={_icon}
          type="button"
          disabled={!isButtonEnabled}
          startWithIcon={navigationStep === -1}
          onClick={(e) => handleButtonClick(e)}
          className={classNames(
            buttonAlignment[getEnum<Alignment>(props?.fields?.alignment) || 'left'],
            // Don't wrap the Button in desktop if it is horizontal form
            { 'mml:whitespace-nowrap': IS_HORIZONTAL_FORM }
          )}
        >
          {props.fields?.label?.value}
        </NavigationButton>
        {!isButtonEnabled && (
          <span
            className={classNames(
              'my-xxs block w-fit font-serif text-body text-dark-gray',
              buttonAlignment[getEnum<Alignment>(props?.fields?.alignment) || 'left']
            )}
          >
            Processing... please wait
          </span>
        )}
      </div>
    </>
  );
};

const Button: FormFieldExport = {
  reactComponent: ButtonComponent,
};

export default Button;
