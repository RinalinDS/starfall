import {LoginLink} from "./LoginLink.tsx";
import {ReadlistLink} from "./ReadlistLink.tsx";
import {ToggleThemeButton} from "./ToggleThemeButton.tsx";

export const HeaderControls = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <LoginLink/>
            <ReadlistLink/>
            <ToggleThemeButton/>
        </div>
    );
};