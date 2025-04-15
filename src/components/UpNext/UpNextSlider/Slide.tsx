import { Link } from '@tanstack/react-router';
import { Dispatch, SetStateAction } from 'react';
import { Book } from '../../../types/book';
import { Typography } from '../../ui/Typography/Typography';

type Props = {
  slide: Book;
  setActiveSlide: Dispatch<SetStateAction<string>>;
};

export const Slide = ({ slide, setActiveSlide }: Props) => {
  const { description, previewImage, title, id } = slide;

  const setActiveSlideHandler = () => {
    setActiveSlide(id);
  };

  return (
    <section className="flex h-full w-full grow items-center gap-4">
      <div className="flex-[0_0_20%]">
        <Link to="/preview/$bookId" params={{ bookId: id }}>
          <img
            className="w-full max-w-[12rem]"
            src={previewImage}
            alt={`${title} preview`}
          />
        </Link>
      </div>
      <button className="group block text-left" onClick={setActiveSlideHandler}>
        <Typography as="p" variant="h6" className="group-hover:text-yellow-400">
          {title}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </button>
    </section>
  );
};
// onClick={setActiveSlideHandler}
// const StyledImage = styled.img`
//   width: 100%;
//   max-width: 12rem;
// `;

// const TextContainer = styled.div`
//   cursor: pointer;
//   &:hover .hovered {
//     color: yellow;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   height: 100%;
//   flex-grow: 1;
// `;

// const ImageContainer = styled.div`
//   flex: 0 0 20%;
// `;
