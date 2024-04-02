// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type ResultsThemeType = {
  [key in ThemeName]: ResultsThemeSubType;
};

export type ResultsThemeSubType = {
  classes: {
    wrapper: string;
    container: string;
    containerLeft: string;
    containerRight: string;
    header: string;
    heading: string;
    headerSeries: string;
    headerCategory: string;
    headerBackground: string;
    heroImageMobile: string;
    heroImageDesktop: string;
    panelBackground: string;
    buttonContainer: string;
    designLink: string;
    designLinkBefore: string;
    resetBtn: string;
    preferenceIconWrapper: string;
    preferenceIconContainer: string;
    preferenceIcon: string;
    preferenceIconHeading: string;
    preferenceIconImageContainer: string;
    primaryResultContainer: string;
    secondaryResultContainer: string;
  };
};

export const ResultsTheme = (): ThemeFile | ResultsThemeType => {
  return {
    aw: {
      classes: {
        wrapper: ` results `,
        container: ` content-container relative max-w-[1440px] mx-auto `,
        containerLeft: ` left mx-auto md:m-0 max-w-[500px] md:max-w-full p-[20px] md:p-[64px] flex flex-col items-start `,
        containerRight: ` right hidden md:block absolute right-[20px] top-[20px] `,
        header: ` header relative `,
        heading: ` font-futura-pt uppercase text-[72px] font-bold leading-[56px] mb-[12px] `,
        headerSeries: ` series font-futura-pt text-[32px] leading-[48px] `,
        headerCategory: ` category font-futura-pt text-[44px] leading-[66px] mt-[-15px] `,
        headerBackground: ` header-background object-fit-wrapper h-full absolute w-full z-[-1] overflow-hidden `,
        heroImageMobile: ` h-full w-full object-cover object-center `,
        heroImageDesktop: ` h-full w-full object-cover object-center `,
        panelBackground: ` panel-background `,
        buttonContainer: ` buttons font-futura-pt mt-[20px] flex flex-col items-center `,
        designLink: ` btn help-me-choose hmc-click min-h-[44px] p-[20px] md:p-[20px_100px] m-[32px_16px] rounded-[2px] bg-white/50 hover:bg-white/75 border-2 border-primary font-bold text-primary relative text-center uppercase text-[18px] leading-[1] `,
        designLinkBefore: ` before:border-t-[rgba(0,0,0,0)] before:border-r-[rgba(0,0,0,0)] before:border-b-primary before:border-l-[rgba(0,0,0,0)] before:border-t-[0] before:border-r-[32px] before:border-b-[32px] before:border-l-[0] before:absolute before:h-0 before:bottom-[2px] before:left-[2px] before:w-0 `,
        resetBtn: ` btn reset hmc-click flex self-center items-center font-futura-pt text-primary text-[16px] font-bold leading-[1] min-h-[44px] uppercase `,
        preferenceIconWrapper: ` icon-wrapper max-w-[1440px] mx-auto `,
        preferenceIconContainer: ` icon-container flex flex-row p-[20px] justify-around md:max-w-[calc(100%_-_450px)] min-h-[100px] `,
        preferenceIcon: ` icon icon p-[20px] basis-[33%] max-w-[280px] justify-between `,
        preferenceIconHeading: ` heading text-[14px] leading-[1.5] md:text-[22px] text-center font-futura-pt shrink pt-[10px] `,
        preferenceIconImageContainer: ` image flex shrink justify-center `,
        primaryResultContainer: ` primary-result `,
        secondaryResultContainer: ` secondary-results max-w-[1440px] mx-auto `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
