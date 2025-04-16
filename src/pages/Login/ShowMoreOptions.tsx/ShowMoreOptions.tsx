import { ReactNode, useState } from 'react';

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
        <div className="text-center" onClick={toggleAccordion}>
          Show more options
        </div>
      )}
    </div>
  );
};
