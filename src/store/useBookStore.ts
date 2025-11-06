import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { booksData } from '../mocks/sliderData.mock';
import { Book } from '../types/book';
import { useUserStore } from './useUserStore';

export type BookState = {
  books: Book[];
  updateBookRating: (id: string, rating: number) => void;
  removeBookRating: (id: string) => void;
};

export const useBookStore = create<BookState>()(
  persist(
    (set) => ({
      books: booksData,

      updateBookRating: (id: string, rating: number) =>
        set((state) => {
          const currentUserRating = useUserStore
            .getState()
            .getUserBookRating(id);
          useUserStore.getState().rateBook(id, rating);

          return {
            books: state.books.map((book) => {
              if (book.id !== id) return book;

              if (currentUserRating === null) {
                return {
                  ...book,
                  rating:
                    (book.rating * book.ratingCount + rating) /
                    (book.ratingCount + 1),
                  ratingCount: book.ratingCount + 1,
                };
              } else {
                return {
                  ...book,
                  rating:
                    (book.rating * book.ratingCount -
                      currentUserRating +
                      rating) /
                    book.ratingCount,
                };
              }
            }),
          };
        }),

      removeBookRating: (id: string) =>
        set((state) => {
          const currentUserRating = useUserStore
            .getState()
            .getUserBookRating(id);
          useUserStore.getState().removeUserBookRating(id);

          return {
            books: state.books.map((book) => {
              if (book.id === id && currentUserRating !== null) {
                return {
                  ...book,
                  rating:
                    (book.rating * book.ratingCount - currentUserRating) /
                    (book.ratingCount - 1),
                  ratingCount: book.ratingCount - 1,
                };
              }
              return book;
            }),
          };
        }),
    }),
    {
      name: 'book-storage',
      partialize: (state) => ({
        books: state.books,
      }),
    }
  )
);

// TODO add partizlize , to not take actions into local storage
// partialize: (state) => ({
//   rows: state.rows,
//   columns: state.columns,
// }),
