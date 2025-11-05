import { create } from 'zustand';

type ReadlistStore = {
  readlist: string[];
  addToReadlist: (id: string) => void;
  removeFromReadlist: (id: string) => void;
  setReadlist: (list: string[]) => void;
};

export const useReadlistStore = create<ReadlistStore>((set) => ({
  readlist: ['1', '2'],
  addToReadlist: (id) =>
    set((state) => ({ readlist: [...state.readlist, id] })),
  removeFromReadlist: (id) =>
    set((state) => ({
      readlist: state.readlist.filter((el) => el !== id),
    })),
  setReadlist: (list) => set({ readlist: list }),
}));
