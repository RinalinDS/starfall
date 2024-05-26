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
        <LoginContainer>
          <Typography fontSize={'inherit'}>
            {isLoggedIn ? 'Denis' : 'Sign in'}
          </Typography>
        </LoginContainer>
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
  padding: 1.2rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.text.primary};
  max-height: 6.4rem;
  font-size: 1.6rem;

  max-width: 120rem;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 7.2rem;
  & img {
    width: 7.2rem;
  }
`;

const LoginContainer = styled.div`
  font-size: 1.6rem;
`;

const SearchContainer = styled.div`
  flex-grow: 1;
`;
