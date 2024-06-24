import { forwardRef } from 'react';
import s from './button.module.css';
import { clsx } from 'clsx';

// Polymorphic Button component,
// Only rule: don't take ref from props object, it only meant to be 2nd argument in render function
// Limitaiton of forwardRef.

type ButtonOwnProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
};

type ButtonProps<T extends React.ElementType> = React.PropsWithChildren<
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T> & 'ref'> &
    ButtonOwnProps<T> & { ref?: PolymorphicRef<T> }
>;

type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>
) => React.ReactNode | null;

const defaultElement = 'button';

export const Button: ButtonComponent = forwardRef(
  <T extends React.ElementType = typeof defaultElement>(
    { as, children, className, ...restProps }: ButtonProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const classNameMix = clsx(s.button, className && className);
    const Component = as || defaultElement;
    return (
      <Component {...restProps} className={classNameMix} ref={ref}>
        {children}
      </Component>
    );
  }
);
