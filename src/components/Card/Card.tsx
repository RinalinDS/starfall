import { styled } from 'styled-components';
import { Typography } from '../../UI-kit/Typography/Typography';
import { ButtonAbsolute } from '../sharedStyledComponents/sharedButtons';
import { FaPlus } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { useState } from 'react';
import { Button } from '../../UI-kit/Button.tsx/Button';

export const Card = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addToWatchlist = () => {
    console.log('Added to watchlist');
  };
  const addToFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <Container>
      <ImageContainer>
        <img src="https://via.placeholder.com/150" alt="Book preview" />
        <ButtonAbsolute onClick={addToWatchlist}>
          <FaPlus />
        </ButtonAbsolute>
      </ImageContainer>
      <ContentContainer>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          <Typography
            variant="body2"
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <FaStar fill="yellow" /> 9.3
          </Typography>
          <Typography
            variant="body2"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {isFavorite ? (
              <StyledButton onClick={addToFavorite}>
                <FaStar fill="lightblue" />
              </StyledButton>
            ) : (
              <StyledButton onClick={addToFavorite}>
                <FaRegStar fill="lightblue" />
              </StyledButton>
            )}
          </Typography>
        </div>

        <StyledTypography as="p" variant="subtitle2">
          The Riyria Revelations
        </StyledTypography>
        <div>
          <PopularLink>
            Readlist <FaPlus />
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
