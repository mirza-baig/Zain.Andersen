/* eslint-disable react-hooks/exhaustive-deps */
// We can ignore warning for useMemo's dependency throughout the file because adding the depencdency changes the behaviour of the intended functionality

import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as yup from 'yup';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Field, FormikErrors, FormikTouched, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from '../FormFields.Theme';
import classNames from 'classnames';
import FieldWrapper from '../../Structure/FieldWrapper/FieldWrapper';
import { getKeyValuePairList, getValidatonSchema, getWidthClass } from 'lib/forms/FormFieldUtils';
import { FormFieldExport } from 'lib/forms';
import { fieldFactoryComponent } from 'temp/formFactory';
import { getEnum } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { Autocomplete, Libraries, useJsApiLoader } from '@react-google-maps/api';
import handlePlaceChanged, { getLocationFieldProps, updateLabels } from './AddressUtils';

export type AddressProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Address & FormFieldProps;

const getAddressValidationSchema = (props: AddressProps, schema: yup.AnyObject) => {
  const fieldsToValidate = [
    props.fields?.address1Field && 'address1Field',
    props.fields?.address2Field && 'address2Field',
    props.fields?.countryField && 'countryField',
    props.fields?.cityField && 'cityField',
    !props.fields?.countryField && props.fields?.stateField && 'stateField',
    !props.fields?.countryField && props.fields?.zipCodeField && 'zipCodeField',
  ].filter(Boolean);

  fieldsToValidate.forEach((field) => {
    const validations = props.fields[field]?.fields?.validations;
    if (validations) {
      const validator = getValidatonSchema('string', props.fields[field]);
      if (validator) {
        schema[props.fields[field].fields?.fieldName?.value] = validator;
      }
    }
  });

  if (props.fields?.countryField) {
    const countryFieldValue = props.fields?.countryField?.fields?.fieldName?.value;
    const zipCodeField = props.fields?.zipCodeField;
    let isRequiredZip = false;
    let errorMessage = '';
    zipCodeField.fields?.validations?.forEach(
      (validationRule: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
        if (
          getEnum(validationRule.fields?.validationType) === 'required' &&
          validationRule.fields?.errorMessage?.value
        ) {
          isRequiredZip = true;
          errorMessage = validationRule.fields?.errorMessage?.value;
        }
      }
    );

    let isRequiredZipText = '';
    if (isRequiredZip) {
      const fieldLabel = zipCodeField.fields?.label?.value;
      isRequiredZipText = errorMessage.replace(/{fieldLabel}/g, fieldLabel);
    }

    const USErrorText = props.fields?.zipCodeUSValidationRule?.fields?.errorMessage?.value;
    const CAErrorText = props.fields?.zipCodeCAValidationRule?.fields?.errorMessage?.value;

    const USRule = props.fields?.zipCodeUSValidationRule?.fields?.validationRule?.value;
    const CARule = props.fields?.zipCodeCAValidationRule?.fields?.validationRule?.value;
    let zipCodeValidator;

    const validator: yup.AnySchema = (yup['string'] as () => yup.AnySchema)();
    if (isRequiredZip) {
      zipCodeValidator = validator
        .when(countryFieldValue, {
          is: (value: string) => ['USA', 'Mexico'].includes(value),
          then: (innerValidator: yup.StringSchema) =>
            innerValidator.matches(USRule, USErrorText).required(isRequiredZipText),
          otherwise: (innerValidator) => innerValidator,
        })
        .when(countryFieldValue, {
          is: 'Canada',
          then: (innerValidator: yup.StringSchema) =>
            innerValidator.matches(CARule, CAErrorText).required(isRequiredZipText),
          otherwise: (innerValidator) => innerValidator,
        })
        .when(countryFieldValue, {
          is: (value: string) => !['USA', 'Mexico', 'Canada', 'Other'].includes(value),
          then: (innerValidator: yup.StringSchema) => innerValidator.required(isRequiredZipText),
          otherwise: (innerValidator) => innerValidator,
        });
    } else {
      zipCodeValidator = validator
        .when(countryFieldValue, {
          is: (value: string) => ['USA', 'Mexico'].includes(value),
          then: (innerValidator: yup.StringSchema) =>
            innerValidator.matches(USRule, USErrorText).required(isRequiredZipText),
          otherwise: (innerValidator) => innerValidator,
        })
        .when(countryFieldValue, {
          is: 'Canada',
          then: (innerValidator: yup.StringSchema) =>
            innerValidator.matches(CARule, CAErrorText).required(isRequiredZipText),
          otherwise: (innerValidator) => innerValidator,
        });
    }

    if (zipCodeValidator) {
      schema[zipCodeField.fields?.fieldName?.value] = zipCodeValidator;
    }

    const stateField = props.fields?.stateField;
    let isRequiredState = false;
    let errorMessageState = '';
    stateField.fields?.validations?.forEach(
      (validationRule: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValidation) => {
        if (
          getEnum(validationRule.fields?.validationType) === 'required' &&
          validationRule.fields?.errorMessage?.value
        ) {
          isRequiredState = true;
          errorMessageState = validationRule.fields?.errorMessage?.value;
        }
      }
    );

    let isRequiredStateText = '';
    if (isRequiredState) {
      const fieldLabel = stateField.fields?.label?.value;
      isRequiredStateText = errorMessageState.replace(/{fieldLabel}/g, fieldLabel);
    }

    const stateFieldValidator = validator
      .when(countryFieldValue, {
        is: (value: string) => ['USA', 'Mexico'].includes(value),
        then: (innerValidator: yup.StringSchema) => innerValidator.required(isRequiredStateText),
        otherwise: (innerValidator) => innerValidator,
      })
      .when(countryFieldValue, {
        is: (value: string) => ['Canada'].includes(value),
        then: (innerValidator: yup.StringSchema) =>
          innerValidator.required(errorMessageState.replace(/{fieldLabel}/g, 'Province')),
        otherwise: (innerValidator) => innerValidator,
      })
      .when(countryFieldValue, {
        is: 'Other',
        then: (innerValidator: yup.StringSchema) => innerValidator,
        otherwise: (innerValidator) => innerValidator,
      });

    if (stateFieldValidator) {
      schema[stateField.fields?.fieldName?.value] = stateFieldValidator;
    }
  }
  return schema;
};

