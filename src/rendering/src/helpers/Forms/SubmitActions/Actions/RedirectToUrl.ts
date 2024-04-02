import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { BaseSubmitAction, BaseSubmitProps } from '../BaseSubmitAction';

export class RedirectToUrl extends BaseSubmitAction {
  constructor(params: BaseSubmitProps) {
    super(params);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  override async executeAction(): Promise<any> {
    const redirectUrlLink = (
      this
        .actionFieldsProps as Feature.EnterpriseWeb.Enterprise.Forms.SubmitActions.RedirectToUrl['fields']
    )?.targetURL;

    const queryString =
      redirectUrlLink?.value.querystring && redirectUrlLink?.value.querystring[0] === '?'
        ? redirectUrlLink?.value.querystring?.substring(1)
        : redirectUrlLink?.value.querystring;

    const redirectTarget = redirectUrlLink?.value.target;

    window.open(
      `${redirectUrlLink?.value.href}${queryString && `?${queryString}`}`,
      `${redirectTarget !== '' ? redirectTarget : '_self'}`
    );
  }
}
