import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { RichTextWrapper } from '../RichTextWrapper';
import { useExperienceEditor } from 'lib/utils';
import classNames from 'classnames';

export type BodyCopyProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.BodyCopy & {
  classes?: string;
  refer?: string;
};

const BodyCopy = ({ fields, classes, refer }: BodyCopyProps): JSX.Element => {
  console.log('BodyCopy', fields);
  const isEE = useExperienceEditor();

  if (fields?.body?.value == '' && !isEE) {
    return <></>;
  }

  if (!classes) {
    classes = classNames(classes, 'text-theme-body text-body mb-s');
  }
  return (
    <div className={classes}>
      <RichTextWrapper refer={refer} field={fields?.body} />
    </div>
  );
};
export default BodyCopy;
