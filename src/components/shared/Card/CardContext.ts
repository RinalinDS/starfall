import { createContext } from 'react';
import { Book } from '../../types/book';

export type CardContext = {
  book: Book;
  changeReadlistHandler: () => void;
  isBookInReadlist: boolean;
  ratingToDisplay: string;
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  updateUserRatingHandler: (value: number) => void;
  removeUserRatingHandler: () => void;
  currentUserRating: number | null;
};
export const CardContext = createContext<CardContext | null>(null);
