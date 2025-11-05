import { Link } from '@tanstack/react-router';
import { FaStar, FaRegStar, FaPlay, FaCheck } from 'react-icons/fa6';
import { LuChevronRight, LuStar } from 'react-icons/lu';
import { useBookActions } from '../../hooks/useBookActions';
import { RatingModal } from '../shared/RatingModal/rating-modal';
import { Button } from '../ui/Button/button';

type Props = {
  id: string;
};

export const BookCard = ({ id }: Props) => {
  const {
    book,
    ratingToDisplay,
    changeReadlistHandler,
    openModal,
    isOpen,
    closeModal,
    removeUserRatingHandler,
    updateUserRatingHandler,
    currentUserRating,
  } = useBookActions(id);

  if (!book) {
    return null;
  }

  const { author, description, previewImage, ratingCount, year, title, tags } =
    book;
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
