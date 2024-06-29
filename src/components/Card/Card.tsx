import { useContext, useMemo } from 'react';
import { FaPlay, FaRegStar, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { styled } from 'styled-components';
import { Button } from '../../UI-kit/Button.tsx/Button';
import { Typography } from '../../UI-kit/Typography/Typography';
import {
  BooksDispatchContext,
  FavoriteContext,
} from '../../context/book.context';
import { Book } from '../../mocks/sliderData.mock';
import { ButtonAbsolute } from '../sharedStyledComponents/sharedButtons';

export const Card = ({ book }: { book: Book }) => {
  const { id, previewImage, title, rating } = book;
  const changeWatchlist = useContext(BooksDispatchContext);
  const watchlist = useContext(FavoriteContext);

  const isBookInWatchList = useMemo(
    () => watchlist.some((item) => id === item.id),
    [watchlist, book]
  );
  const addToWatchListHandler = () => {
    if (isBookInWatchList) {
      changeWatchlist &&
        changeWatchlist((prev) => prev.filter((el) => el.id !== id));
    } else {
      changeWatchlist && changeWatchlist([book, ...watchlist]);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <img src={previewImage} alt="Book preview" />
        <ButtonAbsolute
          onClick={addToWatchListHandler}
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
            {rating.toLocaleString('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 1,
            })}
          </Typography>
          <Typography
            variant="body2"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {isBookInWatchList ? (
              <StyledButton onClick={addToWatchListHandler}>
                <FaStar fill="lightblue" />
              </StyledButton>
            ) : (
              <StyledButton onClick={addToWatchListHandler}>
                <FaRegStar fill="lightblue" />
              </StyledButton>
            )}
          </Typography>
        </div>

        <StyledTypography as="p" variant="subtitle2">
          {title}
        </StyledTypography>
        <div>
          <PopularLink>
            Readlist {isBookInWatchList ? <IoMdCheckmark /> : <FaPlus />}
          </PopularLink>
        </div>
        <TrailerLink>
          <FaPlay /> Trailer
        </TrailerLink>
      </ContentContainer>
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

const PopularLink = styled.a`
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
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  &:link,
  &:visited,
  &:active {
    color: #3887be;
  }
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
