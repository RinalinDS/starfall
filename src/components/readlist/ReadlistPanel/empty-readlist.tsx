import { Link } from '@tanstack/react-router';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { Typography } from '../../ui/Typography/Typography';

export const EmptyReadlist = () => {
  return (
    <div className="mt-6 flex flex-col items-center gap-6 last:mt-8">
      <BsFillBookmarkPlusFill className="fill-amber-600 text-6xl" />
      <div className="flex flex-col items-center gap-5">
        <Typography variant="h5">Your readlist is empty</Typography>
        <Typography variant="body1">
          Save books to keep track of what you want to read
        </Typography>
      </div>
      <div>
        <Link
          to="/popular"
          className="inline-flex items-center rounded bg-amber-600 px-16 py-4 text-white normal-case no-underline transition-all duration-200 ease-in-out hover:bg-amber-700 dark:bg-amber-500 dark:text-gray-900 dark:hover:bg-amber-400"
        >
          <Typography className="text-2xl font-semibold tracking-wider">
            Browse popular books
          </Typography>
        </Link>
      </div>
    </div>
  );
};
