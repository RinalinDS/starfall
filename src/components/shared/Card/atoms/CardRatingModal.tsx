import { RatingModal } from '../../RatingModal/rating-modal';
import { useCardContext } from '../useCardContext';

export const CardRatingModal = () => {
  const {
    book: { title },
    closeModal,
    isOpen,
    updateUserRatingHandler,
    removeUserRatingHandler,
    currentUserRating,
  } = useCardContext();

  if (!isOpen) return null;
  return (
    <RatingModal
      closeModal={closeModal}
      title={title}
      currentUserRating={currentUserRating}
      updateUserRatingHandler={updateUserRatingHandler}
      removeRateHandler={removeUserRatingHandler}
    />
  );
};
