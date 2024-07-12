import { useState } from 'react';
import { Button } from '../ui/Button/button';
import { Typography } from '../ui/Typography/typography';
import { Rating } from '../Rating/rating';
import styles from './rating-modal.module.css';
import { Star } from './star';
import { IoCloseSharp } from 'react-icons/io5';
import { Modal } from '../ui/Modal/modal';

export const RatingModal = ({
  closeModal,
  title,
  currentUserRating,
  updateUserRatingHandler,
}: {
  closeModal: () => void;
  title: string;
  currentUserRating: number | null;
  updateUserRatingHandler: (rating: number) => void;
}) => {
  const [rating, setRating] = useState(currentUserRating || 0);

  const updateUserRatingInnerHandler = () => {
    updateUserRatingHandler(rating);
  };

  return (
    <Modal closeModal={closeModal}>
      <Button className={styles.closeButton} onClick={closeModal}>
        <IoCloseSharp />
      </Button>
      <div>
        <Star rating={rating || 0} />
      </div>
      <Typography variant="body1" className={styles.rateText}>
        Rate this
      </Typography>

      <Typography variant="h6">{title}</Typography>
      <Rating rating={rating || 0} setRating={setRating} />
      <Button
        className={`${styles.rateButton} ${rating > 0 && styles.activeRateButton}`}
        onClick={updateUserRatingInnerHandler}
        disabled={!rating}
      >
        rate
      </Button>
    </Modal>
  );
};
