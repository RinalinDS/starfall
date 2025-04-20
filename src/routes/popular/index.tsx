import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/popular/')({
  component: () => (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col text-center">
      Currently in development
    </div>
  ),
});
