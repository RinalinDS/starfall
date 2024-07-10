import { styled } from 'styled-components';
import { Book } from '../../../mocks/sliderData.mock';
import { Typography } from '../../ui/Typography/typography';

type Props = {
  slide: Book;
  setActiveSlide: (slide: Book) => void;
};

export const Slide = ({ slide, setActiveSlide }: Props) => {
  const setActiveSlideHandler = () => {
    setActiveSlide(slide);
  };

  const { description, previewImage, title } = slide;
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
