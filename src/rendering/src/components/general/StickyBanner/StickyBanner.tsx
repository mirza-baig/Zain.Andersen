// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import classNames from 'classnames';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { StickyBannerTheme } from './StickyBanner.theme';
import { useEffect, useState } from 'react';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { BANNER_VISIBILITY_SETTING, useStickyBanner } from 'lib/context/StickyBannerContext';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { getEnum } from 'lib/utils';

export type StickyBannerProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.StickyBanner.StickyBanner;

const StickyBanner = (props: StickyBannerProps) => {
  const { themeData } = useTheme(StickyBannerTheme);

  const bannerContext = useStickyBanner();
  const { sitecoreContext } = useSitecoreContext();

  const { addBanner, removeBanner, bannerList } = bannerContext ?? {};

  const [isDismissed, setIsDismissed] = useState(false);

  const { currentScreenWidth } = useCurrentScreenType();
  const [isMobile, setIsMobile] = useState(currentScreenWidth <= getBreakpoint('md'));

  const isDisabledFromDesktopPage =
    sitecoreContext.route?.fields?.hideDesktopConsultationSlider?.value;
  const isDisabledFromMobilePage =
    sitecoreContext.route?.fields?.hideMobileConsultationSlider?.value;

  const BANNER_VISIBILITY =
    getEnum<BANNER_VISIBILITY_SETTING>(props.fields?.bannerVisibility) || 'desktop-mobile';

  useEffect(() => {
    if (!isMobile && isDisabledFromDesktopPage) {
      return;
    }
    if (isMobile && isDisabledFromMobilePage) {
      return;
    }

    // Adding the banner uid to the context when it mounts
    addBanner && addBanner({ bannerId: props.rendering.uid, visibilityType: BANNER_VISIBILITY });

    // Cleanup function when banner is unmounted
    return () =>
      removeBanner &&
      removeBanner({ bannerId: props.rendering.uid, visibilityType: BANNER_VISIBILITY });
    /* we can ignore the suggested deps, as they are either coming from the props or functions defined in bannerContext
    that is likely to be never updated, and not needed to include in deps. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => setIsMobile(currentScreenWidth <= getBreakpoint('md')), [currentScreenWidth]);

  const isBannerEligibleToRender = () => {
    if (isMobile && bannerList?.mobileBannerList[0]?.bannerId === props.rendering.uid) {
      return true;
    } else if (!isMobile && bannerList?.desktopBannerList[0]?.bannerId === props.rendering.uid) {
      return true;
    }
    return false;
  };

  if (isDismissed || (bannerList && !isBannerEligibleToRender())) {
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
              setIsDismissed(true);
              removeBanner?.({
                bannerId: props.rendering.uid,
                visibilityType: BANNER_VISIBILITY,
              });
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
