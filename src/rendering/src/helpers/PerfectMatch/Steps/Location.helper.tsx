// Global
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';
import { useTheme } from 'lib/context/ThemeContext';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import USAMap from 'react-usa-map';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

const Location = (props: PerfectMatchProps) => {
  const router = useRouter();
  const [stateSelected, setStateSelected] = useState('');

  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function mapHandler(e: any) {
    const location = e.target.dataset.name;

    setStateSelected(location);
    goToNextStep(location);
  }

  function handleNextClick() {
    if (stateSelected.length > 0) {
      goToNextStep(stateSelected);
    }
  }

  function handleStateChange(event: ChangeEvent<HTMLSelectElement>) {
    const statePicked = event.target.value;
    setStateSelected(statePicked);
  }

  function goToNextStep(state: string) {
    props.moduleData.filters[props.step] = state;
    let url = router.asPath as string;
    let nextStep = props.moduleData.steps[props.step].nextStep;
    const coastalStep = props.moduleData.steps[nextStep];
    if (coastalStep.regions.indexOf(state) === -1) {
      nextStep = coastalStep.nextStep;
    }
    url = url.replace(props.step, nextStep) + '&s:' + props.step + '=' + state;
    router.push(url);
  }

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
          <div className={theme.map}>
            <USAMap id="map" onClick={(e: MouseEvent) => mapHandler(e)} defaultFill="#C4BFB6" />
          </div>
          <div className={theme.selectWrapper}>
            <select className={theme.selectClass} onChange={(e) => handleStateChange(e)}>
              <option value="">Select a state</option>
              {props.moduleData.steps[props.step].stateList.children.map(
                (state: Feature.EnterpriseWeb.Enterprise.Data.Geography.State, index: number) => (
                  <option key={index} value={state.fields?.Abbreviation.value}>
                    {state.fields?.FullName.value}
                  </option>
                )
              )}
            </select>
            <button className={theme.buttonNext} onClick={handleNextClick}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
