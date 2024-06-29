import { createFileRoute } from '@tanstack/react-router';
import { CarouselPanel } from '../components/CarouselPanel/CarouselPanel';
import { ReadlistPanel } from '../components/ReadlistPanel/readlist-panel';

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <CarouselPanel />
      <ReadlistPanel />
    </>
  ),
});
