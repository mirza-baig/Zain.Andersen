import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';

export class SubmitJobLeadGen extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(): Promise<ExecutionResult> {
    // If error occurs while constructing payload, reject the promise
    if (!this.formData) {
      return new Promise<ExecutionResult>((_, reject) => {
        reject({
          success: false,
          errorMessage: this.actionFieldsProps?.errorMessage?.value,
        });
      });
    }

    const requestLeadGen = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.formData),
    };

    const response = await fetch(`/api/rba/submit-actions/submit-job-lead-gen/`, requestLeadGen);

    if (response.status === 200) {
      super.setActionCookie(true);
    }

    return new Promise<ExecutionResult>((resolve) => {
      resolve({
        success: response.status === 200,
        errorMessage: this.actionFieldsProps?.errorMessage?.value,
      });
    });
  }
}
