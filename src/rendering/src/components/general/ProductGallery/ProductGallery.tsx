// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { useRef, useState } from 'react';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import classNames from 'classnames';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

export type ProductGalleryProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.General.ProductGallery.ProductGallery &
    ComponentProps;
const ProductGallery = (props: ProductGalleryProps) => {
  const { currentScreenWidth } = useCurrentScreenType();
  const isMobile = currentScreenWidth <= getBreakpoint('md');

  const [selectedImageIndex, setselectedImageIndex] = useState(0);

  const sliderRef = useRef<SliderType>();

  const { fields } = props;

  if (!fields) {
    return <></>;
  }

  const sliderSettings = {
    enableNumberedPagination: true,
    rows: 3,
    slidesPerRow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: getBreakpoint('md'),
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 3.4,
        },
      },
    ],
  };

  const getSpacingClasses = (index: number): string => {
    type ColumnIndices = 0 | 1 | 2;

    const maxItemsPerRow = 3;

    const columnWiseClasses: Record<ColumnIndices, string> = {
      0: 'md:pr-[10px]',
      1: 'md:px-[5px]',
      2: 'md:pl-[10px]',
    };

    return columnWiseClasses[(index % maxItemsPerRow) as ColumnIndices];
  };

  return (
    <Component
      variant={currentScreenWidth <= getBreakpoint('md') ? 'full' : 'lg'}
      padding={currentScreenWidth <= getBreakpoint('md') && 'px-0'}
      dataComponent="general/productgallery"
      {...props}
    >
      <div className="col-span-12 md:col-span-6">
        <div className="relative">
          <ImageWrapper
            image={{
              value: {
                src: fields?.images[selectedImageIndex]?.url,
                width: isMobile ? currentScreenWidth : 592,
                height: isMobile ? 375 : 592,
                alt: fields?.images[selectedImageIndex]?.fields.Alt.value,
              },
            }}
            imageLayout="intrinsic"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 md:-mb-s">
        <div
          className={classNames(
            isMobile && '[&_.numbered-pagination_.slick-prev]:left-m',
            'md:[&_.numbered-pagination_.slick-prev]:left-[calc(100%-87px)] [&_.numbered-pagination_.slick-next]:right-m md:[&_.numbered-pagination_.slick-next]:left-[98%] md:[&_.numbered-pagination_ul]:mx-m md:[&_.numbered-pagination_ul]:text-right'
          )}
        >
          <SliderWrapper sliderSettings={sliderSettings} sliderRef={sliderRef as SliderRefType}>
            {fields?.images.map(
              (
                image: Item & {
                  fields?: {
                    Alt: Field<string>;
                  };
                },
                index: number
              ) => (
                <div
                  key={index}
                  className={classNames(
                    'pb-[15px]',
                    isMobile && 'mx-m pr-xxs',
                    getSpacingClasses(index)
                  )}
                >
                  <div
                    className={classNames(
                      index === selectedImageIndex &&
                        'relative before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:border-[4px] before:border-primary'
                    )}
                    onClick={() => setselectedImageIndex(index)}
                  >
                    <ImageWrapper
                      key={index}
                      image={{
                        value: {
                          src: image.url,
                          width: isMobile ? 100 : 187,
                          height: isMobile ? 100 : 187,
                          alt: image?.fields?.Alt?.value,
                        },
                      }}
                      imageLayout="responsive"
                    />
                  </div>
                </div>
              )
            )}
          </SliderWrapper>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<ProductGalleryProps>(ProductGallery);
