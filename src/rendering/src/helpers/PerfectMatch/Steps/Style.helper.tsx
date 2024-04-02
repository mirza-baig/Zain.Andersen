// Global
import { useTheme } from 'lib/context/ThemeContext';

// Components
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';
import { BouncyCard } from 'src/helpers/BouncyCard';
import { GetStepOptions } from '../perfect-match-mappers';
import { RenderStepsProps } from './PerfectMatchStep.helper';

const Style = (props: RenderStepsProps) => {
  const moduleData = props.moduleData;
  const options = GetStepOptions(props);
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;

  return (
    <>
      <div className={theme.headingWrapper}>
        <h1 className={theme.stepHeading}>{props.moduleData.steps[props.step].heading?.value}</h1>
        <div className={theme.rteStepCopy}>{props.moduleData.steps[props.step].copy?.value}</div>
      </div>
      <div className="content-container">
        <div className={theme.stepContentVisible}>
          <div className={theme.optionContainer}>
            {options.map(
              /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
              (_option: any, x: number) => {
                _option.isPerfectMatch = true;
                let nextStep = '';
                if (
                  props.step === 'doorStyle' &&
                  _option.id !== moduleData.optionIds.doorStyle.hinged
                ) {
                  nextStep = 'doorPanelStyle';
                } else {
                  nextStep = props.moduleData.steps[props.step].nextStep ?? '';
                }
                const customUrl =
                  '#cs=' +
                  nextStep +
                  '&s:type=' +
                  props.moduleData.filters.productType +
                  '&s:' +
                  props.step +
                  '=' +
                  _option.id;

                return (
                  <BouncyCard
                    {..._option}
                    key={x}
                    mobileFullWidth={true}
                    ctaUrl={customUrl}
                  ></BouncyCard>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style;
