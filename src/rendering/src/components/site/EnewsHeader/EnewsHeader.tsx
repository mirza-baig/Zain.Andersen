// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import classNames from 'classnames';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useEffect, useRef, useState } from 'react';
import { StandaloneSearchBox } from 'src/helpers/Coveo';
import { currentAccessToken } from 'lib/coveo';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { Flyout } from 'src/helpers/Flyout/Flyout';
import { useFlyoutStore } from 'src/helpers/Flyout/flyout.store';
import { getCookie } from 'lib/utils/client-storage-utils';

const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';

export type EnewsHeaderProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.EnewsHeader;

interface NavbarLinksProps {
  item: EnewsHeaderProps;
}

const EnewsHeader = (props: EnewsHeaderProps) => {
  const { fields } = props;

  const { userAffiliate } = useAffiliate();
  const { currentScreenWidth } = useCurrentScreenType();
  const { isFlyoutVisible, setFlyoutVisibility, currentZip, setCurrentZip } = useFlyoutStore();

  const [coveoAccessToken, setCoveoAccessToken] = useState<string>();
  const [flyOutAndOverlayTop, setFlyOutAndOverlayTop] = useState(0);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const searchIconRef = useRef<HTMLDivElement | null>(null);
  const MobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobSearchBoxRef = useRef<HTMLDivElement | null>(null);
  const utilityNavRef = useRef<HTMLDivElement | null>(null);
  const mainMenuRef = useRef<HTMLDivElement | null>(null);
  const flyoutRef = useRef<HTMLDivElement | null>(null);

  const navigationItems = fields.children;
  const isMobile = currentScreenWidth < getBreakpoint('ml');

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
    // We only want to run this useEffect on initial load only, and we don't what to re-render for 'handleOutsideClick' and 'setCurrentZip' changes, that's why excluded them from the dependency array here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFlyOutAndOverlayTop(getFlyoutTopCoordinates());

    document.body.style.overflowY =
      isFlyoutVisible || (isMobile && showMobileMenu) ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflowY = 'auto';
    };
    // As we don't what to re-render for 'getFlyoutTopCoordinates' and 'isMobile' changes, that's why excluded them from the dependency array here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlyoutVisible, showMobileMenu, currentZip]);

  const handleOutsideClick = (event: MouseEvent) => {
    // Initially isMobile will always be true as screen width will be 0.
    // As this function's execution context gets the initial values of the code so isMobile will always 0.
    // Due to this we've used window object to determine screen width.

    const target = event.target as Node | null;
    if (window && window.innerWidth > getBreakpoint('ml')) {
      if (flyoutRef.current?.contains(target) || utilityNavRef.current?.contains(target)) {
        return;
      }

      setFlyoutVisibility(false);
    }
  };

  const getFlyoutTopCoordinates = (): number => {
    return isMobile
      ? utilityNavRef.current
        ? (utilityNavRef.current?.getBoundingClientRect().bottom > 0 &&
            utilityNavRef.current?.getBoundingClientRect().bottom) ||
          0
        : 0
      : mainMenuRef.current
      ? (mainMenuRef.current?.getBoundingClientRect().bottom > 0 &&
          mainMenuRef.current?.getBoundingClientRect().bottom) ||
        0
      : 0;
  };

  if (!fields) {
    return <></>;
  }

  const NavbarLinks = ({ item }: NavbarLinksProps) => {
    const renderNavbarMenu = (children: EnewsHeaderProps) => {
      if (!children || children.length === 0) {
        return null;
      }

      return (
        <ul className="absolute right-0 top-[53px] block w-[200px] border border-solid border-gray bg-white p-s shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)] transition-transform duration-300">
          {children.map(
            (childItem: EnewsHeaderProps, index: number) =>
              childItem &&
              childItem.fields.link.value.href &&
              childItem.fields.linkTitle.value && (
                <li key={childItem.id}>
                  <LinkWrapper
                    ctaSection="header"
                    field={{
                      href: childItem.fields.link.value.href,
                      text: childItem.fields.linkTitle.value,
                    }}
                    className={classNames(
                      'flex items-center text-body',
                      index == item.fields.children.length - 1 ? 'pb-0' : 'pb-s'
                    )}
                    ariaLabel={{ value: childItem.fields.linkTitle.value || 'header Navbar Links' }}
                  />
                  {childItem.fields &&
                    childItem.fields.children &&
                    renderNavbarMenu(childItem.fields.children)}
                </li>
              )
          )}
        </ul>
      );
    };

    if (item.fields && item.fields.children && item.fields.children.length > 0) {
      return (
        <li key={item.id} className="relative mr-8">
          <div
            className="flex w-auto items-center justify-end border-b-[3px] border-solid border-b-white text-body  font-bold hover:border-b-primary"
            aria-haspopup="true"
            role="button"
          >
            <span>{item.fields.navigationGroupTitle.value}</span>
            <SvgIcon
              icon="arrow-drop-down"
              className={classNames('ml-xxs w-xs transition-transform duration-300')}
            />
          </div>
          {renderNavbarMenu(item.fields.children)}
        </li>
      );
    } else {
      return (
        <li key={item.id} className="relative mr-8">
          <div className=" flex w-auto cursor-pointer items-center justify-end border-b-[3px] border-solid border-b-white text-body  font-bold hover:border-b-primary">
            <LinkWrapper
              ctaSection="header"
              field={{
                href: item.fields.link.value.href,
                text: item.fields.linkTitle.value,
              }}
              className=" hover:no-underline"
              ariaLabel={{ value: item.fields.linkTitle.value || 'header Navbar Links' }}
            />
          </div>
        </li>
      );
    }
  };

  const renderUtilityNav = () => {
    return (
      <div
        ref={utilityNavRef}
        className="z-10 col-span-12 mx-[calc(50%-50vw)] !h-[47px] bg-black py-xxs ml:mt-0 ml:mb-0 ml:py-0"
      >
        <div className="mx-auto flex h-full items-center justify-between px-[27px] text-white ml:max-w-screen-lg">
          <ul
            className="flex w-full cursor-pointer items-center py-xxxs pr-[5px] ml:w-fit lg:py-m"
            onClick={() => setFlyoutVisibility(true)}
            onKeyDown={(e) => e.key === 'Enter' && setFlyoutVisibility(true)}
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
              <div className="flex items-center text-legal leading-4">
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
                  <div className="flex items-center text-legal leading-4">
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
                {userAffiliate.administrativeOfficePhoneNumber && (
                  <li className="flex cursor-pointer items-center">
                    <SvgIcon className="mr-xxxs " icon="phone" size="lg" />
                    <LinkWrapper
                      ctaSection="header"
                      className="text-small"
                      field={{
                        href: `tel: ${userAffiliate.administrativeOfficePhoneNumber}`,
                        text: userAffiliate.administrativeOfficePhoneNumber,
                      }}
                      ariaLabel={{ value: 'Administrative Office Phone Number' }}
                    />
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderStandaloneSearchbox = () => {
    if (!coveoAccessToken) {
      return <></>;
    }
    return (
      <StandaloneSearchBox
        redirectionUrl={props.fields?.globalSearchBox?.fields.redirectionUrl}
        showSuggestions={props.fields?.globalSearchBox?.fields.showSuggestions}
        numberOfSuggestions={props.fields?.globalSearchBox?.fields.numberOfSuggestions}
        queryPipeline={props.fields?.globalSearchBox?.fields.queryPipeline}
        searchHub={props.fields?.globalSearchBox?.fields.searchHub}
        filterExpression={props.fields?.globalSearchBox?.fields.filterExpression}
        boostingExpression={props.fields?.globalSearchBox?.fields.boostingExpression}
        suggestedResultsLabel={props.fields?.globalSearchBox?.fields.suggestedResultsLabel}
        placeholderText={props.fields?.globalSearchBox?.fields.placeholderText}
        coveoAccessToken={coveoAccessToken}
      />
    );
  };

  const MobileMenu = ({ fields }: EnewsHeaderProps) => {
    const handleMenuDisplay = () => {
      setShowMobileMenu(!showMobileMenu);
      setShowSearchBox(!showSearchBox);
    };

    const toggleDropdown = (dropdownId: string) => {
      setOpenDropdownId(dropdownId === openDropdownId ? null : dropdownId);
    };

    const renderMobileMenuItem = (item: EnewsHeaderProps) => {
      const hasChildren = item.fields && item.fields.children && item.fields.children.length > 0;
      const isOpen = item.id === openDropdownId;

      return (
        <li key={item.id}>
          <div
            className={`items-center border-b  border-solid border-b-gray px-s py-[14px] ${
              showMobileMenu ? 'flex' : 'hidden '
            }`}
            onClick={() => toggleDropdown(item.id)}
          >
            {hasChildren ? (
              <div className="flex w-full cursor-pointer items-center justify-between font-sans text-sm-s font-extra-light">
                <span>{item.fields.navigationGroupTitle.value}</span>
                <SvgIcon
                  icon="caret"
                  className={classNames(
                    'ml-xxs transition-transform duration-300',
                    isOpen ? ' rotate-180' : ''
                  )}
                />
              </div>
            ) : (
              <LinkWrapper
                ctaSection="header"
                field={{
                  href: item.fields.link.value.href,
                  text: item.fields.linkTitle.value,
                }}
                className="flex items-center font-sans text-sm-s font-extra-light"
                ariaLabel={{ value: item.fields.linkTitle.value || 'Navigation Group Title' }}
              />
            )}
          </div>
          {hasChildren && (
            <ul
              className={classNames(
                'bg-light-gray py-s px-m transition-transform duration-300',
                isOpen ? '' : 'hidden'
              )}
            >
              {item.fields.children.map(
                (childItem: EnewsHeaderProps, index: number) =>
                  childItem &&
                  childItem.fields.link.value.href &&
                  childItem.fields.linkTitle.value && (
                    <li key={childItem.id}>
                      <LinkWrapper
                        ctaSection="header"
                        field={{
                          href: childItem.fields.link.value.href,
                          text: childItem.fields.linkTitle.value,
                        }}
                        className={classNames(
                          'flex items-center text-body font-regular',
                          index == item.fields.children.length - 1 ? 'pb-0' : 'pb-s'
                        )}
                        ariaLabel={{
                          value: childItem.fields.linkTitle.value || 'Navigation Group Title',
                        }}
                      />
                    </li>
                  )
              )}
            </ul>
          )}
        </li>
      );
    };

    const handleOutsideClickRbAHeaderM = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (MobileMenuRef.current && !MobileMenuRef.current.contains(target)) {
        if (searchIconRef.current && searchIconRef.current.contains(target)) {
          setShowSearchBox(!showSearchBox);
        } else {
          if (mobSearchBoxRef.current && mobSearchBoxRef.current.contains(target)) {
            setShowSearchBox(true);
          } else {
            setShowSearchBox(false);
          }
        }
      } else {
        if (mobSearchBoxRef.current && mobSearchBoxRef.current.contains(target)) {
          setShowSearchBox(true);
        } else {
          setShowSearchBox((prevState) => !prevState);
        }
      }
    };

    useEffect(() => {
      (async () => {
        const _coveoAccessToken = await currentAccessToken(organizationId);

        setCoveoAccessToken(_coveoAccessToken);
      })();
    }, []);

    useEffect(() => {
      document.addEventListener('click', handleOutsideClickRbAHeaderM);
      return () => {
        document.removeEventListener('click', handleOutsideClickRbAHeaderM);
      };
    }, []);

    return (
      <div className="flex w-full bg-white" ref={MobileMenuRef}>
        <div className="relative flex w-full flex-col ">
          <div className="flex min-h-[64px] w-full items-center justify-between border-b border-solid border-t-gray border-b-gray bg-white pl-s pr-[27px]">
            <div className="w-[140px]">
              <LinkWrapper
                ctaSection="header"
                field={fields.logoLink}
                suppressLinkText
                ariaLabel={{ value: 'nav logo link' }}
              >
                <ImageWrapper
                  image={fields.logo}
                  additionalDesktopClasses="aspect-auto max-w-[140px]"
                  additionalMobileClasses="aspect-auto max-w-[140px]"
                />
              </LinkWrapper>
            </div>

            <div className="flex items-center" ref={searchIconRef}>
              {userAffiliate.administrativeOfficePhoneNumber && (
                <LinkWrapper
                  ctaSection="header"
                  className="text-small"
                  field={{
                    href: `tel: ${userAffiliate.administrativeOfficePhoneNumber}`,
                  }}
                  ariaLabel={{
                    value: 'Administrative Office Phone Number',
                  }}
                >
                  <SvgIcon className="cursor-pointer" icon="phone" size="xxl" />
                </LinkWrapper>
              )}
              <div onClick={() => handleMenuDisplay()} className="ml-s">
                {showMobileMenu ? <SvgIcon icon="close" size="xl" /> : <SvgIcon icon="hamburger" />}
              </div>
            </div>
          </div>
          {showMobileMenu && (
            <ul className="absolute top-[64px] flex h-[85vh] w-full flex-col bg-white">
              {coveoAccessToken && (
                <div className="h-[64px] w-full bg-black  px-m py-xxxs" ref={mobSearchBoxRef}>
                  <StandaloneSearchBox
                    coveoAccessToken={coveoAccessToken}
                    redirectionUrl={fields?.globalSearchBox?.fields.redirectionUrl}
                    showSuggestions={fields?.globalSearchBox?.fields.showSuggestions}
                    numberOfSuggestions={fields?.globalSearchBox?.fields.numberOfSuggestions}
                    queryPipeline={fields?.globalSearchBox?.fields.queryPipeline}
                    searchHub={fields?.globalSearchBox?.fields.searchHub}
                    filterExpression={fields?.globalSearchBox?.fields.filterExpression}
                    boostingExpression={fields?.globalSearchBox?.fields.boostingExpression}
                    suggestedResultsLabel={fields?.globalSearchBox?.fields.suggestedResultsLabel}
                    placeholderText={fields?.globalSearchBox?.fields.placeholderText}
                    toggleSearchBoxVisibility={setShowSearchBox}
                  />
                </div>
              )}
              {navigationItems.map((item: EnewsHeaderProps) => renderMobileMenuItem(item))}
            </ul>
          )}
          {(!isMobile || (isMobile && showMobileMenu)) && (
            <>
              {/* Consultation CTA */}
              <div className="fixed bottom-0 z-[910] col-span-12 w-full ml:static ml:z-0 ml:col-span-2 ml:!col-start-11">
                <LinkWrapper
                  className="flex h-full w-full items-center justify-center bg-primary py-s text-sm font-bold leading-4 !no-underline ml:px-[20px] ml:leading-[22px]"
                  field={{ ...fields.cta1Link.value }}
                  modalId={(fields.cta1Modal?.fields.modalId as Field<string>)?.value}
                  modalLinkText={fields.cta1ModalLinkText}
                  ariaLabel={{
                    value: fields?.cta1AriaLabel || 'Consultation CTA',
                  }}
                >
                  <SvgIcon className="ml-[6px]" icon="arrow" size="sm" />
                </LinkWrapper>
              </div>

              {/* Overlay */}
              {!isMobile && (
                <div
                  style={{
                    top: flyOutAndOverlayTop,
                  }}
                  className="fixed left-0 z-[900] h-screen w-screen bg-black opacity-20"
                ></div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <Component
      sectionWrapperClasses="headerBottomPosElement z-[1000]"
      variant="full"
      gap="gap-x-0"
      padding="px-0"
      dataComponent="site/enewsheader"
      {...props}
    >
      {renderUtilityNav()}
      <div
        ref={mainMenuRef}
        className="z-[9] col-span-12 border-solid border-t-gray border-b-gray bg-white ml:border-b ml:border-t"
      >
        <div className="mx-auto ml:max-w-screen-lg ml:px-m">
          <nav className="ml:flex ml:w-full ml:flex-row ml:justify-between">
            <div className="flex h-[64px] flex-row items-center justify-start pl-[27px] ml:px-0">
              {/* RBA Logo */}
              <div className="z-10 -ml-s mr-[21px] min-w-[140px] ml:ml-0 ml:mr-m">
                <LinkWrapper
                  ctaSection="header"
                  field={fields.rbaLogoLink}
                  suppressLinkText
                  ariaLabel={{ value: 'RBA Logo' }}
                >
                  <ImageWrapper
                    image={fields.rbaLogo}
                    additionalDesktopClasses="aspect-auto w-[173px]"
                    additionalMobileClasses="aspect-auto w-[140px]"
                  />
                </LinkWrapper>
              </div>
              {/* At Home Logo */}
              <div className="z-10 min-w-[94px]">
                <LinkWrapper
                  ctaSection="header"
                  field={fields.atHomeLogoLink}
                  suppressLinkText
                  ariaLabel={{ value: 'At Home Logo' }}
                >
                  <ImageWrapper
                    image={fields.atHomeLogo}
                    additionalDesktopClasses="aspect-auto max-w-[140px]"
                    additionalMobileClasses="aspect-auto max-w-[140px]"
                  />
                </LinkWrapper>
              </div>
            </div>
            {/* Navigation Menu */}
            <div className="flex justify-end">
              <ul className="flex items-center max-ml:hidden">
                {navigationItems?.map((item: EnewsHeaderProps) => (
                  <NavbarLinks key={item.id} item={item} />
                ))}
                {fields?.cta1Link && (
                  <div className="inline-flex h-[64px] items-center bg-primary p-[19px]">
                    <LinkWrapper
                      ctaSection="header"
                      className="text-body font-bold hover:!no-underline"
                      field={fields?.cta1Link}
                      ariaLabel={{
                        value: fields?.cta1AriaLabel || 'Navigation Menu',
                      }}
                    />
                    <SvgIcon
                      icon="arrow"
                      fillId="white"
                      size="xl"
                      className={classNames('ml-xxs w-xs text-black')}
                    />
                  </div>
                )}
              </ul>
            </div>

            {/* Mobile Menu */}
            <div className="-mt-[64px] flex w-full ml:hidden">
              <MobileMenu fields={fields} />
            </div>
          </nav>
        </div>
      </div>
      <div
        ref={flyoutRef}
        className={classNames(
          'rba-scrollbar bg-white-scrollbar fixed top-0 left-0 z-[999] h-screen w-full origin-left transform overflow-y-auto bg-light-gray transition-transform ease-linear ml:w-[360px]',
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
      {!isMobile && isFlyoutVisible && (
        <div
          style={{
            top: flyOutAndOverlayTop,
          }}
          className="fixed left-0 z-[900] h-screen w-screen bg-black opacity-20"
        ></div>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<EnewsHeaderProps>(EnewsHeader);
