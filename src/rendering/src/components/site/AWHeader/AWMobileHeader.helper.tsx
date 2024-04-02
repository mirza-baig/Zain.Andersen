import React, { useState, useRef, useEffect } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
// Components
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import { StandaloneSearchBox } from 'src/helpers/Coveo';
import { currentAccessToken } from 'lib/coveo';
import Image from 'next/image';
import { isSvgUrl } from 'lib/utils/string-utils';

// @TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';

export type AWHeaderProps = Feature.EnterpriseWeb.AndersenWindows.Components.Navigation.AWHeader;
const AWMobileHeader = (props: AWHeaderProps) => {
  const fields = props.fields;
  const favoriteProductsCount = props.favoriteProductsCount;
  const favoriteProductsCountText = `(${favoriteProductsCount})`;
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showModalMob, setShowModalMob] = useState(false);
  const [currentMenuMob, setCurrentMenuMob] = useState([]);
  const [isActiveMob, setIsActiveMob] = useState(false);
  const [currentSubMenuMob, setCurrentSubMenuMob] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const wrapperMHRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [coveoAccessToken, setCoveoAccessToken] = useState<string>();
  useEffect(() => {
    (async () => {
      const _coveoAccessToken = await currentAccessToken(organizationId);

      setCoveoAccessToken(_coveoAccessToken);
    })();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
  }, [showMobileMenu]);

  // handleClickOutside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node | null;
      if (wrapperMHRef.current && !wrapperMHRef.current.contains(target)) {
        setShowModalMob(false);
        setShowSearchBox(false);
        setIsActiveMob(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperMHRef]);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowModalMob(false);
      setShowSearchBox(false);
      setIsActiveMob(false);
      setShowMobileMenu(false);
    };

    if (router && typeof window !== 'undefined') {
      router.events.on('routeChangeComplete', handleRouteChange);
    }

    return () => {
      if (router && typeof window !== 'undefined') {
        router.events.off('routeChangeComplete', handleRouteChange);
      }
    };
  }, [router]);

  if (!fields) {
    return null;
  }

  const navGroup = fields.children;
  const utilityMenu =
    navGroup.length &&
    navGroup.filter(function (nav: AWHeaderProps) {
      return nav?.fields?.menuTitle && nav?.fields?.menuTitle.value === 'utilityMenu';
    });
  const utilityMenuArray = (utilityMenu.length && utilityMenu[0].fields.children) || [];

  const mainMenu =
    navGroup.length &&
    navGroup.filter(function (nav: AWHeaderProps) {
      return nav?.fields?.menuTitle && nav?.fields?.menuTitle.value === 'mainMenu';
    });
  const mainMenuArray = (mainMenu.length && mainMenu[0].fields.children) || [];

  const otherMenu =
    navGroup.length &&
    navGroup.filter(function (nav: AWHeaderProps) {
      return (
        nav?.fields?.menuTitle &&
        nav?.fields?.menuTitle.value !== 'utilityMenu' &&
        nav?.fields?.menuTitle.value !== 'mainMenu'
      );
    });
  const otherMenuArray = otherMenu.length && otherMenu[0].fields?.children?.lengh > 0;

  const handleShowSearchBox = () => {
    if (showModalMob) {
      setShowSearchBox(true);
    } else {
      setShowSearchBox(!showSearchBox);
    }
    setShowModalMob(false);
    setIsActiveMob(false);
  };

  const handleMobileMegaMenu = (childrenNavMob: AWHeaderProps) => {
    setShowSearchBox(false);
    setIsActiveMob(false);
    setCurrentMenuMob(childrenNavMob);
    setShowModalMob(true);
  };

  const handleMenuClick = (CurrentSubMenuMob: AWHeaderProps) => {
    setShowSearchBox(false);
    setIsActiveMob((current) => !current);
    setCurrentSubMenuMob(CurrentSubMenuMob);
  };

  const MobileMenu = (): JSX.Element => {
    return (
      <>
        <ul
          className={classNames(
            'visible right-0 top-0 h-screen  w-full translate-x-0 bg-white opacity-100 transition-all duration-[0.35s] ease-[ease-in-out]'
          )}
        >
          {!isActiveMob && (
            <div
              className="my-s flex cursor-pointer items-center text-sm-xs font-heavy hover:underline"
              onClick={() => setShowModalMob((current) => !current)}
            >
              <SvgIcon icon="chevron-left-sm" className="mr-xxs" /> Back
            </div>
          )}
          {currentMenuMob &&
            currentMenuMob.map((nav: AWHeaderProps, index: number) => {
              const showMobile =
                getEnum(nav.fields.displayType) &&
                nav.fields.displayType.fields.Value.value !== 'desktop';

              return (
                showMobile && (
                  <li key={index} className="my-xs">
                    {!isActiveMob && (
                      <>
                        {nav.templateName === 'Separator' ? (
                          <hr className="max-w-[62px] border-t border-gray" />
                        ) : nav.fields?.children.length ? (
                          nav.fields?.navItemStyle.fields.Value.value ===
                          'bold-with-colored-text' ? (
                            <div className="inline-flex flex-row items-center">
                              <NavLinkItems
                                navItem={nav}
                                additionalMobileClasses="w-[40px] h-[40px] mr-xxs"
                              />
                              <RichTextWrapper
                                field={{ value: nav.fields?.navItemLink.value.text }}
                                classes="text-sm-s font-heavy"
                              />
                            </div>
                          ) : (
                            <>
                              <div
                                className={classNames(
                                  'inline-flex flex-row items-center hover:underline',
                                  nav.fields?.navItemStyle.fields.Value.value === 'grey'
                                    ? 'text-sm-s font-medium text-dark-gray'
                                    : 'text-sm-s font-heavy text-black',
                                  isActiveMob ? 'active-menu ' : ''
                                )}
                                onClick={() => handleMenuClick(nav.fields?.children)}
                              >
                                <NavLinkItems
                                  navItem={nav}
                                  additionalMobileClasses="w-[40px] h-[40px] mr-xxs"
                                />
                                <Text field={{ value: nav.fields?.navItemLink.value.text }} />
                                <SvgIcon icon="chevron-right-sm" className="ml-s" />
                              </div>

                              {isActiveMob && <MobileSubMenu />}
                            </>
                          )
                        ) : (
                          nav.fields?.navItemLink &&
                          (nav.fields?.navItemStyle.fields.Value.value ===
                          'bold-with-colored-text' ? (
                            <LinkWrapper
                              ctaSection="mobile"
                              field={nav.fields?.navItemLink}
                              suppressLinkText
                              className={classNames(
                                'inline-flex hover:underline',
                                nav.fields?.navItemLink.value.target === '_blank'
                                  ? ' flex-row items-start'
                                  : 'flex-row-reverse items-center'
                              )}
                            >
                              <NavLinkItems
                                navItem={nav}
                                additionalMobileClasses="w-[40px] h-[40px] mr-xxs"
                              />
                              <RichTextWrapper
                                field={{ value: nav.fields?.navItemLink.value.text }}
                                classes="text-sm-s font-heavy"
                              />
                              {nav.fields?.navItemLink.value.target === '_blank' && (
                                <SvgIcon icon="new-tab-black" className="ml-xxxs inline-flex" />
                              )}
                            </LinkWrapper>
                          ) : (
                            <LinkWrapper
                              ctaSection="mobile"
                              field={nav.fields?.navItemLink}
                              className={classNames(
                                'inline-flex hover:underline',
                                nav.fields?.navItemStyle.fields.Value.value === 'grey'
                                  ? 'text-sm-s font-medium text-dark-gray'
                                  : 'text-sm-s font-heavy text-black',
                                nav.fields?.navItemLink.value.target === '_blank'
                                  ? ' flex-row items-start'
                                  : 'flex-row-reverse items-center'
                              )}
                            >
                              <NavLinkItems
                                navItem={nav}
                                additionalMobileClasses="w-[20px] h-[20px] mr-xxs"
                              />
                              {nav.fields?.navItemLink.value.target === '_blank' && (
                                <SvgIcon icon="new-tab-black" className="ml-xxxs inline-flex" />
                              )}
                            </LinkWrapper>
                          ))
                        )}
                      </>
                    )}
                    {isActiveMob && <MobileSubMenu />}
                  </li>
                )
              );
            })}
        </ul>
      </>
    );
  };

  const MobileSubMenu = (): JSX.Element => {
    return (
      <>
        <ul
          className={classNames(
            ' visible right-0 top-0 z-[] h-screen w-full translate-x-0 bg-white opacity-100 transition-all duration-[0.35s] ease-[ease-in-out]'
          )}
        >
          <div
            className="my-s flex cursor-pointer items-center text-sm-xs font-heavy hover:underline"
            onClick={() => setIsActiveMob((current) => !current)}
          >
            <SvgIcon icon="chevron-left-sm" className="mr-xxs" /> Back
          </div>
          {currentSubMenuMob &&
            currentSubMenuMob.map((nav: AWHeaderProps, index: number) => {
              const showMobile =
                getEnum(nav.fields.displayType) &&
                nav.fields.displayType.fields.Value.value !== 'desktop';
              return nav.templateName === 'Separator' && showMobile ? (
                <hr className="max-w-[62px] border-t border-gray" key={index} />
              ) : nav.fields?.navItemStyle.fields.Value.value === 'bold-with-colored-text' ? (
                showMobile && (
                  <div className="inline-flex w-full flex-row items-center">
                    <NavLinkItems
                      navItem={nav}
                      additionalMobileClasses="w-[40px] h-[40px] mr-xxs"
                    />
                    <RichTextWrapper
                      field={{ value: nav.fields?.navItemLink.value.text }}
                      classes="text-sm-s font-heavy"
                    />
                  </div>
                )
              ) : (
                nav.fields?.navItemLink &&
                showMobile && (
                  <li key={index} className="my-xs">
                    <LinkWrapper
                      ctaSection="mobile"
                      field={nav.fields?.navItemLink}
                      className={classNames(
                        'inline-flex hover:underline',
                        nav.fields?.navItemStyle.fields.Value.value === 'grey'
                          ? 'text-sm-s font-medium text-dark-gray'
                          : 'text-sm-s font-heavy text-black',
                        nav.fields?.navItemLink.value.target === '_blank'
                          ? ' flex-row items-start'
                          : 'flex-row-reverse items-center justify-end '
                      )}
                    >
                      <NavLinkItems
                        navItem={nav}
                        additionalMobileClasses="w-[40px] h-[40px] mr-xxs"
                      />
                      {nav.fields?.navItemLink.value.target === '_blank' && (
                        <SvgIcon icon="new-tab-black" className="ml-xxxs inline-flex" />
                      )}
                    </LinkWrapper>
                  </li>
                )
              );
            })}
        </ul>
      </>
    );
  };

  const handleMenuDisplay = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowSearchBox(false);
  };

  const NavLinkItems = ({ navItem, additionalMobileClasses }: AWHeaderProps): JSX.Element => {
    return (
      <>
        {navItem.fields?.navItemImage?.value?.src && (
          <ImageWrapper
            image={navItem.fields?.navItemImage}
            additionalMobileClasses={additionalMobileClasses}
            additionalDesktopClasses={additionalMobileClasses}
          />
        )}
        {!navItem.fields?.navItemImage?.value?.src && getEnum(navItem.fields?.navItemIcon) && (
          <SvgIcon icon={getEnum(navItem.fields?.navItemIcon)} className="mr-xxs" />
        )}
      </>
    );
  };

  return (
    <>
      {showSearchBox && (
        <div className="fixed left-0 top-0 z-[40] h-full w-full bg-black opacity-60"></div>
      )}
      {/* Mobile Nav */}
      <div
        ref={wrapperMHRef}
        // AWHeader is having different structure in desktop and mobile, so added 'headerBottomPosElement' in mobile as well
        className="mobile-header headerBottomPosElement fixed right-0 top-0 z-[10000] block w-full bg-black font-sans ml:hidden"
        id="awHeaderMobile"
      >
        <div className="h-[55px]">
          <div className="nav-bar relative flex h-[55px] items-center justify-between border-b border-solid border-b-gray bg-white px-5 py-0">
            <div
              className={
                (classNames('cursor-pointer'),
                showMobileMenu ? 'z-10 order-6 mr-0  ' : 'order-1 mr-s ml-0')
              }
              onClick={() => handleMenuDisplay()}
            >
              <div className="relative h-[15px] w-[15px] cursor-pointer transition-[0.2s] duration-[cubic-bezier(0.42,0,0.58,1)]">
                <span
                  className={classNames(
                    'absolute top-0 left-0 h-[2px] rotate-0 bg-black opacity-100 transition-[0.2s] duration-[cubic-bezier(0.42,0,0.58,1)]',
                    showMobileMenu ? 'w-0' : 'w-full'
                  )}
                ></span>
                <span
                  className={classNames(
                    'absolute top-[6px] left-0 h-[2px] w-full  bg-black opacity-100 transition-[0.2s] duration-[cubic-bezier(0.42,0,0.58,1)]',
                    showMobileMenu ? 'rotate-45' : 'rotate-0'
                  )}
                ></span>
                <span
                  className={classNames(
                    'absolute top-[6px] left-0 h-[2px] w-full bg-black opacity-100 transition-[0.2s] duration-[cubic-bezier(0.42,0,0.58,1)]',
                    showMobileMenu ? '-rotate-45' : 'rotate-0'
                  )}
                ></span>
                <span
                  className={classNames(
                    'absolute bottom-0 left-0 h-[2px] rotate-0 bg-black opacity-100 transition-[0.2s] duration-[cubic-bezier(0.42,0,0.58,1)]',
                    showMobileMenu ? 'w-0' : 'w-full'
                  )}
                ></span>
              </div>
            </div>
            <div className="rbaConsultRequest_headerLogo_container order-2 mr-auto  max-w-[144px]">
              <LinkWrapper
                ctaSection="mobile"
                className="flex"
                field={fields.logoCTA}
                suppressLinkText
              >
                <Image
                  src={fields.logo?.value?.src}
                  alt={(fields.logo?.value?.alt as string) || ''}
                  height={fields.logo?.value?.height as string}
                  width={fields.logo?.value?.width as string}
                  unoptimized={isSvgUrl(fields.logo?.value?.src)}
                />
              </LinkWrapper>
            </div>

            {otherMenuArray.length > 0 && (
              <ul className={`order-3 flex flex-row`}>
                {otherMenuArray.map((item: AWHeaderProps, index: number) => {
                  const showMobile =
                    getEnum(item.fields.displayType) &&
                    item.fields.displayType.fields.Value.value !== 'desktop';
                  return (
                    showMobile &&
                    item.fields?.navItemLink && (
                      <li key={index} className="inline-flex py-xxs pr-xxs">
                        <LinkWrapper
                          ctaSection="mobile"
                          field={item.fields?.navItemLink}
                          className={classNames(
                            'flex',
                            item.fields?.navItemLink.value.target === '_blank'
                              ? ' flex-row items-start'
                              : 'flex-row-reverse items-center'
                          )}
                        >
                          <NavLinkItems
                            navItem={item}
                            additionalMobileClasses="w-[20px] h-[20px] mr-xxs"
                          />
                          {item.fields?.navItemLink.value.target === '_blank' && (
                            <SvgIcon icon="new-tab-black" className="ml-xxxs inline-flex" />
                          )}
                        </LinkWrapper>
                      </li>
                    )
                  );
                })}
              </ul>
            )}
            {fields.utilityLogo?.value && fields.utilityLogo?.value.src && (
              <div className="order-5 ml-s mr-8 min-w-[35px]">
                <LinkWrapper ctaSection="utility" field={fields.utilityLogoCTA} suppressLinkText>
                  <ImageWrapper
                    image={fields.utilityLogo}
                    additionalMobileClasses="aspect-auto max-w-[35px]"
                  />
                </LinkWrapper>
              </div>
            )}

            {props.fields.globalSearchBox && (
              <div
                className={classNames(
                  'order-6 cursor-pointer items-center transition-[fill] duration-[0.2s] ease-[cubic-bezier(0,0,0.58,1)]'
                )}
                onClick={() => handleShowSearchBox()}
              >
                <SvgIcon icon="search" size="xl" />
              </div>
            )}
          </div>
          {showMobileMenu && (
            <nav className="absolute top-0 left-[5vw] w-screen bg-white shadow-[-180px_0_50px_10px_rgba(0,0,0,0.75)]">
              <div>
                <ul className="ml-s py-5">
                  {mainMenuArray.map((menu: AWHeaderProps, index: number) => {
                    const showMobile =
                      getEnum(menu.fields.displayType) &&
                      menu.fields.displayType.fields.Value.value !== 'desktop';
                    return (
                      showMobile && (
                        <li key={index} className="my-xs">
                          {!showModalMob && !isActiveMob && (
                            <div
                              className="inline-flex cursor-pointer items-center "
                              onClick={() => handleMobileMegaMenu(menu.fields?.children)}
                            >
                              {menu.fields?.navGroupTitle ? (
                                <Text
                                  tag={'span'}
                                  field={menu.fields?.navGroupTitle}
                                  className={classNames('cursor-pointer text-sm-s font-heavy')}
                                />
                              ) : (
                                menu.fields?.cta1Link && (
                                  <SingleButton
                                    classes={{ wrapper: 'mb-0' }}
                                    fields={menu.fields}
                                  />
                                )
                              )}

                              {menu.fields?.children.length > 0 && (
                                <SvgIcon icon="chevron-right-sm" className="ml-xxs" />
                              )}
                            </div>
                          )}

                          {showModalMob && <MobileMenu />}
                        </li>
                      )
                    );
                  })}
                </ul>
                <div className="h-screen bg-black p-5 text-white">
                  <ul className="flex flex-col">
                    {utilityMenuArray.map((menu: AWHeaderProps, index: number) => {
                      const showMobile =
                        getEnum(menu.fields.displayType) &&
                        menu.fields.displayType.fields.Value.value !== 'desktop';
                      const isMyFavoritesLink =
                        menu.fields?.navItemLink?.value?.class &&
                        menu.fields?.navItemLink.value.class === 'MyFavorites';

                      return menu.templateName === 'Separator'
                        ? null
                        : showMobile && (
                            <li
                              key={index}
                              className={
                                (classNames(),
                                menu.fields.mobileSortOrder && menu.fields.mobileSortOrder.value
                                  ? 'order-' + menu.fields.mobileSortOrder.value + ' py-xxs'
                                  : 'order-0 py-xxs')
                              }
                            >
                              {menu.fields.cta1Link &&
                              menu.fields.cta1Link.value.text &&
                              menu.fields.cta1Link.value.href ? (
                                <LinkWrapper
                                  ctaSection="utility"
                                  className="text-sm-xxs capitalize"
                                  field={menu.fields?.cta1Link}
                                />
                              ) : (
                                menu.fields?.navItemLink && (
                                  <LinkWrapper
                                    ctaSection="utility"
                                    className={classNames(
                                      'inline-flex text-sm-xxs capitalize',
                                      menu.fields?.navItemLink.value.target === '_blank'
                                        ? ' flex-row items-start'
                                        : 'flex-row-reverse items-center',
                                      menu.fields?.navItemLink.value.class &&
                                        menu.fields?.navItemLink.value.class
                                    )}
                                    field={{
                                      href: menu.fields?.navItemLink.value.href,
                                      text: `${menu.fields?.navItemLink.value.text} ${
                                        isMyFavoritesLink && favoriteProductsCountText
                                          ? favoriteProductsCountText
                                          : ''
                                      }`,
                                    }}
                                  >
                                    <NavLinkItems
                                      navItem={menu}
                                      additionalMobileClasses="w-[20px] h-[20px] mr-xxs"
                                    />
                                    {menu.fields?.navItemLink.value.target === '_blank' && (
                                      <SvgIcon icon="new-tab" className="ml-xxxs inline-flex" />
                                    )}
                                  </LinkWrapper>
                                )
                              )}
                            </li>
                          );
                    })}
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </div>
        {/* Search Box */}
        {showSearchBox && coveoAccessToken && (
          <>
            <div className="absolute h-[70px] w-screen bg-white px-m ml:px-0">
              <StandaloneSearchBox
                coveoAccessToken={coveoAccessToken}
                redirectionUrl={props.fields?.globalSearchBox?.fields.redirectionUrl}
                showSuggestions={props.fields?.globalSearchBox?.fields.showSuggestions}
                numberOfSuggestions={props.fields?.globalSearchBox?.fields.numberOfSuggestions}
                queryPipeline={props.fields?.globalSearchBox?.fields.queryPipeline}
                searchHub={props.fields?.globalSearchBox?.fields.searchHub}
                filterExpression={props.fields?.globalSearchBox?.fields.filterExpression}
                boostingExpression={props.fields?.globalSearchBox?.fields.boostingExpression}
                suggestedResultsLabel={props.fields?.globalSearchBox?.fields.suggestedResultsLabel}
                placeholderText={props.fields?.globalSearchBox?.fields.placeholderText}
                toggleSearchBoxVisibility={setShowSearchBox}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AWMobileHeader;
