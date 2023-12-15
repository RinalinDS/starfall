import styled, { ThemeProvider } from 'styled-components';
import { Search } from './UI-kit/Search/Search.tsx';
import { ShadowButton } from './UI-kit/ShadowButton/ShadowButton.tsx';
import { usePallete } from './hooks/usePallete.tsx';
import { GlobalStyle } from './GlobalStyles.ts';

export const App = () => {
  const { changeThemeHandler, theme } = usePallete();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Search onClick={() => {}} />
        <ShadowButton onClick={changeThemeHandler}>Helloadfadfad</ShadowButton>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 4.8rem 8.4rem;
  background-color: ${({ theme }) => theme.background.primary};
`;
