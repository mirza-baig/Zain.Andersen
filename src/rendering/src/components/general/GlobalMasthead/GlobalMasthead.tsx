// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import classNames from 'classnames';
import { GlobalMastheadTheme } from './GlobalMasthead.theme';
import { useMemo, useState, useEffect, useRef } from 'react';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { FiArrowRight } from 'react-icons/fi';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { useCurrentScreenType, getBreakpoint } from 'lib/utils/get-screen-type';
import { getEnum } from 'lib/utils';
import SocialIcons from './SocialIcons.helper';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

export type BackgroundColor = 'gray' | 'primary' | 'white';

export type GlobalMastheadProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.GlobalMasthead.GlobalMasthead;
const GlobalMasthead = (props: GlobalMastheadProps) => {
  const selectedBackgroundColor =
    getEnum<BackgroundColor>(props.fields?.backgroundColor) || 'white';

  const { themeData } = useTheme(GlobalMastheadTheme);
  const { currentScreenWidth } = useCurrentScreenType();
  const mastheadRef = useRef<HTMLDivElement>(null);

  const isDesktop = currentScreenWidth >= getBreakpoint('ml') ? true : false;

  const DesktopLogoImage = props.fields?.desktopLogo;
  const MobileLogoImage = props.fields?.mobileLogo?.value?.src
    ? props.fields.mobileLogo
    : props.fields?.desktopLogo;

  const backgroundColorStyle = useMemo(() => {
    if (selectedBackgroundColor === 'gray') {
      return 'bg-gray';
    } else if (selectedBackgroundColor === 'primary') {
      return 'bg-primary';
    } else {
      return 'bg-white';
    }
  }, [selectedBackgroundColor]);

  const fontTextStyle = useMemo(() => {
    if (selectedBackgroundColor === 'white') {
      return 'text-black';
    } else {
      return 'text-white';
    }
  }, [selectedBackgroundColor]);

  const iconColorStyle = useMemo(() => {
    if (selectedBackgroundColor?.toLowerCase() === 'white') {
      return 'black';
    } else {
      return 'white';
    }
  }, [selectedBackgroundColor]);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(isDesktop);
  }, [isDesktop]);

  return (
    <div
      data-component="general/globalmasthead"
      className={classNames(themeData.classes.mastheadWrapper, backgroundColorStyle)}
      ref={mastheadRef}
    >
      <div className={themeData.classes.headWrapper}>
        <div className={classNames(themeData.classes.headLogoWrapper, fontTextStyle)}>
          <div onClick={() => setIsShow(!isShow)} className={themeData.classes.menuIcon}>
            {!isShow ? <IoIosArrowDropdown size={36} /> : <IoIosArrowDropup size={36} />}
          </div>
          <div className={themeData.classes.headLogo}>
            <LinkWrapper
              field={props.fields?.linkLogo}
              suppressLinkText
              ariaLabel={{
                value: isDesktop
                  ? DesktopLogoImage?.value?.text
                  : MobileLogoImage?.value?.text || 'global masthead Logo Image',
              }}
            >
              {isDesktop ? (
                <>
                  {DesktopLogoImage?.value?.src ? (
                    <div className={`h-[60px] w-[550px] object-cover`}>
                      <ImageWrapper
                        image={DesktopLogoImage}
                        mobileImage={MobileLogoImage}
                        additionalDesktopClasses="h-full w-full cursor-pointer"
                      />
                    </div>
                  ) : (
                    <span className={themeData.classes.headline}>
                      {props.fields?.headlineText.value}
                    </span>
                  )}
                </>
              ) : (
                <>
                  {MobileLogoImage?.value?.src ? (
                    <div className={`h-[30px] w-[300px] object-cover`}>
                      <ImageWrapper
                        image={MobileLogoImage}
                        mobileImage={MobileLogoImage}
                        additionalDesktopClasses="h-full w-full cursor-pointer"
                      />
                    </div>
                  ) : (
                    <span className={themeData.classes.headline1}>
                      {props.fields?.headlineText.value}
                    </span>
                  )}
                </>
              )}
            </LinkWrapper>
          </div>
        </div>
        {isShow && (
          <div className={themeData.classes.anchorWrapper}>
            <div className="hidden ml:block">
              <SocialIcons icons={props?.fields?.socialIcons} iconColor={iconColorStyle} />
            </div>
            <div className={themeData.classes.anchors}>
              {props.fields?.children.map(
                (link: Item & Foundation.EnterpriseWeb.Enterprise.FieldSets.GeneralLink) => (
                  <LinkWrapper
                    field={link?.fields?.Link}
                    key={link?.id}
                    suppressLinkText
                    ariaLabel={{ value: (link.fields.Link.value.text as string) || 'General Link' }}
                  >
                    <span className={classNames(themeData.classes.linkTitle, fontTextStyle)}>
                      {link.fields.Link.value.text}
                    </span>
                  </LinkWrapper>
                )
              )}
            </div>
            <div className="mt-2 py-5 pb-2 mmd:py-2 ml:mt-0">
              <LinkWrapper
                field={props.fields?.rightSideLink}
                suppressLinkText
                className={classNames('flex items-center', fontTextStyle)}
                ariaLabel={{ value: props.fields?.rightSideLink.value.text || 'Right Side Link' }}
              >
                <span className="font-sans text-[18px] font-bold">
                  {props.fields?.rightSideLink.value.text}
                </span>
                <FiArrowRight size={16} />
              </LinkWrapper>
            </div>
            <div className="block ml:hidden">
              <SocialIcons icons={props?.fields?.socialIcons} iconColor={iconColorStyle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withDatasourceCheck()<GlobalMastheadProps>(GlobalMasthead);
