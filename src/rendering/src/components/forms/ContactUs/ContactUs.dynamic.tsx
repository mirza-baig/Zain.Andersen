// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import TagManager from 'react-gtm-module';
// Components
import { ComponentProps } from 'lib/types/component-props';
import { Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { FormFieldsTheme } from 'src/helpers/Forms/Fields/FormFields.Theme';
import classNames from 'classnames';
import { Subheadline } from 'src/helpers/Subheadline';
import AddressGroup from 'src/helpers/CustomForms/AddressGroup/AddressGroup';
import RadioGroup from 'src/helpers/CustomForms/RadioGroup';
import Dropdown from 'src/helpers/CustomForms/Dropdown';
import { InputText } from 'src/helpers/CustomForms/InputText';
import { InputPhone } from 'src/helpers/CustomForms/InputPhone';
import { useState } from 'react';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Eyebrow } from 'src/helpers/Eyebrow';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import NavigationButton from 'src/helpers/Forms/Fields/NavigationButton/NavigationButton.Helper';
import FIELD_IDS from 'lib/constants/salesforce-field-ids';
import { formActionFactory } from 'temp/formActionFactory';
import { hashCode } from 'src/helpers/Component/Component';
import { useRouter } from 'next/router';
import { getCookie } from 'lib/utils/client-storage-utils';
import { CustomTextArea } from 'src/helpers/CustomForms/CustomTextArea';

export type ContactUsProps = Feature.EnterpriseWeb.AndersenWindows.Forms.ContactUs & ComponentProps;

const zipValidationRegex: Record<string, string> = {
  USA: '^[0-9]{5}$',
  Canada:
    '^(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]{3} [a-zA-Z\\d]{3}$|^(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]{6}$',
  Mexico: '^[0-9]{5}$',
};

