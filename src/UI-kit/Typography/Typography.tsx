import React from 'react';
import s from './typography.module.css';

type Variant = 'body1' | 'body2' | 'italic' | 'bold' | 'error' | 'highlighted';

type TypographyProps = {
  className?: string;
  variant?: Variant;
};

type AsProp<T extends React.ElementType> = { as?: T };

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<
  T extends React.ElementType,
  P,
> = React.PropsWithChildren<P & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, P>>;

export const Typography = <T extends React.ElementType = 'span'>({
  as,
  children,
  className,
  variant = 'body1',
  ...rest
}: PolymorphicComponentProps<T, TypographyProps>) => {
  const Tag = as || 'span';
  const classNameComputed = `${s[variant]} ${className}`;
  return (
    <Tag {...rest} className={classNameComputed}>
      {children}
    </Tag>
  );
};
