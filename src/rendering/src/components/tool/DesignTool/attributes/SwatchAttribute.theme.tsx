// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type SwatchAttributeThemeType = {
  [key in ThemeName]: SwatchAttributeThemeSubType;
};

export type SwatchAttributeThemeSubType = {
  classes: {
    attributeOption: string;
    copy: string;
    swiperWrapper: string;
    swiperSlide: string;
    swiperContainer: string;
    optionsList: string;
    optionsListItem: string;
    optionsListButton: string;
    optionsListButtonText: string;
    optionsListImageWrapper: string;
    optionsListImage: string;
    optionsListImageSelected: string;
    optionsListImageSelectedBg: string;
    listMore: string;
    listMoreImageWrapper: string;
    listMoreText: string;
    listMoreTextNumber: string;
    listMoreTextMore: string;
    listMoreImage: string;
    disclaimer: string;
  };
};

export const SwatchAttributeTheme = (): ThemeFile | SwatchAttributeThemeType => {
  return {
    aw: {
      classes: {
        attributeOption: ` attribute-options attribute-options--swatch md:ml-[16px] md:mb-[60px] md:mt-[16px] `,
        copy: ` attribute-options__copy pt-[29px] pl-[15px] text-[14px] md:text-[18px] leading-[17px] font-regular`,
        swiperWrapper: `  `,
        swiperSlide: `  `,
        swiperContainer: ` max-w-full [&_.slick-active_button:before]:!text-primary `,
        optionsList: ` attribute-options__list flex flex-wrap w-full max-w-full list-style-none mt-[18px] `,
        optionsListItem: ` attribute-options__list-item flex-[0_0_25%] mb-[40px] pr-[10px] text-center max-w-[25%] lg:pr-[20px] lg:flex-[0_0_16.66%] lg:max-w-[20%] xl:pr-[20px] xl:flex-[0_0_12.5%] xl:max-w-[12.5%] `,
        optionsListButton: ` attribute-options__list-btn w-full text-[18px] leading-[22px] cursor-pointer p-[1px] `,
        optionsListButtonText: ` block mt-[15px] text-[16px] text-center `,
        optionsListImageWrapper: ` attribute-options__list-img-wrapper text-center text-[16px] block relative `,
        optionsListImage: ` block h-auto w-full `,
        optionsListImageSelected: ` selected selected-image absolute bottom-0 right-0 text-white pb-[5px] pr-[5px] [&_svg]:relative `,
        optionsListImageSelectedBg: ` before:absolute before:bottom-0 before:right-0 before:border-l-[50px] before:border-x-[rgba(0,0,0,0)] before:border-r-[0px] before:border-b-[50px] before:border-b-primary `,
        listMore: ` attribute-options__list-more flex-[0_0_25%] mb-[40px] pr-[10px] text-center max-w-[25%] lg:pr-[20px] lg:flex-[0_0_16.66%] lg:max-w-[20%] xl:pr-[20px] xl:flex-[0_0_12.5%] xl:max-w-[12.5%] hover:cursor-pointer`,
        listMoreImageWrapper: ` attribute-options__list-more-img-wrapper bg-[#f16128] block relative min-h-[80px] md:min-h-[100px] `,
        listMoreText: ` attribute-options__list-more-text absolute w-full h-full text-center justify-center items-center font-bold flex flex-col text-white `,
        listMoreTextMore: ` more leading-[0.8] m-0 text-[16px] md:text-[24px] pl-[15px] pt-[15px] `,
        listMoreTextNumber: ` number leading-[0.8] m-0 text-[28px] md:text-[40px] pl-[15px] pt-[15px] `,
        listMoreImage: ` block h-auto w-full `,
        disclaimer: ` attribute-options__disclaimer pt-[20px] pl-[15px] mr-[15px] mb-[15px] text-[14px] leading-[1.25] `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
