import { useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";
import { themeContext } from "../context/appContext";

const INITIAL_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(INITIAL_THEME);

    useLayoutEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }, []);

    const value = useMemo(
        () => ({ theme, toggleTheme }),
        [theme, toggleTheme],
    );

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    );
}

export function useTheme() {
    return useContext(themeContext);
}
