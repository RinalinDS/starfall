import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import { UpNextSlider } from './UpNextSlider/UpNextSlider';
import { Book } from '../../mocks/sliderData.mock';

type Props = {
  upNextSlides: Book[];
};

export const UpNext = ({ upNextSlides }: Props) => {
  return (
    <Container>
      <Typography color={'yellow'} variant="body1" fontSize={24}>
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
`;
