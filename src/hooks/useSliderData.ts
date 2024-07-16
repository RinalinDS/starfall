import { useMemo, useState } from 'react';
import { Direction } from '../constants/direction';
import { useBoundStore } from '../store/useBoundStore';

export const useSliderData = () => {
  const booksData = useBoundStore((state) => state.books);

  const [id, setId] = useState(booksData[0].id);

  const currentSlide = useMemo(() => {
    const slide = booksData.find((book) => book.id === id);
    if (!slide) {
      return booksData[0];
    }
    return slide;
  }, [booksData, id]);

  const upNextSlides = useMemo(() => {
    const index = booksData.findIndex((s) => s.id === id);

    return [...booksData.slice(index + 1), ...booksData.slice(0, index)];
  }, [booksData, id]);

  const firstThreeSlides = useMemo(
    () => upNextSlides.slice(0, 3),
    [upNextSlides]
  );

  const changeSlide = (direction: Direction) => {
    const index = booksData.findIndex((s) => s.id === id);
    const nextIndex =
      direction === 'next'
        ? index + 1
        : index - 1 < 0
          ? booksData.length - 1
          : index - 1;
    if (nextIndex === booksData.length) {
      setId(booksData[0].id);
      return;
    }
    setId(booksData[nextIndex].id);
  };

  return {
    currentSlide,
    firstThreeSlides,
    setActiveSlide: setId,
    changeSlide,
  };
};
