import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormFieldExport } from 'lib/forms';
import { getWidthClass } from 'lib/forms/FormFieldUtils';
import classNames from 'classnames';

export type FillerProps = Feature.EnterpriseWeb.Enterprise.Forms.Fields.Filler & FormFieldProps;

const FillerComponent = (props: FillerProps): JSX.Element => {
  return (
    <div className={`relative mb-s hidden md:block ${classNames(getWidthClass(props))}`}></div>
  );
};

const Filler: FormFieldExport = {
  reactComponent: FillerComponent,
};

export default Filler;
