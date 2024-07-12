import { createFileRoute } from '@tanstack/react-router';
import { Readlist } from '../../pages/Readlist/readlist';

export const Route = createFileRoute('/readlist/')({
  component: Readlist,
});
