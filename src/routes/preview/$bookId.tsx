import { createFileRoute } from '@tanstack/react-router';
import { Preview } from '../../pages/Preview/preview';

export const Route = createFileRoute('/preview/$bookId')({
  component: Preview,
});
