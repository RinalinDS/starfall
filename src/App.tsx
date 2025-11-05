import { Outlet } from '@tanstack/react-router';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { ThemeProvider } from './hooks/useTheme.tsx';
import { ModalProvider } from './components/ui/Modal/ModalContext.tsx';
import { Toaster } from 'react-hot-toast';

/// TODO TESTS

export const App = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
          <Header />

          <main>
            <Outlet />
          </main>

          <Footer />
          <Toaster />
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
};
