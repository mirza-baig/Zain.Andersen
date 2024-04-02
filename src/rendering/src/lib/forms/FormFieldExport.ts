import * as yup from 'yup';

/*
    represents type of export object from form fields
*/
// type of JobDetails using in JobContextValueProvider
export type JobDetailsDataType = {
  id?: string;
  name?: string;
  jobTitle?: string;
  jobDescription?: string;
  jobWage?: string;
  jobCategory?: {
    categoryName?: string;
    categoryImage?: {
      alt?: string;
      height?: number;
      width?: number;
      src?: string;
    };
  };
  jobState?: {
    abbreviation?: string;
    fullName?: string;
  };
  jobCity?: string;
  jobTypes?: string[];
  jobSummary?: string;
  jobAffiliateId?: string;
};

/***  We can ignore no-explicit-any warning for this file, used type any as props can vary per Form Field Component  */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type FormFieldExport = {
  // note: used type any as props can vary per Form Field Component
  reactComponent: (props: any) => JSX.Element;
  getInitialValue?: (
    props: any,
    additionalDetails?: Record<string, unknown> | undefined
  ) => string | number | boolean | Array<string | number | boolean>;
  getValidationSchema?: (props: any, schema: yup.AnyObject) => yup.AnyObject;
};
