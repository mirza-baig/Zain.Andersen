use this as a reference import { Field, withDatasourceCheck, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { ComponentProps } from 'lib/types/component-props';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { useCallback, useState } from 'react';
import Page from 'src/helpers/Forms/Structure/Page';
import Steps from 'src/helpers/Forms/Structure/Steps';
import { FormsContext } from 'lib/forms/FormContext';
import { FormTheme } from './Form.theme';
import { useTheme } from 'lib/context/ThemeContext';
import { Formik } from 'formik';
import { generateYupSchemaForStep } from 'lib/forms/FormValidationSchema';
import { initialFieldValueFactory } from 'temp/formFactory';
import { createUUID } from 'lib/utils/string-utils';
import { useEffect, useRef } from 'react';
import { JobDetailsDataType } from 'lib/forms';

export type FormProps = ComponentProps & {
  [key: string]: unknown;
  fields: {
    children: Array<FormFieldProps>;
    formName: Field<string>;
    inputPadding?: {
      fields: {
        Value: {
          value: string;
        };
      };
    };
  };
  classes?: string;
};

const Form = (props: FormProps): JSX.Element => {
  console.log('FormMain', props.fields.children);
  const steps = props.fields?.children;
  //#region states
  const [pageIndex, setPageIndex] = useState(0);
  // passing jobDetailsData in additionalDetails object that can be used in getInitialValue function
  const { sitecoreContext } = useSitecoreContext();
  const jobDetailsData: JobDetailsDataType | undefined = sitecoreContext?.jobDetails || {};
  const additionalDetails: Record<string, unknown> | undefined = {
    jobDetailsData: jobDetailsData,
  };
  const [botCheckerFieldName, setBotCheckerFieldName] = useState<string | null>(null);
  // validation schema for only current step's fields
  const [validationSchema, setValidationSchema] = useState(
    generateYupSchemaForStep(props.fields?.children[0]) // Initialize with schema for the first step
  );

  // Submit error state
  const [isErrorOnSubmit, setIsErrorOnSubmit] = useState<false | string>(false);
  const [isFormInteracted, setIsFormInteracted] = useState(false);
  //#endregion

  // todo: update below for the skip button for the multistep forms
  // const [skippedSteps, setSkippedSteps] = useState([]);

  const { themeData } = useTheme(FormTheme());
  console.log('theme data', themeData.classes.form);
  const defaultValues: Record<string, string> = {};

  function initializeInitialValues(
    fields: FormFieldProps[],
    defaultValues: Record<string, string>,
    additionalDetails?: Record<string, unknown> | undefined
  ) {
    fields.forEach((fieldProps: FormFieldProps) => {
      const initialValue = initialFieldValueFactory(fieldProps, additionalDetails);
      if (initialValue != null) {
        defaultValues[fieldProps?.fields?.fieldName?.value] = initialValue;
      }

      if (fieldProps.fields?.children && fieldProps.fields?.children.length > 0) {
        initializeInitialValues(fieldProps.fields.children, defaultValues, additionalDetails);
      }
    });
  }

  if (props.fields?.children) {
    initializeInitialValues(
      props.fields.children as FormFieldProps[],
      defaultValues as Record<string, string>,
      additionalDetails as Record<string, unknown> | undefined
    );
  }
  const [initialValues, setInitialValues] = useState(defaultValues);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormFocus = useCallback(() => {
    setIsFormInteracted(true);
  }, []);

  useEffect(() => {
    const checkIfInitialHiddenFieldExist = () => {
      let isInitialHiddenFieldExists = false;

      const _formPageFields = props?.fields?.children?.[pageIndex]?.fields?.children;
      console.log('initialValues', initialValues);
      for (let i = 0; i < _formPageFields.length; i++) {
        if (_formPageFields[i]?.fields.hideFieldOnLoad) {
          isInitialHiddenFieldExists = true;
          setIsFormInteracted(false);
          break;
        }
      }

      return isInitialHiddenFieldExists;
    };

    if (formRef?.current && pageIndex >= 1) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      checkIfInitialHiddenFieldExist() &&
        fetchFormFieldElements()?.forEach((element) =>
          element.addEventListener('focus', handleFormFocus)
        );
    } catch {}
  }, [pageIndex, handleFormFocus, props.fields?.children]);

  useEffect(() => {
    isFormInteracted &&
      fetchFormFieldElements().forEach((element) =>
        element.removeEventListener('focus', handleFormFocus)
      );
  }, [isFormInteracted, handleFormFocus]);

  if (!props.fields) {
    return <></>;
  }

  /* common function to update pageIndex for next/prev Button,
     and udpate validationSchema accordingly,
     hence keeping it within formContext as rest of navigation logic are within Button Component iteself.
  */
  function updatePageIndex(navigationStep: number) {
    setPageIndex(navigationStep);
    setValidationSchema(generateYupSchemaForStep(props.fields?.children[navigationStep]));
  }

  const fetchFormFieldElements = () => {
    const inputElements = formRef.current?.querySelectorAll('input') || [];
    const dropdownElements = formRef.current?.querySelectorAll('select') || [];
    const textAreaElements = formRef.current?.querySelectorAll('textarea') || [];
    console.log('fetchFormFieldElements', textAreaElements);
    return [...inputElements, ...dropdownElements, ...textAreaElements];
  };

  const getBotCheckerField = (): {
    fieldName: string | null;
    setFieldName: React.Dispatch<React.SetStateAction<string | null>>;
  } => {
    return {
      fieldName: botCheckerFieldName,
      setFieldName: setBotCheckerFieldName,
    };
  };

  return (
    <FormsContext.Provider
      value={{
        pageIndex,
        initialValues,
        setInitialValues,
        formProps: { ...props, sessionId: createUUID().toUpperCase() },
        updatePageIndex,
        isErrorOnSubmit,
        setIsErrorOnSubmit,
        getBotCheckerField,
        isFormInteracted,
      }}
    >
      <div
        data-component="forms/form"
        className={classNames(themeData.classes.form, props.classes)}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={() => undefined}
          enableReinitialize={true}
        >
          {() => {
            return (
              <form ref={formRef} className="scroll-container">
                {steps.filter((step) => step?.fields?.includeInSteps?.value).length > 1 &&
                  !steps[pageIndex]?.fields?.hideStepper?.value && (
                    <Steps steps={steps} backgroundVariant="gray" />
                  )}
                <div className="pages">
                  {props.fields?.children[pageIndex] && (
                    <Page {...props.fields?.children[pageIndex]} classes="" />
                  )}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </FormsContext.Provider>
  );
};

export default withDatasourceCheck()<FormProps>(Form);
