import { StateCreator } from 'zustand';
import { booksData } from '../mocks/sliderData.mock';
import { Book } from '../types/book';

export type BookSlice = {
  books: Book[];
  updateUserRating: (id: string, rating: number) => void;
  removeUserRating: (id: string) => void;
};
export const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (
  set
) => ({
  books: booksData,
  updateUserRating: (id: string, rating: number) =>
    set((state) => ({
      books: state.books.map((book) => {
        return book.id === id
          ? book.currentUserRating === null
            ? {
                ...book,
                rating:
                  (book.rating * book.ratingCount + rating) /
                  (book.ratingCount + 1),
                currentUserRating: rating,
                ratingCount: book.ratingCount + 1,
              }
            : {
                ...book,
                rating:
                  (book.rating * book.ratingCount -
                    book.currentUserRating +
                    rating) /
                  book.ratingCount,
                currentUserRating: rating,
              }
          : book;
      }),
    })),
  removeUserRating: (id: string) =>
    set((state) => ({
      books: state.books.map((book) => {
        return book.id === id && book.currentUserRating !== null
          ? {
              ...book,
              rating:
                (book.rating * book.ratingCount - book.currentUserRating) /
                (book.ratingCount - 1),
              currentUserRating: null,
              ratingCount: book.ratingCount - 1,
            }
          : book;
      }),
    })),
});
