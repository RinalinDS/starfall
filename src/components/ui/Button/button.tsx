import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
} from 'react';

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
  const classNameComputed = clsx(
    'inline-flex items-center justify-center cursor-pointer transition-colors duration-300 outline-none border-0',
    className
  );

  return (
    <Component {...restProps} className={classNameComputed} ref={ref}>
      {children}
    </Component>
  );
}) as ButtonComponent;

export { Button };
