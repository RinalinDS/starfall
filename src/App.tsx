import styled, { ThemeProvider } from 'styled-components';
import { Search } from './UI-kit/Search/Search.tsx';
import { ShadowButton } from './UI-kit/ShadowButton/ShadowButton.tsx';
import { usePallete } from './hooks/usePallete.tsx';
import { GlobalStyle } from './GlobalStyles.ts';
import { useCallback, useState } from 'react';
import { Modal } from './UI-kit/Modal/Modal.tsx';

export const App = () => {
  const { changeThemeHandler, theme } = usePallete();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Search onClick={() => {}} />
        {/* open modal */}
        <button onClick={openModal}>Open Moadl</button>
        <Modal closeModal={closeModal} isOpen={isOpen} onSubmit={() => {}}>
          <div>Do you want to toggle Theme?</div>
          <ShadowButton onClick={changeThemeHandler}>Toggle</ShadowButton>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 144rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4.8rem 8.4rem;
  background-color: ${({ theme }) => theme.background.primary};
`;
