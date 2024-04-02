import React, { ReactElement, useRef } from 'react';
import clsx from 'clsx';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { PlaceholderData } from '@sitecore-jss/sitecore-jss/layout';
import { Url } from 'url';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import Image from 'next/image';
import { isSvgUrl } from 'lib/utils/string-utils';
import { SliderRefType, sliderSettings, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

type childItem = {
  url: Url;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields: any;
  placeholders: PlaceholderData;
};

type RenderingProps = {
  slidesData: childItem[];
  currentSlideIndex: number;
};

type RenderSliderProps = {
  sliderSettings: sliderSettings;
} & RenderingProps;
export const RenderSlider = ({
  currentSlideIndex,
  slidesData,
  sliderSettings,
}: RenderSliderProps): ReactElement => {
  const ref = useRef<SliderType>();
  return (
    <div>
      <SliderWrapper sliderSettings={sliderSettings} sliderRef={ref as SliderRefType}>
        {slidesData.map((item, idx) => (
          <div key={idx}>
            <div className="flex h-full items-center">
              {item.fields.productLink.value.href.length > 0 ? (
                <div className="product-carousel">
                  <div
                    className={clsx({
                      'w-[300px]': true,
                      'opacity-50': idx !== currentSlideIndex,
                    })}
                  >
                    <LinkWrapper
                      field={item.fields.productLink}
                      suppressLinkText
                      ariaLabel={{
                        value: item.fields?.carouselSlideImage?.value?.alt,
                      }}
                    >
                      <div className="mx-[25px] text-center ml:mx-0">
                        <Image
                          src={item.fields?.carouselSlideImage?.value?.src}
                          alt={item.fields?.carouselSlideImage?.value?.alt}
                          width={item.fields?.carouselSlideImage?.value?.width}
                          height={item.fields?.carouselSlideImage?.value?.height}
                          layout="responsive"
                          className="h-auto w-full"
                          unoptimized={isSvgUrl(item.fields?.carouselSlideImage?.value?.src)}
                        />
                      </div>
                    </LinkWrapper>
                  </div>
                  {idx === currentSlideIndex && (
                    <div className={clsx({ 'mt-4 w-[300px] px-2 text-center': true })}>
                      <LinkWrapper
                        field={item.fields.productLink}
                        suppressLinkText
                        className="font-futura-pt text-[18px] font-bold uppercase leading-7 text-black hover:underline"
                        ariaLabel={{
                          value: item.fields.productName.value,
                        }}
                      >
                        {item.fields.productName.value}
                      </LinkWrapper>
                      {item.fields.productBodyCopy.value && (
                        <p className="mt-2 text-sm">{item.fields.productBodyCopy.value}</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="product-carousel">
                  <div
                    className={clsx({
                      'w-[300px]': true,
                      'opacity-50': idx !== currentSlideIndex,
                    })}
                  >
                    <div className="mx-[25px] text-center ml:mx-0">
                      <Image
                        src={item.fields?.carouselSlideImage?.value?.src}
                        alt={item.fields?.carouselSlideImage?.value?.alt}
                        width={item.fields?.carouselSlideImage?.value?.width}
                        height={item.fields?.carouselSlideImage?.value?.height}
                        layout="responsive"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>

                  {idx === currentSlideIndex && (
                    <div className={clsx({ 'mt-4 w-[300px] px-2 text-center': true })}>
                      <span className="font-futura-pt text-[18px] font-bold uppercase leading-7 text-black hover:underline">
                        {item.fields.productName.value}
                      </span>
                      {item.fields.productBodyCopy.value && (
                        <p className="mt-2 text-sm">{item.fields.productBodyCopy.value}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};
