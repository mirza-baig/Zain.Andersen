// Global
import Image from 'next/image';
import empty from 'src/assets/img/empty.png';
import { SliderWrapper } from 'src/helpers/SliderWrapper/SliderWrapper';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import classNames from 'classnames';
import { AttributeRendererProps, SwatchAttributeViewModel } from 'lib/renoworks';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { RenoworksKeys } from 'src/lib/renoworks/renoworks';
import { SwatchAttributeTheme, SwatchAttributeThemeSubType } from './SwatchAttribute.theme';

const SwatchAttribute = ({
  viewModel,
  onUpdateOption,
}: AttributeRendererProps<SwatchAttributeViewModel>) => {
  const { themeName, themeData } = useTheme(SwatchAttributeTheme());
  const theme = (themeData as SwatchAttributeThemeSubType).classes;

  const numberOfPages = () => {
    const result = Math.ceil(viewModel.options.length / pageSize);
    return result;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionsForPage = (page: any) => {
    if (page === 0) {
      return viewModel.options.slice(0, pageSize);
    } else {
      const start = pageSize + (page - 1) * pageSize;
      return viewModel.options.slice(start, start + pageSize);
    }
  };

  const getInitialSlide = () => {
    const numOfPages = pageSize > 0 ? numberOfPages() : 0;

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

  const getImageLayoutClass = (renoworksKey: string) => {
    switch (renoworksKey) {
      case RenoworksKeys.GrilleStyle.name:
      case RenoworksKeys.ExteriorTrimProfile.name:
        return `intrinsic`;
      default:
    }

    return `responsive`;
  };

  const getPageSizeOverride = (renoworksKey: string) => {
    switch (renoworksKey) {
      case RenoworksKeys.GrilleStyle.name:
      case RenoworksKeys.ExteriorTrimProfile.name:
        return 4;
      default:
    }

    return viewModel.pageSize;
  };

  const imageLayoutClass = getImageLayoutClass(viewModel.renoworksKeyName);
  const pageSize = getPageSizeOverride(viewModel.renoworksKeyName);

  return (
    <div className={theme.attributeOption}>
      {viewModel.description && <p className={theme.copy}>{viewModel.description}</p>}
      {pageSize > 0 ? (
        <SliderWrapper sliderSettings={sliderSettings} theme={themeName}>
          {[...Array(numberOfPages())].map((page: number, index: number) => (
            <div key={'slider_ul' + page + index}>
              <ul className={theme.optionsList}>
                {optionsForPage(index).map((option, index: number) => (
                  <li className={theme.optionsListItem} key={index}>
                    <button
                      className={theme.optionsListButton}
                      onClick={() => optionClicked(option, optionsForPage(index))}
                    >
                      {option.image && (
                        <span
                          className={`${theme.optionsListImageWrapper} ${
                            option.isSelected || option.isClicked
                              ? theme.selected
                              : theme.unselected
                          }`}
                          style={{ background: '#' + option.colorRgb }}
                        >
                          {option.image != 'empty' ? (
                            <ImageWrapper
                              additionalDesktopClasses={classNames(
                                theme.optionsListImage,
                                'w-full h-full'
                              )}
                              additionalMobileClasses={theme.optionsListImage}
                              imageLayout={imageLayoutClass}
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
                          ) : (
                            <Image
                              className={theme.optionsListImage}
                              src={empty}
                              alt={option.title}
                              style={{ background: '#' + option.colorRgb }}
                              layout="responsive"
                            ></Image>
                          )}
                        </span>
                      )}
                      <span className={theme.optionsListButtonText}>{option.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SliderWrapper>
      ) : (
        <ul className={theme.optionsList}>
          {viewModel.options.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option: any, index: number) => {
              return (
                <li className={theme.optionsListItem} key={index}>
                  <button
                    className={theme.optionsListButton}
                    onClick={() => optionClicked(option, viewModel.options)}
                  >
                    {option.image && (
                      <span
                        className={`${theme.optionsListImageWrapper} ${
                          option.isSelected || option.isClicked ? theme.selected : theme.unselected
                        }`}
                        style={{ background: '#' + option.colorRgb }}
                      >
                        {option.image != 'empty' ? (
                          <ImageWrapper
                            additionalDesktopClasses={theme.optionsListImage}
                            additionalMobileClasses={theme.optionsListImage}
                            imageLayout={imageLayoutClass}
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
                        ) : (
                          <Image
                            className={theme.optionsListImage}
                            src={empty}
                            alt={option.title}
                            style={{ background: '#' + option.colorRgb }}
                            layout="responsive"
                          ></Image>
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
      {viewModel.note && <p className={theme.disclaimer}>{viewModel.note}</p>}
    </div>
  );
};

SwatchAttribute.nameString = 'SwatchAttribute';

export default SwatchAttribute;
