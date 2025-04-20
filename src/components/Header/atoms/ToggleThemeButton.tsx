import {useTheme} from "../../../hooks/useTheme.tsx";
import {FaMoon} from "react-icons/fa6";
import {IoMdSunny} from "react-icons/io";
import {HeaderButton} from "./HeaderButton.tsx";

export const ToggleThemeButton = () => {
    const {theme, changeTheme} = useTheme();

    return (
        <HeaderButton onClick={changeTheme}>
            {theme === 'dark' ? (
                <FaMoon className="text-4xl opacity-60 group-hover:opacity-100"/>
            ) : (
                <IoMdSunny className="text-4xl opacity-60 group-hover:opacity-100"/>
            )}
        </HeaderButton>
    );
};