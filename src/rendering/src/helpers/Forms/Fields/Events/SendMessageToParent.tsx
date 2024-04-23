import { FormFieldExport, FormFieldProps } from 'lib/forms';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { useContext, useEffect } from 'react';
import { FormsContext } from 'lib/forms/FormContext';
import { FormikValues, useFormikContext } from 'formik';
import { sendMessageToParentPage } from 'lib/forms/OnlineScheduling/OnlineSchedulingUtils';
import { getFieldData } from 'lib/forms/FormFieldUtils';

export type SendMessageProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.Events.SendMessageToParent & FormFieldProps;

const SendMessageToParentComponent = (props: SendMessageProps): JSX.Element => {
  const { pageIndex, formProps } = useContext(FormsContext);
  const { values } = useFormikContext<FormikValues>();

  useEffect(() => {
    const messageData = {
      type: getEnum<string>(props?.fields?.messageType),
      description: props?.fields?.messageDescription?.value,
      pageIndex: pageIndex,
      leadData: getFieldData(formProps, values),
    };
    sendMessageToParentPage(messageData);
    // run when the pageIndex gets updated
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  return <></>;
};

const SendMessageToParent: FormFieldExport = {
  reactComponent: SendMessageToParentComponent,
};

export default SendMessageToParent;
