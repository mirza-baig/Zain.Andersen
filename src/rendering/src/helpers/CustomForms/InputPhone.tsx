import classNames from 'classnames';
import { Field, FieldProps, FormikValues, getIn, useFormikContext } from 'formik';
import { BodyCopy } from '../BodyCopy';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from '../Forms/Fields/FormFields.Theme';
import ReactInputMask from 'react-input-mask';
import { CustomErrorMessage } from './CustomErrorMessage';

type InputPhoneProps = Partial<HTMLInputElement> & {
  label?: string;
  subLabel?: string;
};

export const InputPhone = (props: InputPhoneProps): JSX.Element => {
  const { id, name, label, subLabel } = props;
  const { themeData } = useTheme(FormFieldsTheme);
  const { errors, touched, values } = useFormikContext<FormikValues>();

  if (!name) {
    return <></>;
  }

  const isInvalid = getIn(errors, name) && getIn(touched, name);

  return (
    <div className={classNames('relative')}>
      {label && (
        <label
          className={classNames(
            themeData.classes.label,
            isInvalid ? themeData.classes.errorTextColor : ''
          )}
          htmlFor={id}
        >
          {label}
          {props.required ? ' *' : ''}
        </label>
      )}

      <Field name={name}>
        {({ field }: FieldProps) => (
          <ReactInputMask
            {...field}
            mask={'(999) 999-9999'}
            maskChar="_"
            placeholder={'(###) ###-####'}
            type="tel"
            className={classNames(
              themeData.classes.input,
              isInvalid ? themeData.classes.errorOutline : '',
              values[name as string] ? 'border-black' : ''
            )}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(event);
            }}
          />
        )}
      </Field>

      {subLabel && (
        <BodyCopy fields={{ body: { value: subLabel } }} classes={themeData.classes.subLabel} />
      )}
      <CustomErrorMessage fieldName={name} />
    </div>
  );
};
