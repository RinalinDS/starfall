import { getRouteApi } from '@tanstack/react-router';
import { FaPlus, FaRegStar, FaStar } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { RatingModal } from '../../components/RatingModal/rating-modal';
import { Button } from '../../components/ui/Button/button';
import { WatchListButton } from '../../components/ui/Button/watchlist-button';
import { Typography } from '../../components/ui/Typography/Typography';
import { useBookActions } from '../../hooks/useBookActions';
import { preview } from '../../mocks/preview';

const routeApi = getRouteApi('/preview/$bookId');

export const Preview = () => {
  const { bookId } = routeApi.useParams();
  const {
    book,
    ratingToDisplay,
    openModal,
    isBookInReadlist,
    changeReadlistHandler,
    closeModal,
    updateUserRatingHandler,
    removeUserRatingHandler,
    isOpen,
  } = useBookActions(bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  const { preview: bookPreviewData } = preview[bookId];
  // TODO split this mfucking markup
  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col px-8 py-6 lg:px-0">
      <header className="mb-6 flex items-center justify-between">
        <Typography as="h2" variant="h3" className="py-6 text-7xl">
          {book.title}
        </Typography>
        {/*TODO передалть эти контейнеры, потому что невозможно медиа запросы применять, все идет по наклонной из-за того как я их построил */}
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-between gap-12 uppercase">
            <Typography>IBDb rating</Typography>
            <Typography>Your rating</Typography>
          </div>

          <div className="flex items-center gap-12">
            <Typography
              variant="body2"
              className="inline-flex flex-col items-center gap-1"
            >
              <div className="flex min-h-24 min-w-48 items-center justify-center gap-1.5 rounded-sm">
                <FaStar className="h-10 w-10 fill-amber-600" />
                <div className="flex flex-col">
                  <Typography className="flex items-center">
                    <Typography variant="h6">{ratingToDisplay}</Typography>/10
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="relative bottom-2 flex justify-center"
                  >
                    {book.howManyTimeWereRated} votes
                  </Typography>
                </div>
              </div>
            </Typography>

            <Typography
              variant="body2"
              className="inline-flex flex-col items-center gap-1"
            >
              <Button
                onClick={openModal}
                className="h-full min-h-24 w-full min-w-48 rounded-sm hover:bg-emerald-500 dark:hover:bg-emerald-600"
              >
                {book.currentUserRating ? (
                  <Typography className="flex items-center justify-between gap-1.5 text-2xl">
                    <FaStar className="fill-purple-600 text-4xl dark:fill-purple-400" />
                    <Typography variant="h6">
                      {book.currentUserRating}
                    </Typography>
                    /10
                  </Typography>
                ) : (
                  <Typography className="flex items-center justify-between gap-1.5 text-2xl">
                    <FaRegStar
                      fill="aquamarine"
                      className="fill-purple-600 text-4xl dark:fill-purple-400"
                    />
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
        <WatchListButton
          onClick={changeReadlistHandler}
          isBookInWatchList={isBookInReadlist}
          className="px-3 py-6"
        >
          {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
        </WatchListButton>
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

        <Typography as="p" variant="body1" className="tracking-wide">
          {book.description}
        </Typography>
        <div
          className={`flex flex-col border-b border-b-gray-600 [&>*]:border-t [&>*]:border-t-gray-600`}
        >
          <div className="mb-2 flex items-center">
            <Typography className="w-32 text-4xl font-medium capitalize">
              creator
            </Typography>
            <Typography>{book.author}</Typography>
          </div>
          <div className="mb-2 flex items-center">
            <Typography className="w-32 text-4xl font-medium capitalize">
              year
            </Typography>
            <Typography>{book.year}</Typography>
          </div>
        </div>
        <Typography
          as="p"
          variant="body1"
          className="pb-64 indent-8 tracking-wide"
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
