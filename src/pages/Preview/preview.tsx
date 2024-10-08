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

        <TestContainer>
          <TitleContainer>
            <Typography>IBDb rating</Typography>
            <Typography>Your rating</Typography>
          </TitleContainer>

          <RatingContainer>
            <DisplayRating variant="body2">
              <RandomContainerNumberOne>
                <FaStar fill="yellow" />
                <RandomContainerNumberTwo>
                  <Typography style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">{ratingToDisplay}</Typography>/10
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      position: 'relative',
                      bottom: '0.5rem',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {book.howManyTimeWereRated}
                  </Typography>
                </RandomContainerNumberTwo>
              </RandomContainerNumberOne>
            </DisplayRating>

            <DisplayRating variant="body2">
              <DisplayModalButton onClick={openModal}>
                {book.currentUserRating ? (
                  <StyledTypography>
                    <FaStar fill="aquamarine" />
                    <Typography variant="h6">
                      {book.currentUserRating}
                    </Typography>
                    /10
                  </StyledTypography>
                ) : (
                  <StyledTypography>
                    <FaRegStar fill="aquamarine" />
                    Rate
                  </StyledTypography>
                )}
              </DisplayModalButton>
            </DisplayRating>
          </RatingContainer>
        </TestContainer>
      </PreviewHeader>

      <ImageContainer>
        <img src={book.previewImage} alt="preview image" />
        <img src={book.image} alt="book image" />
        <ButtonAbsolute
          onClick={changeReadlistHandler}
          isBookInWatchList={isBookInReadlist}
          style={{ padding: '1.6rem 0.8rem' }}
        >
          {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
        </ButtonAbsolute>
      </ImageContainer>

      <ContentContainer>
        <TagList>
          {book.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
        <DescriptionText as="p" variant="body1">
          {book.description}
        </DescriptionText>
        <CreatorContainer>
          <CreatorContent>
            <CreatorTypography>creator</CreatorTypography> {book.author}
          </CreatorContent>
          <CreatorContent>
            <CreatorTypography>year</CreatorTypography> {book.year}
          </CreatorContent>
        </CreatorContainer>

        {/* <div>главы книги названия?</div> */}

        <PreviewText as="p" variant="body1">
          {bookPreviewData}
        </PreviewText>
      </ContentContainer>

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
`;
const TitleContainer = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  text-transform: uppercase;
`;

const PreviewHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
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

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const RandomContainerNumberOne = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  min-height: 6rem;
  min-width: 12rem;

  border-radius: 4px;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const RandomContainerNumberTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 4.8rem;
  padding: 1.6rem 0;
`;

const DisplayRating = styled(Typography)`
  color: ${({ theme }) => theme.text.primary};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const DisplayModalButton = styled(Button)`
  // to avoid screen shaking after rating appears
  min-height: 6rem;
  min-width: 12rem;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
  height: 100%;
  width: 100%;
  border-radius: 4px;
  color: inherit;
`;

const PreviewText = styled(Typography)`
  color: ${({ theme }) => theme.text.secondary};
  letter-spacing: 1px;
  text-indent: 2rem;
`;

const DescriptionText = styled(Typography)`
  color: ${({ theme }) => theme.text.secondary};
  letter-spacing: 1px;
`;

const TagList = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

const Tag = styled.li`
  color: ${({ theme }) => theme.text.secondary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.8rem;
`;

const CreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    border-top: 1px solid ${({ theme }) => theme.border.secondary};
  }
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
`;

const CreatorTypography = styled(Typography)`
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 500;
  font-size: 2rem;
  text-transform: capitalize;
`;

const ContentContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const CreatorContent = styled(Typography)`
  display: flex;
  color: ${({ theme }) => theme.text.secondary};
  gap: 2.4rem;
  align-items: center;
`;
