// Global
import Image from 'next/image';
import { useState } from 'react';
import empty from 'src/assets/img/empty.png';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { SliderWrapper, SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';
import { AttributeRendererProps } from 'src/lib/renoworks';
import { TabbedSwatchAttributeViewModel } from '../js/designtool';
import {
  TabbedSwatchAttributeTheme,
  TabbedSwatchAttributeThemeSubType,
} from './TabbedSwatchAttribute.theme';
import { useRef } from 'react';

const TabbedSwatchAttribute = ({
  props,
  onUpdateOption,
  attributeIndex,
  maxAttributeIndex,
}: AttributeRendererProps<TabbedSwatchAttributeViewModel>) => {
  const { themeName, themeData } = useTheme(TabbedSwatchAttributeTheme());
  const theme = (themeData as TabbedSwatchAttributeThemeSubType).classes;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const numberOfPages = (group: any) => {
    // Include +1 for the "more colors square"
    if (group.pageSize > 0) {
      return Math.ceil((group.options.length + 1) / group.pageSize);
    } else {
      return 0;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionsForPage = (group: any, page: number) => {
    // The first page is one short to account for the "more colors square"
    if (page === 0) {
      return group.options.slice(0, group.pageSize - 1);
    } else {
      const start = group.pageSize - 1 + (page - 1) * group.pageSize;
      return group.options.slice(start, start + group.pageSize);
    }
  };

  const getInitialTab = () => {
    let returnValue: number | undefined = undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props.groups.forEach((group: any, index: number) => {
      if (returnValue != undefined) {
        return;
      }

      const numOfPages = numberOfPages(group);
      if (numOfPages > 1) {
        const slidePages = numOfPages;
        for (let currentPage = 1; currentPage <= slidePages; currentPage++) {
          const options = optionsForPage(group, currentPage);
          if (
            options.find(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any) => {
                return !!option.isSelected || !!option.isClicked;
              }
            )
          ) {
            returnValue = index;
          }
        }
      } else {
        if (
          group.options.find(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option: any) => {
              return !!option.isSelected || !!option.isClicked;
            }
          )
        ) {
          returnValue = index;
        }
      }
    });

    return returnValue || 0;
  };

  const getInitialSlide = () => {
    let returnValue = 0;
    props.groups.forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (group: any) => {
        const numOfPages = numberOfPages(group);
        if (numOfPages > 1) {
          const slidePages = numOfPages;
          for (let currentPage = 0; currentPage <= slidePages; currentPage++) {
            const options = optionsForPage(group, currentPage);
            if (
              options.find(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (option: any) => {
                  return !!option.isSelected || !!option.isClicked;
                }
              )
            ) {
              returnValue = currentPage;
            }
          }
        }

        if (returnValue > 0) {
          return;
        }
      }
    );

    return returnValue;
  };

  const initialTab = getInitialTab();
  const [currentTab, setCurrentTab] = useState({
    ...[...Array(maxAttributeIndex)]
      .map((_ind: number, index: number) => {
        return { [index as unknown as keyof typeof Object]: 0 };
      })
      .reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (accum: any, curr: any) => {
          return { ...accum, ...curr };
        }
      ),
    [attributeIndex as unknown as keyof typeof Object]: initialTab,
  });

  const selectTab = (index: number) => {
    setCurrentTab({ ...currentTab, [attributeIndex as unknown as keyof typeof Object]: index });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const moreCount = (group: any) => {
    return group.options.length - group.pageSize + 1;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  const sliderSettings = {
    infinite: false,
    className: theme.swiperContainer,
    prevArrow: undefined,
    nextArrow: undefined,
    initialSlide: getInitialSlide(),
  };

  const slider = useRef<SliderType>(null);

  const slideNext = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  return (
    <div className={theme.attributeOption}>
      {props.description && <p className={theme.copy}>{props.description}</p>}
      {props.groups.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (group: any, index: number) => (
          <span key={'span_group_button_' + index}>
            {props.groups.length > 1 ? (
              <button
                onClick={() => selectTab(index)}
                className={
                  (currentTab[attributeIndex.toString()] == index
                    ? theme.tabActive
                    : theme.tabInactive) + theme.tabButton
                }
              >
                {group.title}
              </button>
            ) : (
              <p className={theme.copy}>{group.title}</p>
            )}
          </span>
        )
      )}
      {props.groups.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (group: any, index: number) => (
          <span key={'span_group_' + index}>
            {currentTab[attributeIndex.toString()] === index && (
              <div>
                {group.pageSize > 0 ? (
                  <SliderWrapper
                    sliderSettings={sliderSettings}
                    sliderRef={slider as SliderRefType}
                    theme={themeName}
                  >
                    {[...Array(numberOfPages(group))].map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (page: any, indexOuter: number) => (
                        <>
                          <ul className={theme.list} key={'ul' + page + indexOuter}>
                            {optionsForPage(group, indexOuter).map(
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              (option: any, indexInner: number) => (
                                <li className={theme.listItem} key={'li' + indexInner}>
                                  <button
                                    className={theme.listItemButton}
                                    onClick={() =>
                                      optionClicked(option, optionsForPage(group, indexOuter))
                                    }
                                  >
                                    {option.image && (
                                      <span className={theme.listItemImageWrapper}>
                                        <div style={{ background: '#' + option.colorRgb }}>
                                          {option.image != 'empty' ? (
                                            <ImageWrapper
                                              additionalDesktopClasses={theme.listItemImage}
                                              additionalMobileClasses={theme.listItemImage}
                                              imageLayout="responsive"
                                              image={{
                                                value: {
                                                  src: option.image,
                                                  alt: option.title,
                                                  /* image will be responsive to parent div,
                                   using intrinsic width and height from actual example image */
                                                  width: 76,
                                                  height: 76,
                                                },
                                              }}
                                            />
                                          ) : (
                                            <Image
                                              className={theme.listItemImage}
                                              src={empty}
                                              alt={option.title}
                                              style={{ background: '#' + option.colorRgb }}
                                              layout="responsive"
                                            ></Image>
                                          )}
                                        </div>
                                        {(option.isSelected || option.isClicked) && (
                                          <SvgIcon
                                            icon={'check'}
                                            size="16"
                                            className={
                                              theme.listItemImageSelected +
                                              theme.listItemImageSelectedBg
                                            }
                                          ></SvgIcon>
                                        )}
                                      </span>
                                    )}
                                    <span className={theme.listItemButtonText}>{option.title}</span>
                                  </button>
                                </li>
                              )
                            )}
                            {indexOuter === 0 && (
                              <li className={theme.listMore} key={'li_empty'} onClick={slideNext}>
                                <span className={theme.listMoreImageWrapper}>
                                  <span className={theme.listMoreText}>
                                    <p className={theme.listMoreTextNumber}>+{moreCount(group)}</p>
                                    <p className={theme.listMoreTextMore}>more</p>
                                  </span>
                                  <Image
                                    className={theme.listItemImage}
                                    loading="lazy"
                                    src={empty}
                                    layout="responsive"
                                  ></Image>
                                </span>
                                <span className={theme.listItemButtonText}></span>
                              </li>
                            )}
                          </ul>
                        </>
                      )
                    )}
                  </SliderWrapper>
                ) : (
                  <ul className={theme.list}>
                    {group.options.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (option: any, index: number) => (
                        <li className={theme.listItem} key={index}>
                          <button
                            className={theme.listItemButton}
                            onClick={() => optionClicked(option, group.options)}
                          >
                            <span className={theme.listItemImageWrapper}>
                              <div style={{ background: '#' + option.colorRgb }}>
                                {option.image != 'empty' ? (
                                  <ImageWrapper
                                    additionalDesktopClasses={theme.listItemImage}
                                    additionalMobileClasses={theme.listItemImage}
                                    imageLayout="responsive"
                                    image={{
                                      value: {
                                        src: option.image,
                                        alt: option.title,
                                        /* image will be responsive to parent div,
                                   using intrinsic width and height from actual example image */
                                        width: 76,
                                        height: 76,
                                      },
                                    }}
                                  />
                                ) : (
                                  <Image
                                    className={theme.listItemImage}
                                    src={empty}
                                    alt={option.title}
                                    style={{ background: '#' + option.colorRgb }}
                                    layout="responsive"
                                  ></Image>
                                )}
                              </div>
                              {(option.isSelected || option.isClicked) && (
                                <SvgIcon
                                  icon={'check'}
                                  size="16"
                                  className={
                                    theme.listItemImageSelected + theme.listItemImageSelectedBg
                                  }
                                ></SvgIcon>
                              )}
                            </span>
                            <span className={theme.listItemButtonText}>{option.title}</span>
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                )}
                {group.note && <p className={theme.disclaimer}>{group.note}</p>}
              </div>
            )}
          </span>
        )
      )}
      {props.note && <p className={theme.disclaimer}>{props.note}</p>}
    </div>
  );
};

TabbedSwatchAttribute.nameString = 'TabbedSwatchAttribute';

export default TabbedSwatchAttribute;
