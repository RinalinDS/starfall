import { FaRegStar, FaStar } from 'react-icons/fa6';
import {
  TEXT_YOUR_RATING,
  MAX_RATING_DISPLAY,
  TEXT_RATE,
} from '../../../constants/text';
import { Button } from '../../ui/Button/button';
import { Typography } from '../../ui/Typography/Typography';

type Props1 = {
  currentUserRating: number | null;
  openModal: () => void;
};
export const PreviewPersonalRating = ({
  openModal,
  currentUserRating,
}: Props1) => {
  const Icon = currentUserRating ? FaStar : FaRegStar;

  return (
    <div className="flex flex-col items-center">
      <Typography className="uppercase">{TEXT_YOUR_RATING}</Typography>
      <Button
        onClick={openModal}
        className="min-h-24 min-w-48 rounded-sm hover:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        <div className="flex items-center gap-1.5">
          <Icon className="fill-purple-600 text-4xl dark:fill-purple-400" />
          {currentUserRating ? (
            <>
              <Typography variant="h6">{currentUserRating}</Typography>
              {MAX_RATING_DISPLAY}
            </>
          ) : (
            <span>{TEXT_RATE}</span>
          )}
        </div>
      </Button>
    </div>
  );
};
