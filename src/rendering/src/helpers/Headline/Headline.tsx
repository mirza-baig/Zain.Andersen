import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { getHeadingLevel, useExperienceEditor } from 'lib/utils';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import classNames from 'classnames';

export type HeadlineProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.Headline & {
  useTag?: string;
  classes?: string;
};

const Headline = ({ fields, useTag, classes }: HeadlineProps): JSX.Element => {
  const isEE = useExperienceEditor();
  const defaultTag = 'h2';
  const tag = useTag ?? getHeadingLevel(defaultTag, fields?.headlineLevel);

  if (fields?.headlineText?.value == '' && !isEE) {
    return <></>;
  }

  if (!classes) {
    classes = classNames(classes, 'text-theme-text text-sm-m md:text-m font-bold mb-s');
  }

  return (
    <div className={classNames(`items-top font-sans [&_a:hover]:underline`, classes)}>
      <RichText tag={tag} field={fields?.headlineText} />
    </div>
  );
};
export default Headline;
