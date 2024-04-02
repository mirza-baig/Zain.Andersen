import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormFieldExport } from 'lib/forms';
import { FormFieldsTheme } from './FormFields.Theme';
import { useTheme } from 'lib/context/ThemeContext';
import { BodyCopy } from 'src/helpers/BodyCopy';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';

export type DescriptionProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.Description &
  FormFieldProps;

export type alignmentStatus = 'left' | 'center' | 'right';

const DescriptionComponent = (props: DescriptionProps) => {
  const { themeData } = useTheme(FormFieldsTheme);

  if (!props.fields) {
    return <></>;
  }

  const descriptionAlignment: Record<alignmentStatus, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className="relative col-span-12">
      <BodyCopy
        classes={classNames(
          descriptionAlignment[getEnum<alignmentStatus>(props?.fields?.alignment) || 'left'],
          themeData.classes.description
        )}
        fields={{ body: props.fields?.body }}
      />
    </div>
  );
};

const Description: FormFieldExport = {
  reactComponent: DescriptionComponent,
};

export default Description;
