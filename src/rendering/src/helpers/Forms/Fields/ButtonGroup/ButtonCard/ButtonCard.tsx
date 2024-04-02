import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import { getEnum } from 'lib/utils';
import ButtonCardItem from './ButtonCardItem';
import FieldWrapper, { FieldWrapperProps } from '../../../Structure/FieldWrapper/FieldWrapper';
import { FormFieldExport, FormFieldProps } from 'lib/forms';
import {
  SelectionTypes,
  getButtonGroupInitialValue,
  getButtonGroupValidationSchema,
} from '../ButtonGroup.helpers';

type ButtonCardItem = Feature.EnterpriseWeb.Enterprise.Forms.Elements.ButtonCardItem;

export type ButtonCardProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.ButtonCard & {
  fields: {
    datasource: {
      children: Array<ButtonCardItem>;
    };
  };
} & FormFieldProps;

const ButtonCardComponent = (props: ButtonCardProps) => {
  const { fields } = props;

  const isMultiSelectEnabled = getEnum<SelectionTypes>(fields?.selection) === 'multiple';

  if (!fields) {
    return <></>;
  }

  return (
    <FieldWrapper {...(props as FieldWrapperProps)} isArrayField={isMultiSelectEnabled}>
      <div className="grid grid-cols-2 gap-s md:grid-cols-12">
        {fields.datasource?.children.map((buttonCardItem: ButtonCardItem, index: number) => {
          return (
            <div className="col-span-2 md:col-span-4" key={index}>
              <ButtonCardItem
                key={index}
                {...buttonCardItem}
                isMultiSelectEnabled={isMultiSelectEnabled}
                groupName={props?.fields?.fieldName?.value}
              />
            </div>
          );
        })}
      </div>
    </FieldWrapper>
  );
};

const ButtonCard: FormFieldExport = {
  reactComponent: ButtonCardComponent,
  getInitialValue: getButtonGroupInitialValue,
  getValidationSchema: getButtonGroupValidationSchema,
};

export default ButtonCard;
