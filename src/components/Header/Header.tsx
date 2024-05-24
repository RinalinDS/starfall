import { styled } from 'styled-components';
import { Search } from '../../UI-kit/Search/Search';
import logo from './../../assets/logo.png';
import Typography from '@mui/material/Typography/Typography';

export const Header = () => {
  const isLoggedIn = false;
  return (
    <Container>
      <ImageContainer>
        <img src={logo} alt="imdb logo" className="logo" />
      </ImageContainer>
      <SearchContainer>
        <Search onClick={() => {}} />
      </SearchContainer>
      <div>
        <Typography>{isLoggedIn ? 'Denis' : 'Sign in'}</Typography>
      </div>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding: 0.4rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.text.white};
  height: 3rem;
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
