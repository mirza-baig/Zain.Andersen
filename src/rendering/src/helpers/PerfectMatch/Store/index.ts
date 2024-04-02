import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { StepSlice, createStepSlice } from './step-slice';
import { SelectionsSlice, createSelectionsSlice } from './selections-slice';
import { TypeSlice, createTypeSlice } from './type-slice';
import { FiltersSlice, createFiltersSlice } from './filters-slice';
import { LocationSlice, createLocationSlice } from './location-slice';

type PerfectMatchState = StepSlice & SelectionsSlice & TypeSlice & FiltersSlice & LocationSlice;
export default PerfectMatchState;

export const usePerfectMatchState = create<PerfectMatchState>()(
  devtools(
    persist(
      (...a) => ({
        ...createStepSlice(...a),
        ...createSelectionsSlice(...a),
        ...createTypeSlice(...a),
        ...createFiltersSlice(...a),
        ...createLocationSlice(...a),
      }),
      { name: 'perfectMatchStore' }
    )
  )
);
