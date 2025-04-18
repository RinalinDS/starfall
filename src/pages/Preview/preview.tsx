import { getRouteApi } from '@tanstack/react-router';
import { useMemo } from 'react';
import { FaPlus, FaRegStar, FaStar } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { RatingModal } from '../../components/RatingModal/rating-modal';
import { Button } from '../../components/ui/Button/button';
import { Typography } from '../../components/ui/Typography/Typography';
import { ButtonAbsolute } from '../../components/ui/sharedStyledComponents/shared-buttons';
import { useModalControls } from '../../hooks/useModalControls';
import { preview } from '../../mocks/preview';
import { useBoundStore } from '../../store/useBoundStore';

const routeApi = getRouteApi('/preview/$bookId');

export const Preview = () => {
  const { bookId } = routeApi.useParams();
  const readlist = useBoundStore((state) => state.readlist);
  const addToReadlist = useBoundStore((state) => state.addToReadlist);
  const removeFromReadlist = useBoundStore((state) => state.removeFromReadlist);
  const updateUserRating = useBoundStore((state) => state.updateUserRating);
  const removeUserRating = useBoundStore((state) => state.removeUserRating);
  const book = useBoundStore((state) =>
    state.books.find((book) => book.id === bookId)
  );

  const { closeModal, isOpen, openModal } = useModalControls();

  const ratingToDisplay = (book?.rating || 0).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 1,
  });

  const isBookInReadlist = useMemo(
    () => readlist.some((item) => bookId === item),
    [readlist, bookId]
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  const changeReadlistHandler = () => {
    if (isBookInReadlist) {
      removeFromReadlist(bookId);
    } else {
      addToReadlist(bookId);
    }
  };

  const updateUserRatingHandler = (rating: number) => {
    updateUserRating(bookId, rating);
    closeModal();
  };

  const removeUserRatingHandler = () => {
    removeUserRating(bookId);
    closeModal();
  };

  const { preview: bookPreviewData } = preview[bookId];

  return (
    <div className="flex flex-col p-6">
      <header className="mb-6 flex items-center justify-between">
        <Typography as="h2" variant="h3" className="py-6 text-7xl text-white">
          {book.title}
        </Typography>

        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-between gap-12 text-slate-800 uppercase">
            <Typography>IBDb rating</Typography>
            <Typography>Your rating</Typography>
          </div>

          <div className="flex items-center gap-12">
            <Typography
              variant="body2"
              className="inline-flex flex-col items-center gap-1 text-slate-800"
            >
              <div className="flex min-h-24 min-w-48 items-center justify-center gap-1.5 rounded-sm hover:bg-amber-400">
                <FaStar fill="yellow" className="h-10 w-10" />
                <div className="flex flex-col">
                  <Typography style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">{ratingToDisplay}</Typography>/10
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      position: 'relative',
                      bottom: '0.5rem',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {book.howManyTimeWereRated}
                  </Typography>
                </div>
              </div>
            </Typography>

            <Typography
              variant="body2"
              className="inline-flex flex-col items-center gap-1 text-slate-800"
            >
              <Button
                onClick={openModal}
                className="h-full min-h-24 w-full min-w-48 rounded-sm text-inherit hover:bg-emerald-600"
              >
                {book.currentUserRating ? (
                  <Typography className="flex items-center justify-between gap-1.5">
                    <FaStar fill="aquamarine" className="h-10 w-10" />
                    <Typography variant="h6">
                      {book.currentUserRating}
                    </Typography>
                    /10
                  </Typography>
                ) : (
                  <Typography className="flex items-center justify-between gap-1.5">
                    <FaRegStar fill="aquamarine" className="h-10 w-10" />
                    Rate
                  </Typography>
                )}
              </Button>
            </Typography>
          </div>
        </div>
      </header>

      <div className="relative flex w-full gap-1.5">
        <img
          src={book.previewImage}
          alt="preview image"
          className="h-[clamp(24rem,25vw,48rem)] w-1/4"
        />
        <img
          src={book.image}
          alt="book image"
          className="h-[clamp(24rem,25vw,48rem)] w-3/4"
        />
        <ButtonAbsolute
          onClick={changeReadlistHandler}
          isBookInWatchList={isBookInReadlist}
          style={{ padding: '1.6rem 0.8rem' }}
        >
          {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
        </ButtonAbsolute>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <ul className="flex gap-6">
          {book.tags.map((tag) => (
            <li
              className="rounded-4xl border-1 border-solid border-slate-500 p-3 text-2xl font-medium capitalize"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>

        <Typography
          as="p"
          variant="body1"
          className="tracking-wide text-slate-600"
        >
          {book.description}
        </Typography>
        <div
          className={`flex flex-col border-b border-b-gray-600 [&>*]:border-t [&>*]:border-t-gray-600`}
        >
          <Typography className="flex items-center gap-10 text-slate-600">
            <Typography className="text-4xl font-medium text-slate-600 capitalize">
              creator
            </Typography>{' '}
            {book.author}
          </Typography>
          <Typography className="flex items-center gap-10 text-slate-600">
            <Typography className="text-4xl font-medium text-slate-600 capitalize">
              year
            </Typography>
            {book.year}
          </Typography>
        </div>
        <Typography
          as="p"
          variant="body1"
          className="indent-8 tracking-wide text-slate-600"
        >
          {bookPreviewData}
        </Typography>
      </div>

      {isOpen ? (
        <RatingModal
          closeModal={closeModal}
          title={book.title}
          currentUserRating={book.currentUserRating}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeUserRatingHandler}
        />
      ) : null}
    </div>
  );
};
