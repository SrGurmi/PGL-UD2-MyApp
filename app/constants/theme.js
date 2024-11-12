
import React, { createContext, useContext, useState } from 'react';

export const lightTheme = {
    background: '#FFFFFF',
    primary: '#3498db',
    text: '#333333',
    secondary: '#f3f3f3',
};

export const darkTheme = {
    background: '#121212',
    primary: '#BB86FC',
    secondary: '#333333',
    text: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.6)',
    headerBackground: '#1f1f1f',
};


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? darkTheme : lightTheme;

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

