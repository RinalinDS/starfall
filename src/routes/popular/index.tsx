import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/popular/')({
  component: () => <div className="m-auto">Currently in development</div>,
});
