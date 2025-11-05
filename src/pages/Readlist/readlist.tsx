import { BookListing } from '../../components/readlist/BookListing';
import { Typography } from '../../components/ui/Typography/Typography';
import { useReadlistStore } from '../../store/useReadlistStore';

export const Readlist = () => {
  const { readlist } = useReadlistStore();
  // TODO add sorting/ordedring : by year, by rating , by personal rating, number of ratings, alpabetical, origin order
  // ADD filtering?
  // Add different view , full card like now, card withut description and authour Cards like on main page , you'll see expample on imdb

  return (
    <div className="h-full">
      <div className="bg-gray-600">
        <section className="mx-auto max-w-[120rem] py-8">
          <div className="flex w-4/5 flex-col gap-8">
            <Typography variant="h2" className="">
              Your Readlist
            </Typography>
            <Typography variant="subtitle2">
              Your readlist is the place to track the titles you want to read.
              You can sort your Readlist by the IBDb rating or popularity score
              and arrange your titles in the order you want to see them.
            </Typography>
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-[120rem] py-8">
        <div className="flex max-w-[80rem] flex-col gap-8 rounded-lg border border-gray-200 bg-white p-6 text-2xl dark:border-gray-700 dark:bg-gray-800">
          {readlist.map((bookId, i) => {
            return <BookListing key={bookId} id={bookId} index={i + 1} />;
          })}
        </div>
      </section>
    </div>
  );
};
