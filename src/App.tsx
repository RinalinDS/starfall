import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { usePallete } from './hooks/usePallete.tsx';

export const App = () => {
  const { theme } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  min-height: 100vh;

  background-color: ${({ theme }) => theme.background.primary};
`;
