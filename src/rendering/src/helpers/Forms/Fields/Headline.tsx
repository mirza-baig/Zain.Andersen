import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import React from 'react';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { Headline as Heading } from 'src/helpers/Headline';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from './FormFields.Theme';
import { FormFieldExport } from 'lib/forms';
import { getEnum } from 'lib/utils';
import classNames from 'classnames';

export type HeadlineProps = Feature.EnterpriseWeb.Enterprise.Forms.Elements.Headline & {
  alignmentClasses?: string;
} & FormFieldProps;

export type Alignment = 'left' | 'center' | 'right';

const HeadlineComponent = (props: HeadlineProps): JSX.Element => {
  const textAlignment: Record<Alignment, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const { themeData } = useTheme(FormFieldsTheme);

  if (!props.fields) {
    return <></>;
  }

  const _alignment = getEnum<Alignment>(props?.fields?.alignment);

  return (
    <div
      className={classNames(
        (!props?.fields?.removeHorizontalLine?.value
          ? themeData.classes.headingRuleLine
          : '!mb-0') ?? '',
        'relative col-span-12 mb-s',
        { 'mx-auto w-fit': _alignment === 'center' }
      )}
    >
      <Heading
        classes={classNames(textAlignment[_alignment || 'left'], themeData.classes.headline)}
        {...props}
      />
    </div>
  );
};

const Headline: FormFieldExport = {
  reactComponent: HeadlineComponent,
};

export default Headline;
