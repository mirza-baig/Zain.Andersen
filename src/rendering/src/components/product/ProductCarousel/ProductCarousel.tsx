// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { KeyboardEvent, KeyboardEventHandler, useState } from 'react';
// Components
import { Component } from 'src/helpers/Component';
import { ProductCarouselTheme } from './ProductCarousel.theme';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Headline } from 'src/helpers/Headline';
import { RenderSlider } from './RenderProductSlider.helper';
import { ComponentProps } from 'lib/types/component-props';
import { Button } from 'src/helpers/Button';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { CustomArrowProps } from 'react-slick';

export type ProductCarouselProps =
  Feature.EnterpriseWeb.Enterprise.Components.Product.ProductCarousel & {
    fields?: {
      children?: Feature.EnterpriseWeb.Enterprise.Components.Product.ProductCarouselSlide;
    };
  } & ComponentProps;

const ProductCarousel = (props: ProductCarouselProps) => {
  const { themeData } = useTheme(ProductCarouselTheme);
  const slidesData = props.fields.children;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ArrowPrev = (props: CustomArrowProps) => {
    const { onClick } = props;

    return (
      <div className={themeData.classes.arrowPrevWrapperClass}>
        <div className={themeData.classes.arrowPrevButtonWrapperClass}>
          <button
            className={themeData.classes.arrowButtonClass}
            onClick={onClick}
            onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
              if (e.code === 'Enter' || e.code === 'Space') {
                onClick && (onClick as unknown as KeyboardEventHandler<HTMLButtonElement>)(e);
              }
            }}
            tabIndex={0}
          >
            <SvgIcon icon="arrow-left" size="lg" />
          </button>
        </div>
      </div>
    );
  };

  const ArrowNext = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <div className={themeData.classes.arrowNextWrapperClass}>
        <div className={themeData.classes.arrowPrevButtonWrapperClass}>
          <button
            className={themeData.classes.arrowButtonClass}
            onClick={onClick}
            onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
              if (e.code === 'Enter' || e.code === 'Space') {
                onClick && (onClick as unknown as KeyboardEventHandler<HTMLButtonElement>)(e);
              }
            }}
            tabIndex={0}
          >
            <SvgIcon icon="arrow-right" size="lg" />
          </button>
        </div>
      </div>
    );
  };

  const sliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    variableWidth: true,
    enableNumberedPagination: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    dotsClass: 'slick-dots static',
    useTransform: false,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    speed: 400,
    beforeChange: (_currentSlide: number, nextSlide: number) => {
      setCurrentSlideIndex(nextSlide);
    },
  };

  return (
    <Component variant="full" padding={'px-0'} dataComponent="general/productcarousel" {...props}>
      <div className="col-span-12">
        <div className="px-m md:max-w-screen-lg lg:mx-auto">
          <Headline defaultTag="h2" {...props} />
          <BodyCopy {...props} />
        </div>
      </div>
      <div className={themeData.classes.columnClass}>
        <div className="product-carousel z-0">
          <RenderSlider
            currentSlideIndex={currentSlideIndex}
            slidesData={slidesData}
            sliderSettings={sliderSettings}
          />
        </div>
        <div className={themeData.classes.exploreButtonClass}>
          <div>
            <Button
              field={props?.fields.cta1Link}
              variant={props?.fields.cta1Style}
              icon={props?.fields.cta1Icon}
              classes={props?.fields.cta1Style}
            ></Button>
          </div>
        </div>
      </div>
    </Component>
  );
};
export default withDatasourceCheck()<ProductCarouselProps>(ProductCarousel);
