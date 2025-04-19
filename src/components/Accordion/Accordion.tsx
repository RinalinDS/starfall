import { Dispatch, SetStateAction, memo } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { Button } from '../ui/Button/button';

type Props = {
  title: string;
  content: string;
  isActive: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
};

export const Accordion = memo(
  ({ title, content, isActive, setActiveIndex, index }: Props) => {
    const toggleAccordion = () => {
      setActiveIndex((prev) => (prev === index ? -1 : index));
    };
    return (
      <div className="flex w-full flex-col gap-4 p-10">
        <Button
          className="flex w-full cursor-pointer justify-between rounded-lg border-none bg-amber-300 px-5 py-10 outline-none"
          onClick={toggleAccordion}
        >
          {title} {isActive ? <FaArrowDown /> : <FaArrowRight />}
        </Button>
        {isActive && (
          <div className="w-full rounded-lg bg-emerald-400 px-5 py-10 text-slate-900">
            {content}
          </div>
        )}
      </div>
    );
  }
);
