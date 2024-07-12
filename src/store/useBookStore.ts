import { create } from 'zustand';
import { Book, booksData } from '../mocks/sliderData.mock';

type State = {
  books: Book[];
};

type Action = {
  updateUserRating: (id: string, rating: number) => void;
  removeUserRating: (id: string) => void;
};
export const useBookStore = create<State & Action>((set) => ({
  books: booksData,
  updateUserRating: (id: string, rating: number) =>
    set((state) => ({
      books: state.books.map((book) => {
        console.log('state', id, rating);

        return book.id === id
          ? book.currentUserRating === null
            ? {
                ...book,
                rating:
                  (book.rating * book.howManyTimeWereRated + rating) /
                  (book.howManyTimeWereRated + 1),
                currentUserRating: rating,
                howManyTimeWereRated: book.howManyTimeWereRated + 1,
              }
            : {
                ...book,
                rating:
                  (book.rating * book.howManyTimeWereRated -
                    book.currentUserRating +
                    rating) /
                  book.howManyTimeWereRated,
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
                (book.rating * book.howManyTimeWereRated -
                  book.currentUserRating) /
                (book.howManyTimeWereRated - 1),
              currentUserRating: null,
              howManyTimeWereRated: book.howManyTimeWereRated - 1,
            }
          : book;
      }),
    })),
}));
