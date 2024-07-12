import { useMemo, useState } from 'react';
import { Book, sliderData } from '../mocks/sliderData.mock';

export const useSliderData = () => {
  const [currentSlide, setCurrentSlide] = useState<Book>(sliderData[0]);
  const [upNextSlides, setUpNextSlides] = useState<Book[]>(sliderData.slice(1));

  const changeNextSlide = () => {
    setCurrentSlide(upNextSlides[0]);
    setUpNextSlides([...upNextSlides.slice(1), currentSlide]);
  };

  const changePrevSlide = () => {
    const lastSlide = upNextSlides.at(-1);
    if (lastSlide) {
      setCurrentSlide(lastSlide);
    }
    setUpNextSlides([currentSlide, ...upNextSlides.slice(0, -1)]);
  };

  const setActiveSlide = (slide: Book) => {
    const arr = [currentSlide, ...upNextSlides];
    const index = arr.findIndex((s) => s.id === slide.id);

    setUpNextSlides([...arr.slice(index + 1), ...arr.slice(0, index)]);
    setCurrentSlide(slide);
  };

  const firstThreeSlides = useMemo(
    () => upNextSlides.slice(0, 3),
    [upNextSlides]
  );

  return {
    currentSlide,
    firstThreeSlides,
    changeNextSlide,
    changePrevSlide,
    setActiveSlide,
  };
};
