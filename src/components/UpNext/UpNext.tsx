import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import { UpNextSlider } from './UpNextSlider/UpNextSlider';

export const UpNext = () => {
  return (
    <Container>
      <Typography color={'yellow'} variant="body1" fontSize={24}>
        Up Next
      </Typography>
      <UpNextSlider />
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
