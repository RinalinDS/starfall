import { useState } from 'react';
import { Rating } from '../atoms/Rating/rating';
import { Button } from '../ui/Button/button';
import { Modal } from '../ui/Modal/modal';
import { Typography } from '../ui/Typography/Typography';
import { Star } from './star';

export const RatingModal = ({
  closeModal,
  title,
  currentUserRating,
  updateUserRatingHandler,
  removeRateHandler,
}: {
  closeModal: () => void;
  title: string;
  currentUserRating: number | null;
  updateUserRatingHandler: (rating: number) => void;
  removeRateHandler: () => void;
}) => {
  const [rating, setRating] = useState(currentUserRating || 0);

  const updateUserRatingInnerHandler = () => {
    updateUserRatingHandler(rating);
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="flex flex-col items-center justify-between gap-4">
        <Star rating={rating} />

        <Typography variant="h6">{title}</Typography>
        <Rating rating={rating || 0} setRating={setRating} />
        <div className="flex w-full flex-col items-center gap-8">
          <Button
            className={`flex w-full cursor-pointer justify-center rounded border-none px-8 py-4 text-4xl font-medium capitalize ${rating !== currentUserRating && 'bg-amber-400 text-4xl font-medium text-gray-900 capitalize'}`}
            onClick={updateUserRatingInnerHandler}
            disabled={!rating || rating === currentUserRating}
          >
            rate
          </Button>
          {currentUserRating ? (
            <Button
              onClick={removeRateHandler}
              className="inline-flex min-h-12 w-3/4 items-center rounded bg-amber-400 px-14 text-gray-900 normal-case no-underline transition-all duration-200 ease-in-out"
            >
              <Typography className="text-[1.4rem] tracking-wider">
                Remove rating
              </Typography>
            </Button>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};
