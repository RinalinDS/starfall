import { styled } from 'styled-components';
import { Book } from '../../../mocks/sliderData.mock';
import { Typography } from '../../../UI-kit/Typography/Typography';

type Props = {
  slide: Book;
};

export const Slide = ({ slide }: Props) => {
  const { description, previewImage, title } = slide;
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={previewImage} alt={`${title} preview`} />
      </ImageContainer>
      <div>
        <Typography as="p" variant="h6">
          {title}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
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
  flex: 1 0 20%;
`;
const StyledImage = styled.img`
  width: 100%;
`;
