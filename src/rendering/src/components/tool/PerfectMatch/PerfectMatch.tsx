// Global
import { Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

// Components
//import { Component } from 'src/helpers/Component';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { ModuleDataWrapper } from 'src/helpers/PerfectMatch/module-data-wrapper';
import { SetFilters } from 'src/helpers/PerfectMatch/perfect-match-mappers';
import {
  MapOptionIds,
  MapOptions,
  MapPanelOptionHingedIcons,
  MapPreferences,
  MapProjectTypes,
  MapRegions,
  MapResults,
  MapSteps,
} from 'src/helpers/PerfectMatch/perfect-match-mappers';
import RenderSteps from 'src/helpers/PerfectMatch/Steps/PerfectMatchStep.helper';
import Steps from 'src/helpers/PerfectMatch/Steps/Steps.helper';
import { usePerfectMatchState } from 'src/helpers/PerfectMatch/Store';
import { PerfectMatchModuleData, PerfectMatchSteps } from 'src/helpers/PerfectMatch/types';
import { PerfectMatchTheme, PerfectMatchThemeSubType } from './PerfectMatch.theme';

export type PerfectMatchProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.PerfectMatch.PerfectMatch;

export type PerfectMatchOptionProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.PerfectMatch.PerfectMatchOption;
export type PerfectMatchResultProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.PerfectMatch.PerfectMatchResult;

export const PerfectMatchDataContext = createContext<ModuleDataWrapper>({} as ModuleDataWrapper);

export const usePerfectMatchDataContext = () => useContext(PerfectMatchDataContext);

const PerfectMatch = (props: PerfectMatchProps) => {
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);

  const moduleData: PerfectMatchModuleData = {
    steps: MapSteps(props),
    results: MapResults(props),
    preferences: MapPreferences(props),
    projectTypes: MapProjectTypes(props),
    regions: MapRegions(props),
    optionIds: MapOptionIds(props),
    options: MapOptions(props),
    panelOptionHingedIcons: MapPanelOptionHingedIcons(props),
    filters: {},
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const currentStep = usePerfectMatchState((x: any) => x.currentStep);
  const setCurrentStep = usePerfectMatchState((x: any) => x.setCurrentStep);
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const currentStepNumber = moduleData.steps[currentStep].stepNumber ?? 0;
  const maxStepNumber = Math.max(
    ...Object.keys(moduleData.steps).map((key: string) => {
      return moduleData.steps[key]?.stepNumber ?? 0;
    })
  );

  const router = useRouter();

  const moduleWrapper = new ModuleDataWrapper(moduleData);

  useEffect(() => {
    if (router.isReady) {
      const hash = (router.asPath as string).split('#')[1];
      const parsedHash = new URLSearchParams(hash);

      const step = parsedHash.get('cs') as PerfectMatchSteps;

      SetFilters(parsedHash, moduleData);

      if (moduleData?.steps?.hasOwnProperty(step)) {
        setCurrentStep(step);
      }
    }
  }, [moduleData.steps, router.isReady, router.asPath, setCurrentStep]);

  const RenderCSSHidingBlock = () => {
    return (
      <>
        <style>
          {`
          @media screen and (min-width:672px)
          {
            header #header, section.breadcrumbs-module, footer #footer
            {
              visibility: hidden;
              opacity: 0;
              transition: visibility 0s linear 300ms, opacity 300ms;
            }

            footer #footer
            {
              display: none;
            }
          }

          @media print {
            #header, #footer {
              display: none;
            }
          }`}
        </style>
      </>
    );
  };

  return (
    <PerfectMatchDataContext.Provider value={moduleWrapper}>
      <section className={theme.module} data-component="perfectmatch/perfectmatch">
        {router.isReady && currentStep && currentStepNumber < maxStepNumber ? (
          <div className={theme.mainBackground}>
            <Image
              field={props.fields?.moduleBackgroundImage}
              className={theme.mainBackgroundImage}
            ></Image>
          </div>
        ) : (
          <></>
        )}
        {router.isReady &&
        currentStep &&
        currentStepNumber < maxStepNumber &&
        currentStepNumber > 1 ? (
          <div className={theme.whiteOverlay}></div>
        ) : (
          <></>
        )}
        {!navigationVisible && currentStepNumber < maxStepNumber && (
          <button
            className={theme.logo}
            title="Show Navigation"
            aria-label="Show Navigation"
            onClick={() => setNavigationVisible(true)}
          >
            <Image field={props.fields?.logoImage} className={theme.logoImage}></Image>
          </button>
        )}
        <div className={theme.app}>
          {currentStepNumber - 2 >= 0 && currentStepNumber < maxStepNumber ? (
            <Steps props={props} step={currentStep} moduleData={moduleData}></Steps>
          ) : (
            <></>
          )}
          <RenderSteps props={props} step={currentStep} moduleData={moduleData}></RenderSteps>
        </div>
      </section>
      {!navigationVisible && currentStepNumber < maxStepNumber && RenderCSSHidingBlock()}
    </PerfectMatchDataContext.Provider>
  );
};

export default withDatasourceCheck()<PerfectMatchProps>(PerfectMatch);
