import {FaRegStar, FaStar} from "react-icons/fa6";
import {Typography} from "../../components/ui/Typography/Typography.tsx";
import {Button} from "../../components/ui/Button/button.tsx";
import {MAX_RATING_DISPLAY, TEXT_RATE, TEXT_YOUR_RATING } from "../../constants/text.ts";

type Props1 = {
    currentUserRating: number | null;
    openModal: () => void;
};
export const PreviewPersonalRating = ({openModal, currentUserRating}: Props1) => {
    const Icon = currentUserRating ? FaStar : FaRegStar;

    return (
        <div className="flex flex-col items-center">
            <Typography className="uppercase">{TEXT_YOUR_RATING}</Typography>
            <Button
                onClick={openModal}
                className="min-h-24 min-w-48 rounded-sm hover:bg-emerald-500 dark:hover:bg-emerald-600"
            >
                <div className="flex items-center gap-1.5">
                    <Icon className="fill-purple-600 text-4xl dark:fill-purple-400"/>
                    {currentUserRating ? (
                        <>
                            <Typography variant="h6">{currentUserRating}</Typography>
                            {MAX_RATING_DISPLAY}
                        </>
                    ) : (
                        <span>{TEXT_RATE}</span>
                    )}
                </div>
            </Button>
        </div>
    );
};