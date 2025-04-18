import { Link } from '@tanstack/react-router';
import { useBoundStore } from '../../store/useBoundStore';
import RightArrow from './../../assets/rightarrow.svg?react';
import { EmptyReadlist } from './empty-readlist';
import { ReadlistCards } from './readlist-cards';

export const ReadlistPanel = () => {
  const readlist = useBoundStore((state) => state.readlist);

  const isReadlistEmpty = !readlist.length;
  return (
    <div className="relative col-span-3 px-10 py-20 text-[1.6rem]">
      <h3
        className={`group text-primary relative inline-block before:absolute before:-ml-6 before:h-full before:w-1 before:self-start before:rounded before:bg-[#f5c518] before:content-['']`}
      >
        <Link
          to="/readlist"
          className="flex items-center gap-5 text-[2.4rem] leading-1.5 font-semibold text-inherit no-underline"
        >
          From your Readlist
          <RightArrow className="w-7 fill-white group-hover:fill-amber-400" />
        </Link>
      </h3>
      {isReadlistEmpty ? <EmptyReadlist /> : <ReadlistCards />}
    </div>
  );
};
