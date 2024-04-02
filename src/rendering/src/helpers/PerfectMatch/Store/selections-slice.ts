import { StateCreator } from 'zustand';
import { PerfectMatchSteps } from '../types';
import PerfectMatchState from '.';

export interface SelectionsSlice {
  selections: {
    [K in PerfectMatchSteps]?: string[];
  };
  addSelection: (step: PerfectMatchSteps, selection: string) => void;
  replaceSelection: (step: PerfectMatchSteps, selection: string | string[] | undefined) => void;
  clearSelections: (step: PerfectMatchSteps) => void;
  getSingleSelection: (step: PerfectMatchSteps) => string;
  getAllSelections: (step: PerfectMatchSteps) => string[];
}

export const createSelectionsSlice: StateCreator<PerfectMatchState, [], [], SelectionsSlice> = (
  set,
  get
) => ({
  selections: {},
  addSelection: (step, selection) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [step]: [...(state.selections[step] ?? []), selection],
      },
    })),
  replaceSelection: (step, selection) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [step]: selection ? [selection].flat() : [],
      },
    })),
  clearSelections: (step) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [step]: [],
      },
    })),
  getSingleSelection: (step) => (get().selections[step] ?? [])[0] ?? '',
  getAllSelections: (step) => get().selections[step] ?? [],
});
