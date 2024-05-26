import { Typography } from '@mui/material';
import { FaPlus } from 'react-icons/fa6';
import { styled } from 'styled-components';
import { Book } from '../../mocks/sliderData.mock';

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
      <img src={image} alt="bookcover" className="main_image" />
      <ImageContentContainer>
        <StyledImage src={previewImage} alt={`${title} preview`} />
        <ButtonAbsolute onClick={addToWatchlist}>
          <FaPlus />
        </ButtonAbsolute>
      </ImageContentContainer>
      <TextContainer>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </TextContainer>
      <ButtonLeft onClick={changePrevSlide}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
        </svg>
      </ButtonLeft>
      <ButtonRight onClick={changeNextSlide}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
        </svg>
      </ButtonRight>
    </Container>
  );
};

const Container = styled.div`
  width: 67%;
  flex-grow: 2;
  position: relative;
  overflow: hidden;

  & .main_image {
    height: 100%;
    width: 100%;
    object-fit: fill;
    max-height: 32rem;
    border-radius: 9px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  background: hsla(0, 0%, 7%, 0.45);
  border: 1px solid hsla(0, 0%, 100%, 0.7);
  font-size: 1.5rem;
  line-height: 0;
  color: hsla(0, 0%, 100%, 0.7);
  transition: all 0.25s ease-out;
  z-index: 5;
  top: 50%;
  padding: 0.75rem 0.5rem;
  border-radius: 7px;
  &:hover {
    color: yellow;
  }
`;

const ButtonLeft = styled(Button)`
  left: 5px;
  &:hover {
    left: 0px;
  }
`;

const ButtonRight = styled(Button)`
  right: 5px;
  &:hover {
    right: 0px;
  }
`;

const ImageContentContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 5;
  height: 40%;
  width: 15%;
`;

const ButtonAbsolute = styled.button`
  position: absolute;
  top: 0; /* Adjust based on desired position relative to the image */
  left: 0; /* Adjust based on desired position relative to the image */
  padding: 0.8rem 0.4rem;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 0,
    100% 100%,
    49% 64%,
    0 100%,
    0% 70%,
    0 0
  );
  svg {
    font-size: 1.6rem;
    position: relative;
    bottom: 10px;
  }
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  /* object-fit: contain; */
`;

const TextContainer = styled.div`
  position: absolute;
  height: 20%;
  width: 70%;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  color: ${({ theme }) => theme.text.primary};
`;
