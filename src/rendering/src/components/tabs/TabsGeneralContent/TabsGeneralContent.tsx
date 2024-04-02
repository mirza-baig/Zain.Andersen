// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import {
  ComponentRendering,
  Placeholder,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useEffect, useState, useRef } from 'react';
import { Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import type { TabProps } from 'react-tabs';
import { useRouter } from 'next/router';

// Components
import { TabsGeneralContentTheme } from './TabsGeneralContent.theme';
import { Headline } from 'src/helpers/Headline';
import classNames from 'classnames';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { getEnum } from 'lib/utils';
import { hashCode } from 'src/helpers/Component/Component';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

type TabItemProps = Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsGeneralContent.TabItem &
  ComponentRendering;

type TabHeadingProps = {
  onClick: () => void;
  children: React.ReactNode | React.ReactNode[];
  index: number;
};

type TabLabelView = 'standard' | 'long';

export type TabsGeneralContentProps =
  Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsGeneralContent.TabsGeneralContent;
const TabsGeneralContent = (props: TabsGeneralContentProps): JSX.Element => {
  resetIdCounter();
  const tabLabelView = getEnum<TabLabelView>(props.fields?.tabLabelView) || 'standard';
  const numberOfTabs = props.fields?.children.length;
  const router = useRouter();

  const componentRef = useRef<HTMLDivElement>(null);
  const getHashAnchor = (): number => {
    let hashedTabIndex = -1;
    if (typeof window !== 'undefined' && window.location.hash !== '') {
      const hash = window.location.hash.replace('#', '');
      hashedTabIndex = props.fields?.children.findIndex(
        (
          child: Item &
            Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroProductTabs.HeroProductTabItem
        ) => {
          return (
            child.id.localeCompare(hash, undefined, { sensitivity: 'base' }) === 0 ||
            child.fields?.contentId?.value?.localeCompare(hash, undefined, {
              sensitivity: 'base',
            }) === 0
          );
        }
      );
    }
    return hashedTabIndex;
  };

  let defaultTab = 0;
  const hashedTab = getHashAnchor();
  if (hashedTab > -1) {
    defaultTab = hashedTab;
  } else if (!!props.fields?.defaultActiveTab) {
    const defaultTabIndex = props.fields?.children.findIndex((child: Item) => {
      return child.id === props.fields?.defaultActiveTab?.id;
    });
    defaultTab = defaultTabIndex > 0 ? defaultTabIndex : defaultTab;
  }

  const { screenType, currentScreenWidth } = useCurrentScreenType();

  useEffect(() => {
    if (getHashAnchor() > -1 && componentRef.current) {
      componentRef.current.scrollIntoView();
    }

    window.onpopstate = () => {
      const currentHash = getHashAnchor();
      if (currentHash > -1) {
        handleTabIndexChange(getHashAnchor());
      } else {
        router.push(window.location);
      }
    };

    // router is NextRouter module;
    // "getHashAnchor" and "handleTabIndexChange" are functions, so we can ignore react-hooks/exhaustive-deps warning for this suggested dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { themeData } = useTheme(
    TabsGeneralContentTheme(screenType ?? 'sm', numberOfTabs, tabLabelView)
  );

  let enoughTabsToScroll = false;
  let slidesToShow = 2;
  let initialSlide = 0;
  let isLongTabLabelView = false;
  if (screenType) {
    if (currentScreenWidth < getBreakpoint('md') && (numberOfTabs > 2 || tabLabelView === 'long')) {
      enoughTabsToScroll = true;
      if (tabLabelView === 'long') {
        slidesToShow = 1;
        initialSlide = defaultTab;
        isLongTabLabelView = true;
      } else {
        slidesToShow = 2;
      }
    } else if (
      currentScreenWidth >= getBreakpoint('md') &&
      currentScreenWidth < getBreakpoint('ml')
    ) {
      slidesToShow = 4;
    } else if (currentScreenWidth >= getBreakpoint('ml')) {
      slidesToShow = 6;
    }
    enoughTabsToScroll = numberOfTabs > slidesToShow ? true : false;
    initialSlide =
      defaultTab >= slidesToShow && !isLongTabLabelView
        ? defaultTab + 1 - slidesToShow
        : initialSlide;
  }

  const handleTabIndexChange = (index: number) => {
    setTabIndex(index);
    const tab = props.fields?.children[index];
    if (!!tab) {
      window.location.hash = tab.fields?.contentId?.value || tab.id;
    }
  };

  const handleSlideIndexChange = (index: number) => {
    if (isLongTabLabelView) {
      handleTabIndexChange(index);
    }
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    initialSlide: initialSlide,
    slidesToShow: numberOfTabs > slidesToShow ? slidesToShow : 2,
    slidesToScroll: 1,
    enableNumberedPagination: currentScreenWidth < getBreakpoint('md') && tabLabelView === 'long',
    dots: currentScreenWidth < getBreakpoint('md') && tabLabelView === 'long',
    numberedPaginationClasses: themeData.classes.numberedPaginationClass,
    nextArrowClasses: themeData.classes.nextArrowClass,
    prevArrowClasses: themeData.classes.prevArrowClass,
    arrows: enoughTabsToScroll,
    variableWidth: true,
    className: 'tabsgeneralcontent',
    afterIndexChange: handleSlideIndexChange,
  };

  const TabHeading = ({ onClick, children, index, ...tabProps }: TabHeadingProps) => {
    return (
      <div className={themeData.classes.tabs.outerTabHeadingClass}>
        <div
          className={classNames(
            themeData.classes.tabs.commonTabHeadingClass,
            index === tabIndex
              ? themeData.classes.tabs.selectedTabHeadingClass
              : themeData.classes.tabs.unselectedTabHeadingClass,
            index === props.fields.children.length - 1 ? themeData.classes.tabs.lastTab : ''
          )}
          onClick={onClick}
          onKeyDown={(e: { code: string }) => {
            if (e.code === 'Enter' || e.code === 'Space') {
              onClick();
            }
          }}
          tabIndex={0}
          id={(tabProps as TabProps)?.id || `react-tabs-${index}`}
        >
          {children}
        </div>
      </div>
    );
  };
  TabHeading.tabsRole = 'Tab';

  const [tabIndex, setTabIndex] = useState(defaultTab);

  return (
    <section
      data-component="tabs/tabsgeneralcontent"
      id={props.fields?.sectionId?.value || `id${hashCode(props.rendering?.dataSource)}`}
    >
      <div className={themeData.classes.componentClass} ref={componentRef}>
        <Headline classes={themeData.classes.headlineClass} defaultTag="h2" {...props} />
        {screenType && (
          <Tabs selectedIndex={tabIndex} onSelect={(index: number) => setTabIndex(index)}>
            <TabList className={themeData.classes.tabs.tabListClass}>
              <div role="tab">
                <SliderWrapper sliderSettings={sliderSettings}>
                  {props.fields?.children.map((tab: TabHeadingProps, index: number) => {
                    return (
                      <TabHeading
                        key={index}
                        index={index}
                        onClick={() => {
                          handleTabIndexChange(index);
                        }}
                      >
                        <Headline
                          useTag="h3"
                          classes={classNames(
                            themeData.classes.tabs.headlineClass,
                            index === tabIndex ? themeData.classes.tabs.selectedHeadlineClass : ''
                          )}
                          {...tab}
                        />
                      </TabHeading>
                    );
                  })}
                </SliderWrapper>
              </div>
            </TabList>
            {props.fields?.children.map((tab: TabItemProps, index: number) => {
              return (
                <TabPanel forceRender={true} key={index}>
                  <Placeholder
                    name="components"
                    rendering={tab}
                    forceUpdate={index == tabIndex}
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
        )}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<TabsGeneralContentProps>(TabsGeneralContent);
