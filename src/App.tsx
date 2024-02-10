import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';
import { Login } from './pages/Login.tsx';

export const App = () => {
  const { theme } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Login />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 144rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4.8rem 8.4rem;
  background-color: ${({ theme }) => theme.background.primary};
`;
