import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';
import { fetchInternalAPIWithQueryString } from 'lib/utils/api-request-utils';
import { getFieldData } from 'lib/forms/FormFieldUtils';
import { OnlineSchedulingDispatchAction } from 'lib/forms/OnlineScheduling/OnlineSchedulingTypes';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { OnlineSchedulingConstants } from 'lib/constants/online-scheduling';
import { sendMessageToParentPage } from 'lib/forms/OnlineScheduling/OnlineSchedulingUtils';
import { FormsConstants } from 'lib/constants/forms-constants';

type SubmitOSPrimaryFields =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.SubmitActions.SubmitOnlineSchedulingPrimary['fields'];
export class SubmitOnlineSchedulingPrimary extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(): Promise<ExecutionResult> {
    const formDataCopy = { ...this.formData };
    const submitActionFields = this.actionFieldsProps as SubmitOSPrimaryFields;
    const formType =
      submitActionFields?.formType as unknown as Feature.EnterpriseWeb.RenewalByAndersen.Forms.FormType;
    formDataCopy[FormsConstants.RBA.FieldNames.FormType] =
      formType?.fields?.value?.value || FormsConstants.RBA.FormTypes.ConsultationRequest;
    formDataCopy[FormsConstants.RBA.FieldNames.Sender] = submitActionFields?.sender?.value;
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
          result: {
            submissionResponse: crmResponse,
            submissionData: formDataCopy,
          },
          type: OnlineSchedulingConstants.primarySubmission,
        };
        console.log(JSON.stringify(crmResponse)); // log response to console for testing and debugging purposes - TO BE CLEANED UP ONCE UNNECESSARY

        let nextPageId: string | undefined = '';
        if (!crmResponse?.data?.isOnlineSchedulingEligible) {
          nextPageId = submitActionFields?.notOnlineSchedulingEligiblePage?.id; //Appointment Already Set - specific messaging
        }

        const nextPageIndex = this.formProps?.fields?.children.findIndex((page) => {
          return page.id === nextPageId;
        });

        if (crmResponse?.status === 200) {
          super.setActionCookie(true);
        }

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
        const messageData = {
          type: OnlineSchedulingConstants.events.onError,
          description: error instanceof Error ? error.message : 'Unknown error',
          leadData: formDataCopy,
        };
        sendMessageToParentPage(messageData);
        return new Promise<ExecutionResult>((resolve) => {
          resolve({
            success: false,
            errorMessage: this.actionFieldsProps?.errorMessage?.value,
          });
        });
      });
  }
}
