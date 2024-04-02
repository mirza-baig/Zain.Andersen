import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useEffect, useState } from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Component } from 'src/helpers/Component';
import { useRouter } from 'next/router';
import { useTheme } from 'lib/context/ThemeContext';
import { RbAConsultRequestTheme } from './RbAConsultRequest.theme';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { Formik, Form, Field, FieldProps } from 'formik';
import { Spinner } from 'src/helpers/Spinner';
import * as Yup from 'yup';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import useSWR from 'swr';

export type RbAConsultRequestProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.RbAConsultRequest.RbAConsultRequest;

interface FormModel {
  firstName: string;
  lastName: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
  contactType: string;
  returnUrl: string;
  rbaSource: string;
  rbaBreakdown: string;
  rbaSender: string;
}

const RbAConsultRequest = (props: RbAConsultRequestProps) => {
  const hasSidebar =
    props.fields?.sidebarContentHeading.value !== '' || props.fields?.sidebarBodyCopy.value !== '';
  const { themeData } = useTheme(RbAConsultRequestTheme(hasSidebar));
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false);
  const [percentile, setPercentile] = useState(0);
  const [showSubmitError, setShowSubmitError] = useState(false);

  const router = useRouter();
  const [offerData, setOfferData] = useState([]);
  const [dataFetchComplete, setDataFetchComplete] = useState(false);

  // Formik form initial values
  const formInitialValues: FormModel = {
    firstName: '',
    lastName: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    contactType: '',
    returnUrl: props.fields?.returnUrl.value.href,
    rbaSource: props.fields?.rbaSource.value,
    rbaBreakdown: props.fields?.rbaBreakdown.value,
    rbaSender: 'AW.com',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('This field is required'),
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    zipCode: Yup.string()
      .required('This field is required.')
      .matches(/^[0-9]+$/, 'Please enter a valid zip code.')
      .min(5, 'Please enter a valid zip code.')
      .max(5, 'Please enter a valid zip code.'),
    phoneNumber: Yup.string()
      .required('This field is required.')
      .matches(/^(\(\d{3}\) \d{3}-\d{4})$/gm, 'Please enter a valid phone number.'),
  });

  const hideElements = (item: HTMLElement) => {
    const myElement = item;
    if (myElement.id === 'rbaConsultReqForm') {
      return;
    } else {
      myElement.style.display = 'none';
    }
  };

  const fetcher = async (url: string) => {
    const urlSearchParams = new URLSearchParams(router.asPath.split('?')[1]);
    let queryStringStoreId = '';
    urlSearchParams.forEach((value, key) => {
      if (key.toLowerCase() === 'storeid') {
        queryStringStoreId = value.toString();
      }
    });

    if (queryStringStoreId) {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(queryStringStoreId),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseData = await response.json();
      return responseData;
    } else {
      // we need the store Id, so display the error message and hide other content if
      // the store id is not present
      setDisplayErrorMsg(true);
      document.title = 'Error 404';

      const heroSection = document.querySelectorAll('#hero');
      heroSection.forEach(hideElements);

      const mainSection = document.querySelectorAll(
        '#main > section:not([data-component="rbaConsultRequest"])'
      );
      mainSection.forEach(hideElements);

      const breadCrumbSection = document.querySelectorAll('#scrollBreadcrumb');
      breadCrumbSection.forEach(hideElements);

      throw new Error('Missing store id from query string.');
    }
  };

  const { data: offerResults, error: offerError } = useSWR(
    '/api/aw/rba-consult-request/get-offer-by-store-id/',
    (url) => fetcher(url)
  );

  useEffect(() => {
    if (offerResults) {
      setPercentile((Number(offerResults.results.ReviewRating) / 5) * 100);
      setOfferData(offerResults.results);
      setDataFetchComplete(true);
    }

    if (offerError) {
      console.log('offerError: ', offerError);
      setDataFetchComplete(true);
    }
  }, [offerResults, offerError]);

  useEffect(() => {
    const addScore = () => {
      const myElement = document.querySelector('#starRating') as HTMLElement;
      if (!myElement) {
        return;
      } else {
        const starSpan =
          '<span class="stars-container">★★★★★<style>.stars-container:after { width: ' +
          percentile +
          '%} </style></span>';
        myElement.innerHTML = starSpan;
      }
    };

    const replaceKeyValues = (item: HTMLElement) => {
      const myElement = item;
      if (myElement.id === 'rbaConsultReqForm') {
        return;
      } else {
        let html = myElement.outerHTML;
        for (const key in offerData) {
          const re = new RegExp('{{' + key + '}}', 'gi');
          html = html.replace(re, offerData[key]);
        }
        myElement.outerHTML = html;
      }
    };

    if (dataFetchComplete) {
      // Update tokens on the page with the data received from offers API
      const ppcTrackingPhoneNumber = document.querySelectorAll('a[href^="tel:"]');
      ppcTrackingPhoneNumber.forEach(replaceKeyValues);

      const heroSections = document.querySelectorAll('#hero > section h1');
      heroSections.forEach(replaceKeyValues);

      const breadCrumbSection = document.querySelectorAll('#scrollBreadcrumb');
      breadCrumbSection.forEach(replaceKeyValues);

      const heroSection = document.querySelectorAll('#rbaConsultReqHero');
      heroSection.forEach(replaceKeyValues);

      const aboutSection = document.querySelectorAll('#rbaConsultReqAbout .rba-consult-req-about');
      aboutSection.forEach(replaceKeyValues);

      const disclaimerSection = document.querySelectorAll('#rbaConsultReqDisclaimer');
      disclaimerSection.forEach(replaceKeyValues);

      const sidebarSection = document.querySelectorAll('#rbaConsultRequestSideBar');
      sidebarSection.forEach(replaceKeyValues);

      addScore();
    }
  }, [dataFetchComplete, offerData, percentile]);

  return (
    <Component variant="lg" dataComponent="rbaConsultRequest" {...props}>
      <div className="col-span-12">
        {displayErrorMsg && (
          <RichTextWrapper
            field={{ value: props.fields?.missingStoreIdErrorMessage.value }}
            classes={themeData.classes.body}
          />
        )}
        {!displayErrorMsg && (
          <div className={themeData.classes.contentContainer}>
            <div className={themeData.classes.content}>
              {props.fields?.standardIntroContentHeading && (
                <h2 className={themeData.classes.headlineClass}>
                  {props.fields?.standardIntroContentHeading.value}
                </h2>
              )}
              <RichTextWrapper
                field={{ value: props.fields?.standardIntroContentBody.value }}
                classes={themeData.classes.body}
              />
              <div id="rbaConsultReqForm">
                <Formik<FormModel>
                  initialValues={formInitialValues}
                  validationSchema={validationSchema}
                  validateOnChange={false}
                  validateOnBlur={true}
                  onSubmit={async (values, { setSubmitting }) => {
                    const submitFormURL = '/api/aw/rba-consult-request/send-rba-consult-request';
                    const returnUrl = values.returnUrl;
                    const formTypeValue = values.contactType === 'in-home' ? '2' : '19';

                    const formJson = {
                      FirstName: values.firstName,
                      LastName: values.lastName,
                      EmailAddress: values.email,
                      PhoneNumber: values.phoneNumber,
                      Zip: values.zipCode,
                      ConsultationType: values.contactType,
                      FormType: formTypeValue,
                      RbASource: values.rbaSource,
                      RbABreakdown: values.rbaBreakdown,
                      Sender: values.rbaSender,
                    };

                    try {
                      const response = await fetch(submitFormURL, {
                        method: 'POST',
                        body: JSON.stringify(formJson),
                      });

                      if (response.ok) {
                        setSubmitting(false);
                        setShowSubmitError(false);
                        window.location.href = `${returnUrl}`;
                      } else {
                        console.error('Error:', response.statusText);
                        setSubmitting(false);
                        setShowSubmitError(true);
                      }
                    } catch (error) {
                      console.error('Error occurred:', error);
                      setSubmitting(false);
                      setShowSubmitError(true);
                    }
                  }}
                >
                  {(formikProps) => {
                    const { values, touched, errors, isSubmitting } = formikProps;
                    return (
                      <Form className="mt-2 w-full">
                        <Field type="hidden" name="returnUrl" value={values.returnUrl}></Field>
                        <Field type="hidden" name="rbaSource" value={values.rbaSource}></Field>
                        <Field
                          type="hidden"
                          name="rbaBreakdown"
                          value={values.rbaBreakdown}
                        ></Field>
                        <Field type="hidden" name="rbaSender" value={values.rbaSender}></Field>

                        <div className={themeData.classes.formRow}>
                          <div className={themeData.classes.formColumnThree}>
                            <label className={themeData.classes.formLabel} htmlFor="firstName">
                              First Name{' '}
                              <span className={themeData.classes.requiredIndicator}> *</span>
                            </label>
                            <div className="md:mr-4">
                              <Field
                                name="firstName"
                                type="text"
                                placeholder="Enter First Name"
                                value={values.firstName}
                                className={classNames(
                                  themeData.classes.textInput,
                                  errors.firstName && touched.firstName
                                    ? themeData.classes.textInputError
                                    : ''
                                )}
                              ></Field>
                              {errors.firstName && touched.firstName && (
                                <div className={themeData.classes.inputFeedback}>
                                  {errors.firstName}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={themeData.classes.formColumnThree}>
                            <label className={themeData.classes.formLabel} htmlFor="lastName">
                              Last Name{' '}
                              <span className={themeData.classes.requiredIndicator}> *</span>
                            </label>
                            <div className="md:mr-4">
                              <Field
                                name="lastName"
                                type="text"
                                placeholder="Enter Last Name"
                                value={values.lastName}
                                className={classNames(
                                  themeData.classes.textInput,
                                  errors.lastName && touched.lastName
                                    ? themeData.classes.textInputError
                                    : ''
                                )}
                              ></Field>
                              {errors.lastName && touched.lastName && (
                                <div className={themeData.classes.inputFeedback}>
                                  {errors.lastName}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={themeData.classes.formColumnThree}>
                            <label className={themeData.classes.formLabel} htmlFor="zipCode">
                              Zip Code{' '}
                              <span className={themeData.classes.requiredIndicator}> *</span>
                            </label>
                            <div className="">
                              <Field
                                name="zipCode"
                                type="text"
                                placeholder="Zip Code"
                                value={values.zipCode}
                                className={classNames(
                                  themeData.classes.textInput,
                                  errors.zipCode && touched.zipCode
                                    ? themeData.classes.textInputError
                                    : ''
                                )}
                              ></Field>
                              {errors.zipCode && touched.zipCode && (
                                <div className={themeData.classes.inputFeedback}>
                                  {errors.zipCode}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={themeData.classes.formColumnTwo}>
                            <label className={themeData.classes.formLabel} htmlFor="email">
                              Email Address{' '}
                              <span className={themeData.classes.requiredIndicator}> *</span>
                            </label>
                            <div className="md:mr-4">
                              <Field
                                name="email"
                                type="text"
                                placeholder="Enter Valid Email Address"
                                value={values.email}
                                className={classNames(
                                  themeData.classes.textInput,
                                  errors.email && touched.email
                                    ? themeData.classes.textInputError
                                    : ''
                                )}
                              ></Field>
                              {errors.email && touched.email && (
                                <div className={themeData.classes.inputFeedback}>
                                  {errors.email}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={themeData.classes.formColumnTwo}>
                            <label className={themeData.classes.formLabel} htmlFor="phoneNumber">
                              Phone Number{' '}
                              <span className={themeData.classes.requiredIndicator}> *</span>
                            </label>
                            <div className="">
                              <Field name="phoneNumber">
                                {({ field }: FieldProps) => (
                                  <InputMask
                                    {...field}
                                    mask={'(999) 999-9999'}
                                    maskChar="_"
                                    placeholder="(XXX) XXX-XXXX"
                                    type="tel"
                                    value={values.phoneNumber}
                                    className={classNames(
                                      themeData.classes.textInput,
                                      errors.phoneNumber && touched.phoneNumber
                                        ? themeData.classes.textInputError
                                        : ''
                                    )}
                                  />
                                )}
                              </Field>
                              {errors.phoneNumber && touched.phoneNumber && (
                                <div className={themeData.classes.inputFeedback}>
                                  {errors.phoneNumber}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={themeData.classes.formColumnFullWidth}>
                            <div>
                              <label className={themeData.classes.formLabel}>
                                Which type of consultation would you prefer?
                              </label>
                            </div>
                            <div>
                              <div className={themeData.classes.radioInline}>
                                <Field
                                  id="virtual"
                                  name="contactType"
                                  value="virtual"
                                  type="radio"
                                  className="peer h-[20px] w-[20px] cursor-pointer appearance-none border-[2px] border-dark-gray ring-0 checked:h-[20px] checked:w-[20px] checked:border-white checked:!bg-primary checked:bg-none checked:!ring-[2px] checked:!ring-black checked:ring-offset-0 hover:border-black checked:hover:border-white focus:bg-gray focus:ring-0 checked:focus:border-white"
                                ></Field>
                                <label
                                  className={themeData.classes.radioInlineLabel}
                                  htmlFor="virtual"
                                >
                                  Virtual
                                </label>
                              </div>
                              <div className={themeData.classes.radioInlineRight}>
                                <Field
                                  id="in-home"
                                  name="contactType"
                                  value="in-home"
                                  type="radio"
                                  className="peer h-[20px] w-[20px] cursor-pointer appearance-none border-[2px] border-dark-gray ring-0 checked:h-[20px] checked:w-[20px] checked:border-white checked:!bg-primary checked:bg-none checked:!ring-[2px] checked:!ring-black checked:ring-offset-0 hover:border-black checked:hover:border-white focus:bg-gray focus:ring-0 checked:focus:border-white"
                                ></Field>
                                <label
                                  className={themeData.classes.radioInlineLabel}
                                  htmlFor="in-home"
                                >
                                  In-Home
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center p-[5px]">
                          <button
                            type="submit"
                            className={themeData.classes.submitButton}
                            disabled={isSubmitting}
                          >
                            Request a Consultation
                          </button>
                        </div>
                        {showSubmitError && (
                          <div className="flex justify-center p-[5px]">
                            <span className={themeData.classes.formErrorMessage}>
                              {props.fields?.errorOnPageMessage.value}
                            </span>
                          </div>
                        )}
                      </Form>
                    );
                  }}
                </Formik>
                <RichTextWrapper
                  field={{ value: props.fields?.disclaimerText.value }}
                  classes={themeData.classes.disclaimer}
                />
              </div>
            </div>
            {hasSidebar && (
              <div id="rbaConsultRequestSideBar" className={themeData.classes.sidebar}>
                <div className={themeData.classes.sidebarWrapper}>
                  <h2 className={themeData.classes.sidebarH2}>
                    {props.fields?.sidebarContentHeading.value}
                  </h2>
                  <h3 className={themeData.classes.sidebarH3}>
                    {props.fields?.sidebarSubHeadline.value}
                  </h3>
                  <p className={themeData.classes.offerDetails}>
                    {props.fields?.sidebarOfferDetails.value}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        {!dataFetchComplete && (
          <div className={themeData.classes.spinnerWrapper} id="cover">
            <div className={themeData.classes.spinner}>
              <Spinner size={48} />
            </div>
          </div>
        )}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<RbAConsultRequestProps>(RbAConsultRequest);
