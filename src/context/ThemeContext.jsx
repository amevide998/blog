"use client";

import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    let value = "light";
    if (typeof window !== "undefined") {
        value = localStorage.getItem("theme") || value;
        return value;
    }
    return value;
};

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}