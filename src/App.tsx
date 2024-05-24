import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';
import { Header } from './components/Header/Header.tsx';
import { MainContent } from './components/MainContent.tsx';

export const App = () => {
  const { theme } = usePallete();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Header />
          <Container>
            <MainContent />
          </Container>
        </Layout>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;
