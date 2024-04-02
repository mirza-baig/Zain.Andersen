import { FormFieldProps } from 'lib/forms';
import { BaseSubmitAction, BaseSubmitProps, ExecutionResult } from '../BaseSubmitAction';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

type FieldProps = {
  fieldId: string;
  name: string;
  type: string;
  value: string | Array<string>;
};

type SaveToDatabasePayload = {
  formId: string | undefined;
  sessionId: string;
  name: string;
  lines: Array<FieldProps> | undefined;
};

export class SaveToDatabase extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  private getPayload(): SaveToDatabasePayload {
    return {
      formId: this.formProps?.rendering.dataSource?.replace(/[{}]/g, ''),
      sessionId: this.formProps?.sessionId || '',
      name: (this.formProps?.fields as Feature.EnterpriseWeb.Enterprise.Forms.Structure.Form)
        .formName.value,
      lines: this.getFieldData(),
    };
  }

  private getFieldData(): Array<FieldProps> {
    const lines: Array<FieldProps> = [];

    this.formProps?.fields.children.forEach((page) =>
      page.fields?.children.forEach((field: FormFieldProps) => {
        // Address Field Template
        if (field.templateId === '0e87d9f7-c36a-42c7-bee4-00a50b3bdede') {
          // Address fieldPrefix
          const fieldPrefix = field.fields?.fieldPrefix.value
            ? field.fields?.fieldPrefix.value + ':'
            : '';
          //loop through address fields
          field.fields?.children.forEach((addressField: FormFieldProps) => {
            if (addressField.fields?.fieldName?.value) {
              lines.push({
                fieldId: addressField.id,
                name: fieldPrefix + addressField.fields.fieldName.value,
                type: addressField.templateName,
                value:
                  typeof this.formData[addressField.fields.fieldName.value] === 'boolean'
                    ? new Boolean(this.formData[addressField.fields.fieldName.value]).toString()
                    : typeof this.formData[addressField.fields.fieldName.value] === 'number'
                    ? this.formData[addressField.fields.fieldName.value].toString()
                    : this.formData[addressField.fields.fieldName.value],
              });
            }
          });
        } else if (field.fields?.fieldName?.value) {
          lines.push({
            fieldId: field.id,
            name: field.fields.fieldName.value,
            type: field.templateName,
            value:
              typeof this.formData[field.fields.fieldName.value] === 'boolean'
                ? new Boolean(this.formData[field.fields.fieldName.value]).toString()
                : typeof this.formData[field.fields.fieldName.value] === 'number'
                ? this.formData[field.fields.fieldName.value].toString()
                : this.formData[field.fields.fieldName.value],
          });
        }
      })
    );
    // Add googleRecaptchaResponse
    if (this.formProps?.googleRecaptchaData?.googleRecaptchaResponse) {
      lines.push({
        fieldId: this.formProps?.googleRecaptchaData.googleRecaptchaActionId,
        name: 'googleRecaptchaReponse',
        type: 'GoogleRecaptchaResponse',
        value: JSON.stringify(this.formProps?.googleRecaptchaData.googleRecaptchaResponse),
      });
    }

    return lines;
  }

  override async executeAction(): Promise<ExecutionResult> {
    const payload: string = JSON.stringify(this.getPayload());

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    const response = await fetch(
      `/api/enterprise/submit-actions/save-to-database/`,
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
