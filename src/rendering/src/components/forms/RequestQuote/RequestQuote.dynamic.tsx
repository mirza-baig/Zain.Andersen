// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';
// Components
import Steps from 'src/helpers/Forms/Structure/Steps';
import { Formik, FormikHelpers, FormikTouched, FormikValues } from 'formik';
import { FormsContext } from 'lib/forms/FormContext';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { InputPhone } from 'src/helpers/CustomForms/InputPhone';
import {
  fieldsToValidatePerPage,
  getRequestQuotePayload,
  requestQuoteFlow,
  requestQuoteInitialValues,
  requestQuoteSteps,
  requestQuoteValidationSchema,
} from './RequestQuote.helper';
import { getCookie } from 'lib/utils/client-storage-utils';

import CustomTileButton from 'src/helpers/CustomForms/CustomTileButton';
import NavigationButton from 'src/helpers/Forms/Fields/NavigationButton/NavigationButton.Helper';
import { InputText } from 'src/helpers/CustomForms/InputText';
import Dropdown from 'src/helpers/CustomForms/Dropdown';
import Checkbox from 'src/helpers/CustomForms/Checkbox';
import { twMerge } from 'tailwind-merge';
import AddressGroup from 'src/helpers/CustomForms/AddressGroup/AddressGroup';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ComponentProps } from 'lib/types/component-props';
import { CustomTextArea } from 'src/helpers/CustomForms/CustomTextArea';
import { formActionFactory } from 'temp/formActionFactory';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from 'src/helpers/Forms/Fields/FormFields.Theme';

export type RequestQuoteProps = Feature.EnterpriseWeb.AndersenWindows.Forms.RequestAQuote &
  ComponentProps;
type UserType = 'homeowner' | 'professional';

