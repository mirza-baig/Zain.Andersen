// Global
import { Link as Linkfield, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { PreviewImage, RenderAttribute, useRenoworks } from 'lib/renoworks';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import TagManager from 'react-gtm-module';
import Slider from 'react-slick';
import { ButtonPrimaryClasses } from 'src/helpers/Button/buttons/btn--primary';
import { ButtonTertiaryClasses } from 'src/helpers/Button/buttons/btn--tertiary';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { DesignToolStepName } from 'src/lib/renoworks/designtool';
import { RenoworksKeys, RenoworksProductSide } from 'src/lib/renoworks/renoworks';
import { rendererMap } from '../attributes/renderMap.helper';
import { PreviewImageThemes } from '../partial/PreviewImage.theme';
import { ProductDesignToolProps } from '../ProductDesignTool';
import { DesignTheme, DesignThemeSubType } from './Design.theme';
import { SliderRefType } from 'src/helpers/SliderWrapper/SliderWrapper';

// TODO: Reconcile this
function getUrlParts(url: string) {
  const urlParsed = new URL(url, 'https://server');

  const pathRegex = new RegExp(/([^#\?]*)(?:#\/(\d+)){0,1}(?:\?(.*)){0,1}/g);
  const matches = pathRegex.exec(urlParsed?.hash || '') ?? [];

  return {
    pathName: urlParsed?.pathname,
    attributeIndex: parseInt(matches[2]) || 0,
    query: urlParsed?.search?.replace('?', ''),
  };
}

export const Design = (props: ProductDesignToolProps) => {
  const { viewModel } = useRenoworks();
  const router = useRouter();

  const { themeName, themeData } = useTheme(DesignTheme());
  const theme = (themeData as DesignThemeSubType).classes;
  const [isRAQ, setisRAQ] = useState(false);

  const [attributeIndex, setAttributeIndex] = useState<number>(0);

  const $refs = {
    mobileMenu: useRef<HTMLDivElement>(null),
    progressBarMobile: useRef<HTMLUListElement>(null),
    progressItemsMobile: useRef<HTMLLIElement>(null),
    progressBarDesktop: useRef<HTMLUListElement>(null),
    progressItemsDesktop: useRef<HTMLLIElement>(null),
    sticky: useRef<HTMLDivElement>(null),
    desktopPreview: useRef<HTMLDivElement>(null),
    desktopPreviewHeader: useRef<HTMLHeadingElement>(null),
    mobilePreview: useRef<HTMLButtonElement>(null),
    mobilePreviewHeader: useRef<HTMLHeadingElement>(null),
    sliderRef: useRef<Slider>(),
    summaryModal: useRef<HTMLDivElement>(null),
  };

  const previewTheme = useTheme(PreviewImageThemes()).themeData;

  interface DataItem {
    _title: string;
    _startIndex: number;
  }

  function getStartIndex(title: string, data: DataItem[]): number {
    for (const item of data) {
      if (item._title === title) {
        return item._startIndex;
      }
    }

    return 0;
    // Return null if title is not found in the data
  }

  useEffect(() => {
    if (!router.isReady || !viewModel) {
      return;
    }

    const urlParts = getUrlParts(router.asPath);
    let newIndex = urlParts.attributeIndex;

    if (newIndex < 0) {
      newIndex = 0;
    }

    if (newIndex >= viewModel.attributes.length) {
      newIndex = viewModel.attributes.length - 1;
    }

    setAttributeIndex(newIndex);

    const SummaryIndex = getStartIndex('Summary', viewModel.progressBar);

    const getRAQurl = router.asPath;
    const fragmentIndex = getRAQurl.indexOf('#'); // Get the index of the "#" character
    const fragment = fragmentIndex !== -1 ? getRAQurl.substring(fragmentIndex) : ''; // Extract the fragment if present

    if (fragment == '#request_a_quote') {
      goToStep(SummaryIndex);
      setisRAQ(true);
    }

    if (isRAQ) {
      console.log('RAQ True');
      const RAQ_Button = document.getElementById('request_a_quote');
      if (RAQ_Button) {
        RAQ_Button.click();
      }
    }
  }, [router.isReady, router.asPath, viewModel]);

  if (!viewModel) {
    return null;
  }

  const isFirstStep = () => {
    return (attributeIndex || 0) === 0;
  };

  const isFinalStep = () => {
    return attributeIndex === (viewModel.attributes.length || 0) - 1;
  };

  const goToStep = (index: number) => {
    const urlParts = getUrlParts(router.asPath);
    const queryPart = urlParts.query ? `?${urlParts.query}` : '';
    const newPath = `${urlParts.pathName}${queryPart}#/${index}`;

    // prepareDesignSelectionData(`Jump To Step ${index + 1}`, product, viewModel); GTM
    router.push(newPath);
    scrollTopAfterChange();
    scrollIntoViewHorizontally();
  };

  const scrollIntoViewHorizontally = () => {
    const container = document.getElementById('progressBarMobile') as HTMLElement;
    const lis = container?.getElementsByClassName('progress-bar--item done');
    const child = lis?.item(lis.length - 1) as HTMLElement;
    const child_offsetRight = child?.offsetLeft + child.offsetWidth;
    const container_scrollRight = container?.scrollLeft + container?.offsetWidth;

    if (container?.scrollLeft > child.offsetLeft) {
      container.scrollLeft = child.offsetLeft;
    } else if (container_scrollRight < child_offsetRight) {
      container.scrollLeft += child_offsetRight - container_scrollRight;
    }
  };

  const previousAttribute = () => {
    goToStep(attributeIndex - 1);
    scrollTopAfterChange();
  };

  const nextAttribute = () => {
    goToStep(attributeIndex + 1);
    scrollTopAfterChange();
  };

  const resetDesign = () => {
    const urlParts = getUrlParts(router.asPath);
    const newPath = `${urlParts.pathName}#/0`;

    router.replace(newPath, newPath, { shallow: true });
    scrollTopAfterChange();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attributeOptionGroupSelected = (optionGroup: any) => {
    updateSettings(optionGroup.productSettingChanges);
    updateVisibleImage(optionGroup.imageSide);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateSettings = (changes: any) => {
    const urlParts = getUrlParts(router.asPath);
    const updatedProductSettingValues = viewModel.renoworksResult.productSettingValues.clone();
    for (const change of changes) {
      change.apply(updatedProductSettingValues);
    }

    const queryString = updatedProductSettingValues.toURLQueryString();

    const newPath = `${urlParts.pathName}?${queryString}#/${attributeIndex}`;

    router.replace(newPath, newPath, { shallow: true });
    scrollTopAfterChange();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attributeOptionSelected = (option: any) => {
    updateSettings(option.productSettingChanges);
    updateVisibleImage(option.imageSide);
  };

  const updateVisibleImage = (imageSide: number) => {
    if (imageSide != RenoworksProductSide.Both && $refs.sliderRef?.current) {
      switch (imageSide) {
        case RenoworksProductSide.Interior:
          $refs.sliderRef?.current.slickGoTo(0);
          break;
        case RenoworksProductSide.Exterior:
          $refs.sliderRef?.current.slickGoTo(1);
          break;
      }
    }
  };

  // Swiper Start

  const pagingText = ['Interior', 'Exterior'];
  const renderCustomPaging = (index: number) => {
    return <a className={theme.desktopPreview.swiperPaginationLink}>{pagingText[index]}</a>;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appendDots = (dots: any[]) => {
    return (
      <div>
        <ul
          className={`${theme.desktopPreview.swiperPaginationContainer} ${
            theme.desktopPreview.swiperPaginationActive
          } ${
            dots[0]?.props?.className?.includes('slick-active')
              ? theme.desktopPreview.swiperPaginationActiveFirst
              : theme.desktopPreview.swiperPaginationActiveSecond
          }`}
        >
          {dots.map((item, index) => {
            return (
              <li
                className={`${item?.props?.className} ${theme.desktopPreview.swiperPaginationBullet}`}
                key={index}
              >
                {item.props.children}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const sliderSettings = {
    infinite: false,
    className: theme.desktopPreview.swiper + theme.desktopPreview.sticky,
    prevArrow: undefined,
    nextArrow: undefined,
    appendDots: appendDots,
    dotsClass: ``,
    customPaging: renderCustomPaging,
  };

  // Swiper End
  const getHeaders = (renoworksKey: string, productSide: number) => {
    switch (renoworksKey) {
      case DesignToolStepName.Sizing:
        return {
          heading: "Let's get started",
          subheading: 'Start by choosing your size',
        };
      case RenoworksKeys.FrameColor.name:
        switch (productSide) {
          case RenoworksProductSide.Interior:
            return {
              heading: 'Start adding design touches',
              subheading: 'Choose a painted option or a natural pine interior',
            };
          case RenoworksProductSide.Exterior:
            return {
              heading: 'Almost there',
              subheading: 'Now, choose the options for your window',
            };
          default:
            return {
              heading: '',
              subheading: '',
            };
        }
      case RenoworksKeys.HardwareOptions.name:
        return {
          heading: 'Up next: Hardware',
          subheading: 'Choose your favorite hardware style and finish',
        };
      case RenoworksKeys.GrilleStyle.name:
        return {
          heading: 'Next, grilles',
          subheading: 'Choose a grille pattern or no grilles at all',
        };
      case RenoworksKeys.ExteriorTrimProfile.name:
        return {
          heading: 'One last exterior choice',
          subheading: 'Select an exterior trim option and color or no trim at all',
        };
      case RenoworksKeys.GlassOptions.name:
        return {
          heading: 'Final step',
          subheading: 'Select a glass option',
        };
      case DesignToolStepName.Summary:
        return {
          heading: 'Excellent choice',
          subheading: 'We like your style',
        };
      default:
        return {};
    }
  };

  const headers = getHeaders(
    viewModel?.attributes[attributeIndex]?.renoworksKeyName,
    viewModel?.attributes[attributeIndex]?.productSide
  );

  const shouldShowCTA = () => {
    try {
      const regExp = /nocta=([^?&#]*)/g;
      const matches = regExp.exec(location.search);

      if (matches != null && (matches[1].toLowerCase() === 'true' || matches[1] === '1')) {
        return false;
      }
    } catch {}

    return true;
  };

  const handleDesignRequestQuote = () => {
    const _selections = viewModel?._selectedOptions.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (accumulator: any, currentValue: any) => {
        accumulator[currentValue.title] = currentValue.value;
        return accumulator;
      },
      {}
    );

    let hostName = '';
    try {
      const requestAQuoteUrl = props.fields?.getAQuoteLink?.value?.href;
      if (requestAQuoteUrl?.indexOf('://') >= 0) {
        hostName = new URL(requestAQuoteUrl).host;
      } else {
        hostName = window.location.hostname;
      }
    } catch {}

    const destinationURL = props.fields?.getAQuoteLink?.value?.href?.split('?')[0];

    TagManager.dataLayer({
      dataLayer: {
        event: 'design_tool_get_quote',
        link_text: props.fields?.getAQuoteLink?.value?.text,
        link_url: destinationURL != 'undefined' ? destinationURL : '',
        link_domain: destinationURL != 'undefined' ? hostName : '',
        product_name: props.fields?.product?.name,
        product_id: _selections['Product ID#'] || '',
        interior_color: _selections['Interior Color'] || '',
        exterior_color: _selections['Exterior Color'] || '',
      },
    });
  };

  const handleDesignRequestQuoteModalOpen = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    const _selections = viewModel?._selectedOptions.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (accumulator: any, currentValue: any) => {
        accumulator[currentValue.title] = currentValue.value;
        return accumulator;
      },
      {}
    );

    $refs.summaryModal.current?.classList.remove(theme.designSummary.containerHidden);

    TagManager.dataLayer({
      dataLayer: {
        event: 'design_tool_get_quote',
        link_text: props.fields?.getAQuoteLink?.value?.text,
        product_name: props.fields?.product?.name,
        product_id: _selections['Product ID#'] || '',
        interior_color: _selections['Interior Color'] || '',
        exterior_color: _selections['Exterior Color'] || '',
      },
    });
  };

  const scrollTopAfterChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={theme.stepDesign}>
      <div className={theme.stepContainer}>
        <div className={`${theme.stepWrapper} ${isFinalStep() ? 'max-md:pt-[20px]' : ''}`}>
          <div className={theme.stepRow}>
            <div className={theme.imgSlider}>
              <div className={theme.mobileHeader}>
                {headers?.heading && <h2 className={theme.stepHeading}>{headers.heading}</h2>}
                {headers?.subheading && <h3 className={theme.stepSubhead}>{headers.subheading}</h3>}
                <button
                  className={theme.attributes.attributeMenuLink}
                  title={'Clear My Choices'}
                  aria-label={'Clear My Choices'}
                  onClick={() => {
                    resetDesign();
                  }}
                >
                  Clear My Choices{' '}
                  <SvgIcon icon="close" size="16" className="inline-block align-middle"></SvgIcon>
                </button>
              </div>
              <ul
                className={theme.progressBar + theme.progressBarMobile}
                ref={$refs.progressBarMobile}
                id="progressBarMobile"
              >
                {viewModel.progressBar?.map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (progressBarItem: any, index: number) => (
                    <li
                      className={
                        theme.progressBarItem +
                        (attributeIndex >= progressBarItem.startIndex ? ' done ' : '')
                      }
                      key={index}
                      ref={$refs.progressItemsMobile}
                    >
                      <button
                        className={theme.progressBarButton}
                        title={'Move to ' + progressBarItem?.title + ' step'}
                        aria-label={'Move to ' + progressBarItem?.title + ' step'}
                        onClick={() => {
                          goToStep(progressBarItem.startIndex);
                        }}
                      >
                        <span
                          className={
                            theme.progressBarName +
                            (attributeIndex >= progressBarItem.startIndex ? ' done ' : '')
                          }
                        >
                          {progressBarItem.title}
                        </span>
                        <span
                          className={
                            theme.progressBarStep +
                            (attributeIndex >= progressBarItem.startIndex ? ' done ' : '') +
                            (index > 0 ? theme.progressBarStepLine : '')
                          }
                        ></span>
                      </button>
                    </li>
                  )
                )}
              </ul>
              <div
                className={`${theme.desktopPreview.wrapper} ${theme.desktopPreview.wrapperBackground}`}
                ref={$refs.desktopPreview}
              >
                <div
                  className={theme.desktopPreview.swiperWrapper + theme.desktopPreview.sticky}
                  ref={$refs.sticky}
                >
                  {viewModel?.interiorImage && viewModel?.exteriorImage ? (
                    <div className={theme.desktopPreview.swiperContainer}>
                      <SliderWrapper
                        sliderSettings={sliderSettings}
                        theme={themeName}
                        sliderRef={$refs.sliderRef as SliderRefType}
                      >
                        <>
                          <div className={theme.desktopPreview.previewImageWrapper}>
                            <PreviewImage
                              theme={previewTheme}
                              className={theme.desktopPreview.previewImage}
                              src={viewModel?.interiorImage.src}
                              alt={viewModel?.interiorImage.alt}
                            ></PreviewImage>
                          </div>
                        </>
                        <>
                          <div className={theme.desktopPreview.previewImageWrapper}>
                            <PreviewImage
                              theme={previewTheme}
                              className={theme.desktopPreview.previewImage}
                              src={viewModel?.exteriorImage.src}
                              alt={viewModel?.exteriorImage.alt}
                            ></PreviewImage>
                          </div>
                        </>
                      </SliderWrapper>
                    </div>
                  ) : (
                    <div className={theme.desktopPreview.swiperContainer}>
                      {viewModel?.interiorImage ? (
                        <div className={theme.desktopPreview.previewImageWrapper}>
                          <PreviewImage
                            theme={previewTheme}
                            className={theme.desktopPreview.previewImage}
                            src={viewModel?.interiorImage.src}
                            alt={viewModel?.interiorImage.alt}
                          ></PreviewImage>
                        </div>
                      ) : (
                        viewModel?.exteriorImage && (
                          <div className={theme.desktopPreview.previewImageWrapper}>
                            <PreviewImage
                              theme={previewTheme}
                              className={theme.desktopPreview.previewImage}
                              src={viewModel?.exteriorImage.src}
                              alt={viewModel?.exteriorImage.alt}
                            ></PreviewImage>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={theme.attributes.attributes}>
              <div className={theme.attributes.attributesSection}>
                {(headers?.heading || headers?.subheading || shouldShowCTA()) && (
                  <div className={theme.headerDesktop}>
                    {headers?.heading && <h2 className={theme.stepHeading}>{headers.heading}</h2>}
                    {headers?.subheading && (
                      <h3 className={theme.stepSubhead}>{headers.subheading}</h3>
                    )}
                  </div>
                )}
                <ul className={theme.attributes.attributeMenuList}>
                  <li className={theme.attributes.attributeMenuListItem + theme.hideMobile}>
                    <button
                      className={theme.attributes.attributeMenuLink}
                      title={'Clear My Choices'}
                      aria-label={'Clear My Choices'}
                      onClick={() => {
                        resetDesign();
                      }}
                    >
                      Clear My Choices{' '}
                      <SvgIcon
                        icon="close"
                        size="16"
                        className="inline-block align-middle"
                      ></SvgIcon>
                    </button>
                  </li>
                </ul>
              </div>
              <ul
                className={theme.progressBar + theme.progressBarDesktop}
                ref={$refs.progressBarDesktop}
              >
                {viewModel.progressBar?.map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (progressBarItem: any, index: number) => (
                    <li
                      className={
                        theme.progressBarItem +
                        (attributeIndex >= progressBarItem.startIndex ? ' done ' : '')
                      }
                      key={index}
                      ref={$refs.progressItemsDesktop}
                    >
                      <button
                        className={theme.progressBarButton}
                        title={'Move to ' + progressBarItem.title + ' step.'}
                        aria-label={'Move to ' + progressBarItem.title + ' step.'}
                        onClick={() => {
                          goToStep(progressBarItem.startIndex);
                        }}
                      >
                        <span
                          className={
                            theme.progressBarName +
                            (attributeIndex >= progressBarItem.startIndex ? ' done ' : '')
                          }
                        >
                          {progressBarItem.title}
                        </span>
                        <span
                          className={
                            theme.progressBarStep +
                            (attributeIndex >= progressBarItem.startIndex ? ' done ' : '') +
                            (index > 0 ? theme.progressBarStepLine : '')
                          }
                        ></span>
                      </button>
                    </li>
                  )
                )}
              </ul>
              <RenderAttribute
                props={props}
                rendererMap={rendererMap}
                viewModel={viewModel.attributes[attributeIndex]}
                selectedOptions={viewModel.selectedOptions}
                onUpdateOption={attributeOptionSelected}
                onUpdateOptionGroup={attributeOptionGroupSelected}
                attributeIndex={attributeIndex}
                maxAttributeIndex={viewModel?.attributes?.length || 20}
                modalRef={$refs.summaryModal}
              ></RenderAttribute>
              <div className={theme.ctaSection.ctaSection + (isFinalStep() ? ' final-step' : '')}>
                {props.fields?.disclaimerText && (
                  <p className={theme.ctaSection.optionsDisclaimer}>
                    <Text field={props.fields?.disclaimerText} encode={false}></Text>
                  </p>
                )}
              </div>
              <div className={theme.ctaSection.ctaSection + (isFinalStep() ? ' final-step' : ' ')}>
                <div className={theme.ctaSection.navigationLinkContainer}>
                  {!isFirstStep() && (
                    <button
                      className={
                        theme.ctaSection.navigationLink +
                        theme.ctaSection.navigationLinkContainerSecondaryButton +
                        ButtonTertiaryClasses(themeName).btnClass
                      }
                      title="Move to previous step"
                      aria-label="Move to previous step"
                      onClick={previousAttribute}
                    >
                      Previous
                    </button>
                  )}
                  {!isFinalStep() ? (
                    <button
                      className={
                        theme.ctaSection.navigationLink +
                        theme.ctaSection.navigationLinkContainerPrimaryButton +
                        ButtonPrimaryClasses(themeName).btnClass
                      }
                      title="Move to next step"
                      aria-label="Move to next step"
                      onClick={nextAttribute}
                    >
                      Next <SvgIcon icon="arrow" size="16" className="ml-[4px]"></SvgIcon>
                    </button>
                  ) : props?.rendering?.placeholders?.requestAQuoteForm[0] ? (
                    <>
                      <button
                        onClick={(e) => handleDesignRequestQuoteModalOpen(e)}
                        className={
                          theme.ctaSection.navigationLink +
                          theme.ctaSection.navigationLinkContainerPrimaryButton +
                          ButtonPrimaryClasses(themeName).btnClass
                        }
                        title={props.fields?.getAQuoteLink?.value?.text}
                        id="request_a_quote"
                      >
                        {props.fields?.getAQuoteLink?.value?.text ?? 'Request A Quote'}
                      </button>
                    </>
                  ) : (
                    shouldShowCTA() &&
                    props.fields?.getAQuoteLink?.value?.href && (
                      <Linkfield
                        onClick={handleDesignRequestQuote}
                        field={props.fields?.getAQuoteLink}
                        className={
                          theme.ctaSection.navigationLink +
                          theme.ctaSection.navigationLinkContainerPrimaryButton +
                          ButtonPrimaryClasses(themeName).btnClass
                        }
                      ></Linkfield>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={theme.printDisplay.printDisplay}>
        <h1 className={theme.printDisplay.header}>
          {props.fields?.product?.fields?.productFullName && (
            <Text field={props.fields?.product?.fields?.productFullName} />
          )}
        </h1>
        <div className={theme.printDisplay.previews}>
          {viewModel?.interiorImage && (
            <figure className={theme.printDisplay.previewSide}>
              <img
                src={viewModel.interiorImage.src}
                alt={viewModel.interiorImage.alt}
                className={theme.printDisplay.previewSideImage}
              ></img>
              <figcaption className={theme.printDisplay.figCaption}>Interior</figcaption>
            </figure>
          )}
          {viewModel?.exteriorImage && (
            <figure className={theme.printDisplay.previewSide}>
              <img
                src={viewModel.exteriorImage.src}
                alt={viewModel.exteriorImage.alt}
                className={theme.printDisplay.previewSideImage}
              ></img>
              <figcaption className={theme.printDisplay.figCaption}>Exterior</figcaption>
            </figure>
          )}
        </div>
        <h2 className={theme.printDisplay.subHeader}>Summary</h2>
        <table className={theme.printDisplay.summaryTable}>
          <tbody>
            {viewModel?.selectedOptions?.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <tr className={theme.printDisplay.tableRow} key={index}>
                  <td className={theme.printDisplay.tableData + theme.printDisplay.tableAsset}>
                    {option.title}
                  </td>
                  <td className={theme.printDisplay.tableData + theme.printDisplay.tableAssetValue}>
                    {option.value}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
