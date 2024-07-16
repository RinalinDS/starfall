import { create } from 'zustand';
import { ReadlistSlice, createReadlistSlice } from './useReadlistStore';
import { BookSlice, createBookSlice } from './useBookStore';

export const useBoundStore = create<BookSlice & ReadlistSlice>()((...a) => ({
  ...createReadlistSlice(...a),
  ...createBookSlice(...a),
}));
