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
      <Container>
        <Button className={styles.closeButton} onClick={closeModal}>
          <IoCloseSharp />
        </Button>
        <Star rating={rating || 0} />
        <Typography variant="body1" className={styles.rateText}>
          Rate this
        </Typography>

        <Typography variant="h6">{title}</Typography>
        <Rating rating={rating || 0} setRating={setRating} />
        <ButtonContainer>
          <Button
            className={`${styles.rateButton} ${rating !== currentUserRating && styles.activeRateButton}`}
            onClick={updateUserRatingInnerHandler}
            disabled={!rating || rating === currentUserRating}
          >
            rate
          </Button>
          {currentUserRating ? (
            <RemoveRate onClick={removeRateHandler}>
              <StyledTypography>Remove rating</StyledTypography>
            </RemoveRate>
          ) : null}
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text.primary};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const RemoveRate = styled(Button)`
  display: inline-flex;
  align-items: center;
  text-transform: none;
  width: 100%;
  text-decoration: none;
  padding: 0 3.6rem;
  min-height: 3.2rem;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  position: relative;
  color: #3887be;
  border-radius: 4px;

  &::before,
  &::after {
    background: currentColor;
    opacity: 0;
    bottom: 0;
    content: '';
    height: 100%;
    left: 0;
    margin: auto;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center center;
    transition:
      transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1),
      opacity 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);
    width: 100%;
  }

  &:hover::before,
  &:hover::after {
    opacity: 0.08;
  }
`;

const StyledTypography = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
