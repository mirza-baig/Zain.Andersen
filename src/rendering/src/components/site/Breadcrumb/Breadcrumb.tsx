import { useState, useEffect, useRef, useMemo } from 'react';
import { useSitecoreContext, getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { useCurrentScreenType } from 'lib/utils/get-screen-type';
import { BreadcrumbTheme } from './Breadcrumb.theme';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import Head from 'next/head';

export type BreadcrumbItem = {
  name: string;
  href: string;
};
const publicUrl = getPublicUrl();

const Breadcrumb = () => {
  const { themeData } = useTheme(BreadcrumbTheme);
  const context = useSitecoreContext();
  const pageTitle = context && (context.sitecoreContext?.route?.fields?.pageTitle?.value as string);
  const breadcrumb = useMemo(
    () => (context && context.sitecoreContext?.breadcrumb) || [],
    [context]
  );

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isBreadcrumbNavOverflowing, setIsBreadcrumbNavOverflowing] = useState(false);

  const breadcrumbContainerRef = useRef<HTMLDivElement | null>(null);

  const { screenType } = useCurrentScreenType();
  const isDesktop = screenType !== 'sm' && screenType !== 'md' ? true : false;

  const handleScrollBreadcrumb = debounce(() => {
    if (breadcrumbContainerRef.current) {
      const container = breadcrumbContainerRef.current;
      const scrollLeft = container.scrollLeft;

      const beforeShadow = document.querySelector('.before-shadow') as HTMLDivElement;
      const afterShadow = document.querySelector('.after-shadow') as HTMLDivElement;
      if (scrollLeft > 0) {
        beforeShadow.style.opacity = '0.6';
      } else {
        beforeShadow.style.opacity = '0';
      }

      if (scrollLeft < container.scrollWidth - container.clientWidth) {
        afterShadow.style.opacity = '0.6';
      } else {
        afterShadow.style.opacity = '0';
      }
    }
  }, 100);

  useEffect(() => {
    const breadcrumbNav = document.querySelector('.breadcrumb-nav ol') as HTMLElement;

    const handleCollapse = () => {
      if (breadcrumb.length > 5 && isDesktop) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    const handleResize = () => {
      if (breadcrumbNav) {
        const breadcrumbNavWidth = breadcrumbNav.offsetWidth;
        const viewportWidth = window.innerWidth;

        // Compare the width of breadcrumbNav to the viewport width
        if (breadcrumbNavWidth > viewportWidth) {
          setIsBreadcrumbNavOverflowing(true);
        } else {
          setIsBreadcrumbNavOverflowing(false);
        }
      }
    };

    handleCollapse(); // Initial check for collapse

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breadcrumb, isDesktop]);

  useEffect(() => {
    const containerRef = breadcrumbContainerRef.current;

    if (!isCollapsed && !isDesktop && isBreadcrumbNavOverflowing && containerRef) {
      containerRef.addEventListener('scroll', handleScrollBreadcrumb);
    } else if (containerRef) {
      containerRef.removeEventListener('scroll', handleScrollBreadcrumb);
    }
    // Cleanup
    return () => {
      if (containerRef) {
        containerRef.removeEventListener('scroll', handleScrollBreadcrumb);
      }
    };
  }, [isCollapsed, isDesktop, isBreadcrumbNavOverflowing, handleScrollBreadcrumb]);
  const handleClick = () => {
    setIsCollapsed(false);
  };

  const breadcrumData = breadcrumb?.length > 0 && (breadcrumb.slice(1) as BreadcrumbItem[]);
  const currentItem = breadcrumData && breadcrumData.length > 0 && breadcrumData.pop();
  const previousItem = breadcrumData && breadcrumData.length > 0 && breadcrumData.pop();
  const firstItem = breadcrumb?.[0]?.name && breadcrumb[0]?.href && (
    <li key="home">
      <LinkWrapper
        field={{ href: breadcrumb[0].href, text: breadcrumb[0].name }}
        className="flex items-center text-black underline hover:font-heavy"
      >
        {currentItem && <SvgIcon icon="caret-right" className="pl-xxxs" />}
      </LinkWrapper>
    </li>
  );

  const collapsedItems = (
    <>
      {firstItem}
      <li className="pl-xxxs">
        <span className="flex cursor-pointer items-center">
          ...
          <SvgIcon icon="caret-right" className="pl-xxxs" />
        </span>
      </li>
      {previousItem && previousItem.name && (
        <li className="px-xxxs">
          <LinkWrapper
            field={{
              href: previousItem.href,
              text: previousItem.name,
            }}
            className="flex items-center text-black hover:font-heavy"
          >
            <SvgIcon icon="caret-right" className="pl-xxxs" />
          </LinkWrapper>
        </li>
      )}

      {currentItem && (
        <li className="px-xxxs text-black">{currentItem.name ? currentItem.name : pageTitle}</li>
      )}
    </>
  );

  const listItems =
    breadcrumData &&
    breadcrumData.length > 0 &&
    breadcrumData.map(
      (item, index) =>
        item.name && (
          <li key={index} className="px-xxxs">
            <LinkWrapper
              field={{
                href: item.href,
                text: item.name,
              }}
              className="flex items-center text-black underline hover:font-heavy"
            >
              <SvgIcon icon="caret-right" className="pl-xxxs" />
            </LinkWrapper>
          </li>
        )
    );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb?.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${publicUrl}${item.href === '/' ? '' : item.href}`,
    })),
  };

  useEffect(() => {
    const scrollBreadcrumb = document.getElementById('scrollBreadcrumb');
    setTimeout(function () {
      if (scrollBreadcrumb) {
        scrollBreadcrumb.scrollLeft = scrollBreadcrumb?.scrollWidth;
      }
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {breadcrumb && breadcrumb.length > 1 && (
        <div
          className={classNames(
            themeData.classes.breadcrumbMargin,
            'mt-m px-m md:max-w-screen-xl ml:mb-0 ml:mt-8 ml:px-l lg:mx-auto'
          )}
          id="breadcrumb"
        >
          <div className={themeData.classes.breadcrumbContainer}>
            {isBreadcrumbNavOverflowing && (
              <span
                className={`before-shadow pointer-events-none absolute left-[-9px] top-0 z-[1] h-full w-5 opacity-0 transition-opacity duration-[0.3s] ease-[ease-in-out] content-[""] ${
                  isDesktop ? ' hidden' : ''
                }`}
              ></span>
            )}
            <nav className="breadcrumb-nav" aria-label="breadcrumb">
              <div
                className="relative flex overflow-x-auto whitespace-nowrap pb-[10px]"
                ref={breadcrumbContainerRef}
              >
                {isCollapsed && isDesktop ? (
                  <ol className="flex " onClick={handleClick}>
                    {collapsedItems}
                  </ol>
                ) : (
                  <ol id="scrollBreadcrumb" className="flex overflow-x-auto pb-[10px]">
                    {currentItem && firstItem}
                    {listItems}
                    {previousItem && previousItem.name && (
                      <li className="px-xxxs">
                        <LinkWrapper
                          field={{
                            href: previousItem.href,
                            text: previousItem.name,
                          }}
                          className="flex items-center text-black underline hover:font-heavy"
                        >
                          <SvgIcon icon="caret-right" className="pl-xxxs" />
                        </LinkWrapper>
                      </li>
                    )}

                    {currentItem && (
                      <li className="px-xxxs text-black">
                        {currentItem?.name ? currentItem.name : pageTitle}
                      </li>
                    )}
                  </ol>
                )}
              </div>
            </nav>
            {isBreadcrumbNavOverflowing && (
              <span
                className={`after-shadow pointer-events-none absolute right-0 top-0 z-[1] h-full w-5 transition-opacity duration-[0.3s] ease-[ease-in-out] content-[""]
                ${isDesktop ? ' hidden' : ''}`}
              ></span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Breadcrumb;
