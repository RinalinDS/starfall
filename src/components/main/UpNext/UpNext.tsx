import { Dispatch, SetStateAction } from 'react';
import { Book } from '../../../types/book';
import { Typography } from '../../ui/Typography/Typography';
import { UpNextSlider } from './UpNextSlider';

type Props = {
  upNextSlides: Book[];
  setActiveSlide: Dispatch<SetStateAction<string>>;
};

export const UpNext = ({ upNextSlides, setActiveSlide }: Props) => {
  return (
    <aside className="flex h-full w-[80%] flex-col gap-8">
      <Typography
        as="h2"
        variant="h5"
        className="text-amber-600 dark:text-amber-500"
      >
        Up Next
      </Typography>
      <UpNextSlider
        upNextSlides={upNextSlides}
        setActiveSlide={setActiveSlide}
      />
    </aside>
  );
};
