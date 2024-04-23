import { setCookie } from 'cookies-next';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { FormExtendedProps } from 'lib/forms/FormContext';
import { ButtonProps } from 'src/helpers/Forms/Fields/NavigationButton/Button';

// Will be updating this file until submit foundation is stable
export type ExecutionResult = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result?: any;
  success: boolean;
  errorMessage: string | undefined;
  verificationResult?: Record<string, unknown> | undefined;
  nextPageIndex?: number | undefined;
};

type ActionFieldProps =
  Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseSubmitAction['fields'];

type ActionFieldWithCookieProps = {
  cookie: Feature.EnterpriseWeb.Enterprise.Data.Cookies.Cookie;
} & ActionFieldProps;

export type BaseSubmitProps = {
  // we can ignore any error warning for FormDataValue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  formProps?: FormExtendedProps | undefined;
  actionFieldsProps?: ActionFieldProps;
  submitButtonProps?: ButtonProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context?: any;
};

export interface IBaseSubmitAction extends BaseSubmitProps {
  executeAction(isCustomForm?: boolean): Promise<ExecutionResult> | undefined;
  setActionCookie(cookieValue: unknown): void;
}

export class BaseSubmitAction implements IBaseSubmitAction {
  formData;
  formProps?;
  actionFieldsProps?;
  submitButtonProps?;
  context;

  constructor(props: BaseSubmitProps) {
    this.formData = props.formData;
    this.formProps = props.formProps;
    this.actionFieldsProps = props.actionFieldsProps;
    this.submitButtonProps = props.submitButtonProps;
    this.context = props.context;
  }

  executeAction(): Promise<ExecutionResult> {
    throw new Error('Method not implemented.');
  }

  setActionCookie(cookieValue: unknown) {
    try {
      const cookieName = (this.actionFieldsProps as ActionFieldWithCookieProps)?.cookie?.fields
        ?.cookieName?.value;

      cookieName && setCookie(cookieName, cookieValue);
    } catch {
      console.error('Something went wrong while saving cookie for submit action.');
    }
  }
}
