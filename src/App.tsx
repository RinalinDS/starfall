import { Outlet } from '@tanstack/react-router';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';

export const App = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-400">
      <Header changeThemeHandler={() => {}} themeMode={''} />

      <main className="mx-auto flex w-full max-w-[120rem] flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
