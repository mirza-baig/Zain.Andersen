// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type SummaryAttributeThemeType = {
  [key in ThemeName]: SummaryAttributeThemeSubType;
};

export type SummaryAttributeThemeSubType = {
  classes: {
    attributeOption: string;
    tableWrapper: string;
    table: string;
    trow: string;
    tdAsset: string;
    tdValue: string;
    linkContainer: string;
    linkContainerLeft: string;
    linkContainerRight: string;
    subMenu: string;
    subMenuListItem: string;
    subMenuListLink: string;
    primaryLink: string;
    secondaryLink: string;
    sectionLink: string;
    favoriteContainer: string;
    favoriteLink: string;
    favoriteLinkIcon: string;
    relatedContainer: string;
    relatedHeader: string;
    designSummary: {
      container: string;
      containerHidden: string;
      closeButton: string;
      closeButtonIcon: string;
      content: string;
      header: string;
      imagesOuterContainer: string;
      imageWrapper: string;
      image: string;
      imageDescription: string;
      selections: {
        container: string;
        table: string;
        tbody: string;
        tr: string;
        tdAsset: string;
        tdAssetValue: string;
      };
    };
  };
};

export const SummaryAttributeTheme = (): ThemeFile | SummaryAttributeThemeType => {
  return {
    aw: {
      classes: {
        attributeOption: ` step-final md:mb-[60px] `,
        tableWrapper: ` summary md:ml-[16px] `,
        table: ` summary__table w-full `,
        trow: ` odd:bg-[#ededed] `,
        tdAsset: ` summary__table-asset p-[18px_0_0_20px] md:p-[18px_20px] text-[#484848] block md:table-cell font-bold text-[14px] leading-[1.5] `,
        tdValue: ` summary__table-asset-value p-[0_0_18px_20px] md:p-[18px_20px] text-[#484848] block md:table-cell text-[18px] leading-[1.5] `,
        linkContainer: ` cta-summary-section__link-container flex flex-row pl-[20px] pt-[15px] `,
        linkContainerLeft: ` cta-summary-section__link-container-left hidden md:flex flex-row justify-start w-full md:pb-[15px]`,
        linkContainerRight: ` cta-summary-section__link-container-right flex flex-row md:pl-[15px] md:pb-[15px] items-center justify-start w-full fixed bottom-0 left-0 md:relative z-[100] `,
        subMenu: ` cta-summary-section__sub-menu flex p-[25px_0_0] m-0 `,
        subMenuListItem: ` cta-summary-section__sub-menu-list border-r-[1px] border-r-primary px-[15px] last:border-r-[rgba(0,0,0,0)] `,
        subMenuListLink: ` cta-summary-section__sub-menu-link gtm-click cursor-pointer text-primary text-[18px] leading-[1.5] `,
        primaryLink: ` primary w-[50%] text-center rounded-0 mr-0 border-[1px] border-primary p-[12px_16px] text-[18px] leading-1 font-regular hover:bg-darkprimary hover:text-white uppercase bg-primary !text-white md:mr-[15px] md:last:mr-0`,
        secondaryLink: ` secondary w-[50%] text-center rounded-0 mr-0 border-[1px] border-primary p-[12px_16px] text-[18px] leading-1 font-regular hover:bg-darkprimary hover:text-white uppercase  bg-white text-primary md:mr-[15px] md:last:mr-0 `,
        sectionLink: ` cta-section__link `,
        favoriteContainer: ` cta-summary-section__link-favorite-container flex flex-row md:pl-[35px] md:pt-[15px] `,
        favoriteLink: ` favorite-link gtm-click flex text-primary text-[18px] leading-[1.5] `,
        favoriteLinkIcon: ` text-primary inline-block my-auto mr-[6px] cursor-pointer`,
        relatedContainer: ` related mt-[20px] md:mt-[40px] `,
        relatedHeader: ` also-like text-center text-[22px] leading-[1.25] mb-[10px] `,
        designSummary: {
          container: ` fixed top-0 left-0 w-full h-full bg-white z-[10000] overflow-auto `,
          containerHidden: `hidden`,
          closeButton: ` absolute top-[10px] md:top-[20px] right-[10px] md:right-[20px] cursor-pointer w-[35px] md:w-[50px] h-[35px] md:h-[50px] text-white bg-dark-gray rounded-[50%] flex flex-row items-center `,
          closeButtonIcon: ` flex flex-col items-center w-full `,
          content: ` design-summary-content md:mr-s `,
          header: ` m-[10px_50px] md:m-[10px_75px_10px_40px] text-left text-[22px] leading-[1.25] font-demi text-black `,
          imagesOuterContainer: ` design-summary-images flex items-center flex-wrap `,
          imageWrapper: ` design-summary-image flex flex-col flex-auto items-center text-center p-[10px] `,
          image: ` max-w-[150px] `,
          imageDescription: `  `,
          selections: {
            container: ` design-summary-selections p-[10px] `,
            table: ` design-summary-table w-full mt-[15px] md:mt-[20px] `,
            tbody: `  `,
            tr: ` odd:border-t-[1px] odd:border-t-dark-gray odd:bg-white border-b-[1px] border-b-dark-gray border-l-[1px] border-l-dark-gray text-[16px] leading-[1] `,
            tdAsset: ` w-asset w-[50%] border-r-[1px] border-r-dark-gray p-[7px_7px_7px_10px] md:p-[10px_10px_10px_20px] text-[16px] leading-[1] `,
            tdAssetValue: ` w-asset-value w-[50%] border-r-[1px] border-r-dark-gray p-[7px_7px_7px_10px] md:p-[10px_10px_10px_20px] text-[16px] leading-[1] `,
          },
        },
      },
    },
    rba: {
      classes: {},
    },
  };
};
