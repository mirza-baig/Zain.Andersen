import React from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormFieldExport } from 'lib/forms';
import { FormFieldsTheme } from './FormFields.Theme';
import { useTheme } from 'lib/context/ThemeContext';
import { getEnum, getHeadingLevel } from 'lib/utils';
import { Eyebrow } from 'src/helpers/Eyebrow';
import classNames from 'classnames';

export type EyebrowProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.Eyebrow & FormFieldProps;

export type alignmentStatus = 'left' | 'center' | 'right';

const EyebrowComponent = (props: EyebrowProps) => {
  const { themeData } = useTheme(FormFieldsTheme);
  const defaultTag = 'h3';
  const tag = getHeadingLevel(defaultTag, props?.fields?.eyebrowLevel);

  if (!props.fields) {
    return <></>;
  }

  const eyebrowAlignment: Record<alignmentStatus, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className="relative col-span-12">
      <Eyebrow
        classes={classNames(
          eyebrowAlignment[getEnum<alignmentStatus>(props?.fields?.alignment) || 'left'],
          themeData.classes.eyebrow
        )}
        useTag={tag}
        {...props}
      />
    </div>
  );
};

const EyebrowField: FormFieldExport = {
  reactComponent: EyebrowComponent,
};

export default EyebrowField;
