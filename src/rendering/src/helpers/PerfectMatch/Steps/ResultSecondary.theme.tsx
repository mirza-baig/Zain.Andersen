// Lib
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';

type ResultSecondaryThemeType = {
  [key in ThemeName]: ResultSecondaryThemeSubType;
};

export type ResultSecondaryThemeSubType = {
  classes: {
    resultSecondaryContainer: string;
    relatedHeader: string;
    relatedBodyCopy: string;
    relatedContainer: string;
    productDetails: {
      relatedProduct: string;
      row: string;
      imgSlider: string;
      imgSliderContainer: string;
      imgSlide: string;
      imgSlideImage: string;
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
      secondaryLink: string;
      designLink: string;
    };
  };
};

export const ResultSecondaryTheme = (): ThemeFile | ResultSecondaryThemeType => {
  return {
    aw: {
      classes: {
        resultSecondaryContainer: ` result-secondary max-w-[1440px] mx-auto font-futura-pt `,
        relatedHeader: ` also-like text-center text-[22px] leading-[1.25] p-[20px] `,
        relatedBodyCopy: ``,
        relatedContainer: ` related-container flex flex-col md:flex-row `,
        productDetails: {
          relatedProduct: ` related-product flex flex-col font-futura-pt bg-[#f7f7f7] border-[1px] border-[#b9b9b9] m-[20px] p-[80px_30px_40px_30px] md:w-[calc(50%_-_40px)] `,
          row: `row flex flex-col mb-[20px] md:flex-row md:mb-[50px] md:grow`,
          imgSlider: `img-slider relative flex self-center md:self-start max-w-full md:basis-[50%] md:max-w-[50%] [&_.slick-dots]:m-0`,
          imgSliderContainer: `swiper-container w-full m-[0_auto] [&_.slick-active_button:before]:!text-primary`,
          imgSlide: ` md:flex md:items-center `,
          imgSlideImage: `img-zoom `,
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
          buttonContainer: ` buttons flex md:flex-row justify-around items-center mt-[20px] `,
          detailsLink: `btn first-btn gtm-click text-center uppercase w-full `,
          secondaryLink: ` secondary text-center rounded-0 m-[15px_15px_0_15px] border-[1px] border-primary p-[12px_16px] text-[18px] leading-1 font-regular hover:bg-darkprimary hover:text-white uppercase bg-white text-primary md:last:mr-0 `,
          designLink: ` btn link-only last-btn gtm-click m-[15px_15px_0_15px] max-w-[400px] uppercase text-center w-full py-[12px] text-[18px] leading-1 text-primary hover:underline `,
        },
      },
    },
    rba: {
      classes: {},
    },
  };
};
