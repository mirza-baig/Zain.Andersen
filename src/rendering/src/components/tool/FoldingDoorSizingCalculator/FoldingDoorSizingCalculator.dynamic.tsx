import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Component } from 'src/helpers/Component';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';

import { FoldingDoorSizingCalculatorContext } from './FoldingDoorSizingCalculatorContext.helper';
import { ProgressBar } from 'src/helpers/ProgressBar';
import { Stepper } from './Stepper.helper';

import { PanelStyle } from './PanelStyle.helper';
import { Calculator } from './Calculator.helper';

export type FoldingDoorSizingCalculatorProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.FoldingDoorSizingCalculator;

const FoldingDoorSizingCalculator = (props: FoldingDoorSizingCalculatorProps): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [maxSteps, setMaxSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  const [panelStyle, setPanelStyle] = useState('contemporary');
  const [panelStyleText, setPanelStyleText] = useState('Contemporary');

  const { currentScreenWidth } = useCurrentScreenType();

  const slider = useRef<Slider>(null);

  const sliderSettings = {
    accessibility: false,
    dots: false,
    infinite: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const stepLables = [['Select Panel Style'], ['Enter Size Information']];

  useEffect(() => {
    if (currentStep !== activeStep) {
      slider?.current?.slickGoTo(activeStep);
      setCurrentStep(activeStep);
    }

    if (scrollToTop) {
      const elem = document.getElementById('scrollToTopDiv');
      const sy = window.scrollY;
      let y =
        elem?.getBoundingClientRect().top !== undefined
          ? elem?.getBoundingClientRect().top + sy
          : 0;

      if (currentScreenWidth <= getBreakpoint('ml')) {
        //account for nav bar height
        y = y - 59;
      }

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      setScrollToTop(false);
    }

    //Fix for slider adaptiveHeight
    const slide = document.querySelector(
      '.slick-slide.slick-active.slick-current > div'
    ) as HTMLElement;
    slide.style.height = 'auto';

    const activeSlide = document.querySelector(
      '.slick-slide.slick-active.slick-current'
    ) as HTMLElement;
    activeSlide.style.height = 'fit-content';
  }, [activeStep, currentScreenWidth, currentStep, scrollToTop]);

  return (
    <Component variant="lg" dataComponent="tool/foldingdoorsizingcalculator" {...props}>
      <div className="col-span-12" id="scrollToTopDiv">
        <FoldingDoorSizingCalculatorContext.Provider
          value={{
            maxSteps,
            scrollToTop,
            activeStep,
            isCalculated,
            panelStyle,
            panelStyleText,
            setMaxSteps,
            setScrollToTop,
            setActiveStep,
            setIsCalculated,
            setPanelStyle,
            setPanelStyleText,
          }}
        >
          <div className="hidden md:block">
            <Stepper />
          </div>
          <div className="md:hidden">
            <ProgressBar
              percent={(Number(activeStep + 1) / (maxSteps + 1)) * 100}
              stepLabel={stepLables[activeStep]}
              isComplete={isCalculated}
              activeStep={activeStep + 1}
              totalSteps={maxSteps + 1}
            />
          </div>
          <div className="mt-10">
            <Slider ref={slider} {...sliderSettings} swipeToSlide={false}>
              <PanelStyle {...props} />
              <Calculator {...props} />
            </Slider>
          </div>
        </FoldingDoorSizingCalculatorContext.Provider>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<FoldingDoorSizingCalculatorProps>(FoldingDoorSizingCalculator);
