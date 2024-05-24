import { styled } from 'styled-components';

export const UpNextSlider = () => {
  return (
    <Container>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
  gap: 10rem;
`;
