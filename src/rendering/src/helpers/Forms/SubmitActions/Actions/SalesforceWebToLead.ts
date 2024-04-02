import { translateFieldMappings } from 'lib/forms/FormActions';
import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../BaseSubmitAction';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';

import { FormProps } from 'components/forms/Form/Form';
import FIELD_IDS from 'lib/constants/salesforce-field-ids';

export class SalesforceWebToLead extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(isCustomForm?: boolean): Promise<ExecutionResult> {
    if (isCustomForm) {
      // If triggered from custom-forms, we expect this.formData to be in formatted to expected WebToLeadForm Schema
      this.submitWebToLeadForm(this.generateWebToLeadForm(this.formData));
      return new Promise((resolve) => {
        resolve({
          success: true,
          errorMessage: 'Error while processing your request.',
        });
      });
    } else {
      this.submitWebToLeadForm(this.generateWebToLeadForm(this.generateWebToLeadData()));
      return new Promise((resolve) => {
        resolve({
          success: true,
          errorMessage: this.actionFieldsProps?.errorMessage?.value,
        });
      });
    }
  }

  private generateWebToLeadData(): Record<string, string> {
    const webToLeadData: Record<string, string> = translateFieldMappings(
      this.formProps as FormProps,
      this.formData,
      this.actionFieldsProps
    );

    const _salesforceSubmitFields = this
      .actionFieldsProps as Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.SalesforceWebToLead['fields'];

    const recordType = getEnum<string>(_salesforceSubmitFields?.recordType) || '';
    // 00N500000020bSh is the Salesforce field id for User Type
    const userType = webToLeadData['00N500000020bSh'] || '';

    webToLeadData[FIELD_IDS.CAMPAIGNIDS] = _salesforceSubmitFields?.campaignIds?.value || '';

    // Use the usertype drop down value if on the page.
    if (userType.length > 0) {
      webToLeadData[FIELD_IDS.USERTYPE] = userType;

      webToLeadData[FIELD_IDS.RECORDTYPE] = (FIELD_IDS as Record<string, string>)[
        userType.replace(' ', '').toUpperCase()
      ];
    } else {
      webToLeadData[FIELD_IDS.USERTYPE] = _salesforceSubmitFields?.userType?.value || '';
      webToLeadData[FIELD_IDS.RECORDTYPE] = (FIELD_IDS as Record<string, string>)[
        recordType.toUpperCase()
      ];
    }

    webToLeadData[FIELD_IDS.PROCESSSTATE] = 'New';
    webToLeadData[FIELD_IDS.SESSIONDATA] =
      new Date() + ' /// ' + new Date().getTime() + ' /// ' + navigator.userAgent;

    webToLeadData[FIELD_IDS.ORGID] = process.env.NEXT_PUBLIC_EW_SF_AW_ORG_ID || '';

    const today = new Date();
    webToLeadData[FIELD_IDS.INTERACTIONDATE] =
      ('0' + (today.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + today.getDate()).slice(-2) +
      '/' +
      today.getFullYear();

    return webToLeadData;
  }

  private generateWebToLeadForm(webToLeadData: Record<string, string>): HTMLFormElement {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', process.env.NEXT_PUBLIC_EW_SF_WEB_TO_LEAD_URL as string);
    Object.entries(webToLeadData).forEach((entry) => {
      const formInput = document.createElement('input');
      formInput.setAttribute('type', 'hidden');
      formInput.setAttribute('id', entry[0]);
      formInput.setAttribute('name', entry[0]);

      if (Array.isArray(entry[1])) {
        // Join array elements with pipe character and set it as the input value
        formInput.setAttribute('value', entry[1].join('|'));
      } else {
        formInput.setAttribute('value', entry[1]);
      }

      form.append(formInput);
    });

    return form;
  }

  private submitWebToLeadForm(form: HTMLFormElement) {
    const webToLeadFrameName = 'webToLeadFrame';

    // We've to create iFrame and set it as form's target in order to prevent redirection on form submission
    const webToLeadFrame = document.createElement('iframe');
    webToLeadFrame.setAttribute('name', webToLeadFrameName);
    webToLeadFrame.setAttribute('style', 'display: none');

    form.setAttribute('target', webToLeadFrameName);

    document.body.append(form);
    document.body.append(webToLeadFrame);

    form.submit();
    form.reset();
  }
}
