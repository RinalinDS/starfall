import { create } from 'zustand';

type State = {
  readlist: string[];
};

type Action = {
  addToReadlist: (id: string) => void;
  removeFromReadlist: (id: string) => void;
};

export const useReadlistStore = create<State & Action>((set) => ({
  readlist: [],
  addToReadlist: (id) =>
    set((state) => ({ readlist: [...state.readlist, id] })),
  removeFromReadlist: (id) =>
    set((state) => ({
      readlist: state.readlist.filter((el) => el !== id),
    })),
}));
