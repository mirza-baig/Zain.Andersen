import { JobDetailsDataType } from 'lib/forms';

type JobContextValueProviderType = {
  providerFieldsProps?: {
    value?: {
      fields?: {
        Value?: {
          value?: string;
        };
      };
    };
  };
};

export class JobContextValueProvider {
  private providerFieldsProps: JobContextValueProviderType['providerFieldsProps'];

  constructor(props: JobContextValueProviderType) {
    this.providerFieldsProps = props.providerFieldsProps || {};
  }

  executeProvider(
    additionalDetails?: Record<string, unknown> | undefined
  ): string | string[] | null {
    const jobDetailsData = additionalDetails?.jobDetailsData as JobDetailsDataType | undefined;
    switch (this.providerFieldsProps?.value?.fields?.Value?.value) {
      case 'jobTitle':
        return jobDetailsData?.jobTitle || null;
      case 'jobTypes':
        return jobDetailsData?.jobTypes && jobDetailsData?.jobTypes.length
          ? jobDetailsData?.jobTypes
          : null;
      case 'jobCategory':
        return jobDetailsData?.jobCategory?.categoryName || null;
      case 'jobId':
        return jobDetailsData?.id || null;
      case 'jobAffiliateId':
        return jobDetailsData?.jobAffiliateId || null;
      case 'jobCity':
        return jobDetailsData?.jobCity || null;
      case 'jobStateAbbreviation':
        return jobDetailsData?.jobState?.abbreviation || null;
      case 'jobStateFullName':
        return jobDetailsData?.jobState?.fullName || null;
      case 'jobSummary':
        return jobDetailsData?.jobSummary || null;
      case 'jobDescription':
        return jobDetailsData?.jobDescription || null;
      case 'jobWage':
        return jobDetailsData?.jobWage || null;
      default:
        return null;
    }
  }
}
