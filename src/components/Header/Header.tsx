import { Link } from '@tanstack/react-router';
import { FormEvent } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa6';
import { IoMdSunny } from 'react-icons/io';
import { styled } from 'styled-components';
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
            <Button>
              <Typography>Sign In</Typography>
            </Button>
          </Link>
          <Link to="/readlist">
            <Button>
              <BsFillBookmarkPlusFill />
              <Typography variant="body2">
                Readlist
                <Typography
                  variant="subtitle2"
                  className="number bg-[#f5c518] text-[#181818]"
                >
                  {readlistLength || ''}
                </Typography>
              </Typography>
            </Button>
          </Link>
          <Button onClick={changeThemeHandler}>
            {themeMode === 'dark' ? <FaMoon /> : <IoMdSunny />}
          </Button>
        </div>
      </div>
    </header>
  );
};

// TODO
const Button = styled.button`
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  border: none;
  background-color: transparent;
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.background.hover};
    color: ${({ theme }) => theme.text.white};
    span {
      color: ${({ theme }) => theme.text.white};
    }
    svg {
      opacity: 1;
    }
  }
  svg {
    opacity: 0.6;
    fill: ${({ theme }) => theme.text.fill};
    stroke: ${({ theme }) => theme.text.stroke};
    font-size: 2.4rem;
  }

  & span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.text.primary};
  }
  & .number,
  &:hover .number {
    margin-left: 0.8rem;
    display: inline-block;
    background-color: rgb(245, 197, 24);
    padding: 0rem 5px;
    border-radius: 100px;
    color: #181818;
  }
  @media screen and (max-width: 560px) {
    padding: 0.4rem 0.8rem;
  }
`;
