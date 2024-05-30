import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { Header } from './components/Header/Header.tsx';
import { MainContent } from './components/MainContent.tsx';
import { usePallete } from './hooks/usePallete.tsx';
import { Footer } from './components/Footer/Footer.tsx';

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
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  flex-direction: column;
`;

const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  flex: 1 0 auto;
  padding: 4.8rem 0;
`;
