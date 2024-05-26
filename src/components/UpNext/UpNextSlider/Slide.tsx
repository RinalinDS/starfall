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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledImage src={previewImage} alt="smallbookcover" />
      </div>
      <DescriptionContainer>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </DescriptionContainer>
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
const StyledImage = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: contain;
`;

const DescriptionContainer = styled.div``;
