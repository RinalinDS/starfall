import { ComponentPropsWithoutRef } from 'react';

export const HeaderButton = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      {...props}
      className={`group flex cursor-pointer items-center gap-1.5 rounded border-none px-5 py-2.5 outline-none hover:bg-emerald-700 sm:px-3 sm:py-1.5 dark:hover:bg-emerald-600 ${className}`}
    >
      {children}
    </button>
  );
};
