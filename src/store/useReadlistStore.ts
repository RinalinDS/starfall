import { create } from 'zustand';
import { Book } from '../mocks/sliderData.mock';

type State = {
  readlist: Book[];
};

type Action = {
  addToReadlist: (book: Book) => void;
  removeFromReadlist: (id: string) => void;
};

export const useReadlistStore = create<State & Action>((set) => ({
  readlist: [],
  addToReadlist: (book) =>
    set((state) => ({ readlist: [...state.readlist, book] })),
  removeFromReadlist: (id: string) =>
    set((state) => ({
      readlist: state.readlist.filter((b) => b.id !== id),
    })),
}));
