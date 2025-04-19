import React from 'react';
import s from './typography.module.css';
import clsx from 'clsx';

// TODO replace module CSS with tailwind object (?)

type Variant =
  | 'nostyle'
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
  // TODO мне кажется чтобы тейлвинд не лагал ему прямо тут нужен объект со стилями а не через модульный CSS
  const Tag = as || defaultElement;
  const classNameComputed = clsx(s[variant], s.typography);
  return (
    // ${className || ''} this because tailwind was lagging with clsx , maybe tw-merge would've helped ? didn't check. now it's working
    <Tag {...rest} className={`${classNameComputed} ${className || ''}`}>
      {children}
    </Tag>
  );
};
