import { StateCreator } from 'zustand';

// TODO don't need slices , just make regular zustand stores.

export type ReadlistSlice = {
  readlist: string[];
  addToReadlist: (id: string) => void;
  removeFromReadlist: (id: string) => void;
  setReadlist: (list: string[]) => void;
};

export const createReadlistSlice: StateCreator<
  ReadlistSlice,
  [],
  [],
  ReadlistSlice
> = (set) => ({
  readlist: ['1', '2'],
  addToReadlist: (id) =>
    set((state) => ({ readlist: [...state.readlist, id] })),
  removeFromReadlist: (id) =>
    set((state) => ({
      readlist: state.readlist.filter((el) => el !== id),
    })),
  setReadlist: (list: string[]) => set(() => ({ readlist: list })),
});
