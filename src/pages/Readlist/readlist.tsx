import { Typography } from '../../components/ui/Typography/Typography';

export const Readlist = () => {
  return (
    <div className="h-full w-screen">
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
        <div className="flex items-center justify-between">
          <div>4 titles</div>
          <div>sort by</div>
        </div>

        <ul className="flex flex-col">
          <li>container for card 1</li>
          <li>container for card 2</li>
          <li>container for card 3</li>
          <li>container for card 4</li>
        </ul>
      </section>
    </div>
  );
};
