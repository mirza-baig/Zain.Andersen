import classNames from 'classnames';
import { Field, FormikValues, getIn, useFormikContext } from 'formik';
import { BodyCopy } from '../BodyCopy';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from '../Forms/Fields/FormFields.Theme';
import { ChangeEvent, useState } from 'react';
import { CustomErrorMessage } from './CustomErrorMessage';
type RichTextProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  subLabel?: string;
  showRemainingCharacters?: boolean;
};

export const CustomTextArea = (props: RichTextProps): JSX.Element => {
  const { id, name, label, subLabel } = props;
  const { themeData } = useTheme(FormFieldsTheme);

  const { errors, touched, values, handleChange } = useFormikContext<FormikValues>();

  const [remainingChar, setRemainingChar] = useState(
    props.maxLength && props.maxLength - values[props.name as keyof typeof props]?.length
  );

  if (!name) {
    return <></>;
  }

  const isInvalid = getIn(errors, name) && getIn(touched, name);

  return (
    <div className={classNames('relative mb-s')}>
      {label && (
        <label
          className={classNames(
            themeData.classes.label,
            isInvalid ? themeData.classes.errorTextColor : ''
          )}
          htmlFor={id}
        >
          {label}
          <sup>{props.required ? ' *' : ''}</sup>
        </label>
      )}

      <Field
        as="textarea"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          if (props.showRemainingCharacters && props.maxLength) {
            setRemainingChar(props.maxLength - e.target.value.length);
          }
          handleChange(e);
        }}
        className={classNames(
          themeData.classes.textarea,
          isInvalid ? themeData.classes.errorOutline : '',
          (values as FormikValues)[name as string] ? 'border-black' : ''
        )}
        {...props}
      />
      {props.showRemainingCharacters && props.maxLength && (
        <div className={themeData.classes.textareaCharCount}>
          {remainingChar === props.maxLength
            ? `${remainingChar} characters allowed`
            : `${remainingChar} characters remaining`}
        </div>
      )}
      {subLabel && (
        <BodyCopy fields={{ body: { value: subLabel } }} classes={themeData.classes.subLabel} />
      )}
      <CustomErrorMessage fieldName={name} />
    </div>
  );
};
