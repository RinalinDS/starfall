import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import { Typography } from '../ui/Typography/typography';
import { UpNextSlider } from './UpNextSlider/UpNextSlider';
import { Book } from '../../types/book';

type Props = {
  upNextSlides: Book[];
  setActiveSlide: Dispatch<SetStateAction<string>>;
};

export const UpNext = ({ upNextSlides, setActiveSlide }: Props) => {
  return (
    <Container>
      <Typography as="h2" variant="h5">
        Up Next
      </Typography>
      <UpNextSlider
        upNextSlides={upNextSlides}
        setActiveSlide={setActiveSlide}
      />
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
