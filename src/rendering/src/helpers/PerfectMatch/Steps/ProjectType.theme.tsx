// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type ProjectTypeThemeType = {
  [key in ThemeName]: ProjectTypeThemeSubType;
};

export type ProjectTypeThemeSubType = {
  classes: {
    stepProjectType: string;
    stepContainer: string;
    stepHeading: string;
    stepCopy: string;
    stepWrapperOptions: string;
    mobileResetBtn: string;
    mobileResetBtnIcon: string;
  };
};

export const ProjectTypeTheme = (): ThemeFile | ProjectTypeThemeType => {
  return {
    aw: {
      classes: {
        stepProjectType: `step-ProjectType py-[30px] px-0 font-futura-pt `,
        stepContainer: `step-container max-w-[1200px] my-0 mx-auto py-0 px-[20px] md:p-0`,
        stepHeading: ` step-heading font-sans text-black text-[26px] leading-[1.25] md:text-[34px] mb-[12px] font-bold text-center uppercase `,
        stepCopy: `step-copy font-sans text-[18px] leading-[1.5] text-black mb-[20px] md:text-[18px] text-center font-light `,
        stepWrapperOptions: `flex flex-wrap justify-center lg:px-[15px] max-w-[1200px] my-0 mx-auto `,
        mobileResetBtn: `block md:hidden bottom-[10px] text-primary fixed right-[10px] z-[10] rotate-[90deg] scale-x-[-1]`,
        mobileResetBtnIcon: `font-[900] rotate-[90deg] scale-x-[-1] [&>svg]:bg-primary [&>svg]:text-white [&>svg]:p-[5px] [&>svg]:rounded-[20px] [&>svg]:shadow-[0px_0px_0px_2px_#ffffff] [&>svg]:drop-shadow-[-8px_0_6px_#b9b9b9]`,
      },
    },
    rba: {
      classes: {},
    },
  };
};
