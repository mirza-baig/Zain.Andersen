/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
// Components
import { Component } from 'src/helpers/Component';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { Field } from 'lib/jss21.2.1/layout';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { StandaloneSearchBox } from 'src/helpers/Coveo';
import { ComponentProps } from 'lib/types/component-props';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecoreIds } from 'lib/constants';
import { TileMenu } from './TileMenu.helper';
import { LinkMenu } from './LinkMenu.helper';
import { currentAccessToken } from 'lib/coveo';
import { StandaloneSearchBoxProps } from 'src/helpers/Coveo/StandaloneSearchBox/StandaloneSearchBox';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { Flyout } from 'src/helpers/Flyout/Flyout';
import { useFlyoutStore } from 'src/helpers/Flyout/flyout.store';
import { getCookie } from 'lib/utils/client-storage-utils';
import { ScrollDirection, useScrollDirection } from 'lib/utils/use-scroll-direction';
import { guidEquals, normalizeGuid } from 'lib/utils/string-utils';

const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';

type MegaMenuGroupProps = Array<
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.MegaMenuGroup & {
    fields: { children: Array<MenuItemProps> };
  }
>;

type MenuItemProps = Item &
  (
    | Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.TileItem
    | Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.LinkItem
  );

type MegaMenuItemProps = Item &
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.MegaMenu & {
    fields: { children: MegaMenuGroupProps };
  };

export type RbAHeaderProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.RbAHeader & {
    fields: {
      helpAndSupportUtilityNav?: {
        children: Array<Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.NavigationLink>;
      } & Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.NavigationGroup;
      children: Array<MegaMenuItemProps>;
    };
  } & ComponentProps;

// For RbA header and its components we'll range z index from 900 - 998

