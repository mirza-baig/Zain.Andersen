import React, { useContext, useState } from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { fieldFactoryComponent } from 'temp/formFactory';
import classNames from 'classnames';
import { FormsContext } from 'lib/forms/FormContext';
import { BodyCopy } from 'src/helpers/BodyCopy';

interface ChildField extends FormFieldProps {
  templateName: string;
  displayName: string;
}

export type CustomFormProps = Feature.EnterpriseWeb.Enterprise.Forms.Structure.Page &
  FormFieldProps & {
    classes: string;
  };

const CustomForm = (props: PageProps) => {
  const { isErrorOnSubmit } = useContext(FormsContext);
  const { formProps } = useContext(FormsContext);
  const paddingGap =
    formProps.fields?.inputPadding?.fields?.Value?.value === 'reduced'
      ? 'gap-x-s gap-y-xxs'
      : 'gap-y-m gap-x-s';

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedSecondValue, setSelectedSecondValue] = useState('');

  if (!props.fields) {
    return <></>;
  }

  // Filter out Next and Previous buttons
  const regularChildren: ChildField[] = props.fields.children.filter(
    (child: ChildField) =>
      child.templateName !== 'Button' ||
      (child.displayName !== 'Next' &&
        child.displayName !== 'Previous' &&
        child.displayName !== 'Submit')
  );

  console.log('regularChildren', regularChildren);

  const nextButton: ChildField | undefined = props.fields.children.find(
    (child: ChildField) => child.displayName === 'Next' && child.templateName === 'Button'
  );

  const prevButton: ChildField | undefined = props.fields.children.find(
    (child: ChildField) => child.displayName === 'Previous' && child.templateName === 'Button'
  );

  const submitButton: ChildField | undefined = props.fields.children.find(
    (child: ChildField) => child.displayName === 'Submit' && child.templateName === 'Button'
  );

  const filteredChildren: ChildField[] = regularChildren.filter(
    (child: ChildField) => child.templateName !== 'Dropdown'
  );
  console.log('filteredChildren', filteredChildren);

  const dropDownChildren: ChildField[] = regularChildren.filter(
    (child: ChildField) => child.templateName === 'Dropdown'
  );
  console.log('dropDownChildren', dropDownChildren);

  const renderDropdowns = dropDownChildren.map((dropdown, index) => {
    let options;
    if (selectedValue === 'Homeowner') {
      options = ['New Construction', 'Remodeling', 'Window or door replacement only', 'Service'];
    } else if (selectedValue === 'Trade Professional') {
      options = [
        'Architect or Designer',
        'Builder',
        'Commercial Contractor',
        'Remodeler',
        'Window/Door Replacer',
        'Other',
      ];
    }

    return (
      <div key={index} className="relative col-span-12">
        <label>{dropdown.fields.label.value}</label>
        <select
          className="flex h-12 w-full rounded-none border border-gray py-xs pr-xs pl-xxs text-sm-xs font-regular outline-none placeholder:text-dark-gray focus:border-2 focus:border-black focus:ring-0 sm:mt-2"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">Select</option>
          {dropdown.fields.datasource.children.map((option: any) => (
            <option key={option.id} value={option.fields.value.value}>
              {option.fields.title.value}
            </option>
          ))}
        </select>
        {selectedValue === 'Homeowner' && (
          <select
            className="mt-2 flex h-12 w-full rounded-none border border-gray py-xs pr-xs pl-xxs text-sm-xs font-regular outline-none placeholder:text-dark-gray focus:border-2 focus:border-black focus:ring-0 sm:mt-2"
            value={selectedSecondValue}
            onChange={(e) => setSelectedSecondValue(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

{selectedValue === 'Trade Professional' && (
          <select
            className="mt-2 flex h-12 w-full rounded-none border border-gray py-xs pr-xs pl-xxs text-sm-xs font-regular outline-none placeholder:text-dark-gray focus:border-2 focus:border-black focus:ring-0 sm:mt-2"
            value={selectedSecondValue}
            onChange={(e) => setSelectedSecondValue(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  });

  return (
    <div className={classNames(props.classes, 'grid grid-cols-12 ', paddingGap)}>
      {filteredChildren.slice(0, 2).map((child: FormFieldProps, childIndex: number) => (
        <React.Fragment key={childIndex}>{fieldFactoryComponent(child)}</React.Fragment>
      ))}

      {renderDropdowns}

      {filteredChildren.slice(2).map((child: FormFieldProps, childIndex: number) => (
        <React.Fragment key={childIndex}>{fieldFactoryComponent(child)}</React.Fragment>
      ))}

      {isErrorOnSubmit && (
        <BodyCopy
          fields={{ body: { value: isErrorOnSubmit } }}
          classes="relative mb-s col-span-12 text-[#F14343] text-small"
        />
      )}
      <div
        className={classNames(
          'col-span-12 mt-s flex gap-m md:col-span-10 md:col-start-1',
          paddingGap
        )}
      >
        {prevButton && <React.Fragment>{fieldFactoryComponent(prevButton)}</React.Fragment>}
        {nextButton && <React.Fragment>{fieldFactoryComponent(nextButton)}</React.Fragment>}
        {submitButton && <React.Fragment>{fieldFactoryComponent(submitButton)}</React.Fragment>}
      </div>
    </div>
  );
};

export default CustomForm;
