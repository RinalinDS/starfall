import { Link } from '@tanstack/react-router';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { Typography } from '../ui/Typography/Typography';

export const EmptyReadlist = () => {
  return (
    <div className="mt-6 flex flex-col items-center gap-6 text-slate-800 last:mt-8">
      <div
        className={`before:bg-text-fill relative before:absolute before:top-[10%] before:left-[30%] before:block before:h-[60%] before:w-1/2 before:content-['']`}
      >
        <BsFillBookmarkPlusFill
          fontSize={'36px'}
          className="relative z-10 fill-emerald-800"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <Typography variant="h5">Your readlist is empty</Typography>
        <Typography variant="body1">
          Save books to keep track of what you want to read
        </Typography>
      </div>
      <div>
        <Link
          to="/popular"
          className="inline-flex min-h-12 items-center rounded bg-emerald-800 px-14 text-blue-500 normal-case no-underline transition-all duration-200 ease-in-out hover:brightness-150"
        >
          <Typography className="text-2xl font-semibold tracking-wider">
            Browse popular books
          </Typography>
        </Link>
      </div>
    </div>
  );
};
