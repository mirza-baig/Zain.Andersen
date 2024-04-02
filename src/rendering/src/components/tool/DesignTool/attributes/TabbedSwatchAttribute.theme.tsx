// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type TabbedSwatchAttributeThemeType = {
  [key in ThemeName]: TabbedSwatchAttributeThemeSubType;
};

export type TabbedSwatchAttributeThemeSubType = {
  classes: {
    attributeOption: string;
    copy: string;
    sizingName: string;
    dropDownSelectList: string;
    dropDownSelect: string;
    dropDownSelectIcon: string;
    swiperWrapper: string;
    swiperSlide: string;
    swiperContainer: string;
    list: string;
    listItem: string;
    listItemButton: string;
    listItemButtonSelected: string;
    listItemButtonText: string;
    listItemImageWrapper: string;
    listItemImage: string;
    listItemImageSelected: string;
    listItemImageSelectedBg: string;
    tabButton: string;
    tabActive: string;
    tabInactive: string;
    listMore: string;
    listMoreImageWrapper: string;
    listMoreText: string;
    listMoreTextNumber: string;
    listMoreTextMore: string;
    listMoreImage: string;
    disclaimer: string;
  };
};

export const TabbedSwatchAttributeTheme = (): ThemeFile | TabbedSwatchAttributeThemeType => {
  return {
    aw: {
      classes: {
        attributeOption: ` attribute-options attribute-options--tabbed md:ml-[16px] md:mb-[60px] md:mt-[16px] `,
        copy: ` attribute-options__copy pt-[29px] pl-[15px] mb-[15px] text-[14px] md:text-[18px] leading-[17px] font-regular`,
        sizingName: ` attribute-options--sizing__name text-[14px] pt-[30px] pl-[20px] uppercase md:text-[20px] `,
        dropDownSelectList: ` block border-[1px] border-black rounded-[4px] p-[12px_20px] relative md:hidden `,
        dropDownSelect: ` appearance-none border-none text-black text-[18px] bg-none bg-[rgba(0,0,0,0)] w-full p-[8px_10px] m-[2px_0_0_0] rounded-[3px] `,
        dropDownSelectIcon: ` absolute h-full right-[20px] top-0 flex z-[-1] items-center `,
        swiperWrapper: `  `,
        swiperSlide: `  `,
        swiperContainer: ` max-w-full [&_.slick-active_button:before]:!text-primary `,
        list: `attribute-options__list flex list-style-none ml-0 mb-0 max-w-full flex-wrap w-full mt-[18px] `,
        listItem: ` attribute-options__list-item flex-[0_0_25%] mb-[40px] pr-[10px] text-center max-w-[25%] lg:pr-[20px] lg:flex-[0_0_16.66%] lg:max-w-[20%] xl:pr-[20px] xl:flex-[0_0_12.5%] xl:max-w-[12.5%]`,
        listItemButton: ` attribute-options__list-btn w-full text-[18px] leading-[22px] cursor-pointer p-[1px] `,
        listItemButtonSelected: ` selected selected-button border-b-[4px] border-b-primary p-[1px_6px] `,
        listItemButtonText: ` block mt-[15px] text-[16px] text-center normal-case `,
        listItemImageWrapper: ` attribute-options__list-img-wrapper w-full relative inline-block `,
        listItemImage: ` attribute-options__list-img w-full `,
        listItemImageSelected: ` selected selected-image absolute bottom-0 right-0 text-white pb-[5px] pr-[5px] [&_svg]:relative `,
        listItemImageSelectedBg: ` before:absolute before:bottom-0 before:right-0 before:border-l-[50px] before:border-x-[rgba(0,0,0,0)] before:border-r-[0px] before:border-b-[50px] before:border-b-primary `,
        tabButton: ` attribute-options--tabbed__tab-btn cursor-pointer text-[#484848] uppercase h-[30px] mx-[10px] border-b-[4px] md:ml-0 font-light mb-[15px] md:mr-[30px] px-[6px] text-[14px] md:text-[18px] `,
        tabActive: ` attribute-options--tabbed__tab-btn-active border-b-primary `,
        tabInactive: ` attribute-options--tabbed__tab-btn-inactive border-b-[rgba(0,0,0,0)] `,
        listMore: ` attribute-options__list-more flex-[0_0_25%] mb-[40px] pr-[10px] text-center max-w-[25%] lg:pr-[20px] lg:flex-[0_0_16.66%] lg:max-w-[20%] xl:pr-[20px] xl:flex-[0_0_12.5%] xl:max-w-[12.5%] hover:cursor-pointer`,
        listMoreImageWrapper: ` attribute-options__list-more-img-wrapper bg-[#f16128] block relative min-h-[80px] md:min-h-[100px] `,
        listMoreText: ` attribute-options__list-more-text absolute w-full h-full text-center justify-center items-center font-bold flex flex-col text-white `,
        listMoreTextMore: ` more leading-[0.8] m-0 text-[16px] md:text-[24px] pl-[15px] pt-[15px] `,
        listMoreTextNumber: ` number leading-[0.8] m-0 text-[28px] md:text-[40px] pl-[15px] pt-[15px] `,
        listMoreImage: ` block h-auto w-full `,
        disclaimer: `  pt-[20px] pl-[15px] mr-[15px] mb-[15px] text-[14px] leading-[1.25] `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
