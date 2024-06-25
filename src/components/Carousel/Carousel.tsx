import { Typography } from '../../UI-kit/Typography/Typography';
import { FaPlus } from 'react-icons/fa6';
import { styled } from 'styled-components';
import { Book } from '../../mocks/sliderData.mock';
import RightArrow from './../../assets/rightarrow.svg?react';
import LeftArrow from './../../assets/leftarrrow.svg?react';
import { ButtonAbsolute } from '../sharedStyledComponents/sharedButtons';

type Props = {
  mainSlide: Book;
  changeNextSlide: () => void;
  changePrevSlide: () => void;
};

export const Carousel = ({
  mainSlide,
  changeNextSlide,
  changePrevSlide,
}: Props) => {
  const { image, previewImage, title, description, id } = mainSlide;
  const addToWatchlist = () => {
    console.log('Added to watchlist', id);
  };
  return (
    <Container>
      <img src={image} alt={title} className="main_image" />
      <ImageContentContainer>
        <StyledImage src={previewImage} alt={`${title} preview`} />
        <ButtonAbsolute onClick={addToWatchlist}>
          <FaPlus />
        </ButtonAbsolute>
      </ImageContentContainer>
      <TextContainer>
        <Typography variant="h4" as="h3">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </TextContainer>
      <ButtonLeft onClick={changePrevSlide}>
        <LeftArrow />
      </ButtonLeft>
      <ButtonRight onClick={changeNextSlide}>
        <RightArrow />
      </ButtonRight>
    </Container>
  );
};

const Container = styled.div`
  width: 67%;
  flex-grow: 2;
  position: relative;
  overflow: hidden;
  border-radius: 9px;
  height: 48rem;

  & .main_image {
    height: 100%;
    width: 100%;
    object-fit: fill;
    max-height: 48rem;
    // experimental for better text readability
    filter: brightness(75%);
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: hsla(0, 0%, 7%, 0.45);
  border: 1px solid hsla(0, 0%, 100%, 0.7);
  font-size: 1.5rem;
  line-height: 0;
  color: hsla(0, 0%, 100%, 0.7);
  transition: all 0.25s ease-out;
  z-index: 5;
  top: 50%;
  padding: 1.2rem 0.8rem;
  border-radius: 7px;
  &:hover {
    color: yellow;
  }
`;

const ButtonLeft = styled(Button)`
  left: 0.5rem;
  &:hover {
    left: 0px;
  }
  @media screen and (max-width: 960px) {
    left: 2.5rem;
    &:hover {
      left: 2rem;
    }
  }
`;

const ButtonRight = styled(Button)`
  right: 0.5rem;
  &:hover {
    right: 0px;
  }
  @media screen and (max-width: 960px) {
    right: 2.5rem;
    &:hover {
      right: 2rem;
    }
  }
`;

const ImageContentContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 5;
  height: 40%;
  width: 15%;
  @media screen and (max-width: 960px) {
    left: 3rem;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  /* object-fit: contain; */
`;

const TextContainer = styled.div`
  position: absolute;
  max-height: 30%;
  width: 70%;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  color: ${({ theme }) => theme.text.white};
  font-size: 1.6rem;
`;
