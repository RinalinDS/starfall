import { Outlet } from '@tanstack/react-router';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { ThemeProvider } from './hooks/useTheme.tsx';

export const App = () => {
  return (
    <ThemeProvider>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <Header />

        <main className="mx-auto flex w-full max-w-[120rem] flex-col">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
