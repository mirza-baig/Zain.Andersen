import { StateCreator } from 'zustand';
import PerfectMatchState from '.';
import { Steps } from '../constants';

export interface TypeSlice {
  setType: (typeId: string) => void;
  getType: () => string;
}

export const createTypeSlice: StateCreator<PerfectMatchState, [], [], TypeSlice> = (_set, get) => ({
  setType: (typeId) => get().replaceSelection(Steps.Type, typeId),
  getType: () => get().getSingleSelection(Steps.Type),
});
