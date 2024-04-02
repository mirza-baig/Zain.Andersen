// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type PerfectMatchThemeType = {
  [key in ThemeName]: PerfectMatchThemeSubType;
};

export type PerfectMatchThemeSubType = {
  classes: {
    headline: string;
    mainBackground: string;
    mainBackgroundImage: string;
    whiteOverlay: string;
    module: string;
    logo: string;
    logoImage: string;
    app: string;
    panelIntro: string;
    panelType: string;
    leftVisible: string;
    leftHeader: string;
    leftTypeHeader: string;
    panelBackground: string;
    secondary: string;
    tertiary: string;
    letsGo: string;
    letsGoBefore: string;
    small: string;
    orange: string;
    large: string;
    orangeShadow: string;
    rightVisible: string;
    typeBtns: string;
    typeButtons: string;
    headingWrapper: string;
    stepHeading: string;
    rteStepCopy: string;
    contentContainer: string;
    stepContentVisible: string;
    optionContainer: string;
    stepSizeAndPanels: string;
    top: string;
    optionImage: string;
    optionHeading: string;
    optionSizes: string;
    optionSizesDisplayNone: string;
    widthSelect: string;
    heightSelect: string;
    sizeAndPanelsOption: string;
    sizeAndPanelsOptionNoSize: string;
    panelSelected: string;
    widthDropdown: string;
    heightDropdown: string;
    notSureLabel: string;
    notSureCheckbox: string;
    sizeAndPanelsNext: string;
    map: string;
    selectWrapper: string;
    selectClass: string;
    buttonNext: string;
    panelIntroImage: string;
  };
};

