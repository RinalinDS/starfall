import { useContext } from 'react';
import { CardContext } from './CardContext.ts';

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCardContext must be used within a Card provider');
  }

  return context;
};