const RbAHeader = (props: RbAHeaderProps) => {
  const { fields } = props;

  const { currentScreenWidth } = useCurrentScreenType();
  const { userAffiliate } = useAffiliate();
  const { isFlyoutVisible, setFlyoutVisibility, currentZip, setCurrentZip } = useFlyoutStore();
  const scrollDirection = useScrollDirection(110);

  const isMobile = currentScreenWidth < getBreakpoint('ml');

  //#region States
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [coveoAccessToken, setCoveoAccessToken] = useState<string>();
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
  const [selectedMenuLinks, setSelectedMenuLinks] = useState<Array<number>>([]);
  const [flyOutAndOverlayTop, setFlyOutAndOverlayTop] = useState(0);
  //#endregion

  //#region Refs
  const menuLinksContainerRef = useRef<HTMLDivElement | null>(null);
  const helpAndSupportNavRef = useRef<HTMLLIElement | null>(null);
  const affiliateUtilityBarRef = useRef<HTMLUListElement | null>(null);
  const flyoutRef = useRef<HTMLDivElement | null>(null);
  //#endregion

  //#region useCallbacks
  const handleHeaderAppearance = useCallback(
    (direction: ScrollDirection) => {
      try {
        if (isMobile) {
          if (direction === 'UP' || isMobileMenuExpanded) {
            setIsHeaderSticky(true);
          } else if (direction === 'DOWN') {
            setIsHeaderSticky(false);
          }
        }
      } catch (_) {
        console.log('Error in accessing header container element');
      }
    },
    [isMobile, isMobileMenuExpanded]
  );

  /**
   * This function detects if click event is originated outside MegaMenu, Flyout or Help&Support section of utility bar
   * @param event
   * @returns void
   */
  const handleOutsideClick = useCallback((event) => {
    // Initially isMobile will always be true as screen width will be 0.
    // As this function's execution context gets the initial values of the code so isMobile will always 0.
    // Due to this we've used window object to determine screen width.
    if (window && window.innerWidth > getBreakpoint('ml')) {
      if (
        menuLinksContainerRef.current?.contains(event.target) ||
        helpAndSupportNavRef.current?.contains(event.target) ||
        flyoutRef.current?.contains(event.target) ||
        affiliateUtilityBarRef.current?.contains(event.target)
      ) {
        return;
      }

      setSelectedMenuLinks([]);
      setFlyoutVisibility(false);
    }
    // This function needs to be defined only on the first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region useEffects
  useEffect(() => {
    setCurrentZip((getCookie('currentZip') as string)?.replaceAll('%20', ' '));
    document.addEventListener('mousedown', handleOutsideClick);

    (async () => {
      const _coveoAccessToken = await currentAccessToken(organizationId);

      setCoveoAccessToken(_coveoAccessToken);
    })();

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick, setCurrentZip]);

  useEffect(() => {
    handleHeaderAppearance(scrollDirection);
    // We only need to handle header appearance only if scroll direction changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDirection]);

  useEffect(() => {
    // Logic to handle link menu group without title
    if (!isMobile && selectedMenuLinks.length > 0) {
      const linkGroupIds: Array<string> = [];

      const linkMenus = document.querySelectorAll('.link-menu');

      linkMenus.forEach((menu) => !linkGroupIds.includes(menu.id) && linkGroupIds.push(menu.id));

      linkGroupIds.forEach((groupId) => {
        const linkGroupElements = document.querySelectorAll(`#${groupId}`);

        let doesTitleExist = false;

        if (linkGroupElements.length > 0) {
          for (let i = 0; i < linkGroupElements.length; i++) {
            if (linkGroupElements[i].children.length > 1) {
              doesTitleExist = true;
              return;
            }
          }

          if (!doesTitleExist) {
            for (let i = 0; i < linkGroupElements.length; i++) {
              linkGroupElements[i].classList.add('[&_#link-menu-title]:hidden');
            }
          }
        }
      });
    }
  }, [isMobile, selectedMenuLinks]);

  useEffect(() => {
    const getFlyoutTopCoordinates = (): number => {
      return isMobile
        ? affiliateUtilityBarRef.current
          ? (affiliateUtilityBarRef.current?.getBoundingClientRect().bottom > 0 &&
              affiliateUtilityBarRef.current?.getBoundingClientRect().bottom + 4) ||
            0
          : 0
        : menuLinksContainerRef.current
        ? (menuLinksContainerRef.current?.getBoundingClientRect().bottom > 0 &&
            menuLinksContainerRef.current?.getBoundingClientRect().bottom + 1) ||
          0
        : 0;
    };

    setFlyOutAndOverlayTop(getFlyoutTopCoordinates());

    document.body.style.overflowY =
      isFlyoutVisible ||
      (isMobile && isMobileMenuExpanded) ||
      (!isMobile && selectedMenuLinks.length > 0 && !selectedMenuLinks.includes(-1))
        ? 'hidden'
        : 'auto';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [selectedMenuLinks, isMobileMenuExpanded, isFlyoutVisible, currentZip, isMobile]);
  //#endregion

  if (!fields) {
    return <></>;
  }

  //#region Util functions
  const toggleMobileMenu = () => setIsMobileMenuExpanded(!isMobileMenuExpanded);

  const getSectionType = (desktopSection: 'header' | 'utility') =>
    isMobile ? 'mobile' : desktopSection;

  const updateSelectedMenuLinks = (newSelectedLinkIndex: number) => {
    let _updatedSelectedMenuLinks = selectedMenuLinks;

    // Set only one menu link as active on desktop
    if (!isMobile) {
      _updatedSelectedMenuLinks =
        _updatedSelectedMenuLinks?.[0] === newSelectedLinkIndex ? [] : [newSelectedLinkIndex];
    } else {
      selectedMenuLinks.includes(newSelectedLinkIndex)
        ? (_updatedSelectedMenuLinks = selectedMenuLinks.filter(
            (_link) => _link !== newSelectedLinkIndex
          ))
        : _updatedSelectedMenuLinks.push(newSelectedLinkIndex);
    }

    setSelectedMenuLinks([..._updatedSelectedMenuLinks]);
    setFlyoutVisibility(false);
  };

  const toggleFlyout = () => {
    setSelectedMenuLinks([]);
    setFlyoutVisibility(true);
  };

  //#endregion

  //#region Rendering functions
  const renderMyProjectsLink = () => {
    return (
      userAffiliate?.programOptIns?.MyProject &&
      fields?.myProjectsLink?.value?.href && (
        <li className="flex cursor-pointer items-center justify-between p-s text-body ml:text-small">
          <LinkWrapper
            ctaSection={getSectionType('utility')}
            field={{
              href: fields.myProjectsLink.value.href,
              title: 'My Projects',
              text: 'My Projects',
            }}
            ariaLabel={{ value: 'My Projects' }}
          />
        </li>
      )
    );
  };

  const renderUtilityNav = () => {
    return (
      <div className="col-span-12 mx-[calc(50%-50vw)] bg-black py-xxs ml:py-0">
        <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-m text-white">
          <ul
            ref={affiliateUtilityBarRef}
            className="flex w-full cursor-pointer items-center ml:w-fit"
            onClick={toggleFlyout}
            onKeyDown={(e) => e.key === 'Enter' && toggleFlyout()}
          >
            {/* Zip */}
            <li
              className={classNames(
                'flex flex-col flex-wrap border-dark-gray pr-xxs',
                userAffiliate?.affiliateId !== '0' && currentZip && 'border-r'
              )}
              tabIndex={0}
            >
              {currentZip && (
                <div className="flex items-center text-sm-xxs font-bold">
                  <SvgIcon className="mr-xxxs" icon="location-pin" />
                  <Text
                    tag="span"
                    field={{
                      value: currentZip,
                    }}
                  />
                </div>
              )}
              <div className="flex items-center text-[10px] leading-4">
                <Text
                  className="whitespace-nowrap"
                  tag="span"
                  field={{ value: currentZip ? 'Change Location' : 'Use My Location' }}
                />
                <SvgIcon className="ml-xxxs transition ease-linear" icon="arrow-drop-down" />
              </div>
            </li>
            {userAffiliate.affiliateId !== '0' && userAffiliate.affiliateName && (
              <li
                tabIndex={0}
                className={classNames(
                  'flex grow items-center justify-between border-dark-gray pl-xxs ml:flex-col ml:items-start',
                  !currentZip && 'border-l'
                )}
              >
                <Text
                  className="text-sm-xxs font-bold"
                  tag="span"
                  field={{ value: userAffiliate.affiliateName }}
                />
                {!isMobile ? (
                  <div className="flex items-center text-[10px] leading-4">
                    <Text tag="span" field={{ value: 'View Retailer Information' }} />
                    <SvgIcon className="ml-xxxs transition ease-linear" icon="arrow-drop-down" />
                  </div>
                ) : (
                  <SvgIcon className="ml-xxxs transition ease-linear" icon="arrow-drop-down" />
                )}
              </li>
            )}
          </ul>
          {!isMobile && (
            <>
              <div className="w-full max-w-[288px] text-black">{renderStandaloneSearchbox()}</div>
              <ul className="flex h-full items-center gap-4 text-xxs font-bold">
                {renderMyProjectsLink()}
                {fields?.helpAndSupportUtilityNav?.children?.length > 0 && (
                  <li
                    ref={helpAndSupportNavRef}
                    tabIndex={0}
                    className="relative -ml-xxs flex h-full cursor-pointer items-center"
                    onClick={() => updateSelectedMenuLinks(-1)}
                    onKeyDown={(e) => e.key === 'Enter' && updateSelectedMenuLinks(-1)}
                  >
                    <div className="flex items-center">
                      <Text
                        tag="span"
                        field={fields.helpAndSupportUtilityNav?.fields.navigationGroupTitle}
                      />
                      <SvgIcon
                        className={classNames(
                          'ml-xxxs transition ease-linear',
                          selectedMenuLinks.includes(-1) && 'rotate-180'
                        )}
                        icon="arrow-drop-down"
                      />
                    </div>
                    {selectedMenuLinks.includes(-1) && (
                      <div className="absolute right-0 top-full z-[910] flex flex-col bg-light-gray py-s px-m text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                        {fields?.helpAndSupportUtilityNav?.children.map(
                          (
                            item: Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.NavigationLink,
                            index: number
                          ) => (
                            <React.Fragment key={index}>
                              <LinkWrapper
                                ctaSection="utility"
                                className="mb-s whitespace-nowrap text-body !font-regular !no-underline"
                                field={{ ...item?.fields?.link }}
                                ariaLabel={{ value: item?.fields?.linkTitle.value as string }}
                              >
                                {item?.fields?.linkTitle.value}
                              </LinkWrapper>
                            </React.Fragment>
                          )
                        )}
                      </div>
                    )}
                  </li>
                )}
                {userAffiliate.programOptIns?.CorporateChat && (
                  <li className="flex cursor-pointer items-center" tabIndex={0}>
                    <SvgIcon className="mr-xxxs" icon="chat" />
                    <Text field={{ value: 'Chat' }} />
                  </li>
                )}
                {userAffiliate.administrativeOfficePhoneNumber && (
                  <li className="flex cursor-pointer items-center" tabIndex={0}>
                    <LinkWrapper
                      ctaSection="utility"
                      className="flex flex-row-reverse items-center"
                      field={{
                        href: `tel: ${userAffiliate.administrativeOfficePhoneNumber}`,
                        text: userAffiliate.administrativeOfficePhoneNumber,
                      }}
                      ariaLabel={{ value: 'Administrative Office Phone Number' }}
                    >
                      <SvgIcon className="mr-xxxs" icon="phone" size="lg" />
                    </LinkWrapper>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderMegaMenu = (menuItems: MegaMenuGroupProps) => {
    let rowNumberForLinkMenu = 1;
    let isPreviousMenuTypeLink = true;

    return (
      <div className="grid grid-cols-12 gap-x-s px-xxs ml:w-max ml:grid-cols-none ml:px-s">
        {menuItems.map((item, index) => {
          switch (normalizeGuid(item.fields?.children?.[0]?.templateId)) {
            case normalizeGuid(SitecoreIds.Feature.Components.Header.RbA.TileItem.TemplateId):
              isPreviousMenuTypeLink = true;

              return (
                <div
                  className="col-span-12 ml:px-xs"
                  style={{ gridRowStart: isMobile ? 'unset' : index + 1 }}
                >
                  <TileMenu
                    menuTitle={item.fields.menuTitle}
                    menuLink={item.fields.menuLink}
                    menuItems={
                      item.fields
                        ?.children as Array<Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.TileItem>
                    }
                    ctaSection={getSectionType('header')}
                  />
                </div>
              );
            case normalizeGuid(SitecoreIds.Feature.Components.Header.RbA.LinkItem.TemplateId):
            default:
              if (isPreviousMenuTypeLink) {
                rowNumberForLinkMenu = index + 1;
              }

              isPreviousMenuTypeLink = false;
              return (
                <div
                  id={`link-menu-group-${selectedMenuLinks[0]}-${rowNumberForLinkMenu}`}
                  style={{ gridRowStart: isMobile ? 'unset' : rowNumberForLinkMenu }}
                  className={classNames(
                    'link-menu',
                    'col-span-12 ml:col-span-5 ml:max-w-[250px] ml:px-xs'
                  )}
                >
                  <LinkMenu
                    menuTitle={item.fields.menuTitle}
                    menuLink={item.fields.menuLink}
                    menuItems={
                      item.fields
                        ?.children as Array<Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.LinkItem>
                    }
                    ctaSection={getSectionType('header')}
                  />
                </div>
              );
          }
        })}
      </div>
    );
  };

  const renderMainNav = () => {
    return (
      <>
        <div className="sticky top-0 z-[998] col-span-12 bg-white ml:static ml:col-span-3">
          <div className="flex justify-between border-b border-gray py-xxs px-m ml:border-none ml:p-0">
            <div className="w-[173px]">
              <LinkWrapper
                ctaSection={getSectionType('header')}
                field={fields.logoLink}
                suppressLinkText
                ariaLabel={{ value: fields?.logo?.value?.alt }}
              >
                <ImageWrapper
                  image={fields.logo}
                  additionalDesktopClasses="aspect-auto max-w-[173px]"
                  additionalMobileClasses="aspect-auto max-w-[173px]"
                />
              </LinkWrapper>
            </div>
            <div className="flex items-center gap-m text-black ml:hidden">
              {userAffiliate.administrativeOfficePhoneNumber && (
                <LinkWrapper
                  ctaSection={getSectionType('header')}
                  field={{
                    href: `tel: ${userAffiliate.administrativeOfficePhoneNumber}`,
                    text: !isMobile ? userAffiliate.administrativeOfficePhoneNumber : '',
                  }}
                  ariaLabel={{ value: 'Administrative Office Phone Number' }}
                >
                  <SvgIcon className="cursor-pointer" icon="phone" size="xxl" />
                </LinkWrapper>
              )}
              <span className="cursor-pointer" onClick={toggleMobileMenu}>
                <SvgIcon
                  icon={isMobileMenuExpanded ? 'close' : 'hamburger'}
                  size={isMobileMenuExpanded ? '18' : 'xl'}
                />
              </span>
            </div>
          </div>
        </div>
        {(!isMobile || (isMobile && isMobileMenuExpanded)) && (
          <>
            <div ref={menuLinksContainerRef} className="col-span-12 ml:col-span-6">
              <div className="flex flex-col ml:h-full ml:flex-row ml:items-center">
                {isMobile && <div className="bg-black px-m">{renderStandaloneSearchbox()}</div>}
                {/* Menu Links */}
                <ul className="inline-flex w-full flex-col justify-between pb-xs ml:flex-row ml:pb-0">
                  {fields.children.map((menuItem: MegaMenuItemProps, index: number) => {
                    if (
                      guidEquals(
                        menuItem.templateId,
                        SitecoreIds.Feature.Components.Header.RbA.MegaMenu.TemplateId
                      )
                    ) {
                      const _isSelectedMenuLink = selectedMenuLinks.includes(index);
                      return (
                        <React.Fragment key={menuItem.id}>
                          <li
                            tabIndex={0}
                            key={index}
                            className={classNames(
                              'flex cursor-pointer items-center justify-between border-b border-gray p-s ml:my-s ml:border-b-3 ml:border-primary ml:p-0 ml:hover:border-opacity-100',
                              _isSelectedMenuLink ? 'ml:border-opacity-100' : 'ml:border-opacity-0'
                            )}
                            onClick={() => updateSelectedMenuLinks(index)}
                            onKeyDown={(e) => e.key === 'Enter' && updateSelectedMenuLinks(index)}
                          >
                            <Text
                              tag="span"
                              className="font-sans text-sm-s font-extra-light ml:mr-xxs ml:font-serif ml:text-body ml:font-bold"
                              field={menuItem.fields?.menuTitle}
                            />
                            <SvgIcon
                              className={classNames(
                                'transition ease-linear',
                                _isSelectedMenuLink && 'rotate-180'
                              )}
                              icon={isMobile ? 'caret' : 'arrow-drop-down'}
                            />
                          </li>
                          {/* Menu container */}
                          {_isSelectedMenuLink && (
                            <div
                              style={{
                                top:
                                  // @ts-ignore No need to check
                                  menuLinksContainerRef.current?.getBoundingClientRect().bottom +
                                    1 || 0,
                              }}
                              className="z-[910] overflow-auto bg-light-gray pt-xs pb-s ml:absolute ml:left-1/2 ml:max-h-[85vh] ml:max-w-[100vw] ml:-translate-x-1/2 ml:rounded-b-[12px] ml:bg-white"
                            >
                              {renderMegaMenu(menuItem.fields.children)}
                            </div>
                          )}
                        </React.Fragment>
                      );
                    }
                    return <React.Fragment key={menuItem.id}></React.Fragment>;
                  })}
                  {isMobile && (
                    <>
                      {renderMyProjectsLink()}
                      {/* We've set -1 as the index of the help and support menu as it is the part of the utility bar not the main menu. We've rendered help and support item here just to support mobile design  */}
                      <li
                        className="flex cursor-pointer items-center justify-between px-s text-body"
                        onClick={() => updateSelectedMenuLinks(-1)}
                      >
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between py-s">
                            <Text
                              tag="span"
                              field={fields.helpAndSupportUtilityNav?.fields.navigationGroupTitle}
                            />
                            <SvgIcon
                              className={classNames(
                                'transition ease-linear',
                                selectedMenuLinks.includes(-1) && 'rotate-180'
                              )}
                              icon="caret"
                              size="16"
                            />
                          </div>
                          {selectedMenuLinks.includes(-1) && (
                            <div className="z-[910] -mx-s flex flex-col bg-light-gray px-s pt-xs">
                              {fields?.helpAndSupportUtilityNav?.children.map(
                                (
                                  item: Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.NavigationLink,
                                  index: number
                                ) => (
                                  <React.Fragment key={index}>
                                    <LinkWrapper
                                      ctaSection="mobile"
                                      className="mb-s text-body !no-underline"
                                      field={{ ...item?.fields?.link }}
                                      ariaLabel={{ value: item?.fields?.linkTitle.value as string }}
                                    >
                                      {item?.fields?.linkTitle.value}
                                    </LinkWrapper>
                                  </React.Fragment>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            {/* Consultation CTA */}
            <div className="group fixed bottom-0 z-[910] col-span-12 flex w-full items-center justify-center bg-primary py-s hover:cursor-pointer ml:static ml:z-0 ml:col-span-2 ml:!col-start-11">
              <LinkWrapper
                ctaSection={getSectionType('header')}
                className="relative flex w-fit items-center justify-center text-sm font-bold leading-4 !no-underline after:absolute after:bottom-[-4px] after:hidden after:h-[3px] after:w-full after:bg-secondary group-hover:after:inline-block ml:leading-[22px]"
                field={{ ...fields.cta1Link.value }}
                modalId={(fields.cta1Modal?.fields.modalId as Field<string>)?.value}
                modalLinkText={fields.cta1ModalLinkText}
                ariaLabel={{ value: fields?.cta1AriaLabel.value || 'Consultation CTA' }}
              >
                <SvgIcon className="ml-[6px]" icon="arrow" size="sm" />
              </LinkWrapper>
            </div>
            {/* Overlay */}
            {!isMobile &&
              ((selectedMenuLinks.length === 1 && !selectedMenuLinks.includes(-1)) ||
                isFlyoutVisible) && (
                <div
                  style={{
                    top: flyOutAndOverlayTop,
                  }}
                  className="fixed left-0 z-[900] h-screen w-screen bg-black opacity-20"
                ></div>
              )}
          </>
        )}
      </>
    );
  };

  const renderStandaloneSearchbox = () => {
    if (!coveoAccessToken) {
      return <></>;
    }
    return (
      <StandaloneSearchBox
        {...({
          ...fields.globalSearchBox?.fields,
          coveoAccessToken: coveoAccessToken,
        } as StandaloneSearchBoxProps)}
      />
    );
  };
  //#endregion

  return (
    <Component
      variant="lg"
      padding={isMobile ? 'px-0' : 'px-m'}
      gap="gap-x-0"
      sectionWrapperClasses={classNames(
        'rba-header-container z-[1000]',
        isMobile && isHeaderSticky ? 'sticky top-0' : '',
        'ml:border-b ml:border-gray bg-white',
        isMobile && isMobileMenuExpanded && 'h-screen overflow-y-auto pb-[48px]'
      )}
      dataComponent="site/rbaheader"
      {...props}
      fields={{
        componentSpacing: {
          fields: {
            Value: {
              value: 'none',
            },
          },
        },
      }}
    >
      {renderUtilityNav()}
      {renderMainNav()}
      <div
        ref={flyoutRef}
        className={classNames(
          'rba-scrollbar bg-white-scrollbar fixed top-0 left-0 z-[998] h-screen w-full origin-left transform overflow-y-auto bg-light-gray transition-transform ease-linear ml:w-[360px]',
          isFlyoutVisible
            ? 'translate-x-0 scale-x-100 shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'
            : '-translate-x-full'
        )}
        style={{
          top: flyOutAndOverlayTop + (isMobile ? 4 : 0),
        }}
      >
        {isFlyoutVisible && <Flyout noAffiliateMessage={fields.noAffiliateServedMessage} />}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<RbAHeaderProps>(RbAHeader);
