import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import * as Yup from 'yup';
import { ComponentProps } from 'lib/types/component-props';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Formik, FormikValues } from 'formik';
import { hashCode } from 'src/helpers/Component/Component';
import { FormFieldsTheme } from 'src/helpers/Forms/Fields/FormFields.Theme';
import { InputText } from 'src/helpers/CustomForms/InputText';
import { InputPhone } from 'src/helpers/CustomForms/InputPhone';
import Checkbox from 'src/helpers/CustomForms/Checkbox';
import Dropdown from 'src/helpers/CustomForms/Dropdown';
import NavigationButton from 'src/helpers/Forms/Fields/NavigationButton/NavigationButton.Helper';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { IconTypes, SvgIcon } from 'src/helpers/SvgIcon';
import { getEnum, useExperienceEditor } from 'lib/utils';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';

export type JobApplicantProps = Feature.EnterpriseWeb.AndersenWindows.Forms.JobApplicant &
  ComponentProps;

interface CustomQuestionOption {
  optionId: string;
  text: string;
}

interface CustomQuestionField {
  id: string;
  description: string;
  required: boolean;
  text: string;
  type: string;
  options?: CustomQuestionOption[];
}

interface CustomQuestion {
  id: string;
  text: string;
  fields: CustomQuestionField[];
}

interface JobPostingQuestionsResponse {
  data: {
    customQuestions: CustomQuestion[];
  };
}

interface TransformedOption {
  id?: string;
  label: string;
  value: string;
}

