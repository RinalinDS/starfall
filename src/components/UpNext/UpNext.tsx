import { styled } from 'styled-components';
import { UpNextSlider } from './UpNextSlider/UpNextSlider';
import { Book } from '../../mocks/sliderData.mock';
import { Typography } from '../../UI-kit/Typography/Typography';

type Props = {
  upNextSlides: Book[];
};

export const UpNext = ({ upNextSlides }: Props) => {
  return (
    <Container>
      <Typography as="h2" variant="h5">
        Up Next
      </Typography>
      <UpNextSlider upNextSlides={upNextSlides} />
    </Container>
  );
};

const Container = styled.div`
  width: 33%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: yellow;
  @media screen and (max-width: 960px) {
    width: 75%;
  }
`;
