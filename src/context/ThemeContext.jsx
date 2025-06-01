"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem('theme');
        console.log("value",value);
        
        return value 
    }
};

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getLocalStorage());
    
    const themeToggle = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme',theme);
    },[theme])

    return (
        <ThemeContext.Provider value={{ theme, themeToggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
