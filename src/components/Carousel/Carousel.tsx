import { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { styled } from 'styled-components';
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

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: hsla(0, 0%, 7%, 0.45);
  border: 1px solid hsla(0, 0%, 100%, 0.7);
  font-size: 1.5rem;
  line-height: 0;
  color: hsla(0, 0%, 100%, 0.7);
  transition: all 0.25s ease-out;
  z-index: 5;
  padding: 1.2rem 0.8rem;
  border-radius: 7px;
  &:hover {
    color: yellow;
  }
  @media screen and (max-width: 960px) {
    top: 0;
    transform: translateY(0%);
  }
`;

const ButtonLeft = styled(Button)`
  left: 0.5rem;
  &:hover {
    left: 0px;
  }
  @media screen and (max-width: 960px) {
    left: 2.5rem;
    &:hover {
      left: 2rem;
    }
  }
`;

const ButtonRight = styled(Button)`
  right: 0.5rem;
  &:hover {
    right: 0px;
  }
  @media screen and (max-width: 960px) {
    right: 2.5rem;
    &:hover {
      right: 2rem;
    }
  }
`;
