import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { useTheme } from 'lib/context/ThemeContext';
import { useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

// Components
import { ComponentProps } from 'lib/types/component-props';
import { getEnum } from 'lib/utils';
import { useCurrentScreenType } from 'lib/utils/get-screen-type';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { GetComponentSpacingClass } from 'src/helpers/Component/Component';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { MediaPrimary } from 'src/helpers/Media';
import RichTextWrapper from 'src/helpers/RichTextWrapper/RichTextWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { HeroMediaBackgroundTheme } from './HeroMediaBackground.theme';
import { cta1ToButtonProps, cta2ToButtonProps } from 'src/helpers/Button';

export type HeroMediaBackgroundProps =
  Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroMediaBackground & ComponentProps;
const HeroMediaBackground = (props: HeroMediaBackgroundProps) => {
  const { fields } = props;

  const { themeName, themeData } = useTheme(HeroMediaBackgroundTheme);
  const { screenType } = useCurrentScreenType();

  const [isVideoPaused, setIsVideoPaused] = useState(
    !fields?.primaryVideo?.fields.youTubeAutoPlay?.value || false
  );

  if (!fields) {
    return null;
  }

  const isDesktop = screenType !== 'sm' ? true : false;
  let hasOverlay = getEnum(fields.overlay) ? true : false;

  let fontColorClass = '';

  if (hasOverlay) {
    fontColorClass = 'md:text-white';
  } else {
    switch (getEnum(fields.fontColor)) {
      case 'gray':
        fontColorClass = 'md:text-dark-gray';
        break;
      case 'white':
        fontColorClass = 'md:text-white';
        break;
      default:
        fontColorClass = 'md:text-black';
        break;
    }
  }

  if (themeName === 'rba') {
    if (fields.overlay === null) {
      hasOverlay = true;
    }
  }

  const togglePlayPause = () => {
    const videoId = (
      props.fields?.primaryVideo as Feature.EnterpriseWeb.Enterprise.Elements.Media.YouTubeVideo
    )?.fields.videoId.value;

    const iframeContentWindow = (document.getElementById(videoId) as HTMLIFrameElement)
      ?.contentWindow;

    if (iframeContentWindow) {
      iframeContentWindow.postMessage(
        `{"event":"command", "func":"${isVideoPaused ? 'playVideo' : 'pauseVideo'}", "args":""}`,
        '*'
      );

      setIsVideoPaused(!isVideoPaused);
    }
  };
  return (
    <div
      data-component="hero/heromediabackground"
      className={classNames(
        'relative',
        GetComponentSpacingClass(props?.fields?.componentSpacing, 'none')
      )}
    >
      <div className={themeData.classes.mediaContainer}>
        <MediaPrimary
          imageLayout="fill"
          ratio="video"
          additionalDesktopClasses="h-[280px] md:h-[620px]"
          additionalMobileClasses="h-[280px]"
          priority
          {...props}
        />
        {fields.primaryVideo && (
          <div
            className={classNames(
              'absolute right-0 bottom-0 z-10 cursor-pointer rounded-full bg-black',
              themeData.classes.iconWrapper
            )}
            onClick={togglePlayPause}
          >
            {isVideoPaused ? <SvgIcon icon="play" size="lg" /> : <SvgIcon icon="pause" size="lg" />}
          </div>
        )}
      </div>
      {hasOverlay && isDesktop && <div className={themeData.classes.overlay}></div>}
      <div className={classNames(themeData.classes.contentWrapper, fontColorClass)}>
        <div className={classNames(themeData.classes.contentContainer, fontColorClass)}>
          <Eyebrow classes={classNames(themeData.classes.eyebrow, fontColorClass)} {...props} />
          <Headline
            classes={classNames(themeData.classes.headline, fontColorClass)}
            {...props}
            useTag="h1"
          />
          <RichTextWrapper
            classes={classNames(themeData.classes.bodyClass, fontColorClass)}
            field={props.fields?.body}
          />
          {fields.cta1Link && fields.cta1Link.value.href && (
            <ButtonGroup
              cta1={cta1ToButtonProps(props, themeData.classes.buttonGroupClass.cta1Classes)}
              cta2={cta2ToButtonProps(props, themeData.classes.buttonGroupClass.cta2Classes)}
              wrapperClasses={themeData.classes.buttonGroupClass.wrapper}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HeroMediaBackgroundProps>(HeroMediaBackground);
