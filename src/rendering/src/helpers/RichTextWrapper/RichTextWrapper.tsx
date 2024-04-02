// Global
import { RichTextProps } from '@sitecore-jss/sitecore-jss-react';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
// Lib
import useExperienceEditor from 'lib/utils/use-experience-editor';
import classNames from 'classnames';

type RichTextWrapperProps = RichTextProps & {
  classes?: string;
  refer?: string;
};
const RichTextWrapper = ({
  field,
  classes,
  refer = 'body-copy',
  ...props
}: RichTextWrapperProps): JSX.Element => {
  const isEE = useExperienceEditor();

  // Just pass as normal if in Experience Editor
  if (isEE) {
    return (
      <div className={classNames(refer, classes)}>
        <RichText field={field} {...props} />
      </div>
    );
  }

  // Bail if we don't have any field data
  if (!field || !field.value) {
    return <></>;
  }

  return (
    <div className={classNames(refer, classes)}>
      <RichText field={{ value: field.value }} {...props} />
    </div>
  );
};

export default RichTextWrapper;
