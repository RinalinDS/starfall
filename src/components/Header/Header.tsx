import { FormEvent, useContext } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa6';
import { IoMdSunny } from 'react-icons/io';
import { styled } from 'styled-components';
import { Search } from '../../UI-kit/Search/Search';
import { Typography } from '../../UI-kit/Typography/Typography';
import { FavoriteContext } from '../../context/book.context';
import logo from './../../assets/logo.png';
import { Link } from '@tanstack/react-router';

type Props = {
  changeThemeHandler: () => void;
  themeMode: string;
};

export const Header = ({ changeThemeHandler, themeMode }: Props) => {
  const readlist = useContext(FavoriteContext);
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

  return (
    <HeaderContainer>
      <Container>
        <ImageContainer>
          <Link to="/">
            <img src={logo} alt="imdb logo" className="logo" />
          </Link>
        </ImageContainer>
        <SearchForm onSubmit={onSubmit}>
          <Search />
        </SearchForm>
        <LoginContainer>
          <Button>
            <Typography as={Link} to="/login">
              Sign In
            </Typography>
          </Button>
          <Button>
            <BsFillBookmarkPlusFill />
            <Typography variant="body2">
              Readlist
              <Typography variant="subtitle2" className="number">
                {readlist.length || ''}
              </Typography>
            </Typography>
          </Button>
          <Button onClick={changeThemeHandler}>
            {themeMode === 'dark' ? <FaMoon /> : <IoMdSunny />}
          </Button>
        </LoginContainer>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background.secondary};
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  padding: 1.2rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.text.primary};
  max-height: 6.4rem;
  font-size: 1.6rem;

  max-width: 120rem;
  margin: 0 auto;

  @media screen and (max-width: 560px) {
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 7.2rem;
  & img {
    width: 7.2rem;
  }
`;

const LoginContainer = styled.div`
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const SearchForm = styled.form`
  flex-grow: 1;
`;

const Button = styled.button`
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
