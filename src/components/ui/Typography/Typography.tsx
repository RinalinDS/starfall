import React from 'react';
import s from './typography.module.css';
import clsx from 'clsx';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'button';

type TypographyProps<T extends React.ElementType> = {
  className?: string;
  variant?: Variant;
  as?: T;
};

type PolymorphicComponentProps<
  T extends React.ElementType,
  P,
> = React.PropsWithChildren<P> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P>;

const defaultElement = 'span';

export const Typography = <
  T extends React.ElementType = typeof defaultElement,
>({
  as,
  children,
  className,
  variant = 'body1',
  ...rest
}: PolymorphicComponentProps<T, TypographyProps<T>>) => {
  const Tag = as || defaultElement;
  const classNameComputed = clsx(
    s[variant],
    s.typography,
    className && className
  );
  return (
    <Tag {...rest} className={classNameComputed}>
      {children}
    </Tag>
  );
};
