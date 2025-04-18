import { cloneElement } from 'react';

type ButtonProps = {
  isBookInWatchList: boolean;
  children: React.ReactElement;
} & JSX.IntrinsicElements['button'];
export const ButtonAbsolute = ({
  isBookInWatchList,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`absolute top-0 left-0 p-4 ${isBookInWatchList ? 'bg-yellow-400 text-black' : 'bg-black text-white'} cursor-pointer border-0 opacity-60 outline-none [clip-path:polygon(50%_0%,100%_0,100%_49%,100%_100%,100%_100%,50%_75%,0_100%,0_100%,0%_35%,0_0)] hover:opacity-100`}
    >
      {cloneElement(children, {
        className:
          `${children.props.className || ''} fill-current text-3xl relative bottom-1.5`.trim(),
      })}
    </button>
  );
};
