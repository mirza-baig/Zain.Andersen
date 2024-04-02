import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React, { useContext } from 'react';
import { Field } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import classNames from 'classnames';
import { FormFieldsTheme } from '../../FormFields.Theme';
import { FormsContext } from 'lib/forms/FormContext';

export type TileButtonItemProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.ListItem & {
  isMultiSelectEnabled: boolean;
  groupName: string;
  moveForwardOnClick: boolean;
};

const TileButtonItem = ({
  fields,
  isMultiSelectEnabled,
  groupName,
  moveForwardOnClick,
}: TileButtonItemProps) => {
  const { themeData } = useTheme(FormFieldsTheme);
  const { pageIndex, updatePageIndex } = useContext(FormsContext);

  const handleButtonClick = () => {
    if (!isMultiSelectEnabled && moveForwardOnClick) {
      setTimeout(() => {
        const nextPageIndex = pageIndex + 1;
        updatePageIndex(nextPageIndex);
      }, 800);
    }
  };

  if (!fields) {
    return <></>;
  }

  return (
    <label>
      <Field
        className={classNames(
          'appearence-none h-0 w-0 border-0 outline-none ring-0 focus:ring-0 [&:focus:checked_+_.button-card-item]:before:ring-2 [&:focus_+_.button-card-item]:before:ring-2',
          isMultiSelectEnabled
            ? themeData.classes.tileButton.tileButtonCheckboxSelected
            : themeData.classes.tileButton.tileButtonRadioSelected
        )}
        type={isMultiSelectEnabled ? 'checkbox' : 'radio'}
        name={groupName}
        value={fields.value.value}
        onClick={handleButtonClick}
      />
      <div
        className={classNames(
          themeData.classes.tileButton.tileButtonItem,
          themeData.classes.tileButton.tileButtonItemDesktop,
          isMultiSelectEnabled
            ? themeData.classes.tileButton.tileButtonCheckboxItem
            : themeData.classes.tileButton.tileButtonRadioItem
        )}
      >
        <div
          className={classNames(
            !isMultiSelectEnabled && themeData.classes.tileButton.tileButtonItemContent
          )}
        >
          {!isMultiSelectEnabled && (
            <span className={classNames(themeData.classes.tileButton.tileButtonItemRadio)}></span>
          )}
          <div className={classNames(themeData.classes.tileButton.title)}>
            {fields?.title.value}
          </div>
        </div>
      </div>
    </label>
  );
};

export default TileButtonItem;
