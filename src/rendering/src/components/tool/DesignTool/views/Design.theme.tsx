// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type DesignThemeType = {
  [key in ThemeName]: DesignThemeSubType;
};

export type DesignThemeSubType = {
  classes: {
    stepDesign: string;
    stepContainer: string;
    stepHeading: string;
    stepSubhead: string;
    stepWrapper: string;
    stepRow: string;
    hideMobile: string;
    hide: string;
    imgSlider: string;
    progressBar: string;
    progressBarMobile: string;
    progressBarDesktop: string;
    progressBarItem: string;
    progressBarButton: string;
    progressBarName: string;
    progressBarStep: string;
    progressBarStepLine: string;
    progressBarUnfinished: string;
    progressBarDone: string;
    mobilePreview: {
      button: string;
      buttonHeader: string;
    };
    desktopPreview: {
      wrapper: string;
      swiperWrapper: string;
      sticky: string;
      swiperClose: string;
      swiperCloseIcon: string;
      seriesHeader: string;
      swiper: string;
      swiperPaginationContainer: string;
      swiperPaginationBullet: string;
      swiperPaginationLink: string;
      image: string;
      swiperContainer: string;
      previewImageWrapper: string;
      previewImage: string;
      zoom: string;
      zoomIcon: string;
      mobileZoom: string;
      mobileZoomIcon: string;
      arrowUp: string;
      arrowUpIcon: string;
      arrowUpIconRotateUp: string;
      arrowUpIconRotateDown: string;
    };
    zoomedPreview: {
      swiperWrapper: string;
      swiperPaginationContainer: string;
      seriesHeader: string;
      closeIcon: string;
      swiperContainer: string;
      previewImageWrapper: string;
      previewImage: string;
    };
    attributes: {
      attributes: string;
      attributeMenuList: string;
      attributeMenuListItem: string;
      attributeMenuLink: string;
    };
    ctaSection: {
      ctaSection: string;
      mobileMenuButton: string;
      mobileMenuButtonIcon: string;
      navigationLinkContainer: string;
      navigationLink: string;
      navigationLinkContainerPrimaryButton: string;
      navigationLinkContainerSecondaryButton: string;
      subMenuContainer: string;
      subMenuContainerFinal: string;
      subMenu: string;
      subMenuFinal: string;
      subMenuList: string;
      subMenuListBorder: string;
      subMenuLink: string;
      sectionText: string;
      subMenuLinkImage: string;
      optionsDisclaimer: string;
    };
    mobileMenu: {
      mobileMenu: string;
      closeButton: string;
      closeButtonIcon: string;
      list: string;
      listItem: string;
      listItemLink: string;
      listItemLinkIcon: string;
      listItemStartOver: string;
      listItemStartOverIcon: string;
      options: string;
      optionsText: string;
      optionsList: string;
      optionsListItem: string;
      optionsListItemLink: string;
      optionsListItemLinkImage: string;
    };

    stepCopy: string;
    stepWrapperOptions: string;
    stepWrapperProducts: string;
    mobileResetBtn: string;
    mobileResetBtnIcon: string;
    printDisplay: {
      printDisplay: string;
      header: string;
      previews: string;
      previewSide: string;
      previewSideImage: string;
      figCaption: string;
      subHeader: string;
      summaryTable: string;
      tableRow: string;
      tableData: string;
      tableAsset: string;
      tableAssetValue: string;
    };
  };
};

