import { styled } from 'styled-components';
import { Carousel } from './Carousel/Carousel';
import { UpNext } from './UpNext/UpNext';

export const MainContent = () => {
  return (
    <Container>
      <Carousel />
      <UpNext />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;
