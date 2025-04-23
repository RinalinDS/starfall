import {memo} from "react";
import {WatchListButton} from "../../components/ui/Button/watchlist-button.tsx";

type Props2 = {
    previewImage: string;
    image: string;
    isBookInReadlist: boolean;
    changeReadlistHandler: () => void;
};
export const PreviewImages = memo(
    ({
         previewImage,
         image,
         isBookInReadlist,
         changeReadlistHandler,
     }: Props2) => {
        return (
            <div className="relative flex w-full gap-1.5">
                {[previewImage, image].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={index === 0 ? 'preview image' : 'book image'}
                        className={`h-[clamp(24rem,25vw,48rem)] ${index === 0 ? 'w-1/4' : 'w-3/4'}`}
                        loading="lazy"
                    />
                ))}
                <WatchListButton
                    onClick={changeReadlistHandler}
                    isBookInReadlist={isBookInReadlist}
                    className="px-3 py-6"
                />
            </div>
        );
    }
);