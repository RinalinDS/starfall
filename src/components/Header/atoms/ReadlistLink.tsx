import {useBoundStore} from "../../../store/useBoundStore.ts";
import {Link} from "@tanstack/react-router";
import {BsFillBookmarkPlusFill} from "react-icons/bs";
import {Typography} from "../../ui/Typography/Typography.tsx";
import {HeaderButton} from "./HeaderButton.tsx";

export const ReadlistLink = () => {
    const readlistLength = useBoundStore((state) => state.readlist.length);
    return (
        <Link to="/readlist">
            <HeaderButton>
                <BsFillBookmarkPlusFill
                    className="fill-amber-600 text-4xl opacity-60 group-hover:opacity-100 dark:fill-amber-500"/>
                <Typography className="flex items-center gap-1 text-[1.6rem] group-hover:text-white">
                    Readlist
                    <Typography
                        variant="subtitle2"
                        className={`${readlistLength ? 'opacity-100' : 'opacity-0'} flex h-8 w-8 items-center justify-center rounded-[50%] bg-[rgb(245,197,24)] px-1.5 text-center text-[#181818]`}
                    >
                        {readlistLength}
                    </Typography>
                </Typography>
            </HeaderButton>
        </Link>
    );
};