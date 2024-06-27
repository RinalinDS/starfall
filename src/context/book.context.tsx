import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Book, sliderData } from '../mocks/sliderData.mock';

export const BooksContext = createContext<Book[]>([]);
export const FavoriteContext = createContext<Book[]>([]);
export const BooksDispatchContext = createContext<Dispatch<
  SetStateAction<Book[]>
> | null>(null);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, _] = useState<Book[]>(sliderData);
  const [favorites, setFavorites] = useState<Book[]>([]);

  return (
    <BooksContext.Provider value={books}>
      <FavoriteContext.Provider value={favorites}>
        <BooksDispatchContext.Provider value={setFavorites}>
          {children}
        </BooksDispatchContext.Provider>
      </FavoriteContext.Provider>
    </BooksContext.Provider>
  );
};
