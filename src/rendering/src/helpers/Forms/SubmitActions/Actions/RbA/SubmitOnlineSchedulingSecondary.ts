import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';
import { fetchInternalAPIWithQueryString } from 'lib/utils/api-request-utils';
import { getFieldData } from 'lib/forms/FormFieldUtils';
import {
  OnlineSchedulingContextProps,
  OnlineSchedulingDispatchAction,
} from 'lib/forms/OnlineScheduling/OnlineSchedulingTypes';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { OnlineSchedulingConstants } from 'lib/constants/online-scheduling';

type SubmitOSSecondaryFields =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.SubmitActions.SubmitOnlineSchedulingSecondary['fields'];
export class SubmitOnlineSchedulingSecondary extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(): Promise<ExecutionResult> {
    const formDataCopy = { ...this.formData };
    formDataCopy['leadId'] = (
      this.context as OnlineSchedulingContextProps
    )?.primarySubmissionResponse?.data?.leadId;
    const payload: string = JSON.stringify(getFieldData(this.formProps, formDataCopy));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    return fetchInternalAPIWithQueryString(
      `/api/rba/submit-actions/submit-online-scheduling-secondary`,
      requestOptions
    )
      .then((response) => response.json())
      .then((crmResponse) => {
        const dispatchAction: OnlineSchedulingDispatchAction = {
          result: crmResponse,
          type: OnlineSchedulingConstants.secondarySubmission,
        };
        console.log(JSON.stringify(crmResponse)); // log response to console for testing and debugging purposes - TO BE CLEANED UP ONCE UNNECESSARY

        const submitActionFields = this.actionFieldsProps as SubmitOSSecondaryFields;

        let nextPageId: string | undefined = '';
        if (crmResponse?.data?.appointmentDateTime) {
          nextPageId = submitActionFields?.appointmentSetPage?.id; //Appointment Already Set - specific messaging
        } else if (
          !crmResponse?.data?.territoryBasedAppointments &&
          !crmResponse?.data?.salesRepBasedAppointments
        ) {
          nextPageId = submitActionFields?.noAppointmentsPage?.id; // No appointments messaging
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
