import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/button';
import { IoCloseSharp } from 'react-icons/io5';

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
          className="fixed top-0 right-0 bottom-0 left-0 z-1000 bg-black/50 dark:bg-black/70"
          onClick={closeModal}
        />

        <div className="fixed right-0 bottom-0 left-0 z-[1001] min-h-96 min-w-192 rounded bg-gray-50 p-16 text-gray-900 md:top-1/2 md:right-auto md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 dark:bg-gray-900 dark:text-gray-50">
          {children}
          <Button
            className="absolute -top-20 right-0 flex items-center justify-center rounded-full border-none bg-transparent p-1.5 text-6xl text-white hover:bg-amber-400"
            onClick={closeModal}
          >
            <IoCloseSharp />
          </Button>
        </div>
      </>,
      root
    );
  }
  return null;
};
