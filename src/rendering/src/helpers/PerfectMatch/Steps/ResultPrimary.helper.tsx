/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */
// Global
import { Image, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Components
import { RefObject, useRef } from 'react';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { useTheme } from 'src/lib/context/ThemeContext';
import { RenderStepsProps } from './PerfectMatchStep.helper';
import { ResultPrimaryTheme, ResultPrimaryThemeSubType } from './ResultPrimary.theme';
import { SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

const RenderRelatedProduct = (
  props: any & { theme: ResultPrimaryThemeSubType; themeName: string }
) => {
  const theme = props?.theme?.classes?.productDetails;
  const themeName = props?.themeName;
  const sliderRef = useRef<SliderType>();
  const thumbNailRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const cost = props?.cost?.value || 0;
  const costOff = () => {
    return '$ '.repeat(5 - cost);
  };

  const costOn = () => {
    return '$ '.repeat(cost);
  };

  function SlideTo(slideNumber: number) {
    sliderRef.current?.slickGoTo(slideNumber);
  }

  const sliderSettings = {
    infinite: false,
    className: theme.imgSliderContainer,
    prevArrow: undefined,
    nextArrow: undefined,
    dotsClass: 'slick-dots md:!hidden',
    beforeChange: (_prevIndex: number, currentIndex: number) => {
      thumbNailRefs.forEach((ref: RefObject<HTMLDivElement>) => {
        ref.current?.classList.remove(theme.imgSlideThumbnailActive);
      });
      thumbNailRefs[currentIndex].current?.classList.add(theme.imgSlideThumbnailActive);
    },
  };

  return (
    <>
      <div className={theme.relatedProduct}>
        <div className={theme.row}>
          <div className={theme.imgSlider}>
            <div className={theme.imgSliderThumbnail}>
              {props.image1 && (
                <div
                  className={theme.imgSlideThumbnail + theme.imgSlideThumbnailActive}
                  onClick={() => SlideTo(0)}
                  ref={thumbNailRefs[0]}
                >
                  <ImageWrapper
                    image={props.image1}
                    additionalDesktopClasses={theme.imgSlideImageThumbnail}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image2 && (
                <div
                  className={theme.imgSlideThumbnail}
                  onClick={() => SlideTo(1)}
                  ref={thumbNailRefs[1]}
                >
                  <ImageWrapper
                    image={props.image2}
                    additionalDesktopClasses={theme.imgSlideImageThumbnail}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image3 && (
                <div
                  className={theme.imgSlideThumbnail}
                  onClick={() => SlideTo(2)}
                  ref={thumbNailRefs[2]}
                >
                  <ImageWrapper
                    image={props.image3}
                    additionalDesktopClasses={theme.imgSlideImageThumbnail}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image4 && (
                <div
                  className={theme.imgSlideThumbnail}
                  onClick={() => SlideTo(3)}
                  ref={thumbNailRefs[3]}
                >
                  <ImageWrapper
                    image={props.image4}
                    additionalDesktopClasses={theme.imgSlideImageThumbnail}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image5 && (
                <div
                  className={theme.imgSlideThumbnail}
                  onClick={() => SlideTo(4)}
                  ref={thumbNailRefs[4]}
                >
                  <ImageWrapper
                    image={props.image5}
                    additionalDesktopClasses={theme.imgSlideImageThumbnail}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
            </div>
            <SliderWrapper
              sliderSettings={sliderSettings}
              theme={themeName}
              sliderRef={sliderRef as SliderRefType}
            >
              {props.image1 && (
                <div className={theme.imgSlide}>
                  <ImageWrapper
                    image={props.image1}
                    additionalDesktopClasses={theme.imgSlideImage}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image2 && (
                <div className={theme.imgSlide}>
                  <ImageWrapper
                    image={props.image2}
                    additionalDesktopClasses={theme.imgSlideImage}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image3 && (
                <div className={theme.imgSlide}>
                  <ImageWrapper
                    image={props.image3}
                    additionalDesktopClasses={theme.imgSlideImage}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image4 && (
                <div className={theme.imgSlide}>
                  <ImageWrapper
                    image={props.image4}
                    additionalDesktopClasses={theme.imgSlideImage}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
              {props.image5 && (
                <div className={theme.imgSlide}>
                  <ImageWrapper
                    image={props.image5}
                    additionalDesktopClasses={theme.imgSlideImage}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                </div>
              )}
            </SliderWrapper>
          </div>
          <div className={theme.details}>
            {(props.feature?.image || props.feature?.text) && (
              <div className={theme.featureCallout}>
                {props.feature.image && (
                  <span className={theme.featureImage}>
                    <Image image={props.feature.image} layout="intrinsic"></Image>
                  </span>
                )}
                {props.feature?.text && (
                  <div className="inline">
                    <RichTextWrapper field={props.feature.text} classes={theme.featureText} />
                  </div>
                )}
              </div>
            )}
            <div className={theme.title}>
              <h3 className={theme.series}>
                <Text field={props.series} />
              </h3>
              <div className={theme.category}>
                <Text field={props.category} />
              </div>
              <div className={theme.reviewCost}>
                {props.bazaarvoice?.productId && (
                  <div
                    className={theme.review}
                    data-bv-show="inline_rating"
                    data-bv-product-id={props.bazaarvoice?.productId}
                    data-bv-seo="false"
                  ></div>
                )}
                {props.bazaarvoice?.productId && <div className="bullet">&bull;</div>}
                <div className={theme.cost}>
                  <span className={theme.costOn}>{costOn()}</span>
                  <span className={theme.costOff}>{costOff()}</span>
                </div>
              </div>
            </div>
            <ul className={theme.list}>
              <li className={theme.listItem}>
                <RichTextWrapper field={props.bullet1} refer="" />
              </li>
              <li className={theme.listItem}>
                <RichTextWrapper field={props.bullet2} refer="" />
              </li>
              <li className={theme.listItem}>
                <RichTextWrapper field={props.bullet3} refer="" />
              </li>
            </ul>
            <div className={theme.buttonContainer}>
              {props.findADealerLink?.value && (
                <Link
                  field={props.findADealerLink}
                  className={theme.findADealerLink}
                  target="_blank"
                ></Link>
              )}
              {props.viewDetailsLink?.value && (
                <Link
                  field={props.viewDetailsLink}
                  className={theme.detailsLink}
                  target="_blank"
                ></Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ResultPrimary = (props: RenderStepsProps & { primaryResult: any }) => {
  const { themeData, themeName } = useTheme(ResultPrimaryTheme());
  const theme = (themeData as ResultPrimaryThemeSubType).classes;

  return (
    <div className={theme.resultPrimaryContainer}>
      <div className={theme.relatedContainer}>
        {props?.primaryResult && (
          <RenderRelatedProduct
            {...props?.primaryResult?.result?.productDetails}
            theme={themeData}
            themeName={themeName}
          ></RenderRelatedProduct>
        )}
      </div>
    </div>
  );
};

export default ResultPrimary;
