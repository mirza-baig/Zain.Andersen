// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type SizingAttributeThemeType = {
  [key in ThemeName]: SizingAttributeThemeSubType;
};

export type SizingAttributeThemeSubType = {
  classes: {
    attributeOption: string;
    copy: string;
    sizingName: string;
    dropDownSelectList: string;
    dropDownSelect: string;
    dropDownSelectIcon: string;
    sizingList: string;
    sizingListItem: string;
    sizingListItemButton: string;
    selected: string;
    disclaimer: string;
  };
};

export const SizingAttributeTheme = (): ThemeFile | SizingAttributeThemeType => {
  return {
    aw: {
      classes: {
        attributeOption: ` attribute-options md:ml-[16px] md:mb-[60px] md:mt-[16px] `,
        copy: ` attribute-options__copy pt-[29px] pl-[15px] text-[14px] md:text-[18px] leading-[17px] font-regular`,
        sizingName: ` attribute-options--sizing__name text-[14px] pt-[30px] pl-[20px] uppercase md:text-[20px] `,
        dropDownSelectList: ` block border-[1px] border-black rounded-[4px] p-[12px_20px] relative md:hidden `,
        dropDownSelect: ` appearance-none border-none text-black text-[18px] bg-none bg-[rgba(0,0,0,0)] w-full p-[8px_10px] m-[2px_0_0_0] rounded-[3px] `,
        dropDownSelectIcon: ` absolute h-full right-[20px] top-0 flex z-[-1] items-center `,
        sizingList: `hidden md:flex list-style-none pb-[30px] ml-[20px] mt-[18px] mb-0 flex-wrap`,
        sizingListItem: ` mr-[35px] mb-[10px] `,
        sizingListItemButton: ` text-[18px] leading-[22px] cursor-pointer `,
        selected: ` border-b-[4px] border-b-primary p-[1px_6px] `,
        disclaimer: `  pt-[20px] pl-[15px] mr-[15px] mb-[15px] text-[14px] leading-[1.25] `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
