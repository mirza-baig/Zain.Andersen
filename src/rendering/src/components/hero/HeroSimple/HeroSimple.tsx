import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { useTheme } from 'lib/context/ThemeContext';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { HeroSimpleTheme } from './HeroSimple.theme';

export type HeroSimpleProps = Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroSimple;

export type BackgroundColor = 'black' | 'gray' | 'white';

const HeroSimple = (props: HeroSimpleProps): JSX.Element => {
  const backgroundColor = getEnum<BackgroundColor>(props.fields?.backgroundColor) || 'white';
  const { themeData } = useTheme(HeroSimpleTheme(backgroundColor));

  return (
    <Component
      variant="full"
      backgroundVariant={getEnum(props.fields?.backgroundColor)}
      padding={'px-0'}
      dataComponent="general/herosimple"
      {...props}
    >
      <div className="col-span-12">
        <div className="px-m md:max-w-screen-lg lg:mx-auto">
          <Headline useTag="h1" classes={themeData.classes.heroContainer} {...props} />
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()(HeroSimple);
