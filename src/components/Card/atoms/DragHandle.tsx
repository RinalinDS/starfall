import {SyntheticListenerMap} from "@dnd-kit/core/dist/hooks/utilities";
import {RxDragHandleHorizontal} from "react-icons/rx";

import {useCardContext} from "../useCardContext.tsx";

export const DragHandle = (listeners: SyntheticListenerMap) => {
    const {
        book: {title},
    } = useCardContext();
    return (
        <div
            {...listeners}
            className={`p-2`}
            tabIndex={0}
            role="button"
            aria-label={`Drag ${title} book`}
        >
            <RxDragHandleHorizontal className="h-10 w-10 text-purple-600 dark:text-purple-400"/>
        </div>
    );
};