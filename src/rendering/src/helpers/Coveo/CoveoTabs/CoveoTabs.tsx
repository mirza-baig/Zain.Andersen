import { Tab as HeadlessTab, buildTab } from '@coveo/headless';
import classNames from 'classnames';
import { CoveoEngineContext } from 'lib/coveo';
import React, { useContext, useEffect, useRef } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { CoveoTab } from './CoveoTab';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useTheme } from 'lib/context/ThemeContext';
import { CoveoTabsTheme } from './CoveoTabs.theme';
import { getBreakpoint } from 'lib/utils/get-screen-type';

type CoveoTabsProps = {
  tabs: Feature.EnterpriseWeb.Enterprise.Elements.Search.Tab[];
};

export const CoveoTabs = (props: CoveoTabsProps): React.ReactElement => {
  // console.log('CoveoTabs', props);
  const { tabs } = props;
  const { themeData } = useTheme(CoveoTabsTheme);
  const engine = useContext(CoveoEngineContext);

  const tabControllers = useRef<Array<HeadlessTab | undefined>>();
  const tabsContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!engine) {
      return;
    }

    const buildTabControllers = (): Array<HeadlessTab> => {
      return tabs.map(
        (tabMetadata: Feature.EnterpriseWeb.Enterprise.Elements.Search.Tab, index: number) => {
          return buildTab(engine, {
            initialState: { isActive: index === 0 },
            options: {
              id: tabMetadata.fields.caption.value || '',
              expression: tabMetadata.fields.filterExpression.value || '',
            },
          });
        }
      );
    };

    tabs && tabs.length > 0 && (tabControllers.current = buildTabControllers() || undefined);
  }, [engine, tabs]);

  useEffect(() => {
    const handleHorizontalScroll = () => {
      const LEFT_ARROW_CLASS = '[&>li:first-child]:!flex';
      const RIGHT_ARROW_CLASS = '[&>li:last-child]:!flex';
      const ARROW_VISIBILITY_OFFSET = 24;

      const tabsListEl = tabsContainerRef.current;
      const bodyElmentRect = document.body.getBoundingClientRect();

      if (
        tabsListEl &&
        (tabsListEl.scrollWidth > bodyElmentRect.width ||
          tabsListEl.scrollWidth > getBreakpoint('md'))
      ) {
        tabsListEl.scrollLeft > ARROW_VISIBILITY_OFFSET
          ? !tabsListEl.classList.contains(LEFT_ARROW_CLASS) &&
            tabsListEl.classList.add(LEFT_ARROW_CLASS)
          : tabsListEl.classList.remove(LEFT_ARROW_CLASS);

        tabsListEl.offsetWidth >=
        tabsListEl.scrollWidth - (tabsListEl.scrollLeft + ARROW_VISIBILITY_OFFSET)
          ? tabsListEl.classList.remove(RIGHT_ARROW_CLASS)
          : !tabsListEl.classList.contains(RIGHT_ARROW_CLASS) &&
            tabsListEl.classList.add(RIGHT_ARROW_CLASS);
      }
    };

    // Determine the arrow states on first load
    handleHorizontalScroll();

    tabsContainerRef.current?.addEventListener('scroll', handleHorizontalScroll);
  }, []);

  if (!engine || !Array.isArray(tabControllers.current) || tabControllers.current?.length === 0) {
    return <></>;
  }

  return (
    <div className={themeData.classes.tabsContainer}>
      <ul ref={tabsContainerRef} className={themeData.classes.tabsList}>
        <li
          className={classNames(themeData.classes.arrows, themeData.classes.leftArrow)}
          onClick={() => tabsContainerRef.current?.scrollBy({ behavior: 'smooth', left: -100 })}
        >
          <SvgIcon
            className="absolute left-0 top-1/2 -translate-y-1/2"
            icon="arrow-left"
            size="lg"
          />
        </li>
        {tabControllers.current?.map((tab, index) => {
          return (
            <>
              <li
                className={classNames(
                  themeData.classes.tab,
                  tabControllers.current?.[index]?.state.isActive && themeData.classes.activeTab
                )}
                key={index}
              >
                {tab && (
                  <CoveoTab controller={tab} classes={themeData.classes}>
                    <span
                      className={classNames(
                        'h-full',
                        themeData.classes.tabButtonTextWrapper,
                        tabControllers.current?.[index]?.state.isActive &&
                          themeData.classes.activeTabButtonTextWrapper
                      )}
                    >
                      {tabs[index].fields.caption.value}
                    </span>
                  </CoveoTab>
                )}
              </li>
            </>
          );
        })}
        <li
          className={classNames(themeData.classes.arrows, themeData.classes.rightArrow)}
          onClick={() => tabsContainerRef.current?.scrollBy({ behavior: 'smooth', left: 100 })}
        >
          <SvgIcon
            className="absolute right-0 top-1/2 -translate-y-1/2"
            icon="arrow-right"
            size="lg"
          />
        </li>
      </ul>
    </div>
  );
};
