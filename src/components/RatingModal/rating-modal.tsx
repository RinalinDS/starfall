import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Rating } from '../Rating/rating';
import { Button } from '../ui/Button/button';
import { Modal } from '../ui/Modal/modal';
import { Typography } from '../ui/Typography/Typography';
import styles from './rating-modal.module.css';
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
      <div className="flex flex-col items-center justify-between gap-4 text-slate-800">
        <Button className={styles.closeButton} onClick={closeModal}>
          <IoCloseSharp />
        </Button>
        <Star rating={rating} />
        <Typography variant="body1" className={styles.rateText}>
          Rate this
        </Typography>

        <Typography variant="h6">{title}</Typography>
        <Rating rating={rating || 0} setRating={setRating} />
        <div className="flex w-full flex-col items-center gap-4">
          <Button
            // TODO change to tailwind if possbiel? mb classnames library ?
            className={`${styles.rateButton} ${rating !== currentUserRating && styles.activeRateButton}`}
            onClick={updateUserRatingInnerHandler}
            disabled={!rating || rating === currentUserRating}
          >
            rate
          </Button>
          {currentUserRating ? (
            <Button
              onClick={removeRateHandler}
              className="relative inline-flex min-h-12 w-full items-center rounded px-14 text-[#3887be] normal-case no-underline transition-all duration-200 ease-in-out before:pointer-events-none before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:h-full before:w-full before:origin-center before:bg-current before:opacity-0 before:transition-transform before:duration-200 before:ease-in-out before:content-[''] after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-full after:w-full after:origin-center after:bg-current after:opacity-0 after:transition-transform after:duration-200 after:ease-in-out after:content-[''] hover:before:opacity-8 hover:after:opacity-8"
            >
              <Typography className="text-[1.4rem] font-semibold tracking-wider">
                Remove rating
              </Typography>
            </Button>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};
