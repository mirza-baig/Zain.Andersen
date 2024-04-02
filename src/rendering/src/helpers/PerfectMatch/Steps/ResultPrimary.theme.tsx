// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type ResultPrimaryThemeType = {
  [key in ThemeName]: ResultPrimaryThemeSubType;
};

export type ResultPrimaryThemeSubType = {
  classes: {
    resultPrimaryContainer: string;
    relatedContainer: string;
    productDetails: {
      relatedProduct: string;
      row: string;
      imgSlider: string;
      imgSliderThumbnail: string;
      imgSliderContainer: string;
      imgSliderThumbnailContainer: string;
      imgSlide: string;
      imgSlideThumbnail: string;
      imgSlideImage: string;
      imgSlideThumbnailActive: string;
      imgSlideImageThumbnail: string;
      details: string;
      featureCallout: string;
      featureImage: string;
      featureText: string;
      title: string;
      series: string;
      category: string;
      reviewCost: string;
      review: string;
      cost: string;
      costOn: string;
      costOff: string;
      list: string;
      listItem: string;
      buttonContainer: string;
      detailsLink: string;
      findADealerLink: string;
    };
  };
};

export const ResultPrimaryTheme = (): ThemeFile | ResultPrimaryThemeType => {
  return {
    aw: {
      classes: {
        resultPrimaryContainer: ` result-primary `,
        relatedContainer: ` related-container flex flex-col md:flex-row bg-none md:bg-[#f7f7f7] `,
        productDetails: {
          relatedProduct: `related-product m-[20px] flex max-w-full flex-col border-[1px] border-[#b9b9b9] bg-[#f7f7f7] p-[80px_30px_40px_30px] font-futura-pt md:mx-auto md:border-[rgba(0,0,0,0)] md:bg-none `,
          row: `row flex flex-col mb-[20px] md:flex-row md:mb-[50px] md:grow`,
          imgSlider: `img-slider relative flex self-center md:self-start max-w-full md:basis-[50%] md:max-w-[50%] [&_.slick-dots]:m-0`,
          imgSliderThumbnail: `img-slider-thumbnail relative hidden md:flex flex-col cursor-pointer `,
          imgSliderContainer: `swiper-container w-full md:w-[calc(100%-100px)] m-[0_auto] [&_.slick-active_button:before]:!text-primary`,
          imgSliderThumbnailContainer: `swiper-container hidden md:block w-[100px] m-[0_auto] [&_.slick-active_button:before]:!text-primary`,
          imgSlide: ` md:flex md:items-center p-[20px_10px_10px] `,
          imgSlideThumbnail: ` flex flex-row items-center h-[100px] w-[100px] border p-[1px_6px] border-[rgba(0,0,0,0)] `,
          imgSlideThumbnailActive: `!border-primary`,
          imgSlideImage: `img-zoom md:max-w-[400px] md:mx-auto `,
          imgSlideImageThumbnail: `thumbnail-img-zoom max-h-[70px] max-w-[70px] md:mx-auto `,
          details: `details max-w-full grow md:basis-[50%] md:max-w-[50%] p-[20px] mt-[20px] md:mt-0`,
          featureCallout: `feature-callout flex items-center mb-[10px] uppercase`,
          featureImage: `feature-image mr-[10px]`,
          featureText: `feature-text text-[18px] leading-[1.5em] font-regular inline`,
          title: `title inline-block mb-[12px]`,
          series: `series p-[0_40px_0_0] mb-[7px] text-[14px] leading-[1.5] uppercase `,
          category: `category mb-[7px] text-[24px] leading-[1.5em] font-light `,
          reviewCost: `review-cost flex`,
          review: `review flex-[0_0_auto]`,
          cost: `cost text-[14px] flex-[0_0_auto] text-primary text-[20px] leading-[1.5] `,
          costOn: `cost-on font-bold `,
          costOff: `cost-off opacity-[0.3]  `,
          list: `list list-disc list-outside font-light ml-[1em]`,
          listItem: `list-item text-[18px] leading-[1.5em] font-light`,
          buttonContainer: ` buttons flex flex-col justify-around mt-[20px] `,
          detailsLink: `text-center uppercase w-full text-center rounded-0 mx-auto md:mx-0 mt-[15px] border-[1px] border-primary p-[12px_16px] text-[18px] leading-1 font-regular hover:bg-darkprimary hover:text-white uppercase bg-white text-primary max-w-[400px]`,
          findADealerLink: `gtm-click mx-auto md:mx-0 mt-[15px] border-[1px] border-primary p-[12px_16px] bg-primary hover:bg-darkprimary uppercase text-center w-full text-[18px] leading-1 text-white hover:underline max-w-[400px] `,
        },
      },
    },
    rba: {
      classes: {},
    },
  };
};
