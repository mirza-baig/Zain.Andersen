// Global
import { Link as LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

// Components
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import { PreviewImage } from 'src/lib/renoworks';
import RenderAttribute from 'src/lib/renoworks/RenderAttribute';
import { rendererMap } from '../attributes/renderMap.helper';
import { DesignToolProductProps, DesignToolProps } from '../DesignTool';
import { DesignToolOptionDataProps, prepareDesignSelectionData } from '../DesignTool.helper';
import { DesignToolContext } from '../DesignToolContext.helper';
import { AWViewModelBuilder } from '../js/awviewmodelbuilder';
import { RenoworksProductSide } from '../js/renoworks';
import { useRenoworks } from '../js/renoworks-context';
import { GetUrlParts } from '../js/utils';
import { PreviewImageThemes } from '../partial/PreviewImage.theme';
import { DesignTheme, DesignThemeSubType } from './Design.theme';
import { SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

export type DesignToolDesignProps = DesignToolProps;

export type DesignViewProps = {
  product: DesignToolProductProps;
  options: DesignToolOptionDataProps[];
  attributeIndex: number;
};

export const Design = ({ product, options }: DesignViewProps) => {
  const router = useRouter();
  const { designToolRouter, routeData } = useContext(DesignToolContext);
  const legacyAWViewModel = routeData.legacyAWViewModel ?? new AWViewModelBuilder();

  const { viewModel } = useRenoworks();
  const progressBar = viewModel?.progressBar;
  const { themeName, themeData } = useTheme(DesignTheme());
  const theme = (themeData as DesignThemeSubType).classes;
  const [attributeIndex, setAttributeIndex] = useState<number>(0);
  const previewTheme = useTheme(PreviewImageThemes()).themeData;

  const $refs = {
    mobileMenu: React.useRef<HTMLDivElement>(null),
    progressBarMobile: React.useRef<HTMLUListElement>(null),
    progressItemsMobile: React.useRef<HTMLLIElement>(null),
    progressBarDesktop: React.useRef<HTMLUListElement>(null),
    progressItemsDesktop: React.useRef<HTMLLIElement>(null),
    sticky: React.useRef<HTMLDivElement>(null),
    desktopPreview: React.useRef<HTMLDivElement>(null),
    desktopPreviewHeader: React.useRef<HTMLHeadingElement>(null),
    mobilePreview: React.useRef<HTMLButtonElement>(null),
    mobilePreviewHeader: React.useRef<HTMLHeadingElement>(null),
    sliderRef: React.useRef<SliderType>(),
  };

  useEffect(() => {
    if (!router.isReady || !viewModel) {
      return;
    }

    const urlParts = GetUrlParts(router.asPath);
    let newIndex = parseInt(urlParts.attributeIndex) || 0;

    if (newIndex < 0) {
      newIndex = 0;
    }

    if (newIndex >= viewModel.attributes.length) {
      newIndex = viewModel.attributes.length - 1;
    }

    setAttributeIndex(newIndex);
  }, [router.isReady, router.asPath, viewModel]);

  /// Attributes
  let mobileMenuIsVisible = false;
  let previewIsCollapsed = false;
  const [previewIsZoomed, setPreviewIsZoomed] = React.useState(false);

  const resetDesign = () => {
    const urlParts = GetUrlParts(router.asPath);
    const newPath = `${urlParts.pathName}#/${product.id}/0`;

    router.replace(newPath, newPath, { shallow: true });
  };

  const isFinalStep = () => {
    return attributeIndex === (viewModel?.attributes?.length || 0) - 1;
  };

  const mobileMenuStyle = () => {
    return mobileMenuIsVisible ? 'block' : 'none';
  };

  const stepHeading = () => {
    return isFinalStep() ? product.summaryHeading : product.designHeading;
  };

  const stepSubhead = () => {
    return isFinalStep() ? product.summarySubhead : product.designSubhead;
  };

  /// Methods
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attributeOptionGroupSelected = (optionGroup: any, collection?: any[]) => {
    collection?.forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (option: any) => {
        option._isSelected = false;
        option._isClicked = false;
      }
    );
    optionGroup._isClicked = true;
    optionGroup._isSelected = true;

    if (
      optionGroup.options &&
      !optionGroup.options.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (option: any) => option.isSelected
      )
    ) {
      optionGroup.options[0]._isSelected = true;
    }

    updateSettings(optionGroup.productSettingChanges);
    updateVisibleImage(optionGroup.imageSide);
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const attributeOptionSelected = (option: any, collection?: any[]) => {
    collection?.forEach((option: any) => {
      /* eslint-enable @typescript-eslint/no-explicit-any */
      option._isSelected = false;
      option._isClicked = false;
    });
    option._isClicked = true;
    option._isSelected = true;
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

  const goToStep = (index: number) => {
    const urlParts = GetUrlParts(router.asPath);
    const queryPart = urlParts.query ? `?${urlParts.query}` : '';
    const newPath = `${urlParts.pathName}${queryPart}#/${product.id}/${index ?? 0}`;

    prepareDesignSelectionData(`Jump To Step ${index + 1}`, product, viewModel);
    router.push(newPath);
  };

  const nextAttribute = () => {
    const urlParts = GetUrlParts(router.asPath);
    const queryPart = urlParts.query ? `?${urlParts.query}` : '';
    const newPath = `${urlParts.pathName}${queryPart}#/${urlParts.option}/${attributeIndex + 1}`;

    prepareDesignSelectionData('Next Step', product, viewModel);

    router.push(newPath);
    const element = document.getElementById(`Tab-${attributeIndex + 2}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  const previousAttribute = () => {
    const urlParts = GetUrlParts(router.asPath);
    const queryPart = urlParts.query ? `?${urlParts.query}` : '';

    prepareDesignSelectionData('Previous Step', product, viewModel);

    if (attributeIndex === 0) {
      router.push(`${urlParts.pathName}${queryPart}#/${product.parentId}`);
    } else {
      router.push(`${urlParts.pathName}${queryPart}#/${urlParts.option}/${attributeIndex - 1}`);
    }
    const element = document.getElementById(`Tab-${attributeIndex - 1}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  const toggleMobileMenu = () => {
    mobileMenuIsVisible = !mobileMenuIsVisible;
    $refs.mobileMenu.current?.style.setProperty('display', mobileMenuStyle());
  };

  const togglePreviewCollapse = () => {
    previewIsCollapsed = !previewIsCollapsed;
    updatePreviewCollapse();
  };

  const updatePreviewCollapse = () => {
    if (previewIsCollapsed) {
      $refs.desktopPreview.current?.setAttribute(
        'class',
        $refs.desktopPreview.current?.className + theme.hide
      );
      $refs.desktopPreviewHeader.current?.setAttribute(
        'class',
        $refs.desktopPreviewHeader.current?.className + theme.hide
      );
      $refs.mobilePreview.current?.setAttribute(
        'class',
        $refs.mobilePreview.current?.className.replaceAll(theme.hide, '')
      );
      $refs.mobilePreviewHeader.current?.setAttribute(
        'class',
        $refs.mobilePreviewHeader.current?.className.replaceAll(theme.hide, '')
      );
    } else {
      $refs.desktopPreview.current?.setAttribute(
        'class',
        $refs.desktopPreview.current?.className.replaceAll(theme.hide, '')
      );
      $refs.desktopPreviewHeader.current?.setAttribute(
        'class',
        $refs.desktopPreviewHeader.current?.className.replaceAll(theme.hide, '')
      );
      $refs.mobilePreview.current?.setAttribute(
        'class',
        $refs.mobilePreview.current?.className + theme.hide
      );
      $refs.mobilePreviewHeader.current?.setAttribute(
        'class',
        $refs.mobilePreviewHeader.current?.className + theme.hide
      );
    }
  };

  const togglePreviewZoom = () => {
    setPreviewIsZoomed(!previewIsZoomed);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateSettings = (changes: any) => {
    const updatedProductSettingValues = viewModel?.renoworksResult.productSettingValues.clone();
    for (const change of changes) {
      change.apply(updatedProductSettingValues);
    }

    const pathParts = GetUrlParts(router.asPath);
    const queryString = updatedProductSettingValues?.toURLQueryString();

    const newPath = `${pathParts.pathName}${queryString ? '?' + queryString : ''}#/${
      pathParts.option
    }/${attributeIndex}`;

    router.replace(newPath, newPath, { shallow: true });
  };

  const pagingText = ['Interior', 'Exterior'];
  const renderCustomPaging = (index: number) => {
    return <a className={theme.desktopPreview.swiperPaginationLink}>{pagingText[index]}</a>;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appendDots = (dots: any[]) => {
    return (
      <ul>
        {dots.map((item, index) => {
          const isActiveClass = item?.props?.className?.includes('slick-active')
            ? ' [&_a]:border-b-primary '
            : ' [&_a]:border-b-[rgba(0,0,0,0)] ';

          return (
            <li
              className={
                item?.props?.className + isActiveClass + theme.desktopPreview.swiperPaginationBullet
              }
              key={index}
            >
              {item.props.children}
            </li>
          );
        })}
      </ul>
    );
  };

  updatePreviewCollapse();

  const sliderSettings = {
    infinite: false,
    className: theme.desktopPreview.swiper + theme.desktopPreview.sticky,
    prevArrow: undefined,
    nextArrow: undefined,
    appendDots: appendDots,
    dotsClass: previewIsZoomed
      ? theme.zoomedPreview.swiperPaginationContainer
      : theme.desktopPreview.swiperPaginationContainer,
    customPaging: renderCustomPaging,
  };

  return (
    legacyAWViewModel && (
      <div className={theme.stepDesign}>
        <div className={theme.stepContainer}>
          <h2 className={theme.stepHeading + (!isFinalStep() ? ' max-md:hidden' : '')}>
            <Text field={stepHeading()} encode={false}></Text>
          </h2>
          <h3 className={theme.stepSubhead + (!isFinalStep() ? ' max-md:hidden' : '')}>
            <Text field={stepSubhead()} encode={false}></Text>
          </h3>
          <div className={theme.stepWrapper}>
            <div className={theme.stepRow}>
              <div className={theme.imgSlider}>
                <ul
                  className={theme.progressBar + theme.progressBarMobile}
                  ref={$refs.progressBarMobile}
                >
                  {progressBar?.map(
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
                            id={`Tab-${progressBarItem.startIndex}`}
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
                <button
                  className={theme.mobilePreview.button}
                  title="Open preview images"
                  aria-label="Open preview images"
                  onClick={togglePreviewCollapse}
                  ref={$refs.mobilePreview}
                >
                  <h3 className={theme.mobilePreview.buttonHeader} ref={$refs.mobilePreviewHeader}>
                    <span>
                      <Text field={product.series}></Text> <Text field={product.category}></Text>
                    </span>
                  </h3>
                  Preview
                  <SvgIcon
                    icon={'dropdown-arrow'}
                    size="20"
                    className={
                      theme.desktopPreview.arrowUpIcon + theme.desktopPreview.arrowUpIconRotateDown
                    }
                  ></SvgIcon>
                </button>
                <div className={theme.desktopPreview.wrapper} ref={$refs.desktopPreview}>
                  <div
                    className={
                      previewIsZoomed
                        ? theme.zoomedPreview.swiperWrapper
                        : theme.desktopPreview.swiperWrapper + theme.desktopPreview.sticky
                    }
                    ref={$refs.sticky}
                  >
                    <button
                      className={
                        previewIsZoomed
                          ? theme.zoomedPreview.closeIcon
                          : theme.desktopPreview.swiperClose
                      }
                      title="Toggle preview zoom"
                      aria-label="Toggle preview zoom"
                      onClick={() => togglePreviewZoom()}
                    >
                      <SvgIcon
                        icon={'close'}
                        size="20"
                        className={theme.desktopPreview.swiperCloseIcon}
                      ></SvgIcon>
                    </button>
                    <h3
                      className={
                        theme.desktopPreview.seriesHeader +
                        (previewIsZoomed ? theme.zoomedPreview.seriesHeader : ' ')
                      }
                      ref={$refs.desktopPreviewHeader}
                    >
                      <span>
                        <Text field={product.series}></Text> <Text field={product.category}></Text>
                      </span>
                    </h3>
                    {viewModel?.interiorImage && viewModel?.exteriorImage ? (
                      <div
                        className={
                          previewIsZoomed
                            ? theme.zoomedPreview.swiperContainer
                            : theme.desktopPreview.swiperContainer
                        }
                      >
                        <SliderWrapper
                          sliderSettings={sliderSettings}
                          theme={themeName}
                          sliderRef={$refs.sliderRef as SliderRefType}
                        >
                          <>
                            <div
                              className={
                                previewIsZoomed
                                  ? theme.zoomedPreview.previewImageWrapper
                                  : theme.desktopPreview.previewImageWrapper
                              }
                            >
                              <PreviewImage
                                theme={previewTheme}
                                className={theme.desktopPreview.previewImage}
                                src={viewModel?.interiorImage.src}
                                alt={viewModel?.interiorImage.alt}
                              ></PreviewImage>
                            </div>
                          </>
                          <>
                            <div
                              className={
                                previewIsZoomed
                                  ? theme.zoomedPreview.previewImageWrapper
                                  : theme.desktopPreview.previewImageWrapper
                              }
                            >
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
                      <div
                        className={
                          previewIsZoomed
                            ? theme.zoomedPreview.swiperContainer
                            : theme.desktopPreview.swiperContainer
                        }
                      >
                        {viewModel?.interiorImage ? (
                          <div
                            className={
                              previewIsZoomed
                                ? theme.zoomedPreview.previewImageWrapper
                                : theme.desktopPreview.previewImageWrapper
                            }
                          >
                            <PreviewImage
                              theme={previewTheme}
                              className={theme.desktopPreview.previewImage}
                              src={viewModel?.interiorImage.src}
                              alt={viewModel?.interiorImage.alt}
                            ></PreviewImage>
                          </div>
                        ) : (
                          viewModel?.exteriorImage && (
                            <div
                              className={
                                previewIsZoomed
                                  ? theme.zoomedPreview.previewImageWrapper
                                  : theme.desktopPreview.previewImageWrapper
                              }
                            >
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
                    <div className={theme.desktopPreview.zoom} onClick={togglePreviewZoom}>
                      <SvgIcon
                        icon={'zoom-pinch'}
                        size="20"
                        className={theme.desktopPreview.zoomIcon}
                      ></SvgIcon>
                    </div>
                  </div>
                  <div className={theme.desktopPreview.mobileZoom} onClick={togglePreviewZoom}>
                    <SvgIcon
                      icon={'zoom-pinch'}
                      size="20"
                      className={theme.desktopPreview.mobileZoomIcon}
                    ></SvgIcon>
                  </div>
                  <button
                    className={theme.desktopPreview.arrowUp}
                    title="Hide preview images"
                    aria-label="Hide preview images"
                    onClick={togglePreviewCollapse}
                  >
                    {' '}
                    <SvgIcon
                      icon={'dropdown-arrow'}
                      size="20"
                      className={
                        theme.desktopPreview.arrowUpIcon + theme.desktopPreview.arrowUpIconRotateUp
                      }
                    ></SvgIcon>
                  </button>
                </div>
              </div>
              <div className={theme.attributes.attributes}>
                <ul
                  className={theme.progressBar + theme.progressBarDesktop}
                  ref={$refs.progressBarDesktop}
                >
                  {progressBar?.map(
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
                            id={`Tab-${progressBarItem.startIndex}`}
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
                <ul className={theme.attributes.attributeMenuList}>
                  {viewModel?.attributes[attributeIndex]?.tertiaryLinks.map(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (link: any, index: number) => (
                      <li className={theme.attributes.attributeMenuListItem} key={index}>
                        <LinkField
                          field={link}
                          className={theme.attributes.attributeMenuLink}
                          target="_blank"
                        ></LinkField>
                      </li>
                    )
                  )}
                  <li className={theme.attributes.attributeMenuListItem + theme.hideMobile}>
                    <button
                      className={theme.attributes.attributeMenuLink}
                      title={'Clear My Choices'}
                      aria-label={'Clear My Choices'}
                      onClick={() => {
                        resetDesign();
                      }}
                    >
                      Clear My Choices
                    </button>
                  </li>
                </ul>
                <RenderAttribute
                  props={viewModel?.attributes[attributeIndex]}
                  rendererMap={rendererMap}
                  viewModel={viewModel?.attributes[attributeIndex]}
                  selectedOptions={viewModel?.selectedOptions}
                  onUpdateOption={attributeOptionSelected}
                  onUpdateOptionGroup={attributeOptionGroupSelected}
                  attributeIndex={attributeIndex}
                  maxAttributeIndex={viewModel?.attributes?.length || 20}
                ></RenderAttribute>
                <div
                  className={theme.ctaSection.ctaSection + (isFinalStep() ? ' final-step' : ' ')}
                >
                  <button
                    className={theme.ctaSection.mobileMenuButton}
                    title="Toggle mobile menu"
                    aria-label="Toggle mobile menu"
                    onClick={toggleMobileMenu}
                  >
                    <SvgIcon
                      icon={'ellipsis'}
                      size="20"
                      className={theme.ctaSection.mobileMenuButtonIcon}
                    ></SvgIcon>
                  </button>
                  <div className={theme.ctaSection.navigationLinkContainer}>
                    {!isFinalStep() && (
                      <button
                        className={
                          theme.ctaSection.navigationLink +
                          theme.ctaSection.navigationLinkContainerSecondaryButton
                        }
                        title="Move to previous step"
                        aria-label="Move to previous step"
                        onClick={previousAttribute}
                      >
                        Previous
                      </button>
                    )}
                    {!isFinalStep() && (
                      <button
                        className={
                          theme.ctaSection.navigationLink +
                          theme.ctaSection.navigationLinkContainerPrimaryButton
                        }
                        title="Move to next step"
                        aria-label="Move to next step"
                        onClick={nextAttribute}
                      >
                        Next
                      </button>
                    )}
                  </div>
                  {!isFinalStep() && (
                    <ul className={theme.ctaSection.subMenu}>
                      <li
                        className={
                          theme.ctaSection.subMenuList + theme.ctaSection.subMenuListBorder
                        }
                        onClick={(e) => {
                          if (e.target instanceof HTMLAnchorElement) {
                            prepareDesignSelectionData('Product Details', product, viewModel);
                          }
                        }}
                      >
                        <LinkWrapper
                          field={product.links.detail}
                          className={theme.ctaSection.subMenuLink}
                          target="_blank"
                          ariaLabel={{
                            value: product.links.detail || 'product links detail',
                          }}
                        ></LinkWrapper>
                      </li>
                      <li
                        className={
                          theme.ctaSection.subMenuList + theme.ctaSection.subMenuListBorder
                        }
                      >
                        <button
                          className={theme.ctaSection.subMenuLink}
                          title="Print this design"
                          aria-label="Print this design"
                          onClick={() => {
                            prepareDesignSelectionData('Print', product, viewModel);
                            window.print();
                          }}
                        >
                          Print
                        </button>
                      </li>
                    </ul>
                  )}
                  <div
                    className={
                      isFinalStep()
                        ? theme.ctaSection.subMenuContainerFinal
                        : theme.ctaSection.subMenuContainer
                    }
                  >
                    <span
                      className={
                        theme.ctaSection.sectionText + (isFinalStep() ? ' text-center ' : '')
                      }
                    >
                      Design a Different:
                    </span>
                    <ul
                      className={
                        isFinalStep() ? theme.ctaSection.subMenuFinal : theme.ctaSection.subMenu
                      }
                    >
                      {options.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (option: any, index: number) => (
                          <li
                            className={
                              theme.ctaSection.subMenuList +
                              (isFinalStep() ? ' basis-[25%] ' : theme.ctaSection.subMenuListBorder)
                            }
                            key={index}
                          >
                            <Link href={'#/' + option.id}>
                              <a
                                className={theme.ctaSection.subMenuLink}
                                title={'Design a different ' + option.heading?.value}
                                aria-label={'Design a different ' + option.heading?.value}
                              >
                                {isFinalStep() && option.icon && (
                                  <ImageWrapper
                                    image={option.icon}
                                    imageLayout="intrinsic"
                                    additionalDesktopClasses={theme.ctaSection.subMenuLinkImage}
                                  ></ImageWrapper>
                                )}
                                <Text field={option.heading}></Text>
                              </a>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className={theme.mobileMenu.mobileMenu} ref={$refs.mobileMenu}>
                  <button
                    className={theme.mobileMenu.closeButton}
                    title="Close"
                    aria-label="Close"
                    onClick={toggleMobileMenu}
                  >
                    <SvgIcon
                      icon={'close'}
                      size="25"
                      className={theme.mobileMenu.closeButtonIcon}
                    ></SvgIcon>
                  </button>
                  <ul className={theme.mobileMenu.list}>
                    <li className={theme.mobileMenu.listItem}>
                      <Link href={'#/'}>
                        <a
                          className={
                            theme.mobileMenu.listItemLink + theme.mobileMenu.listItemStartOver
                          }
                          title="Start Over"
                          aria-label="Start Over"
                          onClick={() => {
                            designToolRouter.clearRouteData();
                          }}
                        >
                          <SvgIcon
                            icon={'reset'}
                            size="20"
                            className={
                              theme.mobileMenu.listItemLinkIcon +
                              theme.mobileMenu.listItemStartOverIcon
                            }
                          ></SvgIcon>
                          Start Over
                        </a>
                      </Link>
                    </li>
                    <li className={theme.mobileMenu.listItem}>
                      <button
                        className={theme.mobileMenu.listItemLink}
                        title="Clear My Choices"
                        aria-label="Clear My Choices"
                        onClick={() => {
                          toggleMobileMenu();
                          resetDesign();
                        }}
                      >
                        <SvgIcon
                          icon={'close'}
                          size="20"
                          className={theme.mobileMenu.listItemLinkIcon}
                        ></SvgIcon>
                        Clear My Choices
                      </button>
                    </li>
                    <li className={theme.mobileMenu.listItem}>
                      <LinkWrapper
                        field={product.links.detail}
                        className={theme.mobileMenu.listItemLink}
                        ariaLabel={{
                          value: product.links.detail || 'product links detail',
                        }}
                      >
                        <SvgIcon
                          icon={'cube'}
                          size="40"
                          className={theme.mobileMenu.listItemLinkIcon}
                        ></SvgIcon>
                      </LinkWrapper>
                    </li>
                  </ul>
                  <div className={theme.mobileMenu.options}>
                    <p className={theme.mobileMenu.optionsText}>Design a Different</p>
                    <ul className={theme.mobileMenu.optionsList}>
                      {options.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (option: any, index: number) => (
                          <li key={index} className={theme.mobileMenu.optionsListItem}>
                            <Link href={'#' + option.id}>
                              <a
                                className={theme.mobileMenu.optionsListItemLink}
                                title={option.heading?.value}
                                aria-label={option.heading?.value}
                              >
                                {option.icon && (
                                  <ImageWrapper
                                    image={option.icon}
                                    additionalMobileClasses={
                                      theme.mobileMenu.optionsListItemLinkImage
                                    }
                                    additionalDesktopClasses={
                                      theme.mobileMenu.optionsListItemLinkImage
                                    }
                                  ></ImageWrapper>
                                )}
                                <Text field={option.heading}></Text>
                              </a>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className={theme.ctaSection.ctaSection + (isFinalStep() ? ' final-step' : '')}>
                  {product.text.disclaimer && (
                    <p className={theme.ctaSection.optionsDisclaimer}>
                      <Text field={product.text.disclaimer} encode={false}></Text>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={theme.printDisplay.printDisplay}>
          <h1 className={theme.printDisplay.header}>
            <Text field={product.series}></Text> <Text field={product.category}></Text>
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
                    <td
                      className={theme.printDisplay.tableData + theme.printDisplay.tableAssetValue}
                    >
                      {option.value}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};
