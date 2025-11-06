import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ReadlistStore = {
  readlist: string[];
  addToReadlist: (id: string) => void;
  removeFromReadlist: (id: string) => void;
  setReadlist: (list: string[]) => void;
};

export const useReadlistStore = create<ReadlistStore>()(
  persist(
    (set) => ({
      readlist: [],
      addToReadlist: (id) =>
        set((state) => ({ readlist: [...state.readlist, id] })),
      removeFromReadlist: (id) =>
        set((state) => ({
          readlist: state.readlist.filter((el) => el !== id),
        })),
      setReadlist: (list) => set({ readlist: list }),
    }),
    {
      name: 'readlist-storage',
      partialize: (state) => ({
        readlist: state.readlist,
      }),
    }
  )
);