const JobApplicant = (props: JobApplicantProps) => {
  const { themeData } = useTheme(FormFieldsTheme);

  const [showThankYou, setShowThankYou] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [submitError, setSubmitError] = useState<string | false>(false);

  const [areaInterestId, setAreaInterestId] = useState<string>('');
  const [sourceId, setSourceId] = useState<string>('');
  const [locationInterestId, setLocationInterestId] = useState<string>('');
  const [areaOfInterestOptions, setAreaOfInterestOptions] = useState<TransformedOption[]>([]);
  const [sourceOptions, setSourceOptions] = useState<TransformedOption[]>([]);
  const [locationOptions, setLocationOptions] = useState<TransformedOption[]>([]);

  const postingID = props.fields?.jobPostingId?.value || '';

  const processCustomQuestions = (questions: CustomQuestion[]) => {
    questions.forEach((question: CustomQuestion) => {
      const { text, id, fields } = question;

      switch (text) {
        case 'Area of Interest':
          setAreaInterestId(id);
          break;
        case 'Source':
          setSourceId(id);
          break;
        case 'Location(s) of Interest':
          setLocationInterestId(id);
          break;
      }

      fields.forEach((field: CustomQuestionField) => {
        const { text: fieldText, options } = field;
        const fieldOptions = options || [];

        const transformedOptions: TransformedOption[] = fieldOptions.map(
          (option: CustomQuestionOption) => {
            return {
              id: option.optionId,
              label: option.text,
              value: option.text,
            };
          }
        );

        switch (fieldText) {
          case 'Interest':
            setAreaOfInterestOptions(transformedOptions);
            break;
          case 'Locations':
            setLocationOptions(transformedOptions);
            break;
          case 'Source':
            const sourceOptionsWithoutId: TransformedOption[] = fieldOptions.map(
              (option: CustomQuestionOption) => {
                return {
                  label: option.text,
                  value: option.text,
                };
              }
            );
            setSourceOptions(sourceOptionsWithoutId);
            break;
        }
      });
    });
  };

  const isEE = useExperienceEditor();

  useEffect(() => {
    const jobPostingQuestionsFetcher = async () => {
      try {
        const response = await fetch('/api/aw/job-applicant/get-posting-questions/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postingID }),
        });

        const result: JobPostingQuestionsResponse = await response.json();

        const { customQuestions } = result.data;
        processCustomQuestions(customQuestions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    jobPostingQuestionsFetcher();
    // We can ignore the react-hooks/exhaustive-deps warning for this useEffect as postingId uses the props which are coming from layout service.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.fields) {
    return <></>;
  }

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    areaInterested: [],
    location: [],
    source: '',
  };

  const validationSchema = {
    first_name: Yup.string().trim().required('This field is required'),
    last_name: Yup.string().trim().required('This field is required'),
    email: Yup.string()
      .required('This field is required')
      .matches(
        new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        'This field is required'
      ),
    phone: Yup.string()
      .required('This field is required')
      .matches(
        new RegExp('^(1\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'),
        'Please enter a valid mobile number.'
      ),
    location: Yup.array().min(1, 'This field is required'),
  };

  function renderThankYou() {
    return (
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

        <ul className="flex gap-x-xxs">
          {props.fields.socialLinks?.map(
            (
              socialLink: Feature.EnterpriseWeb.Enterprise.Elements.Social.SocialLink,
              index: number
            ) => {
              const icon = getEnum<IconTypes>(socialLink.fields.icon);
              return (
                icon &&
                socialLink?.fields?.link?.value && (
                  <li key={index}>
                    {isEE ? (
                      <SvgIcon icon={icon} className="text-black" />
                    ) : (
                      <LinkWrapper
                        field={socialLink.fields.link}
                        ariaLabel={{ value: icon || 'social icon' }}
                      >
                        <SvgIcon icon={icon} fillId="black" className="text-black" />
                      </LinkWrapper>
                    )}
                  </li>
                )
              );
            }
          )}
        </ul>
      </>
    );
  }

  function preparePayload(values: FormikValues) {
    const payload = {
      postingId: postingID,
      customQuestions: [
        {
          id: areaInterestId,
          fields: [
            {
              value: values['areaInterested'],
            },
          ],
        },
        {
          id: sourceId,
          fields: [
            {
              value: values['source'],
            },
          ],
        },
        {
          id: locationInterestId,
          fields: [
            {
              value: values['location'],
            },
          ],
        },
      ],
      personalInformation: [
        {
          name: 'fullName',
          value: `${values['first_name']} ${values['last_name']}`,
        },
        {
          name: 'email',
          value: values['email'],
        },
        {
          name: 'phone',
          value: values['phone'],
        },
      ],
    };

    return payload;
  }

  return (
    <section
      data-component="forms/jobapplicant"
      className="mx-auto my-xl max-w-[1248px] px-m"
      id={props?.fields?.sectionId?.value || `id${hashCode(props.rendering.dataSource)}`}
    >
      {showThankYou ? (
        renderThankYou()
      ) : (
        <>
          <Eyebrow {...props} classes="font-sans font-heavy text-sm-xxs mb-xxxs" />
          <Headline {...props} classes="text-theme-text text-sm-m md:text-m font-heavy mb-xxs" />

          <BodyCopy {...props} classes="text-theme-body text-body mb-s text-black" />

          <div className="col-span-12 mb-m font-sans text-sm-s font-medium md:text-s">
            Contact Information
            <span className={classNames('font-serif', themeData.classes.label)}>
              * Indicates a required field
            </span>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={async (values) => {
              setIsButtonEnabled(false);
              const response = await fetch('/api/aw/job-applicant/submit-job-applicant/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(preparePayload(values)),
              });

              if (response.status !== 200) {
                setSubmitError('Error while processing your request.');
                setIsButtonEnabled(true);
              } else {
                setShowThankYou(true);
                setIsButtonEnabled(true);
                setSubmitError(false);
              }
            }}
          >
            {({ errors, handleSubmit, submitCount, isValid }) => {
              return (
                <form noValidate className=" grid grid-cols-12 gap-s" onSubmit={handleSubmit}>
                  <div className="col-span-12 md:col-span-6">
                    <InputText
                      id="jobApplicant_first_name"
                      name="first_name"
                      placeholder="First Name"
                      label="First name"
                      type="text"
                      maxLength={25}
                      required
                      aria-required
                      aria-invalid={errors['first_name'] ? true : false}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <InputText
                      id="jobApplicant_last_name"
                      name="last_name"
                      placeholder="Last Name"
                      label="Last name"
                      type="text"
                      maxLength={25}
                      required
                      aria-required
                      aria-invalid={errors['last_name'] ? true : false}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 md:mb-m">
                    <InputText
                      id="jobApplicant_email"
                      name="email"
                      placeholder="Email"
                      label="Email"
                      type="email"
                      maxLength={50}
                      required
                      aria-required
                      aria-invalid={errors['email'] ? true : false}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 md:mb-m">
                    <InputPhone
                      id="jobApplicant_phone"
                      name="phone"
                      placeholder="Phone"
                      label="Phone"
                      required
                      aria-required
                      aria-invalid={errors['phone'] ? true : false}
                    />
                  </div>

                  <div className="col-span-12 mt-m md:col-span-6 md:mt-0">
                    <fieldset>
                      <legend className="mb-m font-sans text-sm-s font-medium md:text-s">
                        Location(s) of interest
                        <span className={classNames('font-serif', themeData.classes.label)}>
                          Check all that apply *
                        </span>
                      </legend>
                      <Checkbox options={locationOptions} name="location" />
                    </fieldset>
                  </div>
                  <div className="col-span-12 mb-m md:col-span-6 md:mb-0">
                    <fieldset className="mb-s">
                      <legend className="mb-m font-sans text-sm-s font-medium md:text-s">
                        Area(s) of interest
                        <span className={classNames('font-serif', themeData.classes.label)}>
                          Check all that apply
                        </span>
                      </legend>
                      <Checkbox options={areaOfInterestOptions} name="areaInterested" />
                    </fieldset>

                    <div>
                      <Dropdown
                        options={sourceOptions}
                        name="source"
                        id="JobApplicant_Source"
                        label="How did you hear about this opportunity"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <NavigationButton
                      name="sumbit"
                      type="submit"
                      icon="arrow"
                      disabled={!isButtonEnabled}
                      className="mx-auto flex min-w-[218px] justify-center"
                    >
                      Submit
                    </NavigationButton>
                    {((!isValid && submitCount > 0) || submitError || !isButtonEnabled) && (
                      <span
                        className={
                          isButtonEnabled
                            ? classNames(
                                themeData.classes.errorMessage,
                                themeData.classes.errorTextColor,
                                'mx-auto'
                              )
                            : classNames(
                                'my-xxs block w-fit justify-center font-serif text-body text-dark-gray'
                              )
                        }
                      >
                        {isButtonEnabled
                          ? submitError ||
                            'Please check all fields to ensure all information is entered correctly.'
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
            {...props}
          />
        </>
      )}
    </section>
  );
};

export default withDatasourceCheck()<JobApplicantProps>(JobApplicant);
