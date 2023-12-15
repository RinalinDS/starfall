import styled, { ThemeProvider } from 'styled-components';
import { Search } from './UI-kit/Search/Search.tsx';
import { ShadowButton } from './UI-kit/ShadowButton/ShadowButton.tsx';

const theme = {
  baseColor: '#3498db',
  secondBaseColor: '#002366',
  royalBlue: '#4169e1',
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Search onClick={() => {}} />
        <ShadowButton onClick={() => {}}>Helloadfadfad</ShadowButton>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 4.8rem 8.4rem;
  background-color: #bbb;
`;
