import {Link} from "@tanstack/react-router";
import {WatchListButton} from "../../ui/Button/watchlist-button.tsx";
import {IoMdCheckmark} from "react-icons/io";
import {FaPlus} from "react-icons/fa6";

import {useCardContext} from "../useCardContext.tsx";

export const Image = () => {
    const {
        changeReadlistHandler,
        isBookInReadlist,
        book: {previewImage, id},
    } = useCardContext();
    return (
        <div className="relative w-full">
            <Link to="/preview/$bookId" params={{bookId: id}} className="w-full">
                <img
                    src={previewImage}
                    alt="Book preview"
                    className="max-h-72 w-full"
                />
            </Link>
            <WatchListButton
                onClick={changeReadlistHandler}
                isBookInWatchList={isBookInReadlist}
            >
                {isBookInReadlist ? <IoMdCheckmark/> : <FaPlus/>}
            </WatchListButton>
        </div>
    );
};