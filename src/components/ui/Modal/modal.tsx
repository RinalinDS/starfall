import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

export const Modal = ({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: ReactNode;
}) => {
  const root = document.querySelector('body');
  useEffect(() => {
    const onEscPressHandler = function (e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscPressHandler);
    return () => {
      window.removeEventListener('keydown', onEscPressHandler);
    };
  }, []);
  if (root) {
    return createPortal(
      <>
        <Overlay onClick={closeModal} />
        <ModalContent>{children}</ModalContent>
      </>,
      root
    );
  }
  return null;
};

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  min-height: 24rem;
  min-width: 48rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  padding: 4rem;
  z-index: 1001;
  color: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
