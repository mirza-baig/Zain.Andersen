// Global
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';

// Components
import { useTheme } from 'lib/context/ThemeContext';
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';
import { BouncyCard } from 'src/helpers/BouncyCard';
import { GetStepOptions } from '../perfect-match-mappers';

const Coastal = (props: PerfectMatchProps) => {
  if (props) {
  }

  const options = GetStepOptions(props);
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;
  const router = useRouter();
  const nextStep = props.moduleData.steps[props.step].nextStep;
  let url = (router.asPath as string).replace(props.step, nextStep);

  return (
    <>
      <div className={theme.headingWrapper}>
        <h1 className={theme.stepHeading}>{props.moduleData.steps[props.step].heading?.value}</h1>
        <div className={theme.rteStepCopy}>
          <RichText field={props.moduleData.steps[props.step]?.copy}></RichText>
        </div>
      </div>
      <div className={theme.contentContainer}>
        <div className={theme.stepContentVisible}>
          <div className={themeData.classes.optionContainer}>
            {options.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (_option: any, x: number) => {
                _option.isPerfectMatch = true;
                url = url + '&s:' + props.step + '=' + _option.id;
                return (
                  <BouncyCard {..._option} key={x} mobileFullWidth={true} ctaUrl={url}></BouncyCard>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coastal;
