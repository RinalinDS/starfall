import { useCallback, useMemo } from 'react';
import { useBoundStore } from '../store/useBoundStore';
import { useModalControls } from './useModalControls';

export const useBookActions = (id: string) => {
  const {
    addToReadlist,
    book,
    readlist,
    removeFromReadlist,
    removeUserRating,
    updateUserRating,
  } = useBoundStore((state) => ({
    readlist: state.readlist,
    addToReadlist: state.addToReadlist,
    removeFromReadlist: state.removeFromReadlist,
    updateUserRating: state.updateUserRating,
    removeUserRating: state.removeUserRating,
    book: state.books.find((book) => book.id === id),
  }));

  const { closeModal, isOpen, openModal } = useModalControls();

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
      updateUserRating(id, rating);
      closeModal();
    },
    [closeModal, id, updateUserRating]
  );

  const removeUserRatingHandler = useCallback(() => {
    removeUserRating(id);
    closeModal();
  }, [removeUserRating, closeModal, id]);

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
    hasBook: !!book,
  };
};
