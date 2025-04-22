import {ReactNode} from "react";

export const ContentContainer = ({children}: { children: ReactNode }) => (
    <div className="flex w-full flex-col gap-5 px-3 py-6">{children}</div>
);