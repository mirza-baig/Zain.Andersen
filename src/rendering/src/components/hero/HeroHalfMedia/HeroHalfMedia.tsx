// Global
import {
  GetStaticComponentProps,
  useComponentProps,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { HeroHalfMediaTheme } from './HeroHalfMedia.theme';
import { getEnum, getHeadingLevel } from 'lib/utils';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';

import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { ButtonVariants, cta1ToButtonProps, cta2ToButtonProps } from 'src/helpers/Button';
import { Eyebrow } from 'src/helpers/Eyebrow';
import {
  MediaPrimary,
  MediaPrimaryStaticProps,
  getMediaPrimaryStaticProps,
} from 'src/helpers/Media';
import { ComponentBackgroundVariants } from 'src/helpers/Component/Component';

export type ImagePosition = 'right' | 'left';
export type HeroHalfMediaProps = Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroHalfMedia;

const HeroHalfMedia = (props: HeroHalfMediaProps) => {
  console.log('bleed', props.fields?.containerWidth);
  const imagePosition = getEnum<ButtonVariants>(props.fields?.imgPosition) ?? 'right';
  const ctaRightAlign = imagePosition === 'right';
  const style = getEnum<ComponentBackgroundVariants>(props.fields?.backgroundColor) ?? 'white';
  const containerWidth =
    getEnum<'full-bleed' | 'full-width'>(props.fields?.containerWidth) ?? 'full-bleed';

  const { themeData } = useTheme(HeroHalfMediaTheme(ctaRightAlign, !!props.fields?.body?.value));

  const componentProps = useComponentProps<MediaPrimaryStaticProps>(props.rendering.uid);

  const copyContainerClass = () => {
    console.log('containerWidth', props?.ratio);
    if (containerWidth === 'full-bleed') {
      return themeData.classes.contentClasses.copyContainerClass;
    } else {
      return themeData.classes.contentClasses.copyContainerClassWithOutLeftMargin;
    }
  };
  return (
    <Component
      variant={containerWidth === 'full-bleed' ? 'full' : 'lg'}
      gap={containerWidth === 'full-bleed' ? 'gap-x-0' : '!gap-xxxs md:gap-s'}
      padding={
        containerWidth === 'full-bleed'
          ? 'px-0'
          : containerWidth === 'full-width'
          ? 'px-0 '
          : 'px-m '
      }
      backgroundVariant={style}
      dataComponent="hero/herohalfmedia"
      {...props}
    >
      <div className={themeData.classes.contentClasses.imageContainerClass}>
        <MediaPrimary
          maxH={'w-full'}
          {...props}
          priority
          staticProps={componentProps?.mediaPrimary}
        />
      </div>
      <div className={copyContainerClass()}>
        <Eyebrow
          useTag={getHeadingLevel('h2', props.fields?.eyebrow)}
          classes={themeData.classes.eyebrowClass.eyebrowContainer}
          {...props}
        />
        <Headline
          useTag={getHeadingLevel('h1', props.fields?.headlineLevel)}
          classes={themeData.classes.firstHeadline.headlineContainer}
          {...props}
        />
        {props.fields?.body && (
          <BodyCopy classes={themeData.classes.contentClasses?.body} {...props} />
        )}
        {/* {props.fields?.cta1Link?.value?.href && (
          <ButtonGroup
            cta1={cta1ToButtonProps(props, themeData.classes.buttonGroupClass.cta1Classes)}
            cta2={cta2ToButtonProps(props, themeData.classes.buttonGroupClass.cta2Classes)}
            wrapperClasses={themeData.classes.buttonGroupClass.wrapper}
          />
        )} */}
      </div>
    </Component>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  const datasource = rendering as HeroHalfMediaProps;

  const mediaStaticProps: MediaPrimaryStaticProps = {};

  if (!datasource) {
    return mediaStaticProps;
  }

  mediaStaticProps.mediaPrimary = await getMediaPrimaryStaticProps(datasource);

  return mediaStaticProps;
};

export default withDatasourceCheck()<HeroHalfMediaProps>(HeroHalfMedia);
