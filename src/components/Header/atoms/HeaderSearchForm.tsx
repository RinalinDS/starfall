import {FormEvent} from "react";
import {Search} from "../../ui/Search/Search.tsx";

export const HeaderSearchForm = () => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const data = new FormData(formElement);
        // const search = data.get('search');
        const object: Record<string, string | File> = {};
        for (const [key, value] of data.entries()) {
            object[key] = value;
        }
    };
    return (
        <form className="hidden grow md:block" onSubmit={onSubmit}>
            <Search/>
        </form>
    );
};