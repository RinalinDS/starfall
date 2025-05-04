import { Link } from '@tanstack/react-router';
import {
  LuEye,
  LuInfo,
  LuStar,
  LuChevronRight,
  LuPlay,
  LuCheck,
} from 'react-icons/lu';

import { WatchListButton } from '../../components/ui/Button/watchlist-button';
import { Typography } from '../../components/ui/Typography/Typography';
import { useBookActions } from '../../hooks/useBookActions';
import { useBoundStore } from '../../store/useBoundStore';
import { Modal } from '../../components/ui/Modal/modal';

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
      <section className="mx-auto max-w-[120rem] py-8">
        <div className="flex max-w-[80rem] flex-col gap-8 rounded-lg border border-gray-200 bg-white p-6 text-2xl">
          {readlist.map((m, i) => {
            return <MovieListing key={m} id={m} index={i + 1} />;
          })}
        </div>
      </section>
    </div>
  );
};

const MovieListing = ({ id, index }: { id: string; index: number }) => {
  const {
    book,
    ratingToDisplay,
    changeReadlistHandler,
    openModal,
    isOpen,
    closeModal,
  } = useBookActions(id);
  if (!book) return null;
  const { author, description, previewImage, year, title, tags, ratingCount } =
    book;
  return (
    <>
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 last:border-b-0 sm:flex-row">
        <div className="relative flex-shrink-0">
          <div className="absolute z-10">
            <WatchListButton
              isBookInReadlist={true}
              className="rounded-tl-2xl"
              onClick={changeReadlistHandler}
            />
          </div>
          <img
            src={previewImage}
            alt={`${title} preview image`}
            width={100}
            height={150}
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-3">
              <h2 className="font-semibold">
                {index}. {title}
              </h2>
              <div className="">
                {year} {tags.join(', ')}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">
                    {ratingToDisplay} ({ratingCount})
                  </span>
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
            </div>

            {/* add tooltip for this button with text "See more information about {bookName}" */}
            <button
              className="rounded-full p-6 text-blue-600 hover:bg-blue-100"
              onClick={openModal}
            >
              <LuInfo className="h-8 w-8" />
            </button>
          </div>

          <p className="">{description}</p>
          <div className="">
            <span className="font-medium">Author: </span>
            <Link href="#" className="text-blue-600 hover:underline">
              {author}
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <MovieCard img={previewImage} />
        </Modal>
      )}
    </>
  );
};

const MovieCard = ({ img }: { img: string }) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {/* Постер фильма (маленький, слева) */}
        <div className="flex items-center gap-12">
          <div>
            <img
              src={img}
              alt="Tron: Ares movie poster"
              className="max-h-32 rounded object-cover"
            />
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="font-bold">Tron: Ares</h2>
              <LuChevronRight className="ml-1 h-5 w-5" />
            </div>
            <p>2025</p>
            <div className="mt-1 flex items-center text-xs text-gray-400">
              <span>Action</span>
              <span className="mx-1">•</span>
              <span>Adventure</span>
              <span className="mx-1">•</span>
              <span>Sci-Fi</span>
            </div>
          </div>
        </div>

        {/* Информация о фильме (справа от постера) */}
        <div>
          <p>
            A highly sophisticated Program, Ares, is sent from the digital world
            into the real world on a dangerous mission.
          </p>

          <p>Post-production</p>

          <div>
            <div className="flex">
              <span>Author: </span>
              <span className="text-blue-400">Joachim Rønning</span>
            </div>

            <div className="flex">
              <span>Series: </span>
              <span className="">Fantasy</span>
            </div>
          </div>
        </div>
      </div>
      {/* controls : readlist , trailer */}
      <div className="mt-4 flex space-x-2">
        <button className="flex flex-1 items-center justify-center rounded-md px-4 py-2 hover:bg-gray-700">
          <LuPlay className="mr-2 h-4 w-4" />
          Trailer
        </button>
        <button className="flex flex-1 items-center justify-center rounded-md px-4 py-2 hover:bg-gray-700">
          <LuCheck className="mr-2 h-4 w-4 text-blue-400" />
          Readlist
        </button>
      </div>
    </div>
  );
};

