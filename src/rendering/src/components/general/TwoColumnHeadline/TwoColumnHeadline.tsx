import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import classNames from 'classnames';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from 'lib/utils';
import { ButtonVariants } from 'src/helpers/Button';
import { Headline } from 'src/helpers/Headline';
import { Component } from 'src/helpers/Component';
import { TwoColumnHeadlineTheme } from './TwoColumnHeadline.theme';
import { useTheme } from 'lib/context/ThemeContext';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';

export type TwoColumnHeadlineProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.TwoColumnHeadline.TwoColumnHeadline;

const TwoColumnHeadline = (props: TwoColumnHeadlineProps) => {
  const { themeName, themeData } = useTheme(TwoColumnHeadlineTheme);

  const cta2Style = getEnum<ButtonVariants>(props.fields?.cta2Style) || 'link';

  if (!props.fields) {
    return null;
  }

  return (
    <Component variant="lg" dataComponent="general/twocolumnheadline" {...props}>
      <div className="col-span-12 md:col-span-6">
        <Headline classes={themeData.classes.headlineClass} {...props} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Subheadline
          classes={classNames(themeData.classes.subheadlineClass, {
            'mb-s': !props.fields?.body.value,
          })}
          {...props}
        />
        <BodyCopy classes={themeData.classes.bodyClass} {...props} />
        <ButtonGroup
          classes={classNames(
            themeData.classes.buttonGroupClass,
            themeName === 'aw' && {
              classes: {
                cta2Classes:
                  (cta2Style === 'link' || cta2Style === 'link-right-icon') &&
                  'ml-xs md:ml-0 px-s md:px-0',
              },
            }
          )}
          {...props}
        />
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<TwoColumnHeadlineProps>(TwoColumnHeadline);
