import { ReactNode } from 'react';
import { useBookActions } from '../../hooks/useBookActions.ts';
import { FallbackCard } from './atoms/FallbackCard.tsx';
import { CardContext } from './useCardContext.tsx';

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
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
