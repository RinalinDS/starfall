import { styled } from 'styled-components';

export const Readlist = () => {
  return (
    <Container>
      <header>hello there will be your readlist. Soon!</header>
      <section>hello , it actually will be here</section>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;

  header {
    width: 100%;
  }
`;
