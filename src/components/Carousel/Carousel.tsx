import { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { Direction, directions } from '../../constants/direction';
import { useBoundStore } from '../../store/useBoundStore';
import { Book } from '../../types/book';
import { Typography } from '../ui/Typography/Typography';
import { ButtonAbsolute as AddToReadlistButton } from '../ui/sharedStyledComponents/shared-buttons';
import LeftArrow from './../../assets/leftarrrow.svg?react';
import RightArrow from './../../assets/rightarrow.svg?react';

type Props = {
  mainSlide: Book;
  changeSlide: (direction: Direction) => void;
};

export const Carousel = ({ mainSlide, changeSlide }: Props) => {
  const readlist = useBoundStore((state) => state.readlist);
  const addToReadlist = useBoundStore((state) => state.addToReadlist);
  const removeFromReadlist = useBoundStore((state) => state.removeFromReadlist);

  const { image, previewImage, title, description, id } = mainSlide;

  const isBookInReadlist = useMemo(
    () => readlist.some((item) => id === item),
    [readlist, id]
  );

  const changeWatchlistHandler = () => {
    if (isBookInReadlist) {
      removeFromReadlist(id);
    } else {
      addToReadlist(id);
    }
  };

  const changePrevSlide = () => {
    changeSlide(directions.prev);
  };
  const changeNextSlide = () => {
    changeSlide(directions.next);
  };

  return (
    <div className="relative h-[48rem] w-full grow-[2] overflow-hidden rounded-lg px-8 2xl:w-2/3 2xl:px-0">
      <img
        src={image}
        alt={title}
        className="h-full max-h-[48rem] w-full object-fill brightness-75"
        key={id}
      />
      <div className="absolute bottom-4 left-12 z-10 h-2/5 w-[15%] 2xl:left-4">
        <img
          className="h-full w-full"
          src={previewImage}
          alt={`${title} preview`}
        />
        <AddToReadlistButton
          onClick={changeWatchlistHandler}
          isBookInWatchList={isBookInReadlist}
        >
          {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
        </AddToReadlistButton>
      </div>
      <div className="absolute right-4 bottom-4 flex max-h-1/2 w-7/10 flex-col items-start justify-evenly text-lg text-white sm:bottom-8">
        <Typography variant="h4" as="h3">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
      <ButtonLeft onClick={changePrevSlide}>
        <LeftArrow />
      </ButtonLeft>
      <ButtonRight onClick={changeNextSlide}>
        <RightArrow />
      </ButtonRight>
      <div />
    </div>
  );
};
// TODO change
// @ts-expect-error lazy
const StyledButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`absolute top-0 z-5 translate-y-0 rounded-md border border-white/70 bg-black/45 px-3 py-5 text-2xl leading-none text-white/70 transition-all duration-250 hover:text-yellow-400 md:top-1/2 md:-translate-y-1/2 ${className} `}
    >
      {children}
    </button>
  );
};
// @ts-expect-error lazy
const ButtonLeft = ({ children, ...props }) => {
  return (
    <StyledButton
      className="left-10 hover:left-8 lg:left-2 lg:hover:left-0"
      {...props}
    >
      {children}
    </StyledButton>
  );
};
// @ts-expect-error lazy
const ButtonRight = ({ children, ...props }) => {
  return (
    <StyledButton
      className="right-10 hover:right-8 lg:right-2 lg:hover:right-0"
      {...props}
    >
      {children}
    </StyledButton>
  );
};
