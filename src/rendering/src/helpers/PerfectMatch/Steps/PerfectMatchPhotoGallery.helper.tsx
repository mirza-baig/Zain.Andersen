/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */
// Global
import { Link, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import {
  PerfectMatchPhotoGalleryTheme,
  PerfectMatchPhotoGalleryThemeSubType,
} from './PerfectMatchPhotoGallery.theme';
import { RenderStepsProps } from './PerfectMatchStep.helper';
import { SliderRefType } from 'src/helpers/SliderWrapper/SliderWrapper';

const RenderSlide = ({
  themeData,
  slide,
}: {
  themeData: PerfectMatchPhotoGalleryThemeSubType;
  slide: any;
}) => {
  const theme = (themeData as PerfectMatchPhotoGalleryThemeSubType).classes;
  const [detailsStateVisible, setDetailsStateVisible] = useState<boolean>(false);

  return (
    <div className={theme.imgSlide}>
      <ImageWrapper
        image={slide.fields?.carouselSlideImage}
        additionalDesktopClasses={theme.imgSlideImage}
        imageLayout="intrinsic"
      ></ImageWrapper>
      {slide.fields?.elementBodyCopy?.value ? (
        <div>
          <div
            className={
              theme.imgSlideDetailsContainer +
              (detailsStateVisible ? '' : theme.imgSlideDetailsContainerHidden)
            }
          >
            <div className={theme.imgSlideDetailsContent}>
              <RichText field={slide.fields?.elementBodyCopy}></RichText>
            </div>
          </div>
          <div
            className={theme.imgSlideDetailsTrigger}
            onClick={() => setDetailsStateVisible(!detailsStateVisible)}
          >
            <div className={theme.imgSlideDetailsTitle}>
              <span>{detailsStateVisible ? 'Close' : 'View Details'}</span>
            </div>
            <div
              className={
                theme.imgSlideDetailsAction +
                (detailsStateVisible ? theme.imgSlideDetailsActionRotated : '')
              }
            >
              <SvgIcon icon="plus" size="16" className=" mx-auto "></SvgIcon>
            </div>
          </div>
        </div>
      ) : slide.fields?.carouselSlideCaptionLink?.value?.href ? (
        <div className={theme.imgSlideCaptionContainer}>
          <div className="image-caption">
            <Link field={slide.fields?.carouselSlideCaptionLink}>
              <RichText field={slide.fields?.carouselSlideCaption}></RichText>
            </Link>
          </div>
        </div>
      ) : (
        <div className={theme.imgSlideCaptionContainer}>
          <div className="image-caption">
            <RichText field={slide.fields?.carouselSlideCaption}></RichText>
          </div>
        </div>
      )}
    </div>
  );
};

const LeftArrow = (
  props: any & { themeData: PerfectMatchPhotoGalleryThemeSubType; sliderRef: Slider }
) => {
  const theme = (props.themeData as PerfectMatchPhotoGalleryThemeSubType).classes;
  const sliderRef = props.sliderRef;

  if (!props.onClick) {
    return <></>;
  }

  return (
    <div
      role="button"
      className={theme.imgSlideLeftArrow}
      onClick={() => {
        sliderRef.current && sliderRef.current.slickPrev();
      }}
    >
      <SvgIcon className="mx-auto" size="22" icon="arrow-left" />
    </div>
  );
};

const RightArrow = (
  props: any & { themeData: PerfectMatchPhotoGalleryThemeSubType; sliderRef: Slider }
) => {
  const theme = (props.themeData as PerfectMatchPhotoGalleryThemeSubType).classes;
  const sliderRef = props.sliderRef;

  if (!props.onClick) {
    return <></>;
  }

  return (
    <div
      role="button"
      className={theme.imgSlideRightArrow}
      onClick={() => {
        sliderRef.current && sliderRef.current.slickNext();
      }}
    >
      <SvgIcon className="mx-auto" size="22" icon="arrow-right" />
    </div>
  );
};

const PerfectMatchPhotoGallery = ({
  props,
  primaryResult,
}: RenderStepsProps & { primaryResult: any }) => {
  const { themeData, themeName } = useTheme(PerfectMatchPhotoGalleryTheme());
  const theme = (themeData as PerfectMatchPhotoGalleryThemeSubType).classes;
  const sliderRef = useRef<Slider>();

  const imageCarousel = primaryResult?.productDetails?.imageCarousel;
  const carouselSlides: any[] = imageCarousel?.fields?.imageCarouselSlides;

  if ((carouselSlides?.length ?? 0) === 0) {
    return <></>;
  }

  const sliderSettings = {
    infinite: false,
    className: theme.imgSliderContainer,
    variableWidth: true,
    dots: false,
    prevArrow: <LeftArrow themeData={themeData} sliderRef={sliderRef} />,
    nextArrow: <RightArrow themeData={themeData} sliderRef={sliderRef} />,
  };

  return (
    <div className={theme.wrapper}>
      <div className={theme.intro}>
        {props.fields.resultsGalleryHeading?.value && (
          <h3 className={theme.header}>
            <Text field={props.fields.resultsGalleryHeading} encode={false}></Text>
          </h3>
        )}
        {props.fields.resultsGalleryCopy.value && (
          <div className={theme.copy}>
            <RichText field={props.fields.resultsGalleryCopy}></RichText>
          </div>
        )}
      </div>
      <div className={theme.galleryContainer}>
        <SliderWrapper
          sliderSettings={sliderSettings}
          theme={themeName}
          sliderRef={sliderRef as SliderRefType}
        >
          {carouselSlides?.map((slide: any, index: number) => (
            <RenderSlide slide={slide} themeData={themeData} key={index}></RenderSlide>
          ))}
        </SliderWrapper>
      </div>
    </div>
  );
};

export default PerfectMatchPhotoGallery;
