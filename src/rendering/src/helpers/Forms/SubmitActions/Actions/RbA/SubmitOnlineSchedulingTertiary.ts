import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';
import { fetchInternalAPIWithQueryString } from '../../../../../lib/utils/api-request-utils';
import {
  OnlineSchedulingContextProps,
  OnlineSchedulingDispatchAction,
} from '../../../../../lib/forms/OnlineScheduling/OnlineSchedulingTypes';
import { Feature } from '../../../../../.generated/Feature.EnterpriseWeb.model';
import { OnlineSchedulingConstants } from '../../../../../lib/constants/online-scheduling';
import { sendMessageToParentPage } from '../../../../../lib/forms/OnlineScheduling/OnlineSchedulingUtils';

type SubmitOSTertiaryFields =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.SubmitActions.SubmitOnlineSchedulingTertiary['fields'];
type FieldNames = 'resultId' | 'leadId' | 'salesRepId' | 'appointmentDateTime';

export class SubmitOnlineSchedulingTertiary extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }
  override async executeAction(): Promise<ExecutionResult> {
    const onlineSchedulingContext = this.context as OnlineSchedulingContextProps;
    const formDataCopy: Record<FieldNames, string> = {
      resultId: onlineSchedulingContext?.secondarySubmissionResponse?.data?.resultid || '',
      leadId: onlineSchedulingContext?.secondarySubmissionResponse?.data?.leadId || '',
      salesRepId: onlineSchedulingContext?.secondarySubmissionResponse?.data?.salesRepID || '',
      appointmentDateTime: this.formData.appointmentDateTime,
    };
    const noApptAvailableMsg =
      'The selected appointment time is not available, please select another.';

    const payload: string = JSON.stringify(formDataCopy);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    return fetchInternalAPIWithQueryString(
      `/api/rba/submit-actions/submit-online-scheduling-tertiary`,
      requestOptions
    )
      .then((response) => response.json())
      .then((crmResponse) => {
        const dispatchAction: OnlineSchedulingDispatchAction = {
          result: crmResponse,
          type: OnlineSchedulingConstants.tertiarySubmission,
        };
        console.log(JSON.stringify(crmResponse)); // log response to console for testing and debugging purposes - TO BE CLEANED UP ONCE UNNECESSARY

        const submitActionFields = this.actionFieldsProps as SubmitOSTertiaryFields;

        let nextPageId: string | undefined = '';
        if (crmResponse?.data?.message?.toLowerCase().includes('not available')) {
          return new Promise<ExecutionResult>((resolve) => {
            resolve({
              success: false,
              errorMessage: noApptAvailableMsg,
            });
          });
        } else if (crmResponse?.data?.message?.toLowerCase().includes('successfully')) {
          nextPageId = submitActionFields?.thankYouPage?.id;
        } else {
          nextPageId = submitActionFields?.noAppointmentsPage?.id;
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
