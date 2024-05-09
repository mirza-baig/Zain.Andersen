import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import React, { useRef } from 'react';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { getLayoutClasses } from './XupCardCollection.helper';
import { DesktopVideoDisplayStyleType } from './XupCardCollection';
import { SliderRefType, sliderSettings, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

type FavoriteProducts = {
  favoriteProducts: string[];
};
type RenderingProps = {
  rendering: ComponentRendering;
};

type GridDisplayProps = {
  maxCardsPerRow?: number;
  desktopVideoDisplayStyle: DesktopVideoDisplayStyleType;
} & RenderingProps &
  FavoriteProducts;

type SliderDisplayProps = {
  desktopVideoDisplayStyle: DesktopVideoDisplayStyleType;
  sliderSettings: sliderSettings;
} & RenderingProps &
  FavoriteProducts;

export const GridDisplay = ({
  rendering,
  maxCardsPerRow,
  favoriteProducts,
  desktopVideoDisplayStyle,
}: GridDisplayProps) => {
  return (
    <Placeholder
      name="cards"
      rendering={rendering}
      favoriteProducts={favoriteProducts}
      desktopVideoDisplayStyle={desktopVideoDisplayStyle}
      render={(cards) =>
        cards.map((card, index) => (
          // console.log('card', card),
          <div
            key={index}
            className={classNames(
              'col-span-12',
              maxCardsPerRow && getLayoutClasses(maxCardsPerRow)
            )}
          >
            {card}
          </div>
        ))
      }
    />
  );
};

export const SliderDisplay = ({
  rendering,
  sliderSettings,
  favoriteProducts,
  desktopVideoDisplayStyle,
}: SliderDisplayProps) => {
  const sliderRef = useRef<SliderType>(null);

  return (
    <div className="col-span-12 [&_.slick-track]:!mx-0">
      <Placeholder
        name="cards"
        rendering={rendering}
        favoriteProducts={favoriteProducts}
        desktopVideoDisplayStyle={desktopVideoDisplayStyle}
        render={(cards) => (
          <SliderWrapper sliderSettings={sliderSettings} sliderRef={sliderRef as SliderRefType}>
            {cards?.map((card, index) => (
              <div
                onKeyDown={(e) => {
                  if (e.shiftKey && e.keyCode == 9) {
                    sliderRef?.current && sliderRef.current.slickPrev();
                  } else if (e.keyCode == 9) {
                    sliderRef?.current && sliderRef?.current.slickNext();
                  }
                }}
                tabIndex={0}
                key={index}
                className={classNames('h-full md:px-xxs')}
              >
                {card}
              </div>
            ))}
          </SliderWrapper>
        )}
      />
    </div>
  );
};
