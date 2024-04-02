import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import { Field } from 'formik';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { useTheme } from 'lib/context/ThemeContext';
import classNames from 'classnames';
import { ImagePrimary } from 'src/helpers/Media';
import { FormFieldsTheme } from '../../FormFields.Theme';

export type ButtonCardItemProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.ButtonCardItem & {
  isMultiSelectEnabled: boolean;
  groupName: string;
};

const ButtonCardItem = ({ fields, isMultiSelectEnabled, groupName }: ButtonCardItemProps) => {
  const { themeData } = useTheme(FormFieldsTheme);
  if (!fields) {
    return <></>;
  }

  const imageProps = {
    fields: {
      primaryImageCaption: {
        value: '',
      },
      primaryImage: fields.desktopImage,
      primaryImageMobile: fields.mobileImage,
    },
  };

  return (
    <label>
      <Field
        className={classNames(
          'appearence-none h-0 w-0 border-0 outline-none ring-0 focus:ring-0 [&:focus:checked_+_.button-card-item]:before:ring-2 [&:focus_+_.button-card-item]:before:ring-2',
          themeData.classes.buttonCard.buttonCardItemSelected
        )}
        type={isMultiSelectEnabled ? 'checkbox' : 'radio'}
        name={groupName}
        value={fields.value?.value}
      />

      <div
        className={classNames(
          themeData.classes.buttonCard.buttonCardItem,
          themeData.classes.buttonCard.buttonCardItemDesktop
        )}
      >
        {imageProps.fields.primaryImage.value?.src && (
          <div className={classNames(themeData.classes.buttonCard.image)}>
            <ImagePrimary
              imageLayout="fill"
              additionalMobileClasses="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]"
              additionalDesktopClasses="min-w-[118px] min-h-[118px] max-w-[118px] max-h-[118px]"
              {...imageProps}
            />
          </div>
        )}
        <div>
          {fields?.title && (
            <div className={classNames(themeData.classes.buttonCard.title)}>
              <Text field={{ value: fields?.title.value }} />
            </div>
          )}
          {fields?.description && (
            <div className={classNames(themeData.classes.buttonCard.description)}>
              <RichTextWrapper field={{ value: fields?.description.value }} />
            </div>
          )}
        </div>
      </div>
    </label>
  );
};

export default ButtonCardItem;
