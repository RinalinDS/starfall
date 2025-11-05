import { useCallback, useMemo } from 'react';
import { useModalControls } from './useModalControls';
import { useUserStore } from '../store/useUserStore';
import { useBookStore } from '../store/useBookStore';
import { useReadlistStore } from '../store/useReadlistStore';

export const useBookActions = (id: string) => {
  const { removeBookRating, updateBookRating } = useBookStore();
  const { readlist, addToReadlist, removeFromReadlist } = useReadlistStore();

  const book = useBookStore((state) => state.books.find((b) => b.id === id));

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
