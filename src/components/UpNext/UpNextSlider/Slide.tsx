import Typography from '@mui/material/Typography/Typography';
import { styled } from 'styled-components';
import { Book } from '../../../mocks/sliderData.mock';

type Props = {
  slide: Book;
};

export const Slide = ({ slide }: Props) => {
  const { description, previewImage, title } = slide;
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={previewImage} alt="smallbookcover" />
      </ImageContainer>
      <div>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
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
  display: flex;
  justify-content: center;
`;
const StyledImage = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: contain;
`;
