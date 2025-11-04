import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookRating {
  bookId: string;
  rating: number;
}

interface UserState {
  ratedBooks: BookRating[];

  rateBook: (bookId: string, rating: number) => void;
  updateUserBookRating: (bookId: string, rating: number) => void;
  removeUserBookRating: (bookId: string) => void;
  getUserBookRating: (bookId: string) => number | null;
}

// TODO extend with user info, maybe ratedBooks should be user related and be inside user object.
export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      ratedBooks: [],

      rateBook: (bookId, rating) => {
        const { ratedBooks } = get();

        const existingRatingIndex = ratedBooks.findIndex(
          (r) => r.bookId === bookId
        );

        if (existingRatingIndex !== -1) {
          const updatedRatings = [...ratedBooks];
          updatedRatings[existingRatingIndex] = {
            bookId,
            rating,
          };

          set({
            ratedBooks: updatedRatings,
          });
        } else {
          set({
            ratedBooks: [
              ...ratedBooks,
              {
                bookId,
                rating,
              },
            ],
          });
        }
      },

      updateUserBookRating: (bookId, rating) => {
        get().rateBook(bookId, rating);
      },

      removeUserBookRating: (bookId) => {
        const { ratedBooks } = get();

        set({
          ratedBooks: ratedBooks.filter((r) => r.bookId !== bookId),
        });
      },

      getUserBookRating: (bookId) => {
        const { ratedBooks } = get();

        const rating = ratedBooks.find((r) => r.bookId === bookId);
        return rating ? rating.rating : null;
      },
    }),
    {
      name: 'user-storage',
    }
  )
);
