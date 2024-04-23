import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { BaseSubmitProps, ExecutionResult } from '../../BaseSubmitAction';
import { SubmitOnlineSchedulingSecondary } from './SubmitOnlineSchedulingSecondary';

type SubmitOnlineSchedulingIncompleteFields =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.SubmitActions.SubmitOnlineSchedulingIncomplete['fields'];

export class SubmitOnlineSchedulingIncomplete extends SubmitOnlineSchedulingSecondary {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  override async executeAction(): Promise<ExecutionResult> {
    const submitActionFields = this.actionFieldsProps as SubmitOnlineSchedulingIncompleteFields;
    const nextPageId: string | undefined = submitActionFields?.thankYouPage?.id;

    const nextPageIndex = this.formProps?.fields?.children.findIndex((page) => {
      return page.id === nextPageId;
    });

    return super.executeAction().then((results) => {
      return new Promise<ExecutionResult>((resolve) => {
        resolve({
          result: results.result,
          success: results.success,
          errorMessage: results.errorMessage,
          nextPageIndex: nextPageIndex,
        });
      });
    });
  }
}
