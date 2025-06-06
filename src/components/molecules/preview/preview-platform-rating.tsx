import { FaStar } from 'react-icons/fa6';
import { MAX_RATING_DISPLAY, TEXT_IBDB_RATING } from '../../../constants/text';
import { Typography } from '../../ui/Typography/Typography';

type Props = {
  ratingToDisplay: string;
  ratingCount: number;
};

export const PreviewPlatformRating = ({
  ratingToDisplay,
  ratingCount,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Typography className="uppercase">{TEXT_IBDB_RATING}</Typography>
      <div className="flex min-h-24 min-w-48 items-center gap-1.5">
        <FaStar className="h-10 w-10 fill-amber-600" />
        <div className="flex flex-col">
          <Typography className="flex items-center">
            <Typography variant="h6">{ratingToDisplay}</Typography>
            {MAX_RATING_DISPLAY}
          </Typography>
          <Typography className="-mt-1 text-center text-sm">
            {ratingCount} votes
          </Typography>
        </div>
      </div>
    </div>
  );
};
