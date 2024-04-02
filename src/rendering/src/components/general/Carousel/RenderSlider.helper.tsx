import { Field, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

import React, { ReactElement } from 'react';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { Caption } from 'src/helpers/Caption';
import { PlaceholderData } from '@sitecore-jss/sitecore-jss/layout';
import { useTheme } from 'lib/context/ThemeContext';
import { CarouselTheme } from './Carousel.theme';

export type childItem = {
  fields: {
    caption: Field<string>;
  };
  placeholders: PlaceholderData;
};

type RenderingProps = {
  slidesData: childItem[];
};
type RenderSliderProps = {
  sliderSettings: { [key: string]: string | number | boolean | unknown };
} & RenderingProps;

export const RenderSlider = ({ slidesData, sliderSettings }: RenderSliderProps): ReactElement => {
  const { themeData } = useTheme(CarouselTheme);
  return (
    <>
      <SliderWrapper sliderSettings={sliderSettings}>
        {slidesData?.map((childItem: childItem, index: number) => {
          return (
            <Placeholder
              key={index}
              name="components"
              // childItem can be any component redering, thus passing as type any to placeholder
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              rendering={childItem as any}
              render={(childComponents) => {
                return childComponents.map((component, index) => (
                  <div key={index}>
                    <div className="[&_.section-grid]:px-0 [&_.promo-generic-wrapper]:px-0">
                      {component}
                    </div>
                    <Caption
                      {...childItem.fields}
                      italic={false}
                      isImageCaption={false}
                      classes={themeData.classes.slideCaption}
                    />
                  </div>
                ));
              }}
            />
          );
        })}
      </SliderWrapper>
    </>
  );
};
