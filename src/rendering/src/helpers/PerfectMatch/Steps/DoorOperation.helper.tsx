// Global
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';
import { useTheme } from 'lib/context/ThemeContext';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStepOptions } from '../perfect-match-mappers';
import { BouncyCard } from 'src/helpers/BouncyCard';

// Components

const DoorOperation = (props: PerfectMatchProps) => {
  if (props) {
  }
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;
  const options = GetStepOptions(props);

  return (
    <>
      <div className={theme.headingWrapper}>
        <h1 className={theme.stepHeading}>{props.moduleData.steps[props.step].heading?.value}</h1>
        <div className={theme.rteStepCopy}>
          <RichText field={props.moduleData.steps[props.step].copy}></RichText>
        </div>
      </div>
      <div className={theme.contentContainer}>
        <div className={theme.stepContentVisible}>
          <div className={theme.optionContainer}>
            {options.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (_option: any, x: number) => {
                _option.isPerfectMatch = true;
                const customUrl =
                  '#cs=' +
                  props.moduleData.steps[props.step].nextStep +
                  '&s:type=' +
                  props.moduleData.filters.productType +
                  '&s:doorStyle=' +
                  props.moduleData.filters.productStyle +
                  '&s:doorOperation=' +
                  _option.id;
                return (
                  <BouncyCard
                    {..._option}
                    key={x}
                    mobileFullWidth={true}
                    ctaUrl={customUrl}
                    additionalButtonClassName={' p-[60px_20px_10px_20px] '}
                    imageLayout="intrinsic"
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

export default DoorOperation;
