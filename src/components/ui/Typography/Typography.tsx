import clsx from 'clsx';
import React from 'react';

const variants = {
  nostyle: '',
  h1: ' text-[9.6rem] font-light tracking-tighter leading-tight',
  h2: ' text-[6rem] font-light tracking-tight leading-tight',
  h3: ' text-[4.8rem] font-normal leading-tight',
  h4: ' text-[3.6rem] font-normal tracking-wide leading-snug',
  h5: ' text-[2.4rem] font-normal leading-tight',
  h6: ' text-[2rem] font-medium tracking-wide leading-relaxed',
  subtitle1: ' text-[1.6rem] font-normal tracking-wide leading-loose',
  subtitle2: 'text-[1.4rem] font-medium tracking-wide leading-relaxed',
  body1: ' text-[1.6rem] font-normal tracking-wider leading-normal',
  body2: ' text-[1.4rem] font-normal tracking-wide leading-normal',
  caption: ' text-[1.2rem] font-normal tracking-wider leading-loose',
  button: ' text-[1.4rem] font-medium tracking-wider leading-loose uppercase',
  overline:
    ' text-[1.2rem] font-normal tracking-widest leading-loose uppercase',
};

type Variant = keyof typeof variants;

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
  const classNameComputed = clsx(variants[variant], className);
  return (
    <Tag {...rest} className={classNameComputed}>
      {children}
    </Tag>
  );
};
