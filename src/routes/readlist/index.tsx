import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/readlist/')({
  component: () => <div>hello there will be your readlist. Soon!</div>,
});
