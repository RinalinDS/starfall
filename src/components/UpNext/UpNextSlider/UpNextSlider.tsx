import { Dispatch, SetStateAction } from 'react';
import { Book } from '../../../types/book';
import { Slide } from './Slide';

type Props = {
  upNextSlides: Book[];
  setActiveSlide: Dispatch<SetStateAction<string>>;
};

export const UpNextSlider = ({ upNextSlides, setActiveSlide }: Props) => {
  return (
    <section className="flex h-full w-full flex-grow flex-col justify-between gap-4 rounded-lg bg-gray-300 p-4 dark:bg-gray-700">
      {upNextSlides.map((slide) => {
        return (
          <Slide key={slide.id} slide={slide} setActiveSlide={setActiveSlide} />
        );
      })}
    </section>
  );
};
