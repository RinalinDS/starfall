import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';

interface ModalContextType {
  registerModal: () => number;
  unregisterModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalCount, setModalCount] = useState(0);

  const registerModal = useCallback(() => {
    const currentLevel = modalCount;
    setModalCount((prev) => prev + 1);
    return currentLevel;
  }, [modalCount]);

  const unregisterModal = useCallback(() => {
    setModalCount((prev) => Math.max(0, prev - 1));
  }, []);

  return (
    <ModalContext.Provider value={{ registerModal, unregisterModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within ModalProvider');
  }
  return context;
};
