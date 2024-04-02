// Global
import Image from 'next/image';
import empty from 'src/assets/img/empty.png';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import classNames from 'classnames';

// Components
import { AttributeRendererProps, DependentSwatchAttributeViewModel } from 'lib/renoworks';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import {
  DependentSwatchAttributeTheme,
  DependentSwatchAttributeThemeSubType,
} from './DependentSwatchAttribute.theme';

const DependentSwatchAttribute = ({
  viewModel,
  onUpdateOption,
}: AttributeRendererProps<DependentSwatchAttributeViewModel>) => {
  const { themeName, themeData } = useTheme(DependentSwatchAttributeTheme());
  const theme = (themeData as DependentSwatchAttributeThemeSubType).classes;

  const numberOfPages = () => {
    // Include +1 for the "more colors square"
    if (viewModel.pageSize > 0) {
      return Math.ceil((viewModel.options.length + 1) / viewModel.pageSize);
    } else {
      return 0;
    }
  };

  const optionsForPage = (page: number) => {
    // The first page is one short to account for the "more colors square"
    if (page === 0) {
      return viewModel.options.slice(0, viewModel.pageSize);
    } else {
      const start = viewModel.pageSize + (page - 1) * viewModel.pageSize;
      return viewModel.options.slice(start, start + viewModel.pageSize);
    }
  };

  const getInitialSlide = () => {
    const numOfPages = numberOfPages();
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  const sliderSettings = {
    infinite: false,
    className: theme.swiperWrapper,
    prevArrow: undefined,
    nextArrow: undefined,
    initialSlide: getInitialSlide(),
  };

  return (
    <div className={theme.attributeOption}>
      {viewModel.description && <p className={theme.copy}>{viewModel.description}</p>}
      <div className={theme.container}>
        <div className={theme.containerControl}>
          <span className={theme.title}>{viewModel.selectedControlOption?.title}</span>
          {viewModel.selectedControlOption && viewModel.selectedControlOption.image && (
            <div style={{ background: '#' + viewModel.selectedControlOption.colorRgb }}>
              <ImageWrapper
                additionalDesktopClasses={theme.controlImage}
                additionalMobileClasses={theme.controlImage}
                imageLayout="intrinsic"
                image={{
                  value: {
                    src: viewModel.selectedControlOption.image,
                    alt: viewModel.selectedControlOption.title,
                    /* image will be responsive to parent div,
                    using intrinsic width and height from actual example image */
                    width: 291,
                    height: 324,
                  },
                }}
              />
            </div>
          )}
          <SvgIcon
            icon={'check'}
            size="16"
            className={theme.listItemImageSelected + theme.listItemImageSelectedBg}
          ></SvgIcon>
        </div>
        <div className={theme.swiperContainer}>
          {viewModel.pageSize > 0 ? (
            <SliderWrapper sliderSettings={sliderSettings} theme={themeName}>
              {[...Array(numberOfPages())].map((page: number, index: number) => (
                <div key={'slider_wrapper_' + page + index}>
                  <ul className={theme.list}>
                    {optionsForPage(index).map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (option: any, index: number) => (
                        <li className={theme.listItem} key={index}>
                          <button
                            className={theme.listItemButton}
                            onClick={() => optionClicked(option, optionsForPage(index))}
                          >
                            {option.image && (
                              <span className={theme.listItemImageWrapper}>
                                <div style={{ background: '#' + option.colorRgb }}>
                                  {option.image != 'empty' ? (
                                    <ImageWrapper
                                      additionalDesktopClasses={classNames(
                                        theme.listItemImage,
                                        option.isSelected || option.isClicked
                                          ? 'border border-primary'
                                          : 'border border-gray hover:border-black'
                                      )}
                                      additionalMobileClasses={classNames(
                                        theme.listItemImage,
                                        option.isSelected || option.isClicked
                                          ? 'border border-primary'
                                          : 'border border-gray hover:border-black'
                                      )}
                                      imageLayout="responsive"
                                      image={{
                                        value: {
                                          src: option.image,
                                          alt: option.title,
                                          /* image will be responsive to parent div,
                      using intrinsic width and height from actual example image */
                                          width: 79,
                                          height: 79,
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
                              </span>
                            )}
                            <span className={theme.listItemTitle}>{option.title}</span>
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </SliderWrapper>
          ) : (
            <ul className={theme.list}>
              {viewModel.options.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (option: any, index: number) => (
                  <li className={theme.listItem} key={index}>
                    <button
                      className={theme.listItemButton}
                      onClick={() => optionClicked(option, viewModel.options)}
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
                                    width: 79,
                                    height: 79,
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
                      )}
                      <span className={theme.listItemTitle}>{option.title}</span>
                    </button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
      {viewModel.note && <p className={theme.disclaimer}>{viewModel.note}</p>}
    </div>
  );
};

DependentSwatchAttribute.nameString = 'DependentSwatchAttribute';

export default DependentSwatchAttribute;
