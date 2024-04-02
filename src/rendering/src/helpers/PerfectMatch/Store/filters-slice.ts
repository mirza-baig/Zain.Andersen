import { StateCreator } from 'zustand';
import { PerfectMatchProperties } from '../types';
import PerfectMatchState from '.';

export type PerfectMatchFilters = {
  [K in PerfectMatchProperties]?: string[];
};

export interface FiltersSlice {
  filters: PerfectMatchFilters;
  addFilter: (property: PerfectMatchProperties, selection: string) => void;
  replaceFilter: (
    property: PerfectMatchProperties,
    selection: string | string[] | undefined
  ) => void;
  clearFilters: (property: PerfectMatchProperties) => void;
}

export const createFiltersSlice: StateCreator<PerfectMatchState, [], [], FiltersSlice> = (set) => ({
  filters: {},
  addFilter: (property, selection) =>
    set((state) => ({
      filters: {
        [property]: [...(state.filters[property] ?? []), selection],
      },
    })),
  replaceFilter: (property, selection) =>
    set({
      selections: {
        [property]: selection ? [selection].flat() : [],
      },
    }),
  clearFilters: (property) =>
    set({
      selections: {
        [property]: [],
      },
    }),
});
