import { Link } from '@tanstack/react-router';
import { LuCheck, LuEye, LuInfo, LuStar } from 'react-icons/lu';
import { Typography } from '../../components/ui/Typography/Typography';
import { useBoundStore } from '../../store/useBoundStore';
import { useBookActions } from '../../hooks/useBookActions';
import { WatchListButton } from '../../components/ui/Button/watchlist-button';

export const Readlist = () => {
  const readlist = useBoundStore((state) => state.readlist);
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
      {readlist.map((m, i) => {
        return <MovieListing key={m} id={m} index={i + 1} />;
      })}
    </div>
  );
};

const MovieListing = ({ id, index }: { id: string; index: number }) => {
  const { book } = useBookActions(id);
  if (!book) return null;
  const { author, description, previewImage, image, year, title } = book;
  return (
    <div className="mx-auto max-w-[80rem] space-y-6 rounded-lg border border-gray-200 bg-white p-6 text-2xl">
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row">
        <div className="relative flex-shrink-0">
          <div className="absolute z-10">
            <WatchListButton
              isBookInReadlist={true}
              className="rounded-tl-2xl"
            />
          </div>
          <img
            src={previewImage}
            alt="The Boys"
            width={100}
            height={150}
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold">
              {index}. {title}
            </h2>
            <button className="text-blue-600">
              <LuInfo className="h-5 w-5" />
            </button>
          </div>
          <div className="">{year} · 40 eps · TV-MA · TV Series</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">8.6 (773K)</span>
            </div>
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4 text-blue-600" />
              <span>10</span>
            </div>
            <div className="flex items-center gap-1">
              <LuEye className="h-4 w-4 text-blue-600" />
              <span>Watched</span>
            </div>
          </div>
          <p className="">
            A group of vigilantes set out to take down corrupt superheroes who
            abuse their superpowers.
          </p>
          <div className="">
            <span className="font-medium">Creator:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Eric Kripke
            </Link>
            <span className="mx-2 font-medium">Stars:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Karl Urban
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Jack Quaid
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Antony Starr
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieListings = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-lg border border-gray-200 bg-white p-6 text-2xl">
      {/* The Boys */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row">
        <div className="relative flex-shrink-0">
          <div className="absolute top-2 left-2 z-10 rounded-full bg-yellow-400 p-1">
            <LuCheck className="h-4 w-4" />
          </div>
          <img
            src="/placeholder.svg?height=150&width=100"
            alt="The Boys"
            width={100}
            height={150}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold">1. The Boys</h2>
            <button className="text-blue-600">
              <LuInfo className="h-5 w-5" />
            </button>
          </div>
          <div className="">2019– · 40 eps · TV-MA · TV Series</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">8.6 (773K)</span>
            </div>
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4 text-blue-600" />
              <span>10</span>
            </div>
            <div className="flex items-center gap-1">
              <LuEye className="h-4 w-4 text-blue-600" />
              <span>Watched</span>
            </div>
          </div>
          <p className="">
            A group of vigilantes set out to take down corrupt superheroes who
            abuse their superpowers.
          </p>
          <div className="">
            <span className="font-medium">Creator:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Eric Kripke
            </Link>
            <span className="mx-2 font-medium">Stars:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Karl Urban
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Jack Quaid
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Antony Starr
            </Link>
          </div>
        </div>
      </div>

      {/* Tron: Ares */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row">
        <div className="relative flex-shrink-0">
          <div className="absolute top-2 left-2 z-10 rounded-full bg-amber-400 p-1">
            <LuCheck className="h-4 w-4" />
          </div>
          <img
            src="/placeholder.svg?height=150&width=100"
            alt="Tron: Ares"
            width={100}
            height={150}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold">2. Tron: Ares</h2>
            <button className="text-blue-600">
              <LuInfo className="h-5 w-5" />
            </button>
          </div>
          <div className="">2025</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4" />
            </div>
          </div>
          <p className="">
            A highly sophisticated Program, Ares, is sent from the digital world
            into the real world on a dangerous mission.
          </p>
          <div className="">
            <span className="font-medium">Director:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Joachim Rønning
            </Link>
            <span className="mx-2 font-medium">Stars:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Gillian Anderson
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Sarah Desjardins
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Jeff Bridges
            </Link>
          </div>
        </div>
      </div>
      {/* Mickey 17 */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-shrink-0">
          <div className="absolute top-2 left-2 z-10 rounded-full bg-yellow-400 p-1">
            <LuCheck className="h-4 w-4 text-black" />
          </div>
          <img
            src="/placeholder.svg?height=150&width=100"
            alt="Mickey 17"
            width={100}
            height={150}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold">3. Mickey 17</h2>
            <button className="text-blue-600">
              <LuInfo className="h-5 w-5" />
            </button>
          </div>
          <div className="text-gray-600">2025 · 2h 17m · R</div>
          <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-green-600 font-bold text-white">
              72
            </div>
            <span className="">Metascore</span>
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">6.9 (104K)</span>
            </div>
            <div className="flex items-center gap-1">
              <LuStar className="h-4 w-4 text-blue-600" />
              <span>Rate</span>
            </div>
            <div className="flex items-center gap-1">
              <LuEye className="h-4 w-4 text-blue-600" />
              <span>Mark as watched</span>
            </div>
          </div>
          <p className="">
            During a human expedition to colonize space, Mickey 17, a so-called
            "expendable" employee, is sent to explore an ice planet.
          </p>
          <div className="">
            <span className="font-medium">Director:</span>{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Bong Joon Ho
            </Link>
            <span className="mx-2 font-medium">Stars:</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Robert Pattinson
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Steven Yeun
            </Link>
            ,{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Michael Monroe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
