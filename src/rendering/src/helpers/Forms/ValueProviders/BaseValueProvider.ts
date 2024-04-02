import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';

export type BaseValueProviderProps = {
  providerFieldsProps?: Foundation.EnterpriseWeb.Enterprise.FieldSets.Forms.FieldValueProviderSettings['fields'];
};

export interface IBaseValueProvider extends BaseValueProviderProps {
  executeProvider(additionalDetails?: Record<string, unknown> | undefined): string | null;
}

export class BaseValueProvider implements IBaseValueProvider {
  providerFieldsProps: BaseValueProviderProps['providerFieldsProps'];

  constructor(props: BaseValueProviderProps) {
    this.providerFieldsProps = props.providerFieldsProps;
  }

  executeProvider(): string | null {
    throw new Error('Provider not implemented.');
  }
}
