import { StateCreator } from 'zustand';

export type ReadlistSlice = {
  readlist: string[];
  addToReadlist: (id: string) => void;
  removeFromReadlist: (id: string) => void;
};

export const createReadlistSlice: StateCreator<
  ReadlistSlice,
  [],
  [],
  ReadlistSlice
> = (set) => ({
  readlist: [],
  addToReadlist: (id) =>
    set((state) => ({ readlist: [...state.readlist, id] })),
  removeFromReadlist: (id) =>
    set((state) => ({
      readlist: state.readlist.filter((el) => el !== id),
    })),
});
