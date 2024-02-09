import { FC, memo, useEffect } from 'react';
import { styled } from 'styled-components';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
};

export const Modal: FC<Props> = memo(
  ({ isOpen, closeModal, onSubmit, children }) => {
    useEffect(() => {
      const handleEscClick = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
      document.addEventListener('keydown', handleEscClick);

      return () => {
        document.removeEventListener('keydown', handleEscClick);
      };
    }, [closeModal]);

    if (!isOpen) return null;

    return (
      <Background onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>x</CloseButton>
          <div>{children}</div>
          <ButtonContainer>
            <button onClick={closeModal}>cancel</button>
            {onSubmit && <button onClick={onSubmit}>submitModal</button>}
          </ButtonContainer>
        </ModalContent>
      </Background>
    );
  }
);

const Background = styled.div`
  backdrop-filter: blur(3px);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => `rgba(${theme.background.modal}, 0.3)`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 3rem 6rem;
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.background.secondary};
  z-index: 10;
  min-height: 30rem;
  min-width: 60rem;
  font-size: 1.6rem;
  gap: 3rem;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;
