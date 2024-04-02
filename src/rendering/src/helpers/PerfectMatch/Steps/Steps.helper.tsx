// Global
import Link from 'next/link';
import { useTheme } from 'src/lib/context/ThemeContext';
import { SvgIcon } from 'src/helpers/SvgIcon';

// Components
import { RenderStepsProps } from './PerfectMatchStep.helper';
import { StepsTheme, StepsThemeSubType } from './Steps.theme';
import { useRouter } from 'next/router';
import { usePerfectMatchState } from '../Store';

const Steps = ({ moduleData, step }: RenderStepsProps) => {
  const { themeData } = useTheme(StepsTheme());
  const theme = (themeData as StepsThemeSubType).classes;
  const perfectMatchState = usePerfectMatchState((x) => x);

  const router = useRouter();
  const hash = (router.asPath as string).split('#')[1];
  const parsedHash = new URLSearchParams(hash);
  const windowId = parsedHash.get('s:type');
  const stepNumber = (moduleData.steps[step].stepNumber ?? 0) - 2;

  const isWindow = moduleData.optionIds.type.window.toLowerCase() === windowId?.toLowerCase();
  const stepLabels = isWindow
    ? ['style', 'location', 'project', 'preferences']
    : ['style', 'size', 'location', 'preferences'];

  const ResetSettings = () => {
    const allSteps = Object.keys(moduleData.steps);
    allSteps.forEach((key: string) => {
      perfectMatchState.clearSelections(key);
    });
  };

  return (
    <div className={theme.stepWrapper}>
      <div className={theme.progressBarWrapper}>
        <div className={theme.progressBarContainer}>
          {stepLabels.map((step: string, index: number) => (
            <div className={theme.progressBarItem} key={index}>
              <span className={theme.progressBarName}>{step}</span>
              <span
                className={
                  theme.progressBarStep +
                  (stepNumber >= index ? ' done ' : ' ') +
                  (index > 0 ? theme.progressBarStepLine : ' ')
                }
              ></span>
            </div>
          ))}
        </div>
      </div>
      <Link href={'#cs=intro'}>
        <a
          className={theme.resetBtn}
          title="Start Over"
          aria-label="Start Over"
          onClick={ResetSettings}
        >
          <SvgIcon icon="reset" size="22" className={theme.resetBtnIcon}></SvgIcon>
          <span>Start Over</span>
        </a>
      </Link>
      <Link href={'#cs=intro'}>
        <a
          className={theme.mobileResetBtn}
          title="Start Over"
          aria-label="Start Over"
          onClick={ResetSettings}
        >
          <SvgIcon icon="reset" size="28" className={theme.mobileResetBtnIcon}></SvgIcon>
        </a>
      </Link>
    </div>
  );
};

export default Steps;
