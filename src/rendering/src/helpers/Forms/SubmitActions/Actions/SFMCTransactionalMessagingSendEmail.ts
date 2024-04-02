import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../BaseSubmitAction';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { createUUID } from 'lib/utils/string-utils';
import { findFieldById } from 'lib/forms/FormActions';
import { getKeyValuePairList } from 'lib/forms/FormFieldUtils';
import { getEnum } from 'lib/utils';
import { FormFieldProps } from 'lib/forms';

type Attributes = {
  [key: string]: string | boolean;
};

type SFMCTransactionalMessagingSendEmailPayload = {
  definitionKey: string;
  account: string;
  recipient: {
    contactKey: string;
    to: string;
    attributes: Attributes;
  };
};

type SFMCTransactionalMessagingSendEmailFields =
  Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.SfmcTransactionalMessagingSendEmail['fields'] & {
    recipientTo: {
      fields?: {
        fieldName?: Field<string>;
      };
    };
    children: Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.Attributes.FieldAttribute[];
  };

export class SFMCTransactionalMessagingSendEmail extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  private getPayload(): SFMCTransactionalMessagingSendEmailPayload {
    const recipientTo =
      this.formData[
        (this.actionFieldsProps as SFMCTransactionalMessagingSendEmailFields).recipientTo?.fields
          ?.fieldName?.value || ''
      ] || null;

    return {
      definitionKey:
        (
          this
            .actionFieldsProps as Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.SfmcTransactionalMessagingSendEmail['fields']
        )?.definitionKey?.value || '',
      account:
        getEnum<string>(
          (
            this
              .actionFieldsProps as Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.SfmcTransactionalMessagingSendEmail['fields']
          )?.account
        ) || '',
      recipient: {
        contactKey: createUUID().replace(/-/, ''),
        to: recipientTo,
        attributes: this.getAttributes(),
      },
    };
  }

  private getAttributes(): Attributes {
    const attributes: Attributes = {};

    (this.actionFieldsProps as SFMCTransactionalMessagingSendEmailFields).children?.forEach(
      (childAttr) => {
        const AttributeKey = childAttr?.fields?.key?.value;

        const formField = findFieldById(
          this.formProps as unknown as FormFieldProps,
          childAttr?.fields?.['ef-value']?.id as string
        );

        const fieldValue = this.formData[formField?.fields?.fieldName?.value || ''];

        if (AttributeKey && formField && fieldValue) {
          if (Array.isArray(fieldValue)) {
            getKeyValuePairList(formField).forEach((option: { [key: string]: string }) => {
              attributes[`${AttributeKey}_${option.value}`] = fieldValue.includes(option.value);
            });
          } else {
            attributes[AttributeKey] = fieldValue;
          }
        }
      }
    );

    return attributes;
  }

  override async executeAction(isCustomForm?: boolean): Promise<ExecutionResult> {
    const payload: string = JSON.stringify(!isCustomForm ? this.getPayload() : this.formData);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    const response = await fetch(
      `/api/enterprise/submit-actions/sfmc-transactional-messaging-send-email/`,
      requestOptions
    );

    return new Promise<ExecutionResult>((resolve) => {
      resolve({
        success: response.status === 200,
        errorMessage: !isCustomForm
          ? this.actionFieldsProps?.errorMessage?.value
          : '<p>Error while processing your request.</p>',
      });
    });
  }
}
