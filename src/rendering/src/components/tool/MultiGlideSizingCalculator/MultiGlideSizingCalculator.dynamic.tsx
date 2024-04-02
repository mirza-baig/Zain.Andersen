import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';

// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

// Components
import { MultiGlideSizingCalculatorTheme } from './MultiGlideSizingCalculator.theme';
import { Component } from 'src/helpers/Component';
import Stepper from './Stepper.helper';
import { StepConfigurationOption } from './StepConfigurationOption.helper';
import { StepPanelStyle } from './StepPanelStyle.helper';
import { StepMultiCalculation } from './StepMultiCalculator.helper';
import { ProgressBar } from 'src/helpers/ProgressBar';

export type MultiGlideSizingCalculatorProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.MultiGlideSizingCalculator;

export const MAX_STEPS = 2;

const MultiGlideSizingCalculator = (props: MultiGlideSizingCalculatorProps): JSX.Element => {
  const { themeData } = useTheme(MultiGlideSizingCalculatorTheme());

  const slider = useRef<Slider>(null);
  const eleRef = useRef<HTMLDivElement>(null);
  const sliderSettings = {
    dots: false,
    infinite: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const [isResetForm, setIsResetForm] = useState(false);
  const [formData, setData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assignFormData = (val: any) => {
    // console.log("parent receive user callback");
    console.log(val);
    setIsResetForm(false);
    setData((data) => ({
      ...data,
      ...val,
    }));
  };

  const resetFormData = () => {
    setData({});
    setIsResetForm(true);
  };

  const handleStepChange = (step: number) => {
    eleRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (step <= MAX_STEPS) {
      slider?.current?.slickGoTo(step);
      setActiveStep(step);
      setIsComplete(false);
    }
  };

  const handleComplete = () => {
    // alert("You r done. TQ");
    setIsComplete(true);
  };
  useEffect(() => {
    //Fix for slider adaptiveHeight
    const slide = document.querySelector(
      '.slick-slide.slick-active.slick-current > div'
    ) as HTMLElement;
    slide.style.height = 'auto';
    slide.style.margin = 'auto';
    const activeSlide = document.querySelector(
      '.slick-slide.slick-active.slick-current'
    ) as HTMLElement;
    activeSlide.style.height = 'fit-content';
  });
  return (
    <Component variant="lg" dataComponent="tool/multiglidesizingcalculator" {...props}>
      <div className="col-span-12" ref={eleRef}>
        <div className={themeData.classes.formStep}>
          <div className="hidden md:block">
            <Stepper
              isComplete={isComplete}
              activeStep={activeStep}
              onStepChange={setActiveStep}
              sliderRef={slider}
            />
          </div>
          <div className="md:hidden">
            <ProgressBar
              percent={(Number(activeStep + 1) / (MAX_STEPS + 1)) * 100}
              stepLabel={''}
              isComplete={isComplete}
              activeStep={activeStep + 1}
              totalSteps={MAX_STEPS + 1}
            />
          </div>
        </div>
        <div className="multiglid-slider-wrapper mt-5">
          <Slider ref={slider} {...sliderSettings} swipeToSlide={false}>
            <StepConfigurationOption
              fields={props.fields}
              activeStep={activeStep}
              isResetForm={isResetForm}
              onStepChange={handleStepChange}
              userCallback={assignFormData}
            />
            <StepPanelStyle
              data={formData}
              fields={props.fields}
              activeStep={activeStep}
              isResetForm={isResetForm}
              onStepChange={handleStepChange}
              userCallback={assignFormData}
            />
            <StepMultiCalculation
              formData={formData}
              activeStep={activeStep}
              fields={props.fields}
              onStepChange={handleStepChange}
              userCallback={assignFormData}
              onResetForm={resetFormData}
              previousStep={() => handleStepChange(activeStep - 1)}
              completeCallback={handleComplete}
            />
          </Slider>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<MultiGlideSizingCalculatorProps>(MultiGlideSizingCalculator);
