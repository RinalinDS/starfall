import { HeaderControls } from './atoms/HeaderControls.tsx';
import { HeaderSearchForm } from './atoms/HeaderSearchForm.tsx';
import { Logo } from '../atoms/Logo.tsx';

export const Header = () => {
  return (
    <header className="z-1 w-full bg-gray-200 shadow-sm shadow-gray-500 dark:bg-gray-800">
      <div className="mx-auto flex max-h-24 max-w-[120rem] items-center justify-between gap-4 p-5 md:gap-8">
        <Logo />
        <HeaderSearchForm />
        <HeaderControls />
      </div>
    </header>
  );
};
