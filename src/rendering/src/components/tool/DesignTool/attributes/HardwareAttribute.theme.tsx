// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type HardwareAttributeThemeType = {
  [key in ThemeName]: HardwareAttributeThemeSubType;
};

export type HardwareAttributeThemeSubType = {
  classes: {
    attributeOption: string;
    titleMobile: string;
    copy: string;
    container: string;
    containerHardware: string;
    containerTypeDesktop: string;
    listBordered: string;
    hardwareTypeListItem: string;
    listItem: string;
    listItemButton: string;
    listItemButtonSelected: string;
    listItemButtonText: string;
    listItemImageWrapper: string;
    listItemImage: string;
    listItemImageSelected: string;
    listItemImageSelectedBg: string;
    dropDownSelectList: string;
    dropDownSelectListMobile: string;
    dropDownSelect: string;
    dropDownSelectIcon: string;
    containerTypeMobile: string;
    containerTypeMobileImage: string;
    containerFinish: string;
    containerFinishTitleMobile: string;
    containerlist: string;
    containerOptional: string;
    title: string;
    disclaimer: string;
  };
};

export const HardwareAttributeTheme = (): ThemeFile | HardwareAttributeThemeType => {
  return {
    aw: {
      classes: {
        attributeOption: ` attribute-options attribute-options--hardware md:ml-[16px] md:mb-[60px] md:mt-[16px] `,
        titleMobile: ` attribute-options__mobile-title pl-[15px] pt-[15px] text-[14px] leading-[17px] uppercase md:hidden `,
        copy: ` attribute-options__copy pt-[29px] pl-[15px] text-[14px] md:text-[18px] leading-[17px] font-regular`,
        container: ` attribute-options--hardware__container flex flex-col mt-[10px] md:mt-[30px] `,
        containerHardware: ` attribute-options--hardware__container-hardware flex flex-col md:flex-row `,
        containerTypeDesktop: ` attribute-options--hardware__container-hardware-type desktop hidden md:flex flex-[0_0_40%] min-w-[40%] min-h-[500px] mb-[25px] `,
        listBordered: ` attribute-options__list bordered flex flex-start justify-center list-style-none ml-0 mb-0 max-w-full flex-wrap w-full p-[20px_15px] border-[1px] border-gray `,
        hardwareTypeListItem: ` attribute-options__list-item flex-[0_0_50%] max-w-[50%] `,
        listItem: ` attribute-options__list-item flex-[0_0_25%] mb-[40px] pr-[10px] text-center max-w-[25%] lg:pr-[20px] lg:flex-[0_0_25%] lg:max-w-[20%] xl:pr-[20px] xl:flex-[0_0_20%] xl:max-w-[20%] `,
        listItemButton: ` w-full `,
        listItemButtonSelected: ` border-b-[4px] border-b-primary p-[1px_6px] `,
        listItemButtonText: ` inline-block mt-[15px] text-[16px] leading-[1.375] `,
        listItemImageWrapper: ` attribute-options__list-img-wrapper relative block `,
        listItemImage: ` w-full m-[0_auto] `,
        listItemImageSelected: ` selected selected-image absolute bottom-0 right-0 text-white pb-[5px] pr-[5px] [&_svg]:relative `,
        listItemImageSelectedBg: ` before:absolute before:bottom-0 before:right-0 before:border-l-[50px] before:border-x-[rgba(0,0,0,0)] before:border-r-[0px] before:border-b-[50px] before:border-b-primary `,
        dropDownSelectList: ` block border-[1px] border-black rounded-[4px] p-[12px_20px] relative md:hidden `,
        dropDownSelectListMobile: ` attribute-options__dropdown-list flex md:hidden `,
        dropDownSelect: ` appearance-none border-none text-black text-[18px] bg-none bg-[rgba(0,0,0,0)] w-full p-[8px_10px] m-[2px_0_0_0] rounded-[3px] `,
        dropDownSelectIcon: ` absolute h-full right-[20px] top-0 flex z-[-1] items-center `,
        containerTypeMobile: ` attribute-options--hardware__container-hardware-type mobile flex flex-col items-center md:hidden `,
        containerTypeMobileImage: `  `,
        containerFinish: ` attribute-options--hardware__container-hardware-finish md:flex-[0_0_60%] md:min-w-[60%] md:ml-[30px]`,
        containerFinishTitleMobile: ` attribute-options__title flex md:hidden pl-[15px] pt-[15px] mt-[20px] mb-[15px] text-[14px] leading-[1.25] uppercase `,
        containerlist: ` attribute-options__list flex list-style-none ml-0 mb-0 max-w-full flex-wrap w-full justify-center `,
        containerOptional: ` attribute-options--hardware__container-optional `,
        title: ` attribute-options__title `,
        disclaimer: ` attribute-options__disclaimer pt-[20px] pl-[15px] mr-[15px] mb-[15px] text-[14px] leading-[1.25] `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
