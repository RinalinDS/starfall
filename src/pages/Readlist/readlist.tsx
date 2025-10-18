import { LuChevronRight, LuEye, LuInfo, LuStar } from 'react-icons/lu';

import { Link } from '@tanstack/react-router';
import { FaCheck, FaPlay, FaRegStar, FaStar } from 'react-icons/fa6';
import { RatingModal } from '../../components/RatingModal/rating-modal';
import { WatchListButton } from '../../components/ui/Button/watchlist-button';
import { Modal } from '../../components/ui/Modal/modal';
import { Typography } from '../../components/ui/Typography/Typography';
import { useBookActions } from '../../hooks/useBookActions';
import { useModalControls } from '../../hooks/useModalControls';
import { useBoundStore } from '../../store/useBoundStore';
import { Button } from '../../components/ui/Button/button';

export const Readlist = () => {
  const readlist = useBoundStore((state) => state.readlist);

  return (
    <div className="h-full w-screen">
      <div className="bg-gray-600">
        <section className="mx-auto max-w-[120rem] py-8">
          <div className="flex w-4/5 flex-col gap-8">
            <Typography variant="h2" className="">
              Your Readlist
            </Typography>
            <Typography variant="subtitle2">
              Your readlist is the place to track the titles you want to read.
              You can sort your Readlist by the IBDb rating or popularity score
              and arrange your titles in the order you want to see them.
            </Typography>
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-[120rem] py-8">
        <div className="flex max-w-[80rem] flex-col gap-8 rounded-lg border border-gray-200 bg-white p-6 text-2xl dark:border-gray-700 dark:bg-gray-800">
          {readlist.map((m, i) => {
            return <MovieListing key={m} id={m} index={i + 1} />;
          })}
        </div>
      </section>
    </div>
  );
};

const MovieListing = ({ id, index }: { id: string; index: number }) => {
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
  } = useBookActions(id);

  if (!book) return null;
  const {
    author,
    description,
    previewImage,
    year,
    title,
    ratingCount,
    currentUserRating,
  } = book;
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
                <div className="flex items-center gap-1">
                  <LuEye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Watched</span>
                </div>
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
          <MovieCard id={id} />
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

type MovieCardProps = {
  id: string;
};

const MovieCard = ({ id }: MovieCardProps) => {
  const {
    book,
    ratingToDisplay,
    changeReadlistHandler,
    openModal,
    isOpen,
    closeModal,
    removeUserRatingHandler,
    updateUserRatingHandler,
  } = useBookActions(id);

  if (!book) {
    return null;
  }

  const {
    author,
    currentUserRating,
    description,
    previewImage,
    ratingCount,
    year,
    title,
    tags,
  } = book;
  const Icon = currentUserRating ? FaStar : FaRegStar;
  return (
    <>
      <div className="flex max-w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-12">
            <div>
              <img
                src={previewImage}
                alt="Tron: Ares movie poster"
                className="max-h-32 rounded object-cover"
              />
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="font-bold">{title}</h2>
                <LuChevronRight className="ml-1 h-7 w-7" />
              </div>

              <div className="flex items-center gap-6">
                <div className="">{year}</div>
                <div className="flex items-center gap-1">
                  <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">
                    {ratingToDisplay} ({ratingCount})
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    onClick={openModal}
                    className="flex items-center gap-1.5 rounded-sm px-4 py-1 hover:bg-emerald-500 dark:hover:bg-emerald-600"
                  >
                    <Icon className="h-4 w-4 fill-purple-600 dark:fill-purple-400" />
                    <span>{currentUserRating || 0} </span>
                  </Button>
                </div>
              </div>

              <div className="text-md mt-1 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                {tags.map((tag, index, arr) => {
                  return (
                    <div className="flex items-center gap-2" key={tag}>
                      <span>{tag}</span>
                      {index + 1 < arr.length && <span>•</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>{description}</div>

            <div>
              <div className="flex">
                <span>Author: </span>
                <span className="text-blue-400">{author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* controls : readlist , trailer */}
        <div className="mt-4 flex gap-3">
          <Link
            className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-200 px-4 py-3 font-semibold tracking-wider transition-all duration-200 ease-in-out hover:bg-emerald-500 hover:text-white dark:bg-gray-800 dark:hover:bg-emerald-600"
            to="/preview/$bookId"
            params={{ bookId: id }}
          >
            <FaPlay className="h-4 w-4" />
            <span className="hidden sm:inline">Trailer</span>
          </Link>

          <button
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gray-200 px-4 py-3 font-semibold tracking-wider transition-all duration-200 ease-in-out hover:bg-emerald-500 hover:text-white dark:bg-gray-800 dark:hover:bg-emerald-600"
            onClick={changeReadlistHandler}
          >
            <FaCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Readlist</span>
          </button>
        </div>
      </div>
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
