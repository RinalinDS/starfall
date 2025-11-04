import { StateCreator } from 'zustand';
import { booksData } from '../mocks/sliderData.mock';
import { Book } from '../types/book';
import { useUserStore } from './useUserStore';

// TODO don't need slices , just make regular zustand stores.
// Also take a look to normalized state variant, to speed up book search.

export type BookSlice = {
  books: Book[];
  updateBookRating: (id: string, rating: number) => void;
  removeBookRating: (id: string) => void;
};
export const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (
  set
) => ({
  books: booksData,
  updateBookRating: (id: string, rating: number) =>
    set((state) => {
      const currentUserRating = useUserStore.getState().getUserBookRating(id);

      useUserStore.getState().rateBook(id, rating);

      return {
        books: state.books.map((book) => {
          return book.id === id
            ? currentUserRating === null
              ? {
                  ...book,
                  rating:
                    (book.rating * book.ratingCount + rating) /
                    (book.ratingCount + 1),
                  ratingCount: book.ratingCount + 1,
                }
              : {
                  ...book,
                  rating:
                    (book.rating * book.ratingCount -
                      currentUserRating +
                      rating) /
                    book.ratingCount,
                }
            : book;
        }),
      };
    }),
  removeBookRating: (id: string) =>
    set((state) => {
      const currentUserRating = useUserStore.getState().getUserBookRating(id);

      useUserStore.getState().removeUserBookRating(id);

      return {
        books: state.books.map((book) => {
          return book.id === id && currentUserRating !== null
            ? {
                ...book,
                rating:
                  (book.rating * book.ratingCount - currentUserRating) /
                  (book.ratingCount - 1),
                ratingCount: book.ratingCount - 1,
              }
            : book;
        }),
      };
    }),
});
