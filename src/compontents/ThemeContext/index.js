import styles from 'src/variables.scss';
import {createContext} from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        foreground: styles.darkBlue,
        background: "#222222",
    },
};

const ThemeContext = createContext(themes.dark);

export default ThemeContext;