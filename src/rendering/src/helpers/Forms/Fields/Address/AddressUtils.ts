import { FormikHelpers, FormikValues } from 'formik';
import { MutableRefObject } from 'react';
import { AddressProps } from './Address';
import { FormFieldProps } from 'lib/forms';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

const handlePlaceChanged = (
  props: AddressProps,
  addressInputRef: MutableRefObject<google.maps.places.Autocomplete | undefined>,
  setFieldValue: FormikHelpers<FormikValues>['setFieldValue'],
  allStateFields: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  stateFieldData: { [key: string]: any }, // eslint-disable-line @typescript-eslint/no-explicit-any
  setstateFieldDatatoSet: React.Dispatch<React.SetStateAction<Item>>
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
    setFieldValue(props.fields.address1Field.fields.fieldName.value, fullStreetAddress);

    let selectedState: string | undefined;
    let selectedStateFullName: string | undefined;
    let stateData: any; // eslint-disable-line @typescript-eslint/no-explicit-any

    let selectedCountry = address_components?.find((component) =>
      component.types.includes('country')
    )?.long_name;
    // If the selected country is 'United States', set it as 'USA'
    if (selectedCountry === 'United States') {
      selectedCountry = 'USA';
    }

    if (props.fields?.stateField) {
      selectedState = address_components?.find((component) =>
        component.types.includes('administrative_area_level_1')
      )?.short_name;
      selectedStateFullName = address_components?.find((component) =>
        component.types.includes('administrative_area_level_1')
      )?.long_name;

      if (selectedCountry && stateFieldData[selectedCountry]) {
        stateData = { ...stateFieldData[selectedCountry] };
      } else {
        stateData = { ...allStateFields };
      }

      const newStateObject = {
        id: new Date().getTime() + Math.random(),
        name: selectedState,
        displayName: selectedState,
        fields: {
          title: {
            value: selectedStateFullName,
          },
          value: {
            value: selectedStateFullName,
          },
        },
        templateName: 'List Item',
      };

      if (stateData && stateData.fields && stateData.fields.datasource && newStateObject) {
        const stateExists =
          stateData.fields.datasource.children?.some(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (stateObj: any) =>
              stateObj.fields?.value?.value === selectedState ||
              stateObj.fields?.value?.value === selectedStateFullName
          ) ?? false;

        if (!stateExists) {
          stateData.fields.datasource.children.push(newStateObject);
        }
        setstateFieldDatatoSet(stateData);
      }

      if (stateData && stateData.fields && !stateData.fields.datasource && newStateObject) {
        const stateExists =
          allStateFields.fields.datasource.children?.some(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (stateObj: any) =>
              stateObj.fields?.value?.value === selectedState ||
              stateObj.fields?.value?.value === selectedStateFullName
          ) ?? false;

        if (!stateExists) {
          allStateFields.fields.datasource.children.push(newStateObject);
        }
        setstateFieldDatatoSet(allStateFields);
      }
    }

    address_components?.forEach((component) => {
      if (component.types.includes('locality')) {
        setFieldValue(props.fields.cityField.fields.fieldName.value, component.long_name);
      } else if (component.types.includes('postal_code')) {
        setFieldValue(props.fields.zipCodeField.fields.fieldName.value, component.long_name);
      }
    });

    if (selectedCountry && props.fields.countryField) {
      setFieldValue(props.fields.countryField.fields.fieldName.value, selectedCountry);
    }

    if (selectedState && props.fields.stateField) {
      setFieldValue(props.fields.stateField.fields.fieldName.value, selectedStateFullName);
    }
  }
};
export default handlePlaceChanged;

// updateLabels
export const updateLabels = (
  props: AddressProps,
  values: FormikValues,
  cityLabel: string,
  stateLabel: string,
  zipCodeLabel: string,
  zipCodePlaceholder: string
) => {
  if (values[props.fields?.countryField?.fields?.fieldName?.value] === 'Canada') {
    if (props.fields.cityField?.fields?.label) {
      props.fields.cityField.fields.label.value = 'Municipality';
    }
    if (props.fields.stateField?.fields?.label) {
      props.fields.stateField.fields.label.value = 'Province';
    }
    if (props.fields.zipCodeField?.fields?.label) {
      props.fields.zipCodeField.fields.label.value = 'Postal Code';
    }
    if (props.fields.zipCodeField?.fields?.placeholderText) {
      props.fields.zipCodeField.fields.placeholderText.value = 'Postal Code';
    }
  } else {
    if (props.fields.cityField?.fields?.label) {
      props.fields.cityField.fields.label.value = cityLabel;
    }
    if (props.fields.stateField?.fields?.label) {
      props.fields.stateField.fields.label.value = stateLabel;
    }
    if (props.fields.zipCodeField?.fields?.label) {
      props.fields.zipCodeField.fields.label.value = zipCodeLabel;
    }
    if (props.fields.zipCodeField?.fields?.placeholderText) {
      props.fields.zipCodeField.fields.placeholderText.value = zipCodePlaceholder;
    }
  }
};

// Need to apply width of location field same as state field in the form
export const getLocationFieldProps = (stateFieldProps: FormFieldProps) => {
  return {
    id: 'eebbc720-8f7b-424c-a964-413c0bc658b5',
    displayName: 'Location',
    name: 'Location',
    templateId: '4fd88841-d725-4815-8b03-6ea12c956c18',
    templateName: 'Short Text',
    url: '/data/forms/certified-contractor/page/location',
    fields: {
      minLength: {
        value: null,
      },
      maxLength: {
        value: 25,
      },
      defaultValue: {
        value: '',
      },
      valueProviders: [],
      label: {
        value: 'Location',
      },
      validations: [
        {
          id: '12dce567-1e99-44a0-a419-62b7a095b03a',
          url: '/data/forms/validations/max',
          name: 'Max',
          displayName: 'Max',
          fields: {
            errorMessage: {
              value: 'Maximum character {maxLength}.',
            },
            validationRule: {
              value: '',
            },
            validationType: {
              id: '4e8d6c38-ce89-4ab4-baa0-9a486841a96c',
              url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/max',
              name: 'Max',
              displayName: 'Max',
              fields: {
                Value: {
                  value: 'max',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            },
          },
          templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
          templateName: 'Field Validation',
        },
        {
          id: 'ceacb359-8a59-47a9-b0ba-f2da562f5a5a',
          url: '/data/forms/validations/required',
          name: 'Required',
          displayName: 'Required',
          fields: {
            errorMessage: {
              value: '',
            },
            validationRule: {
              value: '',
            },
            validationType: {
              id: 'd16071b0-1df1-4f24-ab33-e2b22203e0b0',
              url: '/sitecore/content/andersencorporation/enterprise-global/enums/forms/validation-type/required',
              name: 'Required',
              displayName: 'Required',
              fields: {
                Value: {
                  value: '',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            },
          },
          templateId: '368f5461-9a97-49cb-a2d3-6b4e271340ff',
          templateName: 'Field Validation',
        },
      ],
      tooltipImage: {
        value: {},
      },
      tooltipText: {
        value: '',
      },
      subLabel: {
        value: '',
      },
      placeholderText: {
        value: 'Location',
      },
      width: stateFieldProps?.fields?.width,
      fieldName: {
        value: 'location',
      },
      children: [],
    },
  };
};
