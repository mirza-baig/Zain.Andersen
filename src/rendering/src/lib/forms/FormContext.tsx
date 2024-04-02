import { FormProps } from 'components/forms/Form/Form';
import { Dispatch, SetStateAction, createContext } from 'react';

export type FieldState = {
  value?: string;
  validator?: () => boolean;
};

export type FormExtendedProps = FormProps & {
  sessionId?: string;
  googleRecaptchaData?:
    | {
        googleRecaptchaResponse?: Record<string, unknown>;
        googleRecaptchaActionId: string;
      }
    | undefined;
};

export type FormStateProps = {
  pageIndex: number;
  formProps: FormExtendedProps;
  initialValues: Record<string, string>;
  setInitialValues: Dispatch<SetStateAction<Record<string, string>>>;
  updatePageIndex: (navigationStep: number) => void;
  isErrorOnSubmit: false | string;
  setIsErrorOnSubmit: Dispatch<SetStateAction<false | string>>;
  getBotCheckerField: () => {
    fieldName: string | null;
    setFieldName: React.Dispatch<React.SetStateAction<string | null>>;
  };
  isFormInteracted?: boolean;
};

export const FormsContext = createContext<FormStateProps>({} as FormStateProps);
