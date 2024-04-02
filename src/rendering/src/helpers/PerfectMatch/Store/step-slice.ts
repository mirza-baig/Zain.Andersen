import { StateCreator } from 'zustand';
import { PerfectMatchSteps } from '../types';
import PerfectMatchState from '.';
import { ModuleDataWrapper } from '../module-data-wrapper';

export interface StepSlice {
  currentStep: PerfectMatchSteps;
  setCurrentStep: (nextStep: PerfectMatchSteps) => void;
  nextStep: (moduleData: ModuleDataWrapper) => void;
}

export const createStepSlice: StateCreator<PerfectMatchState, [], [], StepSlice> = (set) => ({
  currentStep: 'intro',
  setCurrentStep: (nextStep) => set(() => ({ currentStep: nextStep })),
  nextStep: (moduleData) =>
    set((state) => {
      const currentStep = state.currentStep;
      const currentStepObject = moduleData.getCurrentStepObject(currentStep);
      return { currentStep: currentStepObject.nextStep };
    }),
});
