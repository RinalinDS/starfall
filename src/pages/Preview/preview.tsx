import { getRouteApi } from '@tanstack/react-router';
import { preview } from '../../mocks/preview';
import { useBoundStore } from '../../store/useBoundStore';
import { styled } from 'styled-components';
import { Typography } from '../../components/ui/Typography/Typography';
import { ButtonAbsolute } from '../../components/ui/sharedStyledComponents/shared-buttons';
import { FaPlus, FaRegStar, FaStar } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { useModalControls } from '../../hooks/useModalControls';
import { useMemo } from 'react';
import { Button } from '../../components/ui/Button/button';
import { RatingModal } from '../../components/RatingModal/rating-modal';

const routeApi = getRouteApi('/preview/$bookId');

export const Preview = () => {
  const { bookId } = routeApi.useParams();
  const readlist = useBoundStore((state) => state.readlist);
  const addToReadlist = useBoundStore((state) => state.addToReadlist);
  const removeFromReadlist = useBoundStore((state) => state.removeFromReadlist);
  const updateUserRating = useBoundStore((state) => state.updateUserRating);
  const removeUserRating = useBoundStore((state) => state.removeUserRating);
  const book = useBoundStore((state) =>
    state.books.find((book) => book.id === bookId)
  );

  const { closeModal, isOpen, openModal } = useModalControls();

  const ratingToDisplay = (book?.rating || 0).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 1,
  });

  const isBookInReadlist = useMemo(
    () => readlist.some((item) => bookId === item),
    [readlist, bookId]
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  const changeReadlistHandler = () => {
    if (isBookInReadlist) {
      removeFromReadlist(bookId);
    } else {
      addToReadlist(bookId);
    }
  };

  const updateUserRatingHandler = (rating: number) => {
    updateUserRating(bookId, rating);
    closeModal();
  };

  const removeUserRatingHandler = () => {
    removeUserRating(bookId);
    closeModal();
  };

  const { preview: bookPreviewData } = preview[bookId];

  return (
    <Container>
      <PreviewHeader>
        <Title as="h2" variant="h3">
          {book.title}
        </Title>
        <RatingContainer>
          <DisplayRating variant="body2">
            IBDb rating
            <div>
              <FaStar fill="yellow" />
              {ratingToDisplay}/10
            </div>
            <Typography variant="body2">{book.howManyTimeWereRated}</Typography>
          </DisplayRating>
          <DisplayModalButton onClick={openModal}>
            <DisplayRating variant="body2">
              YOUR RATING
              {book.currentUserRating ? (
                <>
                  <FaStar fill="lightblue" />
                  {book.currentUserRating}/10
                </>
              ) : (
                <>
                  <FaRegStar fill="lightblue" />
                  Rate
                </>
              )}
            </DisplayRating>
          </DisplayModalButton>
        </RatingContainer>
      </PreviewHeader>

      <ImageContainer>
        <img src={book.previewImage} alt="preview image" />
        <img src={book.image} alt="book image" />
        <ButtonAbsolute
          onClick={() => {}}
          isBookInWatchList={true}
          style={{ padding: '1.6rem 0.8rem' }}
        >
          {true ? <IoMdCheckmark /> : <FaPlus />}
        </ButtonAbsolute>
      </ImageContainer>
      <ul>
        <li>action</li>
        <li>adventure</li>
        <li>fantasy</li>
      </ul>
      <div>очень короткое описание</div>
      <Typography as="h5" variant="h5">
        creator: {book.author}
        year: ? add year
      </Typography>

      <div>главы книги названия?</div>
      <div>
        все таки описание внизу
        <p>{bookPreviewData}</p>
      </div>
      {isOpen ? (
        <RatingModal
          closeModal={closeModal}
          title={book.title}
          currentUserRating={book.currentUserRating}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeUserRatingHandler}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.background.tertiary};
`;

const PreviewHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  gap: 6px;
  width: 100%;
  display: flex;
  & img:first-child {
    width: 25%;
  }
  & img {
    width: 75%;
    height: 40rem;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 4.8rem;
  padding: 1.6rem 0;
`;

const DisplayRating = styled(Typography)`
  color: ${({ theme }) => theme.text.primary};
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