// We need to keep this outside of the functional component in order to avoid "False performance warning about libraries"
// Please refer https://github.com/JustFly1984/react-google-maps-api/issues/238 for more info
const googleLibrariesToLoad = ['places'];

const AddressComponent = (props: AddressProps): JSX.Element => {
  const { themeName, themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values, handleChange, handleBlur, setValues, setFieldValue } =
    useFormikContext<FormikValues>();

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const allState = useMemo(() => {
    return (
      props.fields?.stateField?.fields?.datasource?.children &&
      JSON.parse(JSON.stringify(props.fields?.stateField?.fields?.datasource?.children))
    );
  }, []);

  const isInvalid =
    props.fields.countryField &&
    (touched as FormikTouched<FormikValues>)[props.fields?.countryField.fields?.fieldName?.value] &&
    (errors as FormikErrors<FormikValues>)[props.fields?.countryField.fields?.fieldName?.value];

  const [stateFieldDatatoSet, setstateFieldDatatoSet] = useState(props.fields?.stateField);
  const [zipCodeFieldDatatoSet, setzipCodeFieldDatatoSet] = useState(props.fields?.zipCodeField);
  const [countryDropdownOptions, setCountryDropdownOptions] = useState<
    Array<{ label: string; value: string }>
  >([]);
  const [showLocationField, setShowLocationField] = useState(false);

  // Disabling any type warning for the address field data related variables.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const datasource: { [key: string]: any } = {};
  let dropdownOptions: Array<{ label: string; value: string }>, countryNames: Array<string>;
  let initialCountryFieldValue = '';
  const allStateFields = { ...props.fields?.stateField };
  const stateFieldData: { [key: string]: any } = {};
  const zipCodeField = { ...props.fields?.zipCodeField };
  const zipCodeFieldData: { [key: string]: any } = {};
  /* eslint-enable @typescript-eslint/no-explicit-any */
  if (props.fields?.countryField) {
    dropdownOptions = getKeyValuePairList(props.fields?.countryField);
    if (props.fields?.countryField?.fields?.showDefaultDisplay?.value) {
      dropdownOptions?.unshift({
        label: props.fields?.countryField?.fields?.defaultDisplay?.value || '',
        value: '',
      });
    }

    countryNames = dropdownOptions?.map((option) => option.value);
    countryNames &&
      countryNames.length > 0 &&
      countryNames.forEach((countryName: string) => {
        datasource[countryName] =
          /* eslint-disable @typescript-eslint/no-explicit-any */
          allState && allState.find((field: any) => field.name === countryName);
      });
    initialCountryFieldValue = values[props.fields?.countryField?.fields?.fieldName?.value];

    countryNames &&
      countryNames.length > 0 &&
      countryNames.forEach((countryName) => {
        stateFieldData[countryName] = {
          ...allStateFields,
          fields: {
            ...allStateFields.fields,
            datasource: datasource[countryName],
          },
        };
      });

    zipCodeFieldData['Other'] = {
      ...zipCodeField,
      fields: {
        ...zipCodeField.fields,
        validations: null,
      },
    };
    zipCodeFieldData['USA'] =
      zipCodeFieldData['Canada'] =
      zipCodeFieldData['Mexico'] =
        { ...zipCodeField };
  }
  const CITY_LABEL = useMemo(() => props.fields.cityField?.fields?.label?.value, []);
  const STATE_LABEL = useMemo(() => props.fields.stateField?.fields?.label?.value, []);
  const ZIP_CODE_LABEL = useMemo(() => props.fields.zipCodeField?.fields?.label?.value, []);
  const ZIP_CODE_PLACEHOLDER = useMemo(
    () => props.fields.zipCodeField?.fields?.placeholderText?.value,
    []
  );

  // country change actions
  const countryChangeActions = (selectedCountryValue: string) => {
    if (countryNames && countryNames.includes(selectedCountryValue)) {
      setzipCodeFieldDatatoSet(zipCodeFieldData[selectedCountryValue]);
      setFieldValue('location', '');

      if (selectedCountryValue === 'Other') {
        setFieldValue(props.fields.stateField?.fields?.fieldName?.value, '');
      } else {
        const updatedValues = { ...values };
        delete updatedValues['location'];
        setValues(updatedValues);
      }

      updateLabels(props, values, CITY_LABEL, STATE_LABEL, ZIP_CODE_LABEL, ZIP_CODE_PLACEHOLDER);
    }
  };

  // set values on load
  useEffect(() => {
    if (
      props.fields.countryField &&
      initialCountryFieldValue &&
      datasource &&
      datasource[initialCountryFieldValue] &&
      props.fields.stateField.fields.datasource
    ) {
      props.fields.stateField.fields.datasource = datasource[initialCountryFieldValue];
      setstateFieldDatatoSet(stateFieldData[initialCountryFieldValue]);
      setzipCodeFieldDatatoSet(zipCodeFieldData[initialCountryFieldValue]);
    }

    setCountryDropdownOptions(dropdownOptions);
  }, []);

  // function on change of country dropdown
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryValue = event.target.value;
    setCountryDropdownOptions(dropdownOptions);
    values[props.fields.countryField?.fields?.fieldName?.value] = selectedCountryValue;
    if (selectedCountryValue !== 'Other' && stateFieldData[selectedCountryValue]) {
      setstateFieldDatatoSet(stateFieldData[selectedCountryValue]);
    }

    countryChangeActions(selectedCountryValue);
  };

  // set values after change in country with autocomplete
  useEffect(() => {
    updateLabels(props, values, CITY_LABEL, STATE_LABEL, ZIP_CODE_LABEL, ZIP_CODE_PLACEHOLDER);
    if (
      ['Canada', 'USA', 'Mexico'].includes(
        (values as FormikValues)[props.fields?.countryField?.fields?.fieldName?.value]
      )
    ) {
      setFieldValue('location', '');
      setShowLocationField(false);
    }
  }, [values[props.fields?.countryField?.fields?.fieldName?.value]]);

  // When “Other” is selected, the Location field should come across as the Country
  useEffect(() => {
    const handleLocationFieldBlur = (e: Event) => {
      const locationValue = (e.target as HTMLInputElement).value;
      if (locationValue) {
        setShowLocationField(true);
        const updatedOptions = dropdownOptions.map((option) => {
          if (option.label === 'Other') {
            return { label: 'Other', value: locationValue };
          }
          return option;
        });
        setCountryDropdownOptions(updatedOptions);
        setValues((prevValues) => {
          const updatedValues = {
            ...prevValues,
            [props.fields.countryField?.fields?.fieldName?.value]: locationValue,
          };

          const updatedValuesCopy: { [key: string]: string } = { ...updatedValues };
          delete updatedValuesCopy['location'];
          return updatedValuesCopy;
        });
      }
    };

    const locationField = document.querySelector(`input[name="location"]`) as HTMLInputElement;

    if (locationField) {
      locationField.addEventListener('blur', handleLocationFieldBlur);
    }

    return () => {
      const locationField = document.querySelector(`input[name="location"]`) as HTMLInputElement;

      if (locationField) {
        locationField.removeEventListener('blur', handleLocationFieldBlur);
      }
    };
  }, [values['location']]);

  let lastKeyPressed: string | null = null;

  // Ggoogle maps places Autocomplete
  const addressInputRef = useRef<google.maps.places.Autocomplete>();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_EW_GOOGLE_AW_API_KEY || '',
    libraries: googleLibrariesToLoad as unknown as Libraries,
  });
  const allowedCountries = ['us', 'ca']; //Restrict google autocomplete to show only US and Mexico
  useTheme().themeName === 'aw' && allowedCountries.push('mx'); //If app is andersen windows then allow google autocomplete to show mexico as well

  return (
    <>
      {isLoaded && props.fields?.address1Field && (
        <div className={classNames('relative mb-s', getWidthClass(props.fields?.address1Field))}>
          {/* address1 text input */}
          <Autocomplete
            onLoad={(ref) => (addressInputRef.current = ref)}
            onPlaceChanged={() =>
              handlePlaceChanged(
                props,
                addressInputRef,
                setFieldValue,
                allStateFields,
                stateFieldData,
                setstateFieldDatatoSet
              )
            }
            restrictions={{ country: allowedCountries }}
          >
            {fieldFactoryComponent(props.fields.address1Field)}
          </Autocomplete>
        </div>
      )}

      {props.fields?.address2Field && fieldFactoryComponent(props.fields.address2Field)}

      {props.fields?.countryField && countryDropdownOptions && (
        <FieldWrapper {...props.fields.countryField}>
          <div className="relative" ref={dropdownContainerRef}>
            <Field
              id={props.fields.countryField.id}
              name={props.fields.countryField?.fields?.fieldName?.value}
              as="select"
              value={values[props.fields.countryField?.fields?.fieldName?.value]}
              onKeyDown={(e: KeyboardEvent<HTMLSelectElement>) => {
                lastKeyPressed = e.key;
              }}
              onBlur={(e: FocusEvent<HTMLSelectElement>) => {
                handleBlur(e);
                lastKeyPressed = null;
              }}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                if (lastKeyPressed !== 'Tab') {
                  handleCountryChange(e);
                }
                handleChange(e);
              }}
              className={classNames(
                themeData.classes.input,
                isInvalid ? themeData.classes.errorOutline : '',
                values[props.fields.countryField?.fields?.fieldName?.value] ? 'border-black' : ''
              )}
            >
              {countryDropdownOptions.map((option: Record<string, string>, index: number) => (
                <option
                  key={`${option.value}-${index}`}
                  value={option.value}
                  disabled={themeName === 'aw' && option.value === ''}
                >
                  {option.label}
                </option>
              ))}
            </Field>
          </div>
        </FieldWrapper>
      )}

      {props.fields?.cityField && fieldFactoryComponent(props.fields.cityField)}

      {props.fields?.stateField &&
        (values as FormikValues)[props.fields?.countryField?.fields?.fieldName?.value] !==
          'Other' &&
        !showLocationField &&
        stateFieldDatatoSet &&
        fieldFactoryComponent(stateFieldDatatoSet)}
      {/* Location field for country option 'Others' */}
      {((values as FormikValues)[props.fields?.countryField?.fields?.fieldName?.value] ===
        'Other' ||
        showLocationField) &&
        fieldFactoryComponent(getLocationFieldProps(props.fields?.stateField))}

      {zipCodeFieldDatatoSet ? fieldFactoryComponent(zipCodeFieldDatatoSet) : ''}
    </>
  );
};

const Address: FormFieldExport = {
  reactComponent: AddressComponent,
  getValidationSchema: getAddressValidationSchema,
};

export default Address;
