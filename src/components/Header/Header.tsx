import { Link } from '@tanstack/react-router';
import { FormEvent } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa6';
import { IoMdSunny } from 'react-icons/io';
import { useBoundStore } from '../../store/useBoundStore';
import { Search } from '../ui/Search/Search';
import { Typography } from '../ui/Typography/Typography';
import logo from './../../assets/logo.png';

type Props = {
  changeThemeHandler: () => void;
  themeMode: string;
};

export const Header = ({ changeThemeHandler, themeMode }: Props) => {
  const readlistLength = useBoundStore((state) => state.readlist.length);
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

  return (
    <header className="w-full bg-slate-700">
      <div className="mx-auto flex max-h-24 max-w-[120rem] items-center justify-between gap-4 p-5 text-slate-800 md:gap-8">
        <div>
          <Link to="/">
            <img className="w-[7.2rem]" src={logo} alt="imdb logo" />
          </Link>
        </div>
        <form className="grow" onSubmit={onSubmit}>
          <Search />
        </form>
        <div className="flex items-center justify-center gap-4">
          <Link to="/login">
            <button className="group text-primary flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-amber-900 sm:px-3 sm:py-1.5">
              <Typography className="text-[1.6rem] group-hover:text-white">
                Sign In
              </Typography>
            </button>
          </Link>
          <Link to="/readlist">
            <button className="group text-primary flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-amber-950 sm:px-3 sm:py-1.5">
              <BsFillBookmarkPlusFill className="fill-blue-500 stroke-amber-500 text-5xl opacity-60 group-hover:opacity-100" />
              <Typography variant="body2" className="group-hover:text-white">
                Readlist
                <Typography
                  variant="subtitle2"
                  className="number ml-3 inline-block rounded-full bg-[rgb(245,197,24)] px-1.5 text-[#181818]"
                >
                  {readlistLength || ''}
                </Typography>
              </Typography>
            </button>
          </Link>
          <button
            onClick={changeThemeHandler}
            className="group text-primary flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-amber-900 sm:px-3 sm:py-1.5"
          >
            {themeMode === 'dark' ? (
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
