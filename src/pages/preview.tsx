import { getRouteApi } from '@tanstack/react-router';
import { preview } from '../mocks/preview';
import { useBoundStore } from '../store/useBoundStore';

const routeApi = getRouteApi('/preview/$bookId');

export const Preview = () => {
  const { bookId } = routeApi.useParams();
  const book = useBoundStore((state) =>
    state.books.find((book) => book.id === bookId)
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  const { preview: bookPreview } = preview[bookId];

  return (
    <div>
      <img src={book.image} alt="book preview" />
      <div>
        ID from params: {bookId}, title: {book.title}
      </div>
      <div>{bookPreview}</div>
    </div>
  );
};
