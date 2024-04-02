import { FormikHelpers, FormikValues } from 'formik';
import { countries } from 'lib/constants/country-states-mapping';
import { MutableRefObject } from 'react';

export const handlePlaceChanged = (
  addressInputRef: MutableRefObject<google.maps.places.Autocomplete | undefined>,
  countryOptions: typeof countries,
  setCountryOptions: React.Dispatch<React.SetStateAction<Array<Record<string, unknown>>>>,
  stateOptions: Array<{ label: string; value: string }>,
  setStateOptions: React.Dispatch<React.SetStateAction<Array<Record<string, unknown>>>>,
  setFieldValue: FormikHelpers<FormikValues>['setFieldValue']
) => {
  if (addressInputRef.current) {
    const { address_components } =
      addressInputRef.current?.getPlace() as google.maps.places.PlaceResult;

    // Prepare full address to show on address1 field
    let fullStreetAddress = '';

    address_components?.forEach((component) => {
      if (component.types.includes('street_number') || component.types.includes('route')) {
        fullStreetAddress += (fullStreetAddress ? ' ' : '') + component.long_name;
      } else if (fullStreetAddress === '') {
        if (component.types.includes('locality')) {
          fullStreetAddress += (fullStreetAddress ? ', ' : '') + component.long_name;
        } else if (component.types.includes('sublocality')) {
          fullStreetAddress += (fullStreetAddress ? ', ' : '') + component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
          fullStreetAddress += (fullStreetAddress ? ', ' : '') + component.long_name;
        } else if (component.types.includes('country')) {
          fullStreetAddress += (fullStreetAddress ? ', ' : '') + component.long_name;
        }
      }
    });
    fullStreetAddress = fullStreetAddress.replace(/^, /, '');
    setFieldValue('address1', fullStreetAddress);
    //

    let newCountry, newState: { label: string; value: string } | undefined;

    address_components?.forEach((component) => {
      if (component.types.includes('locality')) {
        setFieldValue('city', component.long_name);
      } else if (component.types.includes('administrative_area_level_1')) {
        if (stateOptions.filter((item) => item.label === component.long_name).length === 0) {
          newState = { label: component.long_name, value: component.short_name };
        } else {
          setFieldValue('state', component.short_name);
        }
      } else if (component.types.includes('country')) {
        if (
          component.short_name !== 'US' &&
          countryOptions.filter((item) => item.label === component.long_name).length === 0
        ) {
          newCountry = { label: component.long_name, value: component.long_name };
          setCountryOptions([...countryOptions, newCountry]);
        }
        setFieldValue('country', component.long_name);
      } else if (component.types.includes('postal_code')) {
        setFieldValue('zip', component.long_name);
      }
    });

    // We have to set the states separately as the values of the states dropdown depends on the country.
    // If we directly set the states options in forEach itself new state won't be appended on the states dropdown
    // if the current country and previous country is different.
    if (newState) {
      setStateOptions((prevStates) => {
        return [...prevStates, newState as Record<string, string>];
      });
      setFieldValue('state', newState.value);
    }
  }
};
