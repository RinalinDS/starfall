import { Link } from '@tanstack/react-router';
import { useMemo } from 'react';
import { FaPlay, FaRegStar, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { styled } from 'styled-components';
import { useModalControls } from '../../hooks/useModalControls';
import { useBoundStore } from '../../store/useBoundStore';
import { RatingModal } from '../RatingModal/rating-modal';
import { Button } from '../ui/Button/button';
import { Typography } from '../ui/Typography/Typography';
import { ButtonAbsolute } from '../ui/sharedStyledComponents/shared-buttons';

// feels like this component is too heavy, because a lot of state management and the fact it's mapped component.
export const Card = ({ id }: { id: string }) => {
  const readlist = useBoundStore((state) => state.readlist);
  const addToReadlist = useBoundStore((state) => state.addToReadlist);
  const removeFromReadlist = useBoundStore((state) => state.removeFromReadlist);
  const updateUserRating = useBoundStore((state) => state.updateUserRating);
  const removeUserRating = useBoundStore((state) => state.removeUserRating);
  const book = useBoundStore((state) =>
    state.books.find((book) => book.id === id)
  );

  const { closeModal, isOpen, openModal } = useModalControls();

  const ratingToDisplay = (book?.rating || 0).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 1,
  });

  const isBookInReadlist = useMemo(
    () => readlist.some((item) => id === item),
    [readlist, id]
  );
  const changeReadlistHandler = () => {
    if (isBookInReadlist) {
      removeFromReadlist(id);
    } else {
      addToReadlist(id);
    }
  };

  const updateUserRatingHandler = (rating: number) => {
    updateUserRating(id, rating);
    closeModal();
  };

  const removeUserRatingHandler = () => {
    removeUserRating(id);
    closeModal();
  };

  return (
    <Container>
      <Card.Image
        id={id}
        previewImage={book?.previewImage || ''}
        changeReadlistHandler={changeReadlistHandler}
        isBookInReadlist={isBookInReadlist}
      />
      <Card.ContentContainer>
        <Card.Title title={book?.title || ''} />
        <Card.Rating
          ratingToDisplay={Number(ratingToDisplay)}
          currentUserRating={book?.currentUserRating || 0}
          openModal={openModal}
        />
        <Card.ReadlistButton
          isBookInReadlist={isBookInReadlist}
          changeReadlistHandler={changeReadlistHandler}
        />
        <Card.TrailerLink id={id} />
      </Card.ContentContainer>

      {isOpen ? (
        <RatingModal
          closeModal={closeModal}
          title={book?.title || ''}
          currentUserRating={book?.currentUserRating || 0}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeUserRatingHandler}
        />
      ) : null}
    </Container>
  );
};

Card.ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <ContentContainer>{children}</ContentContainer>
);

Card.Image = ({
  id,
  previewImage = '',
  changeReadlistHandler,
  isBookInReadlist,
}: {
  id: string;
  previewImage: string;
  changeReadlistHandler: () => void;
  isBookInReadlist: boolean;
}) => (
  <ImageContainer>
    <Link to="/preview/$bookId" params={{ bookId: id }}>
      <img src={previewImage} alt="Book preview" />
    </Link>
    <ButtonAbsolute
      onClick={changeReadlistHandler}
      isBookInWatchList={isBookInReadlist}
    >
      {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
    </ButtonAbsolute>
  </ImageContainer>
);

Card.Rating = ({
  ratingToDisplay,
  currentUserRating = 0,
  openModal,
}: {
  ratingToDisplay: number;
  currentUserRating: number | null;
  openModal: () => void;
}) => (
  <RatingContainer>
    <DisplayRating variant="body2">
      <FaStar fill="yellow" />
      {ratingToDisplay}
    </DisplayRating>
    <DisplayModalButton onClick={openModal}>
      <DisplayRating variant="body2">
        {currentUserRating ? (
          <FaStar fill="lightblue" />
        ) : (
          <FaRegStar fill="lightblue" />
        )}
        {currentUserRating}
      </DisplayRating>
    </DisplayModalButton>
  </RatingContainer>
);

Card.Title = ({ title }: { title: string }) => (
  <Title as="p" variant="subtitle2">
    {title}
  </Title>
);

Card.ReadlistButton = ({
  isBookInReadlist,
  changeReadlistHandler,
}: {
  isBookInReadlist: boolean;
  changeReadlistHandler: () => void;
}) => (
  <ReadlistButton onClick={changeReadlistHandler}>
    Readlist {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
  </ReadlistButton>
);

Card.TrailerLink = ({ id }: { id: string }) => (
  <TrailerLink to="/preview/$bookId" params={{ bookId: id }}>
    <FaPlay /> Trailer
  </TrailerLink>
);

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

  a {
    width: 100%;
  }

  img {
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

const RatingContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const Title = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DisplayRating = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const DisplayModalButton = styled(Button)`
  // to avoid screen shaking after rating appears
  min-width: 6rem;
  min-height: 3.2rem;

  border-radius: 4px;
  color: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const ReadlistButton = styled(Button)`
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
  min-height: 3.2rem;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  justify-content: center;

  &:hover {
    filter: brightness(150%);
  }
`;

const TrailerLink = styled(Link)`
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
