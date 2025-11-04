import { useCallback, useMemo } from 'react';
import { useBoundStore } from '../store/useBoundStore';
import { useModalControls } from './useModalControls';
import { useUserStore } from '../store/useUserStore';

export const useBookActions = (id: string) => {
  const {
    addToReadlist,
    book,
    readlist,
    removeFromReadlist,
    updateBookRating,
    removeBookRating,
  } = useBoundStore((state) => ({
    readlist: state.readlist,
    addToReadlist: state.addToReadlist,
    removeFromReadlist: state.removeFromReadlist,
    updateBookRating: state.updateBookRating,
    removeBookRating: state.removeBookRating,
    book: state.books.find((book) => book.id === id),
  }));

  const { closeModal, isOpen, openModal } = useModalControls();

  const { getUserBookRating } = useUserStore();

  const currentUserRating = getUserBookRating(id);

  const ratingToDisplay = (book?.rating || 0).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 1,
  });

  const isBookInReadlist = useMemo(
    () => readlist.some((item) => id === item),
    [readlist, id]
  );

  const changeReadlistHandler = useCallback(() => {
    isBookInReadlist ? removeFromReadlist(id) : addToReadlist(id);
  }, [isBookInReadlist, removeFromReadlist, addToReadlist, id]);

  const updateUserRatingHandler = useCallback(
    (rating: number) => {
      updateBookRating(id, rating);
      closeModal();
    },
    [closeModal, id, updateBookRating]
  );

  const removeUserRatingHandler = useCallback(() => {
    removeBookRating(id);
    closeModal();
  }, [removeBookRating, closeModal, id]);

  return {
    readlist,
    book,
    openModal,
    isOpen,
    ratingToDisplay,
    updateUserRatingHandler,
    removeUserRatingHandler,
    changeReadlistHandler,
    closeModal,
    isBookInReadlist,
    currentUserRating,
    hasBook: !!book,
  };
};
