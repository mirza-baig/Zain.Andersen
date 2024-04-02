import { Autocomplete, Libraries, useJsApiLoader } from '@react-google-maps/api';
import { FormikValues, useFormikContext } from 'formik';
import { countries } from 'lib/constants/country-states-mapping';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { InputText } from '../InputText';
import Dropdown from '../Dropdown';
import { handlePlaceChanged } from './AutoComplete.helper';
import { useTheme } from 'lib/context/ThemeContext';

type CommonFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  sublabel?: string;
  classes?: string;
  required?: boolean;
};
interface AddressGroupProps {
  address1: CommonFieldProps;
  address2?: CommonFieldProps;
  country: CommonFieldProps;
  state: CommonFieldProps;
  city: CommonFieldProps;
  location: CommonFieldProps;
  zipCode: CommonFieldProps;
}

// We need to keep this outside of the functional component in order to avoid "False performance warning about libraries"
// Please refer https://github.com/JustFly1984/react-google-maps-api/issues/238 for more info
const googleLibrariesToLoad = ['places'];

const AddressGroup = ({
  address1,
  address2,
  country,
  state,
  city,
  location,
  zipCode,
}: AddressGroupProps) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext<FormikValues>();

  const [countryOptions, setCountryOptions] = useState(countries);

  const [stateOptions, setStateOptions] = useState(
    countries.filter((item) => item.value === (values as FormikValues)[country.name])[0]?.states
  );
  const addressInputRef = useRef<google.maps.places.Autocomplete>();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_EW_GOOGLE_AW_API_KEY || '',
    libraries: googleLibrariesToLoad as unknown as Libraries,
  });

  const countryName = (values as FormikValues)[country.name];

  useEffect(() => {
    if (countryName !== 'Other') {
      setFieldValue(location.name, '');
      setFieldTouched(location.name, false);
    }

    setStateOptions((prevStateOptions) => {
      // In auto complete United States' value is coming as "United States", While in our country mappings its value is "US".
      // Below if statement handles the selection of the country dropdown even if the value is "United States"
      if (countryName === 'United States') {
        return countries[0].states;
      } else {
        return (
          countries.filter((item) => item.value === countryName)[0]?.states || prevStateOptions
        );
      }
    });
  }, [countryName, setFieldTouched, setFieldValue, location.name]);

  const allowedCountries = ['us', 'ca']; //Restrict google autocomplete to show only US and Mexico
  useTheme().themeName === 'aw' && allowedCountries.push('mx'); //If app is andersen windows then allow google autocomplete to show mexico as well

  return (
    <>
      {isLoaded && (
        <div className={classNames('col-span-12', address1.classes)}>
          {/* address1 text input */}
          <Autocomplete
            onLoad={(ref) => (addressInputRef.current = ref)}
            onPlaceChanged={() =>
              handlePlaceChanged(
                addressInputRef,
                countryOptions,
                setCountryOptions,
                stateOptions,
                setStateOptions,
                setFieldValue
              )
            }
            restrictions={{ country: allowedCountries }}
          >
            <InputText
              {...address1}
              id={address1.id}
              name={address1.name}
              type="text"
              label={address1.label}
              placeholder={address1.placeholder}
              maxLength={50}
            />
          </Autocomplete>
        </div>
      )}
      {/* address2 text input */}
      {address2 && (
        <div className={classNames('col-span-12', address2.classes)}>
          <InputText
            {...address2}
            id={address2.id}
            name={address2.name}
            type="text"
            label={address2.label}
            placeholder={address2.placeholder}
            maxLength={50}
          />
        </div>
      )}
      {/* Country Dropdown */}
      <div className={classNames('col-span-12', country.classes)}>
        <Dropdown
          {...country}
          id={country.id}
          name={country.name}
          label={country.label}
          placeholder={country.placeholder}
          options={countryOptions}
        />
      </div>
      {/* City Input */}
      <div className={classNames('col-span-12', city.classes)}>
        <InputText
          {...city}
          id={city.id}
          name={city.name}
          type="text"
          label={city.label}
          placeholder={city.placeholder}
          maxLength={50}
        />
      </div>
      {/* States Dropdown */}
      {(values as FormikValues)[country.name] !== 'Other' && (
        <div className={classNames('col-span-12', state.classes)}>
          <Dropdown
            {...state}
            id={state.id}
            name={state.name}
            label={state.label}
            placeholder={state.placeholder}
            options={stateOptions}
          >
            <option value="" disabled selected>
              Select One
            </option>
          </Dropdown>
        </div>
      )}
      {/* Location field for country option 'Others' */}
      {(values as FormikValues)[country.name] === 'Other' && (
        <div className={classNames('col-span-12', location.classes)}>
          <InputText
            {...location}
            type="text"
            id={location.id}
            name={location.name}
            label={location.label}
            placeholder={location.placeholder}
          />
        </div>
      )}
      {/* Zip Code */}
      <div className={classNames('col-span-12', zipCode.classes)}>
        <InputText
          {...zipCode}
          type="text"
          required={(values as FormikValues)[country.name] !== 'Other'}
          aria-required={(values as FormikValues)[country.name] !== 'Other'}
          id={zipCode.id}
          name={zipCode.name}
          label={zipCode.label}
          placeholder={zipCode.placeholder}
        />
      </div>
    </>
  );
};
export default AddressGroup;
