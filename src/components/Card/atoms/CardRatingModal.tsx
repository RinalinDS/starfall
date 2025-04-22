import {RatingModal} from "../../RatingModal/rating-modal.tsx";

import {useCardContext} from "../useCardContext.tsx";

export const CardRatingModal = () => {
    const {
        book: {currentUserRating, title},
        closeModal,
        isOpen,
        updateUserRatingHandler,
        removeUserRatingHandler,
    } = useCardContext();

    if (!isOpen) return null;
    return (
        <RatingModal
            closeModal={closeModal}
            title={title}
            currentUserRating={currentUserRating}
            updateUserRatingHandler={updateUserRatingHandler}
            removeRateHandler={removeUserRatingHandler}
        />
    );
};