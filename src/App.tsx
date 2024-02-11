import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';
import { Hero } from './pages/Login/Hero/Hero.tsx';

export const App = () => {
  const { theme } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Hero />
        {/* <Login /> */}
      </main>
    </ThemeProvider>
  );
};
