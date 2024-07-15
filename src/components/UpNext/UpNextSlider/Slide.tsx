import { styled } from 'styled-components';
import { Typography } from '../../ui/Typography/typography';
import { Dispatch, SetStateAction } from 'react';
import { Book } from '../../../types/book';

type Props = {
  slide: Book;
  setActiveSlide: Dispatch<SetStateAction<string>>;
};

export const Slide = ({ slide, setActiveSlide }: Props) => {
  const { description, previewImage, title, id } = slide;

  const setActiveSlideHandler = () => {
    setActiveSlide(id);
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={previewImage} alt={`${title} preview`} />
      </ImageContainer>
      <TextContainer onClick={setActiveSlideHandler}>
        <Typography as="p" variant="h6" className={'hovered'}>
          {title}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  flex: 0 0 20%;
`;
const StyledImage = styled.img`
  width: 100%;
  max-width: 12rem;
`;

const TextContainer = styled.div`
  cursor: pointer;
  &:hover .hovered {
    color: yellow;
  }
`;
