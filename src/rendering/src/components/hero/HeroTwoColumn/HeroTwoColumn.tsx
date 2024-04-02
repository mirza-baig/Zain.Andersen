import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import classNames from 'classnames';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from 'lib/utils';
import { ButtonVariants } from 'src/helpers/Button';
import { Headline } from 'src/helpers/Headline';
import { useTheme } from 'lib/context/ThemeContext';
import { HeroTwoColumnTheme } from './HeroTwoColumn.theme';
import { Component } from 'src/helpers/Component';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';

export type HeroTwoColumnProps = Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroTwoColumn;

const HeroTwoColumn = (props: HeroTwoColumnProps) => {
  const { themeName, themeData } = useTheme(HeroTwoColumnTheme);

  const cta2Style = getEnum<ButtonVariants>(props.fields?.cta2Style) || 'link';

  if (!props.fields) {
    return null;
  }

  return (
    <Component variant="lg" dataComponent="hero/herotwocolumn" {...props}>
      {themeName === 'rba' && (
        <div className="col-span-12 md:col-span-1">
          <span className="inline-block h-[3px] w-l bg-primary md:w-full"></span>
        </div>
      )}
      <div className={`col-span-12 ${themeName === 'rba' ? 'md:col-span-5' : 'md:col-span-6'}`}>
        <Headline useTag="h1" classes={themeData.classes.headlineClass} {...props} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Subheadline
          useTag="h2"
          classes={classNames(themeData.classes.subheadlineClass, {
            'mb-xxs': !props.fields?.body.value,
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

export default withDatasourceCheck()<HeroTwoColumnProps>(HeroTwoColumn);
