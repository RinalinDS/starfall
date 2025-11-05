import { useMemo, useState } from 'react';
import { Button } from '../../ui/Button/button';
import { IoIosStarOutline } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';

export const Rating = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (rating: number) => void;
}) => {
  const [hover, setHover] = useState(0);

  const ratingArray = useMemo(
    () => Array.from({ length: 10 }, (_, index) => index + 1),
    []
  );

  return (
    <div>
      {ratingArray.map((ratingValue) => {
        return (
          <Button
            key={ratingValue}
            name="rating"
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            {ratingValue <= (hover || rating) ? (
              <IoMdStar
                className="text-purple-600 dark:text-purple-400"
                fontSize={24}
              />
            ) : (
              <IoIosStarOutline fontSize={24} />
            )}
          </Button>
        );
      })}
    </div>
  );
};
