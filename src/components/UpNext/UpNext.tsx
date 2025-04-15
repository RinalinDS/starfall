import { Dispatch, SetStateAction } from 'react';
import { Book } from '../../types/book';
import { Typography } from '../ui/Typography/Typography';
import { UpNextSlider } from './UpNextSlider/UpNextSlider';

type Props = {
  upNextSlides: Book[];
  setActiveSlide: Dispatch<SetStateAction<string>>;
};

export const UpNext = ({ upNextSlides, setActiveSlide }: Props) => {
  return (
    <div className="flex h-full w-1/3 flex-grow flex-col gap-8 text-yellow-400 md:w-3/4 lg:w-1/3">
      <Typography as="h2" variant="h5">
        Up Next
      </Typography>
      <UpNextSlider
        upNextSlides={upNextSlides}
        setActiveSlide={setActiveSlide}
      />
    </div>
  );
};
