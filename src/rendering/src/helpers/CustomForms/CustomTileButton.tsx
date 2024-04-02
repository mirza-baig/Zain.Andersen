import React from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from '../Forms/Fields/FormFields.Theme';

export type CustomTileButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isMultiSelectEnabled: boolean;
};

const CustomTileButton = ({
  isMultiSelectEnabled,
  value,
  title,
  name,
  onClick,
}: CustomTileButtonProps) => {
  const { themeData } = useTheme(FormFieldsTheme);

  return (
    <label>
      <Field
        className={classNames(
          'appearence-none h-0 w-0 border-0 outline-none ring-0 focus:ring-0 [&:focus:checked_+_.button-card-item]:before:ring-2 [&:focus_+_.button-card-item]:before:ring-2 [&:checked_+_.button-card-item]:!bg-light-gray',
          themeData.classes.tileButton.tileButtonCheckboxSelected
        )}
        type={isMultiSelectEnabled ? 'checkbox' : 'radio'}
        name={name}
        value={value}
        onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
          onClick && onClick(event);
        }}
      />
      <div
        className={classNames(
          themeData.classes.tileButton.tileButtonItem,
          themeData.classes.tileButton.tileButtonItemDesktop,
          themeData.classes.tileButton.tileButtonCheckboxItem
        )}
      >
        <div
          className={classNames(
            !isMultiSelectEnabled && themeData.classes.tileButton.tileButtonItemContent
          )}
        >
          <div className={classNames(themeData.classes.tileButton.title, '!text-button')}>
            {title}
          </div>
        </div>
      </div>
    </label>
  );
};

export default CustomTileButton;
