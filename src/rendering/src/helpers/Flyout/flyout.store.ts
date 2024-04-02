import { create } from 'zustand';

type Store = {
  isFlyoutVisible: boolean;
  setFlyoutVisibility: (shouldVisible: boolean) => void;
  currentZip: string;
  setCurrentZip: (zipcode: string) => void;
};

export const useFlyoutStore = create<Store>()((set) => ({
  isFlyoutVisible: false,
  setFlyoutVisibility: (shouldVisible: boolean) => set(() => ({ isFlyoutVisible: shouldVisible })),
  currentZip: '',
  setCurrentZip: (zipcode: string) => set(() => ({ currentZip: zipcode })),
}));
