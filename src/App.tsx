import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { Header } from './components/Header/Header.tsx';
import { MainContent } from './components/MainContent.tsx';
import { usePallete } from './hooks/usePallete.tsx';

export const App = () => {
  const { theme, changeThemeHandler, themeMode } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header changeThemeHandler={changeThemeHandler} themeMode={themeMode} />
        <Container>
          <MainContent />
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
