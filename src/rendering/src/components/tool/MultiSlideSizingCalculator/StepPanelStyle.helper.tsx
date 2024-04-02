import { useState, useMemo, ChangeEvent } from 'react';
import { MultiSlideSizingCalculatorActionButtons } from './ActionButtons.helper';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StepPanelStyle = (props: any): JSX.Element => {
  const { fields, activeStep } = props;

  const OPTIONS = [
    {
      text: fields?.TileButtonTextOne?.value,
      name: 'thermally',
    },
    {
      text: fields?.TileButtonTextTwo?.value,
      name: 'nonThermally',
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useMemo(() => {
    if (props.isResetForm) {
      setSelectedOption(null);
    }
  }, [props.isResetForm]);

  const handleChangeRadioInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleClickNext = () => {
    if (selectedOption === null) {
      setError('Select an option');
    } else {
      setError(null);
      props.onStepChange(activeStep + 1);
      props.userCallback({
        selectedPanelStyle: OPTIONS.find((item) => item.name === selectedOption),
      });
    }
  };
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="w-full">
        <div className="font-extrabold">Step Two: Select Panel Style</div>
        <div className="mt-5 flex flex-col md:flex-row md:space-x-5">
          {OPTIONS.map((item, idx) => (
            <div
              className={clsx({
                'my-5 mb-4 flex items-center rounded-[5px] border-2 border-[#C4BFB6] bg-[#F8F6F4] p-5 font-semibold':
                  true,
                'border-6 border-[#F26924]': selectedOption === item.name,
                'border border-[#C4BFB6] hover:border-2 hover:border-black':
                  selectedOption !== item.name,
              })}
              key={idx}
            >
              <label
                htmlFor={`step-two-radio-${idx}`}
                className="text-gray-900 dark:text-gray-300 ml-2 cursor-pointer text-sm"
              >
                <input
                  id={`step-two-radio-${idx}`}
                  type="radio"
                  value={item.name}
                  name={item.name}
                  className="bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-6 w-6 text-[#F26924] focus:ring-2 focus:ring-primary dark:focus:ring-[#b9b9b9]"
                  checked={selectedOption === item.name}
                  onChange={handleChangeRadioInput}
                />
                <span className="ml-2.5">{item.text}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="m-auto mt-5">
          <MultiSlideSizingCalculatorActionButtons {...props} nextStep={handleClickNext} />
          {error && (
            <div className="float-right px-m py-3 font-semibold text-red-500 md:float-left md:px-0">
              {error}
            </div>
          )}
        </div>
        <div className="m-auto mt-[50px]"></div>
      </div>
    </div>
  );
};
