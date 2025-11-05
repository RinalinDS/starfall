import { FaStar, FaRegStar } from 'react-icons/fa6';
import { LuStar, LuEye, LuInfo } from 'react-icons/lu';
import { useBookActions } from '../../hooks/useBookActions';
import { useModalControls } from '../../hooks/useModalControls';
import { useUserStore } from '../../store/useUserStore';
import { RatingModal } from '../shared/RatingModal/rating-modal';
import { Button } from '../ui/Button/button';
import { WatchListButton } from '../ui/Button/watchlist-button';
import { Modal } from '../ui/Modal/modal';
import { BookCard } from './BookCard';

type Props = {
  id: string;
  index: number;
};
export const BookListing = ({ id, index }: Props) => {
  const {
    closeModal: closeRatingModal,
    openModal: openRatingModal,
    isOpen: isMovieCardModalOpen,
  } = useModalControls();

  const {
    book,
    ratingToDisplay,
    changeReadlistHandler,
    openModal,
    isOpen,
    closeModal,
    removeUserRatingHandler,
    updateUserRatingHandler,
    isBookInReadlist,
    currentUserRating,
  } = useBookActions(id);

  const { getIsFinished, toggleFinished } = useUserStore();

  if (!book) return null;

  const isFinished = getIsFinished(id);
  const isRated = Boolean(currentUserRating);

  const handleToggleWatched = () => {
    if (isRated && isFinished) {
      // TODO add notification here
      // TODO make impossible to remove watched state, if you have rated this book, show notification "first remove your rating"
      return;
    }
    toggleFinished(id);
  };

  const { author, description, previewImage, year, title, ratingCount } = book;
  const Icon = currentUserRating ? FaStar : FaRegStar;

  return (
    <>
      <div className="flex gap-4 rounded-lg border-b border-gray-200 bg-white p-4 pb-6 last:border-b-0 dark:border-gray-700 dark:bg-gray-800">
        <div className="relative flex-shrink-0">
          <div className="absolute z-10">
            <WatchListButton
              isBookInReadlist={isBookInReadlist}
              className="rounded-tl-2xl"
              onClick={changeReadlistHandler}
            />
          </div>
          <img
            src={previewImage}
            alt={`${title} preview image`}
            width={100}
            height={150}
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h2 className="mb-1 font-semibold text-gray-900 dark:text-white">
                {index}. {title}
              </h2>
              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-200">
                <div className="">{year}</div>
                <div className="flex items-center gap-1">
                  <LuStar className="h-4 w-4 fill-amber-400 text-amber-400 dark:fill-amber-500 dark:text-amber-500" />
                  <span className="font-medium">
                    {ratingToDisplay} ({ratingCount})
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    onClick={openModal}
                    className="flex items-center gap-1.5 rounded-sm px-4 py-1 text-gray-600 hover:bg-emerald-600 dark:text-white dark:hover:bg-emerald-700"
                  >
                    <Icon className="h-4 w-4 fill-purple-600 dark:fill-purple-400" />
                    <span>{currentUserRating || 0} </span>
                  </Button>
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-3xl px-3 py-2 text-blue-600 transition-colors duration-200 hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                  onClick={handleToggleWatched}
                >
                  <LuEye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>
                    {isFinished || isRated ? 'Finished' : 'Mark as finished'}
                  </span>
                </button>
              </div>
            </div>
            <button
              className="rounded-full p-6 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-700"
              onClick={openRatingModal}
              title={`See more information about ${title}`}
            >
              <LuInfo className="h-8 w-8" />
            </button>
          </div>
          <p className="text-gray-700 dark:text-gray-100">{description}</p>
          <div className="text-gray-700 dark:text-gray-100">
            <span className="font-medium">Author: </span>
            <span>{author}</span>
          </div>
        </div>
      </div>
      {isMovieCardModalOpen && (
        <Modal closeModal={closeRatingModal}>
          <BookCard id={id} />
        </Modal>
      )}
      {isOpen ? (
        <RatingModal
          closeModal={closeModal}
          title={title}
          currentUserRating={currentUserRating}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeUserRatingHandler}
        />
      ) : null}
    </>
  );
};
