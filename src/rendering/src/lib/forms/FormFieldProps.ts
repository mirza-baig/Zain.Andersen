/**
 * Represents the components of a HTML form field
 */

/***  We can ignore no-explicit-any warning for this file, used type any as fields props can vary per Form Field Component  */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type FormFieldProps = {
  name: string;
  id: string;
  url: string;
  fields: any;
  templateId: string;
  templateName: string;
  displayName: string;
};
