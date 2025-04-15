import { Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { usePallete } from './hooks/usePallete.tsx';

export const App = () => {
  const { theme, changeThemeHandler, themeMode } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-400">
        <Header changeThemeHandler={changeThemeHandler} themeMode={themeMode} />

        <main className="mx-auto flex w-full max-w-[120rem] flex-col">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
