import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import FieldWrapper, { FieldWrapperProps } from '../../../Structure/FieldWrapper/FieldWrapper';
import { FormFieldExport, FormFieldProps } from 'lib/forms';
import ButtonCardItem from '../ButtonCard/ButtonCardItem';
import {
  SelectionTypes,
  getButtonGroupInitialValue,
  getButtonGroupValidationSchema,
} from '../ButtonGroup.helpers';
import TileButtonItem from './TileButtonItem';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from '../../../Fields/FormFields.Theme';

type ButtonCardItem = Feature.EnterpriseWeb.Enterprise.Forms.Elements.ListItem;
type Alignment = 'left' | 'center' | 'right' | '';

export type TileButtonProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.TileButton & {
  fields: {
    datasource: {
      children: Array<ButtonCardItem>;
    };
  };
  moveForwardOnClick: boolean;
} & FormFieldProps & { tileButtonWrapper?: string };

const TileButtonComponent = (props: TileButtonProps) => {
  const { fields } = props;
  const alignment = getEnum<Alignment>(props.fields?.alignment) || 'left';
  const isMultiSelectEnabled = getEnum<SelectionTypes>(fields?.selection) === 'multiple';
  const { themeData } = useTheme(FormFieldsTheme);
  const moveForwardOnClick = fields?.moveForwardOnClick?.value || false;

  let alignmentClasses = '';

  if (alignment === 'center') {
    alignmentClasses = 'text-center justify-center';
  }
  if (alignment === 'left') {
    alignmentClasses = 'text-left justify-left';
  }
  if (alignment === 'right') {
    alignmentClasses = 'text-right justify-end';
  }

  if (!fields) {
    return <></>;
  }

  const ColumnSpan: Record<number, string> = {
    1: 'md:col-span-12',
    2: 'md:col-span-6',
    3: 'md:col-span-4',
    4: 'md:col-span-3',
  };

  return (
    <div className={classNames(themeData.classes.tileButton.tileButtonContainer, alignmentClasses)}>
      <FieldWrapper {...(props as FieldWrapperProps)} isArrayField={isMultiSelectEnabled}>
        <div className={classNames(themeData.classes.tileButton.tileButtonLayout)}>
          {fields.datasource?.children.map((buttonCardItem: ButtonCardItem, index: number) => {
            return (
              <div
                className={classNames(
                  ColumnSpan[getEnum<number>(fields.buttonsPerRows) || 2],
                  isMultiSelectEnabled ? 'col-span-1' : 'col-span-2'
                )}
                key={index}
              >
                <TileButtonItem
                  key={index}
                  {...buttonCardItem}
                  isMultiSelectEnabled={isMultiSelectEnabled}
                  groupName={props?.fields?.fieldName?.value}
                  moveForwardOnClick={moveForwardOnClick}
                />
              </div>
            );
          })}
        </div>
      </FieldWrapper>
    </div>
  );
};

const TileButton: FormFieldExport = {
  reactComponent: TileButtonComponent,
  getInitialValue: getButtonGroupInitialValue,
  getValidationSchema: getButtonGroupValidationSchema,
};

export default TileButton;
