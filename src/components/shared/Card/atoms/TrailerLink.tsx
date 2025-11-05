import { Link } from '@tanstack/react-router';
import { FaPlay } from 'react-icons/fa';
import { useCardContext } from '../useCardContext';

export const TrailerLink = () => {
  const {
    book: { id },
  } = useCardContext();
  return (
    <Link
      className="flex min-h-12 cursor-pointer items-center justify-center gap-3 self-center rounded px-6 text-2xl font-semibold tracking-wider normal-case no-underline transition-all duration-200 ease-in-out hover:bg-emerald-500 dark:hover:bg-emerald-600"
      to="/preview/$bookId"
      params={{ bookId: id }}
    >
      <FaPlay /> Trailer
    </Link>
  );
};
