import { useCallback, useState } from 'react';

export const useModalControls = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    closeModal,
    openModal,
  };
};
