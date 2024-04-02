// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import classNames from 'classnames';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { StickyBannerTheme } from './StickyBanner.theme';
import { useEffect, useState } from 'react';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useStickyBanner } from 'lib/context/StickyBannerContext';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { getEnum } from 'lib/utils';

export type StickyBannerProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.StickyBanner.StickyBanner;

type BANNER_VISIBILITY_SETTING = 'desktop-mobile' | 'desktop' | 'mobile';

const StickyBanner = (props: StickyBannerProps) => {
  const { themeData } = useTheme(StickyBannerTheme);

  const bannerContext = useStickyBanner();

  const { addBanner, closeCurrentBanner, removeBanner, bannerList } = bannerContext ?? {};

  const [isDismissed, setIsDismissed] = useState(false);

  const { currentScreenWidth } = useCurrentScreenType();
  const [isMobile, setIsMobile] = useState(currentScreenWidth <= getBreakpoint('md'));

  const BANNER_VISIBILITY =
    getEnum<BANNER_VISIBILITY_SETTING>(props.fields?.bannerVisibility) || 'desktop-mobile';

  useEffect(() => {
    // Adding the banner uid to the context when it mounts
    addBanner && addBanner(props.rendering.uid);

    // Cleanup function when banner is unmounted
    return () => removeBanner && removeBanner(props.rendering.uid);
    /* we can ignore the suggested deps, as they are either coming from the props or functions defined in bannerContext
    that is likely to be never updated, and not needed to include in deps. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setIsMobile(currentScreenWidth <= getBreakpoint('md')), [currentScreenWidth]);

  // Defining conditions record for rendering based on BANNER_VISIBILITY and isMobile
  const shouldRenderBanner: Record<BANNER_VISIBILITY_SETTING, boolean> = {
    'desktop-mobile': true,
    desktop: !isMobile,
    mobile: isMobile,
  };

  if (!shouldRenderBanner[BANNER_VISIBILITY]) {
    return <></>;
  }

  if (isDismissed || (bannerList && bannerList[0] !== props.rendering.uid)) {
    return <></>;
  }

  return (
    <Component variant="full" dataComponent="general/stickybanner" {...props}>
      <div
        className={classNames(
          'theme-black fixed bottom-0 left-0 right-0 z-10 col-span-12 place-items-center bg-theme-bg'
        )}
      >
        <div className={classNames(themeData.classes.bannerWrapper)}>
          <div className={themeData.classes.textWrapper}>
            <Headline classes={themeData.classes.headline} {...props} />
            <BodyCopy classes={themeData.classes.bodyClass} {...props} />
          </div>
          <div className="col-span-2 place-content-center ml:col-span-5 ml:place-self-end ml:self-center">
            <ButtonGroup classes={themeData.classes.buttonGroupClass} {...props} />
          </div>
          <button
            className={classNames(themeData.classes.iconWrapper)}
            onClick={() => {
              setIsDismissed(true), closeCurrentBanner && closeCurrentBanner();
            }}
            title="btn-close"
          >
            <SvgIcon icon="close" size="md" />
          </button>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<StickyBannerProps>(StickyBanner);
