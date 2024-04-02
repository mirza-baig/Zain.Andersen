// Global
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import * as Yup from 'yup';
import {
  ArrayHelpers,
  FieldArray,
  Formik,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from 'formik';
import classNames from 'classnames';
// Components
import { ComponentProps } from 'lib/types/component-props';
import {
  warrantyRegistrationInitialValues,
  warrantyRegistrationValidationSchema,
} from './WarrantyRegistration.helper';
import AddressGroup from 'src/helpers/CustomForms/AddressGroup/AddressGroup';
import { InputText } from 'src/helpers/CustomForms/InputText';
import { InputPhone } from 'src/helpers/CustomForms/InputPhone';
import { SvgIcon } from 'src/helpers/SvgIcon';
import ProductFields from './ProductFields.helper';
import Checkbox from 'src/helpers/CustomForms/Checkbox';
import NavigationButton from 'src/helpers/Forms/Fields/NavigationButton/NavigationButton.Helper';
import { formActionFactory } from 'temp/formActionFactory';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from 'src/helpers/Forms/Fields/FormFields.Theme';
import { SectionHeadlineTheme } from 'components/general/SectionHeadline/SectionHeadline.theme';
import { useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { ProductByBVIdQueryResult } from 'src/pages/api/aw/bazaarvoice-product-by-bvid';
import { Field } from 'lib/jss21.2.1/layout';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { useBVScript } from 'lib/utils/use-bv-script';

export type WarrantyRegistrationProps =
  Feature.EnterpriseWeb.AndersenWindows.Forms.WarrantyRegistration & ComponentProps;

const WarrantyRegistration = (props: WarrantyRegistrationProps) => {
  const { themeData } = useTheme(FormFieldsTheme);
  const sectionHeadlineTheme = useTheme(SectionHeadlineTheme('left', 'dark')).themeData;
  // Add the bazaarvoice script
  useBVScript();

  const sitecoreContext = useSitecoreContext();
  const language = sitecoreContext.sitecoreContext.language;

  const [isWarrantyRegistered, setIsWarrantyRegistered] = useState(false);
  const [showFormError, setShowFormError] = useState<false | string>(false);
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(true);
  const [bazaarvoiceProducts, setBazaarvoiceProducts] = useState([]);

  const fetchProductsByBVIds = async (productIds: Array<string>) => {
    if (productIds.length > 0) {
      try {
        const response = await fetch('/api/aw/bazaarvoice-product-by-bvid/', {
          method: 'POST',
          body: JSON.stringify({ productIds: productIds, language: language }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBazaarvoiceProducts(data.products);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
  };

  const handleSubmit = async (
    values: FormikValues,
    touched: FormikTouched<FormikValues>,
    setTouched: FormikHelpers<FormikValues>['setTouched'],
    validateForm: FormikHelpers<FormikValues>['validateForm']
  ) => {
    const updateTouchedState = (): Record<string, unknown> => {
      const touchedState = Object.keys(values)?.reduce(
        (acc: Record<string, boolean>, field: string) => {
          if (field === 'warranty_products') {
            values[field].forEach(
              (warrantyProduct: Array<Record<string, string>>, productIndex: number) =>
                Object.keys(warrantyProduct).forEach((productField) => {
                  // @ts-ignore we can ignore typescript error "Element implicitly has an 'any' type because expression of type 'any' can't be used to index type"
                  acc[field] = acc[field] || [];
                  // @ts-ignore we can ignore typescript error "Element implicitly has an 'any' type because expression of type 'any' can't be used to index type"
                  acc[field][productIndex] = { ...acc[field][productIndex], [productField]: true };
                })
            );
          } else {
            acc[field] = true;
          }
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
      setIsSubmitButtonEnabled(false);
      setShowFormError('Processing... please wait');

      const actionHandler = formActionFactory(
        {
          templateName: 'Warranty Registration',
        },
        values
      );

      const result = await actionHandler?.executeAction(true);

      if (result?.success) {
        setIsWarrantyRegistered(true);

        const productIDs = values['warranty_products']
          .map(
            (warrantyProduct: Record<string, string>) =>
              warrantyProduct.productseries.split('|')?.[1] || ''
          )
          .filter((product: string) => product); //Remove empty products if any

        fetchProductsByBVIds(productIDs);
      } else {
        setIsSubmitButtonEnabled(true);
      }
    } else {
      setShowFormError('Please fill out all required fields.');
    }
  };

  return (
    <div data-component="forms/requestquote">
      <Eyebrow {...props} classes="font-sans font-heavy text-sm-xxs mb-xxxs" />
      <div className="col-span-12">
        <Headline
          classes={sectionHeadlineTheme.classes.headlineContainer}
          fields={{
            headlineText: isWarrantyRegistered
              ? props.fields?.thankYouHeading || ''
              : props.fields?.headlineText || '',
          }}
        />
      </div>
      <BodyCopy
        classes="!font-sans [&_.body-copy_div]:!text-s font-medium mb-l md:mb-[56px]"
        fields={{
          body: isWarrantyRegistered ? props.fields?.thankYouText || '' : props.fields?.body || '',
        }}
      />

      <Formik
        initialValues={warrantyRegistrationInitialValues}
        validationSchema={Yup.object().shape(warrantyRegistrationValidationSchema)}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={() => undefined}
      >
        {({ values, touched, setTouched, validateForm, isValid }) => {
          return (
            !isWarrantyRegistered && (
              <form className="mx-auto my-s grid grid-cols-12 gap-xxs gap-y-m md:max-w-screen-lg md:gap-s">
                {/* Contact section */}
                <div className="col-span-12  font-sans text-s font-medium">
                  Contact Information
                  <span className={classNames('font-serif', themeData.classes.label)}>
                    * Indicates a required field
                  </span>
                </div>
                {/* first name */}
                <div className="col-span-12  md:col-span-6">
                  <InputText
                    id="warrantyRegistration-first-name"
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
                    id="warrantyRegistration-last-name"
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
                    id="warrantyRegistration-email"
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
                    id="warrantyRegistration-phone"
                    name="phone"
                    label="Phone"
                    placeholder="Phone"
                    required
                    aria-required
                  />
                </div>
                <AddressGroup
                  address1={{
                    id: 'warrantyRegistration-address1',
                    name: 'address1',
                    label: 'Address',
                    placeholder: 'Address',
                    classes: 'col-span-12 md:col-span-6',
                    required: true,
                  }}
                  country={{
                    id: 'warrantyRegistration-country',
                    name: 'country',
                    label: 'Country',
                    classes: 'col-span-12 md:col-span-6',
                    required: true,
                  }}
                  city={{
                    id: 'warrantyRegistration-city',
                    name: 'city',
                    label: values['country'] === 'Canada' ? 'Municipality' : 'City',
                    placeholder: values['country'] === 'Canada' ? 'Municipality' : 'City',
                    classes: 'col-span-12 md:col-span-6',
                    required: true,
                  }}
                  state={{
                    id: 'warrantyRegistration-state',
                    name: 'state',
                    label: values['country'] === 'Canada' ? 'Province' : 'State',
                    classes: 'col-span-12 md:col-span-3',
                    required: true,
                  }}
                  location={{
                    id: 'warrantyRegistration-location',
                    name: 'location',
                    label: 'Location',
                    placeholder: 'Location',
                    classes: 'col-span-12 md:col-span-3',
                    required: true,
                  }}
                  zipCode={{
                    id: 'warrantyRegistration-zipCode',
                    name: 'zip',
                    label: values['country'] === 'Canada' ? 'Postal Code' : 'Zip',
                    placeholder: values['country'] === 'Canada' ? 'Postal Code' : 'Zip',
                    classes: 'col-span-12 md:col-span-3',
                    required: true,
                  }}
                />
                {/* Products section */}
                <div className="col-span-12 mt-s font-sans text-s font-medium">Product</div>
                <FieldArray
                  name="warranty_products"
                  render={(arrayHelpers: ArrayHelpers) => (
                    <>
                      {values.warranty_products &&
                        values.warranty_products.map((_, index) => (
                          <ProductFields
                            key={index}
                            productIndex={index}
                            removeProduct={() => {
                              arrayHelpers.remove(index);
                              values['warranty_products'].length === 1 &&
                                arrayHelpers.push({
                                  producttype: '',
                                  productseries: '',
                                  quantity: '',
                                  serialnumber: '',
                                  installationdate: '',
                                  productid: '',
                                });
                            }}
                          />
                        ))}
                      <div className="col-span-12">
                        <div
                          className="relative mx-auto flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-[8px] border border-dashed border-gray py-xs text-center !font-sans text-small font-heavy text-darkprimary ml:text-xxs"
                          onClick={() =>
                            arrayHelpers.push({
                              producttype: '',
                              productseries: '',
                              quantity: '',
                              serialnumber: '',
                              installationdate: '',
                              productid: '',
                            })
                          }
                        >
                          <div tabIndex={0} className="mb-xxs">
                            <SvgIcon
                              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                              icon="plus"
                              size="lg"
                            />
                          </div>
                          <span className="!font-serif text-body font-regular text-black">
                            Add another product
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                />

                <div className="col-span-12 md:col-span-6">
                  <Checkbox
                    options={[
                      {
                        id: 'warrantyRegistration-optin',
                        label: props.fields?.subscribeToNewsUpdateText.value || '',
                      },
                    ]}
                    name="newsletter"
                  />
                </div>
                <div className="col-span-12">
                  <NavigationButton
                    type="button"
                    onClick={() => handleSubmit(values, touched, setTouched, validateForm)}
                    className={classNames('mx-auto w-[137px] text-center md:mx-0 md:w-[218px]')}
                    disabled={!isSubmitButtonEnabled}
                  >
                    <span className="w-full text-center">Submit</span>
                  </NavigationButton>
                  {(!isSubmitButtonEnabled || !isValid) && (
                    <span
                      className={
                        !isValid
                          ? classNames(
                              themeData.classes.errorMessage,
                              themeData.classes.errorTextColor
                            )
                          : classNames('my-xxs block w-fit font-serif text-body text-dark-gray')
                      }
                    >
                      {showFormError}
                    </span>
                  )}
                </div>
              </form>
            )
          );
        }}
      </Formik>
      {!isWarrantyRegistered && (
        <DisclaimerText
          fields={props.fields?.disclaimerText}
          disclaimerClasses={themeData.classes.disclaimerText}
        />
      )}
      {isWarrantyRegistered && bazaarvoiceProducts.length > 0 && (
        <>
          <Headline
            classes="text-theme-text text-sm-m md:text-m font-heavy mb-xxs"
            fields={{
              headlineText: props.fields?.productReviewSectionHeading || '',
            }}
          />
          <BodyCopy
            fields={{
              body: props.fields?.productReviewSectionCopy || '',
            }}
          />
          <div className="mx-auto my-s grid grid-cols-12 gap-xxs gap-y-m md:max-w-screen-lg md:gap-s">
            {isWarrantyRegistered &&
              bazaarvoiceProducts.map((product) => ProductReviewCard(product))}
          </div>
        </>
      )}
    </div>
  );
};

const SubmitReviewClick = (externalId: string) => {
  // @ts-ignore $BV will be available after the page loads.
  $BV.ui('rr', 'submit_review', { productId: externalId });
};

const ProductReviewCard = (
  product: ProductByBVIdQueryResult & {
    productSeries: { targetItem: { productTypeName: Field<string> } };
  }
) => {
  const imageField = {
    value: product.productImage,
  };

  const ratingButtonProps = {
    cta1Icon: {
      id: 'f8ad4587-51a4-4e66-8eec-b448f78b4cb2',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Augmented-Reality',
      name: 'Augmented Reality',
      displayName: 'Augmented Reality',
      fields: {
        Value: {
          value: 'arrow',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    cta1Link: {
      value: {
        href: '',
        text: 'Start rating',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '',
        querystring: '',
        id: '{BD66C47E-42B0-4EDD-BAD3-4BC981C05E5D}',
      },
    },
    cta1Style: {
      id: '8aedd89c-e161-41d4-b773-6a6097a19372',
      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Secondary',
      name: 'Secondary',
      displayName: 'Primary',
      fields: {
        Value: {
          value: 'primary',
        },
      },
      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
      templateName: 'Enum',
    },
    cta1ModalLinkText: {
      value: '',
    },
    cta1AriaLabel: {
      value: '',
    },
  };
  return (
    <div className="col-span-12 border border-gray p-s md:col-span-3">
      <Eyebrow
        fields={{ eyebrowText: product.productSeries.targetItem.productTypeName }}
        classes="!font-sans text-xxs text-dark-gray font-heavy mb-xxs"
      />
      <h3 className="mb-s font-sans text-xs font-heavy">{product.productName.value}</h3>
      <div className="relative mb-s">
        <ImageWrapper
          image={imageField}
          imageLayout="responsive"
          additionalDesktopClasses="max-w-full"
          additionalMobileClasses="max-w-full"
        ></ImageWrapper>
      </div>
      <div
        className="flex"
        onClick={(e) => {
          e.preventDefault();
          SubmitReviewClick(product.bazaarvoiceProductId?.value);
        }}
      >
        <SingleButton classes={{ wrapper: '!mb-0 !mx-auto' }} fields={ratingButtonProps} />
      </div>
    </div>
  );
};

export default withDatasourceCheck()<WarrantyRegistrationProps>(WarrantyRegistration);
