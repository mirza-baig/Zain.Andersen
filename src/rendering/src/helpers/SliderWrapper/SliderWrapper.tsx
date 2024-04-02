import classNames from 'classnames';
import { ThemeName } from 'lib/context/ThemeContext';
import React, { ReactElement, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { SvgIcon } from '../SvgIcon';

export type SliderType = Slider & {
  innerSlider: {
    props: Required<Settings>;
  };
};

export type SliderRefType = React.MutableRefObject<SliderType>;

export type sliderSettings = Settings & {
  [key: string]: unknown;
  afterIndexChange?: (currentIndex: number) => void;
};

type SliderWrapperProps = {
  theme?: ThemeName;
  sliderSettings?: sliderSettings;
  sliderRef?: SliderRefType;
  children: ReactElement[];
};

// export interface CustomArrowProps {
//   onClick?: () => void; // Function to handle the click event
//   direction: 'right' | 'left'; // Indicates whether it's a previous or next arrow
//   disabled?: boolean; // Indicates whether the arrow is disabled (optional)
//   className?: string; // Additional CSS classes for styling (optional)
//   style?: React.CSSProperties; // Inline styles for customization (optional)
// }

export const SliderWrapper = ({ sliderSettings, sliderRef, children }: SliderWrapperProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const renderIcon = (direction: 'left' | 'right') => {
    switch (direction) {
      case 'right':
        return <SvgIcon icon="arrow-right" size="lg" />;
      case 'left':
        return <SvgIcon icon="arrow-left" size="lg" />;
      default:
        return null;
    }
  };

  // We can ignore this typeerror, as this are props coming from Slick slider setting which we don't have type defined for.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ArrowIcon = (props: any) => {
    const { className, style, onClick, direction, classes } = props;
    return (
      <span
        className={classNames(className, 'text-theme-text hover:text-theme-text', classes)}
        style={{ ...style }}
        onClick={onClick}
        onKeyDown={(e: { code: string }) => {
          if (e.code === 'Enter' || e.code === 'Space') {
            onClick();
          }
        }}
        tabIndex={0}
      >
        {renderIcon(direction)}
      </span>
    );
  };

  const renderCustomPaging = (index: number) => {
    const getCustomPagingText = () => {
      if (
        sliderRef?.current &&
        sliderSettings?.enableNumberedPagination &&
        sliderRef.current?.innerSlider?.props?.rows > 1
      ) {
        let currentSlidesNumber =
          sliderRef?.current?.innerSlider?.props.rows *
          sliderRef?.current?.innerSlider?.props.slidesPerRow *
          (index + 1);

        if (currentSlidesNumber > children.length) {
          currentSlidesNumber = children.length;
        }
        return `${index + 1} / ${
          (sliderRef.current?.innerSlider?.props.children as Array<React.ReactNode>)?.length
        }`;
      } else {
        if (sliderRef?.current && sliderRef.current.innerSlider.props.slidesToShow > 1) {
          return `${index + 1} / ${
            children.length - Math.floor(sliderRef?.current?.innerSlider?.props.slidesToShow - 1)
          }`;
        }

        return `${index + 1} / ${children.length}`;
      }
    };

    return (
      <span className={classNames(Math.ceil(currentSlideIndex) !== index && 'hidden')}>
        {getCustomPagingText()}
      </span>
    );
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowIcon direction="right" classes={sliderSettings?.nextArrowClasses} />,
    prevArrow: <ArrowIcon direction="left" classes={sliderSettings?.prevArrowClasses} />,
    afterChange: (currentIndex: number) => {
      setCurrentSlideIndex(currentIndex);
      if (!!sliderSettings?.afterIndexChange) {
        sliderSettings?.afterIndexChange(currentIndex);
      }
    },
    ...sliderSettings,
  };

  if (sliderSettings?.enableNumberedPagination) {
    settings.className = 'numbered-pagination';
    settings.dotsClass = sliderSettings.numberedPaginationClasses
      ? (sliderSettings.numberedPaginationClasses as string)
      : 'mt-xs text-center';
    settings.customPaging = (i: number) => {
      return renderCustomPaging(i);
    };
  }

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};
