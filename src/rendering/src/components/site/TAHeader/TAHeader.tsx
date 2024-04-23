// Global
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
// Components
import { Component } from 'src/helpers/Component';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { StandaloneSearchBox } from 'src/helpers/Coveo';
import { currentAccessToken } from 'lib/coveo';
import { useScrollDirection } from 'lib/utils/use-scroll-direction';

// @TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';

export type TAHeaderProps = Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.TAHeader;

interface DropdownItemProps {
  item: TAHeaderProps;
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownItem = ({ item, isOpen, onToggle }: DropdownItemProps) => {
  const renderDropdownMenu = (children: TAHeaderProps) => {
    if (!children || children.length === 0) {
      return null;
    }

    return (
      <ul
        className={`absolute right-0 top-[53px] w-[200px] border border-solid border-gray bg-white p-s shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)] transition-transform duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {children.map(
          (childItem: TAHeaderProps, index: number) =>
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
                  ariaLabel={{
                    value: childItem.fields.linkTitle.value,
                  }}
                />
                {childItem.fields &&
                  childItem.fields.children &&
                  renderDropdownMenu(childItem.fields.children)}
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
          onClick={onToggle}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
          role="button"
        >
          <span>{item.fields.navigationGroupTitle.value}</span>
          <SvgIcon
            icon="arrow-drop-down"
            className={classNames(
              'ml-xxs w-[12px] transition-transform duration-300',
              isOpen && ' rotate-180'
            )}
          />
        </div>
        {renderDropdownMenu(item.fields.children)}
      </li>
    );
  } else {
    return (
      <li key={item.id} className="relative mr-8 ">
        <div className=" flex w-auto cursor-pointer items-center justify-end border-b-[3px] border-solid border-b-white text-body  font-bold hover:border-b-primary">
          <LinkWrapper
            ctaSection="header"
            field={{
              href: item.fields.link.value.href,
              text: item.fields.linkTitle.value,
            }}
            className=" hover:no-underline"
            ariaLabel={{
              value: item.fields.linkTitle.value,
            }}
          />
        </div>
      </li>
    );
  }
};

const MobileMenu = ({ fields }: TAHeaderProps) => {
  const navigationItems = fields.children;
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchIconRef = useRef<HTMLDivElement | null>(null);
  const MobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobSearchBoxRef = useRef<HTMLDivElement | null>(null);

  const handleMenuDisplay = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowSearchBox(false);
  };

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdownId(dropdownId === openDropdownId ? null : dropdownId);
  };

  const renderMobileMenuItem = (item: TAHeaderProps) => {
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
              className="flex items-center  font-sans text-sm-s font-extra-light "
              ariaLabel={{
                value: item.fields.linkTitle.value,
              }}
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
              (childItem: TAHeaderProps, index: number) =>
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
                        'flex items-center   text-body font-regular',
                        index == item.fields.children.length - 1 ? 'pb-0' : 'pb-s'
                      )}
                      ariaLabel={{
                        value: childItem.fields.linkTitle.value,
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
  const mobileMenuUlRef = useRef<HTMLUListElement>(null);

  const [coveoAccessToken, setCoveoAccessToken] = useState<string>();
  useEffect(() => {
    (async () => {
      const _coveoAccessToken = await currentAccessToken(organizationId);

      setCoveoAccessToken(_coveoAccessToken);
    })();
  }, []);

  useEffect(() => {
    const handleOutsideClickTAHeaderM = (event: MouseEvent) => {
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
        } else if (mobileMenuUlRef.current && mobileMenuUlRef.current.contains(target)) {
          setShowSearchBox(false);
        } else {
          setShowSearchBox((prevState) => !prevState);
        }
      }
    };
    document.addEventListener('click', handleOutsideClickTAHeaderM);
    return () => {
      document.removeEventListener('click', handleOutsideClickTAHeaderM);
    };
  }, [showSearchBox]);

  return (
    <div className="flex w-full bg-white" ref={MobileMenuRef}>
      <div className="relative flex w-full flex-col ">
        <div className="flex min-h-[64px] w-full items-center justify-between border-b border-solid border-t-gray border-b-gray bg-white px-s">
          <div className="w-[140px]">
            <LinkWrapper
              ctaSection="header"
              field={fields.logoLink}
              suppressLinkText
              ariaLabel={{
                value: fields?.logo?.value?.alt || 'Logo',
              }}
            >
              <ImageWrapper
                image={fields.logo}
                additionalDesktopClasses="aspect-auto max-w-[140px]"
                additionalMobileClasses="aspect-auto max-w-[140px]"
              />
            </LinkWrapper>
          </div>
          <div className="flex items-center" ref={searchIconRef}>
            <div
              className={classNames(
                'mr-xxxs flex h-l w-l cursor-pointer items-center rounded-[40px] transition-[fill]  duration-[0.2s]  ease-[cubic-bezier(0,0,0.58,1)]',
                showSearchBox ? ' bg-black [&_path]:fill-white' : 'bg-white',
                showMobileMenu ? 'hidden' : ''
              )}
            >
              <SvgIcon icon="search" size="xl" className="z-10 m-auto" />
            </div>
            <div onClick={() => handleMenuDisplay()} className="ml-s">
              {showMobileMenu ? <SvgIcon icon="close" size="xl" /> : <SvgIcon icon="hamburger" />}
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <ul className="absolute top-[64px] flex w-full flex-col bg-white" ref={mobileMenuUlRef}>
            {navigationItems.map((item: TAHeaderProps) => renderMobileMenuItem(item))}
          </ul>
        )}
        {showSearchBox && coveoAccessToken && (
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
      </div>
    </div>
  );
};

const TAHeader = (props: TAHeaderProps) => {
  const { fields } = props;
  const navigationItems = fields.children;

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef: MutableRefObject<HTMLUListElement | null> = useRef(null);

  const [isStickyTAHeader, setIsStickyTAHeader] = useState(true);

  const scrollDirection = useScrollDirection(0);

  const [coveoAccessToken, setCoveoAccessToken] = useState<string>();
  useEffect(() => {
    (async () => {
      const _coveoAccessToken = await currentAccessToken(organizationId);

      setCoveoAccessToken(_coveoAccessToken);
    })();
  }, []);

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdownId(dropdownId === openDropdownId ? null : dropdownId);
  };
  const handleOutsideClickTAHeader = (event: MouseEvent) => {
    const target = event.target as Node | null;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setOpenDropdownId(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDirection === 'UP') {
        setIsStickyTAHeader(true); // Make header sticky when scrolling up
        setOpenDropdownId(null); // Close any opened dropdown when scrolling up
      } else if (scrollDirection === 'DOWN') {
        setIsStickyTAHeader(false); // Remove the sticky class on downward scroll
      } else {
        setIsStickyTAHeader(true); // Reset to default state when at top or bottom
      }
    };

    document.addEventListener('click', handleOutsideClickTAHeader);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClickTAHeader);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isStickyTAHeader, scrollDirection]);

  props.fields.componentSpacing = { fields: { Value: { value: 'none' } } };
  return (
    <Component
      // wrapping header component with 'headerBottomPosElement' class to adjust sliding modals
      sectionWrapperClasses={classNames(
        'headerBottomPosElement bg-white w-full transition-all ease-out',
        isStickyTAHeader ? 'sticky duration-0 top-0' : 'fixed -top-[131px] duration-500',
        openDropdownId ? 'z-[1004]' : 'z-[999] ml:z-[1001]' // z-index for the open dropdown should be higher
      )}
      variant="full"
      gap="gap-x-0"
      padding="px-0"
      dataComponent="site/taheader"
      {...props}
    >
      <div className="z-[999] col-span-12 border-solid border-t-gray border-b-gray bg-white ml:border-b ml:border-t">
        <div className="mx-auto ml:max-w-screen-lg ml:px-m">
          <nav className="flex w-full flex-row items-center justify-between ml:h-[80px]">
            <div className="min-w-[140px] max-ml:hidden">
              <LinkWrapper
                ctaSection="header"
                field={fields.logoLink}
                suppressLinkText
                ariaLabel={{
                  value: fields?.logo?.value?.alt || 'Logo',
                }}
              >
                <ImageWrapper
                  image={fields.logo}
                  additionalDesktopClasses="aspect-auto max-w-[140px]"
                  additionalMobileClasses="aspect-auto max-w-[140px]"
                />
              </LinkWrapper>
            </div>
            <div className="flex max-ml:w-full">
              <ul className="flex items-center max-ml:hidden" ref={dropdownRef}>
                {navigationItems.map((item: TAHeaderProps) => (
                  <DropdownItem
                    key={item.id}
                    item={item}
                    isOpen={item.id === openDropdownId}
                    onToggle={() => toggleDropdown(item.id)}
                  />
                ))}
              </ul>
              {coveoAccessToken && (
                <div className="rba-ta-searchbox relative ml-xxs min-w-[212px] max-ml:hidden">
                  <StandaloneSearchBox
                    coveoAccessToken={coveoAccessToken}
                    redirectionUrl={props.fields?.globalSearchBox?.fields.redirectionUrl}
                    showSuggestions={props.fields?.globalSearchBox?.fields.showSuggestions}
                    numberOfSuggestions={props.fields?.globalSearchBox?.fields.numberOfSuggestions}
                    queryPipeline={props.fields?.globalSearchBox?.fields.queryPipeline}
                    searchHub={props.fields?.globalSearchBox?.fields.searchHub}
                    filterExpression={props.fields?.globalSearchBox?.fields.filterExpression}
                    boostingExpression={props.fields?.globalSearchBox?.fields.boostingExpression}
                    suggestedResultsLabel={
                      props.fields?.globalSearchBox?.fields.suggestedResultsLabel
                    }
                    placeholderText={props.fields?.globalSearchBox?.fields.placeholderText}
                  />
                </div>
              )}

              <div className="flex w-full ml:hidden">
                <MobileMenu fields={fields} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<TAHeaderProps>(TAHeader);
