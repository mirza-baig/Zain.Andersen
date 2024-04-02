import classNames from 'classnames';
import { Field, FormikValues, getIn, useFormikContext } from 'formik';
import { BodyCopy } from '../BodyCopy';
import { useTheme } from 'lib/context/ThemeContext';
import { FormFieldsTheme } from '../Forms/Fields/FormFields.Theme';
import { CustomErrorMessage } from './CustomErrorMessage';

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  subLabel?: string;
  dependency?: {
    dependentField: string;
    Value: string;
    resetValue: string;
  };
};
export const InputText = (props: InputTextProps): JSX.Element => {
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
      <Field
        {...props}
        className={classNames(
          themeData.classes.input,
          isInvalid ? themeData.classes.errorOutline : '',
          (values as FormikValues)[name as string] ? 'border-black' : ''
        )}
      />
      {subLabel && (
        <BodyCopy fields={{ body: { value: subLabel } }} classes={themeData.classes.subLabel} />
      )}
      <CustomErrorMessage fieldName={name} />
    </div>
  );
};