// const MovieListings = () => {
//   return (
//     <div className="mx-auto max-w-3xl space-y-6 rounded-lg border border-gray-200 bg-white p-6 text-2xl">
//       {/* The Boys */}
//       <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row">
//         <div className="relative flex-shrink-0">
//           <div className="absolute top-2 left-2 z-10 rounded-full bg-yellow-400 p-1">
//             <LuCheck className="h-4 w-4" />
//           </div>
//           <img
//             src="/placeholder.svg?height=150&width=100"
//             alt="The Boys"
//             width={100}
//             height={150}
//             className="rounded-md object-cover"
//           />
//         </div>
//         <div className="flex-1 space-y-2">
//           <div className="flex items-start justify-between">
//             <h2 className="font-semibold">1. The Boys</h2>
//             <button className="text-blue-600">
//               <LuInfo className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="">2019– · 40 eps · TV-MA · TV Series</div>
//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-1">
//               <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
//               <span className="font-medium">8.6 (773K)</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <LuStar className="h-4 w-4 text-blue-600" />
//               <span>10</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <LuEye className="h-4 w-4 text-blue-600" />
//               <span>Watched</span>
//             </div>
//           </div>
//           <p className="">
//             A group of vigilantes set out to take down corrupt superheroes who
//             abuse their superpowers.
//           </p>
//           <div className="">
//             <span className="font-medium">Creator:</span>
//             <Link href="#" className="text-blue-600 hover:underline">
//               Eric Kripke
//             </Link>
//             <span className="mx-2 font-medium">Stars:</span>
//             <Link href="#" className="text-blue-600 hover:underline">
//               Karl Urban
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Jack Quaid
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Antony Starr
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Tron: Ares */}
//       <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row">
//         <div className="relative flex-shrink-0">
//           <div className="absolute top-2 left-2 z-10 rounded-full bg-amber-400 p-1">
//             <LuCheck className="h-4 w-4" />
//           </div>
//           <img
//             src="/placeholder.svg?height=150&width=100"
//             alt="Tron: Ares"
//             width={100}
//             height={150}
//             className="rounded-md object-cover"
//           />
//         </div>
//         <div className="flex-1 space-y-2">
//           <div className="flex items-start justify-between">
//             <h2 className="font-semibold">2. Tron: Ares</h2>
//             <button className="text-blue-600">
//               <LuInfo className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="">2025</div>
//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-1">
//               <LuStar className="h-4 w-4" />
//             </div>
//           </div>
//           <p className="">
//             A highly sophisticated Program, Ares, is sent from the digital world
//             into the real world on a dangerous mission.
//           </p>
//           <div className="">
//             <span className="font-medium">Director:</span>
//             <Link href="#" className="text-blue-600 hover:underline">
//               Joachim Rønning
//             </Link>
//             <span className="mx-2 font-medium">Stars:</span>
//             <Link href="#" className="text-blue-600 hover:underline">
//               Gillian Anderson
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Sarah Desjardins
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Jeff Bridges
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* Mickey 17 */}
//       <div className="flex flex-col gap-4 sm:flex-row">
//         <div className="relative flex-shrink-0">
//           <div className="absolute top-2 left-2 z-10 rounded-full bg-yellow-400 p-1">
//             <LuCheck className="h-4 w-4 text-black" />
//           </div>
//           <img
//             src="/placeholder.svg?height=150&width=100"
//             alt="Mickey 17"
//             width={100}
//             height={150}
//             className="rounded-md object-cover"
//           />
//         </div>
//         <div className="flex-1 space-y-2">
//           <div className="flex items-start justify-between">
//             <h2 className="font-semibold">3. Mickey 17</h2>
//             <button className="text-blue-600">
//               <LuInfo className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="text-gray-600">2025 · 2h 17m · R</div>
//           <div className="flex items-center gap-3">
//             <div className="flex h-5 w-5 items-center justify-center rounded bg-green-600 font-bold text-white">
//               72
//             </div>
//             <span className="">Metascore</span>
//             <div className="flex items-center gap-1">
//               <LuStar className="h-4 w-4 fill-amber-400 text-amber-400" />
//               <span className="font-medium">6.9 (104K)</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <LuStar className="h-4 w-4 text-blue-600" />
//               <span>Rate</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <LuEye className="h-4 w-4 text-blue-600" />
//               <span>Mark as watched</span>
//             </div>
//           </div>
//           <p className="">
//             During a human expedition to colonize space, Mickey 17, a so-called
//             "expendable" employee, is sent to explore an ice planet.
//           </p>
//           <div className="">
//             <span className="font-medium">Director:</span>{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Bong Joon Ho
//             </Link>
//             <span className="mx-2 font-medium">Stars:</span>
//             <Link href="#" className="text-blue-600 hover:underline">
//               Robert Pattinson
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Steven Yeun
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-blue-600 hover:underline">
//               Michael Monroe
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
