import { useMemo, useState } from 'react';
import { Direction } from '../constants/direction';
import { useBookStore } from '../store/useBookStore';

export const useSliderData = () => {
  const { books } = useBookStore();

  const [id, setId] = useState(books[0]?.id);

  const currentSlide = useMemo(() => {
    const slide = books.find((book) => book.id === id);
    if (!slide) {
      return books[0];
    }
    return slide;
  }, [books, id]);

  const upNextSlides = useMemo(() => {
    const index = books.findIndex((s) => s.id === id);

    return [...books.slice(index + 1), ...books.slice(0, index)];
  }, [books, id]);

  const firstThreeSlides = useMemo(
    () => upNextSlides.slice(0, 3),
    [upNextSlides]
  );

  const changeSlide = (direction: Direction) => {
    const index = books.findIndex((s) => s.id === id);
    const nextIndex =
      direction === 'next'
        ? index + 1
        : index - 1 < 0
          ? books.length - 1
          : index - 1;
    if (nextIndex === books.length) {
      setId(books[0].id);
      return;
    }
    setId(books[nextIndex].id);
  };

  return {
    currentSlide,
    firstThreeSlides,
    setActiveSlide: setId,
    changeSlide,
  };
};