const ContactUs = (props: ContactUsProps) => {
  const { themeData } = useTheme(FormFieldsTheme);
  const router = useRouter();

  const [showThankYou, setShowThankYou] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  if (!props.fields) {
    return <></>;
  }

  const initialValues = {
    about: 'homeowner',
    trades: '',
    reasonForContact: '',
    company: '',
    first_name: '',
    last_name: '',
    title: '',
    address1: '',
    country: 'USA',
    city: '',
    state: '',
    location: '',
    zip: '',
    contact: 'email',
    email: '',
    mobile: '',
    message: '',
  };

  const validationSchema = {
    trades: Yup.string().when('about', ([about], schema) => {
      return about === 'professional' ? schema.required('This field is required') : schema;
    }),
    reasonForContact: Yup.string().trim().required('This field is required'),
    company: Yup.string().when('about', ([about], schema) => {
      return about === 'professional' ? schema.required('This field is required') : schema;
    }),
    first_name: Yup.string().trim().required('This field is required'),
    last_name: Yup.string().trim().required('This field is required'),
    address1: Yup.string().when('about', ([about], schema) => {
      return about === 'professional' ? schema.required('This field is required') : schema;
    }),
    city: Yup.string().when('about', ([about], schema) => {
      return about === 'professional' ? schema.required('This field is required') : schema;
    }),
    state: Yup.string().when('about', ([about], schema) => {
      return about === 'professional' ? schema.required('This field is required') : schema;
    }),
    zip: Yup.string().when('country', ([country], schema) => {
      if (country !== 'Other') {
        return schema
          .required('This field is required')
          .matches(new RegExp(zipValidationRegex[country]), 'Please enter a valid zip code.');
      } else {
        return schema;
      }
    }),
    email: Yup.string()
      .required('This field is required')
      .matches(
        new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        'Please enter a valid address.'
      ),

    mobile: Yup.string()
      .required('This field is required')
      .matches(
        new RegExp('^(1\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'),
        'Please enter a valid mobile number.'
      ),

    message: Yup.string().trim().required('This field is required'),
  };

  const tradesOptions = [
    {
      label: 'Architect or Designer',
      value: 'Architect or Designer',
    },
    {
      label: 'Builder',
      value: 'Builder',
    },
    {
      label: 'Commercial Contractor',
      value: 'Commercial Contractor',
    },
    {
      label: 'Dealer or Distributor',
      value: 'Dealer or Distributor',
    },
    {
      label: 'Other',
      value: 'Other',
    },
    {
      label: 'Remodeler',
      value: 'Remodeler',
    },
    {
      label: 'Window/Door Replacer',
      value: 'Window/Door Replacer',
    },
  ];

  const reasonForContactOptions = [
    {
      label: 'Sales and Pre-Purchase Information',
      value: 'Sales and Pre-Purchase Information',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ];

  const aboutRadioOptions = [
    {
      id: 'contactUS_aboutHomeowner',
      value: 'homeowner',
      label: "I'm a homeowner",
    },
    {
      id: 'contactUS_aboutProfessional',
      value: 'professional',
      label: "I'm a trade professional",
    },
  ];

  const contactRadioOptions = [
    {
      id: 'contactUS_contactEmail',
      value: 'email',
      label: 'Email',
    },
    {
      id: 'contactUS_contactMobile',
      value: 'mobile',
      label: 'Mobile',
    },
  ];
  // Explanation: This is needed as we are uncertain about types of form values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFormData = (values: FormikValues): Record<string, any> => {
    const COOKIE_NAME = 'awSourceKey';
    const QUERYSTRING_NAME = 'sourceKey';
    const isHomeOwner = values['about'] === 'homeowner';
    const isDealer = !isHomeOwner && values['trades'] === 'Dealer or Distributor';
    const today = new Date();

    // Access the query parameter
    const queryParamValue = router.query[QUERYSTRING_NAME];

    // Access the cookie value
    const cookieValue = getCookie(COOKIE_NAME);

    // Decide which value to store in your variable
    const ORIGINALSOURCE_VALUE = queryParamValue || cookieValue || '';

    // conditional field Id
    const recordType = isHomeOwner
      ? FIELD_IDS.HOMEOWNER
      : isDealer
      ? FIELD_IDS.DEALER
      : FIELD_IDS.TRADEPROFESSIONAL;

    // conditional values
    const userType = isHomeOwner ? 'Homeowner' : values['trades'];

    let country = values['country'];

    if (values['country'] === 'Other') {
      country = values['location'];
      values['state'] = '';
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mappedValues: Record<string, any> = {};

    mappedValues[FIELD_IDS.RECORDTYPE] = recordType;
    mappedValues[FIELD_IDS.ORGID] = process.env.NEXT_PUBLIC_EW_SF_AW_ORG_ID || '';
    mappedValues[FIELD_IDS.QUESTIONCOMMENT] = values['reasonForContact'] + ': ' + values['message'];
    mappedValues[FIELD_IDS.CAMPAIGNIDS] = props.fields?.campaignIds?.value;
    mappedValues[FIELD_IDS.LEADSOURCE] = props.fields?.leadSource?.value;
    mappedValues[FIELD_IDS.FIRSTNAME] = values['first_name'];
    mappedValues[FIELD_IDS.LASTNAME] = values['last_name'];
    mappedValues[FIELD_IDS.TITLE] = values['title'];
    mappedValues[FIELD_IDS.COMPANYNAME] = values['company'];
    mappedValues[FIELD_IDS.EMAIL] = values['email'];
    mappedValues[FIELD_IDS.MOBILE] = values['mobile'];
    mappedValues[FIELD_IDS.ADDRESS1] = values['address1'];
    mappedValues[FIELD_IDS.CITY] = values['city'];
    mappedValues[FIELD_IDS.STATE] = values['state'];
    mappedValues[FIELD_IDS.ZIPCODE] = values['zip'];
    mappedValues[FIELD_IDS.COUNTRY] = country;
    mappedValues[FIELD_IDS.USERTYPE] = userType;
    mappedValues[FIELD_IDS.PROCESSSTATE] = 'New';
    mappedValues[FIELD_IDS.CONTACTME] = '0';
    mappedValues[FIELD_IDS.PREFERREDMETHOD] = values['contact'];
    mappedValues[FIELD_IDS.ORIGINALSOURCE] = ORIGINALSOURCE_VALUE;
    mappedValues[FIELD_IDS.INTERACTIONDATE] =
      ('0' + (today.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + today.getDate()).slice(-2) +
      '/' +
      today.getFullYear();
    mappedValues[FIELD_IDS.SESSIONDATA] =
      today + ' /// ' + today.getTime() + ' /// ' + navigator.userAgent;

    return mappedValues;
  };

  return (
    <section
      data-component="forms/contactus"
      id={props?.fields?.sectionId?.value || `id${hashCode(props.rendering.dataSource)}`}
    >
      {showThankYou ? (
        <>
          <Headline
            classes="text-theme-text text-sm-m md:text-m font-heavy mb-s"
            fields={{
              headlineText: props.fields?.thankYouHeading,
            }}
          />
          <BodyCopy
            classes="text-theme-body text-body text-black mb-s"
            fields={{ body: props.fields?.thankYouText }}
          />
        </>
      ) : (
        <>
          <Eyebrow {...props} classes="font-sans font-heavy text-sm-xxs mb-xxxs" />
          <Headline {...props} classes="text-theme-text text-sm-m md:text-m font-heavy mb-xxs" />

          <BodyCopy {...props} classes="text-theme-body text-body mb-s text-black" />

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={async (values) => {
              setIsButtonEnabled(false);
              const actionHandler = formActionFactory(
                {
                  templateName: 'Salesforce Web To Lead',
                },
                getFormData(values)
              );

              const result = await actionHandler?.executeAction(true);

              if (result?.success) {
                TagManager.dataLayer({
                  dataLayer: {
                    event: 'contact_us_form',
                    form_name: 'Contact Us Request',
                    form_submit_text: 'Submit',
                    user_type: values['about'] === 'homeowner' ? 'Homeowner' : values['trades'],
                  },
                });
                setIsButtonEnabled(true);
                setShowThankYou(true);
              }
            }}
          >
            {({ values, handleSubmit, isValid, submitCount }) => {
              const isInvalid = !isValid && submitCount > 0;
              return (
                <form noValidate className=" grid grid-cols-12 gap-s" onSubmit={handleSubmit}>
                  <div className="col-span-12 md:col-span-6">
                    <Subheadline
                      classes={classNames('text-s font-medium')}
                      fields={{ subheadlineText: { value: 'Tell us about you' } }}
                    />
                  </div>

                  {/* filler col */}
                  <div className="col-span-6 hidden md:block" />

                  {/* About You Radio Group */}
                  <div className="col-span-12 md:col-span-6">
                    <RadioGroup options={aboutRadioOptions} name="about" />
                  </div>

                  {/* filler col */}
                  <div className="col-span-6 hidden md:block" />

                  {/* Trades Dropdown - conditional */}
                  {values['about'] === 'professional' && (
                    <>
                      <div className="col-span-12 mb-s md:col-span-6">
                        <Dropdown
                          name="trades"
                          id="contactUs_trades"
                          options={tradesOptions}
                          required
                          aria-label="Select trade"
                          aria-required="true"
                        >
                          <option value="" selected disabled>
                            Select One
                          </option>
                        </Dropdown>
                      </div>

                      {/* filler col */}
                      <div className="col-span-6 hidden md:block" />
                    </>
                  )}

                  <div className="col-span-12 md:col-span-6">
                    <Subheadline
                      classes="inline-block text-s font-medium"
                      fields={{ subheadlineText: { value: 'Reason for contact' } }}
                    />

                    <span className="">{' *'}</span>
                  </div>

                  {/* filler col */}
                  <div className="col-span-6 hidden md:block" />

                  <div className="col-span-12 mb-s md:col-span-6">
                    {/* Reason for contact - dropdown */}
                    <Dropdown
                      name="reasonForContact"
                      id="contactUs_reasonForContact"
                      options={reasonForContactOptions}
                      aria-label="Reason for contact"
                      required={true}
                      aria-required="true"
                    >
                      <option value="" selected disabled>
                        Select One
                      </option>
                    </Dropdown>
                  </div>

                  {/* filler col */}
                  <div className="col-span-6 hidden md:block" />

                  <div className="col-span-12">
                    <Subheadline
                      classes="text-s font-medium"
                      fields={{ subheadlineText: { value: 'Contact information' } }}
                    />
                  </div>

                  {/* Company */}
                  {values['about'] === 'professional' && (
                    <>
                      <div className="col-span-12 md:col-span-6">
                        <InputText
                          id="contactUs_company"
                          name="company"
                          type="text"
                          label="Company"
                          placeholder="Company"
                          required
                          aria-required="true"
                          maxLength={100}
                        />
                      </div>

                      {/* filler col */}
                      <div className="col-span-6 hidden md:block" />
                    </>
                  )}

                  {/* first name */}
                  <div className="col-span-12  md:col-span-6">
                    <InputText
                      id="contactUs_first_name"
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
                      id="contactUs_last_name"
                      name="last_name"
                      type="text"
                      label="Last name"
                      placeholder="Last name"
                      required
                      maxLength={25}
                      aria-required="true"
                    />
                  </div>

                  {/* title */}
                  {values['about'] === 'professional' && (
                    <>
                      <div className="col-span-12 md:col-span-6">
                        <InputText
                          id="contactUs_title"
                          name="title"
                          type="text"
                          label="Title"
                          placeholder="Title"
                          maxLength={25}
                        />
                      </div>

                      {/* filler col */}
                      <div className="col-span-6 hidden md:block" />
                    </>
                  )}

                  <AddressGroup
                    address1={{
                      id: 'contactUs_address1',
                      name: 'address1',
                      label: 'Address',
                      placeholder: 'Address',
                      classes: 'md:col-span-6',
                      required: values['about'] === 'professional',
                    }}
                    country={{
                      id: 'contactUs_country',
                      name: 'country',
                      label: 'Country',
                      classes: 'md:col-span-6',
                      required: values['about'] === 'professional',
                    }}
                    city={{
                      id: 'contactUs_city',
                      name: 'city',
                      label: values['country'] === 'Canada' ? 'Municipality' : 'City',
                      placeholder: values['country'] === 'Canada' ? 'Municipality' : 'City',
                      classes: 'md:col-span-6',
                      required: values['about'] === 'professional',
                    }}
                    state={{
                      id: 'contactUs_state',
                      name: 'state',
                      label: values['country'] === 'Canada' ? 'Province' : 'State',
                      classes: 'md:col-span-3',
                      required: values['about'] === 'professional',
                    }}
                    location={{
                      id: 'contactUs_location',
                      name: 'location',
                      label: 'Location',
                      placeholder: 'Location',
                      classes: 'md:col-span-3',
                      required: values['about'] === 'professional',
                    }}
                    zipCode={{
                      id: 'contactUs_zipCode',
                      name: 'zip',
                      label: values['country'] === 'Canada' ? 'Postal Code' : 'Zip Code',
                      placeholder: values['country'] === 'Canada' ? 'Postal Code' : 'Zip Code',
                      classes: 'md:col-span-3',
                      required: values['about'] === 'professional',
                    }}
                  />

                  {/* contact method */}
                  <div className="col-span-12">
                    <RadioGroup
                      options={contactRadioOptions}
                      name="contact"
                      label="Preferred contact method"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-12 md:col-span-6">
                    <InputText
                      id="contactUs_email"
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Email"
                      maxLength={50}
                      subLabel={props?.fields?.privacyPolicyText?.value}
                      required
                      aria-required
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <InputPhone
                      id="contactUs_mobile"
                      name="mobile"
                      label="Mobile"
                      placeholder="Phone"
                      required
                      aria-required
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <CustomTextArea
                      placeholder="Message"
                      rows={5}
                      name="message"
                      maxLength={450}
                      required
                      aria-required
                      id="contactUs_message"
                      label="Message"
                    />
                  </div>

                  <div className="col-span-12">
                    <NavigationButton
                      className="mx-auto md:mx-0"
                      type="submit"
                      name="submit"
                      disabled={!isButtonEnabled}
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
                                'mx-auto w-fit md:mx-0'
                              )
                            : classNames('my-xxs block w-fit font-serif text-body text-dark-gray')
                        }
                      >
                        {isButtonEnabled
                          ? 'Please fill out all required fields.'
                          : 'Processing... please wait'}
                      </span>
                    )}
                  </div>
                </form>
              );
            }}
          </Formik>

          <DisclaimerText
            fields={props.fields?.disclaimerText}
            disclaimerClasses={themeData.classes.disclaimerText}
          />
        </>
      )}
    </section>
  );
};

export default withDatasourceCheck()<ContactUsProps>(ContactUs);
