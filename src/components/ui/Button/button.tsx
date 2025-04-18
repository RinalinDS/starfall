import {
  forwardRef,
  ElementType,
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from 'react';
import s from './button.module.css';
import { clsx } from 'clsx';

// TODO replace module css with tailwind object (?)

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
};

type ButtonProps<T extends ElementType> = PropsWithChildren<
  ButtonOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>
>;

type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: React.ForwardedRef<ComponentRef<T>> }
) => React.ReactElement;

type ComponentRef<T extends ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

const defaultElement = 'button';

const Button = forwardRef(function Button<
  T extends ElementType = typeof defaultElement,
>(
  { as, children, className, ...restProps }: ButtonProps<T>,
  ref: React.ForwardedRef<ComponentRef<T>>
) {
  const Component = as || defaultElement;
  const classNameComputed = clsx(s.button, className);

  return (
    <Component {...restProps} className={classNameComputed} ref={ref}>
      {children}
    </Component>
  );
}) as ButtonComponent;

export { Button };
