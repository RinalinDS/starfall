import { Typography } from '../../../ui/Typography/Typography';
import { useCardContext } from '../useCardContext';

export const Title = () => {
  const {
    book: { title },
  } = useCardContext();
  return (
    <Typography
      as="p"
      variant="nostyle"
      className="truncate text-[1.6rem] font-medium"
    >
      {title}
    </Typography>
  );
};
