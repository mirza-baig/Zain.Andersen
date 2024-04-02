// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type PreferencesThemeType = {
  [key in ThemeName]: PreferencesThemeSubType;
};

export type PreferencesThemeSubType = {
  classes: {
    stepPreferences: string;
    stepContainer: string;
    stepHeading: string;
    stepShowResultsWrapper: string;
    stepShowResultsBtn: string;
  };
};

export const PreferencesTheme = (): ThemeFile | PreferencesThemeType => {
  return {
    aw: {
      classes: {
        stepPreferences: ` step-Preferences py-[30px] px-0 font-futura-pt flex flex-col justify-center lg:px-[15px] max-w-[1200px] my-0 mx-auto `,
        stepContainer: ` step-container flex flex-wrap justify-center `,
        stepHeading: ` step-heading font-sans text-black text-[26px] leading-[1.25] md:text-[34px] mb-[12px] font-bold text-center uppercase `,
        stepShowResultsWrapper: ` input-container inline-block md:w-[33%] self-center `,
        stepShowResultsBtn: ` option-cta inline-block w-full min-h-[44px] p-[16px_12px] text-[18px] leading-[1] bg-none border-2 border-primary text-primary text-center uppercase hover:bg-primary hover:text-white `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
