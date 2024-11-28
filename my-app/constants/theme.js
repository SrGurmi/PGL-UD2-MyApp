
import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

const lightTheme = {
    background: '#FFFFFF',
    text: '#333333',
    primary: '#6200EE',
    secondary: '#03DAC6',
    overlay: 'rgba(0, 0, 0, 0.5)',
    headerBackground: '#BB86FC',
};

const darkTheme = {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#BB86FC',
    secondary: '#03DAC6',
    overlay: 'rgba(255, 255, 255, 0.1)',
    headerBackground: '#3700B3',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState(colorScheme === 'dark' ? darkTheme : lightTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
