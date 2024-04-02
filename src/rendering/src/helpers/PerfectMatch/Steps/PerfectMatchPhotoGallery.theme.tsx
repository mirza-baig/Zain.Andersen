// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type PerfectMatchPhotoGalleryThemeType = {
  [key in ThemeName]: PerfectMatchPhotoGalleryThemeSubType;
};

export type PerfectMatchPhotoGalleryThemeSubType = {
  classes: {
    wrapper: string;
    intro: string;
    header: string;
    container: string;
    copy: string;
    galleryContainer: string;
    imgSlider: string;
    imgSliderContainer: string;
    imgSlide: string;
    imgSlideImage: string;
    imgSlideDetailsContainer: string;
    imgSlideDetailsContainerHidden: string;
    imgSlideDetailsContent: string;
    imgSlideDetailsTrigger: string;
    imgSlideDetailsTitle: string;
    imgSlideDetailsAction: string;
    imgSlideDetailsActionRotated: string;
    imgSlideCaptionContainer: string;
    imgSlideLeftArrow: string;
    imgSlideRightArrow: string;
  };
};

export const PerfectMatchPhotoGalleryTheme = (): ThemeFile | PerfectMatchPhotoGalleryThemeType => {
  return {
    aw: {
      classes: {
        wrapper: ` hidden md:block font-futura-pt `,
        intro: ` photo-gallery-intro max-w-[1440px] my-0 mx-auto p-[20px] `,
        header: ` header text-[22px] leading-[1.25] font-demi text-center mb-[10px] `,
        container: ` step-container max-w-[1440px] my-0 mx-auto py-0 px-[20px] md:p-0 `,
        copy: ` copy text-[18px] leading-[1.5] `,
        galleryContainer: ` photo-gallery py-[20px] relative `,
        imgSlider: `img-slider relative flex self-center md:self-start max-w-full md:basis-[50%] md:max-w-[50%] [&_.slick-dots]:m-0`,
        imgSliderContainer: `swiper-container m-[0_auto] `,
        imgSlide: ` md:items-center h-[400px] w-[400px] max-w-[400px] mr-[15px] relative `,
        imgSlideImage: `img-zoom md:max-w-[400px] md:mx-auto `,
        imgSlideDetailsContainer: ` image-carousel-details-container absolute top-0 left-0 bg-[rgba(0,0,0,0.75)] h-full w-full text-white `,
        imgSlideDetailsContainerHidden: ` hidden `,
        imgSlideDetailsContent: ` details-content color-white p-[20px_30px_40px] text-left w-full `,
        imgSlideDetailsTrigger: ` view-details-btn photo-galleries-trigger flex flex-row items-center absolute right-0 bottom-0 cursor-pointer h-[35px] `,
        imgSlideDetailsTitle: ` title bg-black text-white uppercase text-[16px] leading-[1.5] px-[20px] h-full flex items-center  `,
        imgSlideDetailsAction: ` action bg-primary text-white h-full w-[35px] flex items-center transition-all duration-300 `,
        imgSlideDetailsActionRotated: ` [&_svg]:rotate-45 `,
        imgSlideCaptionContainer: ` image-caption-container absolute bottom-[15px] right-[15px] block bg-[rgba(0,0,0,0.75)] p-[10px_20px] text-white text-[16px] font-light leading-[1] `,
        imgSlideLeftArrow: ` z-[5] flex flex-row items-center text-white cursor-pointer items-center text-button font-bold md:mr-xs absolute left-0 top-0 h-full w-[50px] bg-[rgba(0,0,0,0.75)] hover:bg-primary/75 `,
        imgSlideRightArrow: ` z-[5] flex flex-row items-center text-white cursor-pointer items-center text-button font-bold md:ml-xs absolute right-0 top-0 h-full w-[50px] bg-[rgba(0,0,0,0.75)] hover:bg-primary/75 `,
      },
    },
    rba: {
      classes: {},
    },
  };
};
