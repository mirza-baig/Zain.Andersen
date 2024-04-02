// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Components
import { ComponentProps } from 'lib/types/component-props';
import { ErrorMessage, Field, Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { FormFieldsTheme } from 'src/helpers/Forms/Fields/FormFields.Theme';
import classNames from 'classnames';
import Dropdown from 'src/helpers/CustomForms/Dropdown';
import Checkbox from 'src/helpers/CustomForms/Checkbox';
import { InputText } from 'src/helpers/CustomForms/InputText';
import { InputPhone } from 'src/helpers/CustomForms/InputPhone';
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Eyebrow } from 'src/helpers/Eyebrow';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import NavigationButton from 'src/helpers/Forms/Fields/NavigationButton/NavigationButton.Helper';
import { formActionFactory } from 'temp/formActionFactory';
import { hashCode } from 'src/helpers/Component/Component';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { countries } from 'lib/constants/country-states-mapping';
import { createUUID } from 'lib/utils/string-utils';

export type VenturesPartnerProps = Feature.EnterpriseWeb.AndersenWindows.Forms.VenturesPartner &
  ComponentProps;
const VenturesPartner = (props: VenturesPartnerProps) => {
  const { themeData } = useTheme(FormFieldsTheme);

  const [showThankYou, setShowThankYou] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isTnCModalOpen, setIsTnCModalOpen] = useState(false);
  const [acceptTCChecked, setAcceptTCChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refererValue, setRefererValue] = useState('');
  const [errorOnSubmit, setErrorOnSubmit] = useState<boolean>(false);

  const formRef = useRef<FormikProps<FormikValues> | null>(null);

  useEffect(() => {
    const referer = document.referrer || '';
    const refererValue = referer.replace(/https?:\/\//, '');
    setRefererValue(refererValue);
  }, []);

  function replaceTokensWithValues(template: string, values: FormikValues) {
    const regex = /{{\s*([\w_]+)\s*}}/g;
    const replacedTemplate = template.replace(regex, (match: string, token: string) => {
      return values[token] || match;
    });
    return replacedTemplate;
  }

  if (!props.fields) {
    return <></>;
  }

  const initialValues = {
    company: '',
    company_type: '',
    target_area: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    website: '',
    country: 'USA',
    message: '',
    optin: '',
  };

  const phoneSchema = Yup.lazy((value) => {
    if (value && value.length > 0 && /\d/.test(value)) {
      return Yup.string().matches(
        new RegExp('^(1\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'),
        'Please enter a valid mobile number'
      );
    }
    return Yup.string().notRequired();
  });

  const validationSchema = {
    company: Yup.string().trim().required('This field is required'),
    company_type: Yup.string().trim().required('This field is required'),
    target_area: Yup.string().trim().required('This field is required'),
    first_name: Yup.string().trim().required('This field is required'),
    last_name: Yup.string().trim().required('This field is required'),
    email: Yup.string()
      .required('This field is required')
      .matches(
        new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        'Please enter a valid email address'
      ),
    website: Yup.string().trim().url('Please enter a valid URL'),
    country: Yup.string().trim().required('This field is required'),
    message: Yup.string().trim().required('This field is required'),
    phone: phoneSchema,
  };

  const focusAreaOptions = [
    {
      label: 'Advanced Materials',
      value: 'Advanced Materials',
    },
    {
      label: 'Connected Home',
      value: 'Connected Home',
    },
    {
      label: 'Sustainability/Energy Efficiency',
      value: 'Sustainability/Energy Efficiency',
    },
    {
      label: 'Advanced Manufacturing',
      value: 'Advanced Manufacturing',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ];

  const companyTypeOptions = [
    {
      label: 'Start Up',
      value: 'Start Up',
    },
    {
      label: 'Incubator/Accelerator',
      value: 'Incubator/Accelerator',
    },
    {
      label: 'Fund',
      value: 'Fund',
    },
    {
      label: 'Corporate Venture Capital',
      value: 'Corporate Venture Capital',
    },
    {
      label: 'Entrepreneur',
      value: 'Entrepreneur',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ];

  const contextId = props.rendering.dataSource?.replace(/[{}]/g, '');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formProps: any = {
    sessionId: createUUID().toUpperCase(),
    name: 'Ventures Partner Form',
    rendering: {
      dataSource: props.rendering.dataSource,
    },
    fields: {
      formName: {
        value: 'Ventures Partner Form',
      },
      children: [
        {
          fields: {
            children: [
              {
                id: createUUID().toUpperCase(),
                templateName: 'Short Text',
                fields: {
                  fieldName: {
                    value: 'company',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Dropdown',
                fields: {
                  fieldName: {
                    value: 'company_type',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Dropdown',
                fields: {
                  fieldName: {
                    value: 'target_area',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Short Text',
                fields: {
                  fieldName: {
                    value: 'first_name',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Short Text',
                fields: {
                  fieldName: {
                    value: 'last_name',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Email',
                fields: {
                  fieldName: {
                    value: 'email',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Phone',
                fields: {
                  fieldName: {
                    value: 'phone',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Short Text',
                fields: {
                  fieldName: {
                    value: 'website',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Dropdown',
                fields: {
                  fieldName: {
                    value: 'country',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Text Area',
                fields: {
                  fieldName: {
                    value: 'message',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Checkbox',
                fields: {
                  fieldName: {
                    value: 'agree_to_news_updates',
                  },
                },
              },
              {
                id: createUUID().toUpperCase(),
                templateName: 'Checkbox',
                fields: {
                  fieldName: {
                    value: 'agree_to_terms',
                  },
                },
              },
            ],
          },
        },
      ],
    },
    params: {},
  };

  const today = new Date();
  const interactionDate =
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + today.getDate()).slice(-2) +
    '/' +
    today.getFullYear();

  const emailBody = props.fields.emailBody?.value;

  const handleOpenModal = () => {
    if (!formSubmitted) {
      setIsAcceptModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setIsAcceptModalOpen(false);
  };
  const handleOpenTnCModal = (e: MouseEvent) => {
    e.preventDefault();
    setIsTnCModalOpen(true);
  };
  const handleCloseTnCModal = () => {
    setIsTnCModalOpen(false);
  };

  return (
    <section
      data-component="forms/venturespartner"
      id={props?.fields?.sectionId?.value || `id${hashCode(props.rendering.dataSource)}`}
    >
      {showThankYou ? (
        <div className="flex w-full flex-col justify-center text-center">
          <Headline
            classes="text-theme-text text-sm-m md:text-m font-heavy"
            fields={{
              headlineText: props.fields?.thankYouHeading,
            }}
          />
          <BodyCopy
            classes="text-theme-body text-body text-black"
            fields={{ body: props.fields?.thankYouText }}
          />
        </div>
      ) : (
        <>
          <Eyebrow {...props} classes="font-sans font-heavy text-sm-xxs mb-xxxs" />
          <Headline {...props} classes="text-theme-text text-sm-m md:text-x font-medium mb-xxs" />

          <BodyCopy {...props} classes="text-theme-body text-body mb-s text-black" />

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={async (values) => {
              if (acceptTCChecked) {
                setIsButtonEnabled(false);
                values.referrer = refererValue;
                values.agree_to_terms = acceptTCChecked;
                values.context_id = contextId;
                values.interaction_date = interactionDate;

                // for Send Email Action
                const emailBodyWithValues = replaceTokensWithValues(emailBody, values);
                const emailFields = {
                  emailBody: {
                    value: emailBodyWithValues,
                  },
                  emailSubject: {
                    value: props.fields.emailSubject?.value,
                  },
                  fromEmailAddress: {
                    value: props.fields.fromEmailAddress?.value,
                  },
                  toEmailAddress: {
                    value: props.fields.toEmailAddress?.value,
                  },
                  errorMessage: {
                    value: props.fields.errorMessage?.value,
                  },
                  stopOnError: {
                    value: true,
                  },
                };

                // actionFieldsProps for SFMC
                const actionFieldsProps = {
                  account: 'AW',
                  definitionKey: 'sitecore_venture_confirmation_email',
                  recipient: {
                    contactKey: createUUID().replace(/-/, ''),
                    to: values.email,
                    attributes: {
                      company: values.company,
                      company_type: values.company_type,
                      target_area: values.target_area,
                      first_name: values.first_name,
                      last_name: values.last_name,
                      phone: values.phone,
                      website: values.website,
                      country: values.country,
                      message: values.message,
                    },
                  },
                };

                //Save To Database Action
                const actionHandler1 = formActionFactory(
                  {
                    templateName: 'Save To Database',
                  },
                  values,
                  formProps
                );

                //Send Email Actions
                const actionHandler2 = formActionFactory(
                  {
                    templateName: 'Send Email',
                    fields: emailFields,
                  },
                  {}
                );

                // SFMC Transactional Messaging Send Email
                const actionHandler3 = formActionFactory(
                  {
                    templateName: 'SFMC Transactional Messaging Send Email',
                  },
                  actionFieldsProps
                );

                const resultSaveToDatabase = await actionHandler1?.executeAction(true);
                if (resultSaveToDatabase?.success) {
                  const resultSendEmail = await actionHandler2?.executeAction(true);
                  if (resultSendEmail?.success) {
                    const resultSFMC = await actionHandler3?.executeAction(true);
                    if (resultSFMC?.success) {
                      setIsButtonEnabled(true);
                      setShowThankYou(true);
                      setFormSubmitted(true);
                    } else {
                      setErrorOnSubmit(true);
                    }
                  } else {
                    setErrorOnSubmit(true);
                  }
                } else {
                  setErrorOnSubmit(true);
                }
              } else {
                handleOpenModal();
              }
            }}
            innerRef={formRef}
          >
            {({ touched, values, errors, handleSubmit, isValid, submitCount }) => {
              const isInvalid = !isValid && submitCount > 0;
              return (
                <form noValidate className=" mb-l grid grid-cols-12 gap-s" onSubmit={handleSubmit}>
                  {/* Company */}
                  <div className="col-span-12  md:col-span-6">
                    <InputText
                      id="venturesPartnerForm_company"
                      name="company"
                      type="text"
                      label="Company"
                      placeholder="Company"
                      required
                      maxLength={100}
                      aria-required="true"
                    />
                  </div>

                  {/* filler col */}
                  <div className="col-span-6 hidden md:block" />

                  {/* Company Type */}
                  <div className="col-span-12 md:col-span-6">
                    <Dropdown
                      name="company_type"
                      id="venturesPartnerForm_company_type"
                      options={companyTypeOptions}
                      required
                      aria-label="Company Type"
                      aria-required="true"
                      label="Company Type"
                    >
                      <option value="" selected>
                        Select One
                      </option>
                    </Dropdown>
                  </div>

                  {/* Focus Area */}
                  <div className="col-span-12 md:col-span-6">
                    <Dropdown
                      name="target_area"
                      id="venturesPartnerForm_target_area"
                      options={focusAreaOptions}
                      required
                      aria-label="Focus Area"
                      aria-required="true"
                      label="Focus Area"
                    >
                      <option value="" selected>
                        Select One
                      </option>
                    </Dropdown>
                  </div>

                  {/* first name */}
                  <div className="col-span-12  md:col-span-6">
                    <InputText
                      id="venturesPartnerForm_first_name"
                      name="first_name"
                      type="text"
                      label="First name"
                      placeholder="First name"
                      required
                      maxLength={25}
                      aria-required="true"
                    />
                  </div>

                  {/* last name */}
                  <div className="col-span-12 md:col-span-6">
                    <InputText
                      id="venturesPartnerForm_last_name"
                      name="last_name"
                      type="text"
                      label="Last name"
                      placeholder="Last name"
                      required
                      maxLength={25}
                      aria-required="true"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-12 md:col-span-6">
                    <InputText
                      id="venturesPartnerForm_email"
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Email"
                      maxLength={50}
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-span-12 md:col-span-6">
                    <InputPhone
                      id="venturesPartnerForm_phone"
                      name="phone"
                      label="Phone"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>

                  {/* Website */}
                  <div className="col-span-12  md:col-span-6">
                    <InputText
                      id="venturesPartnerForm_website"
                      name="website"
                      type="text"
                      label="Website"
                      placeholder="Website"
                      maxLength={100}
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    {/* Country - dropdown */}
                    <Dropdown
                      name="country"
                      id="venturesPartnerForm_country"
                      options={countries}
                      aria-label="country"
                      required={true}
                      aria-required="true"
                      label="Country"
                    ></Dropdown>
                  </div>

                  {/* Message */}
                  <div className="col-span-12 md:col-span-6">
                    <label
                      className={classNames(
                        themeData.classes.label,
                        touched['message'] && errors['message']
                          ? themeData.classes.errorTextColor
                          : ''
                      )}
                      htmlFor="venturesPartnersForm_message"
                    >
                      Message
                      {' *'}
                    </label>
                    <Field
                      as="textarea"
                      placeholder="Message"
                      rows="3"
                      name="message"
                      maxLength="450"
                      aria-required="true"
                      id="venturesPartnersForm_message"
                      className={classNames(
                        themeData.classes.textarea,
                        touched['message'] && errors['message']
                          ? themeData.classes.errorOutline
                          : '',
                        values['message'] ? 'border-black' : 'border-gray'
                      )}
                    />
                    <ErrorMessage
                      name="message"
                      className={classNames(
                        themeData.classes.errorMessage,
                        themeData.classes.errorTextColor
                      )}
                      component="span"
                    />
                  </div>

                  {/* filler col */}
                  <div className="col-span-6 hidden md:block" />

                  {/* Checkbox optin */}
                  <div className="col-span-12 md:col-span-6">
                    <Checkbox
                      options={[
                        {
                          id: 'venturesPartnersForm-agree_to_news_updates',
                          label: props.fields.subscribeToNewsUpdateText?.value,
                        },
                      ]}
                      name="agree_to_news_updates"
                    />
                  </div>

                  <div className="col-span-12">
                    <NavigationButton
                      type="submit"
                      name="submit"
                      className={classNames(
                        'min-w-[137px] justify-center max-md:mx-auto md:min-w-[218px]',
                        { 'pointer-events-none': errorOnSubmit }
                      )}
                      disabled={!isButtonEnabled && acceptTCChecked && !errorOnSubmit}
                    >
                      Submit
                    </NavigationButton>

                    {(!isButtonEnabled || isInvalid) && (
                      <span
                        className={
                          isInvalid
                            ? classNames(
                                themeData.classes.errorMessage,
                                themeData.classes.errorTextColor,
                                'w-fit'
                              )
                            : classNames('my-xxs block w-fit font-serif text-body text-dark-gray')
                        }
                      >
                        {isButtonEnabled
                          ? 'Please fill out all required fields.'
                          : acceptTCChecked && !errorOnSubmit && 'Processing... please wait'}
                      </span>
                    )}
                    {/* Error message if action is failed  */}
                    {acceptTCChecked && errorOnSubmit && (
                      <BodyCopy
                        fields={{ body: { value: props.fields?.errorMessage?.value } }}
                        classes={classNames(
                          '&_.body-copy',
                          themeData.classes.errorMessage,
                          themeData.classes.errorTextColor,
                          'mt-xs w-fit'
                        )}
                      />
                    )}
                  </div>
                </form>
              );
            }}
          </Formik>

          {/* We value your privacy. Privacy policy link  */}
          <BodyCopy
            fields={{ body: { value: props.fields.privacyPolicyText?.value } }}
            classes="[&_.body-copy]:!text-legal"
          />

          {/* External ideas submission policy link */}
          <LinkWrapper
            className="mt-xxxs flex w-full text-legal text-darkprimary"
            field={{
              href: props.fields.externalIdeasLink?.value.href,
              text: props.fields.externalIdeasLink?.value.text
                ? props.fields.externalIdeasLink?.value.text
                : 'External ideas submission policy',
            }}
            ariaLabel={{ value: props.fields.externalIdeasLink?.value.text || 'External ideas' }}
          ></LinkWrapper>

          {/* Terms and conditions modal */}

          <Link href="#">
            <a
              className="mt-xxxs flex w-full text-legal text-darkprimary"
              onClick={handleOpenTnCModal}
            >
              {props.fields.termsAndConditionsLinkText?.value}
            </a>
          </Link>

          <DisclaimerText
            fields={props.fields?.disclaimerText}
            disclaimerClasses={themeData.classes.disclaimerText}
          />

          <ModalWrapper size="large" handleClose={handleCloseModal} isModalOpen={isAcceptModalOpen}>
            <div className="px-m py-[20px] text-justify md:px-[60px]">
              <BodyCopy
                fields={{ body: { value: props.fields.termsAndConditions?.value } }}
                classes="[&_.body-copy]:!text-small"
              />

              {/* Checkbox acceptTCCheck */}
              <div className="my-m">
                <label className="flex">
                  <input
                    name="acceptTCCheck"
                    type="checkbox"
                    checked={acceptTCChecked}
                    onChange={() => setAcceptTCChecked(!acceptTCChecked)}
                    className={classNames(
                      'peer mr-xxs inline-flex h-[20px] w-[20px] cursor-pointer appearance-none items-center border-[1px] border-dark-gray checked:!bg-black hover:border-black focus:bg-gray focus:!ring-0',
                      themeData.classes.checkbox
                    )}
                  />
                  <Text
                    tag="span"
                    className="inline-flex items-center text-body"
                    field={{ value: props.fields.agreeToTermsAndConditionsText?.value }}
                  />
                </label>
              </div>
              <button
                type="button"
                className={classNames(
                  'mx-auto flex w-fit min-w-full items-center justify-center whitespace-nowrap rounded-lg border-4 border-theme-btn-border bg-theme-btn-bg px-m py-[9px] font-sans text-button font-heavy text-theme-btn-text hover:border-theme-btn-border-hover hover:bg-theme-btn-bg-hover hover:text-theme-btn-text-hover disabled:cursor-not-allowed disabled:border-gray disabled:text-gray disabled:hover:bg-theme-btn-bg md:mx-0 md:min-w-[218px]'
                )}
                disabled={!acceptTCChecked ? true : false}
                onClick={() => {
                  if (acceptTCChecked) {
                    setAcceptTCChecked(true);
                    handleCloseModal();
                    if (formRef.current) {
                      formRef.current.handleSubmit();
                    }
                  }
                }}
              >
                Accept & Submit
              </button>
            </div>
          </ModalWrapper>

          <ModalWrapper size="large" handleClose={handleCloseTnCModal} isModalOpen={isTnCModalOpen}>
            <div className="px-m py-[20px] text-justify md:px-[60px]">
              <BodyCopy
                fields={{ body: { value: props.fields.termsAndConditionsStandaloneCopy?.value } }}
                classes="[&_.body-copy]:!text-small"
              />
            </div>
          </ModalWrapper>
        </>
      )}
    </section>
  );
};

export default withDatasourceCheck()<VenturesPartnerProps>(VenturesPartner);
