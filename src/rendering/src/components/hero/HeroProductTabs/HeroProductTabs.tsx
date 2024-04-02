// Global
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import {
  Placeholder,
  withDatasourceCheck,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { HeroProductTabsTheme } from './HeroProductTabs.theme';
import { Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import classNames from 'classnames';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { useCurrentScreenType } from 'lib/utils/get-screen-type';

export type HeroProductTabsProps =
  Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroProductTabs.HeroProductTabs;
const HeroProductTabs = (props: HeroProductTabsProps) => {
  const { fields } = props;
  resetIdCounter();
  const slidesToShow = 2;
  const initialSlide = 0;
  const numberOfTabs = props.fields?.children.length;

  const componentRef = useRef<HTMLDivElement>(null);
  const getHashAnchor = (): number => {
    let hashedTabIndex = -1;
    if (typeof window !== 'undefined' && window.location.hash !== '') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      hashedTabIndex = props.fields?.children.findIndex((child: HeroProductTabsProps) => {
        const childId = child.id.toLowerCase();
        const contentId = child.fields?.contentId?.value?.toLowerCase();
        return childId === hash || contentId === hash;
      });
    }
    return hashedTabIndex;
  };

  let defaultTab = 0;

  useEffect(() => {
    const handleTabChange = () => {
      const hash = window.location.hash.replace('#', '');
      const hashedTab = getHashAnchor();
      if (hashedTab > -1) {
        setTabIndex(hashedTab);
      } else if (!!props.fields?.defaultActiveTab) {
        const defaultTabIndex = props.fields?.children.findIndex((child: HeroProductTabsProps) => {
          return hash === child.id;
        });
        setTabIndex(defaultTabIndex > 0 ? defaultTabIndex : defaultTab);
      }
    };

    const handleWindowResize = () => {
      // Set specific height of slick-track so tabs can fill height based on other tabs content
      document.querySelectorAll<HTMLElement>('.heroproducttabs .slick-track').forEach((track) => {
        track.style.height = track.offsetHeight.toString() + 'px';
      });
    };

    const handleScrollToTab = () => {
      if (getHashAnchor() > -1 && componentRef.current) {
        componentRef.current.scrollIntoView();
      }
    };

    const hash = router && router.asPath.split('#')[1];
    let defaultTab = 0;
    const hashedTab = getHashAnchor();
    if (hashedTab > -1) {
      defaultTab = hashedTab;
    } else if (!!props.fields?.defaultActiveTab) {
      const defaultTabIndex = props.fields?.children.findIndex(() => {
        return hash === props.fields?.defaultActiveTab?.id;
      });
      defaultTab = defaultTabIndex > 0 ? defaultTabIndex : defaultTab;
    }

    setTabIndex(defaultTab);
    handleTabChange();

    window.addEventListener('hashchange', handleTabChange);
    window.addEventListener('resize', handleWindowResize);

    handleScrollToTab();

    return () => {
      window.removeEventListener('hashchange', handleTabChange);
      window.removeEventListener('resize', handleWindowResize);
    };
    // "props.fields?.children" and "props.fields?.defaultActiveTab" are coming from layout.
    // "getHashAnchor" is a function which is not going to change.
    // "router" is not required as dependency as we only need this code block to be executed only on first render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [tabIndex, setTabIndex] = useState(0);

  const router = useRouter();

  const { screenType } = useCurrentScreenType();

  const handleAfterChange = (index: number) => {
    const fadeDiv0 = document.querySelector('.fade-div-0');
    const fadeDiv3 = document.querySelector('.fade-div-3');
    if (fadeDiv0 && fadeDiv3 && index === 1 && (screenType === 'md' || screenType === 'sm')) {
      fadeDiv0.classList.remove('hidden');
      fadeDiv0.classList.add('block');
      fadeDiv3.classList.add('hidden');
    }
    if (fadeDiv3 && fadeDiv0 && index == 0 && (screenType === 'md' || screenType === 'sm')) {
      fadeDiv3.classList.remove('hidden');
      fadeDiv3.classList.add('block');
      fadeDiv0.classList.add('hidden');
    }
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    initialSlide: initialSlide,
    slidesToShow: numberOfTabs > slidesToShow ? slidesToShow : 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    className: 'heroproducttabs',
    swipeToSlide: true,
    afterChange: handleAfterChange,
  };

  const TabHeading = ({ onClick, children, index }: HeroProductTabsProps) => {
    return (
      <div
        className={classNames(
          themeData.classes.tabs.commonTabHeadingClass,
          index === tabIndex
            ? themeData.classes.tabs.selectedTabHeadingClass
            : themeData.classes.tabs.unselectedTabHeadingClass
        )}
        onClick={onClick}
        role="tab"
      >
        {children}
      </div>
    );
  };
  TabHeading.tabsRole = 'Tab';

  const { themeName, themeData } = useTheme(HeroProductTabsTheme(screenType ?? 'sm', numberOfTabs));

  const isStickyTabonPage = fields?.sticky.value;

  useEffect(() => {
    const handleCTAClick = (event: MouseEvent) => {
      const target = event.target as Element;

      if (target && target.tagName === 'A' && target.getAttribute('href')?.includes('#')) {
        // determine if path given resides on the page
        const currPathname = window.location.pathname;
        const targetPathname = target.getAttribute('href')?.split('#')[0];

        if (currPathname === targetPathname || targetPathname === '') {
          event.preventDefault();

          const currentURL = window.location.href;
          const hash = target.getAttribute('href')?.split('#')[1];
          const newURL = currentURL.split('#')[0] + '#' + hash;

          window.location.assign(newURL);

          // eslint-disable-next-line react-hooks/exhaustive-deps
          defaultTab = 0;
          const hashedTab = getHashAnchor();
          if (hashedTab > -1) {
            defaultTab = hashedTab;
          } else if (!!props.fields?.defaultActiveTab) {
            const defaultTabIndex = props.fields?.children.findIndex(() => {
              return hash === props.fields?.defaultActiveTab?.id;
            });
            defaultTab = defaultTabIndex > 0 ? defaultTabIndex : defaultTab;
          }
          setTabIndex(defaultTab);
        }
      }
    };

    if (router) {
      const getRAQurl = router.asPath;
      const fragmentIndex = getRAQurl.indexOf('#'); // Get the index of the "#" character
      const fragment = fragmentIndex !== -1 ? getRAQurl.substring(fragmentIndex) : ''; // Extract the fragment if present

      if (fragment == '#request_a_quote') {
        setTabIndex(1);
      }
    }
    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleCTAClick);
    };
  }, []);

  const stickyTabClass = (theme: string) => {
    if (!isStickyTabonPage) {
      return '';
    }

    return `sticky ${theme === 'aw' ? 'top-[55px]' : 'top-0'} ml:top-[122px]`;
  };

  if (!fields) {
    return null;
  }
  return (
    <Component padding={'0'} variant="full" dataComponent="hero/heroproducttabs" {...props}>
      <div className=" col-span-12" ref={componentRef}>
        <input type="hidden" value="brianc"></input>
        <Tabs selectedIndex={tabIndex} onSelect={(index: number) => setTabIndex(index)}>
          {/* Added z-index from 70 to 19 it was conflicts with search popup modal on desktop view */}
          <div
            className={`heroproducttabs-wrapper z-[19] w-full border-b border-b-gray bg-white ${stickyTabClass(
              themeName
            )}`}
            role="tablist"
          >
            <div className="flex w-full flex-col items-center justify-between ml:flex-row ml:px-m lg:mx-auto lg:max-w-screen-lg">
              <div className="mr-s w-full ml:w-fit">
                <RichText
                  tag={'h1'}
                  className={themeData.classes.productHeadlineClass}
                  field={fields.headline}
                />
              </div>
              <div className="ml-auto w-full max-ml:border-t max-ml:border-t-gray ml:w-fit">
                <TabList>
                  {screenType === 'sm' ? (
                    <SliderWrapper sliderSettings={sliderSettings}>
                      {props.fields.children.map((tab: HeroProductTabsProps, index: number) => {
                        const tabId = `react-tabs-${index}`;
                        const ariaLabelledby = `${tabId}-label`;
                        return (
                          <TabHeading
                            key={index}
                            index={index}
                            onClick={() => {
                              setTabIndex(index);
                              window.location.hash =
                                tab.fields?.contentId?.value !== ''
                                  ? tab.fields?.contentId?.value
                                  : tab.id;
                            }}
                            aria-labelledby={ariaLabelledby}
                            role="tab"
                          >
                            <Text
                              tag={'h3'}
                              className={classNames(
                                themeData.classes.tabs.headlineClass,
                                index === tabIndex
                                  ? themeData.classes.tabs.selectedHeadlineClass
                                  : ''
                              )}
                              field={tab.fields.title}
                            />
                            {numberOfTabs > 3 && (index === 0 || index === 3) && (
                              <div
                                className={classNames(
                                  'absolute left-0 top-0 h-full w-full content-[""]',
                                  index === 3 && tabIndex === 0 ? 'block' : 'hidden',
                                  'fade-div-' + index
                                )}
                                style={{
                                  background:
                                    'linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)',
                                }}
                              ></div>
                            )}
                          </TabHeading>
                        );
                      })}
                    </SliderWrapper>
                  ) : (
                    <div className="flex flex-row">
                      {props.fields.children.map((tab: HeroProductTabsProps, index: number) => {
                        const tabId = `react-tabs-${index}`;
                        const ariaLabelledby = `${tabId}-label`;
                        return (
                          <TabHeading
                            key={index}
                            index={index}
                            onClick={() => {
                              setTabIndex(index);
                              window.location.hash =
                                tab.fields?.contentId?.value !== ''
                                  ? tab.fields?.contentId?.value
                                  : tab.id;
                            }}
                            aria-labelledby={ariaLabelledby}
                            role="tab"
                          >
                            <Text
                              tag={'h3'}
                              className={classNames(
                                themeData.classes.tabs.headlineClass,
                                index === tabIndex
                                  ? themeData.classes.tabs.selectedHeadlineClass
                                  : ''
                              )}
                              field={tab.fields.title}
                            />
                          </TabHeading>
                        );
                      })}
                    </div>
                  )}
                </TabList>
              </div>
            </div>
          </div>
          {props.fields.children.map((tab: HeroProductTabsProps, index: number) => {
            const tabId = `react-tabs-${index}`;
            const ariaLabelledby = `${tabId}-label`;
            return (
              <TabPanel forceRender={true} key={index} id={tabId} aria-labelledby={ariaLabelledby}>
                <Placeholder
                  name="components"
                  rendering={tab}
                  render={(tabs) =>
                    tabs.map((tab, index) => (
                      <div key={index} className={classNames('col-span-12')}>
                        {tab}
                      </div>
                    ))
                  }
                  favoriteProducts={props.favoriteProducts}
                />
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<HeroProductTabsProps>(HeroProductTabs);
