import { styled } from 'styled-components';
import { Search } from '../../UI-kit/Search/Search';
import logo from './../../assets/logo.png';
import Typography from '@mui/material/Typography/Typography';
import { FormEvent } from 'react';

export const Header = () => {
  const isLoggedIn = false;
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const data = new FormData(formElement);
    // const search = data.get('search');
    const object: Record<string, string | File> = {};
    for (const [key, value] of data.entries()) {
      object[key] = value;
    }
    console.log(object);
  };

  return (
    <HeaderContainer>
      <Container>
        <ImageContainer>
          <img src={logo} alt="imdb logo" className="logo" />
        </ImageContainer>
        <SearchContainer>
          <form onSubmit={onSubmit}>
            <Search />
          </form>
        </SearchContainer>
        <div>
          <Typography>{isLoggedIn ? 'Denis' : 'Sign in'}</Typography>
        </div>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  width: 100%;
`;

const Container = styled.header`
  display: flex;
  padding: 0.4rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.text.white};
  height: 3rem;

  max-width: 80rem;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 6rem;
  & img {
    height: 100%;
    width: 6rem;
  }
`;

const SearchContainer = styled.div`
  flex-grow: 1;
`;
