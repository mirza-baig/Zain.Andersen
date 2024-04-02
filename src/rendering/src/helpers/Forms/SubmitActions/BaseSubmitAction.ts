import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
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

export type BaseSubmitProps = {
  // we can ignore any error warning for FormDataValue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  formProps?: FormExtendedProps | undefined;
  actionFieldsProps?: Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseSubmitAction['fields'];
  submitButtonProps?: ButtonProps;
  context?: any;
};

export interface IBaseSubmitAction extends BaseSubmitProps {
  executeAction(isCustomForm?: boolean): Promise<ExecutionResult> | undefined;
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
}
