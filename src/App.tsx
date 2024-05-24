import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';
import { Header } from './components/Header/Header.tsx';

export const App = () => {
  const { theme } = usePallete();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Container>
            <Header />
          </Container>
        </Layout>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

const Layout = styled.div`
  padding: 0.375rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;
