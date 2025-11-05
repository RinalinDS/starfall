import { getRouteApi } from '@tanstack/react-router';
import { RatingModal } from '../../components/shared/RatingModal/rating-modal';
import { Typography } from '../../components/ui/Typography/Typography';
import { useBookActions } from '../../hooks/useBookActions';
import { preview } from '../../mocks/preview';

import { useEffect, useRef } from 'react';
import { PreviewBookContent } from '../../components/preview/preview-book-content';
import { PreviewImages } from '../../components/preview/preview-images';
import { PreviewPersonalRating } from '../../components/preview/preview-personal-rating';
import { PreviewPlatformRating } from '../../components/preview/preview-platform-rating';

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
    currentUserRating,
  } = useBookActions(bookId);

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (!book) {
    return <div>Book not found</div>;
  }

  const {
    ratingCount,
    image,
    previewImage,
    author,
    year,
    title,
    tags,
    description,
  } = book;

  const { preview: bookPreviewData } = preview[bookId];

  return (
    <section className="mx-auto flex w-full max-w-[120rem] flex-col px-8 py-6 lg:px-0">
      <header
        className="mb-6 flex flex-col items-center justify-between md:flex-row"
        ref={ref}
      >
        <Typography as="h2" variant="h3" className="py-6 text-7xl">
          {title}
        </Typography>

        <div className="flex items-center justify-between gap-4 lg:gap-12">
          <PreviewPlatformRating
            ratingCount={ratingCount}
            ratingToDisplay={ratingToDisplay}
          />
          <PreviewPersonalRating
            currentUserRating={currentUserRating}
            openModal={openModal}
          />
        </div>
      </header>
      <PreviewImages
        changeReadlistHandler={changeReadlistHandler}
        image={image}
        isBookInReadlist={isBookInReadlist}
        previewImage={previewImage}
      />
      <PreviewBookContent
        author={author}
        bookPreviewData={bookPreviewData}
        description={description}
        tags={tags}
        year={year}
      />

      {isOpen ? (
        <RatingModal
          closeModal={closeModal}
          title={title}
          currentUserRating={currentUserRating}
          updateUserRatingHandler={updateUserRatingHandler}
          removeRateHandler={removeUserRatingHandler}
        />
      ) : null}
    </section>
  );
};