export const DesignTheme = (): ThemeFile | DesignThemeType => {
  return {
    aw: {
      classes: {
        stepDesign: `step-design py-[30px] px-0 font-futura-pt`,
        stepContainer: `step-container print:hidden m-[0_auto] p-[0_20px] relative min-h-[100vh] md:p-[0_40px] md:min-h-auto`,
        stepHeading: `step-heading text-[32px] text-black leading-[1.2] mb-[5px] p-[0_15px] font-bold md:text-center md:mb-[15px]`,
        stepSubhead: `step-subhead text-[24px] text-black mb-[25px] p-[0_15px] font-bold md:text-center md:mb-[40px]`,
        stepWrapper: `step-wrapper pb-[125px] md:pb-0`,
        stepRow: `step-row flex flex-col md:flex-row md:flex-wrap`,
        hideMobile: ` max-md:hidden `,
        hide: ` invisible h-0 overflow-hidden md:h-auto md:overflow-visible md:visible `,
        imgSlider: `img-slider flex flex-col w-full md:shrink-0 md:w-[60%] pb-[18px] md:flex-[0_0_40%] md:min-w-[40%] md:pb-0 md:pr-[20px] `,
        progressBar: ` progress-bar list-none flex z-[1] m-[0_0_20px_20px] pb-[20px] overflow-x-auto relative xl:overflow-x-visible `,
        progressBarMobile: ` progress-bar--mobile md:hidden m-[0_-20px_20px] pl-0`,
        progressBarDesktop: ` progress-bar--desktop hidden md:flex md:mb-0 `,
        progressBarItem: `progress-bar--item text-center relative max-w-[30%] flex flex-[0_0_30%] flex-col items-center xl:max-w-auto xl:flex-[1] xl:z-auto first:[& progress-bar__step]:before:hidden`,
        progressBarButton: `progress-bar__button cursor-pointer outline-none`,
        progressBarName: `progress-bar__name block text-center mb-[5px] text-[14px] text-gray grow uppercase lg:text-[18px] [&.done]:text-black`,
        progressBarStep: `progress-bar__step rounded-[50%] w-[10px] h-[10px] inline-block  [&.done]:bg-primary`,
        progressBarStepLine: `progress-bar__step-line before:content-[''] before:block before:h-[2px] before:w-full before:absolute before:bottom-[11px] before:left-[-50%] before:z-[-1] [&.done]:before:bg-gray`,
        progressBarUnfinished: `  `,
        progressBarDone: ` bg-primary before:bg-gray `,
        mobilePreview: {
          button: ` preview-btn block md:hidden text-[15px] items-center bg-none border-none cursor-pointer flex justify-end outline-none uppercase px-[6px]`,
          buttonHeader: `preview-btn__series w-full text-left font-regular text-[14px] leading-[1.25] normal-case`,
        },
        desktopPreview: {
          wrapper: `desktop-preview-wrapper collapsible-content relative overflow-hidden`,
          swiperWrapper: `swiper-slider-wrapper max-w-[90%] relative md:text-center`,
          sticky: ` md:sticky before:content-[' '] before:table after:content-[' '] after:table `,
          swiperClose: `swiper-close hidden`,
          swiperCloseIcon: ``,
          seriesHeader: `series mb-[10px] font-regular text-[14px] leading-[1.25] w-full normal-case`,
          swiper: `swiper`,
          swiperPaginationContainer: `swiper-pagination absolute right-[-60%] flex flex-col justify-center w-full h-full top-0 left-auto md:right-auto md:top-auto md:left-0 md:relative md:flex-row md:h-[50px] md:bottom-[-15px]`,
          swiperPaginationBullet: ` inline-block m-[0_10px] cursor-pointer text-black text-[14px] uppercase mx-[10px] md:ml-0 md:text-[18px] md:mr-[30px] first:mb-[15px] last:mr-0`,
          swiperPaginationLink: ` uppercase border-b-[4px] px-[7px] md:px-[10px] inline-block h-[30px]`,
          image: ``,
          swiperContainer: ` swiper-container `,
          previewImageWrapper: `h-[150px] w-full max-w-[150px] flex justify-center items-center md:h-[500px] md:max-w-[485px] relative md:mx-auto`,
          previewImage: `max-h-[500px] h-full w-full object-contain`,
          zoom: ` hidden md:block absolute bottom-[20px] right-[-20px] cursor-pointer `,
          zoomIcon: ``,
          mobileZoom: ` md:hidden absolute bottom-0 cursor-pointer right-auto left-[40%]`,
          mobileZoomIcon: ``,
          arrowUp: `arrow-up-icon margin-[0_0_0_auto] flex md:hidden bg-none border-none cursor-pointer absolute right-0 top-[40%] z-[2]`,
          arrowUpIcon: ` pl-[8px] mx-[10px] h-[40px] flex items-center `,
          arrowUpIconRotateDown: `  `,
          arrowUpIconRotateUp: ` [&>svg]:rotate-[180deg] `,
        },
        zoomedPreview: {
          swiperWrapper: ` bg-white/[0.98] b-0 l-0 w-full max-w-full h-full max-h-full px-[30px] pt-[60px] fixed right-0 top-0 z-[1000] `,
          swiperPaginationContainer: `swiper-pagination flex justify-center mt-[15px]`,
          seriesHeader: ` text-center `,
          closeIcon: ` swiper-close block absolute md:top-[20px] right-[20px]`,
          swiperContainer: ` swiper-container pt-[30px] `,
          previewImageWrapper: ` flex justify-center items-center h-[500px] w-full max-w-[485px] mx-auto`,
          previewImage: ` block h-auto m-[0_auto] max-w-full w-full `,
        },
        attributes: {
          attributes: `attributes flex flex-col w-full md:shrink-0 md:w-[60%] pl-0 pr-0 md:pl-[10px]`,
          attributeMenuList: `attribute-menu--list flex list-style-none justify-between order-[1] max-md:mx-[1em] text-[18px] mt-[1em] ml-[1em] md:border-y-[1px] md:border-y-gray md:order-[0] md:p-[15px_0] `,
          attributeMenuListItem: `attribute-menu--list-item only:w-full only:text-right`,
          attributeMenuLink: `attribute-menu__link gtm-click text-primary`,
        },
        ctaSection: {
          ctaSection: `cta-section mx-[-20px] md:ml-[16px] md:mr-0 md:w-auto md:static order-2`,
          mobileMenuButton: `cta-section__icon block bg-none border-none m-[0_20px_20px_auto] text-right md:hidden`,
          mobileMenuButtonIcon: `mobile-menu-icon inline-block flex items-center justify-center w-[30px] h-[30px] rounded-[50%] relative text-black text-[35px] cursor-pointer shadow-[0_0_7px_0_hsla(0,0%,71.8%,.5)]`,
          navigationLinkContainer: `cta-section__link-container bg-white bottom-0 max-md:fixed w-full z-[1000] flex`,
          navigationLink: ` cta-section__link w-[50%] text-center rounded-0 mr-0 border-[1px] border-primary p-[12px_16px] text-[18px] leading-1 font-regular hover:bg-darkprimary hover:text-white uppercase `,
          navigationLinkContainerPrimaryButton: ` btn primary last-btn bg-primary text-white`,
          navigationLinkContainerSecondaryButton: ` btn secondary bg-white text-primary md:mr-[15px]`,
          subMenuContainer: `cta-section__sub-menu-container hidden md:flex md:justify-end md:items-center md:border-t-[1px] md:border-t-[#b9b9b9] md:mt-[20px]`,
          subMenuContainerFinal: `cta-section__sub-menu-container final flex flex-col w-full order-[-2] md:order-0 md:p-[45px_0] md:border-t-[1px] md:border-t-[#b9b9b9]`,
          subMenu: `cta-section__sub-menu hidden md:list-style-none md:flex md:justify-end md:p-[25px_0_40px] md:m-0`,
          subMenuFinal: `cta-section__sub-menu list-style-none flex justify-end md:p-[25px_0_0] w-full md:w-[65%] my-[18px] md:my-0 mx-auto `,
          subMenuList: `cta-section__sub-menu-list px-[15px] `,
          subMenuListBorder: ` border-r-[1px] border-r-primary last:border-r-0 `,
          subMenuLink: `cta-section__sub-menu-link gtm-click flex flex-col items-center color-primary text-[18px] text-center transition-all text-primary`,
          sectionText: `cta-section__text mb-[15px] text-black inline-block text-[18px] leading-[1.5] `,
          subMenuLinkImage: `block mb-[12px] h-[100px] overflow-hidden [&_span]:max-h-full`,
          optionsDisclaimer: `attribute-options__disclaimer pt-[20px] pl-[15px] text-[14px] leading-[1.2] mr-[15px] mb-[15px]`,
        },
        mobileMenu: {
          mobileMenu: `mobile-menu animate-[slideInFromLeft_.8s_ease-in-out] hidden fixed top-0 right-0 bottom-0 left-0 overflow-y-scroll bg-white/[.98] z-[1000] w-full`,
          closeButton: `close-icon absolute right-0 bg-none border-0 cursor-pointer m-[20px_20px_0_auto]`,
          closeButtonIcon: `fal fa-times`,
          list: `mobile-menu__list list-style-none ml-0 flex flex-col items-center my-[120px]`,
          listItem: `mobile-menu__list-item mb-[40px] text-primary text-[18px] uppercase`,
          listItemLink: ` mobile-menu__list-item-link gtm-click flex justify-between items-center `,
          listItemLinkIcon: ` mobile-menu__list-item-link-icon pr-[12px] text-[25px] align-middle order-[-1] `,
          listItemStartOver: `mobile-menu__list-item-start-over gtm-click`,
          listItemStartOverIcon: `fal fa-redo`,
          options: `mobile-menu__options max-w-[300px] m-[0_auto]`,
          optionsText: `mobile-menu__options-text text-black text-[18px] text-center`,
          optionsList: `mobile-menu__options-list list-style-none ml-0 flex justify-between my-[40px]`,
          optionsListItem: ``,
          optionsListItemLink: `mobile-menu__options-list-link gtm-click flex flex-col text-center items-center text-black text-[14px] uppercase max-w-[60px] transition-all`,
          optionsListItemLinkImage: ` mobile-menu__options-link-image m-[0_auto_12px_auto] `,
        },
        stepCopy: `step-copy`,
        stepWrapperOptions: `step-wrapper-options`,
        stepWrapperProducts: `step-wrapper-products`,
        mobileResetBtn: `mobile-reset--btn`,
        mobileResetBtnIcon: ``,
        printDisplay: {
          printDisplay: `print-display hidden print:block print:pt-[40px] m-[0_auto] w-[90%]`,
          header: ` text-[34px] leading-[1.25] font-bold mb-[12px] uppercase `,
          previews: `previews flex justify-center`,
          previewSide: `preview-side p-[20px] w-full`,
          previewSideImage: `preview-image block h-auto m-[0_auto] max-h-[25vh] max-w-full`,
          figCaption: `figcaption text-[18px] p-[10px] text-center`,
          subHeader: ` text-[34px] leading-[1.25] mb-[12px] `,
          summaryTable: ` summary__table w-full `,
          tableRow: ` odd:bg-light-gray odd:border-t-[#ccc] odd:border-t-[1px] odd:border-b-[#ccc] odd:border-b-[1px] first:border-t-[#aaa] last:border-b-[#aaa] `,
          tableData: ` p-[5px_20px] `,
          tableAsset: ` summary__table-asset text-[14px] font-bold `,
          tableAssetValue: ` summary__table-asset-value text-[18px] `,
        },
      },
    },
    rba: {
      classes: {},
    },
  };
};
