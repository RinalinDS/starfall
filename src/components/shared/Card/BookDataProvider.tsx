import { ReactNode } from 'react';

import { CardContext } from './CardContext.ts';
import { useBookActions } from '../../../hooks/useBookActions.ts';
import { FallbackCard } from './atoms/FallbackCard.tsx';

export const BookDataProvider = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const {
    book,
    changeReadlistHandler,
    isBookInReadlist,
    ratingToDisplay,
    openModal,
    updateUserRatingHandler,
    removeUserRatingHandler,
    isOpen,
    closeModal,
    currentUserRating,
  } = useBookActions(id);

  if (!book) return <FallbackCard />;

  return (
    <CardContext.Provider
      value={{
        book,
        changeReadlistHandler,
        isBookInReadlist,
        ratingToDisplay,
        openModal,
        updateUserRatingHandler,
        isOpen,
        closeModal,
        removeUserRatingHandler,
        currentUserRating,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
