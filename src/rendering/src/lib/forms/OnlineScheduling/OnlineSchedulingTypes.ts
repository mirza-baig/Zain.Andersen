export type PrimarySubmissionData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  zipcode: string;
  emailAddress: string;
  formType: number;
  sender: string;
};

export type OnlineSchedulingMessage = {
  type?: string;
  leadData?: Record<string, string>;
  description?: string;
  pageIndex?: number;
};

export type CRMResponse = {
  status: number;
  data?: {
    data?: string;
    message?: string;
    resultid?: string;
    salesRepID?: string;
    territoryBasedAppointments?: Array<string>;
    salesRepBasedAppointments?: Array<string>;
    leadId?: string;
    isOnlineSchedulingEligible?: boolean;
    appointmentDateTime?: string;
  };
};

export type OnlineSchedulingContextProps = {
  iframeHostDomain?: string;
  isLoading?: boolean;
  primarySubmissionData?: PrimarySubmissionData;
  primarySubmissionResponse?: CRMResponse;
  secondarySubmissionResponse?: CRMResponse;
  tertiarySubmissionResponse?: CRMResponse;
};

export type OnlineSchedulingDispatchAction = {
  type: string;
  result: any;
};
