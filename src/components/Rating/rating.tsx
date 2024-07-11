import { useState } from 'react';
import { Button } from '../ui/Button/button';
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

  return (
    <div>
      {[...Array(10)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <Button
            name="rating"
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            {ratingValue <= (hover || rating) ? (
              <IoMdStar fill="lightblue" fontSize={24} />
            ) : (
              <IoIosStarOutline fontSize={24} />
            )}
          </Button>
        );
      })}
    </div>
  );
};
