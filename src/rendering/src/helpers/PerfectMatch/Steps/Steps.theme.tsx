// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type StepsThemeType = {
  [key in ThemeName]: StepsThemeSubType;
};

export type StepsThemeSubType = {
  classes: {
    stepWrapper: string;
    stepContainer: string;
    progressBarWrapper: string;
    progressBarContainer: string;
    progressBarItem: string;
    progressBarName: string;
    progressBarStep: string;
    progressBarStepLine: string;
    resetBtn: string;
    resetBtnIcon: string;
    mobileResetBtn: string;
    mobileResetBtnIcon: string;
  };
};

export const StepsTheme = (): ThemeFile | StepsThemeType => {
  return {
    aw: {
      classes: {
        stepWrapper: ` step-Steps max-w-[1200px] my-0 mx-auto progress-reset-bar flex flex-row `,
        stepContainer: ` step-container max-w-[1200px] my-0 mx-auto py-0 px-[20px] md:p-0 `,
        progressBarWrapper: ` progress-bar-wrapper basis-[80%] grow `,
        progressBarContainer: ` progress-bar capitalize flex flex-row `,
        progressBarItem: ` progress-bar__step-item flex flex-col relative items-center basis-[25%] pb-[45px] text-[18px] leading-[1.5] font-bold text-center uppercase `,
        progressBarName: ` text-[12px] md:text-[18px] `,
        progressBarStep: ` progress-bar__step rounded-[50%] w-[10px] h-[10px] mt-[2px] inline-block bg-gray [&.done]:bg-primary`,
        progressBarStepLine: ` progress-bar__step-line before:content-[''] before:block before:h-[2px] before:w-full before:absolute before:bottom-[49px] before:left-[-50%] before:z-[-1] before:bg-gray [&.done]:before:bg-primary `,
        resetBtn: ` relative hidden md:flex left-0 top-0 basis-[20%] whitespace-nowrap text-primary font-bold uppercase grow-0 `,
        resetBtnIcon: ` inline-block mr-[8px] `,
        mobileResetBtn: ` block md:hidden bottom-[10px] text-primary fixed right-[10px] z-[10] rotate-[90deg] scale-x-[-1] `,
        mobileResetBtnIcon: ` font-[900] rotate-[90deg] scale-x-[-1] [&>svg]:bg-primary [&>svg]:text-white [&>svg]:p-[5px] [&>svg]:rounded-[20px] [&>svg]:shadow-[0px_0px_0px_2px_#ffffff] [&>svg]:drop-shadow-[-8px_0_6px_#b9b9b9] `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
