import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';
import { fetchInternalAPIWithQueryString } from 'lib/utils/api-request-utils';
import { getFieldData } from 'lib/forms/FormFieldUtils';
import { OnlineSchedulingDispatchAction } from 'lib/forms/OnlineScheduling/OnlineSchedulingTypes';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { OnlineSchedulingConstants } from 'lib/constants/online-scheduling';

type SubmitOSPrimaryFields =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.SubmitActions.SubmitOnlineSchedulingPrimary['fields'];
export class SubmitOnlineSchedulingPrimary extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(): Promise<ExecutionResult> {
    const formDataCopy = { ...this.formData };
    formDataCopy['formType'] = '2'; // hardcode to Consultation Request for now
    const payload: string = JSON.stringify(getFieldData(this.formProps, formDataCopy));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    return fetchInternalAPIWithQueryString(
      `/api/rba/submit-actions/submit-online-scheduling-primary`,
      requestOptions
    )
      .then((response) => response.json())
      .then((crmResponse) => {
        const dispatchAction: OnlineSchedulingDispatchAction = {
          result: crmResponse,
          type: OnlineSchedulingConstants.primarySubmission,
        };
        console.log(JSON.stringify(crmResponse)); // log response to console for testing and debugging purposes - TO BE CLEANED UP ONCE UNNECESSARY

        const submitActionFields = this.actionFieldsProps as SubmitOSPrimaryFields;

        let nextPageId: string | undefined = '';
        if (!crmResponse?.data?.isOnlineSchedulingEligible) {
          nextPageId = submitActionFields?.notOnlineSchedulingEligiblePage?.id; //Appointment Already Set - specific messaging
        }

        const nextPageIndex = this.formProps?.fields?.children.findIndex((page) => {
          return page.id === nextPageId;
        });

        return new Promise<ExecutionResult>((resolve) => {
          resolve({
            result: dispatchAction,
            success: crmResponse?.status === 200,
            errorMessage: this.actionFieldsProps?.errorMessage?.value,
            nextPageIndex: nextPageIndex,
          });
        });
      })
      .catch((error) => {
        console.error(`${error.message}`);
        return new Promise<ExecutionResult>((resolve) => {
          resolve({
            success: false,
            errorMessage: this.actionFieldsProps?.errorMessage?.value,
          });
        });
      });
  }
}
