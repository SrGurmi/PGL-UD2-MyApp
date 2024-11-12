import React from 'react';
import { ThemeProvider } from './constants/theme';
import { Slot } from 'expo-router';

const AppLayout = () => (
    <ThemeProvider>
        <Slot />
    </ThemeProvider>
);

export default AppLayout;



