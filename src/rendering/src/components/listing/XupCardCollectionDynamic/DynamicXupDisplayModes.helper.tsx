import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { getLayoutClasses } from '../XupCardCollection/XupCardCollection.helper';
import { Result, ResultListState } from '@coveo/headless';
import { sliderSettings } from 'src/helpers/SliderWrapper/SliderWrapper';

type GridDisplayProps = {
  renderXupCard: (result: Result, index: number) => ReactElement;
  maxCardsPerRow?: number;
  resultListState: ResultListState | undefined;
};

type SliderDisplayProps = {
  sliderSettings: sliderSettings;
  renderXupCard: (result: Result, index: number) => ReactElement;
  resultListState: ResultListState | undefined;
};

export const GridDisplay = ({
  maxCardsPerRow,
  renderXupCard,
  resultListState,
}: GridDisplayProps) => {
  return (
    <>
      {resultListState?.results?.map((result, index) => (
        <div
          key={index}
          className={classNames('col-span-12', maxCardsPerRow && getLayoutClasses(maxCardsPerRow))}
        >
          {renderXupCard(result, index)}
        </div>
      ))}
    </>
  );
};

export const SliderDisplay = ({
  sliderSettings,
  renderXupCard,
  resultListState,
}: SliderDisplayProps) => {
  return (
    <div className="col-span-12 [&_.slick-track]:!mx-0">
      {resultListState?.results && (
        <SliderWrapper sliderSettings={sliderSettings}>
          {resultListState?.results?.map((result, index) => (
            <div key={index} className={classNames('!block h-full md:px-xxs')}>
              {renderXupCard(result, index)}
            </div>
          ))}
        </SliderWrapper>
      )}
    </div>
  );
};
