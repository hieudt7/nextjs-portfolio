import { create } from 'zustand';

type ScrollStore = {
  shouldScrollToWorks: boolean;
  setShouldScrollToWorks: (value: boolean) => void;
};

export const useScrollStore = create<ScrollStore>(set => ({
  shouldScrollToWorks: false,
  setShouldScrollToWorks: (value: boolean) => set({ shouldScrollToWorks: value }),
}));