const RequestQuote = (props: RequestQuoteProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [currentFlow, setCurrentFlow] = useState<UserType>('homeowner');
  const [formValues, setFormValues] = useState<FormikValues>();
  const [showFormError, setShowFormError] = useState<false | string>(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const router = useRouter();
  const { themeData } = useTheme(FormFieldsTheme);

  const supplierValue = formValues?.['supplier'];

  useEffect(() => {
    if (formValues && formValues?.['supplier'] === 'No') {
      formValues['supplier_name'] = '';
    }
    // We can ignore the react-hooks/exhaustive-deps warning to avoid adding formValues as dependency.
    // This useEffect is expected to be only dependent on supplierValue out of whole formValues object
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supplierValue]);

  if (!props.fields) {
    return <></>;
  }

  const updatePageIndex = (navigationStep: 1 | -1) => {
    setPageIndex(pageIndex + navigationStep);
  };

  const buttonAlignment: Record<'left' | 'right' | 'center', string> = {
    left: 'mr-auto',
    right: 'ml-auto',
    center: 'mx-auto',
  };

  const handleNextButtonClick = async (
    values: FormikValues,
    touched: FormikTouched<FormikValues>,
    setTouched: (touched: FormikTouched<FormikValues>, shouldValidate?: boolean) => void,
    validateForm: FormikHelpers<FormikValues>['validateForm']
  ) => {
    const updateTouchedState = (): Record<string, unknown> => {
      // @ts-ignore we can ignore typescript error "Element implicitly has an 'any' type because expression of type 'any' can't be used to index type"
      const touchedState = fieldsToValidatePerPage[values['about']][pageIndex]?.reduce(
        (acc: Record<string, boolean>, field: string) => {
          acc[field] = true;
          return acc;
        },
        {}
      );

      const _touched = { ...touched, ...touchedState };

      setTouched(_touched, true);
      return _touched;
    };

    updateTouchedState();

    const errorFieldsObject = await validateForm();

    if (Object.keys(errorFieldsObject).length === 0) {
      if (pageIndex === 2) {
        setIsButtonEnabled(false);
        setShowFormError('Processing... please wait');
        const COOKIE_NAME = 'awSourceKey';
        const QUERYSTRING_NAME = 'sourceKey';
        // Access the query parameter
        const queryParamValue = router.query[QUERYSTRING_NAME];

        // Access the cookie value
        const cookieValue = getCookie(COOKIE_NAME);

        // Decide which value to store in your variable
        const originalSourceValue = queryParamValue || cookieValue || '';

        // If its last page submit the form
        const actionHandler = formActionFactory(
          {
            templateName: 'Salesforce Web To Lead',
          },
          getRequestQuotePayload(
            values,
            props.fields?.campaignIds.value,
            props.fields?.leadSource.value,
            originalSourceValue,
            props.fields?._injectedFields
          )
        );

        const result = await actionHandler?.executeAction(true);

        if (!result?.success) {
          setIsButtonEnabled(true);
          setShowFormError('Something went wrong');
          return;
        }

        // If form submission is successful then push data to GTM
        TagManager.dataLayer({
          dataLayer: {
            event: 'request_quote_form',
            form_name: 'Request Quote',
            form_submit_text: 'Request a quote',
            user_type: values['about'] === 'homeowner' ? 'Homeowner' : values['trades'],
            project_type: values['project_type'],
          },
        });
      }

      updatePageIndex(1);
    } else {
      setShowFormError('Please fill out all required fields.');
    }
  };

  const renderHomeOwnerFlow = () => {
    switch (pageIndex) {
      case 1:
        return (
          <>
            <div className="col-span-10 hidden text-center md:col-start-2 md:block">
              <label className="font-sans text-sm-xxs font-heavy" htmlFor="">
                CHOOSE A PROJECT TYPE
              </label>
            </div>
            {requestQuoteFlow.homeowner.projectInformation.map((projectType, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    'col-span-12 md:col-span-5',
                    index % 2 === 0 && 'md:col-start-2'
                  )}
                  role="group"
                >
                  <CustomTileButton
                    value={projectType.value}
                    title={projectType.title}
                    name="project_type"
                    isMultiSelectEnabled={false}
                    onClick={() => updatePageIndex(1)}
                  />
                </div>
              );
            })}
          </>
        );
      case 2:
        return (
          <>
            {requestQuoteFlow.homeowner.businessInformation.map((field, index) => {
              return (
                <div key={index} className={twMerge('col-span-12', field.columnClasses)}>
                  {field.type === 'tel' ? (
                    <InputPhone {...field} required />
                  ) : (
                    <InputText {...field} required />
                  )}
                </div>
              );
            })}
            <AddressGroup
              address1={{
                id: 'requestQuote-address1',
                name: 'address1',
                label: 'Street Address',
                placeholder: 'Enter Street Address',
                classes: 'col-span-12 md:col-span-10 md:col-start-2 hidden',
                required: false,
              }}
              country={{
                id: 'requestQuote-country',
                name: 'country',
                label: 'Country',
                classes: 'col-span-12 md:col-span-10 md:col-start-2 hidden',
                required: false,
              }}
              city={{
                id: 'requestQuote-city',
                name: 'city',
                label: 'City',
                placeholder: 'City',
                classes: 'col-span-12 md:col-span-10 md:col-start-2',
                required: true,
              }}
              state={{
                id: 'requestQuote-state',
                name: 'state',
                label: 'State',
                classes: 'col-span-12 md:col-span-5 md:col-start-2',
                required: true,
              }}
              location={{
                id: 'requestQuote-location',
                name: 'location',
                label: 'Location',
                placeholder: 'Location',
                classes: 'col-span-12 md:col-span-5 md:col-start-2 hidden',
                required: false,
              }}
              zipCode={{
                id: 'requestQuote-zipCode',
                name: 'zip',
                label: 'Zip Code',
                placeholder: 'Zip Code',
                classes: 'col-span-12 md:col-span-5',
                required: true,
              }}
            />
            <div className="col-span-12 md:col-span-8 md:col-start-2">
              <Checkbox
                options={[
                  {
                    id: 'requestQuote-newsletter',
                    label:
                      'I also want to receive monthly inspiration newsletter emails from Andersen Windows',
                  },
                ]}
                name="newsletter"
              />
            </div>
            <div className="col-span-12 md:col-start-2">
              <span className="text-body">
                {'By clicking "Request Quote", I agree to the terms below.'}
              </span>
            </div>
          </>
        );
      default:
        return <></>;
    }
  };

  const renderProfessionalFlow = (values: FormikValues) => {
    switch (pageIndex) {
      case 1:
        return (
          <>
            {requestQuoteFlow.professional.projectInformation.map((info, index) => {
              return (
                <div key={index} className={twMerge('col-span-12', info.columnClasses)}>
                  {info.type === 'text' ? (
                    (info.name !== 'supplier_name' || values['supplier'] === 'Yes') && (
                      <InputText {...info} type="text" required={!!info.isRequired} />
                    )
                  ) : (
                    <Dropdown
                      {...info}
                      options={info.options || []}
                      aria-label={info.label}
                      aria-required={!!info.isRequired}
                      required={!!info.isRequired}
                    >
                      <option value="" selected disabled>
                        Select One
                      </option>
                    </Dropdown>
                  )}
                </div>
              );
            })}
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <CustomTextArea
                placeholder="Specify window and door sizes, unique project requirements, additional questions, etc"
                rows={8}
                name="additional_details"
                maxLength={450}
                id="requestQuote-additional-details"
                label="Tell Us More About Your Project"
                showRemainingCharacters
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            {requestQuoteFlow.professional.businessInformation.map(
              // We can ignore this type warning, as we're using proxy array for mapping our customForm elements
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (info: any, index) => {
                return (
                  <div key={index} className={twMerge('col-span-12', info.columnClasses)}>
                    {info.type === 'text' || info.type === 'email' ? (
                      <>
                        <InputText
                          {...info}
                          required={!!info.isRequired}
                          subLabel={
                            info.type === 'email' ? props.fields?.privacyPolicyText.value : ''
                          }
                        />
                      </>
                    ) : info.type === 'tel' ? (
                      <InputPhone {...info} required={!!info.isRequired} />
                    ) : (
                      <Dropdown
                        {...info}
                        options={info.options || []}
                        aria-label={info.label}
                        aria-required={!!info.isRequired}
                        required={!!info.isRequired}
                      >
                        <option value="" selected disabled>
                          Select One
                        </option>
                      </Dropdown>
                    )}
                  </div>
                );
              }
            )}
            <AddressGroup
              address1={{
                id: 'requestQuote-address1',
                name: 'address1',
                label: 'Street Address',
                placeholder: 'Enter Street Address',
                classes: 'col-span-12 md:col-span-10 md:col-start-2',
                required: true,
              }}
              country={{
                id: 'requestQuote-country',
                name: 'country',
                label: 'Country',
                classes: 'col-span-12 md:col-span-10 md:col-start-2',
                required: true,
              }}
              city={{
                id: 'requestQuote-city',
                name: 'city',
                label: values['country'] === 'Canada' ? 'Municipality' : 'City',
                placeholder: values['country'] === 'Canada' ? 'Municipality' : 'City',
                classes: 'col-span-12 md:col-span-10 md:col-start-2',
                required: true,
              }}
              state={{
                id: 'requestQuote-state',
                name: 'state',
                label: values['country'] === 'Canada' ? 'Province' : 'State',
                classes: 'col-span-12 md:col-span-5 md:col-start-2',
                required: true,
              }}
              location={{
                id: 'requestQuote-location',
                name: 'location',
                label: 'Location',
                placeholder: 'Location',
                classes: 'col-span-12 md:col-span-5 md:col-start-2',
                required: true,
              }}
              zipCode={{
                id: 'requestQuote-zipCode',
                name: 'zip',
                label: values['country'] === 'Canada' ? 'Postal Code' : 'Zip Code',
                placeholder: values['country'] === 'Canada' ? 'Postal Code' : 'Zip Code',
                classes: 'col-span-12 md:col-span-5',
                required: true,
              }}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    // @ts-ignore We need to use existing form context with only pageIndex
    <FormsContext.Provider {...{ value: { pageIndex: pageIndex } }}>
      <div data-component="forms/requestquote">
        <Formik
          initialValues={requestQuoteInitialValues}
          validationSchema={
            pageIndex <= 2 &&
            Yup.object().shape(
              Object.keys(requestQuoteValidationSchema).reduce(
                (acc, field): Record<string, unknown> => (
                  // @ts-ignore We can ignore this type-error element implicitly has an 'any' type because expression of type 'number' can't be used to index
                  fieldsToValidatePerPage[currentFlow][pageIndex].includes(field) &&
                    // @ts-ignore We can ignore this type-errorm element implicitly has an 'any' type because expression of type 'number' can't be used to index
                    (acc[field] = requestQuoteValidationSchema[field]),
                  acc
                ),
                {}
              )
            )
          }
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={() => undefined}
        >
          {({ values, touched, setTouched, validateForm, isValid }) => {
            setFormValues(values);
            return (
              <form>
                <div className="grid grid-cols-12 gap-xxs gap-y-m md:gap-s">
                  <Headline
                    {...props}
                    classes="col-span-12 text-center text-theme-text text-sm-m md:text-m font-heavy mb-xxs"
                  />
                  <BodyCopy classes="col-span-12 text-center" {...props} />

                  {requestQuoteSteps.length > 1 && (
                    <Steps
                      steps={requestQuoteSteps}
                      wrapperClasses="col-span-12"
                      backgroundVariant="white"
                    />
                  )}
                  {/* First step */}
                  {pageIndex === 0 && (
                    <>
                      {requestQuoteFlow.userTypes.map((user, index) => {
                        return (
                          <div
                            key={index}
                            className={classNames(
                              'col-span-12 md:col-span-5',
                              index % 2 === 0 && 'md:col-start-2'
                            )}
                            role="group"
                          >
                            <CustomTileButton
                              value={user.value}
                              title={user.title}
                              name="about"
                              isMultiSelectEnabled={false}
                              onClick={() => {
                                setCurrentFlow(user.value as UserType);
                                updatePageIndex(1);
                              }}
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
                  {/* Second step */}
                  {values['about' as keyof typeof values] === 'homeowner'
                    ? renderHomeOwnerFlow()
                    : renderProfessionalFlow(values)}

                  {/* Third step */}

                  {/* Navigation buttons */}
                  {pageIndex <= 2 && (
                    <>
                      <div className="col-span-12 mt-s flex gap-m md:col-span-10 md:col-start-2">
                        {pageIndex !== 0 && (
                          <>
                            <NavigationButton
                              icon="arrow"
                              type="button"
                              startWithIcon={true}
                              onClick={() => updatePageIndex(-1)}
                              className={classNames('!mr-0', buttonAlignment['left'])}
                            >
                              Previous
                            </NavigationButton>
                            {((values['about' as keyof typeof values] === 'homeowner' &&
                              pageIndex === 2) ||
                              values['about' as keyof typeof values] === 'professional') && (
                              <NavigationButton
                                icon="arrow"
                                type="button"
                                disabled={!isButtonEnabled && pageIndex === 2}
                                onClick={() =>
                                  handleNextButtonClick(values, touched, setTouched, validateForm)
                                }
                                className={classNames('!mr-0', buttonAlignment['left'])}
                              >
                                {pageIndex < 2 ? 'Next' : 'Request a quote'}
                              </NavigationButton>
                            )}
                          </>
                        )}
                      </div>

                      <div className="col-span-12 md:col-span-10 md:col-start-2">
                        {(!isValid || !isButtonEnabled) && pageIndex === 2 && (
                          <span
                            className={
                              !isButtonEnabled && pageIndex === 2
                                ? classNames(
                                    'my-xxs block w-fit basis-full font-serif text-body text-dark-gray'
                                  )
                                : classNames(
                                    'my-auto',
                                    themeData.classes.errorMessage,
                                    themeData.classes.errorTextColor
                                  )
                            }
                          >
                            {showFormError}
                          </span>
                        )}
                      </div>
                    </>
                  )}

                  {/* Disclaimer Text */}
                  {values['about' as keyof typeof values] === 'homeowner' && pageIndex === 2 && (
                    <DisclaimerText
                      fields={props.fields?.disclaimerText}
                      disclaimerLayoutClasses="col-span-12 md:col-span-10 md:col-start-2"
                      disclaimerClasses="!text-dark-gray"
                    />
                  )}

                  {pageIndex === 3 && props.fields && (
                    <div className="col-span-12 md:col-span-10 md:col-start-2">
                      <Headline
                        classes="text-theme-text text-center text-sm-m md:text-m font-heavy mb-s"
                        fields={{
                          headlineText: props.fields.thankYouHeading,
                        }}
                      />
                      <BodyCopy
                        classes="text-theme-body text-center text-body text-black mb-s"
                        fields={{ body: props.fields?.thankYouText || '' }}
                      />
                    </div>
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

export default withDatasourceCheck()<RequestQuoteProps>(RequestQuote);
