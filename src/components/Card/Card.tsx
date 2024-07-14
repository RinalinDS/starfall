import { useMemo } from 'react';
import { FaPlay, FaRegStar, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { styled } from 'styled-components';
import { useModalControls } from '../../hooks/useModalControls';
import { useBookStore } from '../../store/useBookStore';
import { useReadlistStore } from '../../store/useReadlistStore';
import { RatingModal } from '../RatingModal/rating-modal';
import { Button } from '../ui/Button/button';
import { Typography } from '../ui/Typography/typography';
import { ButtonAbsolute } from '../ui/sharedStyledComponents/shared-buttons';

export const Card = ({ id }: { id: string }) => {
  const readlist = useReadlistStore((state) => state.readlist);
  const addToReadlist = useReadlistStore((state) => state.addToReadlist);
  const removeFromReadlist = useReadlistStore(
    (state) => state.removeFromReadlist
  );
  const updateUserRating = useBookStore((state) => state.updateUserRating);
  const removeUserRating = useBookStore((state) => state.removeUserRating);
  const book = useBookStore((state) =>
    state.books.find((book) => book.id === id)
  );

  const { closeModal, isOpen, openModal } = useModalControls();

  const isBookInWatchList = useMemo(
    () => readlist.some((item) => id === item),
    [readlist, id]
  );
  const changeWatchlistHandler = () => {
    if (isBookInWatchList) {
      removeFromReadlist(id);
    } else {
      addToReadlist(id);
    }
  };

  const updateUserRatingHandler = (rating: number) => {
    updateUserRating(id, rating);
    closeModal();
  };

  const removeRateHandler = () => {
    removeUserRating(id);
    closeModal();
  };

  return (
    <Container>
      <ImageContainer>
        <img src={book?.previewImage || ''} alt="Book preview" />
        <ButtonAbsolute
          onClick={changeWatchlistHandler}
          isBookInWatchList={isBookInWatchList}
        >
          {isBookInWatchList ? <IoMdCheckmark /> : <FaPlus />}
        </ButtonAbsolute>
      </ImageContainer>
      <ContentContainer>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          <Typography
            variant="body2"
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <FaStar fill="yellow" />
            {(book?.rating || 0).toLocaleString('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 1,
            })}
          </Typography>
          <Typography
            variant="body2"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <StyledButton onClick={openModal}>
              {book?.currentUserRating ? (
                <FaStar fill="lightblue" />
              ) : (
                <FaRegStar fill="lightblue" />
              )}
            </StyledButton>
          </Typography>
        </div>

        <StyledTypography as="p" variant="subtitle2">
          {book?.title}
        </StyledTypography>
        <div>
          <PopularLink onClick={changeWatchlistHandler}>
            Readlist {isBookInWatchList ? <IoMdCheckmark /> : <FaPlus />}
          </PopularLink>
        </div>
        <TrailerLink>
          <FaPlay /> Trailer
        </TrailerLink>
      </ContentContainer>
      {isOpen && (
        <RatingModal
          closeModal={closeModal}
          title={book?.title || ''}
          currentUserRating={book?.currentUserRating || 0}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeRateHandler}
        />
      )}
    </Container>
  );
};

const StyledTypography = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledButton = styled(Button)`
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const Container = styled.div`
  display: flex;
  max-height: 48rem;
  max-width: 24rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 9px;
  overflow: hidden;
  color: ${({ theme }) => theme.text.primary};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;

  & img {
    max-height: 16rem;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 1.6rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const PopularLink = styled(Button)`
  display: flex;
  width: 100%;
  gap: 0.8rem;
  cursor: pointer;
  align-items: center;
  text-transform: none;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.links};
  padding: 0 3.6rem;
  min-height: 3.2rem;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  justify-content: center;

  &:hover {
    filter: brightness(150%);
  }
`;

const TrailerLink = styled.a`
  align-self: center;
  display: flex;
  gap: 0.8rem;
  cursor: pointer;
  align-items: center;
  text-transform: none;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  justify-content: center;
  padding: 0 1.6rem;
  min-height: 3.2rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
  &:link,
  &:visited,
  &:active {
    color: ${({ theme }) => theme.text.primary};
  }
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
    filter: brightness(150%);
  }
`;
