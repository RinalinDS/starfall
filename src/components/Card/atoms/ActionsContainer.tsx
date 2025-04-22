import {ReactNode} from "react";

export const ActionsContainer = ({children}: { children: ReactNode }) => (
    <div className="flex items-center justify-between">{children}</div>
);