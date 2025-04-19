import { Link } from '@tanstack/react-router';
import { FormEvent } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa6';
import { IoMdSunny } from 'react-icons/io';
import { useBoundStore } from '../../store/useBoundStore';
import { Search } from '../ui/Search/Search';
import { Typography } from '../ui/Typography/Typography';
import logo from './../../assets/logo.png';
import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
  const readlistLength = useBoundStore((state) => state.readlist.length);
  const { theme, changeTheme } = useTheme();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const data = new FormData(formElement);
    // const search = data.get('search');
    const object: Record<string, string | File> = {};
    for (const [key, value] of data.entries()) {
      object[key] = value;
    }
  };
  // TODO SPLIT

  // TODO REUSE Buttons
  return (
    <header className="z-1 w-full bg-gray-200 shadow-sm shadow-gray-500 dark:bg-gray-800">
      <div className="mx-auto flex max-h-24 max-w-[120rem] items-center justify-between gap-4 p-5 md:gap-8">
        <div>
          <Link to="/">
            <img className="w-[7.2rem]" src={logo} alt="imdb logo" />
          </Link>
        </div>
        <form className="hidden grow md:block" onSubmit={onSubmit}>
          <Search />
        </form>
        <div className="flex items-center justify-center gap-4">
          <Link to="/login">
            <button className="group flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-emerald-700 sm:px-3 sm:py-1.5 dark:hover:bg-emerald-600">
              <Typography className="text-[1.6rem] group-hover:text-white">
                Sign In
              </Typography>
            </button>
          </Link>
          <Link to="/readlist">
            <button className="group flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-emerald-700 sm:px-3 sm:py-1.5 dark:hover:bg-emerald-600">
              <BsFillBookmarkPlusFill className="fill-amber-600 text-4xl opacity-60 group-hover:opacity-100 dark:fill-amber-500" />
              <Typography className="flex items-center gap-1 text-[1.6rem] group-hover:text-white">
                Readlist
                <Typography
                  variant="subtitle2"
                  className={`${readlistLength ? 'opacity-100' : 'opacity-0'} flex h-8 w-8 items-center justify-center rounded-[50%] bg-[rgb(245,197,24)] px-1.5 text-center text-[#181818]`}
                >
                  {readlistLength}
                </Typography>
              </Typography>
            </button>
          </Link>
          <button
            onClick={changeTheme}
            className="group text-primary flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-emerald-700 sm:px-3 sm:py-1.5 dark:hover:bg-emerald-600"
          >
            {theme === 'dark' ? (
              <FaMoon className="text-4xl opacity-60 group-hover:opacity-100" />
            ) : (
              <IoMdSunny className="text-4xl opacity-60 group-hover:opacity-100" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
