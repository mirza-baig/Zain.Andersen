// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { Field, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { TabsFeaturedPromoTheme } from './TabsFeaturedPromo.theme';
import { ComponentProps } from 'lib/types/component-props';
import { Tabs } from 'src/helpers/Tabs';
import { Headline } from 'src/helpers/Headline';
import React, { useEffect, useRef, useState } from 'react';
import Promo from './Promo.helper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import classNames from 'classnames';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import ToggleSwitch from 'src/helpers/ToggleSwitch/ToggleSwitch';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { normalizeGuid } from 'lib/utils/string-utils';

type TabItemsProps = {
  fields: {
    children: Array<Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo>;
    headlineLevel: Item;
    headlineText: Field<string>;
  };
};

type TabCollectionsProps = {
  fields: {
    children: Array<
      Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo &
        TabItemsProps
    >;
  };
};

export type TabsFeaturedPromoProps =
  Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo &
    TabCollectionsProps &
    ComponentProps;

const TabsFeaturedPromo = (props: TabsFeaturedPromoProps) => {
  const { fields } = props;
  const { children } = fields || {};

  const { themeName, themeData } = useTheme(TabsFeaturedPromoTheme);
  const { currentScreenWidth } = useCurrentScreenType();

  const titlesScroller = useRef<HTMLDivElement>(null);

  //#region initial states and data of tabs

  // ToggleSwitch
  const [activeSwitchIndex, setActiveSwitchIndex] = useState(0);
  //Sets visible tab group
  const [visiblePanelIndex, setVisiblePanelIndex] = useState(0);
  //Sets visible tab panel
  const [currentIndex, setCurrentIndex] = useState(-1);
  // Sets if hash should be updated
  const [shouldUpdateURL, setShouldUpdateURL] = useState(false);

  //#endregion

  useEffect(() => {
    const selectedId = window.location.hash;

    if (selectedId || fields?.defaultActiveTab) {
      for (let collectionIndex = 0; collectionIndex < children?.length; collectionIndex++) {
        let isMatchFound = false;
        for (
          let itemIndex = 0;
          itemIndex < children[collectionIndex].fields.children?.length;
          itemIndex++
        ) {
          if (selectedId) {
            const item = children[collectionIndex].fields.children[itemIndex];
            const idToCompare = item.fields.contentId.value || `tab-${normalizeGuid(item.id)}`;

            if (selectedId.split('#')[1] === idToCompare) {
              setActiveSwitchIndex(collectionIndex);
              setVisiblePanelIndex(collectionIndex);
              setCurrentIndex(itemIndex);
              isMatchFound = true;
              break;
            }
          } else if (
            children[collectionIndex].fields.children[itemIndex].fields.contentId.value ===
            (
              fields.defaultActiveTab as Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo
            )?.fields.contentId.value
          ) {
            setActiveSwitchIndex(collectionIndex);
            setVisiblePanelIndex(collectionIndex);
            setCurrentIndex(itemIndex);
            isMatchFound = true;
            break;
          }
        }
        if (isMatchFound) {
          break;
        }
      }
    } else {
      setCurrentIndex(0);
    }
    // "children" and "fields.defaultActiveTab" are the props coming from layout service. We can ignore this warning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get the tab title appear into view if the tabs are in scrollable section
  useEffect(() => {
    const selectedItem = fields?.children?.[visiblePanelIndex]?.fields.children[currentIndex];

    const selectedItemId =
      selectedItem?.fields?.contentId.value || `tab-${normalizeGuid(selectedItem?.id)}`;

    if (shouldUpdateURL && currentIndex >= 0) {
      history.pushState(history.state, window.location.href, `#${selectedItemId}`);
      setShouldUpdateURL(false);
    }

    if (titlesScroller.current && currentScreenWidth <= getBreakpoint('ml')) {
      // We're using ref of the parent node of the titles in order to avoid bugs which can occur
      // if this component is authored multiple times in single page
      titlesScroller.current
        .querySelector(`[id='tab-${selectedItemId}']`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    // "fields.children" can be ignored as it is coming from layout service. We can ignore this warning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visiblePanelIndex, currentIndex, shouldUpdateURL, currentScreenWidth]);

  const getSwitchTitles = (): string[] => {
    const switchTitles = ['', ''];

    children.forEach(
      (
        collection: Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo,
        index: number
      ) => {
        switchTitles[index] = (collection?.fields?.mobileToggleTitle as Field<string>).value;
      }
    );

    return switchTitles;
  };

  const selectTab = (itemIndex: number, collectionIndex: number) => {
    setShouldUpdateURL(true);
    setCurrentIndex(itemIndex);
    setVisiblePanelIndex(collectionIndex);
  };

  const renderToggleSwitch = () => {
    if (currentScreenWidth <= getBreakpoint('ml')) {
      return (
        <ToggleSwitch
          switchTitles={getSwitchTitles()}
          activeSwitchIndex={activeSwitchIndex}
          toggleActiveSwtich={() => {
            const _activeSwitchIndex = activeSwitchIndex === 0 ? 1 : 0;
            setVisiblePanelIndex(_activeSwitchIndex);
            setActiveSwitchIndex(_activeSwitchIndex);
            setCurrentIndex(0);
          }}
        />
      );
    }
    return null;
  };

  const renderTitles = (
    collection: Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo,
    collectionIndex: number
  ) => {
    if (
      (currentScreenWidth <= getBreakpoint('ml') && collectionIndex === visiblePanelIndex) ||
      currentScreenWidth > getBreakpoint('ml')
    ) {
      return (
        <>
          {collection?.fields?.headlineText?.value !== '' && (
            <div className={themeData.classes.tabsClasses.tabHeadlineWrapper}>
              {themeName === 'aw' && (
                <SvgIcon
                  icon="orange-triangle"
                  className={themeData.classes.tabsClasses.tabHeadlineIcon}
                />
              )}
              <Headline
                fields={collection?.fields}
                classes={themeData.classes.tabsClasses.tabHeadline}
              />
            </div>
          )}
          <div ref={titlesScroller} className={themeData.classes.tabsClasses.tabTitlesContainer}>
            {currentIndex > 0 && (
              <div
                className={themeData.classes.tabsClasses.leftArrowIcon}
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                <SvgIcon icon="arrow-left" />
              </div>
            )}
            <ul className={themeData.classes.tabsClasses.tabTitlesWrapper} key={collectionIndex}>
              {collection?.fields.children.map(
                (
                  item: Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo,
                  itemIndex: number
                ) => {
                  return (
                    <li
                      key={itemIndex}
                      id={item.fields?.contentId.value || `tab-${normalizeGuid(item.id)}`}
                      className={classNames(
                        currentScreenWidth >= getBreakpoint('ml')
                          ? 'break-words'
                          : 'whitespace-nowrap',
                        themeData.classes.tabsClasses.tabTitle,
                        itemIndex === currentIndex &&
                          collectionIndex === visiblePanelIndex &&
                          themeData.classes.tabsClasses.activeTabTitle
                      )}
                      onClick={() => selectTab(itemIndex, collectionIndex)}
                      onKeyDown={(e) => {
                        if (e.code === 'Enter' || e.code === 'Space') {
                          selectTab(itemIndex, collectionIndex);
                        }
                      }}
                      tabIndex={0}
                    >
                      <Text tag="h4" field={item.fields?.tabTitle as Field<string>} />
                    </li>
                  );
                }
              )}
            </ul>
            {currentIndex < collection?.fields.children?.length - 1 && (
              <div
                className={themeData.classes.tabsClasses.rightArrowIcon}
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                <SvgIcon icon="arrow-right" />
              </div>
            )}
          </div>
        </>
      );
    }

    return null;
  };

  if (!fields) {
    return null;
  }

  const renderTabTitles = () => {
    return (
      <>
        {/* Toggle Switch */}
        {children?.length > 1 && (
          <div className={themeData.classes.tabsClasses.toggleContainer}>
            {renderToggleSwitch()}
          </div>
        )}
        {/* Tab Titles List */}
        {children?.map(
          (
            collection: Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo,
            collectionIndex: number
          ) => {
            return (
              <React.Fragment key={collectionIndex}>
                {renderTitles(collection, collectionIndex)}
              </React.Fragment>
            );
          }
        )}
      </>
    );
  };

  const renderTabPanels = (): React.ReactElement[] => {
    const panels: Array<React.ReactElement> = [];
    children?.map(
      (
        collection: Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo,
        collectionIndex: number
      ) => {
        return (
          collectionIndex === visiblePanelIndex &&
          collection.fields?.children.forEach(
            (
              tabItem: Feature.EnterpriseWeb.Enterprise.Components.Tabs.TabsFeaturedPromo.TabsFeaturedPromo,
              tabIndex: number
            ) => {
              panels.push(
                <Promo key={tabIndex} classes={themeData.classes.promoClasses} {...tabItem} />
              );
            }
          )
        );
      }
    );

    return panels;
  };

  return (
    <Component variant="lg" dataComponent="promo/tabsfeaturedpromo" {...props}>
      <div className="col-span-12">
        <Headline fields={fields} classes={themeData.classes.headline} />
      </div>
      {fields.children?.length > 0 && (
        <div className="col-span-12 mb-ml">
          <Tabs classes={themeData.classes.tabsClasses} currentTabIndex={currentIndex}>
            {renderTabTitles()}
            {renderTabPanels()}
          </Tabs>
        </div>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<TabsFeaturedPromoProps>(TabsFeaturedPromo);
