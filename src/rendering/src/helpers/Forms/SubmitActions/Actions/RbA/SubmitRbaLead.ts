// we can ignore the any type warning for formData or payload value
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';
import { fetchInternalAPIWithQueryString } from 'lib/utils/api-request-utils';
import { getFieldData } from 'lib/forms/FormFieldUtils';

export class SubmitRbaLead extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(): Promise<ExecutionResult> {
    const payload: string = JSON.stringify(getFieldData(this.formProps, this.formData));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    const response = await fetchInternalAPIWithQueryString(
      `/api/rba/submit-actions/submit-rba-lead/`,
      requestOptions
    );

    return new Promise<ExecutionResult>((resolve) => {
      resolve({
        success: response.status === 200,
        errorMessage: this.actionFieldsProps?.errorMessage?.value,
      });
    });
  }
}
