import { FeatureToggleIds, FeatureToggles } from 'lib/feature-toggles';
import { createContext, useContext } from 'react';

const defaultValue: FeatureToggles = Object.keys(FeatureToggleIds).reduce(
  (prev, curr: keyof FeatureToggles) => {
    prev[curr] = false;
    return prev;
  },
  {} as FeatureToggles
);

export const FeatureTogglesContext = createContext<FeatureToggles>(defaultValue);

export const useFeatureToggles = () => {
  return useContext(FeatureTogglesContext);
};
