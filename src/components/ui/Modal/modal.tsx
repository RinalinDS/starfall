import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (root) {
    return createPortal(
      <>
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-1000 bg-black/70"
          onClick={closeModal}
        />
        <div className="fixed top-1/2 left-1/2 z-[1001] min-h-96 min-w-192 -translate-x-1/2 -translate-y-1/2 rounded bg-[#333] p-16">
          {children}
        </div>
      </>,
      root
    );
  }
  return null;
};
