import { FaPlus } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { Button } from '../../../ui/Button/button';
import { useCardContext } from '../useCardContext';

export const ReadlistButton = () => {
  const { changeReadlistHandler, isBookInReadlist } = useCardContext();
  return (
    <Button
      className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded bg-blue-700 text-2xl font-semibold text-blue-500 normal-case no-underline transition-all duration-200 ease-in-out hover:brightness-150"
      onClick={changeReadlistHandler}
    >
      Readlist {isBookInReadlist ? <IoMdCheckmark /> : <FaPlus />}
    </Button>
  );
};
