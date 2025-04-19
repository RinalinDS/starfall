import { ReactNode, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

type Props = {
  children: ReactNode;
};

export const ShowMoreOptions = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {isOpen ? (
        children
      ) : (
        <button
          className="flex cursor-pointer items-center justify-center gap-4 text-amber-600 dark:text-amber-500"
          onClick={toggleAccordion}
        >
          Show more options <FaArrowDown />
        </button>
      )}
    </div>
  );
};
