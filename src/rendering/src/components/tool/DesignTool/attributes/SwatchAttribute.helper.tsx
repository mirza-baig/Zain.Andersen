// Global
import Image from 'next/image';
import empty from 'src/assets/img/empty.png';
import { SliderWrapper, SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import classNames from 'classnames';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { AttributeRendererProps } from 'src/lib/renoworks';
import { SwatchAttributeViewModel } from '../js/designtool';
import { SwatchAttributeTheme, SwatchAttributeThemeSubType } from './SwatchAttribute.theme';
import { useRef } from 'react';

const SwatchAttribute = ({
  props,
  onUpdateOption,
}: AttributeRendererProps<SwatchAttributeViewModel>) => {
  const { themeName, themeData } = useTheme(SwatchAttributeTheme());
  const theme = (themeData as SwatchAttributeThemeSubType).classes;

  const moreCount = () => {
    return props.options.length - props.pageSize + 1;
  };

  const numberOfPages = () => {
    // Include +1 for the "more colors square"
    const result = Math.ceil((props.options.length + 1) / props.pageSize);
    return result;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionsForPage = (page: any) => {
    // The first page is one short to account for the "more colors square"
    if (page === 0) {
      return props.options.slice(0, props.pageSize - 1);
    } else {
      const start = props.pageSize - 1 + (page - 1) * props.pageSize;
      return props.options.slice(start, start + props.pageSize);
    }
  };

  const getInitialSlide = () => {
    const numOfPages = props.pageSize > 0 ? numberOfPages() : 0;

    if (numOfPages > 1) {
      const slidePages = numOfPages;
      for (let currentPage = 0; currentPage <= slidePages; currentPage++) {
        const options = optionsForPage(currentPage);
        if (
          options.find(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option: any) => {
              return !!option.isSelected || !!option.isClicked;
            }
          )
        ) {
          return currentPage;
        }
      }
    }

    return 0;
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
      {props.pageSize > 0 ? (
        <SliderWrapper
          sliderSettings={sliderSettings}
          sliderRef={slider as SliderRefType}
          theme={themeName}
        >
          {[...Array(numberOfPages())].map((page: number, index: number) => (
            <div key={'slider_ul' + page + index}>
              <ul className={theme.optionsList}>
                {optionsForPage(index).map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (option: any, index: number) => (
                    <li className={theme.optionsListItem} key={index}>
                      <button
                        className={theme.optionsListButton}
                        onClick={() => optionClicked(option, optionsForPage(index))}
                      >
                        {option.image && (
                          <span className={theme.optionsListImageWrapper}>
                            <div style={{ background: '#' + option.colorRgb }}>
                              <ImageWrapper
                                additionalDesktopClasses={classNames(
                                  theme.optionsListImage,
                                  'w-full h-full'
                                )}
                                additionalMobileClasses={theme.optionsListImage}
                                imageLayout="responsive"
                                image={{
                                  value: {
                                    src: option.image,
                                    alt: option.title,
                                    /* image will be responsive to parent div,
                                 using intrinsic width and height from actual example image */
                                    width: option.title === 'None' ? 101 : 94,
                                    height: option.title === 'None' ? 101 : 150,
                                  },
                                }}
                              />
                            </div>
                            {(option.isSelected || option.isClicked) && (
                              <SvgIcon
                                icon={'check'}
                                size="16"
                                className={
                                  theme.optionsListImageSelected + theme.optionsListImageSelectedBg
                                }
                              ></SvgIcon>
                            )}
                          </span>
                        )}
                        <span className={theme.optionsListButtonText}>{option.title}</span>
                      </button>
                    </li>
                  )
                )}
                {index === 0 && (
                  <li className={theme.listMore} onClick={slideNext}>
                    <span className={theme.listMoreImageWrapper}>
                      <span className={theme.listMoreText}>
                        <p className={theme.listMoreTextNumber}>+{moreCount()}</p>
                        <p className={theme.listMoreTextMore}>more</p>
                      </span>
                      <Image
                        className={theme.listMoreImage}
                        loading="lazy"
                        src={empty}
                        layout="responsive"
                      ></Image>
                    </span>
                    <span></span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </SliderWrapper>
      ) : (
        <ul className={theme.optionsList}>
          {props.options.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option: any, index: number) => {
              return (
                <li className={theme.optionsListItem} key={index}>
                  <button
                    className={theme.optionsListButton}
                    onClick={() => optionClicked(option, props.options)}
                  >
                    {option.image && (
                      <span className={theme.optionsListImageWrapper}>
                        <div style={{ background: '#' + option.colorRgb }}>
                          <ImageWrapper
                            additionalDesktopClasses={theme.optionsListImage}
                            additionalMobileClasses={theme.optionsListImage}
                            imageLayout="responsive"
                            image={{
                              value: {
                                src: option.image,
                                alt: option.title,
                                /* image will be responsive to parent div,
                                 using intrinsic width and height from actual example image */
                                width: option.title === 'None' ? 101 : 94,
                                height: option.title === 'None' ? 101 : 150,
                              },
                            }}
                          />
                        </div>

                        {(option.isSelected || option.isClicked) && (
                          <SvgIcon
                            icon={'check'}
                            size="16"
                            className={
                              theme.optionsListImageSelected + theme.optionsListImageSelectedBg
                            }
                          ></SvgIcon>
                        )}
                      </span>
                    )}
                    <span className={theme.optionsListButtonText}>{option.title}</span>
                  </button>
                </li>
              );
            }
          )}
        </ul>
      )}
      {props.note && <p className={theme.disclaimer}>{props.note}</p>}
    </div>
  );
};

SwatchAttribute.nameString = 'SwatchAttribute';

export default SwatchAttribute;
