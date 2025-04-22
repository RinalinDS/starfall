import {Book} from "../../types/book.ts";
import {createContext, useContext} from "react";

export type CardContext = {
    book: Book;
    changeReadlistHandler: () => void;
    isBookInReadlist: boolean;
    ratingToDisplay: string;
    openModal: () => void;
    closeModal: () => void;
    isOpen: boolean;
    updateUserRatingHandler: (value: number) => void;
    removeUserRatingHandler: () => void;
};
export const CardContext = createContext<CardContext | null>(null);


export const useCardContext = () => {
    const context = useContext(CardContext);

    if (!context) {
        throw new Error('useCardContext must be used within a Card provider');
    }

    return context;
};