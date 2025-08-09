import { FaRegStar, FaStar } from 'react-icons/fa';
import { Typography } from '../../ui/Typography/Typography.tsx';
import { Button } from '../../ui/Button/button.tsx';

import { useCardContext } from '../useCardContext.tsx';

export const Rating = () => {
  const {
    ratingToDisplay,
    openModal,
    book: { currentUserRating },
  } = useCardContext();

  const iconClassName =
    'fill-purple-600 text-2xl group-hover:fill-purple-600 dark:fill-purple-400';
  const typographyClassName = 'flex items-center gap-2.5 text-2xl"';
  const Icon = currentUserRating ? FaStar : FaRegStar;

  return (
    <div className="flex justify-between px-2 text-2xl">
      <Typography variant="nostyle" className={typographyClassName}>
        <FaStar className="fill-amber-600 text-2xl" />
        {ratingToDisplay}
      </Typography>
      <Button
        onClick={openModal}
        className="group min-h-12 min-w-24 rounded-sm text-inherit hover:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        <Typography variant="nostyle" className={typographyClassName}>
          <Icon className={iconClassName} />
          {currentUserRating && <span>{currentUserRating}</span>}
        </Typography>
      </Button>
    </div>
  );
};
