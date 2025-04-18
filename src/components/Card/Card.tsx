import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Link } from '@tanstack/react-router';
import { ReactElement, useMemo } from 'react';
import { FaPlay, FaRegStar, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { RxDragHandleHorizontal } from 'react-icons/rx';
import { useModalControls } from '../../hooks/useModalControls';
import { useBoundStore } from '../../store/useBoundStore';
import { RatingModal } from '../RatingModal/rating-modal';
import { Button } from '../ui/Button/button';
import { Typography } from '../ui/Typography/Typography';
import { ButtonAbsolute } from '../ui/sharedStyledComponents/shared-buttons';

// TODO: feels like this component is too heavy, because a lot of state management and the fact it's mapped component.
export const Card = ({ id }: { id: string }) => {
  const readlist = useBoundStore((state) => state.readlist);
  const addToReadlist = useBoundStore((state) => state.addToReadlist);
  const removeFromReadlist = useBoundStore((state) => state.removeFromReadlist);
  const updateUserRating = useBoundStore((state) => state.updateUserRating);
  const removeUserRating = useBoundStore((state) => state.removeUserRating);
  const book = useBoundStore((state) =>
    state.books.find((book) => book.id === id)
  );

  const {
    setNodeRef,
    isDragging,
    transition,
    transform,
    listeners,
    attributes,
  } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { closeModal, isOpen, openModal } = useModalControls();

  const ratingToDisplay = (book?.rating || 0).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 1,
  });

  const isBookInReadlist = useMemo(
    () => readlist.some((item) => id === item),
    [readlist, id]
  );
  const changeReadlistHandler = () => {
    if (isBookInReadlist) {
      removeFromReadlist(id);
    } else {
      addToReadlist(id);
    }
  };

  const updateUserRatingHandler = (rating: number) => {
    updateUserRating(id, rating);
    closeModal();
  };

  const removeUserRatingHandler = () => {
    removeUserRating(id);
    closeModal();
  };

  return (
    <div
      className="flex max-h-192 max-w-96 flex-col overflow-hidden rounded-md bg-gray-800 text-gray-100"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Card.Image
        id={id}
        previewImage={book?.previewImage || ''}
        changeReadlistHandler={changeReadlistHandler}
        isBookInReadlist={isBookInReadlist}
      />
      <Card.ContentContainer>
        <Card.Title title={book?.title || ''} />
        <Card.Rating
          ratingToDisplay={Number(ratingToDisplay)}
          currentUserRating={book?.currentUserRating || 0}
          openModal={openModal}
        />
        <Card.ReadlistButton
          isBookInReadlist={isBookInReadlist}
          changeReadlistHandler={changeReadlistHandler}
        />
        <Card.TrailerLink id={id}>
          <div
            {...listeners}
            className={`p-2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            <RxDragHandleHorizontal className="h-10 w-10 fill-amber-800 text-fuchsia-700" />
          </div>
        </Card.TrailerLink>
      </Card.ContentContainer>

      {isOpen ? (
        <RatingModal
          closeModal={closeModal}
          title={book?.title || ''}
          currentUserRating={book?.currentUserRating || 0}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeUserRatingHandler}
        />
      ) : null}
    </div>
  );
};

Card.ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-col gap-5 px-3 py-6">{children}</div>
);

Card.Image = ({
  id,
  previewImage = '',
  changeReadlistHandler,
  isBookInReadlist,
}: {
  id: string;
  previewImage: string;
  changeReadlistHandler: () => void;
  isBookInReadlist: boolean;
}) => (
  <div className="relative flex w-full flex-col items-start">
    <Link to="/preview/$bookId" params={{ bookId: id }} className="w-full">
      <img src={previewImage} alt="Book preview" className="max-h-64 w-full" />
    </Link>
    <ButtonAbsolute
      onClick={changeReadlistHandler}
      isBookInWatchList={isBookInReadlist}
    >
      {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
    </ButtonAbsolute>
  </div>
);

Card.Rating = ({
  ratingToDisplay,
  currentUserRating = 0,
  openModal,
}: {
  ratingToDisplay: number;
  currentUserRating: number | null;
  openModal: () => void;
}) => (
  <div className="flex gap-10">
    <Typography variant="body2" className="flex items-center gap-2.5">
      <FaStar fill="yellow" />
      {ratingToDisplay}
    </Typography>
    <Button
      onClick={openModal}
      className="min-h-12 min-w-24 rounded-sm text-inherit hover:bg-emerald-800"
    >
      <Typography variant="body2" className="flex items-center gap-2.5">
        {currentUserRating ? (
          <FaStar fill="lightblue" />
        ) : (
          <FaRegStar fill="lightblue" />
        )}
        {currentUserRating}
      </Typography>
    </Button>
  </div>
);

Card.Title = ({ title }: { title: string }) => (
  <Typography as="p" variant="subtitle2" className="truncate">
    {title}
  </Typography>
);

Card.ReadlistButton = ({
  isBookInReadlist,
  changeReadlistHandler,
}: {
  isBookInReadlist: boolean;
  changeReadlistHandler: () => void;
}) => (
  <Button
    className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded bg-blue-700 text-2xl font-semibold text-blue-500 normal-case no-underline transition-all duration-200 ease-in-out hover:brightness-150"
    onClick={changeReadlistHandler}
  >
    Readlist {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
  </Button>
);

Card.TrailerLink = ({
  id,
  children,
}: {
  id: string;
  children: ReactElement;
}) => (
  <div className="flex items-center justify-between">
    <Link
      className="flex min-h-12 cursor-pointer items-center justify-center gap-3 self-center rounded px-6 text-2xl font-semibold tracking-wider text-gray-900 normal-case no-underline transition-all duration-200 ease-in-out hover:bg-emerald-600 hover:brightness-150"
      to="/preview/$bookId"
      params={{ bookId: id }}
    >
      <FaPlay /> Trailer
    </Link>
    {children}
  </div>
);