export const PerfectMatchTheme = (): ThemeFile | PerfectMatchThemeType => {
  return {
    aw: {
      classes: {
        /** Insert Theme classes here **/
        headline: 'abc-123',
        mainBackground: `main-background h-full w-full fixed top-0 left-0 transition-all -z-20 `,
        mainBackgroundImage: ` h-full w-full object-cover object-center `,
        whiteOverlay:
          'white-overlay fixed top-0 left-0 -z-10 h-full w-full bg-white opacity-75 transition-all transition-opacity',
        module: 'perfect-match-module font-futura-pt ',
        logo: `logo fixed top-0 p-[32px_0_0_40px] cursor-pointer border-none bg-none `,
        logoImage: `  `,
        app: 'app',
        panelIntro: 'panel intro flex flex-col mmd:flex-row pt-20 md:pt-0',
        panelType: 'panel type flex flex-col w-full items-start ',
        leftVisible:
          'left visible w-full relative m-[12px_auto] max-w-[500px] md:m-[40px_0_0_24px] max-w-full p-[20px_10px] ',
        leftHeader: ` max-w-[510px] `,
        leftTypeHeader: ` max-w-[510px] text-[56px] leading-[1.25] mb-[12px] font-bold uppercase `,
        panelBackground: 'block h-[100%] absolute top-0 w-full -z-1',
        secondary: 'secondary text-[48px] leading-[1] font-bold ',
        tertiary: 'tertiary text-[24px] leading-[1] ',
        letsGo:
          'start btn help-me-choose hmc-click inline-block w-full md:w-auto min-h-[44px] p-[20px] md:p-[20px_100px] m-[32px_auto] md:m-[32px_16px] rounded-[2px] bg-white/50 hover:bg-white/75 border-2 border-primary font-bold text-primary relative text-center uppercase text-[18px] leading-[1] ',
        letsGoBefore: ` before:border-t-[rgba(0,0,0,0)] before:border-r-[rgba(0,0,0,0)] before:border-b-primary before:border-l-[rgba(0,0,0,0)] before:border-t-[0] before:border-r-[32px] before:border-b-[32px] before:border-l-[0] before:absolute before:h-0 before:bottom-[2px] before:left-[2px] before:w-0 `,
        small: 'small text-[36px] leading-[1] font-bold uppercase ',
        orange: 'text-primary',
        large: 'large text-[72px] leading-[56px] font-bold uppercase ',
        orangeShadow: ' text-primary drop-shadow-[-1px_-1px_#fff] ',
        rightVisible:
          'right visible flex flex-auto flex-col md:flex-row items-center justify-center p-[20px_10px] mx-auto w-full ',
        typeBtns: 'type-btns hidden md:flex justify-end items-center p-[24px_0_0_0] max-w-[500px] ',
        typeButtons: 'type btn hmc-click text-[18px] leading-[1] min-h-[44px] p-[12px_16px] z-0 ',
        headingWrapper: 'heading-wrapper max-w-[1200px] mx-auto ',
        stepHeading:
          'step-heading font-sans text-black text-[26px] leading-[1.25] md:text-[34px] mb-[12px] font-bold text-center uppercase  ',
        rteStepCopy:
          'step-copy font-sans text-[18px] leading-[1.5] text-black mb-[20px] md:text-[18px] text-center font-light ',
        contentContainer: 'content-container max-w-[1200px] mx-auto ',
        stepContentVisible: 'step-content visible',
        optionContainer:
          'option-container flex flex-wrap justify-center lg:px-[15px] max-w-[1200px] my-0 mx-auto ',
        stepSizeAndPanels: 'step-content step-size-and-panels visible text-center',
        top: 'top flex flex-col h-full ',
        optionImage: 'image p-[60px_20px_10px_20px] flex flex-initial justify-center items-center ',
        optionHeading: 'heading flex-initial p-[10px] text-[14px] md:text-[22px] grow ',
        optionSizes: 'sizes w-full p-[20px]',
        optionSizesDisplayNone: 'sizes sizes-not-visible hidden ',
        widthSelect: 'width-select w-full',
        heightSelect: 'height-select w-full',
        sizeAndPanelsOption:
          'bouncyCard btn option hmc-click is-icon is-preference three-column is-size hover:no-underline md:transition-all m-[10px_5px_10px_5px] md:m-[0_15px_40px_15px] bg-white md:bg-white/50 md:hover:bg-white/75 md:outline-none md:transition-all basis-[44%] md:basis-[30%] md:hover:scale-[1.1] border-gray',
        sizeAndPanelsOptionNoSize:
          'bouncyCard btn option hmc-click is-icon is-preference three-column hover:no-underline md:transition-all m-[10px_5px_10px_5px] md:m-[0_15px_40px_15px] bg-white md:bg-white/50 md:hover:bg-white/75 md:outline-none md:transition-all basis-[44%] md:basis-[30%] md:hover:scale-[1.1] border-gray',
        panelSelected: ` selected border !border-white shadow-[0_0_0_3px] shadow-primary `,
        widthDropdown: 'width-dropdown text-[14px] leading-[1] capitalize text-left ',
        heightDropdown: 'height-dropdown text-[14px] leading-[1] capitalize text-left ',
        notSureLabel: ` flex flex-row text-black text-[14px] uppercase max-w-full mt-[5px] mb-[7px] `,
        notSureCheckbox: 'not-sure-checkbox',
        sizeAndPanelsNext:
          'next btn last-btn primary hmc-click text-white uppercase p-[16px] text-[18px] leading-[18px] mb-[20px] bg-primary border-primary border disabled disabled:opacity-[.65] disabled:pointer-events-none  ',
        map: 'map hidden mmd:block [&_svg]:mx-auto [&_svg]:max-w-full [&_path]:pointer-events-auto [&_path]:transition-all [&_path]:duration-300 [&_path:hover]:cursor-pointer [&_path:hover]:fill-primary',
        selectWrapper: 'col-span-12 mx-auto mt-0 mb-5 block p-[20px_10px] mmd:hidden',
        selectClass: 'mb-5 w-full',
        buttonNext: 'h-11 w-full bg-primary text-white',
        panelIntroImage: ' block h-auto m-[0_auto] max-w-[100%]',
      },
    },
    rba: {
      classes: {
        /** Insert Theme classes here **/
      },
    },
  };
};
