import {Typography} from "../../ui/Typography/Typography.tsx";

import {useCardContext} from "../useCardContext.tsx";

export const Title = () => {
    const {
        book: {title},
    } = useCardContext();
    return (
        <Typography
            as="p"
            variant="nostyle"
            className="truncate text-[1.6rem] font-medium"
        >
            {title}
        </Typography>
    );
};