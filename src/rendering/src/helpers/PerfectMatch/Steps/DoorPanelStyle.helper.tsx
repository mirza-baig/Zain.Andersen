// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';

// Components
import { BouncyCard } from 'src/helpers/BouncyCard';
import { GetStepOptions } from '../perfect-match-mappers';

const DoorPanelStyle = (props: PerfectMatchProps) => {
  const options = GetStepOptions(props);
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;

  return (
    <>
      <div className={theme.headingWrapper}>
        <h1 className={theme.stepHeading}>
          <Text field={props.moduleData.steps[props.step].heading} encode={false}></Text>
        </h1>
        <div className={theme.rteStepCopy}>
          <Text field={props.moduleData.steps[props.step].copy} encode={false}></Text>
        </div>
      </div>
      <div className={theme.contentContainer}>
        <div className={theme.stepContentVisible}>
          <div className={theme.optionContainer}>
            {options.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (_option: any, x: number) => {
                _option.isPerfectMatch = true;
                let customUrl =
                  '#cs=' +
                  props.moduleData.steps[props.step].nextStep +
                  '&s:type=' +
                  props.moduleData.filters.productType +
                  '&s:doorStyle=' +
                  props.moduleData.filters.productStyle +
                  '&s:doorPanelStyle=' +
                  _option.id;
                if (props.moduleData.filters.productOperation) {
                  customUrl += '&s:doorOperation=' + props.moduleData.filters.productOperation;
                }
                return (
                  <BouncyCard
                    {..._option}
                    key={x}
                    mobileFullWidth={true}
                    ctaUrl={customUrl}
                    additionalWrapperClassName="btn option"
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

export default DoorPanelStyle;
