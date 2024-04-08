import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';

export const App = () => {
  const { theme } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container></Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem;

  background-color: ${({ theme }) => theme.background.primary};
`;
