import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';
import { Login } from './pages/Login/Login.tsx';

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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
