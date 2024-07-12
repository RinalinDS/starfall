import { Outlet } from '@tanstack/react-router';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { usePallete } from './hooks/usePallete.tsx';

export const App = () => {
  const { theme, changeThemeHandler, themeMode } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header changeThemeHandler={changeThemeHandler} themeMode={themeMode} />
        <Container>
          <Outlet />
        </Container>

        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

const Layout = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
