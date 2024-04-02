import { StateCreator } from 'zustand';
import PerfectMatchState from '.';

export interface LocationSlice {
  location: string;
  setLocation: (location: string) => void;
}

export const createLocationSlice: StateCreator<PerfectMatchState, [], [], LocationSlice> = (
  set
) => ({
  location: 'Not Set',
  setLocation: (location) => set({ location }),
});
