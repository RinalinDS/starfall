import { createFileRoute } from '@tanstack/react-router';
import { ReadlistPanel } from '../components/readlist/ReadlistPanel/readlist-panel';
import { CarouselPanel } from '../components/main/CarouselPanel/CarouselPanel';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col">
      <CarouselPanel />
      <ReadlistPanel />
    </div>
  ),
});
