import { useState } from 'react';
import { Button } from '../ui/Button/button';
import { Typography } from '../ui/Typography/typography';
import { Rating } from '../Rating/rating';
import styles from './rating-modal.module.css';
import { Star } from './star';
import { IoCloseSharp } from 'react-icons/io5';
import { Modal } from '../ui/Modal/modal';
import { styled } from 'styled-components';

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
      <RemoveRate onClick={removeRateHandler}>
        <StyledTypography>Remove rate</StyledTypography>
      </RemoveRate>
    </Modal>
  );
};

const RemoveRate = styled(Button)`
  display: inline-flex;
  align-items: center;
  text-transform: none;

  text-decoration: none;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 0 3.6rem;
  min-height: 3.2rem;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:link,
  &:visited,
  &:active {
    color: #3887be;
  }
  &:hover {
    filter: brightness(150%);
  }
`;

const StyledTypography = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
