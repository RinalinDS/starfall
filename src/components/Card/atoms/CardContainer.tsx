import { ReactNode } from 'react';

export const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex max-w-[200px] flex-col overflow-hidden rounded-md bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-50`}
    >
      {children}
    </div>
  );
};
