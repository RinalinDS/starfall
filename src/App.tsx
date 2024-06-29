import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { Header } from './components/Header/Header.tsx';
import { CarouselPanel } from './components/CarouselPanel/CarouselPanel.tsx';
import { usePallete } from './hooks/usePallete.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { ReadlistPanel } from './components/ReadlistPanel/readlist-panel.tsx';
import { BooksProvider } from './context/book.context.tsx';

export const App = () => {
  const { theme, changeThemeHandler, themeMode } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <BooksProvider>
        <GlobalStyle />
        <Layout>
          <Header
            changeThemeHandler={changeThemeHandler}
            themeMode={themeMode}
          />
          <Container>
            <CarouselPanel />
            <ReadlistPanel />
          </Container>
          <Footer />
        </Layout>
      </BooksProvider>
    </ThemeProvider>
  );
};

const Layout = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
`;

const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
